import type { Service, FAQCategory } from '@/types'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import FAQItem from '@/components/ui/FAQItem'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import SectionBadge from '@/components/ui/SectionBadge'
import Breadcrumb from '@/components/layout/Breadcrumb'
import servicesData from '@/data/services.json'
import faqsData from '@/data/faqs.json'

export const metadata = { title: 'Postpartum Doula Services' }

const services = servicesData as Service[]
const servicesFAQs = (faqsData as FAQCategory[]).find(c => c.slug === 'our-services')

export default function ServicesPage() {
  const overnight = services.find(s => s.id === 'overnight')
  const extendedOvernight = services.find(s => s.id === 'extended-overnight')
  const daytime = services.find(s => s.id === 'daytime')
  const witchingHour = services.find(s => s.id === 'witching-hour')
  const hospitalOvernight = services.find(s => s.id === 'hospital-overnight')
  const sleepCoaching = services.find(s => s.id === 'sleep-coaching')
  const lactation = services.find(s => s.id === 'lactation')

  return (
    <>
      {/* ─── 01 / Hero ──────────────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="01 / Hero" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />

          <div className="mt-8">
            <span
              className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1"
              style={{ fontSize: '8px' }}
            >
              Our Services
            </span>
            <h1
              className="font-serif font-light text-ink mt-4"
              style={{ fontSize: 'clamp(52px, 7vw, 72px)', lineHeight: 1.05, maxWidth: '900px' }}
            >
              Postpartum Doula &amp; Newborn Care Services in Philadelphia and the <em>Main Line</em>
            </h1>
            <p
              className="font-mono text-dim leading-relaxed mt-4"
              style={{ fontSize: '13px', maxWidth: '600px' }}
            >
              From overnight newborn care to lactation support, every After the Stork service is
              designed to give new families the rest, confidence, and professional care they need.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 02 / Overnight Support ─────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-canvas">
        <SectionBadge label="02 / Overnight Support" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            {/* Left: copy */}
            <div>
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-4"
                style={{ fontSize: '8px' }}
              >
                Most Popular · 10 PM – 6 AM
              </span>
              <h2
                className="font-serif font-light text-ink mb-4"
                style={{ fontSize: '40px' }}
              >
                Overnight Postpartum Doula Support
              </h2>
              <p
                className="font-mono text-dim leading-relaxed mb-4"
                style={{ fontSize: '12px' }}
              >
                {overnight?.fullDescription}
              </p>
              <p
                className="font-mono text-dim leading-relaxed mb-6"
                style={{ fontSize: '12px' }}
              >
                When baby sleeps, your doula quietly tends to the household: cleaning pump parts,
                sterilizing bottles, doing laundry, wiping down counters, turning on coffee. You
                wake up rested. Your home is a little more caught up.
              </p>
              <Button variant="default" href="/contact">
                Book This Service
              </Button>
            </div>

            {/* Right: image */}
            <ImagePlaceholder
              label="Overnight Service Photo"
              style={{ height: '480px' }}
            />
          </div>
        </div>
      </section>

      {/* ─── 03 / Extended Overnight ────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-canvas">
        <SectionBadge label="03 / Extended Overnight" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            {/* Left: copy */}
            <div>
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-4"
                style={{ fontSize: '8px' }}
              >
                Flexible · Commonly 9 PM – 7 AM
              </span>
              <h2
                className="font-serif font-light text-ink mb-4"
                style={{ fontSize: '40px' }}
              >
                Extended Overnight Newborn Care
              </h2>
              <p
                className="font-mono text-dim leading-relaxed mb-6"
                style={{ fontSize: '12px' }}
              >
                {extendedOvernight?.fullDescription}
              </p>
            </div>

            {/* Right: image */}
            <ImagePlaceholder
              label="Extended Overnight Photo"
              style={{ height: '360px' }}
            />
          </div>
        </div>
      </section>

      {/* ─── 04 / Daytime Support ───────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="04 / Daytime Support" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-16 items-center">
            {/* Left: image */}
            <ImagePlaceholder
              label="Daytime Service Photo"
              style={{ height: '400px' }}
            />

            {/* Right: copy */}
            <div>
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-4"
                style={{ fontSize: '8px' }}
              >
                Daytime · 5–8 Hours
              </span>
              <h2
                className="font-serif font-light text-ink mb-4"
                style={{ fontSize: '40px' }}
              >
                Daytime Postpartum Support
              </h2>
              <p
                className="font-mono text-dim leading-relaxed"
                style={{ fontSize: '12px' }}
              >
                {daytime?.fullDescription}
              </p>
              <p
                className="font-mono text-dim leading-relaxed mt-3 mb-6"
                style={{ fontSize: '12px' }}
              >
                Many families schedule one or two mornings a week — and that one morning becomes the
                day you finally take that long, uninterrupted shower.
              </p>
              <Button variant="ghost" href="/contact">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 05 / Evening & Hospital ────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-canvas">
        <SectionBadge label="05 / Evening & Hospital" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Witching Hour */}
            <div className="border border-stroke bg-paper p-10">
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-4"
                style={{ fontSize: '8px' }}
              >
                Evening · 4 PM – 10 PM
              </span>
              <h2
                className="font-serif font-light text-ink mb-4"
                style={{ fontSize: '32px' }}
              >
                Witching Hour Support
              </h2>
              <p
                className="font-mono text-dim leading-relaxed"
                style={{ fontSize: '12px' }}
              >
                {witchingHour?.fullDescription}
              </p>
            </div>

            {/* Card 2: Hospital Overnight */}
            <div className="border border-stroke bg-paper p-10">
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-4"
                style={{ fontSize: '8px' }}
              >
                Hospital · Philadelphia-Area Hospitals
              </span>
              <h2
                className="font-serif font-light text-ink mb-4"
                style={{ fontSize: '32px' }}
              >
                Hospital Overnight Support
              </h2>
              <p
                className="font-mono text-dim leading-relaxed"
                style={{ fontSize: '12px' }}
              >
                {hospitalOvernight?.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 06 / Gentle Sleep Coaching ─────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="06 / Sleep Coaching" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            {/* Left: copy */}
            <div>
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-4"
                style={{ fontSize: '8px' }}
              >
                Included for All Clients · No Additional Charge
              </span>
              <h2
                className="font-serif font-light text-ink mb-4"
                style={{ fontSize: '40px' }}
              >
                Gentle Sleep Coaching
              </h2>
              <p
                className="font-mono text-dim leading-relaxed"
                style={{ fontSize: '12px' }}
              >
                {sleepCoaching?.fullDescription}
              </p>
            </div>

            {/* Right: image */}
            <ImagePlaceholder
              label="Georgette — Sleep Coaching"
              style={{ height: '360px' }}
            />
          </div>
        </div>
      </section>

      {/* ─── 07 / Breastfeeding & Lactation ─────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-canvas">
        <SectionBadge label="07 / Lactation Support" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: image */}
            <ImagePlaceholder
              label="Allison Hart IBCLC"
              style={{ height: '360px' }}
            />

            {/* Right: copy */}
            <div>
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-4"
                style={{ fontSize: '8px' }}
              >
                IBCLC On Staff · Highest Credential Available
              </span>
              <h2
                className="font-serif font-light text-ink mb-4"
                style={{ fontSize: '40px' }}
              >
                Breastfeeding &amp; Lactation Support
              </h2>
              <p
                className="font-mono text-dim leading-relaxed mb-3"
                style={{ fontSize: '12px' }}
              >
                {lactation?.fullDescription}
              </p>
              <p
                className="font-mono text-stroke"
                style={{ fontSize: '8px' }}
              >
                Allison Hart, MS RD IBCLC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 08 / Service FAQs ──────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="08 / FAQ" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '900px' }}>
          <Eyebrow>Common Questions</Eyebrow>
          <h2
            className="font-serif font-light text-ink mt-3 mb-8"
            style={{ fontSize: '40px' }}
          >
            Questions About Our Services
          </h2>

          {servicesFAQs?.items.map((item, i, arr) => (
            <FAQItem
              key={i}
              question={item.question}
              answer={item.answer}
              isLast={i === arr.length - 1}
            />
          ))}

          <Button variant="ghost" href="/faq" className="mt-8">
            See All FAQs
          </Button>
        </div>
      </section>

      {/* ─── 09 / CTA ───────────────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-ink">
        <SectionBadge label="09 / CTA" dark={true} />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
            {/* Left: copy */}
            <div>
              <h2
                className="font-serif text-paper font-light"
                style={{ fontSize: '44px', lineHeight: 1.1 }}
              >
                Ready to Build Your Care Plan?
              </h2>
              <p
                className="font-mono leading-relaxed mt-3"
                style={{ fontSize: '12px', maxWidth: '480px', color: 'rgba(255,255,255,0.6)' }}
              >
                Start with a free consultation. We&apos;ll match you with the right doula and put
                together a care plan that makes sense for your family.
              </p>
            </div>

            {/* Right: CTA button */}
            <div>
              <Button variant="inverse" href="/contact">
                Book Your Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
