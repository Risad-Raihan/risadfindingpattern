import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
import type { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RisadFindingPattern - Data Analytics & ML Portfolio",
  description: "ML Developer specializing in SaaS, Web Development, and Analytical Solutions",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
  