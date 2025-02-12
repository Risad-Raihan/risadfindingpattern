#!/bin/bash

echo "🚀 Starting deployment process..."

# Build the application
echo "📦 Building the application..."
npm run build

# Push to GitHub
echo "📤 Pushing to GitHub..."
git add .
git commit -m "Deploy: $(date)"
git push

echo "✅ Deployment process completed!"
echo "🌐 Your changes will be automatically deployed by Vercel" 