"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { SiMedium, SiReddit } from "react-icons/si"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Notebooks", href: "/notebooks" },
  { name: "Gallery", href: "/gallery" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/Risad-Raihan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/risad-raihan-malik/", label: "LinkedIn" },
  { icon: SiReddit, href: "https://reddit.com", label: "Reddit" },
  { icon: Twitter, href: "https://twitter.com", label: "X (Twitter)" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: SiMedium, href: "https://medium.com", label: "Medium" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/RFP_logo.png"
              alt="RFP Logo"
              width={32}
              height={32}
              priority
              className="h-8 w-8"
            />
            <span className="hidden font-bold sm:inline-block">RisadFindingPattern</span>
          </Link>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === link.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={cn(
                    "text-foreground/60 transition-colors hover:text-foreground",
                    pathname === link.href ? "text-foreground" : "text-foreground/60"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <Button key={index} variant="ghost" size="icon" asChild>
                      <Link href={social.href} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">{social.label}</span>
                      </Link>
                    </Button>
                  )
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:flex items-center space-x-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <Button key={index} variant="ghost" size="icon" asChild className="hover:bg-transparent">
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </Button>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
} 