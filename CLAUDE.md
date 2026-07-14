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

There is no traditional backend/database, but doula profiles are now managed in **Sanity CMS**:

- `src/data/*.json` — company info, services, navigation, testimonials, FAQs (`doulas.json` is legacy — kept only as the seed source for `npm run migrate:doulas`, no longer read by pages)
- `src/content/blog/*.mdx` — blog posts as Astro content collections (schema in `src/content/config.ts`) — not yet migrated to Sanity
- **Doulas** — fetched at build time from Sanity via `src/lib/sanity.ts` (`sanityClient`, `urlFor`), queried with GROQ in `src/pages/about/index.astro` and `src/pages/about/doulas.astro`

The `sanity/` directory holds the CMS schemas (`doula.ts`, `blogPost.ts`, aggregated in `schema/index.ts`); `blogPost` is defined but not yet wired to a page. The Studio itself is embedded in the Astro app at `/studio`, configured by root `sanity.config.ts` + the `sanity()` integration in `astro.config.mjs`. Project ID/dataset live in `.env` (`PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`) — see `sanity/README.md` for details on adding doulas and inviting editors.

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
