import type { Metadata } from 'next'
import Eyebrow from '@/components/ui/Eyebrow'

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
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="pill">Resources</div>
          <h1
            className="font-serif font-light text-ink"
            style={{ fontSize: 'clamp(2.25rem,4.5vw,3.25rem)', lineHeight: 1.05, letterSpacing: '-0.015em', maxWidth: '900px' }}
          >
            Postpartum &amp; Newborn Care Resources for <em>Philadelphia Families</em>
          </h1>
          <p className="mt-6" style={{ fontSize: '1.125rem', color: 'var(--dim)', lineHeight: '1.7', maxWidth: '600px' }}>
            Trusted information, practical guides, and a little reassurance — whenever you need it.
          </p>
        </div>
      </section>

      {/* ─── Lead Magnet ───────────────────────────────────────────────── */}
      <section className="py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            <div>
              <Eyebrow>Free Download</Eyebrow>
              <h2 className="font-serif font-light text-ink mb-5" style={{ fontSize: '2rem' }}>
                What to Expect from an Overnight Postpartum Doula in Philadelphia
              </h2>
              <p className="text-dim mb-8" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
                Never hired a postpartum doula before? This free guide walks you through exactly what overnight doula support looks like — what your doula does, what to prepare, and how to get the most from your care.
              </p>
              <div style={{ display: 'flex', border: 'var(--rule)' }}>
                <label htmlFor="guide-email" className="sr-only">Your email address</label>
                <input
                  id="guide-email"
                  type="email"
                  placeholder="Your email address"
                  style={{
                    flex: 1,
                    border: 'none',
                    background: 'transparent',
                    padding: '16px 18px',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1rem',
                    color: 'var(--ink)',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  className="bg-ink text-paper font-mono uppercase tracking-[0.16em] hover:bg-dim transition-colors whitespace-nowrap"
                  style={{ fontSize: '0.75rem', padding: '0 24px' }}
                >
                  Download
                </button>
              </div>
              <p className="font-mono mt-2" style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '.1em' }}>
                Email capture — connects to email marketing platform
              </p>
            </div>

            {/* PDF Mockup */}
            <div style={{ position: 'relative', aspectRatio: '3/4', background: 'var(--paper)', border: 'var(--rule)', padding: '48px 32px', boxShadow: '0 30px 60px -20px rgba(30,28,25,.18), 0 8px 24px -12px rgba(30,28,25,.12)' }}>
              <div className="font-mono uppercase tracking-[0.22em] mb-5" style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>
                After the Stork · Guide № 01
              </div>
              <h3 className="font-serif font-light text-ink" style={{ fontSize: '1.875rem', lineHeight: 1.05 }}>
                What to Expect from an Overnight Postpartum Doula <em>in Philadelphia.</em>
              </h3>
              <div style={{ position: 'absolute', left: '32px', right: '32px', bottom: '32px' }}>
                <div style={{ height: '1px', background: 'var(--ghost)', marginBottom: '18px' }} />
                <div className="flex justify-between font-mono uppercase tracking-[0.16em]" style={{ fontSize: '0.75rem', color: 'var(--mid)' }}>
                  <span>32 pages · PDF</span>
                  <span>2025 Edition</span>
                </div>
              </div>
              {/* Decorative SVG ornament */}
              <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '120px', height: '120px', opacity: .08 }} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="var(--ink)" strokeWidth=".5" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="var(--ink)" strokeWidth=".5" />
                <path d="M50 5 L50 95 M5 50 L95 50" stroke="var(--ink)" strokeWidth=".5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Resource Categories ────────────────────────────────────────── */}
      <section className="py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          {/* First 3 categories: 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {resourceCategories.slice(0, 3).map((cat) => (
              <div key={cat.category}>
                <p className="font-mono uppercase tracking-[0.18em] text-ink pb-4 mb-2" style={{ fontSize: '0.75rem', fontWeight: 500, borderBottom: 'var(--rule-soft)' }}>
                  {cat.category}
                </p>
                <div>
                  {cat.items.map((item) => (
                    <div
                      key={item.title}
                      style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '14px', padding: '22px 0', borderTop: 'var(--rule-soft)', alignItems: 'center', cursor: 'pointer' }}
                    >
                      <div>
                        <div className="font-serif text-ink" style={{ fontSize: '1.125rem', lineHeight: 1.3, marginBottom: '8px' }}>{item.title}</div>
                        <div className="font-mono uppercase tracking-[0.14em]" style={{ fontSize: '0.75rem', color: 'var(--mid)' }}>{item.type} · {item.source}</div>
                      </div>
                      <div className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--accent)' }}>→</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Last 2 categories: 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.slice(3).map((cat) => (
              <div key={cat.category}>
                <p className="font-mono uppercase tracking-[0.18em] text-ink pb-4 mb-2" style={{ fontSize: '0.75rem', fontWeight: 500, borderBottom: 'var(--rule-soft)' }}>
                  {cat.category}
                </p>
                <div>
                  {cat.items.map((item) => (
                    <div
                      key={item.title}
                      style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '14px', padding: '22px 0', borderTop: 'var(--rule-soft)', alignItems: 'center', cursor: 'pointer' }}
                    >
                      <div>
                        <div className="font-serif text-ink" style={{ fontSize: '1.125rem', lineHeight: 1.3, marginBottom: '8px' }}>{item.title}</div>
                        <div className="font-mono uppercase tracking-[0.14em]" style={{ fontSize: '0.75rem', color: 'var(--mid)' }}>{item.type} · {item.source}</div>
                      </div>
                      <div className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--accent)' }}>→</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
