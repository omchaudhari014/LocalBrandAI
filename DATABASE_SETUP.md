# 🗄️ Database Setup Guide

This guide will help you set up MongoDB for LocalBrandAI to store generated content.

---

## 📋 What You'll Get

With database integration, you can:
- ✅ Save all generated content
- ✅ View history of generated captions
- ✅ Get statistics (most used languages, business types)
- ✅ Delete old content
- ✅ Search and filter content

---

## 🎯 Two Database Options

### Option 1: Local MongoDB (Free, Offline)
- Runs on your computer
- No internet required
- Good for development

### Option 2: MongoDB Atlas (Free, Cloud)
- Hosted in the cloud
- Access from anywhere
- Free tier available (512MB)

---

## 🚀 Option 1: Local MongoDB Setup

### Step 1: Install MongoDB

**Windows:**
1. Go to: https://www.mongodb.com/try/download/community
2. Download MongoDB Community Server
3. Run the installer
4. ✅ Check "Install MongoDB as a Service"
5. ✅ Check "Install MongoDB Compass" (GUI tool)
6. Complete installation

**Verify Installation:**
```powershell
mongod --version
```

### Step 2: Start MongoDB Service

MongoDB should start automatically. If not:

```powershell
# Start MongoDB service
net start MongoDB
```

### Step 3: Install Node.js Dependencies

```powershell
cd localbrandai-backend
npm install mongoose
```

### Step 4: Configure Environment

Create or update `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/localbrandai
PORT=5000
```

### Step 5: Start Backend with Database

```powershell
node server-with-db.js
```

You should see:
```
✅ MongoDB Connected: localhost
🚀 Server running on port 5000
```

---

## ☁️ Option 2: MongoDB Atlas (Cloud) Setup

### Step 1: Create Free Account

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up for free account
3. Choose "Free Shared" tier (M0)
4. Select a cloud provider and region (closest to you)
5. Create cluster (takes 3-5 minutes)

### Step 2: Create Database User

1. In Atlas dashboard, go to "Database Access"
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Username: `localbrandai`
5. Password: (create a strong password)
6. Database User Privileges: "Read and write to any database"
7. Click "Add User"

### Step 3: Whitelist IP Address

1. Go to "Network Access"
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
   - Or add your specific IP address
4. Click "Confirm"

### Step 4: Get Connection String

1. Go to "Database" → "Connect"
2. Choose "Connect your application"
3. Copy the connection string
4. It looks like:
   ```
   mongodb+srv://localbrandai:<password>@cluster0.xxxxx.mongodb.net/
   ```

### Step 5: Configure Environment

Update `.env` file:
```
MONGODB_URI=mongodb+srv://localbrandai:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/localbrandai
PORT=5000
```

Replace:
- `YOUR_PASSWORD` with your actual password
- `cluster0.xxxxx` with your actual cluster address

### Step 6: Install Dependencies and Start

```powershell
cd localbrandai-backend
npm install mongoose
node server-with-db.js
```

---

## 📊 API Endpoints with Database

### Generate and Save Content
```
POST /generate
Body: { businessType, offer, language }
Response: { message: "caption", saved: true }
```

### Get All Content
```
GET /content
Query params: ?language=Hindi&limit=10
Response: { success: true, count: 10, data: [...] }
```

### Get Content by ID
```
GET /content/:id
Response: { success: true, data: {...} }
```

### Delete Content
```
DELETE /content/:id
Response: { success: true, message: "deleted" }
```

### Get Statistics
```
GET /stats
Response: { 
  success: true, 
  stats: { 
    total: 100, 
    byLanguage: [...],
    topBusinessTypes: [...]
  }
}
```

### Health Check
```
GET /health
Response: { status: "OK", database: "Connected" }
```

---

## 🧪 Testing the Database

### Test 1: Generate Content
```powershell
curl -X POST http://localhost:5000/generate `
  -H "Content-Type: application/json" `
  -d '{"businessType":"Bakery","offer":"20% Off","language":"Hindi"}'
```

### Test 2: Get All Content
```powershell
curl http://localhost:5000/content
```

### Test 3: Get Statistics
```powershell
curl http://localhost:5000/stats
```

---

## 🎨 Frontend with Database Features

I'll create an updated frontend that shows:
- History of generated content
- Statistics dashboard
- Delete functionality
- Search and filter

---

## 🗂️ Database Schema

```javascript
Content {
  businessType: String (required)
  offer: String (required)
  language: String (required, enum)
  generatedContent: String (required)
  createdAt: Date (auto)
  userId: String (default: 'anonymous')
}
```

---

## 🔧 Troubleshooting

### "MongooseError: Operation buffering timed out"
- MongoDB is not running
- Check connection string in `.env`
- For local: Start MongoDB service
- For Atlas: Check network access settings

### "Authentication failed"
- Wrong username or password in connection string
- Check database user credentials in Atlas

### "Cannot find module 'mongoose'"
- Run: `npm install mongoose`

### "ECONNREFUSED"
- MongoDB service is not running
- Start with: `net start MongoDB`

### Database shows "Disconnected" in health check
- Check `.env` file has correct MONGODB_URI
- Verify MongoDB is running
- Check firewall settings

---

## 📁 Files Created

- `localbrandai-backend/database.js` - Database connection
- `localbrandai-backend/models/Content.js` - Content schema
- `localbrandai-backend/server-with-db.js` - Server with database
- `DATABASE_SETUP.md` - This guide

---

## 🎯 Quick Start Commands

```powershell
# Install MongoDB dependency
cd localbrandai-backend
npm install mongoose

# Start server with database
node server-with-db.js

# Test health check
curl http://localhost:5000/health

# Generate and save content
curl -X POST http://localhost:5000/generate -H "Content-Type: application/json" -d "{\"businessType\":\"Bakery\",\"offer\":\"20% Off\",\"language\":\"Hindi\"}"

# View all content
curl http://localhost:5000/content

# View statistics
curl http://localhost:5000/stats
```

---

## 🚀 Next Steps

1. ✅ Choose database option (Local or Atlas)
2. ✅ Install and configure MongoDB
3. ✅ Install mongoose: `npm install mongoose`
4. ✅ Update `.env` with connection string
5. ✅ Start server: `node server-with-db.js`
6. ✅ Test endpoints
7. ✅ Update frontend to show history

---

## 💡 Tips

- Use MongoDB Compass to view your data visually
- Back up your database regularly
- Use indexes for better performance (already added)
- Consider adding user authentication
- Implement pagination for large datasets

---

**Database integration complete! Your content is now being saved.** 🎉
