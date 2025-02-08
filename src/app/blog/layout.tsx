import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - RisadFindingPattern",
  description: "Explore insights and tutorials about machine learning, data science, and technology.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 