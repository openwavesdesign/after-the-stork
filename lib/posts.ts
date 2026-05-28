import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogPost } from '@/types'

const POSTS_DIR = path.join(process.cwd(), 'posts')

export interface PostMeta extends BlogPost {}

export interface Post {
  meta: PostMeta
  content: string
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

/** All published posts, newest first. */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, f), 'utf-8')
      const { data } = matter(raw)
      return { ...(data as PostMeta), slug: (data.slug as string) || f.replace(/\.mdx$/, '') }
    })
    .filter((p) => p.active !== false)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { meta: { ...(data as PostMeta), slug }, content }
}

/** Up to `count` posts other than `slug`, newest first. */
export function getOtherPosts(slug: string, count = 3): PostMeta[] {
  return getAllPosts().filter((p) => p.slug !== slug).slice(0, count)
}

/** Distinct categories across all posts, in order of first appearance. */
export function getCategories(): string[] {
  const seen = new Set<string>()
  for (const p of getAllPosts()) if (p.category) seen.add(p.category)
  return Array.from(seen)
}

export { formatDate }
