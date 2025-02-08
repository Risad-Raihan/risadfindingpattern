"use client"

import { m } from "framer-motion"
import { Brain, Code2, BarChart3, Lightbulb } from "lucide-react"
import { Card } from "@/components/ui/card"

const iconMap = {
  brain: Brain,
  code: Code2,
  chart: BarChart3,
  lightbulb: Lightbulb,
}

interface ServiceCardProps {
  title: string
  description: string
  icon: keyof typeof iconMap
  highlights: string[]
  index: number
}

const ServiceCard = ({ title, description, icon, highlights, index }: ServiceCardProps) => {
  const Icon = iconMap[icon]
  
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="p-6 h-full hover:border-primary/50 transition-colors">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-xl">{title}</h3>
          </div>
          <p className="text-muted-foreground mb-4">{description}</p>
          <ul className="mt-auto space-y-2">
            {highlights.map((highlight, i) => (
              <m.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {highlight}
              </m.li>
            ))}
          </ul>
        </div>
      </Card>
    </m.div>
  )
}

interface ServicesGridProps {
  services: Array<{
    title: string
    description: string
    icon: keyof typeof iconMap
    highlights: string[]
  }>
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service, index) => (
        <ServiceCard key={service.title} {...service} index={index} />
      ))}
    </div>
  )
} 