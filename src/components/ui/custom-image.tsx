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
  const imageSrc = src.startsWith('http') ? src : `${process.env.NEXT_PUBLIC_VERCEL_URL || ''}${src}`

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
        onLoadingComplete={() => setLoading(false)}
        quality={90}
      />
    </div>
  )
} 