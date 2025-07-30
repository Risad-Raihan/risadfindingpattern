"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github, ChevronLeft, ChevronRight, Code2, LineChart, GitBranch, GitCommit, GitPullRequest, Star, Brain, Database, BookOpen } from "lucide-react"
import { RiUserVoiceFill as SocialIcon } from "react-icons/ri"
import Image from "next/image"
import Link from "next/link"
import { motion as m } from "framer-motion"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { ProjectCard } from "../../components/project-card"

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
    icon: Brain,
    title: "Chatbot Development",
    description: "Custom conversational AI solutions with RAG integration and LLM deployment",
    category: "chatbot"
  },
  {
    icon: Code2,
    title: "ML Model Development",
    description: "End-to-end machine learning solutions with production deployment",
    category: "ml-models"
  },
  {
    icon: Database,
    title: "SaaS Development",
    description: "Scalable cloud-native software solutions with modern architecture",
    category: "saas"
  },
  {
    icon: BookOpen,
    title: "Colab Notebooks",
    description: "Interactive ML notebooks and tutorials for data science",
    category: "notebooks"
  },
  {
    icon: Github,
    title: "Kaggle Notebooks",
    description: "Data science competitions and analysis notebooks",
    category: "kaggle"
  }
]

const projects = [
  {
    title: "CRM SQL Retriever Bot",
    description: "A powerful AI chatbot that converts natural language questions into SQL queries using Llama 3.1 8B Instruct via RunPod's vLLM serverless endpoint. Features intelligent database querying, real-time business intelligence, and enterprise-grade security. Deployed on Google Cloud Run with auto-scaling capabilities and comprehensive API documentation.",
    image: "/CRM.png",
    technologies: [
      "Llama 3.1 8B",
      "FastAPI",
      "RunPod",
      "vLLM",
      "Python",
      "SQLite",
      "Google Cloud Run",
      "Docker"
    ],
    githubUrl: "https://github.com/Risad-Raihan/CRM-SQL-Retriever",
    liveUrl: "https://sql-retriever-chatbot-rfx4y23izq-uc.a.run.app/static/index.html",
    featured: true
  },
  {
    title: "MediBot: AI-Powered Medical Assistant with RAG",
    description: "An intelligent medical chatbot using Retrieval-Augmented Generation (RAG) technology to provide accurate medical information from trusted references. Integrates knowledge from medical textbooks with proper citations and source references. Features semantic search using vector embeddings, context-aware responses, and an intuitive chat interface.",
    image: "/medibot.png",
    video: "/projects/medibot.mp4",
    readme: "/projects/medibot_readme.md",
    technologies: [
      "Python",
      "LangChain",
      "Google Gemini API",
      "FAISS",
      "Streamlit",
      "HuggingFace",
      "RAG"
    ],
    githubUrl: "https://github.com/Risad-Raihan/Medibot",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Telco Customer Churn Prediction",
    description: "A machine learning solution to predict customer churn for telecommunications companies. Features a user-friendly Streamlit interface for real-time predictions, visual results with graphical representation of outcomes, and feature importance visualization. The Random Forest model achieves ~80% accuracy in identifying customers likely to discontinue services.",
    image: "/churn.png",
    video: "/projects/churn.mp4",
    readme: "/projects/churn_readme.md",
    technologies: [
      "Python", 
      "Scikit-learn", 
      "XGBoost", 
      "Streamlit", 
      "Pandas", 
      "Matplotlib"
    ],
    githubUrl: "https://github.com/Risad-Raihan/Telco_customer_churn",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Breast Cancer Prediction Web App: Logistic Regression",
    description: "Developed and deployed a Streamlit web application for predicting breast cancer malignancy (benign/malignant) using a Logistic Regression model. This tool aids in the assessment of breast masses based on cytological characteristics obtained from fine-needle aspirates or other tissue samples. The model leverages key diagnostic features including cell nucleus measurements to calculate the probability of a breast mass being malignant.",
    image: "/bc.png",
    technologies: [
      "Python",
      "Streamlit",
      "Scikit-learn",
      "Logistic Regression",
      "CSS",
      "Pickle"
    ],
    githubUrl: "https://github.com/yourusername/breast-cancer-prediction",
    liveUrl: "https://breast-cancer-prediction.streamlit.app",
    featured: true
  },
  {
    title: "Griffith Medical Center - Billing System",
    description: "Developed a billing system for Griffith Medical Center, streamlining patient billing processes and reducing administrative overhead by 15%. The system features an intuitive dashboard for real-time data analysis, enabling staff to quickly identify billing trends and improve revenue cycle management. Role-based access control ensures data security and compliance.",
    image: "/griffith1.png",
    technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Risad-Raihan/medical_billing_desktop",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Hair Wig Manufacturer - NS Hair, Website",
    description: "A well designed website for a hair wig manufacturer. It has a clean and modern design with a responsive layout with great animations.",
    image: "/ns.png",
    technologies: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    githubUrl: "https://github.com/Risad-Raihan/nshair4.0",
    liveUrl: "https://www.nshairbd.com/",
    featured: true
  },
  {
    title: "Customer Segmentation Tool",
    description: "An automated tool for customer segmentation using clustering algorithms.",
    image: "/placeholder.svg",
    technologies: ["Python", "scikit-learn", "Streamlit", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
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
    background: "none"
  }
}

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse"
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
      repeat: Infinity
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
  return (
    <div className="container py-24 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          My Projects
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A showcase of my work in AI engineering, chatbot development, ML models, and interactive notebooks.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </div>
  )
} 