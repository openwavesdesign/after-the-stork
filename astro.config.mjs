import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import sanity from '@sanity/astro'

export default defineConfig({
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
  ],
  site: 'https://www.afterthestork.info',
})
