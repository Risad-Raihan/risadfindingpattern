type TechIcon = "python" | "javascript" | "typescript" | "r" | "tensorflow" | "pytorch" | "nextjs" | 
  "react" | "nodejs" | "postgresql" | "mongodb" | "redis" | "docker" | "aws" | "git" | "gcp" | "huggingface" | "keras" | "flask" | "django"

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
  shortBio: "Highly motivated AI Engineer with a Master's degree in Artificial Intelligence and 2+ years of experience in developing and deploying machine learning solutions, with a strong emphasis on Natural Language Processing. Proven ability to design, develop, and evaluate NLP systems using cutting-edge open-source LLMs and techniques. Expertise in building and deploying NLP applications, including RAG-based chatbots, sentiment analysis models, and language generation systems.",
  location: "Dhaka, Bangladesh",
  yearsOfExperience: 3,
  completedProjects: 25,
  email: "rrmalik66@gmail.com",
  phone: "01639672704",
  github: "github.com/Risad-Raihan",
  linkedin: "in/risad-raihan-malik/",
  education: [
    {
      degree: "Master's in Artificial Intelligence",
      institution: "Liverpool John Moores University",
      location: "Liverpool, United Kingdom",
      period: "September 2021 - December 2022",
      achievements: "Merit"
    },
    {
      degree: "Pre-Masters in Data Science",
      institution: "Liverpool John Moores University",
      location: "Liverpool, United Kingdom",
      period: "February 2021 - August 2021"
    },
    {
      degree: "Bachelor's in Information Technology",
      institution: "Segi University",
      location: "Kota Damansara, Selangor, Malaysia",
      period: "May 2017 - June 2020",
      achievements: "GPA: 3.68"
    }
  ]
}

export const techStack: Record<string, TechItem[]> = {
  languages: [
    { name: "Python", icon: "python", level: "Expert" },
    { name: "SQL", icon: "postgresql", level: "Advanced" },
    { name: "JavaScript", icon: "javascript", level: "Intermediate" },
    { name: "TypeScript", icon: "typescript", level: "Intermediate" },
    { name: "R", icon: "r", level: "Intermediate" },
  ],
  mlAndAi: [
    { name: "TensorFlow", icon: "tensorflow", level: "Expert" },
    { name: "Hugging Face", icon: "huggingface", level: "Expert" },
    { name: "Keras", icon: "keras", level: "Advanced" },
    { name: "PyTorch", icon: "pytorch", level: "Advanced" },
    { name: "XGBoost", icon: "python", level: "Advanced" },
  ],
  cloud: [
    { name: "Google Cloud", icon: "gcp", level: "Advanced" },
    { name: "AWS", icon: "aws", level: "Intermediate" },
    { name: "Azure ML", icon: "aws", level: "Intermediate" },
  ],
  databases: [
    { name: "BigQuery", icon: "gcp", level: "Expert" },
    { name: "PostgreSQL", icon: "postgresql", level: "Advanced" },
    { name: "MongoDB", icon: "mongodb", level: "Intermediate" },
    { name: "Firebase", icon: "mongodb", level: "Intermediate" },
  ],
  webDev: [
    { name: "Flask", icon: "flask", level: "Advanced" },
    { name: "Django", icon: "django", level: "Intermediate" },
    { name: "Next.js", icon: "nextjs", level: "Intermediate" },
    { name: "React", icon: "react", level: "Intermediate" },
  ],
  tools: [
    { name: "Docker", icon: "docker", level: "Advanced" },
    { name: "Git", icon: "git", level: "Advanced" },
    { name: "Jupyter", icon: "python", level: "Expert" },
    { name: "MLflow", icon: "python", level: "Advanced" },
  ],
  visualization: [
    { name: "Looker Studio", icon: "gcp", level: "Expert" },
    { name: "Power BI", icon: "aws", level: "Advanced" },
    { name: "Tableau", icon: "aws", level: "Advanced" },
    { name: "Matplotlib", icon: "python", level: "Expert" },
    { name: "Seaborn", icon: "python", level: "Expert" },
  ],
}

