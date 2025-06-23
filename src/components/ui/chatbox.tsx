"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Button } from './button'
import { Input } from './input'
import { Card } from './card'
import { X, Send, Bot, User, Terminal, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

interface ChatboxProps {
  className?: string
}

// Removed model selector - using single reliable model

const PLUTO_MOODS = {
  happy: '😊',
  excited: '🤩',
  thinking: '🤔',
  sleeping: '😴',
  playful: '😜',
  loving: '🥰'
}

export function Chatbox({ className }: ChatboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Pluto, Risad's AI Friend! 🤖 I'm here to help you learn about his work, skills, and experience. You can ask me about his projects, technical expertise, education, or how to get in touch. What would you like to know?",
      role: 'assistant',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // Removed model selection - using single model
  const [plutoMood, setPlutoMood] = useState<keyof typeof PLUTO_MOODS>('happy')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    // Change Pluto's mood based on activity
    if (isLoading) {
      setPlutoMood('thinking')
    } else if (messages.length > 3) {
      setPlutoMood('excited')
    } else {
      setPlutoMood('happy')
    }
  }, [isLoading, messages.length])

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: inputValue
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        role: 'assistant',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I encountered an error. Please try asking your question again!",
        role: 'assistant',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className={cn("fixed bottom-6 right-6 z-50", className)}>
      {/* Floating Bot Button - Terminal Style */}
      {!isOpen && (
        <div className="relative group">
          <button
            onClick={() => setIsOpen(true)}
            className="relative h-14 w-14 rounded-lg bg-black/80 backdrop-blur-xl border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-primary/20 flex items-center justify-center group"
          >
            {/* Terminal effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Bot icon with terminal styling */}
            <Terminal className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors relative z-10" />
            
            {/* Active indicator */}
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
          </button>
          
          {/* Hover tooltip with terminal styling */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-black/90 backdrop-blur-xl border border-primary/30 rounded-lg px-3 py-2 text-sm text-primary/90 whitespace-nowrap font-mono shadow-xl">
              <div className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <span>chat --with pluto</span>
              </div>
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary/30"></div>
            </div>
          </div>
        </div>
      )}

      {/* Terminal Chat Interface */}
      {isOpen && (
        <div className="w-96 h-[500px] bg-black/95 backdrop-blur-xl border border-primary/30 rounded-xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center justify-between p-4 border-b border-primary/20 bg-gradient-to-r from-primary/10 to-transparent">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-primary/80" />
                <span className="text-sm font-mono text-primary/90">pluto@portfolio:~$</span>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="h-7 w-7 rounded-md hover:bg-red-500/20 transition-colors duration-200 flex items-center justify-center text-red-400 hover:text-red-300"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Status Bar */}
          <div className="px-4 py-2 bg-primary/5 border-b border-primary/10">
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-primary/70">
                <Zap className="h-3 w-3" />
                <span>AI Assistant Online</span>
              </div>
              <div className="text-green-400">Connected</div>
            </div>
          </div>

          {/* Messages Area - Terminal Style */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-black/95 to-black/90 scrollbar-thin">
            {messages.map((message) => (
              <div key={message.id} className="animate-in slide-in-from-bottom-2 duration-300">
                {message.role === 'assistant' ? (
                  // Assistant message - terminal output style
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-primary/60">
                      <Terminal className="h-3 w-3" />
                      <span>pluto@ai:~$</span>
                      <span className="text-primary/40">{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 ml-4">
                      <div className="text-sm leading-relaxed text-primary/90 whitespace-pre-wrap font-mono">
                        {message.content}
                      </div>
                    </div>
                  </div>
                ) : (
                  // User message - command input style
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-green-400/60">
                      <span>user@portfolio:~$</span>
                      <span className="text-primary/40">{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 ml-4">
                      <div className="text-sm text-green-300/90 font-mono">
                        {message.content}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Loading Animation - Terminal Style */}
            {isLoading && (
              <div className="animate-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-center gap-2 text-xs font-mono text-primary/60">
                  <Terminal className="h-3 w-3" />
                  <span>pluto@ai:~$</span>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 ml-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-primary rounded-full animate-bounce delay-100"></div>
                      <div className="w-1 h-1 bg-primary rounded-full animate-bounce delay-200"></div>
                    </div>
                    <span className="text-xs font-mono text-primary/70">Processing query...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Terminal Input Area */}
          <div className="border-t border-primary/20 bg-black/90 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-green-400">user@portfolio:~$</span>
            </div>
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your query..."
                className="flex-1 bg-transparent border border-primary/30 focus:border-primary/60 rounded-lg px-3 py-2 text-sm font-mono text-primary/90 placeholder-primary/50 focus:ring-1 focus:ring-primary/30"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="h-10 w-10 bg-primary/20 hover:bg-primary/30 border border-primary/40 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4 text-primary" />
              </Button>
            </div>
            <div className="mt-2 text-xs font-mono text-primary/40 text-center">
              Press Enter to send • Powered by AI
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 