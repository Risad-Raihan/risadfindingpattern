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
  const [error, setError] = useState(false)

  // Handle image path
  const imageSrc = src.startsWith('http') 
    ? src 
    : src.startsWith('/') 
      ? src 
      : `/${src}`

  if (error) {
    return (
      <div className={`relative ${className || ''} bg-muted flex items-center justify-center`} style={{
        width: width || '100%',
        height: height || '100%',
        minHeight: fill ? '200px' : undefined
      }}>
        <span className="text-muted-foreground text-sm">Failed to load image</span>
      </div>
    )
  }

  return (
    <div 
      className={`relative overflow-hidden ${className || ''} ${isLoading ? 'animate-pulse bg-muted' : ''}`}
      style={{
        width: width || '100%',
        height: height || '100%',
        minHeight: fill ? '200px' : undefined
      }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        className={`duration-700 ease-in-out ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        quality={100}
        onLoadingComplete={() => setLoading(false)}
        onError={() => setError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  )
} 