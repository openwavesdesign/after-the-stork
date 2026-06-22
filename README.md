# After the Stork

Marketing website for [After the Stork](https://www.afterthestork.info), a postpartum doula agency serving Philadelphia, the Main Line, Bucks County, and select NJ communities.

## Stack

- [Astro 4](https://astro.build) — static site generator
- React 18 — interactive components (nav, accordion, scroll animations)
- TypeScript + Tailwind CSS
- MDX — blog content
- Vercel — hosting

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview built site
```

## Content

All site content lives in flat files — no CMS or database is active:

| Path | Content |
|---|---|
| `src/data/*.json` | Company info, services, team, navigation, testimonials, FAQs |
| `src/content/blog/*.mdx` | Blog posts (Astro content collections) |
| `public/images/` | Static images |

A `sanity/` directory contains CMS schemas for future blog and doula profile management, but is not yet connected.

## Deployment

Deploys automatically to Vercel on push to `main`. The build command is `npm run build` with the Astro framework preset.
