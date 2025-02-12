"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Entry } from 'contentful'

interface ContentfulBlogPost extends Entry<any> {
  fields: {
    title: string
    slug: string
    author: {
      fields: {
        name: string
        bio: string
        avatar: {
          fields: {
            file: {
              url: string
            }
          }
        }
      }
    }
    featuredImage: {
      fields: {
        file: {
          url: string
        }
      }
    }
    excerpt: string
    content: any
    categories: string[]
    tags: string[]
    publishedDate: string
    readingTime: number
  }
}

interface BlogCardProps {
  post: ContentfulBlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { title, slug, excerpt, featuredImage, publishedDate, readingTime, categories, tags } = post.fields;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/blog/${slug}`}>
        <Card className="overflow-hidden hover:border-primary/50 transition-colors duration-300">
          <div className="aspect-video relative">
            <Image
              src={`https:${featuredImage.fields.file.url}`}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
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
                <Calendar className="w-4 h-4" />
                {new Date(publishedDate).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {readingTime} min read
              </div>
            </div>

            <div className="flex items-center text-primary font-medium group">
              Read More
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
} 