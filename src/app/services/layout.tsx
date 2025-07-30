import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI & Development Services - RisadFindingPattern",
  description: "Specialized AI engineering services including chatbot development, ML model development, and SaaS solutions with HuggingFace expertise.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 