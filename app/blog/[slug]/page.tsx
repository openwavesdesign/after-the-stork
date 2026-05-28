import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

interface PageProps {
  params: { slug: string }
}

function getPost(slug: string) {
  const postsDir = path.join(process.cwd(), 'posts')
  const filePath = path.join(postsDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { frontmatter: data, content }
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'posts')
  if (!fs.existsSync(postsDir)) return []
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'))
  return files.map(f => ({ slug: f.replace('.mdx', '') }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.metaDescription,
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPost(params.slug)
  if (!post) notFound()
  const { frontmatter, content } = post

  return (
    <>
      {/* Post Header */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="max-w-[800px]">
            <span
              className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.12em] px-3 py-1 mb-5"
              style={{ fontSize: '0.6875rem' }}
            >
              {frontmatter.category}
            </span>
            <h1
              className="font-serif text-ink font-light"
              style={{ fontSize: 'clamp(2.25rem,4.5vw,3.25rem)', lineHeight: 1.15 }}
            >
              {frontmatter.title}
            </h1>
            <div
              className="flex items-center gap-4 font-mono text-stroke uppercase tracking-[0.1em] mt-4"
              style={{ fontSize: '0.6875rem' }}
            >
              <span>{frontmatter.date}</span>
              <span aria-hidden="true">·</span>
              <span>{frontmatter.readingTime}</span>
              <span aria-hidden="true">·</span>
              <span>{frontmatter.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-canvas">
        <div className="mx-auto px-6 md:px-12 py-10" style={{ maxWidth: '1280px' }}>
          <ImagePlaceholder
            label="Featured Post Image"
            dimensions="1280 × 640 px"
            style={{ height: '400px' }}
          />
        </div>
      </section>

      {/* Post Body */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '800px' }}>
          <div className="font-mono text-dim leading-relaxed" style={{ fontSize: '1rem' }}>
            <MDXRemote source={content} />
          </div>
        </div>
      </section>

      {/* More from Blog */}
      <section className="py-14 md:py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <h2
            className="font-serif text-ink font-light mb-8"
            style={{ fontSize: '2.25rem' }}
          >
            More from the Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Newborn Sleep', 'Breastfeeding', 'Postpartum Recovery'].map((tag) => (
              <div key={tag} className="border border-stroke bg-paper overflow-hidden">
                <ImagePlaceholder label={`${tag} Post`} style={{ height: '200px' }} />
                <div className="px-6 py-7 border-t border-stroke">
                  <span
                    className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.12em] px-2 py-0.5 mb-3"
                    style={{ fontSize: '0.625rem' }}
                  >
                    {tag}
                  </span>
                  <p className="font-serif text-ink font-light" style={{ fontSize: '1.25rem' }}>
                    Placeholder Post Title
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
