"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, Brain, Code2, BarChart, Facebook, 
  GraduationCap, Building2, Globe2, Rocket, 
  CheckCircle2, Database, LineChart, Server,
  MonitorSmartphone, Cloud, MessageCircle, BookOpen,
  Briefcase, Award, Github, Laptop, Cpu, Network
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { LazyMotion, domAnimation, m } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
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

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1]
    }
  }
}

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  }
}

const skillCategories = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI & ML",
    color: "from-purple-500 to-pink-500",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "SARIMA", "XGBoost", "Prophet"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data & Analytics",
    color: "from-blue-500 to-cyan-500",
    skills: ["SQL", "BigQuery", "Looker", "Power BI", "Tableau", "DBT"]
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Frontend",
    color: "from-orange-500 to-yellow-500",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: ["Python", "Django", "Flask", "FastAPI", "Node.js"]
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud & DevOps",
    color: "from-indigo-500 to-purple-500",
    skills: ["GCP", "Firebase", "Docker", "Airflow"]
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Marketing",
    color: "from-pink-500 to-rose-500",
    skills: ["Social Media", "SEO", "Content Strategy", "Analytics"]
  }
]

export default function AboutPage() {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className="flex flex-col min-h-screen"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Hero Section */}
        <m.section className="py-20 bg-gradient-to-b from-background to-muted/50">
          <div className="container">
            <m.div 
              className="max-w-6xl mx-auto grid md:grid-cols-[1fr,1.5fr] gap-12 items-center"
              variants={fadeInUp}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-purple-500/20 mx-auto md:mx-0 w-80 md:w-full max-w-[400px] shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Risad Raihan Malik"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10" />
              </div>
              <div className="space-y-6 text-center md:text-left">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Hi, I'm Risad Raihan Malik
                  </h1>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {["Machine Learning Developer", "Data Scientist", "SaaS Expert", "Marketing Strategist"].map((role, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-sm bg-muted/50 hover:bg-muted transition-colors"
                      >
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-muted-foreground">
                  A passionate technologist with expertise in AI, Data Analytics, and Software Engineering. 
                  Working across three countries, I've gained extensive experience in multi-industry SaaS, 
                  social media growth, and full-stack development.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
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
                    className="hover:border-primary/50"
                    asChild
                  >
                    <Link href="https://www.linkedin.com/in/risad-raihan-malik/" target="_blank">
                      Connect on LinkedIn
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </m.div>
          </div>
        </m.section>

        {/* Skills Map */}
        <m.section className="py-20">
          <div className="container">
            <m.div className="max-w-6xl mx-auto space-y-16">
              <div className="text-center">
                <m.div variants={fadeInUp}>
                  <Cpu className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                  <h2 className="text-3xl font-bold">Skills & Technologies</h2>
                </m.div>
              </div>

              <m.div 
                className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12"
                variants={staggerContainer}
              >
                {skillCategories.map((category, index) => (
                  <m.div
                    key={index}
                    variants={scaleIn}
                    className="group relative"
                  >
                    <m.div
                      variants={floatAnimation}
                      className="relative z-10"
                    >
                      <Card className="relative overflow-hidden backdrop-blur-sm bg-background/80 hover:bg-background/90 transition-all duration-500 border-2 hover:border-primary/50">
                        <div className="absolute inset-0 bg-gradient-to-br opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-500" style={{
                          backgroundImage: `linear-gradient(to bottom right, var(--${category.color.split(' ')[1]}-color), var(--${category.color.split(' ')[3]}-color))`
                        }} />
                        
                        <div className="relative p-6 space-y-4">
                          <div className="flex items-center gap-3">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                              {category.icon}
                            </div>
                            <h3 className="text-xl font-bold">{category.title}</h3>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            {category.skills.map((skill, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="text-xs bg-background/50 hover:bg-background/80 transition-colors justify-center group-hover:translate-y-[-2px] transition-transform duration-300"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                          <div className="absolute inset-0 bg-gradient-to-br opacity-10" style={{
                            backgroundImage: `linear-gradient(to bottom right, var(--${category.color.split(' ')[1]}-color), var(--${category.color.split(' ')[3]}-color))`
                          }} />
                          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background/80 to-transparent" />
                        </div>
                      </Card>
                    </m.div>

                    <div className="absolute -inset-0.5 bg-gradient-to-br opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500" style={{
                      backgroundImage: `linear-gradient(to bottom right, var(--${category.color.split(' ')[1]}-color), var(--${category.color.split(' ')[3]}-color))`
                    }} />
                  </m.div>
                ))}
              </m.div>
            </m.div>
          </div>
        </m.section>

        {/* Experience & Education */}
        <m.section className="py-20 bg-muted/50">
          <div className="container">
            <m.div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
              {/* Professional Experience */}
              <m.div variants={fadeInUp} className="space-y-8">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-purple-500" />
                  <h3 className="text-2xl font-bold">Professional Experience</h3>
                </div>
                
                <div className="space-y-6">
                  <Card className="p-6 space-y-4 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-6 h-6 text-purple-500" />
                      <div>
                        <h4 className="text-xl font-semibold">Data Analyst & ML Developer</h4>
                        <p className="text-muted-foreground">Apon Tech Ltd.</p>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-8">
                      {[
                        "Building predictive models for sales forecasting",
                        "Developing BI dashboards for operations",
                        "Leading customer segmentation initiatives"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="p-6 space-y-4 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-6 h-6 text-pink-500" />
                      <div>
                        <h4 className="text-xl font-semibold">Data Science & Analytics</h4>
                        <p className="text-muted-foreground">10 Minute School</p>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-8">
                      {[
                        "Reduced customer churn by 17% using ML",
                        "Implemented data-driven sales strategies",
                        "Designed interactive analytics dashboards"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </m.div>

              {/* Education & Global Experience */}
              <m.div variants={fadeInUp} className="space-y-8">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-purple-500" />
                  <h3 className="text-2xl font-bold">Education & Global Experience</h3>
                </div>

                <div className="space-y-6">
                  <Card className="p-6 space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Globe2 className="w-6 h-6 text-purple-500" />
                          <h4 className="text-xl font-semibold">United Kingdom 🇬🇧</h4>
                        </div>
                        <div className="ml-8">
                          <p className="font-semibold">Master's in Artificial Intelligence</p>
                          <p className="text-muted-foreground">Liverpool John Moores University</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Globe2 className="w-6 h-6 text-pink-500" />
                          <h4 className="text-xl font-semibold">Malaysia 🇲🇾</h4>
                        </div>
                        <div className="ml-8">
                          <p className="font-semibold">Bachelor's in Software Engineering</p>
                          <p className="text-muted-foreground">Segi University, Kota Damansara</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Award className="w-6 h-6 text-purple-500" />
                          <h4 className="text-xl font-semibold">Certifications</h4>
                        </div>
                        <div className="ml-8 space-y-2">
                          {[
                            "Google Data Analytics Professional",
                            "IBM AI Engineering",
                            "Microsoft Azure Data Scientist"
                          ].map((cert, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                              <span>{cert}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </m.div>
            </m.div>
          </div>
        </m.section>

        {/* CTA */}
        <m.section className="py-20">
          <div className="container">
            <m.div 
              className="max-w-2xl mx-auto text-center space-y-6"
              variants={fadeInUp}
            >
              <Rocket className="w-12 h-12 mx-auto text-purple-500" />
              <h2 className="text-3xl font-bold">Let's Build Something Amazing Together!</h2>
              <p className="text-lg text-muted-foreground">
                Whether you need help with data analytics, AI solutions, or growing your business online,
                I'm here to help turn your vision into reality.
              </p>
              <div className="flex gap-4 justify-center">
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
                  className="hover:border-primary/50"
                  asChild
                >
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </m.div>
          </div>
        </m.section>
      </m.div>
    </LazyMotion>
  )
} 