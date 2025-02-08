import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Education & Experience - RisadFindingPattern",
  description: "My academic journey, professional experience, and certifications in Machine Learning and Data Science.",
}

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 