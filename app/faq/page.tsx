import type { Metadata } from 'next'
import type { FAQCategory } from '@/types'
import Button from '@/components/ui/Button'
import FAQItem from '@/components/ui/FAQItem'
import faqsData from '@/data/faqs.json'

export const metadata: Metadata = {
  title: 'Postpartum Doula FAQs | After the Stork Philadelphia',
  description: 'Have questions about postpartum doula and overnight newborn care? Find answers from the After the Stork team — serving Philadelphia and the Main Line for over 25 years.',
}

const faqs = faqsData as FAQCategory[]

export default function FAQPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="pill">FAQ</div>
              <h1
                className="font-serif font-light text-ink"
                style={{ fontSize: 'clamp(2.25rem,4.5vw,3.25rem)', lineHeight: 1.05, letterSpacing: '-0.015em' }}
              >
                Your Questions,<br /><em>Answered.</em>
              </h1>
            </div>

            <div>
              <p className="text-dim" style={{ fontSize: '0.9375rem', maxWidth: '440px', lineHeight: '1.75' }}>
                We know choosing postpartum support is a big decision. Below are the questions we
                hear most often from families in Philadelphia and the Main Line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Quick links ───────────────────────────────────────────────── */}
      <div style={{ borderBottom: 'var(--rule)' }}>
        <div
          className="mx-auto px-6 md:px-12 flex flex-wrap gap-8 items-center"
          style={{ maxWidth: '1280px', padding: '32px 3.5rem' }}
        >
          <span className="font-mono uppercase tracking-[0.18em] text-mid" style={{ fontSize: '0.75rem' }}>
            Jump to:
          </span>
          {faqs.map((cat, i) => (
            <a
              key={cat.slug}
              href={`#faq-${i}`}
              className="font-mono uppercase tracking-[0.18em] text-dim hover:text-ink transition-colors"
              style={{ fontSize: '0.75rem', borderBottom: '1px solid var(--accent)', paddingBottom: '2px' }}
            >
              {cat.category}
            </a>
          ))}
        </div>
      </div>

      {/* ─── FAQ Categories ─────────────────────────────────────────────── */}
      {faqs.map((category, catIndex) => (
        <section
          key={category.slug}
          id={`faq-${catIndex}`}
          className={`py-20 ${catIndex % 2 === 0 ? 'bg-canvas' : 'bg-paper'}`}
        >
          <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '900px' }}>
            <div className="flex items-end justify-between mb-8">
              <p
                className="font-mono text-dim uppercase tracking-[0.22em]"
                style={{ fontSize: '0.75rem' }}
              >
                {category.category}
              </p>
              <div
                className="font-serif font-light italic hidden md:block"
                style={{
                  fontSize: 'clamp(6rem,10vw,8rem)',
                  color: 'var(--accent-tint)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
                aria-hidden="true"
              >
                {String(catIndex + 1).padStart(2, '0')}
              </div>
            </div>
            {category.items.map((item, itemIndex) => (
              <FAQItem
                key={itemIndex}
                question={item.question}
                answer={item.answer}
                isLast={itemIndex === category.items.length - 1}
              />
            ))}
          </div>
        </section>
      ))}

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-ink">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <h2 className="font-serif font-light" style={{ fontSize: '2.25rem', lineHeight: 1.1, color: 'var(--paper)' }}>
                Still Have Questions?
              </h2>
              <p className="mt-3" style={{ fontSize: '0.9375rem', maxWidth: '480px', color: 'rgba(244,239,230,.75)', lineHeight: '1.75' }}>
                We&apos;re happy to answer anything not covered above. Reach out directly — or book
                a free consultation and we&apos;ll walk you through everything.
              </p>
            </div>

            <div>
              <Button variant="inverse" href="/contact">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
