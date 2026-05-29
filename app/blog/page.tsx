import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import Media from '@/components/ui/Media'
import Reveal from '@/components/ui/Reveal'
import { getAllPosts, getCategories, formatDate } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Postpartum Doula Blog | After the Stork Philadelphia',
  description: 'Expert insights on postpartum recovery, newborn care, breastfeeding, and infant sleep from the After the Stork team — Philadelphia’s premier postpartum doula agency since 2006.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const featured = posts[0]
  const rest = posts.slice(1)
  const categories = getCategories()

  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="pill">Blog</div>
              <h1 className="font-serif font-light text-ink text-display">
                The After<br /><em>the Stork Blog.</em>
              </h1>
            </div>

            <div>
              <p className="text-dim" style={{ fontSize: '0.9375rem', maxWidth: '440px', lineHeight: '1.75' }}>
                Postpartum recovery, newborn care, breastfeeding, and infant sleep — written by the team behind Philadelphia&rsquo;s premier postpartum doula agency, with an IBCLC on staff and a Certified Gentle Sleep Coach. Real expertise, real families, real answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Post ─────────────────────────────────────────────── */}
      {featured && (
        <section className="py-20 bg-canvas">
          <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
              <Media
                src={featured.featuredImage}
                alt={featured.title}
                label={`${featured.category} · Featured`}
                ratio="3/2"
              />

              <div>
                <Eyebrow>Featured</Eyebrow>
                <span className="area-tag mb-4 inline-block">{featured.category}</span>
                <h2 className="font-serif font-light text-ink text-h3 mb-3">
                  {featured.title}
                </h2>
                <div
                  className="font-mono uppercase tracking-[0.16em] flex flex-wrap gap-4 mb-5"
                  style={{ fontSize: '0.75rem', color: 'var(--mid)' }}
                >
                  <span>{formatDate(featured.date)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featured.readingTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featured.author}</span>
                </div>
                <p className="text-dim mb-6" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
                  {featured.metaDescription}
                </p>
                <Button variant="ghost" href={`/blog/${featured.slug}`}>
                  Read the Post
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Category bar ──────────────────────────────────────────────── */}
      <section style={{ borderBottom: 'var(--rule)' }}>
        <div className="mx-auto px-6 md:px-12 py-6 flex justify-between items-center flex-wrap gap-6" style={{ maxWidth: '1280px' }}>
          <div className="flex gap-2 flex-wrap">
            <span className="area-tag" style={{ borderColor: 'var(--ink)', color: 'var(--ink)', fontWeight: 500 }}>All Posts</span>
            {categories.map((c) => (
              <span key={c} className="area-tag">{c}</span>
            ))}
          </div>
          <span className="font-mono uppercase tracking-[0.18em] text-mid" style={{ fontSize: '0.75rem' }}>
            {posts.length} {posts.length === 1 ? 'post' : 'posts'}
          </span>
        </div>
      </section>

      {/* ─── Post Grid ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block border bg-paper overflow-hidden transition-all duration-300 hover:border-accent hover:-translate-y-1 h-full"
                  style={{ borderColor: 'var(--stroke)' }}
                >
                  <Media
                    src={post.featuredImage}
                    alt={post.title}
                    label={post.category}
                    ratio="16/10"
                  />
                  <div className="px-6 py-7" style={{ borderTop: 'var(--rule-soft)' }}>
                    <span className="area-tag mb-3 inline-block">{post.category}</span>
                    <p
                      className="font-serif text-ink font-light leading-tight mb-3"
                      style={{ fontSize: '1.25rem' }}
                    >
                      {post.title}
                    </p>
                    <p className="font-mono uppercase tracking-[0.18em]" style={{ fontSize: '0.75rem', color: 'var(--mid)' }}>
                      {formatDate(post.date)} · {post.readingTime}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Newsletter ────────────────────────────────────────────────── */}
      <section className="py-20 bg-ink">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Eyebrow dark>Stay in the Loop</Eyebrow>
              <h2 className="font-serif font-light text-paper text-h2">
                Get Postpartum Insights<br /><em style={{ color: 'var(--accent-soft)' }}>Delivered to Your Inbox.</em>
              </h2>
              <p className="mt-4" style={{ fontSize: '0.9375rem', color: 'rgba(244,239,230,.75)', lineHeight: '1.75' }}>
                Practical tips, honest advice, and resources for new and expecting families. No noise, just good stuff.
              </p>
            </div>

            <div>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <div style={{ display: 'flex', border: '1px solid rgba(255,255,255,.2)' }}>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Email address"
                  className="flex-1 outline-none"
                  style={{ background: 'rgba(255,255,255,.05)', color: 'var(--paper)', fontFamily: 'var(--font-serif)', fontSize: '1rem', padding: '16px 18px', border: 'none' }}
                />
                <button
                  className="font-mono uppercase tracking-[0.16em] hover:bg-ghost transition-colors whitespace-nowrap"
                  style={{ background: 'var(--paper)', color: 'var(--ink)', fontSize: '0.75rem', padding: '0 24px' }}
                >
                  Subscribe &rarr;
                </button>
              </div>
              <p className="font-mono mt-2" style={{ fontSize: '0.75rem', color: 'rgba(244,239,230,.35)', letterSpacing: '.1em' }}>
                We&rsquo;ll only send things worth reading. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
