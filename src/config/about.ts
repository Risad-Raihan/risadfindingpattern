type TechIcon = "python" | "javascript" | "typescript" | "r" | "tensorflow" | "pytorch" | "nextjs" | 
  "react" | "nodejs" | "postgresql" | "mongodb" | "redis" | "docker" | "aws" | "git"

type ServiceIcon = "brain" | "code" | "chart" | "lightbulb"

type SkillLevel = "Expert" | "Advanced" | "Intermediate"

interface TechItem {
  name: string
  icon: TechIcon
  level: SkillLevel
}

interface Service {
  title: string
  description: string
  icon: ServiceIcon
  highlights: string[]
}

export const bioData = {
  shortBio: "A passionate Machine Learning Engineer and Full Stack Developer with expertise in building intelligent systems and scalable web applications. I specialize in transforming complex data into actionable insights and creating innovative solutions that drive business value.",
  location: "Dhaka, Bangladesh",
  yearsOfExperience: 3,
  completedProjects: 25,
}

export const techStack: Record<string, TechItem[]> = {
  languages: [
    { name: "Python", icon: "python", level: "Expert" },
    { name: "JavaScript", icon: "javascript", level: "Expert" },
    { name: "TypeScript", icon: "typescript", level: "Advanced" },
    { name: "R", icon: "r", level: "Intermediate" },
  ],
  frameworks: [
    { name: "TensorFlow", icon: "tensorflow", level: "Expert" },
    { name: "PyTorch", icon: "pytorch", level: "Advanced" },
    { name: "Next.js", icon: "nextjs", level: "Expert" },
    { name: "React", icon: "react", level: "Expert" },
    { name: "Node.js", icon: "nodejs", level: "Advanced" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "postgresql", level: "Advanced" },
    { name: "MongoDB", icon: "mongodb", level: "Advanced" },
    { name: "Redis", icon: "redis", level: "Intermediate" },
  ],
  tools: [
    { name: "Docker", icon: "docker", level: "Advanced" },
    { name: "AWS", icon: "aws", level: "Advanced" },
    { name: "Git", icon: "git", level: "Expert" },
  ],
}

export const services: Service[] = [
  {
    title: "Machine Learning Solutions",
    description: "End-to-end ML pipelines, model development, and deployment for real-world applications",
    icon: "brain",
    highlights: [
      "Custom ML Model Development",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Time Series Analysis",
    ],
  },
  {
    title: "Full Stack Development",
    description: "Modern, scalable web applications with focus on performance and user experience",
    icon: "code",
    highlights: [
      "Web Application Development",
      "API Development",
      "Database Design",
      "Cloud Deployment",
    ],
  },
  {
    title: "Data Analytics",
    description: "Transforming raw data into actionable insights through advanced analytics",
    icon: "chart",
    highlights: [
      "Data Visualization",
      "Statistical Analysis",
      "Business Intelligence",
      "Predictive Analytics",
    ],
  },
  {
    title: "Technical Consulting",
    description: "Expert guidance on technology strategy and implementation",
    icon: "lightbulb",
    highlights: [
      "Architecture Design",
      "Tech Stack Selection",
      "Performance Optimization",
      "Best Practices Implementation",
    ],
  },
] 