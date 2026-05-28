#!/usr/bin/env node
/**
 * One-off WordPress (WXR) → MDX importer for After the Stork.
 *
 * Usage:  node scripts/import-wp-blog.mjs [path-to-wxr.xml]
 * Default source: import/wp-export.xml
 * Output: posts/<slug>.mdx  (frontmatter matches posts/example-post.mdx)
 *
 * Zero external dependencies — parses the WXR with light regex and converts
 * post HTML to Markdown. Imperfect by design; the goal is to bring across as
 * much real content as possible for review. Image binaries are not downloaded
 * (they live on afterthestork.info); the original URL is preserved in
 * frontmatter as `sourceImage` and `featuredImage` is left null so the on-brand
 * <Media> placeholder renders until real assets are added.
 */
import fs from 'node:fs'
import path from 'node:path'

const srcPath = process.argv[2] || 'import/wp-export.xml'
const OUT_DIR = 'posts'

// WordPress usernames → friendly display names.
const AUTHOR_MAP = { gkerr: 'Georgette Kerr', callen: 'After the Stork' }
// Tidy up WordPress categories that don't fit the site taxonomy.
const CATEGORY_MAP = { Uncategorized: 'Newborn Care', '': 'Newborn Care' }

const ENTITIES = {
  '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#039;': "'",
  '&#39;': "'", '&apos;': "'", '&nbsp;': ' ', '&hellip;': '…',
  '&#8217;': '’', '&#8216;': '‘', '&#8220;': '“', '&#8221;': '”',
  '&#8211;': '–', '&#8212;': '—', '&#8230;': '…', '&rsquo;': '’',
  '&lsquo;': '‘', '&ldquo;': '“', '&rdquo;': '”', '&ndash;': '–',
  '&mdash;': '—', '&#160;': ' ',
}

function decodeEntities(s) {
  let out = s
  for (const [k, v] of Object.entries(ENTITIES)) out = out.split(k).join(v)
  out = out.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  return out
}

/** Pull a tag's inner value, unwrapping CDATA. */
function tag(block, name) {
  const re = new RegExp(`<${name}>([\\s\\S]*?)</${name}>`, 'i')
  const m = block.match(re)
  if (!m) return ''
  let v = m[1].trim()
  const cdata = v.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/)
  if (cdata) v = cdata[1]
  return v
}

function firstCategory(block) {
  const m = block.match(/<category domain="category"[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/category>/i)
  return m ? m[1].trim() : ''
}

function firstImage(html) {
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i)
  return m ? m[1] : null
}

/** Convert post HTML → Markdown (best-effort, dependency-free). */
function htmlToMarkdown(html) {
  let s = html
  // Strip Gutenberg block comments & any HTML comments (illegal in MDX).
  s = s.replace(/<!--[\s\S]*?-->/g, '')
  // Normalise whitespace around block tags.
  s = s.replace(/\r\n?/g, '\n')
  // Headings — downgrade body <h1> to ## so it never competes with the page H1.
  s = s.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, t) => `\n\n## ${strip(t)}\n\n`)
  s = s.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, t) => `\n\n## ${strip(t)}\n\n`)
  s = s.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, t) => `\n\n### ${strip(t)}\n\n`)
  s = s.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, t) => `\n\n#### ${strip(t)}\n\n`)
  // Bold / italic
  s = s.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, t) => `**${strip(t)}**`)
  s = s.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, t) => `*${strip(t)}*`)
  // Links
  s = s.replace(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
    (_, href, t) => `[${strip(t)}](${href})`)
  // Images
  s = s.replace(/<img[^>]*alt=["']([^"']*)["'][^>]*src=["']([^"']+)["'][^>]*>/gi,
    (_, alt, src) => `\n\n![${alt}](${src})\n\n`)
  s = s.replace(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi, (_, src) => `\n\n![](${src})\n\n`)
  // Lists
  s = s.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, t) => `\n- ${strip(t)}`)
  s = s.replace(/<\/(ul|ol)>/gi, '\n\n').replace(/<(ul|ol)[^>]*>/gi, '\n')
  // Blockquote
  s = s.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi,
    (_, t) => `\n\n> ${strip(t).replace(/\n+/g, ' ')}\n\n`)
  // Paragraphs & breaks
  s = s.replace(/<\/p>/gi, '\n\n').replace(/<p[^>]*>/gi, '')
  s = s.replace(/<br\s*\/?>/gi, '\n')
  // Drop anything left
  s = strip(s)
  s = decodeEntities(s)
  // MDX safety: escape braces (JS expressions) and `<` (JSX/HTML). Leave `>`
  // alone so generated blockquote markers survive; a stray literal `>` renders
  // harmlessly in Markdown.
  s = s.replace(/[{}]/g, (c) => '\\' + c)
  s = s.replace(/</g, '&lt;')
  // Collapse excess blank lines / spaces.
  s = s.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim()
  return s
}

