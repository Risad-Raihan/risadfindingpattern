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

export function CustomImage({ src, alt, className, fill, width, height, priority }: CustomImageProps) {
  const [isLoading, setLoading] = useState(true)
  
  // Handle image path
  const imageSrc = src.startsWith('http') 
    ? src 
    : src.startsWith('/') 
      ? src 
      : `/${src}`

  return (
    <div className={`relative ${className || ''} ${isLoading ? 'animate-pulse bg-muted' : ''}`}>
      <Image
        src={imageSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        onLoad={() => setLoading(false)}
        quality={90}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  )
} 