"use client"

import { motion } from "framer-motion"
import { Heart, Users, Award, Star, Sparkles, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function ThankYouPage() {
  const achievements = [
    {
      icon: Trophy,
      title: "Comprehensive Analysis",
      description: "Detailed comparison of testing frameworks",
    },
    {
      icon: Star,
      title: "Real-World Examples",
      description: "Practical code demonstrations and benchmarks",
    },
    {
      icon: Award,
      title: "Performance Insights",
      description: "Data-driven performance analysis",
    },
    {
      icon: Sparkles,
      title: "Modern Presentation",
      description: "Interactive and engaging presentation format",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      <div className="container mx-auto px-4 py-20">
        {/* Main Thank You Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <Heart className="w-24 h-24 text-red-400 mx-auto mb-6" />
          </motion.div>

          <h1 className="text-6xl font-bold text-white mb-6">
            <span className="text-green-400">Thank You!</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-2xl text-gray-300 mb-4">
              This presentation marks the culmination of an incredible learning journey
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Exploring modern testing frameworks and their impact on software development practices
            </p>
          </motion.div>
        </motion.div>

        {/* Special Thank You Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <Card className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border-purple-500/30 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <Users className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">Special Thanks</h2>
              <div className="text-2xl text-purple-300 mb-4 font-semibold">
                "Thank You Payment Resiliency Team for making my Internship Priceless"
              </div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Your guidance, mentorship, and support have been instrumental in making this internship an invaluable
                learning experience. The knowledge gained and skills developed will shape my career in software testing
                and development.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Presentation Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Presentation <span className="text-green-400">Highlights</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full">
                  <CardContent className="p-6 text-center">
                    <achievement.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-3">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Key <span className="text-green-400">Takeaways</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-4">What We Learned</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      Playwright offers unified API and UI testing
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      Modern testing requires modern tools
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      Performance and reliability are crucial
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      Developer experience matters
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">Future Impact</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <Sparkles className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      Improved testing strategies
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      Better software quality
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      Enhanced team productivity
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      Modern development practices
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-sm border-green-500/30 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">The Journey Continues...</h2>
              <p className="text-gray-300 mb-6 text-lg">
                This presentation represents not just a comparison of testing tools, but a step forward in understanding
                modern software development practices. The knowledge gained here will continue to evolve and impact
                future projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://swastick-playwright.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
                    Explore Playwright Tutorial
                  </Button>
                </a>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-400 text-gray-300 hover:bg-gray-800 bg-transparent px-8 py-4"
                  >
                    Back to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Floating Thank You Elements */}
        <motion.div
          className="fixed top-20 left-10 text-purple-400 opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Heart size={30} />
        </motion.div>

        <motion.div
          className="fixed top-40 right-20 text-green-400 opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Star size={25} />
        </motion.div>

        <motion.div
          className="fixed bottom-40 left-1/4 text-blue-400 opacity-20"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Sparkles size={20} />
        </motion.div>
      </div>
    </div>
  )
}
