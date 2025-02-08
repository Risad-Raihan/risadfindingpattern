import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio - RisadFindingPattern",
  description: "Explore my projects in Machine Learning, Data Science, and Web Development.",
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 