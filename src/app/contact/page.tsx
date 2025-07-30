"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion as m, AnimatePresence } from "framer-motion"
import { MapPin, Mail, Phone, Send, MessageSquare, Clock, ArrowRight, CheckCircle2 } from "lucide-react"
import { SocialLinks } from "@/components/social-links"
import { useState } from "react"

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

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: "Road: 7, House: 9, Block A",
    subDetails: "Mirpur 10, Dhaka",
    subDetails2: "Bangladesh - 1216"
  },
  {
    icon: Mail,
    title: "Email",
    details: "rrmalik66@gmail.com",
    link: "mailto:rrmalik66@gmail.com"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+880 1639 672704",
    link: "tel:+8801639672704"
  }
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <div className="container py-24">
      <m.div
        className="space-y-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Hero Section */}
        <m.div variants={fadeInUp} className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </m.div>

        {/* Contact Cards */}
        <m.div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <m.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 text-center space-y-4 h-full hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-purple-500 transition-colors"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <>
                        <p className="text-muted-foreground">{info.details}</p>
                        <p className="text-muted-foreground">{info.subDetails}</p>
                        <p className="text-muted-foreground">{info.subDetails2}</p>
                      </>
                    )}
                  </div>
                </Card>
              </m.div>
            )
          })}
        </m.div>

        {/* Map and Form Section */}
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8">
          {/* Map */}
          <m.div variants={fadeInUp} className="h-[600px]">
            <Card className="w-full h-full overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5983460042287!2d90.36923847506733!3d23.807553886344788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c7c05!2sMirpur%2010%20Circle%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1705811436044!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </m.div>

          {/* Contact Form */}
          <m.div variants={fadeInUp}>
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-purple-500" />
                  <h2 className="text-2xl font-semibold">Send a Message</h2>
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <m.div
                      className="space-y-4 text-center py-8"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-semibold">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </m.div>
                  ) : (
                    <m.form
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="What's this about?"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Your message here..."
                          className="min-h-[150px]"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <m.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </m.form>
                  )}
                </AnimatePresence>
              </div>
            </Card>
          </m.div>
        </div>

        {/* Social Links Section */}
        <m.div variants={fadeInUp} className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Connect With Me</h2>
            <p className="text-muted-foreground">
              Follow me on social media to stay updated with my latest work and thoughts.
            </p>
          </div>
          <div className="flex justify-center">
            <SocialLinks className="scale-125" />
          </div>
        </m.div>

        {/* Office Hours */}
        <m.div variants={fadeInUp} className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-5 h-5 text-purple-500" />
            <h2 className="text-2xl font-semibold">Office Hours</h2>
          </div>
          <div className="max-w-md mx-auto space-y-2 text-muted-foreground">
            <p>Monday - Friday: 9:00 AM - 6:00 PM (GMT+6)</p>
            <p>Saturday: 10:00 AM - 2:00 PM (GMT+6)</p>
            <p>Sunday: Closed</p>
          </div>
        </m.div>

        {/* CTA Section */}
        <m.div
          variants={fadeInUp}
          className="relative rounded-xl p-8 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
          <div className="relative space-y-4">
            <h2 className="text-2xl font-bold">Ready to Start a Project?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you need chatbot development, ML model deployment, or SaaS solutions,
              I'm here to help turn your AI vision into reality with cutting-edge technology.
            </p>
            <Button size="lg" className="group">
              Let's Work Together
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </m.div>
      </m.div>
    </div>
  )
} 