import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interactive Notebooks - RisadFindingPattern",
  description: "Explore Risad's machine learning notebooks across Kaggle and Google Colab. From Bengali NLP models to AI benchmarking, dive into hands-on implementations with real-world insights.",
}

export default function NotebooksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 