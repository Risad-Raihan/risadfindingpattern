import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - RisadFindingPattern",
  description: "Learn more about my experience in Machine Learning, Data Science, and Web Development.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 