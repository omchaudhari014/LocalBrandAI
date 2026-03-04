# 📦 Node.js Installation Guide

## 🌐 The Node.js website should be open in your browser now!

If not, go to: **https://nodejs.org/**

---

## 📥 Step-by-Step Installation

### Step 1: Download Node.js

On the Node.js website, you'll see **TWO big buttons**:

```
┌─────────────────────────────────────────┐
│  20.x.x LTS                             │
│  Recommended For Most Users             │
│  [Download]  ← CLICK THIS ONE!          │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  21.x.x Current                         │
│  Latest Features                        │
│  [Download]  ← Don't click this         │
└─────────────────────────────────────────┘
```

**Click the GREEN "LTS" button** (Left side)
- LTS = Long Term Support
- More stable
- Recommended for most users

The file will download: `node-v20.x.x-x64.msi` (about 30MB)

---

### Step 2: Run the Installer

1. **Find the downloaded file:**
   - Usually in your `Downloads` folder
   - Named: `node-v20.x.x-x64.msi`

2. **Double-click the file** to start installation

3. **Follow the installation wizard:**

   **Screen 1: Welcome**
   - Click "Next"

   **Screen 2: License Agreement**
   - Check "I accept the terms"
   - Click "Next"

   **Screen 3: Destination Folder**
   - Keep default: `C:\Program Files\nodejs\`
   - Click "Next"

   **Screen 4: Custom Setup**
   - ✅ Make sure ALL boxes are checked:
     - Node.js runtime
     - npm package manager
     - Online documentation shortcuts
     - **Add to PATH** ← VERY IMPORTANT!
   - Click "Next"

   **Screen 5: Tools for Native Modules**
   - You can check this box (optional)
   - It installs Python and Visual Studio tools
   - Click "Next"

   **Screen 6: Ready to Install**
   - Click "Install"
   - Click "Yes" if Windows asks for permission

4. **Wait for installation** (takes 1-2 minutes)

5. **Click "Finish"**

---

### Step 3: RESTART YOUR COMPUTER

**⚠️ THIS IS CRITICAL!**

After installation completes:
1. Close all programs
2. Restart your computer
3. This ensures Node.js is added to your system PATH

---

### Step 4: Verify Installation

After restarting, open PowerShell and type:

```powershell
node --version
```

You should see:
```
v20.11.0
```

Then type:
```powershell
npm --version
```

You should see:
```
10.2.4
```

If you see version numbers, **SUCCESS!** ✅

---

## 🎉 After Node.js is Installed

Now you can run your LocalBrandAI backend!

### Quick Start:

```powershell
# Navigate to backend folder
cd localbrandai-backend

# Install dependencies
npm install express cors mongoose

# Run simple backend
node server-simple.js
```

You should see:
```
Server running on port 5000
```

Then open `index-with-api.html` in your browser!

---

## 🔧 Troubleshooting

### Problem: "node is not recognized" after installation

**Solution:**
1. Make sure you restarted your computer
2. Open a NEW PowerShell window (close old ones)
3. Try again

### Problem: Installation fails

**Solution:**
1. Make sure you have administrator rights
2. Disable antivirus temporarily
3. Download again (file might be corrupted)

### Problem: "Access denied" during installation

**Solution:**
1. Right-click the installer
2. Choose "Run as administrator"

### Problem: Can't find the downloaded file

**Solution:**
1. Check your Downloads folder
2. Or download again from https://nodejs.org/

---

## 📋 Installation Checklist

- [ ] Downloaded Node.js LTS version
- [ ] Ran the installer
- [ ] Checked "Add to PATH" during installation
- [ ] Clicked "Finish"
- [ ] Restarted computer
- [ ] Opened NEW PowerShell window
- [ ] Verified with `node --version`
- [ ] Verified with `npm --version`

---

## 🚀 What to Do Next

Once Node.js is installed and verified:

1. **Install backend dependencies:**
   ```powershell
   cd localbrandai-backend
   npm install express cors mongoose
   ```

2. **Choose which server to run:**

   **Simple version (no database):**
   ```powershell
   node server-simple.js
   ```

   **With database:**
   ```powershell
   node server-with-db.js
   ```

   **With AWS AI:**
   ```powershell
   node server.js
   ```

3. **Open the frontend:**
   - For simple: `index-with-api.html`
   - For database: `index-with-database.html`

---

## 📞 Need Help?

If you encounter any issues:

1. Check that Node.js is installed: `node --version`
2. Make sure you restarted your computer
3. Open a NEW PowerShell window
4. Try running as administrator

---

## 🎯 Quick Reference

**Download:** https://nodejs.org/
**Choose:** LTS version (left button)
**Install:** Follow wizard, check "Add to PATH"
**Restart:** Your computer
**Verify:** `node --version` and `npm --version`
**Run:** `cd localbrandai-backend && npm install`

---

**You're almost there! Just install Node.js and restart, then everything will work!** 🚀
