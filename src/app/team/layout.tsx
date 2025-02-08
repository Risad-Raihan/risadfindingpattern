import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team - RisadFindingPattern",
  description: "Meet our talented team of creative professionals who bring innovation and expertise to every project.",
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 