# Sanity CMS — Integration Guide

The schema definitions in this directory (`blogPost.ts`, `doula.ts`) are scaffolded and ready to connect to a live Sanity project. No live connection exists yet.

## To activate Sanity

1. Install the Sanity SDK: `npm install next-sanity @sanity/image-url`
2. Create a Sanity project at https://sanity.io
3. Add environment variables to `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
4. Create a `sanity/client.ts` file:
   ```ts
   import { createClient } from 'next-sanity'
   export const sanityClient = createClient({
     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
     apiVersion: '2024-01-01',
     useCdn: true,
   })
   ```

## Replacing JSON data

- **Blog posts**: Replace MDX file reading in `app/blog/[slug]/page.tsx` with GROQ queries to Sanity.
- **Doula profiles**: Replace `data/doulas.json` imports with a Sanity GROQ query.

## GROQ query examples

```ts
// All active doulas, ordered
const doulas = await sanityClient.fetch(`*[_type == "doula" && active == true] | order(order asc)`)

// Single blog post by slug
const post = await sanityClient.fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, { slug })
```
