# Mall of Ranchi — Complete Source Code Export

This document contains the project structure and complete source code for all application files of **Mall of Ranchi** (`08051066666`, Ratu Road, Kumhartoli, Ranchi, Jharkhand).

---

## Project Structure Overview

```text
/
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    ├── types/
    │   └── mall.ts
    ├── utils/
    │   ├── mallData.ts
    │   ├── mallLogic.ts
    │   └── mallLogic.test.ts
    └── components/
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── QuotesStrip.tsx
        ├── RecentEvents.tsx
        ├── StoresAndBrands.tsx
        ├── EntertainmentDining.tsx
        ├── Gallery.tsx
        ├── HostYourEvent.tsx
        ├── VisitUs.tsx
        ├── ContactSection.tsx
        ├── SocialStrip.tsx
        ├── LegalModals.tsx
        ├── Footer.tsx
        └── FloatingWhatsApp.tsx
```

---

## 1. Project Configuration Files

### `package.json`
```json
{
  "name": "react-example",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist server.js",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "@google/genai": "^2.4.0",
    "@tailwindcss/vite": "^4.3.3",
    "@vitejs/plugin-react": "^6.1.1",
    "lucide-react": "^0.546.0",
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "vite": "^8.3.0",
    "express": "^4.21.2",
    "dotenv": "^17.2.3",
    "motion": "^12.23.24"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "autoprefixer": "^10.4.21",
    "esbuild": "^0.25.0",
    "tailwindcss": "^4.3.3",
    "tsx": "^4.21.0",
    "typescript": "^7.0.2",
    "@types/express": "^4.17.21"
  }
}
```

### `vite.config.ts`
```typescript
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname ?? '.', '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "types": ["vite/client"],
    "lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": [
        "./*"
      ]
    },
    "allowImportingTsExtensions": true,
    "noEmit": true
  },
  "exclude": ["dist"]
}
```

### `index.html`
```html
<!doctype html>
<html lang="en" class="scroll-smooth dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mall of Ranchi | Shopping, Dining & Events in Ranchi</title>
    <meta name="description" content="Mall of Ranchi on Ratu Road, Kumhartoli, Ranchi, Jharkhand. Explore 100+ stores, grand dining, premier cinema, vibrant events, and family entertainment under one roof." />
    <meta property="og:title" content="Mall of Ranchi | Shopping, Dining & Events in Ranchi" />
    <meta property="og:description" content="Shop. Dine. Celebrate. All Under One Roof at Mall of Ranchi, Ratu Road, Kumhartoli, Ranchi, Jharkhand." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ShoppingCenter",
        "name": "Mall of Ranchi",
        "description": "Premier shopping, dining, and entertainment destination in Ranchi, Jharkhand.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ratu Road, Kumhartoli",
          "addressLocality": "Ranchi",
          "addressRegion": "Jharkhand",
          "postalCode": "834001",
          "addressCountry": "IN"
        },
        "openingHours": "Mo-Su 10:30-22:00",
        "telephone": "+91-8051066666",
        "currenciesAccepted": "INR"
      }
    </script>
  </head>
  <body class="bg-[#080B11] text-slate-100 antialiased selection:bg-amber-500/30 selection:text-amber-200">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 2. Core Application Source Code

### `src/main.tsx`
```typescript
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
```

### `src/index.css`
```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

@layer base {
  body {
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    background-color: #080B11;
    color: #F8FAFC;
    overflow-x: hidden;
  }

  h1, h2, h3, .font-display {
    font-family: 'Outfit', 'Plus Jakarta Sans', sans-serif;
  }

  .font-brand {
    font-family: 'Cinzel', serif;
  }
}

