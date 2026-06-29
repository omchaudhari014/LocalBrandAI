# LocalBrandAI 🚀

**AI Marketing Assistant for Local Indian Businesses**  
Team: **INDIA RUNS 4** | Leader: **Om Chaudhari**

LocalBrandAI is a mobile-first AI-powered marketing assistant that helps small Indian businesses generate ready-to-share promotional campaigns in regional languages. A shop owner enters simple details like business name, offer, target audience, language, platform, and tone. The app generates captions, WhatsApp messages, Instagram captions, hashtags, voice-ad scripts, and downloadable promotional posters.

## Live Links

- Frontend: https://local-brand-ai-jet.vercel.app
- Backend: https://localbrandai.onrender.com
- Backend health check: https://localbrandai.onrender.com/health

## Problem Statement

Small local businesses often struggle with digital marketing because they do not have time, writing confidence, design skills, or access to professional marketing tools. Many tools are English-first and too complex for small shop owners.

## Solution

LocalBrandAI converts basic business inputs into practical marketing assets:

- Short marketing caption
- WhatsApp promotional message
- Instagram caption with hashtags
- Regional-language voice advertisement script
- Downloadable promotional poster
- Campaign history and analytics dashboard

## Key Features

- ✅ Mobile-first React interface
- ✅ Node.js + Express backend
- ✅ Smart mock AI fallback
- ✅ Gemini API-ready backend integration
- ✅ Regional language support: English, Hindi, Marathi, Gujarati, Tamil
- ✅ Voice playback using browser SpeechSynthesis
- ✅ Downloadable poster generated using HTML Canvas
- ✅ WhatsApp sharing
- ✅ Campaign history storage
- ✅ Analytics dashboard
- ✅ Deployment-ready for Vercel + Render

## Tech Stack

### Frontend
- React.js
- Vite
- CSS
- Lucide React icons
- Browser SpeechSynthesis API
- HTML Canvas poster generation

### Backend
- Node.js
- Express.js
- CORS
- dotenv
- UUID
- JSON file storage
- Gemini API-ready AI service

## Folder Structure

```text
LocalBrandAI/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Analytics.jsx
│   │   │   ├── CampaignForm.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── HistoryCard.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── ResultCard.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   │   ├── aiService.js
│   │   ├── storageService.js
│   │   ├── translationService.js
│   │   └── voiceService.js
│   ├── data/
│   │   └── campaigns.json
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── screenshots/
├── README.md
└── .gitignore
```

## API Documentation

### Health Check

```http
GET /health
```

### Generate Campaign

```http
POST /api/generate
```

Request body:

```json
{
  "businessName": "Raj Fashion",
  "businessType": "Clothing Store",
  "offer": "Flat 50% off on festive wear",
  "targetAudience": "college students and families",
  "language": "Marathi",
  "platform": "WhatsApp",
  "tone": "Festive"
}
```

### Get Campaigns

```http
GET /api/campaigns
```

### Delete Campaign

```http
DELETE /api/campaigns/:id
```

## How to Run Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

## Environment Variables

### Backend `.env`

Copy `backend/.env.example` to `backend/.env`.

```env
PORT=5000
FRONTEND_URLS=http://localhost:5173,https://local-brand-ai-jet.vercel.app
GEMINI_API_KEY=
GEMINI_MODEL=gemini-1.5-flash
```

If `GEMINI_API_KEY` is empty, the app automatically uses the smart mock campaign generator.

### Frontend `.env`

For local development:

```env
VITE_API_BASE_URL=http://localhost:5000
```

For deployed frontend on Vercel:

```env
VITE_API_BASE_URL=https://localbrandai.onrender.com
```

## Deployment

### Backend on Render

- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`
- Add environment variables:
  - `FRONTEND_URLS=https://local-brand-ai-jet.vercel.app`
  - `GEMINI_API_KEY=your_key_here` optional

### Frontend on Vercel

- Root directory: `frontend`
- Build command: `npm run build`
- Output directory: `dist`
- Add environment variable:
  - `VITE_API_BASE_URL=https://localbrandai.onrender.com`

## Future Scope

- Real voice MP3 generation using Amazon Polly or Google Text-to-Speech
- Poster templates with AI image generation
- MongoDB campaign storage
- Login and business profiles
- Campaign performance analytics
- Instagram/Facebook direct posting integrations
- PWA support for small shop owners

## Hackathon Fit

LocalBrandAI fits the AI for Bharat theme by solving a real daily problem for small businesses using simple, practical, regional-language AI.

## V2 Upgrade Features

- Login and registration with secure password hashing using Node crypto
- Platform-specific output: Instagram shows Instagram caption + hashtags, WhatsApp shows only WhatsApp message, Facebook shows only Facebook post
- Dark theme toggle with glassmorphism UI
- Poster preview modal before download
- PWA support with manifest and service worker
- Mobile-first responsive UI

### New API Routes

```txt
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

### PWA Notes

After deployment, open the Vercel link on mobile and use **Add to Home Screen** to install LocalBrandAI like an app.

## Latest UI Upgrade

- Removed hero feature pills and moved feature highlights into a polished footer feature section.
- Improved light theme contrast so text remains readable.
- Added animated AI orb, floating UI cards, mesh background, and soft morphing gradients.
- Added cleaner glassmorphism cards and bento-style feature layout.
- Poster preview, PWA, login/register, platform-specific output, voice playback, and analytics remain supported.
