import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Chatbox } from "@/components/ui/chatbox"
import type { ReactNode } from "react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RisadFindingPattern - ML & AI Portfolio",
  description: "AI Engineer specializing in LLM Fine-tuning, RAG Chatbots, and Machine Learning Solutions",
  icons: {
    icon: '/RFP_logo.png',
    shortcut: '/RFP_logo.png',
    apple: '/RFP_logo.png',
  },
  openGraph: {
    title: "RisadFindingPattern - ML & AI Portfolio",
    description: "AI Engineer specializing in LLM Fine-tuning, RAG Chatbots, and Machine Learning Solutions",
    url: "https://risadfindingpatterns.com",
    siteName: "RisadFindingPattern",
    images: [
      {
        url: '/RFP_logo.png',
        width: 800,
        height: 600,
        alt: 'RisadFindingPattern Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "RisadFindingPattern - ML & AI Portfolio",
    description: "AI Engineer specializing in LLM Fine-tuning, RAG Chatbots, and Machine Learning Solutions",
    images: ['/RFP_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="icon" href="/RFP_logo.png" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-18K8R4YX4P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-18K8R4YX4P');
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Chatbox />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
  