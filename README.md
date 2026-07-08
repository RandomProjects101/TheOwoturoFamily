# In Loving Memory — The Owoturo Family

A private tribute website built for the Owoturo family, in loving memory of a
beloved mother. Not for public search or distribution — intended for the
family to share the link with one another directly.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Making it hers

All content — names, dates, messages, photos, recordings — is controlled from
a single file. See **[CUSTOMIZE.md](CUSTOMIZE.md)** for the full walkthrough.

## Project structure

```
app/                 Root layout, global styles, the single page route
components/
  landing/           The opening cinematic hero
  layout/            Loading screen, candle, piano toggle, progress nav, reveal animation
  sections/          Each chapter of the journey (gallery, voices, timeline, etc.)
  ui/                Reusable primitives (audio player, lightbox, image frame, dust particles)
data/content.ts       Single source of truth for all text, photo paths, and audio paths
lib/                  Small utilities and shared hooks
public/images/        Photos, organized by section
public/audio/         Voice recordings and background piano
```

## Deploying

The project needs no special configuration — it's a standard Next.js App
Router app and Vercel builds it automatically.

1. Push this repo to GitHub (already done).
2. On [vercel.com/new](https://vercel.com/new), import the repo. Vercel
   detects Next.js automatically — no build settings to change.
3. Deploy. No environment variables are required.

**On privacy:** `robots` is already set to disallow search indexing
(`app/layout.tsx`), so the site won't show up in Google. It is still reachable
by anyone with the link, though — a Vercel deployment URL is public by
default. If you want it locked down further, Vercel's **Password
Protection** (Project Settings → Deployment Protection, requires a Pro plan)
is the simplest option.
