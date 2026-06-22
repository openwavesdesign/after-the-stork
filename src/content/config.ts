import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    category: z.string(),
    date: z.string(),
    readingTime: z.string(),
    featuredImage: z.string().nullable().optional(),
    sourceImage: z.string().nullable().optional(),
    metaDescription: z.string(),
    active: z.boolean().default(true),
  }),
})

export const collections = { blog }
