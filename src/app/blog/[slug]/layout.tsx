import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog Post - RisadFindingPattern",
  description: "Read our latest insights about machine learning, data science, and technology.",
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