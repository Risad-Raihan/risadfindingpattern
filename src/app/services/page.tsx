"use client"

import { motion as m } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Code2, Database, Bot, LineChart, Lightbulb, Palette, Building2, Clapperboard, ArrowRight, Users, TrendingUp, Target, Brain, Cpu, Users2, Workflow } from "lucide-react"
import { RiUserVoiceFill as SocialIcon } from "react-icons/ri"

const services = [
  {
    category: "Development Solutions",
    description: "Cutting-edge development services to bring your digital vision to life",
    items: [
      {
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies and best practices",
        icon: Code2,
        image: "/ns.png",
        tags: ["React", "Next.js", "Node.js", "Full Stack"]
      },
      {
        title: "SaaS Development",
        description: "Scalable software-as-a-service solutions tailored to your business needs",
        icon: Code2,
        image: "/griffith1.png",
        tags: ["Cloud", "APIs", "Microservices"]
      },
      {
        title: "Chatbot Development",
        description: "Intelligent conversational AI solutions to enhance customer engagement",
        icon: Bot,
        image: "/chat.png",
        tags: ["AI", "NLP", "Automation"]
      }
    ]
  },
  {
    category: "Data Analytics & Customer Segmentation",
    description: "Transform your data into actionable insights with advanced customer analysis",
    items: [
      {
        title: "Customer Churn Prediction",
        description: "ML models to predict and prevent customer churn using advanced analytics",
        icon: Users2,
        image: "/ai2.png",
        tags: ["Predictive Analytics", "Customer Retention", "ML Models"]
      },
      {
        title: "RFM Analysis",
        description: "Customer segmentation using Recency, Frequency, and Monetary analysis",
        icon: Database,
        image: "/ai3.png",
        tags: ["Customer Segmentation", "Behavior Analysis", "Marketing Insights"]
      },
      {
        title: "Business Analytics Consulting",
        description: "Strategic insights and solutions for small businesses to optimize operations",
        icon: Lightbulb,
        image: "/b1.png",
        tags: ["Strategy", "Optimization", "Growth"]
      },
      {
        title: "Data Analysis",
        description: "Comprehensive data analysis to uncover patterns and drive decision-making",
        icon: Database,
        image: "/b2.png",
        tags: ["Analytics", "Reporting", "Visualization"]
      },
      {
        title: "Dashboard Development",
        description: "Interactive dashboards that bring your data to life",
        icon: LineChart,
        image: "/b3.png",
        tags: ["BI Tools", "Real-time", "Interactive"]
      },
      {
        title: "Predictive ML Models",
        description: "Time series forecasting for inventory and supply chain optimization",
        icon: LineChart,
        image: "/b4.png",
        tags: ["Machine Learning", "Forecasting", "Optimization"]
      }
    ]
  },
  {
    category: "AI & Automation",
    description: "Advanced AI solutions and automation tools to streamline your business operations",
    items: [
      {
        title: "AI Agent Development",
        description: "Custom AI agents for task automation and workflow optimization",
        icon: Brain,
        image: "/ai1.png",
        tags: ["Task Automation", "Workflow Optimization", "Custom AI"]
      },
      {
        title: "Process Automation",
        description: "Intelligent automation solutions for repetitive tasks and business processes",
        icon: Workflow,
        image: "/ai4.png",
        tags: ["Business Process", "AI Automation", "Efficiency"]
      }
    ]
  },
  {
    category: "Digital Marketing & Social Media",
    description: "Strategic digital marketing solutions to boost your brand's online presence",
    items: [
      {
        title: "Social Media Marketing",
        description: "Comprehensive social media strategy, content creation, and community management",
        icon: SocialIcon,
        image: "/social.png",
        tags: ["Strategy", "Content", "Community Management"]
      },
      {
        title: "Ad Campaign Management",
        description: "Results-driven social media advertising campaigns across multiple platforms",
        icon: Target,
        image: "/ads.png",
        tags: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads"]
      },
      {
        title: "Brand Promotion Strategy",
        description: "Strategic brand promotion and positioning to increase market visibility",
        icon: TrendingUp,
        image: "/brand.png",
        tags: ["Brand Strategy", "Market Analysis", "Growth"]
      },
      {
        title: "Digital Marketing Consulting",
        description: "Expert guidance on digital marketing strategies and implementation",
        icon: Users,
        image: "/consulting.png",
        tags: ["Strategy", "ROI Optimization", "Market Research"]
      }
    ]
  },
  {
    category: "Creative & Design",
    description: "Bringing your brand to life with stunning visuals and creative solutions",
    items: [
      {
        title: "Brand Design",
        description: "Comprehensive brand identity development and design services",
        icon: Palette,
        image: "/placeholder.svg",
        tags: ["Identity", "Guidelines", "Strategy"]
      },
      {
        title: "Graphic Design",
        description: "Eye-catching visual designs for all your marketing needs",
        icon: Palette,
        image: "/placeholder.svg",
        tags: ["Print", "Digital", "Marketing"]
      },
      {
        title: "3D Architectural Rendering",
        description: "Photorealistic 3D models for developers and architecture firms",
        icon: Building2,
        image: "/placeholder.svg",
        tags: ["3D Modeling", "Visualization", "Architecture"]
      },
      {
        title: "Motion Design",
        description: "Dynamic motion graphics and animations for engaging content",
        icon: Clapperboard,
        image: "/placeholder.svg",
        tags: ["Animation", "Video", "Content"]
      }
    ]
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

export default function ServicesPage() {
  return (
    <div className="container py-24 space-y-24">
      {/* Hero Section */}
      <m.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Our Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive digital solutions to help your business thrive in the modern world
        </p>
      </m.div>

      {/* Services Grid */}
      {services.map((category, categoryIndex) => (
        <m.div
          key={categoryIndex}
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <m.div variants={fadeInUp} className="space-y-2">
            <h2 className="text-3xl font-bold">{category.category}</h2>
            <p className="text-muted-foreground">{category.description}</p>
          </m.div>

          <m.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((service, serviceIndex) => {
              const Icon = service.icon
              return (
                <m.div
                  key={serviceIndex}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="space-y-4">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Icon className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button variant="ghost" className="group/btn w-full justify-between">
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </Card>
                </m.div>
              )
            })}
          </m.div>
        </m.div>
      ))}

      {/* CTA Section */}
      <m.div
        className="text-center space-y-6 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground">
          Let's discuss how we can help transform your business with our comprehensive suite of services.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </m.div>
    </div>
  )
} 