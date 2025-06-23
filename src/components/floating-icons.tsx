"use client"

import { motion as m } from "framer-motion"
import { useEffect, useState } from "react"

// Reduce the number of doodles
const doodles = [
  {
    path: "M10 10 Q 50 0, 90 10 T 170 10",
    position: { top: "20%", left: "10%" },
    color: "#9333ea"
  },
  {
    path: "M10 80 Q 52.5 10, 95 80 T 180 80",
    position: { top: "45%", right: "15%" },
    color: "#db2777"
  },
  {
    path: "M0 50 A 50 50 0 1 1 100 50 A 50 50 0 1 1 0 50",
    position: { top: "60%", right: "25%" },
    color: "#db2777"
  }
]

// Optimize floating elements by reducing their number and complexity
const floatingElements = [
  // Golden Snitch (keep as it's Harry Potter themed)
  {
    element: (
      <div className="relative">
        <div className="w-4 h-4 bg-yellow-500/80 rounded-full animate-pulse">
          <div className="absolute -right-4 top-1/2 w-6 h-2 bg-yellow-500/60 rounded-full rotate-45" />
          <div className="absolute -left-4 top-1/2 w-6 h-2 bg-yellow-500/60 rounded-full -rotate-45" />
        </div>
      </div>
    ),
    position: { top: "25%", right: "30%" },
    animate: { x: [-20, 20], y: [-10, 10], rotate: [-20, 20] },
    transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
  },
  // Mars-like Planet
  {
    element: (
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/80 to-orange-600/80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]" />
        </div>
      </div>
    ),
    position: { top: "35%", left: "15%" },
    animate: { rotate: [0, 360] },
    transition: { duration: 30, repeat: Infinity }
  },
  // Large Comet
  {
    element: (
      <div className="relative">
        <div className="relative w-4 h-4">
          <div className="absolute inset-0 rounded-full bg-blue-200/90 animate-pulse">
            <div className="absolute right-0 w-32 h-1.5 bg-gradient-to-r from-blue-200/80 via-blue-200/40 to-transparent blur-sm" />
            <div className="absolute right-0 w-48 h-0.5 bg-gradient-to-r from-blue-200/50 via-blue-200/20 to-transparent blur-sm transform translate-y-1" />
          </div>
        </div>
      </div>
    ),
    position: { top: "40%", right: "10%" },
    animate: { x: [-200, 400], y: [-100, 200], rotate: 15 },
    transition: { duration: 7, repeat: Infinity }
  },
  // Twinkling Stars Group
  {
    element: (
      <div className="relative w-32 h-32">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-[twinkle_2s_ease-in-out_infinite]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <div className="absolute inset-0 bg-white rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          </div>
        ))}
      </div>
    ),
    position: { top: "15%", right: "45%" },
    animate: { scale: [1, 1.1, 1] },
    transition: { duration: 5, repeat: Infinity }
  }
]

const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}

const FloatingIcons = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <m.div 
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated SVG doodles (constellations) */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
        {doodles.map((doodle, index) => (
          <m.path
            key={index}
            d={doodle.path}
            stroke={doodle.color}
            strokeWidth="3"
            fill="none"
            initial="hidden"
            animate="visible"
            variants={pathVariants}
            style={doodle.position}
          />
        ))}
      </svg>

      {/* Floating elements */}
      {floatingElements.map((element, index) => (
        <m.div
          key={index}
          className="absolute"
          style={element.position}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, ...element.animate }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ...element.transition,
            repeatType: element.transition.repeatType as "loop" | "reverse" | "mirror"
          }}
        >
          {element.element}
        </m.div>
      ))}

      {/* Simplified Cosmic Nebulas */}
      <div className="absolute top-1/4 left-1/4 w-[45rem] h-[45rem]">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/30 via-pink-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-[50rem] h-[50rem]">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>
      
      {/* Simplified Space Dust */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.1] via-transparent to-transparent mix-blend-overlay" />
    </m.div>
  )
}

export default FloatingIcons 