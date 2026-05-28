import type { Metadata } from 'next'
import type { Service } from '@/types'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import FAQItem from '@/components/ui/FAQItem'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import servicesData from '@/data/services.json'

export const metadata: Metadata = {
  title: 'Postpartum Doula & Overnight Newborn Care Services | Philadelphia & Main Line | After the Stork',
  description: 'Overnight postpartum doula support, daytime newborn care, gentle sleep coaching, IBCLC lactation support, and hospital overnight services in Philadelphia and the Main Line.',
}

const services = servicesData as Service[]

const serviceFAQs = [
  {
    question: "What does a postpartum doula do?",
    answer: "A postpartum doula provides professional in-home support: newborn care, feeding support, infant sleep guidance, breastfeeding support, household assistance, and emotional reassurance — a whole-family approach to the postpartum period."
  },
  {
    question: "What's the difference between a night nurse and a postpartum doula?",
    answer: "A night nurse focuses solely on the baby. A postpartum doula supports the entire family — newborn care, breastfeeding support, sleep coaching, household assistance, and emotional reassurance all included. At After the Stork, our overnight doulas do all of the above."
  },
  {
    question: "Is Gentle Sleep Coaching really free?",
    answer: "Yes. Georgette completed the intensive three-month Gentle Sleep Coach training program and makes herself available to all After the Stork families to guide and troubleshoot infant sleep issues at no additional charge. It's one of the things that sets us apart."
  },
  {
    question: "Do you have a lactation consultant on staff?",
    answer: "Yes. Allison Hart, MS RD IBCLC, is an International Board Certified Lactation Consultant — the highest level of breastfeeding training available. Georgette has also completed breastfeeding training through The Philadelphia Department of Public Health and The Breastfeeding Resource Center. Our mantra: your goals are our goals."
  },
  {
    question: "Do you serve Bryn Mawr and Wayne?",
    answer: "Yes — we serve families throughout the Main Line including Bryn Mawr, Wayne, Villanova, Ardmore, Gladwyne, and many surrounding communities."
  },
]

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
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div>
            <span
              className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1"
              style={{ fontSize: '0.6875rem' }}
            >
              Our Services
            </span>
            <h1
              className="font-serif font-light text-ink mt-4"
              style={{ fontSize: 'clamp(3.25rem, 7vw, 4.5rem)', lineHeight: 1.05, maxWidth: '900px' }}
            >
              Postpartum Doula &amp; Newborn Care Services in Philadelphia and the Main Line
            </h1>
            <p
              className="font-mono text-dim leading-relaxed mt-4"
              style={{ fontSize: '1rem', maxWidth: '600px' }}
            >
              We customize every care plan to fit your schedule, your home, and your needs. Serving Philadelphia, the Main Line, and surrounding communities including select families in New Jersey.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Overnight Support ─────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            <div>
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-4"
                style={{ fontSize: '0.6875rem' }}
              >
                Most Popular · 10 PM – 6 AM
              </span>
              <h2
                className="font-serif font-light text-ink mb-4"
                style={{ fontSize: '2.5rem' }}
              >
                Overnight Postpartum Doula Support
              </h2>
              {overnight?.fullDescription.split('\n\n').map((para, i, arr) => (
                <p
                  key={i}
                  className={`font-mono text-dim leading-relaxed ${i < arr.length - 1 ? 'mb-4' : 'mb-6'}`}
                  style={{ fontSize: '1rem' }}
                >
                  {para}
                </p>
              ))}
              <Button variant="default" href="/contact">
                Book This Service
              </Button>
            </div>

            <ImagePlaceholder
              label="Overnight Service Photo"
              style={{ height: '480px' }}
            />
          </div>
        </div>
      </section>

      {/* ─── Extended Overnight ────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            <div>
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-4"
                style={{ fontSize: '0.6875rem' }}
              >
                Flexible · Commonly 9 PM – 7 AM
              </span>
              <h2
                className="font-serif font-light text-ink mb-4"
                style={{ fontSize: '2.5rem' }}
              >
                Extended Overnight Newborn Care
              </h2>
              <p
                className="font-mono text-dim leading-relaxed mb-6"
                style={{ fontSize: '1rem' }}
              >
                {extendedOvernight?.fullDescription}
              </p>
            </div>

            <ImagePlaceholder
              label="Extended Overnight Photo"
              style={{ height: '360px' }}
            />
          </div>
        </div>
      </section>

      {/* ─── Daytime Support ───────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-16 items-center">
            <ImagePlaceholder
              label="Daytime Service Photo"
              style={{ height: '400px' }}
            />

            <div>
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-4"
                style={{ fontSize: '0.6875rem' }}
              >
                Daytime · 5–8 Hours
              </span>
              <h2
                className="font-serif font-light text-ink mb-4"
                style={{ fontSize: '2.5rem' }}
              >
                Daytime Postpartum Support
              </h2>
              {daytime?.fullDescription.split('\n\n').map((para, i, arr) => (
                <p
                  key={i}
                  className={`font-mono text-dim leading-relaxed ${i < arr.length - 1 ? 'mb-4' : 'mb-6'}`}
                  style={{ fontSize: '1rem' }}
                >
                  {para}
                </p>
              ))}
              <Button variant="ghost" href="/contact">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Evening & Hospital ────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-stroke bg-paper p-10">
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-4"
                style={{ fontSize: '0.6875rem' }}
              >
                Evening · 4 PM – 10 PM
              </span>
              <h2
                className="font-serif font-light text-ink mb-4"
                style={{ fontSize: '2rem' }}
              >
                Witching Hour Support
              </h2>
              <p
                className="font-mono text-dim leading-relaxed"
                style={{ fontSize: '1rem' }}
              >
                {witchingHour?.fullDescription}
              </p>
            </div>

            <div className="border border-stroke bg-paper p-10">
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-4"
                style={{ fontSize: '0.6875rem' }}
              >
                Hospital · Philadelphia-Area Hospitals
              </span>
              <h2
                className="font-serif font-light text-ink mb-4"
                style={{ fontSize: '2rem' }}
              >
                Hospital Overnight Support
              </h2>
              <p
                className="font-mono text-dim leading-relaxed"
                style={{ fontSize: '1rem' }}
              >
                {hospitalOvernight?.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Gentle Sleep Coaching ─────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            <div>
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-4"
                style={{ fontSize: '0.6875rem' }}
              >
                Included for All Clients · No Additional Charge
              </span>
              <h2
                className="font-serif font-light text-ink mb-4"
                style={{ fontSize: '2.5rem' }}
              >
                Gentle Sleep Coaching
              </h2>
              {sleepCoaching?.fullDescription.split('\n\n').map((para, i, arr) => (
                <p
                  key={i}
                  className={`font-mono text-dim leading-relaxed ${i < arr.length - 1 ? 'mb-4' : ''}`}
                  style={{ fontSize: '1rem' }}
                >
                  {para}
                </p>
              ))}
            </div>

            <ImagePlaceholder
              label="Georgette — Sleep Coaching"
              style={{ height: '360px' }}
            />
          </div>
        </div>
      </section>

      {/* ─── Breastfeeding & Lactation ─────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ImagePlaceholder
              label="Allison Hart IBCLC"
              style={{ height: '360px' }}
            />

            <div>
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-4"
                style={{ fontSize: '0.6875rem' }}
              >
                IBCLC On Staff · Highest Credential Available
              </span>
              <h2
                className="font-serif font-light text-ink mb-4"
                style={{ fontSize: '2.5rem' }}
              >
                Breastfeeding &amp; Lactation Support
              </h2>
              {lactation?.fullDescription.split('\n\n').map((para, i, arr) => (
                <p
                  key={i}
                  className={`font-mono text-dim leading-relaxed ${i < arr.length - 1 ? 'mb-4' : 'mb-3'}`}
                  style={{ fontSize: '1rem' }}
                >
                  {para}
                </p>
              ))}
              <p
                className="font-mono text-stroke"
                style={{ fontSize: '0.75rem' }}
              >
                Allison Hart, MS RD IBCLC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Service FAQs ──────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '900px' }}>
          <Eyebrow>Common Questions</Eyebrow>
          <h2
            className="font-serif font-light text-ink mt-3 mb-8"
            style={{ fontSize: '2.5rem' }}
          >
            Questions About Our Services
          </h2>

          {serviceFAQs.map((item, i, arr) => (
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

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-ink">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <h2
                className="font-serif text-paper font-light"
                style={{ fontSize: '2.75rem', lineHeight: 1.1 }}
              >
                Ready to Build Your Care Plan?
              </h2>
              <p
                className="font-mono leading-relaxed mt-3"
                style={{ fontSize: '1rem', maxWidth: '480px', color: 'rgba(255,255,255,0.7)' }}
              >
                Start with a free consultation. We&apos;ll match you with the right doula and put
                together a care plan that makes sense for your family.
              </p>
            </div>

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