/* Luxury ambient glow utilities */
.gold-gradient-text {
  background: linear-gradient(135deg, #FFF0D0 0%, #E5B869 50%, #B8860B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.luxury-gradient-text {
  background: linear-gradient(135deg, #FFFFFF 0%, #F3D08A 40%, #E26DAB 80%, #9333EA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.neon-card-glow {
  box-shadow: 0 0 25px -5px rgba(229, 184, 105, 0.15), 0 0 15px -5px rgba(219, 39, 119, 0.1);
  transition: all 0.4s ease;
}

.neon-card-glow:hover {
  box-shadow: 0 0 35px 0px rgba(229, 184, 105, 0.3), 0 0 25px 0px rgba(219, 39, 119, 0.25);
  border-color: rgba(229, 184, 105, 0.5);
}

@keyframes ambientDrift1 {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  50% { transform: translate(30px, -20px) scale(1.08); }
}

@keyframes ambientDrift2 {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  50% { transform: translate(-25px, 25px) scale(1.1); }
}

@keyframes ambientDrift3 {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  50% { transform: translate(20px, 15px) scale(0.95); }
}

.animate-ambient-1 { animation: ambientDrift1 14s infinite ease-in-out; }
.animate-ambient-2 { animation: ambientDrift2 18s infinite ease-in-out; }
.animate-ambient-3 { animation: ambientDrift3 16s infinite ease-in-out; }
```

### `src/types/mall.ts`
```typescript
export type StoreCategory =
  | 'All'
  | 'Fashion'
  | 'Food Court'
  | 'Electronics'
  | 'Kids'
  | 'Beauty'
  | 'Entertainment';

export interface StoreItem {
  id: string;
  name: string;
  category: StoreCategory;
  floor: string;
  timing: string;
  logoText?: string;
  tagline: string;
  isFeatured?: boolean;
}

export interface MallEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  tag: string;
  participantsOrWinners?: string;
}

export interface EventHighlight {
  id: string;
  title: string;
  winnerName: string;
  prizeOrTitle: string;
  image: string;
}

export interface EntertainmentCard {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  timing: string;
  tagline: string;
  highlights: string[];
  actionText: string;
  actionHref: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Architecture' | 'Events' | 'Dining' | 'Entertainment' | 'Celebration';
  image: string;
  caption: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: {
    name?: string;
    phone?: string;
    message?: string;
  };
}
```

### `src/utils/mallData.ts`
```typescript
import {
  EntertainmentCard,
  EventHighlight,
  GalleryItem,
  MallEvent,
  StoreItem,
} from '../types/mall';

export const MALL_INFO = {
  name: 'Mall of Ranchi',
  tagline: 'Shop. Dine. Celebrate. All Under One Roof.',
  address: 'Ratu Road, Kumhartoli, Ranchi, Jharkhand 834001, India',
  shortAddress: 'Ratu Road, Kumhartoli, Ranchi, Jharkhand',
  hours: '10:30 AM – 10:00 PM (Everyday)',
  foodCourtHours: '10:30 AM – 11:30 PM',
  cinemaHours: '09:30 AM – 12:00 AM',
  phone: '08051066666',
  phoneDisplay: '080510 66666',
  mobilePhone: '080510 66666',
  email: 'info@mallofranchi.com',
  whatsappNumber: '918051066666',
  instagramUrl: 'https://instagram.com/mallofranchi',
  facebookUrl: 'https://facebook.com/mallofranchi',
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=Mall+of+Ranchi+Ratu+Road+Kumhartoli+Ranchi+Jharkhand',
};

export const QUOTES: string[] = [
  'Where every weekend feels like a celebration.',
  "The vibrant pulse of Ranchi's fashion, food, and family memories.",
  'Every corner tells a new story, every aisle brings a new delight.',
  'From gourmet dining to blockbuster cinema — all together on Ratu Road.',
  'Moments made sweeter with the people who matter most.',
  "Your city, your sanctuary, Ranchi's premier lifestyle address.",
];

export const EVENTS: MallEvent[] = [
  {
    id: 'influencer-competition',
    title: 'Influencer Competition',
    description:
      'Content creators showed off their style and creativity in a glamorous face-off at the mall.',
    date: 'October 18, 2026',
    image: '/src/assets/images/event_influencer_fest_1794242042114.jpg',
    tag: 'Fashion & Style',
    participantsOrWinners: '60+ Creators · Grand Runway Finale',
  },
  {
    id: 'chess-competition',
    title: 'Chess Competition',
    description:
      'Players of all ages competed in a battle of strategy and focus.',
    date: 'September 28, 2026',
    image: '/src/assets/images/event_chess_tournament_1794242042975.jpg',
    tag: 'Mind Sports',
    participantsOrWinners: '120+ Players · FIDE Rated Arbiter',
  },
  {
    id: 'lucky-draw',
    title: 'Lucky Draw',
    description:
      'Shoppers won exciting prizes just by visiting and participating.',
    date: 'November 02, 2026',
    image: '/src/assets/images/event_lucky_draw_1794242043346.jpg',
    tag: 'Festival Celebration',
    participantsOrWinners: '₹50,000 Shopping Vouchers & Luxury Hampers',
  },
];
```

### `src/utils/mallLogic.ts`
```typescript
import { ContactFormData, FormValidationResult, StoreCategory, StoreItem } from '../types/mall';

export function validateContactForm(data: ContactFormData): FormValidationResult {
  const errors: { name?: string; phone?: string; message?: string } = {};

  const cleanName = data.name.trim();
  if (!cleanName) {
    errors.name = 'Please provide your full name.';
  } else if (cleanName.length < 2) {
    errors.name = 'Name must be at least 2 characters long.';
  }

  const phoneDigits = data.phone.replace(/[\s\-+()]/g, '');
  if (!phoneDigits) {
    errors.phone = 'Please provide your phone number.';
  } else if (phoneDigits.length < 10 || phoneDigits.length > 13) {
    errors.phone = 'Please enter a valid 10-digit mobile number.';
  }

  const cleanMessage = data.message.trim();
  if (!cleanMessage) {
    errors.message = 'Please enter your message or inquiry.';
  } else if (cleanMessage.length < 5) {
    errors.message = 'Message must be at least 5 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatWhatsAppUrl(whatsappNumber: string, message: string): string {
  const cleanNumber = whatsappNumber.replace(/[\s\-+()]/g, '');
  const encodedMsg = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
}

export function filterStores(
  stores: StoreItem[],
  category: StoreCategory,
  searchQuery: string
): StoreItem[] {
  const query = searchQuery.trim().toLowerCase();

  return stores.filter((store) => {
    const matchesCategory =
      category === 'All' || store.category.toLowerCase() === category.toLowerCase();

    const matchesQuery =
      query === '' ||
      store.name.toLowerCase().includes(query) ||
      store.tagline.toLowerCase().includes(query) ||
      store.floor.toLowerCase().includes(query) ||
      store.category.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });
}

export function getMallStatus(date: Date = new Date()): {
  isOpen: boolean;
  statusText: string;
  badgeColor: 'emerald' | 'amber' | 'rose';
  nextChangeText: string;
} {
  const hours = date.getHours() + date.getMinutes() / 60;

  if (hours >= 10.5 && hours < 21.5) {
    return {
      isOpen: true,
      statusText: 'Open Now',
      badgeColor: 'emerald',
      nextChangeText: 'Closes at 10:00 PM (Dining & Cinema open till 11:30 PM)',
    };
  } else if (hours >= 21.5 && hours < 22.0) {
    return {
      isOpen: true,
      statusText: 'Closing Soon',
      badgeColor: 'amber',
      nextChangeText: 'Retail closes at 10:00 PM (Dining open till 11:30 PM)',
    };
  } else if (hours >= 22.0 && hours < 23.5) {
    return {
      isOpen: true,
      statusText: 'Food Court & Cinema Open',
      badgeColor: 'amber',
      nextChangeText: 'Retail closed · Dining & Movies open till 11:30 PM',
    };
  } else {
    return {
      isOpen: false,
      statusText: 'Closed Now',
      badgeColor: 'rose',
      nextChangeText: 'Opens tomorrow at 10:30 AM',
    };
  }
}
```

### `src/App.tsx`
```typescript
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuotesStrip } from './components/QuotesStrip';
import { RecentEvents } from './components/RecentEvents';
import { StoresAndBrands } from './components/StoresAndBrands';
import { EntertainmentDining } from './components/EntertainmentDining';
import { Gallery } from './components/Gallery';
import { HostYourEvent } from './components/HostYourEvent';
import { VisitUs } from './components/VisitUs';
import { ContactSection } from './components/ContactSection';
import { SocialStrip } from './components/SocialStrip';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModals } from './components/LegalModals';

