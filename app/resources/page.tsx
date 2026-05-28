import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Eyebrow from '@/components/ui/Eyebrow'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import SectionBadge from '@/components/ui/SectionBadge'

export const metadata: Metadata = {
  title: 'Postpartum & Newborn Care Resources | After the Stork Philadelphia',
  description: 'Helpful resources for new and expecting families in Philadelphia and the Main Line — postpartum recovery, newborn sleep, breastfeeding, and more.',
}

const resourceCategories = [
  {
    category: 'Postpartum Recovery',
    items: [
      { title: 'What Is the Fourth Trimester?', type: 'Blog Post', source: 'After the Stork Blog' },
      { title: "Postpartum Recovery: What's Normal (and What's Not)", type: 'Blog Post', source: 'After the Stork Blog' },
      { title: 'Postpartum Mental Health Resources in Philadelphia', type: 'External Resource', source: 'Curated List' },
    ],
  },
  {
    category: 'Newborn Sleep',
    items: [
      { title: 'Newborn Sleep: What to Expect in the First 12 Weeks', type: 'Blog Post', source: 'After the Stork Blog' },
      { title: 'Gentle Sleep Coaching: What It Is and When to Start', type: 'Blog Post', source: 'By Georgette Kerr' },
      { title: 'How Overnight Doula Support Protects Your Sleep', type: 'Blog Post', source: 'After the Stork Blog' },
    ],
  },
  {
    category: 'Breastfeeding & Feeding',
    items: [
      { title: "Breastfeeding in the First Weeks: What's Normal, What's Not", type: 'Blog Post', source: 'By Allison Hart, IBCLC' },
      { title: 'Breastfeeding vs. Formula: A Non-Judgmental Overview', type: 'Blog Post', source: 'After the Stork Blog' },
      { title: 'When to Call a Lactation Consultant', type: 'Blog Post', source: 'After the Stork Blog' },
    ],
  },
  {
    category: 'Choosing Your Support Team',
    items: [
      { title: "Night Nurse vs. Postpartum Doula: What's the Difference?", type: 'Blog Post', source: 'After the Stork Blog' },
      { title: 'How to Choose a Postpartum Doula in Philadelphia', type: 'Blog Post', source: 'After the Stork Blog' },
      { title: 'Questions to Ask Before Hiring a Postpartum Doula', type: 'Blog Post', source: 'After the Stork Blog' },
    ],
  },
  {
    category: 'Local Philadelphia Resources',
    items: [
      { title: 'Philadelphia-Area Lactation Consultants', type: 'Curated List', source: 'Georgette/Ashley to review' },
      { title: 'Postpartum Mental Health Support in the Region', type: 'Curated List', source: 'External Link' },
      { title: 'Pediatrician Recommendations for Main Line Families', type: 'Curated List', source: 'Georgette/Ashley to review' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-paper border-b border-stroke">
        <div className="mx-auto px-6 md:px-12 py-4" style={{ maxWidth: '1280px' }}>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Resources' }]} />
        </div>
      </div>

      {/* ─── 01 / Hero ──────────────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="01 / Hero" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <span className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1" style={{ fontSize: '8px' }}>
            Resources
          </span>
          <h1
            className="font-serif font-light text-ink mt-4"
            style={{ fontSize: 'clamp(52px, 6vw, 72px)', lineHeight: 1.05, maxWidth: '900px' }}
          >
            Postpartum &amp; Newborn Care Resources for <em>Philadelphia Families</em>
          </h1>
          <p
            className="font-mono text-dim leading-relaxed mt-4"
            style={{ fontSize: '13px', maxWidth: '600px' }}
          >
            Trusted information, practical guides, and a little reassurance — whenever you need it.
          </p>
        </div>
      </section>

      {/* ─── 02 / Lead Magnet ───────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-canvas">
        <SectionBadge label="02 / Free Guide" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            {/* Left */}
            <div>
              <Eyebrow>Free Download</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3 mb-4"
                style={{ fontSize: '40px' }}
              >
                What to Expect from an Overnight Postpartum Doula in Philadelphia
              </h2>
              <p
                className="font-mono text-dim leading-relaxed mb-6"
                style={{ fontSize: '12px' }}
              >
                Never hired a postpartum doula before? This free guide walks you through exactly what overnight doula support looks like — what your doula does, what to prepare, and how to get the most from your care.
              </p>
              {/* Email + button row */}
              <div className="flex gap-0">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="border border-stroke bg-transparent font-mono text-dim outline-none flex-1 tracking-[0.05em] focus:border-ink transition-colors px-4 py-3"
                  style={{ fontSize: '11px' }}
                />
                <button
                  type="submit"
                  className="bg-ink text-paper font-mono uppercase tracking-[0.16em] hover:bg-dim transition-colors whitespace-nowrap px-6 py-3"
                  style={{ fontSize: '9px' }}
                >
                  Download the Free Guide
                </button>
              </div>
              <p className="font-mono text-stroke mt-2" style={{ fontSize: '8px' }}>
                Email capture — connects to email marketing platform
              </p>
            </div>

            {/* Right */}
            <ImagePlaceholder
              label="Guide Cover Mockup"
              dimensions="PDF Preview Image"
              style={{ height: '400px' }}
            />
          </div>
        </div>
      </section>

      {/* ─── 03 / Resource Categories ───────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="03 / Resources" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          {/* First 3 categories: 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {resourceCategories.slice(0, 3).map((cat) => (
              <div key={cat.category}>
                <p
                  className="font-mono text-ink uppercase tracking-[0.14em] font-medium mb-4 pb-3 border-b border-stroke"
                  style={{ fontSize: '10px' }}
                >
                  {cat.category}
                </p>
                <ul>
                  {cat.items.map((item) => (
                    <li key={item.title} className="border-t border-stroke py-4 flex items-start gap-3">
                      <span className="text-mid mt-0.5" style={{ fontSize: '12px' }}>◎</span>
                      <div>
                        <p className="font-mono text-ink" style={{ fontSize: '12px' }}>{item.title}</p>
                        <p
                          className="font-mono text-stroke uppercase tracking-[0.1em] mt-0.5"
                          style={{ fontSize: '9px' }}
                        >
                          {item.type} · {item.source}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Last 2 categories: 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.slice(3).map((cat) => (
              <div key={cat.category}>
                <p
                  className="font-mono text-ink uppercase tracking-[0.14em] font-medium mb-4 pb-3 border-b border-stroke"
                  style={{ fontSize: '10px' }}
                >
                  {cat.category}
                </p>
                <ul>
                  {cat.items.map((item) => (
                    <li key={item.title} className="border-t border-stroke py-4 flex items-start gap-3">
                      <span className="text-mid mt-0.5" style={{ fontSize: '12px' }}>◎</span>
                      <div>
                        <p className="font-mono text-ink" style={{ fontSize: '12px' }}>{item.title}</p>
                        <p
                          className="font-mono text-stroke uppercase tracking-[0.1em] mt-0.5"
                          style={{ fontSize: '9px' }}
                        >
                          {item.type} · {item.source}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
