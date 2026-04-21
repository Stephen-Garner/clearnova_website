# ClearNova Website

Complete rebuild of [clearnova.com](https://clearnova.com/) as a premium B2B marketing site. Keeps the logo and teal/cyan brand gradient from the original; everything else (layout, typography, copy, animation, structure) was redesigned.

## Stack

- Next.js 16 (App Router, Turbopack, RSC-first)
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll + stagger animations)
- Lucide React (icons)
- Montserrat + Instrument Serif + JetBrains Mono (`next/font/google`)

## Structure

```
ClearNova Website/
  assets/                 # source assets (logo PNG)
  design-extract/         # output from `designlang` — tokens, variables, W3C tokens
  site/                   # Next.js app (the deployable)
    src/app/              # App Router root (layout, page, globals.css)
    src/components/
      sections/           # Navbar, Hero, Services, Approach, Outcomes,
                          # Voices, About, FAQ, Contact, Footer
      ui/                 # Button, Section, Logo, icons (XLogo, LinkedInLogo)
    src/lib/cn.ts         # clsx + tailwind-merge helper
    public/               # static assets incl. clearnova-logo.png
```

## Develop

```bash
cd site
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # run built output
```

## Design system

Brand tokens live in `site/src/app/globals.css`:

- `--brand-300..900` — teal/cyan scale from the logo gradient
- `.text-gradient-brand` — gradient text utility
- `.aurora` — drifting teal aurora backdrop
- `.grid-overlay` — faint grid mask
- `.glass` — glassmorphism card

The full extracted token set from the original site (colors, spacing, type, shadows, Tailwind config, Figma vars, W3C tokens) lives in `design-extract/`.
