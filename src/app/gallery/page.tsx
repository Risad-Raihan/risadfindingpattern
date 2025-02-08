"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const images = {
  presentations: [
    {
      src: "/placeholder.svg",
      alt: "Conference presentation",
      title: "ML Conference 2023",
      description: "Presenting research on advanced ML techniques",
    },
    {
      src: "/placeholder.svg",
      alt: "Workshop",
      title: "Data Science Workshop",
      description: "Leading a workshop on predictive modeling",
    },
  ],
  projects: [
    {
      src: "/placeholder.svg",
      alt: "Project visualization",
      title: "Data Visualization Project",
      description: "Interactive dashboard for data analysis",
    },
    {
      src: "/placeholder.svg",
      alt: "ML Model",
      title: "ML Model Architecture",
      description: "Complex neural network architecture",
    },
  ],
  events: [
    {
      src: "/placeholder.svg",
      alt: "Hackathon",
      title: "AI Hackathon",
      description: "Winner of the ML track",
    },
    {
      src: "/placeholder.svg",
      alt: "Meetup",
      title: "Data Science Meetup",
      description: "Community gathering of data enthusiasts",
    },
  ],
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const modalVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedTab, setSelectedTab] = useState("presentations")

  return (
    <div className="container py-12">
      <motion.div 
        className="space-y-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp}>
          <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Gallery
          </h1>
          <p className="text-muted-foreground text-lg">
            A visual journey through my professional experiences and achievements.
          </p>
        </motion.div>

        <Tabs 
          defaultValue="presentations" 
          className="w-full"
          value={selectedTab}
          onValueChange={setSelectedTab}
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="presentations">Presentations</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            {Object.entries(images).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <motion.div 
                  className="grid gap-6 md:grid-cols-2"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {items.map((image, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card 
                        className="overflow-hidden cursor-pointer group" 
                        onClick={() => setSelectedImage(image)}
                      >
                        <div className="aspect-video relative overflow-hidden">
                          <Image 
                            src={image.src || "/placeholder.svg"} 
                            alt={image.alt} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              View Image
                            </p>
                          </div>
                        </div>
                        <motion.div 
                          className="p-4"
                          variants={fadeInUp}
                        >
                          <h3 className="font-semibold">{image.title}</h3>
                          <p className="text-sm text-muted-foreground">{image.description}</p>
                        </motion.div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div 
                className="relative max-w-3xl w-full bg-card rounded-lg overflow-hidden"
                variants={modalVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={e => e.stopPropagation()}
              >
                <div className="aspect-video relative">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 bg-card">
                  <h2 className="text-xl font-bold">{selectedImage.title}</h2>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
                <button
                  className="absolute top-2 right-2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
} 