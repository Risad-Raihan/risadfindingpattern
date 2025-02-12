"use client"

import { getBlogPostBySlug } from "@/lib/contentful"
import { useEffect, useState } from "react"
import { motion as m } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import type { BlogPost } from "@/types/contentful"

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong className="font-bold">{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <em className="italic">{text}</em>,
    [MARKS.UNDERLINE]: (text: React.ReactNode) => <u className="underline">{text}</u>,
    [MARKS.CODE]: (text: React.ReactNode) => (
      <code className="bg-muted px-1.5 py-0.5 rounded-md font-mono text-sm">{text}</code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <p className="mb-6 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
      <h1 className="text-4xl font-bold mt-12 mb-6 gradient-text">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <h2 className="text-3xl font-bold mt-10 mb-4 gradient-text">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
      <h3 className="text-2xl font-bold mt-8 mb-4 gradient-text">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => (
      <h4 className="text-xl font-bold mt-6 mb-4">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node: any, children: React.ReactNode) => (
      <h5 className="text-lg font-bold mt-4 mb-2">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node: any, children: React.ReactNode) => (
      <h6 className="text-base font-bold mt-4 mb-2">{children}</h6>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { title, description, file } = node.data.target.fields
      const { url, details } = file
      const { width = 800 } = details?.image || {}
      
      return (
        <div className="my-8">
          <div className="relative w-full rounded-lg overflow-hidden" style={{ maxWidth: width }}>
            <Image
              src={`https:${url}`}
              alt={description || title || "Blog post image"}
              width={width}
              height={Math.round(width * 9/16)}
              className="object-cover"
            />
          </div>
          {description && (
            <p className="text-sm text-muted-foreground text-center mt-2">{description}</p>
          )}
        </div>
      )
    },
    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-primary pl-4 my-6 italic">
        {children}
      </blockquote>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
      <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
      <li className="ml-4">{children}</li>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-muted" />,
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary/80 underline"
      >
        {children}
      </a>
    ),
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      try {
        const fetchedPost = await getBlogPostBySlug(params.slug)
        setPost(fetchedPost)
      } catch (error) {
        console.error("Error fetching post:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.slug])

  if (loading) {
    return (
      <div className="container py-24 space-y-8">
        <div className="h-8 w-64 bg-muted animate-pulse rounded-lg" />
        <div className="aspect-[21/9] w-full bg-muted animate-pulse rounded-xl" />
        <div className="space-y-4 max-w-3xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 bg-muted animate-pulse rounded-lg" style={{ width: `${Math.random() * 40 + 60}%` }} />
          ))}
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <m.div
        className="container py-24 space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back Button */}
        <m.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="ghost" asChild>
            <Link href="/blog" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </Button>
        </m.div>

        {/* Hero Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.fields.categories.map((category) => (
                <Badge key={category} variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                  {category}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              {post.fields.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.fields.author.fields.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time>{new Date(post.fields.publishedDate).toLocaleDateString()}</time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.fields.readingTime} min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[21/9] relative rounded-xl overflow-hidden">
            <Image
              src={`https:${post.fields.featuredImage.fields.file.url}`}
              alt={post.fields.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <Card className="max-w-4xl mx-auto p-8 md:p-12">
          <div className="mb-8">
            <p className="text-xl text-muted-foreground italic">
              {post.fields.excerpt}
            </p>
          </div>
          {documentToReactComponents(post.fields.content, richTextOptions)}
        </Card>

        {/* Tags */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {post.fields.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="hover:bg-primary/10">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Author Card */}
        <Card className="max-w-4xl mx-auto p-8">
          <div className="flex items-center gap-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
              <Image
                src={`https:${post.fields.author.fields.avatar.fields.file.url}`}
                alt={post.fields.author.fields.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{post.fields.author.fields.name}</h3>
              <p className="text-muted-foreground">{post.fields.author.fields.bio}</p>
            </div>
          </div>
        </Card>
      </m.div>
    </div>
  )
} 