# Sanity CMS — Integration Guide

Sanity is live. The Studio is embedded in the Astro site at `/studio` (dev: `http://localhost:4321/studio`), configured by `../sanity.config.ts` and `../astro.config.mjs`, using the `doula` and `blogPost` schemas in this directory (`schema/index.ts`).

Project: `lpw4qk4n`, dataset `production` (see `.env` / `.env.example` for `PUBLIC_SANITY_PROJECT_ID` / `PUBLIC_SANITY_DATASET`).

## Adding doulas

Open `/studio`, sign in with a Sanity account invited to the project, and create/edit "Doula Profile" documents. The doula pages (`src/pages/about/index.astro` leadership section, `src/pages/about/doulas.astro` full team grid) query Sanity directly via `src/lib/sanity.ts` — no rebuild-and-redeploy of JSON needed, just a new production build to pick up the latest content (`useCdn: false`, so builds always fetch fresh).

`src/data/doulas.json` is no longer read by the site; it's kept only as the seed source for `npm run migrate:doulas` (see `scripts/migrate-doulas.mjs`), a one-time import of the original three team bios into Sanity.

## Inviting editors

Add teammates (e.g. Georgette, Ashley, Allison) as project members at https://www.sanity.io/manage under project `lpw4qk4n` → Members, so they can log into `/studio` and manage doula profiles themselves.

## Replacing blog JSON

Blog posts still live in `src/content/blog/*.mdx` as Astro content collections — the `blogPost` schema exists here but isn't wired to a page yet. To activate it, replace the content-collection reads with a GROQ query, e.g.:

```ts
const post = await sanityClient.fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, { slug })
```
