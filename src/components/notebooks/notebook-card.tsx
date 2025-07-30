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
  TrendingUp,
  Award,
  Github,
  User,
  Users,
  Calendar,
  ArrowUpRight
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { NotebookEntry } from "@/data/colab-notebooks"

interface NotebookCardProps extends NotebookEntry {
  viewMode?: "grid" | "list"
}

const platformConfig = {
  kaggle: {
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    hoverBorderColor: "hover:border-blue-500/50",
    icon: Award,
    label: "Kaggle",
    buttonText: "View on Kaggle",
    iconBg: "bg-blue-500"
  },
  colab: {
    color: "from-orange-500 to-yellow-500", 
    bgColor: "from-orange-500/10 to-yellow-500/10",
    borderColor: "border-orange-500/20",
    hoverBorderColor: "hover:border-orange-500/50",
    icon: Play,
    label: "Google Colab",
    buttonText: "Open in Colab",
    iconBg: "bg-orange-500"
  },
  github: {
    color: "from-gray-600 to-gray-800",
    bgColor: "from-gray-500/10 to-gray-700/10", 
    borderColor: "border-gray-500/20",
    hoverBorderColor: "hover:border-gray-500/50",
    icon: Github,
    label: "GitHub",
    buttonText: "View on GitHub",
    iconBg: "bg-gray-600"
  },
  personal: {
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/20", 
    hoverBorderColor: "hover:border-purple-500/50",
    icon: Code2,
    label: "Personal",
    buttonText: "View Notebook",
    iconBg: "bg-purple-500"
  }
}

const difficultyColors = {
  Beginner: "from-green-500 to-emerald-500",
  Intermediate: "from-yellow-500 to-orange-500", 
  Advanced: "from-red-500 to-pink-500"
}

export function NotebookCard({
  id,
  title,
  description,
  platform,
  url,
  views,
  likes,
  downloads,
  lastUpdated,
  category,
  difficulty,
  tags,
  thumbnail,
  keyTakeaways,
  prerequisites,
  estimatedTime,
  featured = false,
  author,
  coauthors,
  viewMode = "grid"
}: NotebookCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const platformInfo = platformConfig[platform]
  const PlatformIcon = platformInfo.icon

  const handleOpenNotebook = () => {
    setIsLoading(true)
    window.open(url, '_blank')
    setTimeout(() => setIsLoading(false), 1000)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: 5 }}
        transition={{ duration: 0.3 }}
        className="group"
      >
        <Card className={`overflow-hidden bg-gradient-to-r ${platformInfo.bgColor} backdrop-blur-sm border-2 ${platformInfo.borderColor} ${platformInfo.hoverBorderColor} transition-all duration-300`}>
          <div className="flex p-6 gap-6">
            {/* Thumbnail */}
            <div className="flex-shrink-0">
              <div className="relative w-32 h-24 rounded-lg overflow-hidden">
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {featured && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className={`bg-gradient-to-r ${platformInfo.color} text-white border-0`}>
                      <PlatformIcon className="w-3 h-3 mr-1" />
                      {platformInfo.label}
                    </Badge>
                    <Badge variant="outline" className={`border-2 bg-gradient-to-r ${difficultyColors[difficulty]} text-white border-transparent`}>
                      {difficulty}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:text-purple-500 transition-colors">{title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
                </div>

                <Button
                  onClick={handleOpenNotebook}
                  disabled={isLoading}
                  className={`bg-gradient-to-r ${platformInfo.color} hover:opacity-90 text-white border-0 shadow-lg transition-all duration-300`}
                >
                  {isLoading ? (
                    <motion.div
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  ) : (
                    <>
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      {platformInfo.buttonText}
                    </>
                  )}
                </Button>
              </div>

              {/* Stats and Tags */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    <span>{likes}</span>
                  </div>
                  {downloads && (
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      <span>{downloads}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{estimatedTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{tags.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    )
  }

  // Grid view (default)
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
      <div className={`absolute -inset-1 bg-gradient-to-r ${platformInfo.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />
      
      <Card className={`relative overflow-hidden bg-gradient-to-br ${platformInfo.bgColor} backdrop-blur-sm border-2 ${platformInfo.borderColor} ${platformInfo.hoverBorderColor} transition-all duration-500 h-full`}>
        {/* Header Section */}
        <div className="relative p-6 pb-4">
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

          {/* Platform & Category Badges */}
          <div className="flex items-center gap-2 mb-4">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${platformInfo.color} shadow-lg`}>
              <PlatformIcon className="w-4 h-4 text-white" />
            </div>
            <Badge className={`bg-gradient-to-r ${platformInfo.color} text-white border-0`}>
              {platformInfo.label}
            </Badge>
            <Badge variant="outline" className={`border-2 bg-gradient-to-r ${difficultyColors[difficulty]} text-white border-transparent`}>
              {difficulty}
            </Badge>
          </div>

          {/* Title */}
          <motion.h3 
            className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 line-clamp-2"
            whileHover={{ scale: 1.02 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* Author Info */}
          {author && (
            <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
              <User className="w-3 h-3" />
              <span>{author}</span>
              {coauthors && coauthors.length > 0 && (
                <>
                  <Users className="w-3 h-3 ml-2" />
                  <span>+{coauthors.length}</span>
                </>
              )}
            </div>
          )}

          {/* Stats Row */}
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>{views.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                <span>{likes}</span>
              </div>
              {downloads && (
                <div className="flex items-center gap-1">
                  <Download className="w-3 h-3" />
                  <span>{downloads}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{estimatedTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(lastUpdated)}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 4).map((tag, index) => (
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
            {tags.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        {/* Thumbnail Section */}
        <div className="relative px-6 pb-4">
          <motion.div 
            className={`relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br ${platformInfo.bgColor}`}
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
                <PlatformIcon className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 pb-6">
          <div className="flex gap-3">
            <Button
              onClick={handleOpenNotebook}
              disabled={isLoading}
              className={`flex-1 bg-gradient-to-r ${platformInfo.color} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
            >
              {isLoading ? (
                <motion.div
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              ) : (
                <>
                  <PlatformIcon className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  {platformInfo.buttonText}
                </>
              )}
            </Button>
            
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className={`px-4 border-2 ${platformInfo.hoverBorderColor} hover:bg-purple-500/10 transition-all duration-300`}
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
                  {keyTakeaways && (
                    <div>
                      <h4 className="font-semibold mb-2">Key Takeaways:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        {keyTakeaways.slice(0, 3).map((takeaway, index) => (
                          <li key={index}>• {takeaway}</li>    
                        ))}
                      </ul>
                    </div>
                  )}
                  {prerequisites && (
                    <div>
                      <h4 className="font-semibold mb-2">Prerequisites:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        {prerequisites.slice(0, 3).map((prereq, index) => (
                          <li key={index}>• {prereq}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {category.map((cat) => (
                    <Badge key={cat} className={`bg-gradient-to-r ${platformInfo.color} text-white border-0`}>
                      {cat}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
} 