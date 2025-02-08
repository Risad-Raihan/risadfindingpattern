"use client"

import { m } from "framer-motion"
import { SiPython, SiJavascript, SiTypescript, SiR, SiTensorflow, SiPytorch, SiNextdotjs, 
         SiReact, SiNodedotjs, SiPostgresql, SiMongodb, SiRedis, SiDocker, SiAmazon, SiGit } from "react-icons/si"
import { cn } from "@/lib/utils"

const iconMap = {
  python: SiPython,
  javascript: SiJavascript,
  typescript: SiTypescript,
  r: SiR,
  tensorflow: SiTensorflow,
  pytorch: SiPytorch,
  nextjs: SiNextdotjs,
  react: SiReact,
  nodejs: SiNodedotjs,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  redis: SiRedis,
  docker: SiDocker,
  aws: SiAmazon,
  git: SiGit,
}

const levelColors = {
  Expert: "text-green-500",
  Advanced: "text-blue-500",
  Intermediate: "text-yellow-500",
}

interface TechItemProps {
  name: string
  icon: keyof typeof iconMap
  level: keyof typeof levelColors
  index: number
}

const TechItem = ({ name, icon, level, index }: TechItemProps) => {
  const Icon = iconMap[icon]
  
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col items-center p-4"
    >
      <div className="relative">
        <Icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
        <m.div
          className={cn(
            "absolute -inset-1 rounded-full opacity-0 blur transition-opacity duration-300 group-hover:opacity-20",
            levelColors[level]
          )}
        />
      </div>
      <span className="mt-2 text-sm text-muted-foreground">{name}</span>
      <span className={cn("text-xs", levelColors[level])}>{level}</span>
    </m.div>
  )
}

interface TechStackProps {
  category: string
  items: Array<{
    name: string
    icon: keyof typeof iconMap
    level: keyof typeof levelColors
  }>
}

export function TechStack({ category, items }: TechStackProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{category}</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {items.map((item, index) => (
          <TechItem key={item.name} {...item} index={index} />
        ))}
      </div>
    </div>
  )
} 