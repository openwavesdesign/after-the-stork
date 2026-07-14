#!/usr/bin/env node
/**
 * One-off migration: seeds the existing src/data/doulas.json profiles into
 * Sanity as `doula` documents, so editors can take over from the Studio
 * instead of hand-editing JSON. Safe to re-run — uses createOrReplace keyed
 * on each doula's `id`, so it won't duplicate documents.
 *
 * Usage:  SANITY_API_TOKEN=sk... node scripts/migrate-doulas.mjs
 * The token needs write access to the target project/dataset (create one at
 * https://www.sanity.io/manage → API → Tokens, "Editor" permission).
 */
import { createClient } from '@sanity/client'
import fs from 'node:fs'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('Missing SANITY_API_TOKEN. Create a write token at sanity.io/manage and re-run:\n  SANITY_API_TOKEN=sk... node scripts/migrate-doulas.mjs')
  process.exit(1)
}

const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'lpw4qk4n',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

const doulas = JSON.parse(fs.readFileSync(new URL('../src/data/doulas.json', import.meta.url)))

for (const doula of doulas) {
  const doc = {
    _id: `doula-${doula.id}`,
    _type: 'doula',
    id: doula.id,
    name: doula.name,
    title: doula.title,
    credentials: doula.credentials,
    bio: doula.bio,
    areas: doula.areas,
    active: doula.active,
    order: doula.order,
    isLeadership: doula.isLeadership,
  }
  await client.createOrReplace(doc)
  console.log(`✓ ${doula.name}`)
}

console.log(`\nDone. ${doulas.length} doula(s) migrated. Photos were not set (JSON had none) — add them in the Studio at /studio.`)
