"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Sparkles,
  TrendingUp,
  Clock,
  Star,
  Award,
  Play,
  Download,
  Eye
} from "lucide-react"
import { NotebookCard } from "./notebook-card"
import type { NotebookEntry } from "@/data/colab-notebooks"

interface NotebooksGridProps {
  notebooks: NotebookEntry[]
}

type ViewMode = "grid" | "list"
type SortOption = "recent" | "popular" | "featured" | "name" | "platform"
type PlatformFilter = "all" | "kaggle" | "colab" | "github"

export function NotebooksGrid({ notebooks }: NotebooksGridProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all")
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformFilter>("all")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [sortBy, setSortBy] = useState<SortOption>("recent")

  // Extract unique categories from notebooks
  const categories = ["all", ...Array.from(new Set(notebooks.flatMap(n => n.category)))]
  const difficulties = ["all", "Beginner", "Intermediate", "Advanced"]
  const platforms = ["all", "kaggle", "colab", "github"]

  // Filter and sort notebooks
  const filteredNotebooks = useMemo(() => {
    let filtered = notebooks.filter(notebook => {
      const matchesSearch = notebook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           notebook.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           notebook.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                           (notebook.author && notebook.author.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === "all" || notebook.category.includes(selectedCategory)
      const matchesDifficulty = selectedDifficulty === "all" || notebook.difficulty === selectedDifficulty
      const matchesPlatform = selectedPlatform === "all" || notebook.platform === selectedPlatform
      
      return matchesSearch && matchesCategory && matchesDifficulty && matchesPlatform
    })

    // Sort notebooks
    switch (sortBy) {
      case "recent":
        filtered.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
        break
      case "popular":
        filtered.sort((a, b) => b.views - a.views)
        break
      case "featured":
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
      case "name":
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "platform":
        filtered.sort((a, b) => a.platform.localeCompare(b.platform))
        break
    }

    return filtered
  }, [notebooks, searchQuery, selectedCategory, selectedDifficulty, selectedPlatform, sortBy])

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  // Platform stats
  const platformStats = {
    kaggle: notebooks.filter(n => n.platform === 'kaggle'),
    colab: notebooks.filter(n => n.platform === 'colab'),
    github: notebooks.filter(n => n.platform === 'github')
  }

  return (
    <div className="space-y-8">
      {/* Enhanced Header Stats */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-6 gap-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp}>
          <Card className="p-4 text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
            <Sparkles className="w-6 h-6 mx-auto mb-2 text-purple-500" />
            <div className="text-2xl font-bold text-purple-500">{notebooks.length}</div>
            <div className="text-sm text-muted-foreground">Total</div>
          </Card>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <Card className="p-4 text-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <Award className="w-6 h-6 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold text-blue-500">{platformStats.kaggle.length}</div>
            <div className="text-sm text-muted-foreground">Kaggle</div>
          </Card>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <Card className="p-4 text-center bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-orange-500/20">
            <Play className="w-6 h-6 mx-auto mb-2 text-orange-500" />
            <div className="text-2xl font-bold text-orange-500">{platformStats.colab.length}</div>
            <div className="text-sm text-muted-foreground">Colab</div>
          </Card>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <Card className="p-4 text-center bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
            <Eye className="w-6 h-6 mx-auto mb-2 text-green-500" />
            <div className="text-2xl font-bold text-green-500">
              {notebooks.reduce((sum, n) => sum + n.views, 0).toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Views</div>
          </Card>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <Card className="p-4 text-center bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-pink-500/20">
            <Star className="w-6 h-6 mx-auto mb-2 text-pink-500" />
            <div className="text-2xl font-bold text-pink-500">
              {notebooks.reduce((sum, n) => sum + n.likes, 0).toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Likes</div>
          </Card>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <Card className="p-4 text-center bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border-indigo-500/20">
            <Download className="w-6 h-6 mx-auto mb-2 text-indigo-500" />
            <div className="text-2xl font-bold text-indigo-500">
              {notebooks.reduce((sum, n) => sum + (n.downloads || 0), 0).toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Downloads</div>
          </Card>
        </motion.div>
      </motion.div>

      {/* Enhanced Search and Filters */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search notebooks, tags, authors, or descriptions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-3 bg-background/50 backdrop-blur-sm border-2 focus:border-purple-500/50 transition-colors"
          />
        </div>

        {/* Enhanced Filters */}
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Filter Groups */}
          <div className="flex flex-wrap gap-4">
            {/* Platform Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Platform:</span>
              <div className="flex gap-1">
                {platforms.map((platform) => (
                  <Button
                    key={platform}
                    variant={selectedPlatform === platform ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPlatform(platform as PlatformFilter)}
                    className={`text-xs ${
                      selectedPlatform === platform 
                        ? "bg-purple-500 text-white border-purple-500" 
                        : "hover:border-purple-500/50"
                    }`}
                  >
                    {platform === "all" ? "All" : platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-1 text-sm bg-background/50 backdrop-blur-sm border-2 border-muted rounded-md focus:border-purple-500/50 transition-colors"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Level:</span>
              <div className="flex gap-1">
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`text-xs ${
                      selectedDifficulty === difficulty 
                        ? "bg-green-500 text-white border-green-500" 
                        : "hover:border-green-500/50"
                    }`}
                  >
                    {difficulty === "all" ? "All" : difficulty}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Sort and View Controls */}
          <div className="flex items-center gap-2">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-3 py-2 text-sm bg-background/50 backdrop-blur-sm border-2 border-muted rounded-md focus:border-purple-500/50 transition-colors"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="featured">Featured First</option>
              <option value="platform">By Platform</option>
              <option value="name">Alphabetical</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex border-2 border-muted rounded-md overflow-hidden">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-none border-0"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-none border-0"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Results Count and Clear Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center justify-between"
      >
        <p className="text-muted-foreground">
          Showing {filteredNotebooks.length} of {notebooks.length} notebooks
          {selectedPlatform !== "all" && ` on ${selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)}`}
        </p>
        {(searchQuery || selectedCategory !== "all" || selectedDifficulty !== "all" || selectedPlatform !== "all") && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("all")
              setSelectedDifficulty("all")
              setSelectedPlatform("all")
            }}
            className="text-purple-500 hover:text-purple-600"
          >
            Clear All Filters
          </Button>
        )}
      </motion.div>

      {/* Notebooks Grid */}
      <AnimatePresence mode="wait">
        {filteredNotebooks.length > 0 ? (
          <motion.div
            key={`${viewMode}-${filteredNotebooks.length}`}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className={
              viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }
          >
            {filteredNotebooks.map((notebook, index) => (
              <motion.div
                key={notebook.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.05 }}
                className={viewMode === "list" ? "w-full" : ""}
              >
                <NotebookCard {...notebook} viewMode={viewMode} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No notebooks found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters
            </p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
                setSelectedDifficulty("all")
                setSelectedPlatform("all")
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Clear All Filters
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 