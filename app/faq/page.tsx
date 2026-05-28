import type { Metadata } from 'next'
import type { FAQCategory } from '@/types'
import Button from '@/components/ui/Button'
import FAQItem from '@/components/ui/FAQItem'
import SectionBadge from '@/components/ui/SectionBadge'
import Breadcrumb from '@/components/layout/Breadcrumb'
import faqsData from '@/data/faqs.json'

export const metadata: Metadata = {
  title: 'Postpartum Doula FAQs | After the Stork Philadelphia',
  description: 'Have questions about postpartum doula and overnight newborn care? Find answers from the After the Stork team — serving Philadelphia and the Main Line for over 25 years.',
}

const faqs = faqsData as FAQCategory[]

export default function FAQPage() {
  return (
    <>
      {/* ─── 01 / Hero ──────────────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="01 / Hero" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: heading */}
            <div>
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1"
                style={{ fontSize: '8px' }}
              >
                FAQ
              </span>
              <h1
                className="font-serif font-light text-ink mt-4"
                style={{ fontSize: 'clamp(56px, 7vw, 72px)', lineHeight: 1.05 }}
              >
                Your Questions, Answered
              </h1>
            </div>

            {/* Right: body */}
            <div>
              <p
                className="font-mono text-dim leading-relaxed"
                style={{ fontSize: '13px', maxWidth: '440px' }}
              >
                We know choosing postpartum support is a big decision. Below are the questions we
                hear most often from families in Philadelphia and the Main Line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02–05 / FAQ Categories ─────────────────────────────────────────── */}
      {faqs.map((category, catIndex) => (
        <section
          key={category.slug}
          className={`relative py-14 md:py-20 ${catIndex % 2 === 0 ? 'bg-canvas' : 'bg-paper'}`}
        >
          <SectionBadge label={`0${catIndex + 2} / ${category.category}`} />
          <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '900px' }}>
            <p
              className="font-mono text-dim uppercase tracking-[0.16em] mb-8"
              style={{ fontSize: '9px' }}
            >
              {category.category}
            </p>
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

      {/* ─── 06 / CTA ───────────────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-ink">
        <SectionBadge label="06 / CTA" dark={true} />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
            {/* Left: copy */}
            <div>
              <h2
                className="font-serif text-paper font-light"
                style={{ fontSize: '44px', lineHeight: 1.1 }}
              >
                Still Have Questions?
              </h2>
              <p
                className="font-mono leading-relaxed mt-3"
                style={{ fontSize: '12px', maxWidth: '480px', color: 'rgba(255,255,255,0.6)' }}
              >
                We&apos;re happy to answer anything not covered above. Reach out directly — or book
                a free consultation and we&apos;ll walk you through everything.
              </p>
            </div>

            {/* Right: CTA button */}
            <div>
              <Button variant="inverse" href="/contact">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
