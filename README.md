# Upsparks Capital Website

A modern, high-performance website for Upsparks Capital built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Modern Stack**: Next.js 14 with React and TypeScript
- 🎨 **Beautiful Design**: Light green theme with smooth animations
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **High Performance**: Optimized for fast loading and smooth interactions
- 🎭 **Smooth Animations**: Framer Motion for elegant transitions
- ♿ **Accessible**: Semantic HTML and proper ARIA labels

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Navigation.tsx    # Header navigation
│   ├── Hero.tsx          # Hero section
│   ├── ValueProps.tsx    # Value propositions
│   ├── InvestmentFocus.tsx # Investment sectors
│   ├── Portfolio.tsx     # Portfolio showcase
│   ├── Team.tsx          # Team members
│   ├── Process.tsx       # Investment process
│   ├── CTA.tsx           # Call-to-action
│   └── Footer.tsx        # Footer
└── public/               # Static assets
```

## Customization

### Colors

The light green theme is defined in `tailwind.config.ts`. You can customize colors by modifying the `primary` color palette.

### Content

All content is currently static and can be found in the respective component files. Replace placeholder content with your actual content.

### Images

Currently using placeholder emojis. Replace with actual images by:
1. Adding images to `/public` folder
2. Using Next.js Image component for optimization

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## License

© 2025 UPSPARKS CAPITAL. ALL RIGHTS RESERVED.
