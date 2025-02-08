"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github, ChevronLeft, ChevronRight, Code2, LineChart, GitBranch, GitCommit, GitPullRequest, Star, Brain, Database } from "lucide-react"
import { RiUserVoiceFill as SocialIcon } from "react-icons/ri"
import Image from "next/image"
import Link from "next/link"
import { motion as m } from "framer-motion"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const ProjectCarousel = ({ images }: { images: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="relative aspect-[16/9] flex-[0_0_100%]" key={index}>
              <Image
                src={src}
                alt={`Project slide ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
        onClick={scrollNext}
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'bg-white w-4' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

// Core capabilities with enhanced descriptions
const capabilities = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Expert in building modern web applications with Next.js, React, and Node.js",
    category: "web"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Specialized in developing ML models and AI solutions for real-world problems",
    category: "ai"
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Proficient in transforming raw data into actionable business insights",
    category: "data"
  },
  {
    icon: Code2,
    title: "SaaS Solutions",
    description: "Building scalable, cloud-based software solutions for business efficiency",
    category: "saas"
  },
  {
    icon: SocialIcon,
    title: "Digital Marketing",
    description: "Strategic approach to social media marketing and brand growth",
    category: "social"
  }
]

const projects = [
  {
    title: "Griffith Medical Center - Billing System",
    description: "Developed a billing system for Griffith Medical Center, streamlining patient billing processes and reducing administrative overhead by 15%. The system features an intuitive dashboard for real-time data analysis, enabling staff to quickly identify billing trends and improve revenue cycle management. Role-based access control ensures data security and compliance.",
    images: ["/griffith1.png", "/griffith2.png", "/griffith3.png", "/griffith4.png", "/griffith5.png", "/griffith6.png", "/griffith7.png"],
    tags: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Risad-Raihan/medical_billing_desktop",
    demo: "#",
    icon: Code2,
    category: "saas"
  },
  {
    title: "Hair Wig Manufacturer - NS Hair, Website",
    description: "A well designed website for a hair wig manufacturer. It has a clean and modern design with a responsive layout with great animations.",
    images: ["/ns.png", "/ns2.png", "/ns3.png", "/ns4.png", "/ns5.png"],
    tags: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    github: "https://github.com/Risad-Raihan/nshair4.0",
    demo: "https://www.nshairbd.com/",
    icon: Code2,
    category: "web"
  },
  {
    title: "Customer Segmentation Tool",
    description: "An automated tool for customer segmentation using clustering algorithms.",
    images: ["/placeholder.svg"],
    tags: ["Python", "scikit-learn", "Streamlit", "MongoDB"],
    github: "#",
    demo: "#",
    icon: LineChart,
    category: "ai"
  }
]

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

const magicReveal = {
  initial: { 
    opacity: 0,
    scale: 0.8,
    filter: "blur(10px)",
    background: "radial-gradient(circle at center, rgba(147, 51, 234, 0.2), transparent)"
  },
  animate: { 
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    background: "none",
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
}

const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(147, 51, 234, 0)",
      "0 0 20px 10px rgba(147, 51, 234, 0.3)",
      "0 0 0 0 rgba(147, 51, 234, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const GitHubActivity = () => {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);
  const [selectedMetric, setSelectedMetric] = useState('commits');

  return (
    <Card className="w-full overflow-hidden">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              GitHub Activity
            </h2>
            <p className="text-sm text-muted-foreground">My open source contributions</p>
          </div>
          <Button variant="outline" asChild size="sm">
            <Link href="https://github.com/Risad-Raihan" target="_blank" className="gap-2">
              <Github className="w-4 h-4" />
              View Profile
            </Link>
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Contribution Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <GitCommit className="w-4 h-4" />
              <span className="text-sm">Commits</span>
            </div>
            <p className="text-2xl font-bold text-purple-500">500+</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <GitPullRequest className="w-4 h-4" />
              <span className="text-sm">Pull Requests</span>
            </div>
            <p className="text-2xl font-bold text-purple-500">50+</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <GitBranch className="w-4 h-4" />
              <span className="text-sm">Repositories</span>
            </div>
            <p className="text-2xl font-bold text-purple-500">20+</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Star className="w-4 h-4" />
              <span className="text-sm">Stars Earned</span>
            </div>
            <p className="text-2xl font-bold text-purple-500">100+</p>
          </div>
        </div>

        {/* Contribution Calendar */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Contribution Calendar</h3>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 35 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-4 h-4 rounded-sm transition-colors",
                  i % 3 === 0 ? "bg-purple-500/80" :
                  i % 5 === 0 ? "bg-purple-500/60" :
                  i % 7 === 0 ? "bg-purple-500/40" :
                  "bg-purple-500/20"
                )}
              />
            ))}
          </div>
          <div className="flex justify-end items-center gap-2 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-purple-500/20" />
              <div className="w-3 h-3 rounded-sm bg-purple-500/40" />
              <div className="w-3 h-3 rounded-sm bg-purple-500/60" />
              <div className="w-3 h-3 rounded-sm bg-purple-500/80" />
            </div>
            <span>More</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Recent Activity</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Pushed 5 commits to medical_billing_desktop</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Created pull request in nshair4.0</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Forked TensorFlow/models repository</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Starred vercel/next.js repository</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProjects = selectedCategory 
    ? projects.filter(project => project.category === selectedCategory)
    : projects

  return (
    <div className="container py-24">
      <m.div
        className="space-y-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Enhanced Introduction Section */}
        <m.div 
          variants={magicReveal}
          className="relative space-y-8"
        >
          <m.div 
            className="absolute inset-0 bg-gradient-radial from-purple-500/10 to-transparent -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="space-y-4">
            <m.h1 
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Portfolio
            </m.h1>
            <m.div 
              className="space-y-4 text-xl text-muted-foreground max-w-3xl"
              variants={fadeInUp}
            >
              <p>
                Welcome to my digital workspace. I build high-impact web applications and intelligent systems that help businesses solve complex problems and achieve their strategic goals.
              </p>
              <p>
                My full-stack development expertise, combined with my analytical abilities and experience in data visualization, allows me to create solutions that are not only technically sound but also provide valuable business insights.
              </p>
              <p>
                I'm passionate about leveraging technology to drive innovation and create positive change. Explore my portfolio below to see how I can help your business thrive. Let's connect!
              </p>
              <m.p 
                className="text-purple-500 font-medium"
                animate={glowPulse}
              >
                Click on any expertise area below to explore related projects!
              </m.p>
            </m.div>
          </div>

          {/* Interactive Category Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              const isSelected = selectedCategory === capability.category
              return (
                <m.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                  onClick={() => setSelectedCategory(isSelected ? null : capability.category)}
                  whileHover={{ scale: 1.05 }}
                  animate={floatAnimation}
                  custom={index}
                >
                  <Card 
                    className={cn(
                      "p-6 h-full transition-all duration-300 cursor-pointer backdrop-blur-sm",
                      "hover:border-purple-500/50 hover:shadow-lg",
                      isSelected && "border-purple-500 bg-purple-500/5"
                    )}
                  >
                    <m.div 
                      className="space-y-4"
                      animate={isSelected ? {
                        scale: [1, 1.1, 1],
                        transition: { duration: 0.3 }
                      } : {}}
                    >
                      <m.div 
                        className={cn(
                          "w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center",
                          "group-hover:scale-110 transition-transform duration-300",
                          isSelected && "bg-purple-500/20"
                        )}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-6 h-6 text-purple-500" />
                      </m.div>
                      <div>
                        <h3 className="font-semibold mb-2">{capability.title}</h3>
                        <p className="text-sm text-muted-foreground">{capability.description}</p>
                      </div>
                    </m.div>
                  </Card>
                </m.div>
              )
            })}
          </div>
        </m.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr,400px] gap-8">
          {/* Projects Section */}
          <m.div variants={fadeInUp} className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {selectedCategory 
                  ? `${capabilities.find(c => c.category === selectedCategory)?.title} Projects`
                  : "Featured Projects"}
              </h2>
              {selectedCategory && (
                <Button 
                  variant="ghost" 
                  onClick={() => setSelectedCategory(null)}
                  className="text-purple-500 hover:text-purple-600"
                >
                  View All Projects
                </Button>
              )}
            </div>
            <div className="grid gap-8">
              {filteredProjects.map((project, index) => (
                <m.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:border-purple-500/50 transition-colors duration-300">
                    <ProjectCarousel images={project.images} />
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button variant="outline" asChild>
                          <Link href={project.github} target="_blank" className="gap-2">
                            <Github className="w-4 h-4" />
                            GitHub
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href={project.demo} target="_blank" className="gap-2">
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* GitHub Activity Section */}
          <m.div variants={fadeInUp} className="lg:sticky lg:top-20 lg:self-start">
            <GitHubActivity />
          </m.div>
        </div>
      </m.div>
    </div>
  )
} 