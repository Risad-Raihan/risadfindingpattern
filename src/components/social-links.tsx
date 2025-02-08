"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram, Youtube } from "lucide-react"
import { SiReddit } from "react-icons/si"
import { cn } from "@/lib/utils"

const socialLinks = [
  {
    name: "GitHub",
    Icon: Github,
    href: "https://github.com/risad-flutter",
    color: "hover:text-[#333]"
  },
  {
    name: "LinkedIn",
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/risad-malik-b7b4b4227/",
    color: "hover:text-[#0077B5]"
  },
  {
    name: "Reddit",
    Icon: SiReddit,
    href: "https://www.reddit.com/user/risadraihan",
    color: "hover:text-[#ff4500]"
  },
  {
    name: "Instagram",
    Icon: Instagram,
    href: "https://www.instagram.com/risad_malik/",
    color: "hover:text-[#E4405F]"
  },
  {
    name: "X (Twitter)",
    Icon: Twitter,
    href: "https://twitter.com/RisadMalik",
    color: "hover:text-[#1DA1F2]"
  },
  {
    name: "YouTube",
    Icon: Youtube,
    href: "https://www.youtube.com/@risadmalik",
    color: "hover:text-[#FF0000]"
  }
]

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((social) => {
        const { Icon } = social
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors",
              social.color
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="sr-only">{social.name}</span>
            <Icon className="w-5 h-5" />
          </motion.a>
        )
      })}
    </div>
  )
} 