# Netlify Deployment Guide

## 1) Build the project

```bash
npm install
npm run build
```

## 2) Deploy on Netlify

1. Push the project to GitHub.
2. Log in to Netlify.
3. Click "Add new site" > "Import from Git".
4. Select the repository.
5. Use these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy.

## 3) Optional environment variables

Add these in Netlify if you want to replace placeholders:

```bash
VITE_COMPANY_NAME="shriammanenterprises"
VITE_COMPANY_EMAIL="[EMAIL ADDRESS]"
VITE_COMPANY_PHONE="[PHONE NUMBER]"
VITE_COMPANY_ADDRESS="No 55/6, P.H Road, Arumbakkam, Chennai - 600106"
VITE_WHATSAPP_NUMBER="[WHATSAPP NUMBER]"
VITE_SITE_URL="https://your-domain.netlify.app"
```

## 4) Security guidance

- Keep secrets out of the frontend.
- Do not store admin tokens or API keys in browser code.
- Use a backend/API for real lead handling in the future.
- The current project is ready for a future secure backend integration.
