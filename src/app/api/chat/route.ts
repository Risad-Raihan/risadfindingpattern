import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // Generate intelligent response using portfolio knowledge
    const response = await generatePortfolioResponse(message)

    return NextResponse.json({ response })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Intelligent portfolio assistant with context awareness
async function generatePortfolioResponse(message: string): Promise<string> {
  const lowerMessage = message.toLowerCase()

  // Portfolio Knowledge Base
  const portfolioKnowledge = {
    about: {
      keywords: ['about', 'who', 'risad', 'background', 'bio', 'profile'],
      response: "Hi! I'm Pluto, here to help you learn about Risad. He's a passionate ML Developer specializing in Data Analytics & Machine Learning. Risad has expertise in SaaS Development, Web Development, and building analytical solutions. His tech stack includes Python, JavaScript/TypeScript, React, Next.js, and various ML frameworks. He's currently working on innovative projects combining AI with practical business solutions."
    },
    
    skills: {
      keywords: ['skill', 'technology', 'tech', 'stack', 'programming', 'language', 'tool', 'framework'],
      response: "Risad has strong expertise in:\n\n🐍 **Backend**: Python, Machine Learning, Data Analytics\n💻 **Frontend**: JavaScript/TypeScript, React, Next.js\n🔧 **Tools**: Git, Docker, Cloud Technologies\n📊 **Analytics**: Data Science, Statistical Analysis, ML Model Development\n🚀 **SaaS**: Full-stack development, API design, Database management\n\nHe's particularly skilled in creating data-driven solutions and modern web applications!"
    },

    projects: {
      keywords: ['project', 'work', 'portfolio', 'built', 'created', 'developed', 'show', 'example'],
      response: "Risad has worked on several exciting projects! Here are some highlights:\n\n🤖 **Customer Churn Prediction**: ML model to predict customer retention using advanced analytics\n💊 **MediBot**: Healthcare chatbot providing medical assistance and information\n📊 **Data Analytics Platforms**: Custom dashboards and analytical tools\n🌐 **Web Applications**: Modern, responsive applications using React and Next.js\n\nCheck out his portfolio section to see detailed case studies with demos and code examples!"
    },

    education: {
      keywords: ['education', 'study', 'degree', 'university', 'academic', 'qualification', 'learning'],
      response: "Risad has a strong educational background in technology and data science. He's continuously learning and staying updated with the latest trends in ML and web development. His academic foundation supports his practical expertise in building real-world solutions. You can find more details about his educational journey in the education section of his portfolio!"
    },

    contact: {
      keywords: ['contact', 'hire', 'work', 'opportunity', 'email', 'reach', 'connect', 'collaborate'],
      response: "Ready to work with Risad? Great choice! 🎉\n\nYou can reach out through:\n📧 Check the contact section for his email\n💼 Connect on LinkedIn\n🐙 View his code on GitHub\n\nRisad is always open to discussing:\n• Freelance projects\n• Full-time opportunities\n• Collaboration on ML/Data projects\n• SaaS development work\n\nFeel free to reach out - he'd love to hear about your project!"
    },

    github: {
      keywords: ['github', 'git', 'code', 'repository', 'repo', 'source'],
      response: "You can find Risad's code and projects on GitHub! 🐙\n\nHis repositories showcase:\n• Machine Learning projects with complete implementations\n• Web applications with clean, documented code\n• Data analysis and visualization projects\n• Open source contributions\n\nCheck out his GitHub profile to see his coding style, project structure, and contribution history. It's a great way to evaluate his technical skills!"
    },

    thesis: {
      keywords: ['thesis', 'research', 'paper', 'study', 'dissertation', 'academic'],
      response: "Risad's thesis work demonstrates his deep understanding of ML and data science applications. His research focuses on practical applications of machine learning in real-world scenarios. The thesis showcases his ability to:\n\n• Conduct thorough research and analysis\n• Apply ML techniques to solve complex problems\n• Present findings clearly and professionally\n• Bridge theory with practical implementation\n\nThis academic work complements his practical development experience perfectly!"
    },

    services: {
      keywords: ['service', 'offer', 'provide', 'help', 'consulting', 'development'],
      response: "Risad offers a range of professional services:\n\n🤖 **ML & Data Analytics**: Custom ML models, data analysis, predictive analytics\n💻 **Web Development**: Full-stack applications, SaaS solutions, responsive design\n📊 **Data Visualization**: Interactive dashboards, reporting systems\n🔧 **Consulting**: Technical guidance, architecture design, code review\n\nHe specializes in combining ML insights with user-friendly web interfaces to create powerful, data-driven applications. Check out the services section for more details!"
    }
  }

  // Greeting responses
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('pluto')) {
    return "Hello! 🐕 I'm Pluto, Risad's AI assistant! I'm here to help you learn about his work, skills, and experience. What would you like to know? You can ask me about his projects, skills, education, or how to get in touch!"
  }

  // Check for portfolio knowledge matches
  for (const [category, data] of Object.entries(portfolioKnowledge)) {
    if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return data.response
    }
  }

  // CV/Resume specific
  if (lowerMessage.includes('cv') || lowerMessage.includes('resume')) {
    return "Risad's CV showcases his comprehensive experience in ML development and web technologies. It highlights his:\n\n📋 **Professional Experience**: Real-world project implementations\n🎯 **Technical Skills**: Detailed technology proficiencies\n🏆 **Achievements**: Key projects and accomplishments\n📚 **Education**: Academic background and certifications\n\nYou can request his CV through the contact section. It provides a complete overview of his qualifications and experience!"
  }

  // Default helpful response
  return "That's an interesting question! I'm here to help you learn about Risad's work and experience. You can ask me about:\n\n• His **projects** and portfolio\n• **Technical skills** and expertise\n• **Education** and background\n• How to **contact** him for opportunities\n• His **GitHub** and code samples\n• **Services** he offers\n\nWhat would you like to know more about? 🚀"
} 