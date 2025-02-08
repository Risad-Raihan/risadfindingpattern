"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type Theme = "dark" | "light" | "system"
type Attribute = "class" | "data-theme"

export function ThemeProvider({ children, ...props }: React.PropsWithChildren<{ 
  attribute?: Attribute; 
  defaultTheme?: Theme; 
  enableSystem?: boolean 
}>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
} 