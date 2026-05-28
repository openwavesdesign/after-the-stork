import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
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

export default function BlogPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-paper border-b border-stroke">
        <div className="mx-auto px-6 md:px-12 py-4" style={{ maxWidth: '1280px' }}>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
        </div>
      </div>

      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1" style={{ fontSize: '0.6875rem' }}>
                Blog
              </span>
              <h1
                className="font-serif font-light text-ink mt-4"
                style={{ fontSize: '3.5rem', lineHeight: 1.05 }}
              >
                The After the Stork Blog
              </h1>
            </div>

            <div>
              <p
                className="font-mono text-dim leading-relaxed"
                style={{ fontSize: '1rem', maxWidth: '440px' }}
              >
                Postpartum recovery, newborn care, breastfeeding, and infant sleep — written by people with 25+ years of experience, an IBCLC on staff, and a Certified Gentle Sleep Coach. Real expertise, real families, real answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Post ─────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            <ImagePlaceholder label="Featured Post Image" style={{ height: '400px' }} />

            <div>
              <Eyebrow>Featured</Eyebrow>
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.12em] px-3 py-1 mb-3 mt-3"
                style={{ fontSize: '0.6875rem' }}
              >
                Postpartum Doula
              </span>
              <h2
                className="font-serif font-light text-ink mb-3"
                style={{ fontSize: '2.25rem', lineHeight: 1.1 }}
              >
                What Does a Postpartum Doula Actually Do? (And Do I Need One?)
              </h2>
              <div
                className="font-mono text-stroke uppercase tracking-[0.1em] flex gap-4 mb-4"
                style={{ fontSize: '0.6875rem' }}
              >
                <span>March 1, 2025</span>
                <span>·</span>
                <span>6 min read</span>
                <span>·</span>
                <span>Ashley Morrison</span>
              </div>
              <p
                className="font-mono text-dim leading-relaxed mb-6"
                style={{ fontSize: '1rem' }}
              >
                Everything you wanted to know about postpartum doulas — what they do, what they don&rsquo;t do, and how to know if one is right for your family&hellip;
              </p>
              <Button variant="ghost" href="/blog/what-does-a-postpartum-doula-do">
                Read the Post
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Post Grid ─────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.title}
                className={`border border-stroke bg-paper overflow-hidden${post.coming ? ' opacity-40' : ''}`}
              >
                <ImagePlaceholder
                  label={`${post.tag} Post Image`}
                  dimensions="Blog Post Thumbnail"
                  style={{ height: '200px' }}
                />
                <div className="px-6 py-7 border-t border-stroke">
                  <span
                    className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.12em] px-2 py-0.5 mb-3"
                    style={{ fontSize: '0.625rem' }}
                  >
                    {post.tag}
                  </span>
                  <p
                    className="font-serif text-ink font-light leading-tight mb-3"
                    style={{ fontSize: '1.25rem' }}
                  >
                    {post.title}
                  </p>
                  {!post.coming && post.readingTime && (
                    <p
                      className="font-mono text-stroke uppercase tracking-[0.1em]"
                      style={{ fontSize: '0.6875rem' }}
                    >
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
      <section className="py-14 md:py-20 bg-ink">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-[0.625rem]">
                <span className="text-white/40" style={{ fontSize: '0.5rem' }} aria-hidden="true">◆</span>
                <span className="font-mono text-white/40 uppercase tracking-[0.2em]" style={{ fontSize: '0.6875rem' }}>
                  Stay in the Loop
                </span>
              </div>
              <h2
                className="font-serif text-paper font-light mt-3"
                style={{ fontSize: '2.5rem' }}
              >
                Get Postpartum Insights Delivered to Your Inbox
              </h2>
              <p
                className="font-mono leading-relaxed mt-3"
                style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)' }}
              >
                Practical tips, honest advice, and resources for new and expecting families. No noise, just good stuff.
              </p>
            </div>

            <div>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <div className="flex gap-0">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Email address"
                  className="border border-stroke bg-white/5 text-paper font-mono outline-none flex-1 tracking-[0.05em] placeholder:text-white/30 px-4 py-3"
                  style={{ fontSize: '1rem' }}
                />
                <button
                  className="bg-paper text-ink font-mono uppercase tracking-[0.16em] hover:bg-ghost transition-colors whitespace-nowrap px-6 py-3"
                  style={{ fontSize: '0.75rem' }}
                >
                  Subscribe →
                </button>
              </div>
              <p className="font-mono text-white/30 mt-2" style={{ fontSize: '0.75rem' }}>
                Connects to email marketing platform — to be wired up
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
