"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion as m, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Languages, Award, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { SiBehance } from "react-icons/si"
import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from 'embla-carousel-react'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const shimmer = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity
    }
  }
}

// Portfolio Carousel Component
const PortfolioCarousel = ({ images, projects, behanceUrl }: { 
  images?: string[], 
  projects?: Array<{ title: string; type: string; link: string }>,
  behanceUrl?: string 
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  if (projects) {
    return (
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              className="group"
            >
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-purple-500/50">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:opacity-0 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                      <Badge variant="secondary">{project.type}</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        {behanceUrl && (
          <div className="text-center">
            <Button asChild variant="outline">
              <Link href={`https://behance.net/${behanceUrl}`} target="_blank" className="group">
                <SiBehance className="w-5 h-5 mr-2" />
                View More on Behance
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    )
  }

  if (!images?.length) return null

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="relative aspect-video flex-[0_0_100%]" key={index}>
              <Image
                src={src}
                alt={`Portfolio item ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
        onClick={scrollNext}
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'bg-white w-4' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

// Team member data
const teamMembers = [
  {
    name: "Jahan Zarin",
    role: "Brand Designer & Creative Graphic Specialist",
    image: "/z.jpg",
    portfolio: ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png"],
    location: "Rajshahi, Bangladesh",
    email: "jahanzj123@gmail.com",
    phone: "01787607347",
    linkedin: "Zarin Faria",
    behance: "#",
    summary: "A highly creative and skilled Brand Designer & Graphic Specialist with a passion for visual storytelling and a strong eye for detail. With years of experience in branding, advertising, and packaging design, she excels in developing unique and captivating visuals that enhance brand identity.",
    experience: [
      {
        role: "Brand Specialist & Designer",
        company: "Apon Bazaar",
        period: "2024 – Present",
        highlights: [
          "Developed cohesive brand strategies to align with target audiences",
          "Created visually compelling print and digital marketing materials",
          "Ensured brand consistency across different teams and media platforms",
          "Managed social media engagement and growth strategies",
          "Designed event elements and contributed to event planning"
        ]
      },
      {
        role: "Brand Designer | Creative Graphic Designer",
        company: "Douboo Healthcare",
        period: "2021 – 2023",
        highlights: [
          "Designed logos, packaging, and promotional materials",
          "Worked closely with clients and marketing teams to establish brand identities",
          "Achieved 9/10 in client satisfaction ratings",
          "Designed the top-selling product advertising poster of 2022",
          "Created 20+ product packaging designs"
        ]
      }
    ],
    education: [
      {
        degree: "Master of Fine Arts (MFA) in Graphic Design",
        institution: "University of Rajshahi",
        period: "2020 – 2021"
      },
      {
        degree: "Bachelor of Fine Arts (BFA) in Graphic Design",
        institution: "University of Rajshahi",
        period: "2016 – 2019"
      }
    ],
    skills: {
      technical: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe InDesign",
        "After Effects",
        "Premiere Pro",
        "Lightroom",
        "Microsoft Office",
        "Google Workspace",
        "Canva"
      ],
      soft: [
        "Strong Work Ethic",
        "Creativity",
        "Problem Solving",
        "Adaptability",
        "Time Management",
        "Team Collaboration"
      ]
    },
    certifications: [
      "Awarded by ICT Ministry as a top performer in a design project",
      "Certified in Graphic Design (ICT Division, 2020)",
      "Certified in Mobile Game & Android Development (ICT Division, 2018)",
      "Certified in Graphic Design (TEXLAB, 2017)",
      "HubSpot Certification in Social Media Marketing"
    ],
    languages: [
      { name: "Bangla", level: "Native" },
      { name: "English", level: "Proficient" },
      { name: "Hindi", level: "Advanced" }
    ]
  },
  {
    name: "Ahmed Sifat -E- Rabbi",
    role: "Audio Visual Producer, VJ, Light Designer",
    image: "/sifat.png",
    portfolio: [
      "https://www.behance.net/gallery/186999391/Mujib-100-Projection-Mapping",
      "https://www.behance.net/gallery/186999815/BD50-Projection-Mapping-on-National-Parliament",
      "https://www.behance.net/gallery/187000047/Coke-Studio-Bangla-Concert",
      "https://www.behance.net/gallery/187000255/Cox-Bazar-Airport-Extension-Launching-AV",
      "https://www.behance.net/gallery/187000467/JTI-TLP-Program"
    ],
    location: "Dhaka, Bangladesh",
    email: "ahmed.sifatbd@gmail.com",
    phone: "+880 1764009631",
    linkedin: "ahmedsifatbd",
    behance: "ahmedsifatbd",
    summary: "A highly skilled and experienced visual producer with a diverse background in multimedia and a passion for pushing creative boundaries. Specializing in live event production, 3D visualization, and virtual production, with expertise in projection mapping and immersive experiences.",
    experience: [
      {
        role: "Producer, VJ, Light Designer",
        company: "Studio Z",
        period: "2021 – Present",
        highlights: [
          "Led major projection mapping projects including Mujib 100 and BD50 National Parliament",
          "Designed lighting and visual effects for high-profile concerts including Coke Studio Bangla",
          "Managed end-to-end production for corporate launches including Mercedes Benz and Hero Karizma",
          "Pioneered virtual production techniques for various commercial projects"
        ]
      },
      {
        role: "Creative Consultant",
        company: "GR8 Enterprise",
        period: "2022 – Present",
        highlights: [
          "Provided creative direction for major brand campaigns",
          "Developed innovative visual solutions for corporate events",
          "Consulted on technical setup for large-scale productions"
        ]
      },
      {
        role: "Video Editor & Sound Engineer",
        company: "Zhir Zhir",
        period: "2019 – 2021",
        highlights: [
          "Managed post-production for commercial projects",
          "Created sound design for multimedia productions",
          "Collaborated with creative teams on content development"
        ]
      },
      {
        role: "Creative Head",
        company: "Mad Frame Productions",
        period: "2016 – 2018",
        highlights: [
          "Led creative team in developing multimedia content",
          "Oversaw project execution from concept to delivery",
          "Established production workflows and quality standards"
        ]
      }
    ],
    education: [
      {
        degree: "B.A. Hons, Graphic Design & Multimedia",
        institution: "Shanto Mariyam University of Creative Technology",
        period: "2014 – 2020"
      },
      {
        degree: "HSC, Business Studies",
        institution: "Green Field School & College",
        period: "2012 – 2014"
      }
    ],
    skills: {
      technical: [
        "Adobe After Effects",
        "Adobe Premiere Pro",
        "Cinema 4D",
        "Resolume Arena",
        "TouchDesigner",
        "Unreal Engine",
        "Ableton Live",
        "FL Studio",
        "Maya",
        "Blender",
        "Photoshop",
        "Illustrator",
        "DaVinci Resolve"
      ],
      soft: [
        "Project Management",
        "Creative Direction",
        "Team Leadership",
        "Problem Solving",
        "Client Communication",
        "Time Management"
      ]
    },
    certifications: [
      "Virtual Production Specialist Certification",
      "Advanced Projection Mapping Certification",
      "Professional Light Design Certification"
    ],
    languages: [
      { name: "Bangla", level: "Native" },
      { name: "English", level: "Professional" }
    ],
    projects: [
      {
        title: "Mujib 100",
        type: "Projection Mapping",
        link: "https://www.behance.net/gallery/186999391/Mujib-100-Projection-Mapping"
      },
      {
        title: "BD50 National Parliament",
        type: "Projection Mapping",
        link: "https://www.behance.net/gallery/186999815/BD50-Projection-Mapping-on-National-Parliament"
      },
      {
        title: "Coke Studio Bangla Concert",
        type: "Live Production",
        link: "https://www.behance.net/gallery/187000047/Coke-Studio-Bangla-Concert"
      },
      {
        title: "JTI Virtual Environment",
        type: "3D Visualization",
        link: "https://www.behance.net/gallery/187000467/JTI-TLP-Program"
      }
    ],
    references: [
      {
        name: "Dr. Abu Tareq Muhammad Salahuddin",
        title: "Editor, Star Health, The Daily Star",
        contact: "+880 1730095592",
        email: "tareq.salahuddin@gmail.com"
      },
      {
        name: "Robiul Hossain",
        title: "Proprietor, GR8 Enterprise",
        contact: "+880 1735939191",
        email: "gr8enterprisebd@gmail.com"
      }
    ]
  }
]

export default function TeamPage() {
  return (
    <div className="container py-24">
      <m.div
        className="space-y-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <m.div variants={fadeInUp} className="space-y-4">
          <h1 className="text-4xl font-bold">Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Meet our talented team of creative professionals who bring innovation and expertise to every project.
          </p>
          <m.div
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            variants={shimmer}
            animate="animate"
            style={{ backgroundSize: "200% 100%" }}
          />
        </m.div>

        <div className="grid gap-16">
          {teamMembers.map((member, index) => (
            <m.div
              key={index}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="grid lg:grid-cols-[300px_1fr] gap-8">
                <m.div variants={fadeInUp} className="space-y-4">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold">{member.name}</h2>
                      <p className="text-purple-500">{member.role}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {member.location}
                      </p>
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        {member.email}
                      </p>
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        {member.phone}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" asChild>
                        <Link href={`https://linkedin.com/in/${member.linkedin}`} target="_blank">
                          <Linkedin className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <Link href={member.behance} target="_blank">
                          <SiBehance className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </m.div>

                <div className="space-y-8">
                  <Tabs defaultValue="about" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="about">About</TabsTrigger>
                      <TabsTrigger value="experience">Experience</TabsTrigger>
                      <TabsTrigger value="skills">Skills</TabsTrigger>
                      <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                    </TabsList>
                    <TabsContent value="about" className="space-y-8 mt-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Professional Summary</h3>
                        <p className="text-muted-foreground">{member.summary}</p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-purple-500" />
                          <h3 className="text-xl font-semibold">Education</h3>
                        </div>
                        <div className="grid gap-4">
                          {member.education.map((edu, index) => (
                            <Card key={index} className="p-4">
                              <h4 className="font-semibold">{edu.degree}</h4>
                              <p className="text-muted-foreground">{edu.institution}</p>
                              <p className="text-sm text-muted-foreground">{edu.period}</p>
                            </Card>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Languages className="w-5 h-5 text-purple-500" />
                          <h3 className="text-xl font-semibold">Languages</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {member.languages.map((lang, index) => (
                            <Badge key={index} variant="secondary">
                              {lang.name} - {lang.level}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="experience" className="space-y-6 mt-6">
                      <div className="grid gap-6">
                        {member.experience.map((exp, index) => (
                          <Card key={index} className="p-6">
                            <div className="flex items-start gap-4">
                              <Briefcase className="w-5 h-5 text-purple-500 mt-1" />
                              <div className="space-y-2">
                                <h4 className="font-semibold">{exp.role}</h4>
                                <p className="text-purple-500">{exp.company}</p>
                                <p className="text-sm text-muted-foreground">{exp.period}</p>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                  {exp.highlights.map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="skills" className="space-y-8 mt-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Technical Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.technical.map((skill, index) => (
                            <Badge key={index} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Soft Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.soft.map((skill, index) => (
                            <Badge key={index} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-purple-500" />
                          <h3 className="text-xl font-semibold">Certifications</h3>
                        </div>
                        <div className="grid gap-2">
                          {member.certifications.map((cert, index) => (
                            <p key={index} className="text-muted-foreground flex items-start gap-2">
                              <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                              {cert}
                            </p>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="portfolio" className="mt-6">
                      <PortfolioCarousel 
                        images={member.portfolio} 
                        projects={member.projects}
                        behanceUrl={member.behance}
                      />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </m.div>
    </div>
  )
} 