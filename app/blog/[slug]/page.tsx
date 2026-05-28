import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import SectionBadge from '@/components/ui/SectionBadge'

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
      {/* Section 01: Post Header */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="01 / Post" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: frontmatter.title },
          ]} />
          <div className="mt-8 max-w-[800px]">
            <span className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.12em] px-3 py-1 mb-5" style={{ fontSize: '8px' }}>
              {frontmatter.category}
            </span>
            <h1 className="font-serif text-ink font-light" style={{ fontSize: '52px', lineHeight: '1.15' }}>
              {frontmatter.title}
            </h1>
            <div className="flex items-center gap-4 font-mono text-stroke uppercase tracking-[0.1em] mt-4" style={{ fontSize: '9px' }}>
              <span>{frontmatter.date}</span>
              <span>·</span>
              <span>{frontmatter.readingTime}</span>
              <span>·</span>
              <span>{frontmatter.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Featured Image */}
      <section className="relative bg-canvas">
        <SectionBadge label="02 / Featured Image" />
        <div className="mx-auto px-6 md:px-12 py-10" style={{ maxWidth: '1280px' }}>
          <ImagePlaceholder
            label="Featured Post Image"
            dimensions="1280 × 640 px"
            style={{ height: '400px' }}
          />
        </div>
      </section>

      {/* Section 03: Post Body */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="03 / Article" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '800px' }}>
          <div className="font-mono text-dim leading-relaxed" style={{ fontSize: '13px' }}>
            <MDXRemote source={content} />
          </div>
        </div>
      </section>

      {/* Section 04: More from Blog */}
      <section className="relative py-14 md:py-20 bg-canvas">
        <SectionBadge label="04 / More Posts" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <h2 className="font-serif text-ink font-light mb-8" style={{ fontSize: '36px' }}>
            More from the Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Newborn Sleep', 'Breastfeeding', 'Postpartum Recovery'].map((tag) => (
              <div key={tag} className="border border-stroke bg-paper overflow-hidden">
                <ImagePlaceholder label={`${tag} Post`} style={{ height: '200px' }} />
                <div className="px-6 py-7 border-t border-stroke">
                  <span className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.12em] px-2 py-0.5 mb-3" style={{ fontSize: '7px' }}>{tag}</span>
                  <p className="font-serif text-ink font-light" style={{ fontSize: '20px' }}>Placeholder Post Title</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