function strip(t) {
  return t.replace(/<[^>]+>/g, '').trim()
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80)
}

function readingTime(text) {
  const words = text.split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.round(words / 200))} min read`
}

function fmEscape(s) {
  return (s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ').trim()
}

/** Strip Markdown markers for a clean meta description / excerpt. */
function plainText(md) {
  return md
    .replace(/^#{1,6}\s+/gm, '')      // heading hashes
    .replace(/^[>\-*]\s+/gm, '')      // blockquote / list markers
    .replace(/\*\*([^*]+)\*\*/g, '$1') // bold
    .replace(/\*([^*]+)\*/g, '$1')     // italic
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // links → text
    .replace(/\s+/g, ' ')
    .trim()
}

// ── Run ────────────────────────────────────────────────────────────────────
if (!fs.existsSync(srcPath)) {
  console.error(`✗ WXR file not found: ${srcPath}`)
  process.exit(1)
}
const xml = fs.readFileSync(srcPath, 'utf8')
const items = xml.split(/<item>/).slice(1).map((b) => '<item>' + b.split('</item>')[0])

fs.mkdirSync(OUT_DIR, { recursive: true })
let written = 0, skipped = 0

for (const block of items) {
  const postType = tag(block, 'wp:post_type')
  const status = tag(block, 'wp:status')
  if (postType !== 'post' || status !== 'publish') { skipped++; continue }

  const title = decodeEntities(tag(block, 'title')).trim()
  let slug = tag(block, 'wp:post_name').trim() || slugify(title)
  const rawAuthor = decodeEntities(tag(block, 'dc:creator')).trim()
  const author = AUTHOR_MAP[rawAuthor] || rawAuthor || 'After the Stork'
  const rawCategory = decodeEntities(firstCategory(block)).trim()
  const category = CATEGORY_MAP[rawCategory] !== undefined ? CATEGORY_MAP[rawCategory] : (rawCategory || 'Newborn Care')
  const dateRaw = tag(block, 'wp:post_date') || tag(block, 'pubDate')
  const date = (dateRaw.match(/\d{4}-\d{2}-\d{2}/) || [new Date(dateRaw).toISOString().slice(0, 10)])[0]
  const rawContent = tag(block, 'content:encoded')
  const sourceImage = firstImage(rawContent)
  const body = htmlToMarkdown(rawContent)
  const excerpt = decodeEntities(strip(tag(block, 'excerpt:encoded'))).replace(/\s+/g, ' ').trim()
  const meta = (excerpt || plainText(body)).slice(0, 155)

  if (!title || !body) { skipped++; continue }

  const frontmatter = [
    '---',
    `title: "${fmEscape(title)}"`,
    `slug: "${slug}"`,
    `author: "${fmEscape(author)}"`,
    `category: "${fmEscape(category)}"`,
    `date: "${date}"`,
    `readingTime: "${readingTime(body)}"`,
    `featuredImage: null`,
    sourceImage ? `sourceImage: "${fmEscape(sourceImage)}"` : `sourceImage: null`,
    `metaDescription: "${fmEscape(meta)}"`,
    `active: true`,
    '---',
    '',
    body,
    '',
  ].join('\n')

  fs.writeFileSync(path.join(OUT_DIR, `${slug}.mdx`), frontmatter)
  written++
  console.log(`✓ ${slug}.mdx  (${title})`)
}

console.log(`\nDone — ${written} posts written, ${skipped} items skipped.`)
