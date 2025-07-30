"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Play, 
  ExternalLink, 
  Eye, 
  Download, 
  Star, 
  Clock, 
  Code2,
  Sparkles,
  Zap,
  TrendingUp
} from "lucide-react"
import Image from "next/image"

export interface ColabCardProps {
  title: string
  description: string
  colabUrl: string
  tags: string[]
  thumbnail: string
  views: number
  likes: number
  lastUpdated: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  category: "NLP" | "Computer Vision" | "Data Analysis" | "ML Models" | "Tutorials"
  estimatedTime: string
  featured?: boolean
}

const difficultyColors = {
  Beginner: "from-green-500 to-emerald-500",
  Intermediate: "from-yellow-500 to-orange-500", 
  Advanced: "from-red-500 to-pink-500"
}

const categoryIcons = {
  NLP: Code2,
  "Computer Vision": Eye,
  "Data Analysis": TrendingUp,
  "ML Models": Sparkles,
  "Tutorials": Zap
}

const categoryColors = {
  NLP: "from-blue-500 to-cyan-500",
  "Computer Vision": "from-purple-500 to-pink-500",
  "Data Analysis": "from-green-500 to-emerald-500", 
  "ML Models": "from-orange-500 to-red-500",
  "Tutorials": "from-indigo-500 to-purple-500"
}

export function ColabCard({
  title,
  description,
  colabUrl,
  tags,
  thumbnail,
  views,
  likes,
  lastUpdated,
  difficulty,
  category,
  estimatedTime,
  featured = false
}: ColabCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const CategoryIcon = categoryIcons[category]

  const handleOpenColab = () => {
    setIsLoading(true)
    window.open(colabUrl, '_blank')
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <Card className="relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-sm border-2 border-transparent group-hover:border-purple-500/30 transition-all duration-500 h-full">
        {/* Featured Badge */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 z-10"
          >
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </motion.div>
        )}

        {/* Header Section */}
        <div className="relative p-6 pb-4">
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColors[category]} shadow-lg`}>
              <CategoryIcon className="w-4 h-4 text-white" />
            </div>
            <Badge 
              variant="secondary" 
              className={`bg-gradient-to-r ${categoryColors[category]} text-white border-0`}
            >
              {category}
            </Badge>
            <Badge 
              variant="outline" 
              className={`border-2 bg-gradient-to-r ${difficultyColors[difficulty]} text-white border-transparent`}
            >
              {difficulty}
            </Badge>
          </div>

          {/* Title */}
          <motion.h3 
            className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
            whileHover={{ scale: 1.02 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Stats Row */}
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>{views.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                <span>{likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{estimatedTime}</span>
              </div>
            </div>
            <span className="text-xs opacity-70">Updated {lastUpdated}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge variant="secondary" className="text-xs bg-muted/50 hover:bg-muted/80 transition-colors">
                  {tag}
                </Badge>
              </motion.div>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Thumbnail Section */}
        <div className="relative px-6 pb-4">
          <motion.div 
            className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Play Button */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <Play className="w-8 h-8 text-white" fill="white" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 pb-6">
          <div className="flex gap-3">
            <Button
              onClick={handleOpenColab}
              disabled={isLoading}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
            >
              {isLoading ? (
                <motion.div
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Open in Colab
                </>
              )}
            </Button>
            
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-4 border-2 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 space-y-4 border-t border-muted/50 pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">What you'll learn:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Practical implementation techniques</li>
                      <li>• Best practices and optimization</li>
                      <li>• Real-world applications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Prerequisites:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Basic Python knowledge</li>
                      <li>• Understanding of ML concepts</li>
                      <li>• Google Colab account</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Star className="w-4 h-4 mr-2" />
                    Star
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
} 