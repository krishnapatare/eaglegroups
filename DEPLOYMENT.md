# Deployment Guide: Vercel Backend + Netlify Frontend

## Setup Overview
- **Backend**: Vercel (API server at vercel-deployment.vercel.app)
- **Frontend**: Netlify (UI at netlify-deployment.netlify.app)
- **Database**: PostgreSQL (hosted separately)

---

## Step 1: Prepare Your Repository

### Update .env (DO NOT COMMIT)
```env
DATABASE_URL=postgres://your-user:your-password@your-host:5432/your-db
NODE_ENV=production
```

### Commit Changes
```bash
git add .
git commit -m "Setup for Vercel + Netlify deployment"
git push origin main
```

---

## Step 2: Deploy Backend to Vercel

### 1. Create Account & Connect Repository
- Go to [vercel.com](https://vercel.com)
- Sign up or log in
- Click "New Project"
- Import your GitHub repository
- Select the repository

### 2. Configure Environment Variables
In Vercel Dashboard → Project Settings → Environment Variables:
```
DATABASE_URL = postgres://your-user:password@your-host:5432/your-db
NODE_ENV = production
```

### 3. Configure Build Settings
- **Framework**: Other
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 4. Deploy
- Click "Deploy"
- Wait for deployment to complete
- Note your Vercel URL (e.g., `https://your-project.vercel.app`)

### 5. Test Backend
```bash
curl https://your-project.vercel.app/api/contact/submit \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Hello"}'
```

---

## Step 3: Deploy Frontend to Netlify

### 1. Create Account & Connect Repository
- Go to [netlify.com](https://netlify.com)
- Sign up or log in
- Click "New site from Git"
- Connect your GitHub repository
- Select the repository

### 2. Configure Build Settings
- **Base directory**: `/` (root)
- **Build command**: `npm run build:client`
- **Publish directory**: `dist/public`
- **Environment variables**: None needed (frontend only)

### 3. Add Environment Variable for API
In Netlify Dashboard → Site Settings → Build & Deploy → Environment:
```
VITE_API_URL = https://your-project.vercel.app
```

### 4. Update Frontend Code
Update [src/lib/queryClient.ts](src/lib/queryClient.ts) to use Vercel backend:
```typescript
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
```

### 5. Deploy
- Click "Deploy"
- Your site will be available at `https://your-site.netlify.app`

---

## Step 4: Update Frontend API Calls

Update all API calls to use Vercel backend URL. Example:

```typescript
// In your React components
const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact/submit`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(contactData)
});
```

---

## Step 5: Connect Custom Domain (Optional)

### For Vercel Backend
1. Go to Vercel Project Settings → Domains
2. Add your custom domain for API

### For Netlify Frontend
1. Go to Netlify Site Settings → Domain Management
2. Add your custom domain

---

## Troubleshooting

### CORS Errors
- ✅ Backend CORS is configured in `server/index.ts`
- Ensure `VITE_API_URL` is set correctly in Netlify

### Database Connection Issues
- Check `DATABASE_URL` is correct in Vercel env vars
- Verify database allows connections from Vercel IPs

### Build Failures
- Check build logs in Vercel/Netlify dashboard
- Verify `package.json` scripts are correct

---

## Important Notes

1. **Never commit `.env`** - Keep secrets secure
2. **Database**: You must have a PostgreSQL instance running
3. **Cold starts**: Vercel serverless may have startup delays
4. **Costs**: 
   - Vercel: Free tier ($0-20/mo depending on usage)
   - Netlify: Free tier ($0-19/mo depending on usage)
   - PostgreSQL: Separate (Railway, Render, etc.)

---

## Quick Command Reference

```bash
# Local development
npm run dev

# Build everything
npm run build

# Build only frontend
npm run build:client

# Build only server
npm run build:server
```
