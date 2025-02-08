import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery - RisadFindingPattern",
  description: "A visual showcase of my presentations, projects, and events in Machine Learning and Data Science.",
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 