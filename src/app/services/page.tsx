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
    description: "Cutting-edge AI and development services to bring your digital vision to life",
    items: [
      {
        title: "Chatbot Development",
        description: "Custom conversational AI solutions with advanced NLP, RAG integration, and API deployment using cutting-edge LLM technologies",
        icon: Bot,
        image: "/chat.png",
        tags: ["HuggingFace", "RAG", "LLM", "API", "NLP", "Deployment"]
      },
      {
        title: "ML Model Development",
        description: "End-to-end machine learning solutions including churn prediction, sales forecasting, and customer segmentation models with production deployment",
        icon: Brain,
        image: "/churn.png",
        tags: ["Churn Prediction", "Sales Forecasting", "Customer Segmentation", "Model Deployment", "ML Pipeline"]
      },
      {
        title: "SaaS Development",
        description: "Scalable cloud-native software solutions with modern architecture, subscription models, and multi-tenant capabilities",
        icon: Code2,
        image: "/griffith1.png",
        tags: ["Cloud", "APIs", "Microservices", "Scalable", "Subscription"]
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