export const services: Service[] = [
  {
    title: "NLP/RAG Chatbot Solutions",
    description: "Building advanced conversational AI systems using cutting-edge NLP and Retrieval Augmented Generation techniques",
    icon: "brain",
    highlights: [
      "Custom NLP Model Development",
      "Sentiment Analysis Systems",
      "Named Entity Recognition (NER)",
      "Text Classification & Generation",
      "RAG-based Knowledge Retrieval",
      "Chatbot Development with Hugging Face"
    ],
  },
  {
    title: "Computer Vision Solutions",
    description: "Implementing image classification, object detection, and segmentation systems for various industries",
    icon: "brain",
    highlights: [
      "Image Classification Models",
      "Object Detection (YOLO, R-CNN)",
      "Transfer Learning Applications",
      "Computer Vision Pipelines",
      "Edge Device Deployment"
    ],
  },
  {
    title: "Predictive Modeling",
    description: "Developing time series forecasting, recommendation systems, and customer behavior prediction models",
    icon: "chart",
    highlights: [
      "Time Series Analysis (SARIMA, SARIMAX)",
      "Customer Segmentation (RFM, K-means)",
      "Churn Prediction Models",
      "Recommendation Systems",
      "A/B Testing Frameworks"
    ],
  },
  {
    title: "Data Analytics & Cloud Solutions",
    description: "Transforming raw data into actionable insights through advanced analytics and cloud infrastructure",
    icon: "chart",
    highlights: [
      "Cloud Migration (GCP, AWS)",
      "ETL Pipeline Development",
      "BigQuery Data Warehousing",
      "Interactive Dashboard Creation",
      "Statistical Analysis & Reporting"
    ],
  },
]

export const projects = [
  {
    title: "MediBot: Medical QA System with RAG and Gemini",
    description: "Developed a medical question-answering chatbot utilizing Retrieval Augmented Generation (RAG) with Hugging Face Transformers and Google's Gemini. Implemented vector embeddings and similarity search with FAISS to retrieve relevant information from medical documents, enabling accurate and context-aware responses.",
    technologies: ["Python", "Hugging Face", "Gemini", "FAISS", "Vector Embeddings", "RAG", "LLMs"],
    link: "https://github.com/Risad-Raihan/Medibot",
    image: "/medibot.png"
  },
  {
    title: "Customer Churn Prediction with MLflow",
    description: "Built a customer churn prediction model using Random Forest with MLflow for experiment tracking, model versioning, and performance monitoring. Deployed the model using Flask to create a REST API for real-time predictions.",
    technologies: ["Python", "Random Forest", "MLflow", "Flask", "Model Deployment", "REST API"],
    link: "https://github.com/Risad-Raihan/Telco_customer_churn",
    image: "/churn.png"
  },
  {
    title: "Time Series Sales Forecasting with LSTM",
    description: "Developed a time series forecasting system for sales prediction using LSTM networks. Implemented data preprocessing, model training, and evaluation to create accurate forecasts for business planning.",
    technologies: ["Python", "LSTM", "Time Series Analysis", "TensorFlow", "Keras"],
    link: "https://colab.research.google.com/drive/1CFNJJ29ToWZymb2HoXJlvjTAb97YV7mI?usp=sharing",
    image: "/projects/timeseries.png"
  },
  {
    title: "Breast Cancer Prediction Using Logistic Regression",
    description: "Created a predictive model for breast cancer diagnosis using logistic regression. The model analyzes medical features to classify tumors as benign or malignant with high accuracy.",
    technologies: ["Python", "Logistic Regression", "scikit-learn", "Data Preprocessing"],
    link: "https://github.com/Risad-Raihan/Breast-Cancer-Prediction--Logistic-Regresssion",
    image: "/projects/cancer.png"
  }
]

export const certificates = [
  {
    title: "From Data to Insights with Google Cloud",
    issuer: "Google Cloud",
    date: "2023",
    description: "BigQuery Specialization focusing on data analysis and insights using GCP's data warehouse",
    link: "#"
  }
] 