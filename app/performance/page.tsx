"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, TrendingUp, BarChart3, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function PerformancePage() {
  const performanceMetrics = [
    {
      metric: "Test Execution Speed",
      playwright: 85,
      selenium: 45,
      description: "Average test execution time comparison",
    },
    {
      metric: "Setup Time",
      playwright: 95,
      selenium: 25,
      description: "Time to get first test running",
    },
    {
      metric: "Reliability Score",
      playwright: 92,
      selenium: 60,
      description: "Test stability and consistency",
    },
    {
      metric: "Developer Productivity",
      playwright: 88,
      selenium: 50,
      description: "Code writing and debugging efficiency",
    },
    {
      metric: "Maintenance Overhead",
      playwright: 90,
      selenium: 35,
      description: "Effort required to maintain tests (inverted)",
    },
  ]

  const benchmarkData = [
    {
      scenario: "Login Flow Test",
      playwright: "2.3s",
      selenium: "8.7s",
      improvement: "73% faster",
    },
    {
      scenario: "Form Submission",
      playwright: "1.8s",
      selenium: "6.2s",
      improvement: "71% faster",
    },
    {
      scenario: "API + UI Validation",
      playwright: "3.1s",
      selenium: "12.4s",
      improvement: "75% faster",
    },
    {
      scenario: "Multi-page Navigation",
      playwright: "4.2s",
      selenium: "15.8s",
      improvement: "73% faster",
    },
  ]

  const realWorldStats = [
    {
      icon: Clock,
      title: "Development Time",
      playwright: "2 weeks",
      selenium: "6 weeks",
      description: "Time to build comprehensive test suite",
    },
    {
      icon: Gauge,
      title: "Test Flakiness",
      playwright: "< 2%",
      selenium: "15-25%",
      description: "Percentage of unreliable test runs",
    },
    {
      icon: TrendingUp,
      title: "Team Productivity",
      playwright: "+65%",
      selenium: "Baseline",
      description: "Improvement in testing efficiency",
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
            Performance <span className="text-green-400">Analysis</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive performance comparison showing why Playwright delivers superior speed, reliability, and
            developer productivity.
          </p>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key Performance <span className="text-green-400">Metrics</span>
          </h2>

          <div className="space-y-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-white">{metric.metric}</h3>
                      <p className="text-gray-400 text-sm">{metric.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-green-400 font-medium">Playwright</span>
                          <span className="text-green-400 font-bold">{metric.playwright}%</span>
                        </div>
                        <Progress value={metric.playwright} className="h-3 bg-gray-800">
                          <div
                            className="h-full bg-green-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${metric.playwright}%` }}
                          />
                        </Progress>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-orange-400 font-medium">Selenium + RestAssured</span>
                          <span className="text-orange-400 font-bold">{metric.selenium}%</span>
                        </div>
                        <Progress value={metric.selenium} className="h-3 bg-gray-800">
                          <div
                            className="h-full bg-orange-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${metric.selenium}%` }}
                          />
                        </Progress>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benchmark Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Real-World <span className="text-green-400">Benchmarks</span>
          </h2>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left pb-4 text-gray-300">Test Scenario</th>
                      <th className="text-center pb-4 text-green-400">Playwright</th>
                      <th className="text-center pb-4 text-orange-400">Selenium + RestAssured</th>
                      <th className="text-center pb-4 text-blue-400">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benchmarkData.map((benchmark, index) => (
                      <motion.tr
                        key={index}
                        className="border-b border-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <td className="py-4 text-white font-medium">{benchmark.scenario}</td>
                        <td className="py-4 text-center text-green-400 font-bold">{benchmark.playwright}</td>
                        <td className="py-4 text-center text-orange-400 font-bold">{benchmark.selenium}</td>
                        <td className="py-4 text-center text-blue-400 font-bold">{benchmark.improvement}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Real-World Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Real-World <span className="text-green-400">Impact</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {realWorldStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-center h-full">
                  <CardContent className="p-6">
                    <stat.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{stat.title}</h3>
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-green-400 mb-1">{stat.playwright}</div>
                      <div className="text-sm text-gray-400">vs {stat.selenium}</div>
                    </div>
                    <p className="text-gray-400 text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-sm border-green-500/30 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <BarChart3 className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Performance <span className="text-green-400">Summary</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold text-green-400">73%</div>
                  <div className="text-gray-300">Faster Execution</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">65%</div>
                  <div className="text-gray-300">Higher Productivity</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">90%</div>
                  <div className="text-gray-300">Less Maintenance</div>
                </div>
              </div>
              <p className="text-gray-300 text-lg">
                Playwright consistently outperforms Selenium + RestAssured across all key performance indicators,
                delivering faster tests, higher reliability, and improved developer experience.
              </p>
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
          <Link href="/conclusion">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              View Conclusion
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
