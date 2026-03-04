# 🚀 Run Simple Version (No AWS Required!)

This is a simplified version that works without AWS Bedrock. Perfect for testing!

---

## ✅ What You Need

1. **Node.js installed** (Download from https://nodejs.org/)
2. That's it! No AWS credentials needed for this version.

---

## 📦 Step 1: Install Dependencies

Open PowerShell in the project folder and run:

```powershell
cd localbrandai-backend
npm install express cors
```

This will install only the basic packages needed.

---

## ▶️ Step 2: Start the Simple Backend

```powershell
node server-simple.js
```

You should see:
```
Server running on port 5000
```

**Keep this terminal window open!** The server needs to keep running.

---

## 🌐 Step 3: Open the Frontend

Open `index-with-api.html` in your browser:

- **Option A:** Double-click the file
- **Option B:** Right-click → Open with → Your browser
- **Option C:** Drag and drop into browser window

---

## 🎯 Step 4: Test It!

1. Enter a business type (e.g., "Bakery")
2. Enter an offer (e.g., "20% Discount")
3. Select a language
4. Click "Generate Content"

You should see a generated caption!

---

## 🔄 Quick Commands

### Start Backend
```powershell
cd localbrandai-backend
node server-simple.js
```

### Stop Backend
Press `Ctrl + C` in the terminal

### Restart Backend
1. Stop it (Ctrl + C)
2. Start it again (node server-simple.js)

---

## 🐛 Troubleshooting

### "Cannot find module 'express'"
**Solution:** Run `npm install express cors` in the `localbrandai-backend` folder

### "Failed to connect to server"
**Solution:** Make sure the backend is running (you should see "Server running on port 5000")

### "Port 5000 already in use"
**Solution:** 
1. Stop any other programs using port 5000
2. Or change the port in `server-simple.js`:
   ```javascript
   app.listen(3000, () => {  // Changed from 5000 to 3000
   ```
   And update the frontend URL in `index-with-api.html`:
   ```javascript
   const response = await fetch('http://localhost:3000/generate', {
   ```

### Backend starts but frontend shows error
**Solution:** 
1. Check that backend is running
2. Refresh the browser page
3. Check browser console for errors (F12)

---

## 📊 What This Version Does

✅ Simple demo backend (no AI)
✅ Basic content generation
✅ Multi-language selection
✅ Copy to clipboard feature
✅ Error handling
✅ Loading states

❌ No actual AI generation (just a template)
❌ No AWS Bedrock integration
❌ No advanced features

---

## 🎓 Next Steps

Once this works, you can:

1. **Upgrade to Full Version:**
   - Use `server.js` instead of `server-simple.js`
   - Add AWS credentials
   - Get real AI-generated content

2. **Add More Features:**
   - Save generated content
   - Add more languages
   - Create templates
   - Add image generation

3. **Deploy:**
   - Host on Heroku, AWS, or Vercel
   - Add a database
   - Create user accounts

---

## 📁 Files Used

- `localbrandai-backend/server-simple.js` - Simple backend server
- `index-with-api.html` - Frontend with API integration
- `package.json` - Dependencies

---

## 💡 Tips

- Keep the backend terminal open while using the app
- Refresh the browser if you make changes to the frontend
- Restart the backend if you make changes to server-simple.js
- Check the browser console (F12) for errors

---

## ✅ Success Checklist

- [ ] Node.js installed
- [ ] Dependencies installed (`npm install express cors`)
- [ ] Backend running (shows "Server running on port 5000")
- [ ] Frontend opened in browser
- [ ] Can generate content successfully

---

**This is the simple version for testing. For production, use the full version with AWS Bedrock!**
