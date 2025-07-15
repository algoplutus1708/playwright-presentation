"use client"

import { motion } from "framer-motion"
import { CheckCircle, XCircle, ArrowRight, Clock, Code, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function ComparisonPage() {
  const comparisonData = [
    {
      category: "Setup & Configuration",
      icon: Settings,
      playwright: {
        score: 9,
        points: [
          "Single npm install command",
          "Auto-downloads browsers",
          "Zero configuration for basic usage",
          "Built-in TypeScript support",
        ],
        code: `npm init playwright@latest
# That's it! Ready to test.`,
      },
      selenium: {
        score: 4,
        points: [
          "Multiple dependencies required",
          "Manual browser driver management",
          "Complex configuration files",
          "Separate API testing setup",
        ],
        code: `// Multiple dependencies needed
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-java</artifactId>
</dependency>
<dependency>
  <groupId>io.rest-assured</groupId>
  <artifactId>rest-assured</artifactId>
</dependency>
// + WebDriver management
// + TestNG/JUnit setup`,
      },
    },
    {
      category: "Test Execution Speed",
      icon: Clock,
      playwright: {
        score: 9,
        points: [
          "Parallel execution by default",
          "Auto-wait eliminates sleep statements",
          "Faster browser communication",
          "Built-in retry mechanisms",
        ],
        code: `// Runs in parallel automatically
test.describe.configure({ mode: 'parallel' });

// Auto-wait - no explicit waits needed
await page.click('button');
await expect(page.locator('.result')).toBeVisible();`,
      },
      selenium: {
        score: 5,
        points: [
          "Manual parallel configuration",
          "Explicit waits required everywhere",
          "Slower WebDriver protocol",
          "Frequent flaky test issues",
        ],
        code: `// Manual waits everywhere
WebDriverWait wait = new WebDriverWait(driver, 10);
wait.until(ExpectedConditions.elementToBeClickable(button));
button.click();
wait.until(ExpectedConditions.visibilityOf(result));`,
      },
    },
    {
      category: "Code Maintainability",
      icon: Code,
      playwright: {
        score: 9,
        points: [
          "Unified API for UI and API testing",
          "Modern async/await syntax",
          "Built-in assertions",
          "Excellent debugging tools",
        ],
        code: `// UI and API testing in one place
await page.goto('/login');
await page.fill('[name="username"]', 'user');
await page.click('button[type="submit"]');

// API testing in same test
const response = await page.request.post('/api/login', {
  data: { username: 'user', password: 'pass' }
});
expect(response.status()).toBe(200);`,
      },
      selenium: {
        score: 4,
        points: [
          "Separate tools for UI and API",
          "Verbose syntax",
          "Manual assertion libraries",
          "Limited debugging capabilities",
        ],
        code: `// UI Testing (Selenium)
driver.findElement(By.name("username")).sendKeys("user");
driver.findElement(By.cssSelector("button[type='submit']")).click();

// API Testing (RestAssured) - separate test
given()
  .contentType(ContentType.JSON)
  .body("{\\"username\\":\\"user\\",\\"password\\":\\"pass\\"}")
.when()
  .post("/api/login")
.then()
  .statusCode(200);`,
      },
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
            Detailed <span className="text-green-400">Comparison</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Side-by-side analysis of key testing aspects where Playwright excels over the traditional Selenium +
            RestAssured combination.
          </p>
        </motion.div>

        <div className="space-y-16">
          {comparisonData.map((comparison, index) => (
            <motion.div
              key={comparison.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-8">
                <comparison.icon className="w-8 h-8 text-green-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">{comparison.category}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Playwright */}
                <Card className="bg-green-900/20 backdrop-blur-sm border-green-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-white">
                      <span className="flex items-center">
                        <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                        Playwright
                      </span>
                      <Badge className="bg-green-600 text-white">Score: {comparison.playwright.score}/10</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-green-400 font-semibold mb-2">Advantages:</h4>
                        <ul className="space-y-1 text-gray-300">
                          {comparison.playwright.points.map((point, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {point}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-green-400 font-semibold mb-2">Code Example:</h4>
                        <motion.pre
                          className="bg-black/50 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <code>{comparison.playwright.code}</code>
                        </motion.pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Selenium + RestAssured */}
                <Card className="bg-orange-900/20 backdrop-blur-sm border-orange-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-white">
                      <span className="flex items-center">
                        <XCircle className="w-6 h-6 text-orange-400 mr-2" />
                        Selenium + RestAssured
                      </span>
                      <Badge className="bg-orange-600 text-white">Score: {comparison.selenium.score}/10</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-orange-400 font-semibold mb-2">Limitations:</h4>
                        <ul className="space-y-1 text-gray-300">
                          {comparison.selenium.points.map((point, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start"
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <XCircle className="w-4 h-4 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                              {point}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-orange-400 font-semibold mb-2">Code Example:</h4>
                        <motion.pre
                          className="bg-black/50 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <code>{comparison.selenium.code}</code>
                        </motion.pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                The Verdict: <span className="text-green-400">Playwright Wins</span>
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Playwright consistently outperforms Selenium + RestAssured across all key metrics: setup simplicity,
                execution speed, and code maintainability. The unified approach reduces complexity while improving
                reliability and developer experience.
              </p>
              <Link href="/examples">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  See Code Examples
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
