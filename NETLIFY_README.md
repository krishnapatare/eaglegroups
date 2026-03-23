# Eagle Groups - Professional Website

A modern, responsive website built with React, TypeScript, and Tailwind CSS. Deployed with Netlify for seamless hosting and automatic deployments.

## Features

- 🚀 Fast and optimized React frontend
- 📱 Fully responsive design
- 🎨 Beautiful UI with Radix components
- 📧 Contact form with WhatsApp integration
- ✨ Smooth animations with Framer Motion
- 🌙 Dark/Light mode support
- 📊 SEO optimized

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/krishnapatare/eaglegroups.git
cd eaglegroups
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions
│   │   └── App.tsx          # Root component
│   └── index.html           # Entry HTML
├── public/                  # Static assets
├── netlify.toml             # Netlify configuration
└── vite.config.ts          # Vite configuration
```

## Deployment

This project is configured to deploy automatically on Netlify:

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the `netlify.toml` configuration
3. Every push to the main branch triggers a new deployment

### Manual Deployment

```bash
npm run build
netlify deploy --prod --dir=dist/public
```

## Technologies

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **Build Tool**: Vite
- **UI Components**: Radix UI
- **Forms**: React Hook Form, Zod validation
- **Animations**: Framer Motion
- **Routing**: Wouter

## Contact

For inquiries, visit the contact page on the website or reach out via:
- Email: hello@egalgroup.in
- Phone: +91 98765 43210
- WhatsApp: Available through the website contact form

## License

MIT License - See LICENSE file for details
