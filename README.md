# 🚀 LocalBrandAI

**AI Marketing Assistant for Small Businesses in India**

Generate engaging social media content in multiple Indian languages.

---

## 🎯 Three Versions Available

### 1. 🟢 Simple Version (Recommended for Testing)
- **No AWS or Database required!**
- Works immediately after installing Node.js
- Perfect for quick testing
- **Files:** `server-simple.js` + `index-with-api.html`
- **Guide:** [RUN_SIMPLE_VERSION.md](RUN_SIMPLE_VERSION.md)

### 2. 🔵 Database Version (Save Your Content)
- **Includes MongoDB database**
- Save and view history of generated content
- Statistics dashboard
- **Files:** `server-with-db.js` + `index-with-database.html`
- **Guide:** [DATABASE_SETUP.md](DATABASE_SETUP.md)

### 3. 🟣 Full Version (Production Ready with AI)
- Requires AWS Bedrock account
- Real AI-powered content generation
- Multi-language support with Claude AI
- **Files:** `server.js` + AWS credentials
- **Guide:** [INSTALLATION_GUIDE.md](INSTALLATION_GUIDE.md)

---

## ⚡ Quick Start (Simple Version)

### Step 1: Install Node.js
Download from: **https://nodejs.org/** (LTS version)

### Step 2: Install Dependencies
```powershell
cd localbrandai-backend
npm install express cors
```

### Step 3: Start Backend
```powershell
node server-simple.js
```
Or double-click: `localbrandai-backend/start-simple.bat`

### Step 4: Open Frontend
Open `index-with-api.html` in your browser

**That's it!** 🎉

---

## 📁 Project Structure

```
om1/
├── index.html                      # Standalone frontend (demo)
├── index-with-api.html            # Frontend with API integration
├── localbrandai-backend/
│   ├── server-simple.js           # Simple backend (no AWS)
│   ├── server.js                  # Full backend (with AWS)
│   ├── start-simple.bat           # Easy start script
│   └── package.json               # Dependencies
├── RUN_SIMPLE_VERSION.md          # Simple version guide
├── INSTALLATION_GUIDE.md          # Full version guide
└── README.md                      # This file
```

---

## 🎨 Features

### Current Features
- ✅ Multi-language support (Hindi, Marathi, Gujarati, Tamil)
- ✅ Beautiful, responsive UI
- ✅ RESTful API
- ✅ Copy to clipboard
- ✅ Error handling
- ✅ Loading states

### Full Version Only
- 🤖 AI-powered content generation (AWS Bedrock)
- 🎯 Culturally appropriate content
- 🌟 Advanced language models (Claude 3)

---

## 🛠️ Technology Stack

**Frontend:**
- React 18
- Vanilla JavaScript
- CSS3 with gradients

**Backend:**
- Node.js
- Express.js
- CORS enabled

**AI (Full Version):**
- AWS Bedrock
- Claude 3 Sonnet

---

## 📚 Documentation

- **[RUN_SIMPLE_VERSION.md](RUN_SIMPLE_VERSION.md)** - Quick start guide (no AWS)
- **[INSTALLATION_GUIDE.md](INSTALLATION_GUIDE.md)** - Full version setup
- **[localbrandai-backend/README.md](localbrandai-backend/README.md)** - Backend API docs

---

## 🆘 Troubleshooting

### "npm is not recognized"
→ Install Node.js from https://nodejs.org/ and restart computer

### "Cannot find module 'express'"
→ Run `npm install express cors` in `localbrandai-backend` folder

### "Failed to connect to server"
→ Make sure backend is running (should see "Server running on port 5000")

### "Port 5000 already in use"
→ Change port in `server-simple.js` or stop other programs using port 5000

---

## 🔄 Switching Between Versions

### Use Simple Version:
```powershell
cd localbrandai-backend
node server-simple.js
```
Open: `index-with-api.html`

### Use Full Version:
```powershell
cd localbrandai-backend
node server.js
```
Configure `.env` with AWS credentials first!

---

## 🚀 Deployment

### Simple Version
- Can be deployed to any Node.js hosting (Heroku, Railway, Render)
- No special configuration needed

### Full Version
- Requires AWS credentials as environment variables
- Use AWS Lambda + API Gateway for serverless
- Or deploy to EC2, ECS, or any Node.js hosting

---

## 📊 API Endpoints

### Simple Version
```
POST /generate
Body: { businessType, offer, language }
Response: { message: "generated caption" }
```

### Full Version
```
GET /health
POST /api/generate
POST /api/generate-image-prompt
```

---

## 🎓 Next Steps

1. ✅ Test with simple version
2. ✅ Verify everything works
3. ✅ Get AWS Bedrock access
4. ✅ Configure AWS credentials
5. ✅ Switch to full version
6. ✅ Deploy to production

---

## 🔐 Security Notes

- Never commit `.env` file
- Keep AWS credentials secure
- Use environment variables in production
- Implement rate limiting
- Add authentication for production use

---

## 📄 License

ISC

---

## 🎉 Made for AWS AI for Bharat Hackathon 🇮🇳

**Start with the simple version, then upgrade to full AI power!**
