"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe, Smartphone, Camera, Network, Bug, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function FeaturesPage() {
  const playwrightFeatures = [
    {
      icon: Globe,
      title: "Multi-Browser Support",
      description: "Test across Chromium, Firefox, and WebKit with a single API",
      details: [
        "Consistent behavior across browsers",
        "Parallel browser execution",
        "Browser-specific configurations",
        "Headless and headed modes",
      ],
      color: "blue",
    },
    {
      icon: Smartphone,
      title: "Mobile Testing",
      description: "Native mobile testing capabilities for responsive applications",
      details: ["Device emulation", "Touch gestures support", "Viewport configuration", "Mobile-specific assertions"],
      color: "green",
    },
    {
      icon: Network,
      title: "Network Interception",
      description: "Powerful network mocking and monitoring capabilities",
      details: ["Request/response interception", "API mocking", "Network condition simulation", "HAR file generation"],
      color: "purple",
    },
    {
      icon: Camera,
      title: "Visual Testing",
      description: "Built-in screenshot and visual comparison tools",
      details: [
        "Full page screenshots",
        "Element screenshots",
        "Visual regression testing",
        "Cross-browser visual comparison",
      ],
      color: "orange",
    },
    {
      icon: Bug,
      title: "Advanced Debugging",
      description: "Comprehensive debugging and tracing capabilities",
      details: ["Playwright Inspector", "Trace viewer", "Step-by-step debugging", "Video recording"],
      color: "red",
    },
    {
      icon: Clock,
      title: "Auto-Wait",
      description: "Intelligent waiting eliminates flaky tests",
      details: ["Element visibility waiting", "Network idle detection", "Custom wait conditions", "Retry mechanisms"],
      color: "teal",
    },
  ]

  const seleniumLimitations = [
    {
      title: "Manual Wait Management",
      description: "Requires explicit waits and sleep statements",
      impact: "High maintenance overhead and flaky tests",
    },
    {
      title: "Limited API Testing",
      description: "No built-in API testing capabilities",
      impact: "Need separate tools like RestAssured",
    },
    {
      title: "Complex Setup",
      description: "Browser driver management and configuration",
      impact: "Time-consuming initial setup",
    },
    {
      title: "Poor Debugging",
      description: "Limited debugging and tracing tools",
      impact: "Difficult to troubleshoot test failures",
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
            Advanced <span className="text-green-400">Features</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the powerful features that make Playwright the superior choice for modern web testing.
          </p>
        </motion.div>

        {/* Playwright Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            <span className="text-green-400">Playwright</span> Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {playwrightFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg bg-${feature.color}-600/20 mr-4`}>
                        <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                        <Badge
                          className={`bg-${feature.color}-600/20 text-${feature.color}-400 border-${feature.color}-600/30`}
                        >
                          Advanced
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <div className={`w-2 h-2 rounded-full bg-${feature.color}-400 mr-3`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Selenium Limitations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            <span className="text-orange-400">Selenium</span> Limitations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seleniumLimitations.map((limitation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-orange-900/20 backdrop-blur-sm border-orange-500/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{limitation.title}</h3>
                    <p className="text-gray-300 mb-4">{limitation.description}</p>
                    <div className="p-3 bg-red-900/30 rounded-lg border border-red-500/30">
                      <p className="text-red-400 text-sm font-medium">Impact: {limitation.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-6xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Feature <span className="text-green-400">Comparison</span>
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="pb-4 text-gray-300">Feature</th>
                      <th className="pb-4 text-green-400">Playwright</th>
                      <th className="pb-4 text-orange-400">Selenium + RestAssured</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-4">
                    {[
                      ["API Testing", "✅ Built-in", "❌ Separate tool required"],
                      ["Auto-wait", "✅ Intelligent waiting", "❌ Manual waits"],
                      ["Mobile Testing", "✅ Native support", "❌ Limited support"],
                      ["Visual Testing", "✅ Built-in screenshots", "❌ Third-party tools"],
                      ["Network Mocking", "✅ Advanced interception", "❌ Complex setup"],
                      ["Debugging", "✅ Comprehensive tools", "❌ Basic capabilities"],
                      ["Setup Time", "✅ < 5 minutes", "❌ 30+ minutes"],
                      ["Maintenance", "✅ Low overhead", "❌ High maintenance"],
                    ].map(([feature, playwright, selenium], index) => (
                      <motion.tr
                        key={index}
                        className="border-b border-gray-800"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <td className="py-3 text-white font-medium">{feature}</td>
                        <td className="py-3 text-green-400">{playwright}</td>
                        <td className="py-3 text-orange-400">{selenium}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/performance">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              Performance Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
