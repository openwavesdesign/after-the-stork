# Sanity CMS — Integration Guide

The schema definitions in this directory (`blogPost.ts`, `doula.ts`) are scaffolded and ready to connect to a live Sanity project. No live connection exists yet.

## To activate Sanity

1. Install the Sanity SDK: `npm install @sanity/client @sanity/image-url`
2. Create a Sanity project at https://sanity.io
3. Add environment variables to `.env`:
   ```
   PUBLIC_SANITY_PROJECT_ID=your_project_id
   PUBLIC_SANITY_DATASET=production
   ```
4. Create a `sanity/client.ts` file:
   ```ts
   import { createClient } from '@sanity/client'
   export const sanityClient = createClient({
     projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
     dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
     apiVersion: '2024-01-01',
     useCdn: true,
   })
   ```

## Replacing JSON data

- **Blog posts**: Replace Astro content collection entries in `src/content/blog/` with GROQ queries to Sanity.
- **Doula profiles**: Replace `src/data/doulas.json` imports with a Sanity GROQ query.

## GROQ query examples

```ts
// All active doulas, ordered
const doulas = await sanityClient.fetch(`*[_type == "doula" && active == true] | order(order asc)`)

// Single blog post by slug
const post = await sanityClient.fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, { slug })
```
