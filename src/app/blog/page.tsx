"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Code2, Heart, Music, Plane, Film, Brain, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { motion as m, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { getAllBlogPosts } from "@/lib/contentful"
import type { BlogPost } from '@/types/contentful'
import { isBlogPost } from '@/types/contentful'

// Blog categories with icons and descriptions
const categories = [
  {
    id: "tech",
    name: "Tech & Programming",
    icon: Code2,
    description: "Deep dives into coding, AI, and tech innovations"
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    icon: Heart,
    description: "Personal growth and daily life experiences"
  },
  {
    id: "travel",
    name: "Travel",
    icon: Plane,
    description: "Adventures and explorations around the world"
  },
  {
    id: "music",
    name: "Music",
    icon: Music,
    description: "Musical journeys and discoveries"
  },
  {
    id: "mental-health",
    name: "Mental Health",
    icon: Brain,
    description: "Wellness, mindfulness, and personal development"
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: Film,
    description: "Movies, series, and anime reviews"
  }
]

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        setError(null)
        const fetchedPosts = await getAllBlogPosts()
        setPosts(fetchedPosts)
      } catch (error) {
        console.error("Error fetching posts:", error)
        setError(error instanceof Error ? error.message : 'Failed to fetch posts')
        setPosts([])
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const filteredPosts = posts.filter((post): post is BlogPost => {
    if (!isBlogPost(post)) return false;
    
    // Ensure categories is always an array
    const postCategories = Array.isArray(post.fields.categories) 
      ? post.fields.categories 
      : (typeof post.fields.categories === 'string' ? [post.fields.categories] : []);
    
    const matchesCategory = selectedCategory === "all" || postCategories.includes(selectedCategory);
    
    const title = String(post.fields.title || '');
    const excerpt = String(post.fields.excerpt || '');
    
    const matchesSearch = !searchQuery || 
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  if (error) {
    return (
      <div className="container py-24 text-center">
        <p className="text-red-500">Error: {error}</p>
        <Button 
          onClick={() => window.location.reload()} 
          className="mt-4"
        >
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-24 space-y-12">
      {/* Hero Section */}
      <m.div 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Blog & Articles
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore insights about machine learning, data science, and technology
        </p>
      </m.div>

      {/* Categories */}
      <m.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <m.button
          variants={fadeInUp}
          onClick={() => setSelectedCategory("all")}
          className={cn(
            "p-4 rounded-lg border transition-colors",
            selectedCategory === "all" 
              ? "border-primary bg-primary/10" 
              : "hover:border-primary/50"
          )}
        >
          <BookOpen className="w-6 h-6 mx-auto mb-2" />
          <span className="text-sm font-medium">All Posts</span>
        </m.button>
        
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <m.button
              key={category.id}
              variants={fadeInUp}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "p-4 rounded-lg border transition-colors",
                selectedCategory === category.id 
                  ? "border-primary bg-primary/10" 
                  : "hover:border-primary/50"
              )}
            >
              <Icon className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">{category.name}</span>
            </m.button>
          )
        })}
      </m.div>

      {/* Search */}
      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search articles..."
          className="pl-10"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Blog Grid */}
      <m.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {loading ? (
          // Loading skeleton
          Array.from({ length: 6 }).map((_, i) => (
            <m.div
              key={i}
              variants={fadeInUp}
              className="h-[400px] rounded-xl bg-muted animate-pulse"
            />
          ))
        ) : filteredPosts.length > 0 ? (
          filteredPosts.map(post => {
            // Ensure post is a BlogPost type and access fields
            if (!isBlogPost(post)) return null;
            
            const {
              title = 'Blog post',
              excerpt = '',
              categories = [],
              readingTime = 5,
              publishedDate,
              featuredImage,
              slug
            } = post.fields;

            // Type assertion for featuredImage
            const imageUrl = featuredImage && 'fields' in featuredImage && featuredImage.fields.file
              ? `https:${featuredImage.fields.file.url}`
              : '/placeholder.svg';

            const postCategories = Array.isArray(categories) 
              ? categories 
              : (typeof categories === 'string' ? [categories] : []);

            return (
              <m.div key={post.sys.id} variants={fadeInUp}>
                <Link href={`/blog/${slug}`}>
                  <Card className="overflow-hidden hover:border-primary/50 transition-colors duration-300">
                    <div className="aspect-video relative">
                      <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {postCategories.map((category) => (
                            <span
                              key={category}
                              className="px-2 py-1 rounded-full bg-primary/10 text-xs font-medium"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-2xl font-bold line-clamp-2 hover:text-primary transition-colors">
                          {title}
                        </h3>
                        
                        <p className="text-muted-foreground line-clamp-3">
                          {excerpt}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {readingTime} min read
                        </div>
                        <div>
                          {format(new Date(publishedDate), 'MMM d, yyyy')}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </m.div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-12 text-muted-foreground">
            No posts found matching your criteria
          </div>
        )}
      </m.div>
    </div>
  )
} 