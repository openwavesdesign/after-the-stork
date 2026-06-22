# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (http://localhost:4321)
npm run build     # Build static site to dist/
npm run preview   # Preview the built output locally
```

There is no test suite or linter configured.

## Architecture

**After the Stork** is a static marketing site for a Philadelphia-based postpartum doula agency, built with **Astro 4** + React 18 + TypeScript + Tailwind CSS. It generates pure static HTML deployed to Vercel.

### Data layer

There is no backend or database. All content lives in flat files:

- `src/data/*.json` — company info, services, doulas, navigation, testimonials, FAQs
- `src/content/blog/*.mdx` — blog posts as Astro content collections (schema in `src/content/config.ts`)

A `sanity/` directory contains CMS schemas for future blog/doula management, but Sanity is **not yet wired up**. Once activated it would replace the JSON files and MDX with GROQ queries.

### Component model

Astro uses partial hydration: most components are `.astro` files (server-rendered HTML only). React is reserved for components that need client-side interactivity:

| React (`.tsx`, `client:load`) | Astro (`.astro`, no JS) |
|---|---|
| `SiteHeader` — sticky nav, dropdowns, mobile menu | `SiteFooter`, `Button`, `Card`, `Media`, `Testimonial`, `Eyebrow` |
| `Reveal` — scroll-triggered fade-in | `Breadcrumb`, `SocialIcon` |
| `FAQItem` — accordion | |
| `ContactFormEmbed` — EngineHire iframe with postMessage resize | |

### Routing

File-based Astro routing under `src/pages/`. The only dynamic route is `src/pages/blog/[slug].astro`, which uses `getStaticPaths()` to pre-render all active blog posts (`data.active !== false`) at build time.

### Styling

Tailwind only — no component library. Design tokens are defined in two places that must stay in sync:

- `tailwind.config.ts` — color palette (`paper`, `canvas`, `accent`, etc.), font families (Cormorant Garamond, DM Mono, Inter), and semantic type scale using `clamp()`
- `src/styles/globals.css` — the same tokens as CSS custom properties, plus custom utility classes (`.pill`, `.prose`, `.reveal`, `.nav-dropdown`, etc.)

### Imports

All `src/` imports use the `@/` alias (e.g. `import site from '@/data/site.json'`), configured in `tsconfig.json`.

### Contact form

The `/contact` page embeds an EngineHire iframe. `ContactFormEmbed.tsx` listens for `postMessage` events from the iframe to auto-resize it. The iframe src and script URL come from `src/data/site.json` (`engineHire.formSrc` / `engineHire.scriptSrc`).
