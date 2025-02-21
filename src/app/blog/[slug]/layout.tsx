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
  const imageUrl = featuredImage?.fields?.file?.url 
    ? `https:${featuredImage.fields.file.url}`
    : `${process.env.NEXT_PUBLIC_BASE_URL || 'https://risadfindingpatterns.com'}/placeholder.svg`

  return {
    title: `${title} - RisadFindingPattern`,
    description: excerpt,
    authors: [{ name: "Risad Raihan" }],
    openGraph: {
      type: 'article',
      title: title,
      description: excerpt,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      siteName: 'RisadFindingPattern',
      locale: 'en_US',
      publishedTime: post.fields.publishedDate,
      modifiedTime: post.sys.updatedAt,
      authors: ['Risad Raihan'],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: excerpt,
      images: [imageUrl],
      creator: '@RisadMalik',
      site: '@RisadMalik',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://risadfindingpatterns.com'}/blog/${params.slug}`,
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
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