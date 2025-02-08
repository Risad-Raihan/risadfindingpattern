"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Code2, Heart, Music, Plane, Film, Brain, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { motion as m, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

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

// Blog posts data
const posts = [
  {
    title: "Mastery of Music Therapy: Types and Pros",
    excerpt: "In a world rife with stress and worry, we seek shelter in an assortment of ways. Music is a perennial source of solace and healing. Discover how music therapy can enhance psychological well-being and overall health.",
    date: "2024-01-20",
    category: "music",
    image: "/music.png",
    readTime: "3 min read",
    mediumUrl: "#",
    featured: true,
    author: "Risad Malik",
    publication: "ILLUMINATION",
    content: {
      introduction: [
        "In a world rife with stress and worry, we seek shelter in an assortment of ways. Music is a perennial source of solace and healing. Listening to music might be a quick way to enhance your mood, but it's rapidly becoming evident that there's a lot more to music's benefits than simply a swift mood boost. It is now clinically proven that music has a prominent effect on your body and psychology, just as a tool for entertainment.",
        "Music therapy is an approach to therapy that helps people strengthen their psychological condition and overall well-being by utilizing music's inherently mood-lifting effects. It can be beneficial for people to handle their depression. And the best part is that you don't need any experience in music to reap its benefits."
      ],
      sections: [
        {
          title: "Major Types",
          content: [
            "The whole process of music therapy can be active, where the person plays a role in creating music, or passive, where he or she can listen to, experience, or react to certain kinds of music.",
            {
              subtitle: "Cognitive Behavioral Music Therapy (CBMT)",
              description: "This is basically an approach where cognitive behavioral therapy meets music to address mental health and emotional well-being. This strategy uses cognitive restructuring and reshaping behavior in certain situations with a structured musical approach. This process is not improvisational.",
              keyPoints: [
                "Cognitive Restructuring",
                "Behavioral Techniques",
                "Music-Based Interventions",
                "Emotion Regulation"
              ]
            },
            {
              subtitle: "The Bonny Method of Guided Imagery and Music",
              description: "This is a very interesting approach to music therapy. It uses classical music to stimulate imagination for personal experience, self-discovery, and psychologic healing. It is not structured at all. It is profoundly based on the thesis that music has deeper access to deep emotional and unconscious feelings in humans."
            },
            {
              subtitle: "Analytical Music Therapy",
              description: "This is mainly a therapeutic process where the person plays or sings music to express their untold thoughts and emotions. Later on, therapists discuss the proper reflection of music on each sort of emotion. This is quite a tricky but creative process. It has no significant procedure or structure to follow."
            },
            {
              subtitle: "Orff-Based Music Therapy",
              description: "In this process instrumentals likes drums, xylophones, etc. This is often used by kids to create music and express their troubling thoughts. This is a strictly structural but playful process."
            }
          ]
        },
        {
          title: "Benefits",
          content: [
            "There are several facts to strengthen music therapy as a great approach. There is now a massive, growing demand for mental health services.",
            {
              subtitle: "Depression and anxiety relief",
              description: "It is not unknown anymore that the effect of music therapy on depression and anxiety is immeasurable. It activates the region of the brain that releases endorphins and boosts good feelings."
            },
            {
              subtitle: "PTSD",
              description: "Group music can be used to handle a serious mental issue like post-traumatic stress disorder."
            },
            {
              subtitle: "Enhance quality of health",
              description: "In general, music therapy helps people with chronic mental conditions elevate their quality of life. Patients with schizophrenia often use music therapy as their main therapeutic process."
            },
            {
              subtitle: "Insomnia",
              description: "Music or white noise specifically has been used deliberately to help people fall asleep. Compared to other medication processes, music works better in an organic way, which increases mental and physical health."
            }
          ]
        }
      ],
      conclusion: "It's encouraging to learn that music therapy is a potent ally as we traverse the complex realm of mental health. Its capacity to reduce symptoms, improve well-being, and provide comfort to people in need is compellingly illustrated by the facts that make up this article. Harmony is never too far away, even in a society where it often seems unattainable. Music therapy serves as a good reminder of this."
    }
  },
  {
    title: "The Future of Machine Learning in 2024",
    excerpt: "Exploring the latest trends and innovations in machine learning and their impact on various industries.",
    date: "2024-01-15",
    category: "tech",
    image: "/placeholder.svg",
    readTime: "8 min read",
    mediumUrl: "#",
    featured: true
  },
  {
    title: "Building Scalable Data Pipelines",
    excerpt: "A comprehensive guide to designing and implementing efficient data pipelines for large-scale applications.",
    date: "2024-01-10",
    category: "tech",
    image: "/placeholder.svg",
    readTime: "12 min read",
    mediumUrl: "#",
    featured: true
  },
  {
    title: "Time Series Forecasting Best Practices",
    excerpt: "Learn the best practices and common pitfalls in time series forecasting with practical examples.",
    date: "2024-01-05",
    category: "tech",
    image: "/placeholder.svg",
    readTime: "10 min read",
    mediumUrl: "#",
    featured: true
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

const magicReveal = {
  initial: { 
    opacity: 0,
    scale: 0.8,
    filter: "blur(10px)",
    background: "radial-gradient(circle at center, rgba(147, 51, 234, 0.2), transparent)"
  },
  animate: { 
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    background: "none",
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const shimmer = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity
    }
  }
}

// Add a new component for full blog post view
const BlogPost = ({ post }) => {
  const [likes, setLikes] = useState(0)

  const handleLike = () => {
    setLikes(prev => prev + 1)
  }

  return (
    <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
      <div className="space-y-4 text-center mb-8">
        <h1 className="text-4xl font-bold !mb-2">{post.title}</h1>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <span>{post.author}</span>
          <span>·</span>
          <span>{post.publication}</span>
          <span>·</span>
          <span>{post.readTime}</span>
          <span>·</span>
          <button 
            onClick={handleLike}
            className="flex items-center gap-1 text-muted-foreground hover:text-pink-500 transition-colors"
          >
            <Heart className="h-4 w-4" />
            <span>{likes}</span>
          </button>
        </div>
      </div>

      <div className="relative aspect-[21/9] mb-8 rounded-xl overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-8">
        {post.content.introduction.map((para, index) => (
          <p key={index}>{para}</p>
        ))}

        {post.content.sections.map((section, index) => (
          <section key={index} className="space-y-4">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            {section.content.map((item, itemIndex) => (
              typeof item === 'string' ? (
                <p key={itemIndex}>{item}</p>
              ) : (
                <div key={itemIndex} className="space-y-2">
                  <h3 className="text-xl font-semibold">{item.subtitle}</h3>
                  <p>{item.description}</p>
                  {item.keyPoints && (
                    <ul className="list-disc pl-6">
                      {item.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            ))}
          </section>
        ))}

        <p>{post.content.conclusion}</p>
      </div>
    </article>
  )
}

// Update the featured posts section to include the full blog post view when clicked
const FeaturedPosts = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null)
  const [postLikes, setPostLikes] = useState({})

  const handleLike = (postId) => {
    setPostLikes(prev => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1
    }))
  }

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <m.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedPost(post)}
            className="cursor-pointer"
          >
            <Card className="overflow-hidden group h-full hover:border-purple-500/50 transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 rounded-full text-xs bg-purple-500/20 text-purple-500 backdrop-blur-sm">
                    {categories.find(c => c.id === post.category)?.name}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-purple-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <time>{format(new Date(post.date), 'MMM d, yyyy')}</time>
                  <div className="flex items-center gap-2">
                    <span>{post.readTime}</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        handleLike(index)
                      }}
                      className="flex items-center gap-1 hover:text-pink-500 transition-colors"
                    >
                      <Heart className="h-4 w-4" />
                      <span>{postLikes[index] || 0}</span>
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </m.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPost && (
          <m.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="min-h-screen px-4 py-16">
              <m.div
                className="bg-card max-w-4xl mx-auto rounded-xl p-8 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <button
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted"
                  onClick={() => setSelectedPost(null)}
                >
                  <X className="w-6 h-6" />
                </button>
                <BlogPost post={selectedPost} />
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container py-24">
      <m.div
        className="space-y-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Hero Section */}
        <m.div 
          variants={magicReveal}
          className="relative space-y-8 text-center"
        >
          <m.div 
            className="absolute inset-0 bg-gradient-radial from-purple-500/10 to-transparent -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="space-y-4">
            <m.div className="flex items-center justify-center gap-2">
              <BookOpen className="w-8 h-8 text-purple-500" />
              <h1 className="text-4xl font-bold">Risad Writes</h1>
            </m.div>
            <m.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Scribbling letters to express how my weird heart beats
            </m.p>
            <m.div
              className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"
              variants={shimmer}
              animate="animate"
              style={{ backgroundSize: "200% 100%" }}
            />
          </div>

          {/* Search Bar */}
          <m.div 
            className="max-w-md mx-auto"
            variants={fadeInUp}
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </m.div>
        </m.div>

        {/* Categories Grid */}
        <m.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            const isSelected = selectedCategory === category.id
            return (
              <m.div
                key={category.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedCategory(isSelected ? "all" : category.id)}
              >
                <Card 
                  className={cn(
                    "p-6 cursor-pointer transition-all duration-300",
                    "hover:border-purple-500/50 hover:shadow-lg",
                    isSelected && "border-purple-500 bg-purple-500/5"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-purple-500/10">
                      <Icon className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </Card>
              </m.div>
            )
          })}
        </m.div>

        {/* Featured Posts */}
        <m.section variants={fadeInUp} className="space-y-8">
          <h2 className="text-2xl font-bold">Featured Stories</h2>
          <FeaturedPosts posts={filteredPosts.filter(post => post.featured)} />
        </m.section>

        {/* Newsletter Subscription */}
        <m.section 
          variants={magicReveal}
          className="relative rounded-xl p-8 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold">Stay Updated</h2>
            <p className="text-muted-foreground">
              Subscribe to get notified about new stories and updates.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </m.section>
      </m.div>
    </div>
  )
} 