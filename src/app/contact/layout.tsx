import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - RisadFindingPattern",
  description: "Get in touch with me for collaborations, projects, or just to say hello. Let's create something amazing together.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 