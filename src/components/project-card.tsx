"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Play, X } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  video?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export function ProjectCard({
  title,
  description,
  image,
  video,
  technologies,
  githubUrl,
  liveUrl,
  featured = false,
}: ProjectCardProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Card className="overflow-hidden group">
        <div className="aspect-video relative">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {featured && (
            <Badge
              className="absolute top-4 right-4 bg-primary/80 hover:bg-primary"
              variant="secondary"
            >
              Featured Project
            </Badge>
          )}
          {video && (
            <Button 
              className="absolute bottom-4 right-4 rounded-full bg-black/70 hover:bg-black w-12 h-12 p-0"
              onClick={() => setShowVideo(true)}
            >
              <Play className="w-5 h-5" />
            </Button>
          )}
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2 pt-4">
            {githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            )}
            {liveUrl && liveUrl !== "#" && (
              <Button variant="outline" size="sm" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {video && (
              <Button variant="outline" size="sm" onClick={() => setShowVideo(true)}>
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            )}
          </div>
        </div>
      </Card>

      {/* Video Modal */}
      {showVideo && video && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-8">
          <div className="relative w-full max-w-5xl">
            <Button 
              className="absolute -top-12 right-0 rounded-full bg-black/70 hover:bg-black w-10 h-10 p-0"
              onClick={() => setShowVideo(false)}
            >
              <X className="w-5 h-5" />
            </Button>
            <video 
              src={video} 
              controls 
              autoPlay 
              className="w-full rounded-lg shadow-2xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </motion.div>
  )
} 