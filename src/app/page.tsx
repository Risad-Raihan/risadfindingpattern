"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Brain, Code2, GraduationCap, Award, BookOpen, Briefcase, ChevronLeft, ChevronRight, ExternalLink, LineChart, Github, Building2, Globe2, Users2, Target, Database, BarChart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useEffect, useState } from "react"
import FloatingIcons from "@/components/floating-icons"
import { Badge } from "@/components/ui/badge"

const LoadingSpinner = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
)

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1]
    }
  }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const shimmer = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity
    }
  }
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <LoadingSpinner />
  }

  return (
    <motion.div className="relative">
      {/* Hero Section */}
      <motion.section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <FloatingIcons />
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/80 backdrop-blur-[2px] z-10"
        />
        <motion.div 
          className="container relative z-20"
          variants={fadeInUp}
        >
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              className="relative w-40 h-40 mx-auto mb-8 group"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                duration: 1.8,
                bounce: 0.4,
                delay: 0.2
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slower" style={{ padding: '3px' }}>
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-reverse-spin-slower blur-md" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/40 to-pink-500/40 animate-pulse-slow" style={{ padding: '2px' }} />
              
              <div className="absolute inset-[3px] rounded-full overflow-hidden bg-background transform transition-transform duration-500 group-hover:scale-110">
                <Image
                  src="/profile.jpg"
                  alt="Profile picture"
                  fill
                  className="object-cover transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="absolute -inset-4 bg-gradient-conic from-purple-500/0 via-purple-500/30 to-purple-500/0 animate-spin-slower opacity-70 blur-xl" />
              <div className="absolute -inset-4 bg-gradient-conic from-pink-500/0 via-pink-500/30 to-pink-500/0 animate-reverse-spin-slower opacity-70 blur-xl" />
            </motion.div>
            
            <motion.div className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold"
                variants={fadeInUp}
              >
                <span className="block mb-2">Hi, I'm Risad</span>
                <TypeAnimation
                  sequence={[
                    "ML Developer",
                    2000,
                    "Data Scientist",
                    2000,
                    "SaaS Expert",
                    2000,
                    "Web Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={40}
                  preRenderFirstString={true}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 inline-block min-w-[200px]"
                  repeat={Infinity}
                  cursor={true}
                  deletionSpeed={60}
                />
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                A passionate technologist with expertise in AI, Data Analytics, and Software Engineering.
              </motion.p>

              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                variants={fadeInUp}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  asChild
                >
                  <Link href="/portfolio">
                    View My Work
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="group"
                  asChild
                >
                  <Link href="/contact">
                    Let's Work Together
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
                variants={fadeInUp}
              >
                {[
                  { icon: Briefcase, label: "Years Experience", value: "3+" },
                  { icon: Target, label: "Projects Completed", value: "25+" },
                  { icon: Brain, label: "ML Models Deployed", value: "15+" },
                  { icon: Users2, label: "Happy Clients", value: "20+" }
                ].map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <Card key={index} className="p-4 text-center group hover:border-purple-500/50 transition-colors">
                      <Icon className="w-6 h-6 mx-auto mb-2 text-purple-500 transition-transform group-hover:scale-110" />
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </Card>
                  )
                })}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* About Me Section */}
      <motion.section 
        className="py-24 bg-muted/50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 items-center">
            <motion.div variants={fadeInUp} className="relative aspect-square rounded-3xl overflow-hidden border-4 border-purple-500/20 mx-auto md:mx-0 w-80 md:w-full max-w-[400px] shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Risad Raihan Malik"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10" />
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a highly motivated full-stack developer and ML enthusiast, constantly exploring new technologies and approaches. I'm passionate about building innovative solutions that push the boundaries of what's possible. My background in software engineering and AI/ML allows me to tackle diverse challenges and deliver creative, effective results. I'm a firm believer in continuous learning and improvement.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-purple-500" />
                    <span className="font-medium">Education</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Master's in AI from LJMU</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-purple-500" />
                    <span className="font-medium">Experience</span>
                  </div>
                  <p className="text-sm text-muted-foreground">3+ Years in Tech Industry</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  asChild
                >
                  <Link href="/about">
                    Learn More About Me
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline"
                  className="group"
                  asChild
                >
                  <Link href="/portfolio">
                    View Portfolio
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Education & Experience Section */}
      <motion.section 
        className="py-24"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div variants={fadeInUp} className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Education & Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic journey and professional experience across three countries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Education Cards */}
            <motion.div variants={fadeInUp}>
              <Card className="p-4 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-purple-500/10 to-pink-500/10 h-full">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-5 h-5 text-purple-500" />
                    <h4 className="text-lg font-semibold">Masters in AI</h4>
                  </div>
                  <div>
                    <p className="font-medium">Liverpool John Moores University 🇬🇧</p>
                    <p className="text-xs text-muted-foreground">Sep 2021 - Dec 2022 | Merit</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-xs text-muted-foreground font-medium">Key Projects:</p>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                          <span>Deep Learning in Music Genre Detection</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                          <span>Bird Image Detection using R-CNN</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-1 mt-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10">Python</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10">TensorFlow</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10">Docker</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-4 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 h-full">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-5 h-5 text-blue-500" />
                    <h4 className="text-lg font-semibold">Pre-Masters & BSc IT</h4>
                  </div>
                  <div>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium">Pre-Masters in Data Science</p>
                        <p className="text-xs text-muted-foreground">LJMU 🇬🇧 | Feb 2021 - Aug 2021</p>
                      </div>
                      <div>
                        <p className="font-medium">BSc in Information Technology</p>
                        <p className="text-xs text-muted-foreground">Segi University 🇲🇾 | 2017-2020 | GPA: 3.68</p>
                        <div className="mt-2">
                          <p className="text-xs">Final Project: Blood Bank</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10">Java</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10">Kotlin</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10">MySQL</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-4 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-pink-500/10 to-rose-500/10 h-full">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-pink-500" />
                    <div>
                      <h4 className="text-lg font-semibold">Data Analyst & ML Developer</h4>
                      <p className="text-xs text-muted-foreground">Apon Tech Ltd. | Apr 2024 - Present</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground font-medium">Key Achievements:</p>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-pink-500 mt-1.5 flex-shrink-0" />
                          <span>Built Time Series models for demand analysis</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-pink-500 mt-1.5 flex-shrink-0" />
                          <span>Implemented CX segmentation & RFM analysis</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-pink-500 mt-1.5 flex-shrink-0" />
                          <span>Led GCP migration & data warehousing</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-pink-500/10">BigQuery</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-pink-500/10">ML</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-pink-500/10">Looker</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-4 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-orange-500/10 to-amber-500/10 h-full">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-orange-500" />
                    <div>
                      <h4 className="text-lg font-semibold">Data Analyst</h4>
                      <p className="text-xs text-muted-foreground">10 Minute School | Sep 2023 - Apr 2024</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground font-medium">Key Achievements:</p>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                          <span>Contributed to $64.5M Pre-Series A funding</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                          <span>Reduced churn by 17% using XGBoost</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                          <span>Automated reporting, 80% time reduction</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10">GCP</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10">Python</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10">Looker</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-4 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-green-500/10 to-emerald-500/10 h-full">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-green-500" />
                    <div>
                      <h4 className="text-lg font-semibold">Junior Data Analyst</h4>
                      <p className="text-xs text-muted-foreground">C & E IT Solution | Sep 2021 - Oct 2023</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm">Remote contractual position during Masters study</p>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground font-medium">Technologies:</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10">BigQuery</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10">Python</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10">PostgreSQL</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10">Firebase</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10">Power BI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-4 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 h-full">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-indigo-500" />
                    <div>
                      <h4 className="text-lg font-semibold">Android Developer Intern</h4>
                      <p className="text-xs text-muted-foreground">Alc-Tech Sdn Bhd 🇲🇾 | May 2019 - Sep 2019</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm">Android development internship experience</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10">Kotlin</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10">Java</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10">SQLite</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10">Firebase</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10">Linux</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-background via-muted/50 to-background"
        variants={fadeInUp}
      >
        <div className="container">
          <motion.div className="text-center space-y-4 mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
              variants={fadeInUp}
            >
              Services & Expertise
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Transforming ideas into reality through cutting-edge technology and data-driven solutions
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {/* Web Development */}
            <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="group">
              <Card className="relative overflow-hidden p-6 h-full hover:shadow-xl transition-all duration-300 hover:border-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 w-fit">
                    <Code2 className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Web Development</h3>
                  <p className="text-muted-foreground">Building modern, responsive web applications with Next.js, React, and TypeScript. Focus on performance and user experience.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind</Badge>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* SaaS Development */}
            <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="group">
              <Card className="relative overflow-hidden p-6 h-full hover:shadow-xl transition-all duration-300 hover:border-blue-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 w-fit">
                    <Database className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold">SaaS Development</h3>
                  <p className="text-muted-foreground">Creating scalable software solutions with cloud infrastructure, microservices architecture, and robust APIs.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Cloud</Badge>
                    <Badge variant="secondary">APIs</Badge>
                    <Badge variant="secondary">Microservices</Badge>
                    <Badge variant="secondary">DevOps</Badge>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* AI & ML Solutions */}
            <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="group">
              <Card className="relative overflow-hidden p-6 h-full hover:shadow-xl transition-all duration-300 hover:border-green-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-4">
                  <div className="p-3 rounded-xl bg-green-500/10 w-fit">
                    <Brain className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold">AI & ML Solutions</h3>
                  <p className="text-muted-foreground">Developing intelligent systems, custom ML models, and automation tools for business optimization.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                    <Badge variant="secondary">NLP</Badge>
                    <Badge variant="secondary">Computer Vision</Badge>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Data Analytics */}
            <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="group">
              <Card className="relative overflow-hidden p-6 h-full hover:shadow-xl transition-all duration-300 hover:border-orange-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-4">
                  <div className="p-3 rounded-xl bg-orange-500/10 w-fit">
                    <BarChart className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Data Analytics</h3>
                  <p className="text-muted-foreground">Transforming raw data into actionable insights through advanced analytics and visualization.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Power BI</Badge>
                    <Badge variant="secondary">Tableau</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">SQL</Badge>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Predictive Modeling */}
            <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="group">
              <Card className="relative overflow-hidden p-6 h-full hover:shadow-xl transition-all duration-300 hover:border-pink-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-4">
                  <div className="p-3 rounded-xl bg-pink-500/10 w-fit">
                    <LineChart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Predictive Modeling</h3>
                  <p className="text-muted-foreground">Building predictive models for forecasting, customer behavior analysis, and risk assessment.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Time Series</Badge>
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">Statistical Analysis</Badge>
                    <Badge variant="secondary">Forecasting</Badge>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Social Media Consultancy */}
            <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="group">
              <Card className="relative overflow-hidden p-6 h-full hover:shadow-xl transition-all duration-300 hover:border-indigo-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 w-fit">
                    <Users2 className="w-6 h-6 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Social Media Consultancy</h3>
                  <p className="text-muted-foreground">Strategic social media management, content creation, and growth strategies for brands.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Strategy</Badge>
                    <Badge variant="secondary">Content</Badge>
                    <Badge variant="secondary">Analytics</Badge>
                    <Badge variant="secondary">Growth</Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-12 flex justify-center gap-4"
            variants={fadeInUp}
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              asChild
            >
              <Link href="/contact">
                Contact Me
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section 
        className="py-24"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div variants={fadeInUp} className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work in web development and data science
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "NS Hair Website",
                description: "Modern e-commerce website for a hair wig manufacturer",
                image: "/ns.png",
                tags: ["Next.js", "React", "Tailwind CSS"],
                link: "https://www.nshairbd.com"
              },
              {
                title: "Medical Billing System",
                description: "Desktop application for managing medical billing and analytics",
                image: "/griffith1.png",
                tags: ["Python", "Flask", "SQLite"],
                link: "#"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden group">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-secondary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" asChild>
                      <Link href={project.link} target="_blank">
                        View Project
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="text-center mt-8"
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        className="py-24 bg-muted/50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div variants={fadeInUp} className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Subscribe to Finding Patterns</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join my newsletter for exclusive insights on AI, Data Science, and Tech Innovation. Get weekly updates on industry trends, coding tips, and career growth strategies.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-md mx-auto">
            <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
              <form className="space-y-4">
                <div className="space-y-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                  />
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  Subscribe Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                No spam, unsubscribe at any time.
              </p>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex items-center space-x-4">
              <Link href="https://github.com/yourusername" target="_blank" className="text-muted-foreground hover:text-foreground">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" className="text-muted-foreground hover:text-foreground">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Finding Patterns. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}
