"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, Award, Briefcase, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function EducationPage() {
  return (
    <div className="container py-12">
      <motion.h1 
        className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education & Experience
      </motion.h1>
      
      <motion.div 
        className="grid gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.section variants={fadeInUp}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 group">
            <GraduationCap className="h-6 w-6 text-purple-500 group-hover:rotate-12 transition-transform duration-300" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Education
            </span>
          </h2>
          <div className="grid gap-4">
            <motion.div variants={fadeInUp}>
              <Card className="p-6 transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Master of Science in Data Science</h3>
                    <p className="text-muted-foreground">University Name</p>
                  </div>
                  <div className="flex items-center text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md">
                    <Calendar className="h-4 w-4 mr-2" />
                    2020 - 2022
                  </div>
                </div>
                <p className="mt-2">Specialized in machine learning, statistical analysis, and big data technologies.</p>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="p-6 transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Bachelor of Engineering in Computer Science</h3>
                    <p className="text-muted-foreground">University Name</p>
                  </div>
                  <div className="flex items-center text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md">
                    <Calendar className="h-4 w-4 mr-2" />
                    2016 - 2020
                  </div>
                </div>
                <p className="mt-2">Focus on algorithms, data structures, and software engineering principles.</p>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={fadeInUp}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 group">
            <Briefcase className="h-6 w-6 text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
              Experience
            </span>
          </h2>
          <div className="grid gap-4">
            <motion.div variants={fadeInUp}>
              <Card className="p-6 transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Senior ML Engineer</h3>
                    <p className="text-muted-foreground">Company Name</p>
                  </div>
                  <div className="flex items-center text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md">
                    <Calendar className="h-4 w-4 mr-2" />
                    2022 - Present
                  </div>
                </div>
                <p className="mt-2">Leading the development of ML models and data analytics solutions.</p>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="p-6 transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Data Scientist</h3>
                    <p className="text-muted-foreground">Company Name</p>
                  </div>
                  <div className="flex items-center text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md">
                    <Calendar className="h-4 w-4 mr-2" />
                    2020 - 2022
                  </div>
                </div>
                <p className="mt-2">Developed predictive models and conducted statistical analysis.</p>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={fadeInUp}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 group">
            <Award className="h-6 w-6 text-green-500 group-hover:rotate-12 transition-transform duration-300" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
              Certifications
            </span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div variants={fadeInUp}>
              <Card className="p-6 transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 duration-300 hover:bg-secondary/30">
                <h3 className="text-lg font-semibold">AWS Machine Learning Specialty</h3>
                <p className="text-muted-foreground">Amazon Web Services</p>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="p-6 transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 duration-300 hover:bg-secondary/30">
                <h3 className="text-lg font-semibold">TensorFlow Developer Certificate</h3>
                <p className="text-muted-foreground">Google</p>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="p-6 transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 duration-300 hover:bg-secondary/30">
                <h3 className="text-lg font-semibold">Deep Learning Specialization</h3>
                <p className="text-muted-foreground">Coursera</p>
              </Card>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
} 