# 🤖 AI-Powered Portfolio Chatbot Setup Guide

Your portfolio now includes an advanced AI chatbot powered by **Hugging Face Transformers** with multiple free models!

## 🚀 Features

- **5 Different AI Models** to choose from
- **Real-time model switching** in the chat interface
- **Fallback system** for reliability
- **Mobile-responsive** design
- **Context-aware** responses about your portfolio

## 🎯 Available AI Models

### 1. **Smart Assistant (Zephyr-7B)** [Default]
- **Model:** `HuggingFaceH4/zephyr-7b-beta`
- **Best for:** General questions, detailed explanations
- **Quality:** ⭐⭐⭐⭐⭐
- **Speed:** ⭐⭐⭐

### 2. **Conversational (DialoGPT)**
- **Model:** `microsoft/DialoGPT-medium`
- **Best for:** Natural conversations, casual chat
- **Quality:** ⭐⭐⭐⭐
- **Speed:** ⭐⭐⭐⭐

### 3. **Fast Response (DialoGPT-Small)**
- **Model:** `microsoft/DialoGPT-small`
- **Best for:** Quick responses, low latency
- **Quality:** ⭐⭐⭐
- **Speed:** ⭐⭐⭐⭐⭐

### 4. **Technical Expert (Qwen-2.5)**
- **Model:** `Qwen/Qwen2.5-1.5B-Instruct`
- **Best for:** Technical questions, coding, multilingual
- **Quality:** ⭐⭐⭐⭐⭐
- **Speed:** ⭐⭐⭐⭐

### 5. **Empathetic (Mental Health)**
- **Model:** `GRMenon/mental-health-mistral-7b-instructv0.2-finetuned-V2`
- **Best for:** Supportive responses, career advice
- **Quality:** ⭐⭐⭐⭐
- **Speed:** ⭐⭐⭐

## 🔧 Setup Instructions

### Step 1: Get Your Hugging Face API Key

1. Go to [Hugging Face](https://huggingface.co/)
2. Sign up/Login to your account
3. Navigate to [Settings > Access Tokens](https://huggingface.co/settings/tokens)
4. Click **"New token"**
5. Name it something like "Portfolio-Chatbot"
6. Select **"Read"** permissions
7. Copy your API key

### Step 2: Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Hugging Face API Configuration
HUGGINGFACE_API_KEY=hf_your_actual_api_key_here
```

### Step 3: Test the Chatbot

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your portfolio at `http://localhost:3000`

3. Look for the **floating chat button** in the bottom-right corner

4. Click it and test with messages like:
   - "Hi! Tell me about Risad's skills"
   - "What projects has he worked on?"
   - "How can I contact him?"

### Step 4: Switch Between Models

- Click the **Settings** dropdown in the chat header
- Select different models to compare responses
- Each model has different strengths!

## 🛠️ Customization Options

### Add Your Own Context

Edit `src/app/api/chat/route.ts` and modify the `systemPrompt` to include:
- Your specific projects and achievements
- Your technical skills and certifications
- Your contact preferences
- Your personality and communication style

### Add More Models

Add new models to the `MODELS` object in `src/app/api/chat/route.ts`:

```typescript
const MODELS = {
  // ... existing models
  YOUR_MODEL: 'huggingface-username/your-model-name',
}
```

### Customize the UI

The chatbot styling can be modified in `src/components/ui/chatbox.tsx`:
- Change colors, gradients, and themes
- Modify the size and positioning
- Add custom icons or branding

## 🌟 Pro Tips

1. **Model Selection:**
   - Use **Zephyr-7B** for the most comprehensive responses
   - Use **DialoGPT-Small** for the fastest responses
   - Use **Qwen** for technical/coding questions
   - Use **Mental Health** for career advice and support

2. **API Key Security:**
   - Never commit your `.env.local` file to Git
   - Use environment variables in production
   - Consider rate limiting for high-traffic sites

3. **Performance:**
   - The first response might be slower (cold start)
   - Subsequent responses are typically faster
   - Fallback responses ensure reliability

## 🚀 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect to Vercel
3. Add your environment variable:
   - Go to your Vercel project settings
   - Add `HUGGINGFACE_API_KEY` with your API key
4. Deploy!

### Other Platforms

Make sure to add the `HUGGINGFACE_API_KEY` environment variable to your deployment platform.

## 🆘 Troubleshooting

### Common Issues:

1. **"API Key not found" Error:**
   - Check your `.env.local` file
   - Restart your development server
   - Verify the API key is correct

2. **Model not responding:**
   - Check the Hugging Face model status
   - Try switching to a different model
   - Check your internet connection

3. **Slow responses:**
   - Switch to the "Fast Response" model
   - Consider implementing caching
   - Check your API rate limits

## 🎉 You're All Set!

Your portfolio now has a professional AI chatbot that can:
- Answer questions about your experience
- Guide visitors through your portfolio
- Provide different response styles
- Work offline with fallback responses

Enjoy your new AI-powered portfolio chatbot! 🚀

---

**Need help?** Check the [Hugging Face Documentation](https://huggingface.co/docs) or reach out for support! 