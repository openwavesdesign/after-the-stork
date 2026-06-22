export function formatDate(iso: string): string {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function getCategories(posts: { data: { category: string } }[]): string[] {
  const seen = new Set<string>()
  for (const p of posts) if (p.data.category) seen.add(p.data.category)
  return Array.from(seen)
}
