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
  Star
} from "lucide-react"
import { ColabCard, ColabCardProps } from "./colab-card"

interface ColabGridProps {
  notebooks: ColabCardProps[]
}

type ViewMode = "grid" | "list"
type SortOption = "recent" | "popular" | "featured" | "name"

export function ColabGrid({ notebooks }: ColabGridProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [sortBy, setSortBy] = useState<SortOption>("recent")

  const categories = ["all", "NLP", "Computer Vision", "Data Analysis", "ML Models", "Tutorials"]
  const difficulties = ["all", "Beginner", "Intermediate", "Advanced"]

  // Filter and sort notebooks
  const filteredNotebooks = useMemo(() => {
    let filtered = notebooks.filter(notebook => {
      const matchesSearch = notebook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           notebook.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           notebook.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === "all" || notebook.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === "all" || notebook.difficulty === selectedDifficulty
      
      return matchesSearch && matchesCategory && matchesDifficulty
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
    }

    return filtered
  }, [notebooks, searchQuery, selectedCategory, selectedDifficulty, sortBy])

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

  return (
    <div className="space-y-8">
      {/* Header Stats */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp}>
          <Card className="p-4 text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
            <Sparkles className="w-6 h-6 mx-auto mb-2 text-purple-500" />
            <div className="text-2xl font-bold text-purple-500">{notebooks.length}</div>
            <div className="text-sm text-muted-foreground">Total Notebooks</div>
          </Card>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <Card className="p-4 text-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <TrendingUp className="w-6 h-6 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold text-blue-500">
              {notebooks.reduce((sum, n) => sum + n.views, 0).toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Total Views</div>
          </Card>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <Card className="p-4 text-center bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
            <Star className="w-6 h-6 mx-auto mb-2 text-green-500" />
            <div className="text-2xl font-bold text-green-500">
              {notebooks.reduce((sum, n) => sum + n.likes, 0).toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Total Likes</div>
          </Card>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <Card className="p-4 text-center bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
            <Clock className="w-6 h-6 mx-auto mb-2 text-orange-500" />
            <div className="text-2xl font-bold text-orange-500">
              {notebooks.filter(n => n.featured).length}
            </div>
            <div className="text-sm text-muted-foreground">Featured</div>
          </Card>
        </motion.div>
      </motion.div>

      {/* Search and Filters */}
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
            placeholder="Search notebooks, tags, or descriptions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-3 bg-background/50 backdrop-blur-sm border-2 focus:border-purple-500/50 transition-colors"
          />
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Category and Difficulty Filters */}
          <div className="flex flex-wrap gap-2">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Category:</span>
              <div className="flex gap-1">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`text-xs ${
                      selectedCategory === category 
                        ? "bg-purple-500 text-white border-purple-500" 
                        : "hover:border-purple-500/50"
                    }`}
                  >
                    {category === "all" ? "All" : category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Difficulty:</span>
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

          {/* View Mode and Sort */}
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

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center justify-between"
      >
        <p className="text-muted-foreground">
          Showing {filteredNotebooks.length} of {notebooks.length} notebooks
        </p>
        {(searchQuery || selectedCategory !== "all" || selectedDifficulty !== "all") && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("all")
              setSelectedDifficulty("all")
            }}
            className="text-purple-500 hover:text-purple-600"
          >
            Clear Filters
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
                key={notebook.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.05 }}
                className={viewMode === "list" ? "w-full" : ""}
              >
                <ColabCard {...notebook} />
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