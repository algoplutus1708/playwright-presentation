"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CheckCircle, Copy, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function ExamplesPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const examples = [
    {
      title: "Login Test with API Validation",
      description: "Complete login flow testing both UI interaction and API response validation",
      playwright: `import { test, expect } from '@playwright/test';

test('login with API validation', async ({ page }) => {
  // Navigate to login page
  await page.goto('/login');
  
  // Fill login form
  await page.fill('[data-testid="username"]', 'testuser');
  await page.fill('[data-testid="password"]', 'password123');
  
  // Intercept API call
  const responsePromise = page.waitForResponse('/api/auth/login');
  
  // Submit form
  await page.click('[data-testid="login-button"]');
  
  // Validate API response
  const response = await responsePromise;
  expect(response.status()).toBe(200);
  
  const responseBody = await response.json();
  expect(responseBody.token).toBeDefined();
  
  // Validate UI state
  await expect(page.locator('[data-testid="welcome-message"]')).toBeVisible();
  await expect(page).toHaveURL('/dashboard');
});`,
      selenium: `// UI Test (Selenium)
@Test
public void testLoginUI() {
    driver.get("http://localhost:3000/login");
    
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    
    WebElement username = wait.until(
        ExpectedConditions.presenceOfElementLocated(
            By.cssSelector("[data-testid='username']")
        )
    );
    username.sendKeys("testuser");
    
    driver.findElement(By.cssSelector("[data-testid='password']"))
          .sendKeys("password123");
    
    driver.findElement(By.cssSelector("[data-testid='login-button']"))
          .click();
    
    wait.until(ExpectedConditions.presenceOfElementLocated(
        By.cssSelector("[data-testid='welcome-message']")
    ));
    
    assertEquals("http://localhost:3000/dashboard", driver.getCurrentUrl());
}

// Separate API Test (RestAssured)
@Test
public void testLoginAPI() {
    given()
        .contentType(ContentType.JSON)
        .body("{\\"username\\":\\"testuser\\",\\"password\\":\\"password123\\"}")
    .when()
        .post("/api/auth/login")
    .then()
        .statusCode(200)
        .body("token", notNullValue());
}`,
    },
    {
      title: "E-commerce Product Search",
      description: "Search functionality with API data validation and UI verification",
      playwright: `import { test, expect } from '@playwright/test';

test('product search with API validation', async ({ page }) => {
  await page.goto('/products');
  
  // Search for products
  await page.fill('[data-testid="search-input"]', 'laptop');
  
  // Wait for API call and UI update
  const [response] = await Promise.all([
    page.waitForResponse('/api/products/search*'),
    page.press('[data-testid="search-input"]', 'Enter')
  ]);
  
  // Validate API response
  expect(response.status()).toBe(200);
  const products = await response.json();
  expect(products.length).toBeGreaterThan(0);
  
  // Validate UI shows correct results
  await expect(page.locator('[data-testid="product-card"]')).toHaveCount(products.length);
  
  // Verify first product details
  const firstProduct = page.locator('[data-testid="product-card"]').first();
  await expect(firstProduct.locator('h3')).toContainText('laptop', { ignoreCase: true });
  
  // Test pagination
  if (products.length > 10) {
    await page.click('[data-testid="next-page"]');
    await expect(page.locator('[data-testid="page-indicator"]')).toContainText('Page 2');
  }
});`,
      selenium: `// UI Test (Selenium)
@Test
public void testProductSearchUI() {
    driver.get("http://localhost:3000/products");
    
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    
    WebElement searchInput = driver.findElement(
        By.cssSelector("[data-testid='search-input']")
    );
    searchInput.sendKeys("laptop");
    searchInput.sendKeys(Keys.ENTER);
    
    // Manual wait for results
    Thread.sleep(2000);
    
    List<WebElement> products = wait.until(
        ExpectedConditions.presenceOfAllElementsLocatedBy(
            By.cssSelector("[data-testid='product-card']")
        )
    );
    
    assertTrue(products.size() > 0);
    
    WebElement firstProduct = products.get(0);
    String productTitle = firstProduct.findElement(By.tagName("h3")).getText();
    assertTrue(productTitle.toLowerCase().contains("laptop"));
}

// Separate API Test (RestAssured)
@Test
public void testProductSearchAPI() {
    Response response = given()
        .queryParam("q", "laptop")
    .when()
        .get("/api/products/search")
    .then()
        .statusCode(200)
        .extract().response();
    
    JsonPath jsonPath = response.jsonPath();
    List<Object> products = jsonPath.getList("$");
    assertTrue(products.size() > 0);
}`,
    },
    {
      title: "Form Submission with File Upload",
      description: "Complex form handling with file uploads and validation",
      playwright: `import { test, expect } from '@playwright/test';
import path from 'path';

test('form submission with file upload', async ({ page }) => {
  await page.goto('/contact');
  
  // Fill form fields
  await page.fill('[name="name"]', 'John Doe');
  await page.fill('[name="email"]', 'john@example.com');
  await page.fill('[name="message"]', 'Test message');
  
  // Upload file
  const fileInput = page.locator('[name="attachment"]');
  await fileInput.setInputFiles(path.join(__dirname, 'test-file.pdf'));
  
  // Monitor network request
  const [response] = await Promise.all([
    page.waitForResponse('/api/contact'),
    page.click('[type="submit"]')
  ]);
  
  // Validate API response
  expect(response.status()).toBe(201);
  const result = await response.json();
  expect(result.id).toBeDefined();
  expect(result.status).toBe('submitted');
  
  // Validate success message
  await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
  await expect(page.locator('[data-testid="success-message"]'))
    .toContainText('Thank you for your message');
  
  // Validate form reset
  await expect(page.locator('[name="name"]')).toHaveValue('');
  await expect(page.locator('[name="email"]')).toHaveValue('');
});`,
      selenium: `// UI Test (Selenium)
@Test
public void testFormSubmissionUI() {
    driver.get("http://localhost:3000/contact");
    
    driver.findElement(By.name("name")).sendKeys("John Doe");
    driver.findElement(By.name("email")).sendKeys("john@example.com");
    driver.findElement(By.name("message")).sendKeys("Test message");
    
    // File upload
    WebElement fileInput = driver.findElement(By.name("attachment"));
    fileInput.sendKeys("/path/to/test-file.pdf");
    
    driver.findElement(By.cssSelector("[type='submit']")).click();
    
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    WebElement successMessage = wait.until(
        ExpectedConditions.visibilityOfElementLocated(
            By.cssSelector("[data-testid='success-message']")
        )
    );
    
    assertTrue(successMessage.getText().contains("Thank you"));
    
    // Check form reset
    assertEquals("", driver.findElement(By.name("name")).getAttribute("value"));
}

// Separate API Test (RestAssured) - Complex multipart
@Test
public void testFormSubmissionAPI() {
    given()
        .multiPart("name", "John Doe")
        .multiPart("email", "john@example.com")
        .multiPart("message", "Test message")
        .multiPart("attachment", new File("/path/to/test-file.pdf"))
    .when()
        .post("/api/contact")
    .then()
        .statusCode(201)
        .body("id", notNullValue())
        .body("status", equalTo("submitted"));
}`,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Code <span className="text-green-400">Examples</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world testing scenarios comparing Playwright's unified approach with the traditional Selenium +
            RestAssured combination.
          </p>
        </motion.div>

        <div className="space-y-12">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    {example.title}
                  </CardTitle>
                  <p className="text-gray-400">{example.description}</p>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="playwright" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-black/30">
                      <TabsTrigger value="playwright" className="data-[state=active]:bg-green-600">
                        Playwright (Unified)
                      </TabsTrigger>
                      <TabsTrigger value="selenium" className="data-[state=active]:bg-orange-600">
                        Selenium + RestAssured
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="playwright" className="mt-4">
                      <div className="relative">
                        <Button
                          size="sm"
                          variant="outline"
                          className="absolute top-2 right-2 z-10 bg-transparent"
                          onClick={() => copyToClipboard(example.playwright, `playwright-${index}`)}
                        >
                          {copiedCode === `playwright-${index}` ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                        <pre className="bg-black/50 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto max-h-96">
                          <code>{example.playwright}</code>
                        </pre>
                      </div>
                      <div className="mt-4 p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                        <h4 className="text-green-400 font-semibold mb-2">Playwright Advantages:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Single test file for both UI and API testing</li>
                          <li>• Built-in network interception and response validation</li>
                          <li>• Auto-wait eliminates manual delays</li>
                          <li>• Modern async/await syntax</li>
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="selenium" className="mt-4">
                      <div className="relative">
                        <Button
                          size="sm"
                          variant="outline"
                          className="absolute top-2 right-2 z-10 bg-transparent"
                          onClick={() => copyToClipboard(example.selenium, `selenium-${index}`)}
                        >
                          {copiedCode === `selenium-${index}` ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                        <pre className="bg-black/50 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto max-h-96">
                          <code>{example.selenium}</code>
                        </pre>
                      </div>
                      <div className="mt-4 p-4 bg-orange-900/20 rounded-lg border border-orange-500/30">
                        <h4 className="text-orange-400 font-semibold mb-2">Selenium + RestAssured Limitations:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Requires separate test files for UI and API</li>
                          <li>• Manual wait management and explicit delays</li>
                          <li>• Verbose syntax and complex setup</li>
                          <li>• No built-in network interception</li>
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Code Comparison Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Playwright Benefits:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• ~50% less code required</li>
                    <li>• Single test file for complete scenarios</li>
                    <li>• Built-in best practices</li>
                    <li>• Superior debugging experience</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-orange-400 font-semibold mb-3">Selenium + RestAssured Issues:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Requires 2x more code</li>
                    <li>• Separate test maintenance</li>
                    <li>• Manual configuration overhead</li>
                    <li>• Higher chance of flaky tests</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/conclusion">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    View Conclusion
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
