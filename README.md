# Surhires — Modern Tech & Product Hiring Platform

A production-grade, highly responsive, and accessible marketing website built for **Surhires** using Next.js (App Router), TypeScript, and Tailwind CSS. Developed for the Frontend Engineering Internship Selection at Meru Technosoft Private Limited.

---

## 🚀 Live Demo & Links

- **Live Deployed URL:** [Insert your deployed Vercel link here]
- **GitHub Repository:** https://github.com/sameerwarsi01/sunhires-web

---

## 🛠️ Tech Stack & Key Choices

- **Framework:** Next.js 16 (App Router architecture with React Server and Client Components)
- **Language:** TypeScript for compile-time safety and self-documenting data interfaces
- **Styling:** Tailwind CSS (utility-first, responsive layouts, zero heavy external UI kits)
- **Typography:** `next/font/google` using *Plus Jakarta Sans* for zero layout shifts (CLS) and fast font rendering
- **Iconography:** `lucide-react` for clean, lightweight, accessible SVG icons
- **Deployment Platform:** Vercel Edge Network

---

## 🎨 Design System & Color Rationale

Based on the brand brief for **Surhires** (professional, trustworthy, energetic with confident accents):

- **Deep Navy (`#0A192F` / `slate-900`):** Acts as the primary anchor for headers, footers, and cards; establishes corporate credibility and trust.
- **Teal Accent (`#0D9488` / `teal-600`):** Used for primary CTAs, active badges, and focus rings to drive conversions and provide energetic visual contrast.
- **Warm / Neutral White (`#F8FAFC` / `slate-50`):** Ample clean whitespace across background layers to eliminate clutter and provide high readability.
- **Color Contrast:** Body copy adheres strictly to WCAG AA guidelines (contrast ratio > 4.5:1).

---

## 📄 Pages & Features Implemented

### 1. Home Page (`/`)
- **Sticky Navbar:** Brand wordmark, intuitive navigation links, quick CTA, and an interactive mobile drawer.
- **Hero Section:** High-impact copy with dual CTAs ("Hire Faster" / "Find a Job") and quick credibility stats.
- **Employer Logos Strip:** Trust strip featuring high-growth Indian tech startups (Swiggy, Razorpay, CRED, etc.).
- **How It Works (3 Steps):** Structured sequential cards explaining the streamlined intake-to-offer journey.
- **Featured Roles Grid:** Pre-filtered engineering and product cards with dynamic department tags, salary CTC, and location badges.
- **Social Proof / Testimonials:** Founder and candidate quotes with concrete speed and cost-saving metrics.
- **Accessible FAQ Accordion:** Keyboard-navigable accordion answering candidate and employer queries.
- **Footer CTA & Full Footer:** High-contrast final conversion banner, categorical links, and social links.

### 2. Jobs Listing Page (`/jobs`)
- **Interactive Multi-Filter Bar:** Real-time client-side filtering by Department, Employment Type, and Location.
- **Instant Search:** Keyword search matching job titles, hiring companies, and technology tags.
- **Empty State UI:** Contextual zero-result view with a single-click reset button when no jobs match filter criteria.

### 3. Employers Page (`/employers`)
- **3-Tier Pricing Table:** Starter, Growth, and Enterprise plans with feature checklists and a working **Monthly / Annual billing toggle** (includes a 20% savings badge).
- **"Post a Job" Form UI:** Clean intake form with frontend validation (field requirements, email formatting, minimum description length) and an interactive **Submission Success State**.

---

## ♿ Accessibility & SEO

- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Single `<h1>` per page with a hierarchical heading structure (`<h2>`, `<h3>`).
- Route-specific `<title>`, `description`, and OpenGraph meta tags configured using the Next.js Metadata API.
- All form inputs include explicit labels, placeholders, and error messages.
- Full keyboard and screen-reader usability on interactive components.

---

## 💻 Local Development Setup

To run this project locally:

```bash
git clone [https://github.com/sameerwarsi01/sunhires-web.git](https://github.com/sameerwarsi01/sunhires-web.git)
cd sunhires-web
npm install
npm run dev

---

Open http://localhost:3000 in your browser.

📈 What I Would Improve With More Time
Job Application Modal: Add a full application modal with CV upload handling (PDF drag-and-drop).

Persistent Database Integration: Connect PostgreSQL (Supabase / Prisma) to dynamically store job postings submitted through the Employers form.

Framer Motion Micro-Interactions: Implement subtle entrance stagger animations while honoring prefers-reduced-motion.

Theme Switcher: Add an accessible dark-mode toggle with persistent local storage state.