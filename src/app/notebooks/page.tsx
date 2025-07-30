"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BookOpen, 
  Play, 
  TrendingUp, 
  Star, 
  Users, 
  ArrowRight,
  Sparkles,
  Zap,
  Code2,
  Eye,
  TrendingUp as TrendingUpIcon,
  Award,
  Download,
  ExternalLink
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NotebooksGrid } from "@/components/notebooks/notebooks-grid"
import { notebookEntries } from "@/data/colab-notebooks"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function NotebooksPage() {
  const totalViews = notebookEntries.reduce((sum, n) => sum + n.views, 0)
  const totalLikes = notebookEntries.reduce((sum, n) => sum + n.likes, 0)
  const totalDownloads = notebookEntries.reduce((sum, n) => sum + (n.downloads || 0), 0)
  const featuredCount = notebookEntries.filter(n => n.featured).length
  const kaggleCount = notebookEntries.filter(n => n.platform === 'kaggle').length
  const colabCount = notebookEntries.filter(n => n.platform === 'colab').length

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Hero Section */}
      <motion.section 
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5" />
        <div className="container relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Main Title */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                
                {/* Platform Badges */}
                <div className="flex gap-2">
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-3 py-2">
                    <Award className="w-4 h-4 mr-1" />
                    Kaggle
                  </Badge>
                  <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 px-3 py-2">
                    <Play className="w-4 h-4 mr-1" />
                    Colab
                  </Badge>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500">
                Interactive Notebooks
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore my collection of machine learning notebooks across Kaggle and Google Colab. 
                From Bengali NLP models to advanced AI benchmarking, dive into hands-on implementations 
                with real-world insights and performance analysis.
              </p>
            </motion.div>

            {/* Enhanced Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              <Card className="p-4 text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
                <BookOpen className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                <div className="text-2xl font-bold text-purple-500">{notebookEntries.length}</div>
                <div className="text-sm text-muted-foreground">Total Notebooks</div>
              </Card>
              
              <Card className="p-4 text-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
                <Eye className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                <div className="text-2xl font-bold text-blue-500">{totalViews.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </Card>
              
              <Card className="p-4 text-center bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
                <Star className="w-6 h-6 mx-auto mb-2 text-green-500" />
                <div className="text-2xl font-bold text-green-500">{totalLikes.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Likes</div>
              </Card>
              
              <Card className="p-4 text-center bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
                <Download className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                <div className="text-2xl font-bold text-orange-500">{totalDownloads.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </Card>
              
              <Card className="p-4 text-center bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border-yellow-500/20">
                <Sparkles className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                <div className="text-2xl font-bold text-yellow-500">{featuredCount}</div>
                <div className="text-sm text-muted-foreground">Featured</div>
              </Card>
            </motion.div>

            {/* Platform Stats */}
            <motion.div 
              className="flex justify-center gap-6 text-sm text-muted-foreground"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>{kaggleCount} Kaggle Notebooks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span>{colabCount} Colab Notebooks</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <Link href="#notebooks">
                  Explore Notebooks
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                asChild
              >
                <Link href="https://kaggle.com/risadmalik" target="_blank">
                  <Award className="mr-2 w-5 h-5" />
                  View Kaggle Profile
                </Link>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
                asChild
              >
                <Link href="https://colab.research.google.com" target="_blank">
                  <Play className="mr-2 w-5 h-5" />
                  Open Colab
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Overview */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You'll Discover</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From cutting-edge Bengali NLP models to comprehensive AI benchmarking, explore 
              real-world implementations with detailed analysis and performance insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Bengali NLP & LLMs",
                description: "TigerLLM benchmarking, Bengali LLaMA analysis, tokenization strategies, and language model evaluation",
                color: "from-blue-500 to-cyan-500",
                count: notebookEntries.filter(n => n.tags.some(tag => tag.toLowerCase().includes('bengali') || tag.toLowerCase().includes('llm'))).length,
                platform: "kaggle"
              },
              {
                icon: Eye,
                title: "Model Evaluation & Benchmarking",
                description: "Comprehensive model testing, performance analysis, reality checks, and capability assessment",
                color: "from-purple-500 to-pink-500",
                count: notebookEntries.filter(n => n.tags.some(tag => tag.toLowerCase().includes('benchmarking') || tag.toLowerCase().includes('evaluation'))).length,
                platform: "kaggle"
              },
              {
                icon: TrendingUpIcon,
                title: "Deep Learning Fundamentals",
                description: "Attention mechanisms, positional encoding, sequence-to-sequence models, and neural architecture",
                color: "from-green-500 to-emerald-500",
                count: notebookEntries.filter(n => n.category.includes("Deep Learning")).length,
                platform: "colab"
              },
              {
                icon: Sparkles,
                title: "Practical Machine Learning",
                description: "Customer churn prediction, stock forecasting, time series analysis, and real-world applications",
                color: "from-orange-500 to-red-500",
                count: notebookEntries.filter(n => n.category.includes("Machine Learning") || n.category.includes("Time Series")).length,
                platform: "colab"
              },
              {
                icon: Zap,
                title: "Data Processing & OCR",
                description: "Bengali text extraction, PDF processing, tokenization comparison, and data preprocessing",
                color: "from-indigo-500 to-purple-500",
                count: notebookEntries.filter(n => n.category.includes("Data Processing")).length,
                platform: "kaggle"
              }
            ].map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-500/30">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} w-fit shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge className={`${category.platform === 'kaggle' ? 'bg-blue-500' : 'bg-orange-500'} text-white border-0`}>
                          {category.platform === 'kaggle' ? 'Kaggle' : 'Colab'}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                        <Badge className={`bg-gradient-to-r ${category.color} text-white border-0`}>
                          {category.count}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Notebooks Grid */}
      <motion.section 
        id="notebooks"
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <NotebooksGrid notebooks={notebookEntries} />
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Ready to Dive In?</h2>
              <p className="text-muted-foreground text-lg">
                Explore interactive notebooks with real-world data, detailed analysis, and practical insights. 
                All notebooks include comprehensive documentation and reproducible results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                asChild
              >
                <Link href="/portfolio">
                  View Other Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
} 