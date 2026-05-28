import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import Media from '@/components/ui/Media'
import { getPost, getAllPosts, getOtherPosts, formatDate } from '@/lib/posts'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: post.meta.title,
    description: post.meta.metaDescription,
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPost(params.slug)
  if (!post) notFound()
  const { meta, content } = post
  const others = getOtherPosts(params.slug, 3)

  return (
    <>
      {/* Post Header */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="max-w-[800px]">
            <span
              className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.12em] px-3 py-1 mb-5"
              style={{ fontSize: '0.75rem' }}
            >
              {meta.category}
            </span>
            <h1
              className="font-serif text-ink font-light"
              style={{ fontSize: 'clamp(2.25rem,4.5vw,3.25rem)', lineHeight: 1.15 }}
            >
              {meta.title}
            </h1>
            <div
              className="flex items-center gap-4 font-mono text-muted uppercase tracking-[0.1em] mt-4"
              style={{ fontSize: '0.75rem' }}
            >
              <span>{formatDate(meta.date)}</span>
              <span aria-hidden="true">·</span>
              <span>{meta.readingTime}</span>
              <span aria-hidden="true">·</span>
              <span>{meta.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-canvas">
        <div className="mx-auto px-6 md:px-12 py-10" style={{ maxWidth: '1280px' }}>
          <Media
            src={meta.featuredImage}
            alt={meta.title}
            label={meta.category}
            ratio="16/7"
            priority
          />
        </div>
      </section>

      {/* Post Body */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '800px' }}>
          <div className="prose">
            <MDXRemote source={content} />
          </div>
        </div>
      </section>

      {/* More from Blog */}
      {others.length > 0 && (
        <section className="py-14 md:py-20 bg-canvas">
          <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
            <h2
              className="font-serif text-ink font-light mb-8"
              style={{ fontSize: '2.25rem' }}
            >
              More from the Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block border border-stroke bg-paper overflow-hidden transition-all duration-300 hover:border-accent hover:-translate-y-1"
                >
                  <Media src={p.featuredImage} alt={p.title} label={p.category} ratio="16/10" />
                  <div className="px-6 py-7 border-t border-stroke">
                    <span
                      className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.12em] px-2 py-0.5 mb-3"
                      style={{ fontSize: '0.75rem' }}
                    >
                      {p.category}
                    </span>
                    <p className="font-serif text-ink font-light" style={{ fontSize: '1.25rem', lineHeight: 1.25 }}>
                      {p.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
