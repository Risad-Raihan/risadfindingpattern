import type { Metadata } from "next"
import { getBlogPostBySlug } from "@/lib/contentful"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: "Blog Post Not Found - RisadFindingPattern",
      description: "The requested blog post could not be found.",
    }
  }

  const { title, excerpt, featuredImage } = post.fields

  return {
    title: `${title} - RisadFindingPattern`,
    description: excerpt,
    openGraph: {
      title: title,
      description: excerpt,
      images: featuredImage?.fields?.file?.url 
        ? [`https:${featuredImage.fields.file.url}`]
        : ['/placeholder.svg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: excerpt,
      images: featuredImage?.fields?.file?.url 
        ? [`https:${featuredImage.fields.file.url}`]
        : ['/placeholder.svg'],
    },
  }
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-dot-pattern min-h-screen">
      {children}
    </div>
  )
} 