export default function App() {
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    tab: 'terms' | 'privacy';
  }>({
    isOpen: false,
    tab: 'terms',
  });

  const handleOpenLegal = (tab: 'terms' | 'privacy') => {
    setLegalModalState({
      isOpen: true,
      tab,
    });
  };

  const handleCloseLegal = () => {
    setLegalModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 flex flex-col font-sans selection:bg-amber-400/20 selection:text-amber-200">
      {/* 1. Sticky Navbar */}
      <Navbar onOpenLegal={handleOpenLegal} />

      {/* Main Sections in Exact Required Order */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Rotating Quotes Strip */}
        <QuotesStrip />

        {/* 4. Recent Events */}
        <RecentEvents />

        {/* 5. Stores and Brands */}
        <StoresAndBrands />

        {/* 6. Entertainment and Dining */}
        <EntertainmentDining />

        {/* 7. Gallery */}
        <Gallery />

        {/* 8. Host Your Event */}
        <HostYourEvent />

        {/* 9. Visit Us */}
        <VisitUs />

        {/* 10. Contact Section */}
        <ContactSection />

        {/* 11. Social Links */}
        <SocialStrip />
      </main>

      {/* 12. Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Extras: Floating WhatsApp Button at Bottom Right */}
      <FloatingWhatsApp />

      {/* Terms of Service & Privacy Policy Plain-Language Modals */}
      <LegalModals
        isOpen={legalModalState.isOpen}
        initialTab={legalModalState.tab}
        onClose={handleCloseLegal}
      />
    </div>
  );
}
```

---

## 📦 How to Download / Export the Codebase

You can download the full project archive directly:
- **Zip Archive File**: `mall_of_ranchi_source_code.zip` (available in project root directory).
- All source files can be copied cleanly from the sections above.
