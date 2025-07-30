import { ColabCardProps } from "@/components/colab/colab-card"

// Updated interface to support multiple platforms
export interface NotebookEntry {
  id: string
  title: string
  description: string
  platform: "kaggle" | "colab" | "github" | "personal"
  url: string
  
  // Universal metadata
  views: number
  likes: number // votes for Kaggle, likes for Colab
  downloads?: number
  lastUpdated: string
  
  // Classification
  category: string[]
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  tags: string[]
  
  // Platform-specific
  kaggleMedal?: "bronze" | "silver" | "gold"
  githubStars?: number
  
  // Rich content
  thumbnail: string
  keyTakeaways?: string[]
  prerequisites?: string[]
  estimatedTime: string
  featured?: boolean
  
  // Authors
  author?: string
  coauthors?: string[]
}

export const notebookEntries: NotebookEntry[] = [
  // Kaggle Notebooks
  {
    id: "tigerllm-benchmarking",
    title: "TigerLLM Testing and Benchmarking",
    description: "Comprehensive capability assessment and benchmarking of md-nishat-008/TigerLLM-1B-it Bengali Language Model. Detailed evaluation of model performance, limitations, and usage recommendations.",
    platform: "kaggle",
    url: "https://www.kaggle.com/code/risadmalik/tigerllm-testing-and-benchmarking",
    views: 1250,
    likes: 89,
    downloads: 234,
    lastUpdated: "2024-12-15",
    category: ["NLP", "Model Evaluation"],
    difficulty: "Advanced",
    tags: ["TigerLLM", "Bengali", "Benchmarking", "LLM Evaluation", "Performance Analysis"],
    thumbnail: "/colab/placeholder.svg",
    keyTakeaways: [
      "Comprehensive LLM capability assessment methodology",
      "Bengali language model performance insights",
      "Model benchmarking best practices"
    ],
    prerequisites: ["Understanding of LLM concepts", "Basic Bengali language knowledge", "Model evaluation metrics"],
    estimatedTime: "45 min",
    featured: true,
    author: "Risad Raihan Malik"
  },
  {
    id: "bengali-llama-reality-check",
    title: "Bengali LLaMA Reality Check: hassanaliemon/bn_r-8b",
    description: "Complete performance analysis of hassanaliemon/bn_rag_llama3-8b model. Discovering what it's actually good at - excels in creative tasks (4.9/5) but struggles with factual Q&A (0-25% accuracy).",
    platform: "kaggle",
    url: "https://www.kaggle.com/code/risadmalik/bengali-llama-reality-check-hassanaliemon-bn-r-8b",
    views: 2100,
    likes: 156,
    downloads: 445,
    lastUpdated: "2024-11-28",
    category: ["NLP", "Model Evaluation"],
    difficulty: "Intermediate",
    tags: ["LLaMA", "Bengali", "RAG", "Performance Analysis", "Reality Check"],
    thumbnail: "/colab/placeholder.svg",
    keyTakeaways: [
      "Creative tasks: Excellent (4.9/5) performance",
      "Factual Q&A: Poor (0-25%) accuracy",
      "Best for content generation, avoid for information retrieval"
    ],
    prerequisites: ["LLM basics", "Bengali language familiarity", "RAG concepts"],
    estimatedTime: "35 min",
    featured: true,
    author: "Risad Raihan Malik"
  },
  {
    id: "corpus-bangla-tokenizers",
    title: "Corpus Bangla Dataset - BPE vs SentencePiece",
    description: "Comparative analysis of Byte-Pair Encoding (BPE) and SentencePiece tokenizers trained on OSCAR Bengali dataset (4,601 examples). Determines optimal tokenization strategy for Bengali NLP fine-tuning.",
    platform: "kaggle",
    url: "https://www.kaggle.com/code/risadmalik/corpus-bangla-dataset-bpe-vs-sentencepiece",
    views: 890,
    likes: 67,
    downloads: 123,
    lastUpdated: "2024-10-22",
    category: ["NLP", "Data Processing"],
    difficulty: "Advanced",
    tags: ["BPE", "SentencePiece", "Bengali", "Tokenization", "OSCAR Dataset"],
    thumbnail: "/colab/placeholder.svg",
    keyTakeaways: [
      "BPE vs SentencePiece performance comparison",
      "Bengali tokenization best practices",
      "OSCAR dataset preprocessing insights"
    ],
    prerequisites: ["Tokenization concepts", "Bengali NLP background", "Python proficiency"],
    estimatedTime: "50 min",
    featured: false,
    author: "Risad Raihan Malik"
  },
  {
    id: "flusk-ocr-bengali",
    title: "Flusk OCR Testing for Extracting Bengali Data",
    description: "Testing Flusk OCR capabilities for extracting Bengali text data from PDF documents. Comprehensive evaluation of OCR accuracy and performance for Bengali language processing.",
    platform: "kaggle",
    url: "https://www.kaggle.com/code/risadmalik/flusk-test",
    views: 634,
    likes: 43,
    downloads: 89,
    lastUpdated: "2024-09-18",
    category: ["Computer Vision", "Data Processing"],
    difficulty: "Intermediate",
    tags: ["OCR", "Bengali", "Flusk", "PDF Processing", "Text Extraction"],
    thumbnail: "/colab/placeholder.svg",
    keyTakeaways: [
      "Flusk OCR performance on Bengali text",
      "PDF text extraction workflows",
      "Bengali OCR challenges and solutions"
    ],
    prerequisites: ["OCR concepts", "PDF processing basics", "Bengali text handling"],
    estimatedTime: "30 min",
    featured: false,
    author: "Risad Raihan Malik"
  },
  
  // Google Colab Notebooks
  {
    id: "attention-mechanism-positional-encoding",
    title: "Attention Mechanism - Positional Encoding",
    description: "Deep dive into attention mechanisms and positional encoding using neural networks. Detailed visual understanding including softmax operations and transformer architecture components.",
    platform: "colab",
    url: "https://colab.research.google.com/drive/1Xo8zjnD8KRkHfBOLp8FbtjyBzT5GSzWu",
    views: 3420,
    likes: 198,
    lastUpdated: "2024-11-15",
    category: ["NLP", "Deep Learning"],
    difficulty: "Advanced",
    tags: ["Attention Mechanism", "Positional Encoding", "Transformers", "Neural Networks", "Softmax"],
    thumbnail: "/colab/placeholder.svg",
    keyTakeaways: [
      "Visual understanding of attention mechanisms",
      "Positional encoding implementation details",
      "Softmax operations in transformers"
    ],
    prerequisites: ["Deep learning basics", "Neural network concepts", "Linear algebra"],
    estimatedTime: "60 min",
    featured: true,
    author: "Risad Raihan Malik"
  },
  {
    id: "sequence-to-sequence-model",
    title: "Developing a Sequence-to-Sequence Model",
    description: "Comprehensive guide to developing sequence-to-sequence models with BLEU score evaluation metrics. Complete implementation from data preprocessing to model evaluation.",
    platform: "colab",
    url: "https://colab.research.google.com/drive/15d9Xbg_Qlq-_-HXj1CFprbR1_pyCIH-k",
    views: 2890,
    likes: 167,
    lastUpdated: "2024-10-08",
    category: ["NLP", "Deep Learning"],
    difficulty: "Intermediate",
    tags: ["Seq2Seq", "BLEU Score", "Neural Machine Translation", "Encoder-Decoder"],
    thumbnail: "/colab/placeholder.svg",
    keyTakeaways: [
      "Seq2Seq model architecture implementation",
      "BLEU score evaluation methodology",
      "End-to-end model development pipeline"
    ],
    prerequisites: ["RNN/LSTM knowledge", "NLP basics", "Python proficiency"],
    estimatedTime: "75 min",
    featured: false,
    author: "Fatema Akbari",
    coauthors: ["Risad Raihan Malik"]
  },
  {
    id: "pretraining-llms-huggingface",
    title: "Pre-training LLMs with HuggingFace",
    description: "Complete guide to pre-training large language models using HuggingFace transformers library. Covers data preparation, model architecture, training strategies, and optimization techniques.",
    platform: "colab",
    url: "https://colab.research.google.com/drive/1AuEMlW82FWsfM7Pt3WwGZQTK178Xbpv9",
    views: 4560,
    likes: 289,
    lastUpdated: "2024-12-01",
    category: ["NLP", "Model Training"],
    difficulty: "Advanced",
    tags: ["LLM", "Pre-training", "HuggingFace", "Transformers", "Model Training"],
    thumbnail: "/colab/placeholder.svg",
    keyTakeaways: [
      "LLM pre-training methodology",
      "HuggingFace training pipeline setup",
      "Optimization strategies for large models"
    ],
    prerequisites: ["Advanced NLP knowledge", "Transformer architecture", "Distributed training concepts"],
    estimatedTime: "90 min",
    featured: true,
    author: "Risad Raihan Malik"
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    description: "Telco customer churn prediction using ensemble methods including Random Forest, Decision Tree, and XGBoost. Complete pipeline from data analysis to model deployment with performance comparison.",
    platform: "colab",
    url: "https://colab.research.google.com/drive/1z3C0MgoKjzX5joO8AnMh9d1Yh9pY8n-K",
    views: 2340,
    likes: 145,
    lastUpdated: "2024-09-25",
    category: ["Machine Learning", "Data Science"],
    difficulty: "Intermediate",
    tags: ["Churn Prediction", "Random Forest", "XGBoost", "Decision Trees", "Telco Analytics"],
    thumbnail: "/colab/placeholder.svg",
    keyTakeaways: [
      "Ensemble methods for churn prediction",
      "Feature engineering for customer data",
      "Model comparison and evaluation strategies"
    ],
    prerequisites: ["Machine learning basics", "Pandas/NumPy", "Classification algorithms"],
    estimatedTime: "45 min",
    featured: false,
    author: "Risad Raihan Malik"
  },
  {
    id: "stock-forecasting-lstm",
    title: "Stock Forecasting using LSTM",
    description: "Amazon stock price forecasting using Long Short-Term Memory (LSTM) neural networks. Time series analysis, data preprocessing, model training, and prediction visualization.",
    platform: "colab",
    url: "https://colab.research.google.com/drive/1CFNJJ29ToWZymb2HoXJlvjTAb97YV7mI",
    views: 1890,
    likes: 112,
    lastUpdated: "2024-08-14",
    category: ["Time Series", "Deep Learning"],
    difficulty: "Intermediate",
    tags: ["LSTM", "Stock Forecasting", "Time Series", "Amazon Stock", "Neural Networks"],
    thumbnail: "/colab/placeholder.svg",
    keyTakeaways: [
      "LSTM implementation for time series",
      "Stock price prediction methodology",
      "Time series data preprocessing techniques"
    ],
    prerequisites: ["Time series concepts", "LSTM understanding", "Financial data basics"],
    estimatedTime: "55 min",
    featured: false,
    author: "Risad Raihan Malik"
  }
]

// Backward compatibility - convert NotebookEntry to ColabCardProps for existing components
export const colabNotebooks: ColabCardProps[] = notebookEntries.map(notebook => ({
  title: notebook.title,
  description: notebook.description,
  colabUrl: notebook.url,
  tags: notebook.tags,
  thumbnail: notebook.thumbnail,
  views: notebook.views,
  likes: notebook.likes,
  lastUpdated: notebook.lastUpdated,
  difficulty: notebook.difficulty,
  category: notebook.category[0] as "NLP" | "Computer Vision" | "Data Analysis" | "ML Models" | "Tutorials",
  estimatedTime: notebook.estimatedTime,
  featured: notebook.featured || false
})) 