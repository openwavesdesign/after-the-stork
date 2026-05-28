import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import SectionBadge from '@/components/ui/SectionBadge'

export const metadata: Metadata = { title: 'Blog' }

const posts = [
  { tag: 'Newborn Sleep', title: 'How to Establish a Sleep Routine in the First 6 Weeks', readingTime: '5 min read', coming: false },
  { tag: 'Breastfeeding', title: 'Breastfeeding in the Hospital: What to Expect the First 48 Hours', readingTime: '4 min read', coming: false },
  { tag: 'Postpartum', title: 'The Emotional Side of the Postpartum Period Nobody Warned Me About', readingTime: '7 min read', coming: false },
  { tag: 'Newborn Care', title: 'Why Families Hire a Postpartum Doula Even When Grandma Is Nearby', readingTime: '4 min read', coming: false },
  { tag: 'Lactation', title: "When Breastfeeding Isn't Working: How to Get Real Help", readingTime: '5 min read', coming: false },
  { tag: 'Coming Soon', title: 'More Articles Coming Soon', readingTime: '', coming: true },
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

      {/* ─── 01 / Hero ──────────────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="01 / Hero" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1" style={{ fontSize: '8px' }}>
                Blog
              </span>
              <h1
                className="font-serif font-light text-ink mt-4"
                style={{ fontSize: '56px', lineHeight: 1.05 }}
              >
                The After the Stork Blog
              </h1>
            </div>

            {/* Right */}
            <div>
              <p
                className="font-mono text-dim leading-relaxed"
                style={{ fontSize: '13px', maxWidth: '440px' }}
              >
                Practical advice, honest perspectives, and resources for new and expecting families in Philadelphia and beyond — from the After the Stork team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02 / Featured Post ─────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-canvas">
        <SectionBadge label="02 / Featured Post" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            {/* Left */}
            <ImagePlaceholder label="Featured Post Image" style={{ height: '400px' }} />

            {/* Right */}
            <div>
              <Eyebrow>Featured</Eyebrow>
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.12em] px-3 py-1 mb-3 mt-3"
                style={{ fontSize: '8px' }}
              >
                Postpartum Doula
              </span>
              <h2
                className="font-serif font-light text-ink mb-3"
                style={{ fontSize: '36px', lineHeight: 1.1 }}
              >
                What Does a Postpartum Doula Actually Do? (And Do I Need One?)
              </h2>
              <div
                className="font-mono text-stroke uppercase tracking-[0.1em] flex gap-4 mb-4"
                style={{ fontSize: '9px' }}
              >
                <span>March 1, 2025</span>
                <span>·</span>
                <span>6 min read</span>
                <span>·</span>
                <span>Ashley Morrison</span>
              </div>
              <p
                className="font-mono text-dim leading-relaxed mb-6"
                style={{ fontSize: '12px' }}
              >
                Everything you wanted to know about postpartum doulas — what they do, what they don&rsquo;t do, and how to know if one is right for your family.
              </p>
              <Button variant="ghost" href="/blog/what-does-a-postpartum-doula-do">
                Read the Post
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 03 / Post Grid ─────────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="03 / Post Grid" />
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
                    style={{ fontSize: '7px' }}
                  >
                    {post.tag}
                  </span>
                  <p
                    className="font-serif text-ink font-light leading-tight mb-3"
                    style={{ fontSize: '20px' }}
                  >
                    {post.title}
                  </p>
                  {!post.coming && post.readingTime && (
                    <p
                      className="font-mono text-stroke uppercase tracking-[0.1em]"
                      style={{ fontSize: '9px' }}
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

      {/* ─── 04 / Newsletter ────────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-ink">
        <SectionBadge label="04 / Newsletter" dark={true} />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-[10px]">
                <span className="text-white/40" style={{ fontSize: '6px' }}>◆</span>
                <span className="font-mono text-white/40 uppercase tracking-[0.2em]" style={{ fontSize: '9px' }}>
                  Stay Connected
                </span>
              </div>
              <h2
                className="font-serif text-paper font-light mt-3"
                style={{ fontSize: '40px' }}
              >
                Postpartum Insights, Delivered
              </h2>
              <p
                className="font-mono leading-relaxed mt-3"
                style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}
              >
                New articles, local resources, and occasional updates from the After the Stork team. No spam, ever.
              </p>
            </div>

            {/* Right */}
            <div>
              <div className="flex gap-0">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="border border-stroke bg-white/5 text-paper font-mono outline-none flex-1 tracking-[0.05em] placeholder:text-white/30 px-4 py-3"
                  style={{ fontSize: '11px' }}
                />
                <button
                  className="bg-paper text-ink font-mono uppercase tracking-[0.16em] hover:bg-ghost transition-colors whitespace-nowrap px-6 py-3"
                  style={{ fontSize: '9px' }}
                >
                  Subscribe →
                </button>
              </div>
              <p className="font-mono text-white/30 mt-2" style={{ fontSize: '8px' }}>
                Connects to email marketing platform — to be wired up
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
