"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, XCircle, Code2, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function OverviewPage() {
  const tools = [
    {
      name: "Playwright",
      color: "green",
      features: [
        "Unified API & UI Testing",
        "Multi-browser Support",
        "Auto-wait Capabilities",
        "Network Interception",
        "Built-in Assertions",
        "Parallel Execution",
      ],
      pros: [
        "Single tool for all testing needs",
        "Modern, developer-friendly API",
        "Excellent debugging tools",
        "Fast and reliable",
      ],
      cons: ["Newer ecosystem", "Learning curve for Selenium users"],
    },
    {
      name: "Selenium + RestAssured",
      color: "orange",
      features: [
        "Separate UI Testing (Selenium)",
        "Separate API Testing (RestAssured)",
        "Java-focused ecosystem",
        "WebDriver Protocol",
        "Manual waits required",
        "Complex setup",
      ],
      pros: ["Mature ecosystem", "Large community", "Multiple language support"],
      cons: [
        "Two separate tools to maintain",
        "Complex configuration",
        "Slower execution",
        "Flaky tests common",
        "Limited debugging capabilities",
      ],
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
            Testing Tools <span className="text-green-400">Overview</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Understanding the fundamental differences between modern unified testing and traditional separate tool
            approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`w-4 h-4 rounded-full bg-${tool.color}-400 mr-3`} />
                    <h2 className="text-2xl font-bold text-white">{tool.name}</h2>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-300 mb-3">Key Features</h3>
                    <div className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-${tool.color}-400 mr-3`} />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Advantages
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        {tool.pros.map((pro, idx) => (
                          <li key={idx}>• {pro}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-red-400 font-semibold mb-2 flex items-center">
                        <XCircle className="w-4 h-4 mr-2" />
                        Limitations
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-400">
                        {tool.cons.map((con, idx) => (
                          <li key={idx}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why <span className="text-green-400">Playwright</span> Stands Out
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Unified Testing",
                description:
                  "Single tool for API and UI testing eliminates context switching and reduces maintenance overhead.",
              },
              {
                icon: Zap,
                title: "Superior Performance",
                description:
                  "Built-in auto-wait, parallel execution, and optimized browser communication deliver faster, more reliable tests.",
              },
              {
                icon: Shield,
                title: "Modern Architecture",
                description:
                  "Designed for modern web apps with features like network interception, mobile testing, and visual comparisons.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <item.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/comparison">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              Detailed Comparison
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
