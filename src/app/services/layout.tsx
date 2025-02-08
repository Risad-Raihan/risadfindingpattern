import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services - RisadFindingPattern",
  description: "Explore our comprehensive range of digital solutions including web development, data analytics, AI solutions, and creative design services.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 