# Al-Alwan Al-Motamayaza — شركة الألوان المتميزة

A premium, fully bilingual (English / Arabic) corporate website for **Al-Alwan Al-Motamayaza**, a healthcare company specializing in importing and distributing medical equipment, medical supplies, mother & child requirements, and healthcare products.

Built with a modern 2026 design language inspired by leaders like Philips Healthcare, Siemens Healthineers, and GE Healthcare.

## ✨ Features

- **Bilingual EN / AR** with full RTL ↔ LTR support, instant switching, and `localStorage` persistence
- **4 pages** — Home, About, Products, Contact (+ a styled 404)
- **Premium motion** powered by Framer Motion (fade-up, stagger, scroll reveal, count-up, marquee, page transitions)
- **Responsive** from mobile to ultra-wide
- **Accessible** — semantic HTML, focus styles, reduced-motion support, ARIA labels
- **SEO** — dynamic per-page titles/descriptions and Open Graph tags
- **Product catalog** with live search, category filtering, and an accessible details modal

## 🛠 Tech Stack

- React 18 + Vite
- JavaScript only (no TypeScript)
- React Router DOM
- Tailwind CSS
- Framer Motion
- react-i18next
- Lucide React

## 🎨 Design System

| Token        | Value     |
| ------------ | --------- |
| Primary      | `#0B5ED7` |
| Medical Teal | `#00A6A6` |
| Background   | `#F8FAFC` |
| Text         | `#1E293B` |
| Success      | `#16A34A` |

Typography: **Inter** (English) · **Cairo** (Arabic).

## 🚀 Getting Started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## 📁 Project Structure

```
src/
├── animations/      # Framer Motion variant presets
├── components/
│   ├── sections/    # Page sections (home/, about/)
│   └── ui/          # Reusable UI primitives
├── data/            # Product & category data
├── hooks/           # Custom hooks (scroll, count-up, language, SEO)
├── i18n/            # i18next config + en/ar translation files
├── layouts/         # MainLayout (navbar + footer)
├── pages/           # Route pages
├── routes/          # Router config
├── utils/           # SEO helpers
├── App.jsx
└── main.jsx
```

## 🌐 Adding Content

- **Products:** edit `src/data/products.js` (bilingual fields per product).
- **Translations:** edit `src/i18n/locales/en.json` and `ar.json` (mirror the keys).

---

© Al-Alwan Al-Motamayaza. Building better healthcare together.
