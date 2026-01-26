# Deployment Guide: Vercel + Netlify

## Overview
- **Backend (API)**: Vercel
- **Frontend (React)**: Netlify

---

## Step 1: Deploy Backend to Vercel

### Prerequisites
- Vercel account (free at vercel.com)
- GitHub account with your repository

### Instructions

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel/Netlify deployment"
   git push origin main
   ```

2. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Click "Add New" → "Project"
   - Select your GitHub repository

3. **Configure Vercel Project**
   - **Framework Preset**: Other (Node.js)
   - **Root Directory**: `./` (or leave default)
   - **Build Command**: `npm run build:server`
   - **Output Directory**: `dist`

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   ```
   DATABASE_URL = postgres://user:password@your-postgres-host:5432/dbname
   NODE_ENV = production
   ```
   
   **Note**: You need a PostgreSQL database hosted externally:
   - **Neon.tech** (free PostgreSQL)
   - **AWS RDS**
   - **Digital Ocean**

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Copy your Vercel URL: `https://your-project.vercel.app`

---

## Step 2: Deploy Frontend to Netlify

### Prerequisites
- Netlify account (free at netlify.com)
- Same GitHub repository

### Instructions

1. **Go to Netlify Dashboard**
   - Visit https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Select GitHub and choose your repository

2. **Configure Build Settings**
   - **Build command**: `npm run build:client`
   - **Publish directory**: `dist/public`

3. **Add Environment Variables**
   Click "Site settings" → "Build & deploy" → "Environment":
   ```
   REACT_APP_API_URL = https://your-vercel-project.vercel.app
   ```

4. **Deploy**
   - Netlify automatically deploys on git push
   - Your site is live at: `https://your-site.netlify.app`

---

## Step 3: Update Frontend API URL

In your frontend code, the contact form will automatically use:
```typescript
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
```

This is already configured in your project's React code.

---

## Important: Database Setup

Since you're using PostgreSQL, you need:

### Option 1: Free PostgreSQL (Recommended)
**Neon.tech** (Free tier with 0.5 GB storage)
1. Go to https://neon.tech
2. Sign up
3. Create a project
4. Copy connection string
5. Add to Vercel environment variables as `DATABASE_URL`

### Option 2: Existing Database
- Update Vercel `DATABASE_URL` with your connection string

---

## Testing

1. **Local Testing**
   ```bash
   npm run dev
   # Frontend: http://localhost:5173
   # Backend: http://localhost:5000
   ```

2. **Production Testing**
   - Submit contact form on Netlify site
   - Check Vercel logs for errors
   - Verify database receives submission

---

## Troubleshooting

### CORS Errors
- Your backend already has CORS configured
- Make sure `netlify.app` domain is in allowed origins

### API Calls Failing
- Check `REACT_APP_API_URL` environment variable on Netlify
- Verify Vercel backend is running
- Check Vercel logs: https://vercel.com/dashboard

### Database Connection Error
- Verify `DATABASE_URL` in Vercel environment variables
- Check PostgreSQL host is accessible from Vercel

---

## Summary of Changes Made

✅ Added CORS headers to backend for Netlify origin  
✅ Created `vercel.json` for backend configuration  
✅ Updated `netlify.toml` for frontend configuration  
✅ Added separate build scripts: `build:client` and `build:server`  
✅ Configured environment variable support for API URL  

---

## URLs After Deployment

- **Frontend**: `https://your-site.netlify.app`
- **Backend API**: `https://your-project.vercel.app/api/contact/submit`
- **Contact Form**: Sends data to backend automatically
