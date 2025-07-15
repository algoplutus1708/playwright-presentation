"use client"

import { motion } from "framer-motion"
import { CheckCircle, TrendingUp, Users, Zap, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function ConclusionPage() {
  const benefits = [
    {
      icon: Zap,
      title: "3x Faster Development",
      description: "Unified testing approach reduces setup time and maintenance overhead significantly.",
    },
    {
      icon: TrendingUp,
      title: "Higher Test Reliability",
      description: "Built-in auto-wait and retry mechanisms eliminate common flaky test issues.",
    },
    {
      icon: Users,
      title: "Better Developer Experience",
      description: "Modern API, excellent debugging tools, and comprehensive documentation.",
    },
  ]

  const migrationSteps = [
    {
      step: 1,
      title: "Assessment",
      description: "Evaluate current test suite and identify migration priorities",
    },
    {
      step: 2,
      title: "Setup",
      description: "Install Playwright and configure basic test structure",
    },
    {
      step: 3,
      title: "Migration",
      description: "Gradually migrate tests, starting with critical user journeys",
    },
    {
      step: 4,
      title: "Optimization",
      description: "Leverage Playwright's advanced features for better test coverage",
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
            Why Choose <span className="text-green-400">Playwright</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The evidence is clear: Playwright offers a superior testing experience that modernizes and simplifies your
            testing workflow.
          </p>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Proven <span className="text-green-400">Benefits</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <benefit.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-6xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Final <span className="text-green-400">Comparison</span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                    <h3 className="text-xl font-semibold text-white">Playwright Advantages</h3>
                  </div>

                  {[
                    "Single tool for API + UI testing",
                    "50% less code to maintain",
                    "3x faster test execution",
                    "Built-in auto-wait capabilities",
                    "Superior debugging experience",
                    "Modern TypeScript/JavaScript API",
                    "Comprehensive browser support",
                    "Active development and community",
                  ].map((advantage, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {advantage}
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-orange-400 mr-2" />
                    <h3 className="text-xl font-semibold text-white">Selenium + RestAssured Limitations</h3>
                  </div>

                  {[
                    "Two separate tools to maintain",
                    "Complex setup and configuration",
                    "Slower test execution",
                    "Manual wait management required",
                    "Limited debugging capabilities",
                    "Verbose, outdated syntax",
                    "Browser compatibility issues",
                    "Higher maintenance overhead",
                  ].map((limitation, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-gray-400"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-4 h-4 rounded-full bg-orange-400 mr-3 flex-shrink-0" />
                      {limitation}
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Migration Path */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Migration <span className="text-green-400">Roadmap</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full">
                  <CardContent className="p-6 text-center">
                    <Badge className="bg-green-600 text-white mb-4">Step {step.step}</Badge>
                    <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </CardContent>
                </Card>

                {index < migrationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-green-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-sm border-green-500/30 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to <span className="text-green-400">Modernize</span> Your Testing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who have already made the switch to Playwright for faster, more reliable,
                and maintainable tests.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://swastick-playwright.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Get Started with Playwright
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg bg-transparent"
                  >
                    Back to Home
                  </Button>
                </Link>
              </div>

              <div className="mt-8 text-sm text-gray-400">
                <p>
                  Learn more at <span className="text-green-400">playwright.dev</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
