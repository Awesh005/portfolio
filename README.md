
# MD Awesh Portfolio

A professional, high-performance portfolio website built with React, Tailwind CSS, and Framer Motion. Features a Gemini-powered AI Assistant for interactive recruitment conversations.

## 🚀 Features

- **Responsive Design:** Mobile-first architecture with glassmorphic UI.
- **Dark Mode:** Unified theme management across all components.
- **AI Assistant:** Integrated Gemini Flash model with custom persona.
- **Animations:** Smooth scroll and reveal effects using Framer Motion.
- **Optimized Performance:** Lazy loading, asset optimization, and lean code.

## 🛠️ Tech Stack

- **Framework:** React 19
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **AI Integration:** @google/genai (Gemini 2.0 Flash)
- **Icons:** Custom SVG & Emoji

## 📦 Setup & Development

1. **Clone the project**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Environment Variables:**
   Create a `.env` file and add your Google AI Studio API Key:
   ```env
   API_KEY=your_gemini_api_key_here
   ```
4. **Run development server:**
   ```bash
   npm start
   ```

## 🏗️ Build & Deployment

### Vercel Deployment

1. Connect your GitHub repository to [Vercel](https://vercel.com).
2. Configure the **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist` (or `build`)
3. **Environment Variables:**
   Add `API_KEY` in the Vercel dashboard under Project Settings > Environment Variables.
4. Click **Deploy**.

## 📝 Project Structure

```text
/components   - Reusable UI elements
/constants    - Static data (Education, Skills, Projects)
/services     - External API logic (Gemini)
/types        - TypeScript interfaces
App.tsx       - Main application state & routing
index.html    - SEO & Tailwind config
```

## ✅ Final Checklist

- [x] API Key configured in production environment.
- [x] Responsive layout tested on iOS/Android.
- [x] Form submission validation.
- [x] SEO Meta tags and OpenGraph images verified.
- [x] Performance: Images use lazy loading.
- [x] Accessibility: ARIA labels added to interactive elements.
