import { GoogleGenerativeAI } from "@google/generative-ai"
import { type NextRequest, NextResponse } from "next/server"

// IMPORTANT: Replace "YOUR_VALID_GEMINI_API_KEY" with your actual, valid API key from Google AI Studio.
// The key "AIzaSyD18hS9v9Qp8bHy-xATy-PZzl_nOFhLsm8" is not valid and will cause errors.
const genAI = new GoogleGenerativeAI({
  apiKey: "YOUR_VALID_GEMINI_API_KEY", // Replace this with your valid API key
  apiVersion: "v1", // Ensure we use v1 API for gemini-pro
})

const SWASTICK_INFO = `
You are Trisha, a friendly AI assistant that provides information about Swastick, a software developer and testing enthusiast. Here's what you know about Swastick:

PERSONAL INFORMATION:
- Name: Swastick
- LinkedIn: https://www.linkedin.com/in/swastick-66a91924a/
- Currently working as an intern with the Payment Resiliency Team
- Passionate about software testing and automation

TECHNICAL EXPERTISE:
- Playwright automation testing (as evidenced by this presentation)
- Web testing frameworks and tools
- API testing and UI testing
- Modern testing practices and methodologies
- Software development and quality assurance
- Backend Development (making backend problems and proficient backend servers)
- Solving DSA problems and mathematics problems

CURRENT WORK:
- Created this comprehensive Playwright vs Selenium presentation
- Working on testing automation projects
- Learning and implementing modern testing frameworks
- Contributing to payment system resilience and testing

ACHIEVEMENTS:
- Built a detailed comparison analysis of testing frameworks
- Created interactive presentations with modern web technologies
- Developed expertise in Playwright automation
- Contributing to team knowledge sharing through presentations

INTERESTS:
- Modern testing frameworks (Playwright, Selenium)
- Test automation and quality assurance
- Web development technologies
- Software engineering best practices
- Payment systems and resilience testing

Please answer questions about Swastick in a friendly, professional manner as Trisha. If asked about specific details not provided here, you can mention that more information is available on his LinkedIn profile. Keep responses concise but informative.
`

// Fallback responses for when API is not available
const fallbackResponses: { [key: string]: string } = {
  default:
    "Hi! I'm Trisha, and I'm here to tell you about Swastick. He's a talented software developer currently interning with the Payment Resiliency Team. He's passionate about testing automation and created this amazing Playwright presentation!",
  skills:
    "Swastick is proficient in Backend Development, excels at tackling backend challenges, and is adept at building and managing efficient backend servers. He also demonstrates strong abilities in solving Data Structures and Algorithms (DSA) problems and has expertise in mathematics.", // Updated this line
  work: "Swastick is currently working as an intern with the Payment Resiliency Team. He's been working on testing automation projects and learning modern testing frameworks like Playwright.",
  contact:
    "You can connect with Swastick on LinkedIn at https://www.linkedin.com/in/swastick-66a91924a/. He's always open to discussing testing automation and software development!",
  presentation:
    "This presentation showcases Swastick's deep understanding of testing frameworks. He created this comprehensive comparison between Playwright and Selenium + RestAssured to demonstrate the advantages of modern testing tools.",
}

function getRelevantFallback(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("skill") || lowerMessage.includes("technical") || lowerMessage.includes("expertise")) {
    return fallbackResponses.skills
  }
  if (lowerMessage.includes("work") || lowerMessage.includes("job") || lowerMessage.includes("intern")) {
    return fallbackResponses.work
  }
  if (lowerMessage.includes("contact") || lowerMessage.includes("linkedin") || lowerMessage.includes("connect")) {
    return fallbackResponses.contact
  }
  if (
    lowerMessage.includes("presentation") ||
    lowerMessage.includes("playwright") ||
    lowerMessage.includes("project")
  ) {
    return fallbackResponses.presentation
  }

  return fallbackResponses.default
}

export async function POST(req: NextRequest) {
  const { message } = await req.json()
  try {
    // Try different model names that might be available
    const modelNames = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-pro"]

    for (const modelName of modelNames) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName })

        const prompt = `${SWASTICK_INFO}

User question: ${message}

Please provide a helpful response about Swastick based on the information provided. Keep it conversational and professional. Remember, you are Trisha.`

        const result = await model.generateContent(prompt)
        const response = await result.response
        const text = response.text()

        return NextResponse.json({ response: text })
      } catch (modelError) {
        console.log(`Model ${modelName} failed, trying next...`)
        continue
      }
    }

    // If all models fail, use fallback
    return NextResponse.json({ response: getRelevantFallback(message) })
  } catch (error) {
    console.error("Gemini error:", error)

    // graceful fallback
    const fallbackResponse = getRelevantFallback(message) // reuse the message we already read
    return NextResponse.json({ response: fallbackResponse })
  }
}
