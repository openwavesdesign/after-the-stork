import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Postpartum Doula Blog | After the Stork Philadelphia',
  description: 'Expert insights on postpartum recovery, newborn care, breastfeeding, and infant sleep from the After the Stork team — 25+ years of Philadelphia experience.',
}

const posts = [
  { tag: 'Newborn Care', title: "Night Nurse vs. Postpartum Doula: What's the Difference?", readingTime: '5 min read', coming: false },
  { tag: 'Breastfeeding', title: "Breastfeeding in the First Weeks: What's Normal, What's Not", readingTime: '6 min read', coming: false },
  { tag: 'Infant Sleep', title: 'Gentle Sleep Coaching: What It Is and When to Start', readingTime: '5 min read', coming: false },
  { tag: 'Philadelphia', title: 'How Much Does a Postpartum Doula Cost in Philadelphia?', readingTime: '5 min read', coming: false },
  { tag: 'Overnight Support', title: '10 Signs You Could Benefit from an Overnight Doula', readingTime: '6 min read', coming: false },
  { tag: 'Coming Soon', title: '[Future Post]', readingTime: '', coming: true },
]

const filterTabs = ['Newborn Care', 'Breastfeeding', 'Infant Sleep', 'Postpartum Recovery', 'Philadelphia', 'Overnight']

export default function BlogPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="pill">Blog</div>
              <h1
                className="font-serif font-light text-ink"
                style={{ fontSize: 'clamp(2.25rem,4.5vw,3.25rem)', lineHeight: 1.05, letterSpacing: '-0.015em' }}
              >
                The After<br /><em>the Stork Blog.</em>
              </h1>
            </div>

            <div>
              <p className="text-dim" style={{ fontSize: '0.9375rem', maxWidth: '440px', lineHeight: '1.75' }}>
                Postpartum recovery, newborn care, breastfeeding, and infant sleep — written by people with 25+ years of experience, an IBCLC on staff, and a Certified Gentle Sleep Coach. Real expertise, real families, real answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Post ─────────────────────────────────────────────── */}
      <section className="py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            <ImagePlaceholder label="Featured Post Image" style={{ height: '400px' }} />

            <div>
              <Eyebrow>Featured</Eyebrow>
              <span className="area-tag mb-4 inline-block">Postpartum Doula</span>
              <h2 className="font-serif font-light text-ink mb-3" style={{ fontSize: '1.75rem', lineHeight: 1.1 }}>
                What Does a Postpartum Doula Actually Do? (And Do I Need One?)
              </h2>
              <div
                className="font-mono uppercase tracking-[0.16em] flex flex-wrap gap-4 mb-5"
                style={{ fontSize: '0.75rem', color: 'var(--mid)' }}
              >
                <span>March 1, 2025</span>
                <span>·</span>
                <span>6 min read</span>
                <span>·</span>
                <span>Ashley Morrison</span>
              </div>
              <p className="text-dim mb-6" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
                Everything you wanted to know about postpartum doulas — what they do, what they don&rsquo;t do, and how to know if one is right for your family&hellip;
              </p>
              <Button variant="ghost" href="/blog/what-does-a-postpartum-doula-do">
                Read the Post
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Category filter bar ───────────────────────────────────────── */}
      <section style={{ borderBottom: 'var(--rule)' }}>
        <div className="mx-auto px-6 md:px-12 py-6 flex justify-between items-center flex-wrap gap-6" style={{ maxWidth: '1280px' }}>
          <div className="flex gap-2 flex-wrap">
            <span className="area-tag" style={{ borderColor: 'var(--ink)', color: 'var(--ink)', fontWeight: 500 }}>All Posts</span>
            {filterTabs.map(t => (
              <span key={t} className="area-tag">{t}</span>
            ))}
          </div>
          <span className="font-mono uppercase tracking-[0.18em] text-mid" style={{ fontSize: '0.75rem' }}>
            Showing 6 of 23 posts
          </span>
        </div>
      </section>

      {/* ─── Post Grid ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.title}
                className={`border bg-paper overflow-hidden transition-all duration-300 hover:border-accent hover:-translate-y-1${post.coming ? ' opacity-40' : ''}`}
                style={{ borderColor: 'var(--stroke)' }}
              >
                <ImagePlaceholder
                  label={`${post.tag} Post Image`}
                  dimensions="Blog Post Thumbnail"
                  style={{ height: '200px' }}
                />
                <div className="px-6 py-7" style={{ borderTop: 'var(--rule-soft)' }}>
                  <span className="area-tag mb-3 inline-block">{post.tag}</span>
                  <p
                    className="font-serif text-ink font-light leading-tight mb-3"
                    style={{ fontSize: '1.25rem' }}
                  >
                    {post.title}
                  </p>
                  {!post.coming && post.readingTime && (
                    <p className="font-mono uppercase tracking-[0.18em]" style={{ fontSize: '0.75rem', color: 'var(--mid)' }}>
                      {post.readingTime}
                    </p>
                  )}
                </div>
              </div>
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
              <h2 className="font-serif font-light" style={{ fontSize: '2rem', color: 'var(--paper)' }}>
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
                  Subscribe →
                </button>
              </div>
              <p className="font-mono mt-2" style={{ fontSize: '0.75rem', color: 'rgba(244,239,230,.35)', letterSpacing: '.1em' }}>
                Connects to email marketing platform — to be wired up
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
