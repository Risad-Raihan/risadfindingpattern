"use client"

import Image from "next/image"
import { useState } from "react"

interface CustomImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
}

export function CustomImage({ src, alt, className, fill, width, height, priority = false }: CustomImageProps) {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className={`relative overflow-hidden ${className || ''} ${isLoading ? 'animate-pulse bg-muted' : ''}`}>
      <Image
        src={src}
        alt={alt}
        className={`duration-700 ease-in-out ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        quality={100}
        onLoadingComplete={() => setLoading(false)}
        unoptimized
      />
    </div>
  )
} 