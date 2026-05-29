import type { Metadata } from 'next'
import type { Service } from '@/types'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import FAQItem from '@/components/ui/FAQItem'
import Media from '@/components/ui/Media'
import servicesData from '@/data/services.json'

export const metadata: Metadata = {
  title: 'Postpartum Doula & Overnight Newborn Care Services | Philadelphia & Main Line | After the Stork',
  description: 'Overnight postpartum doula support, daytime newborn care, gentle sleep coaching, IBCLC lactation support, and hospital overnight services in Philadelphia and the Main Line.',
}

const services = servicesData as Service[]

const atAGlanceData = [
  ['Overnight Postpartum', '10 PM – 6 AM', 'Most Popular', 'Sleep restored, mornings caught up', '#overnight'],
  ['Extended Overnight', '9 PM – 7 AM', 'Flexible', 'Custom timing for your body\'s needs', '#extended-overnight'],
  ['Daytime Postpartum', '5 – 8 hrs', 'Daytime', 'A long shower, real rest, gentle support', '#daytime'],
  ['Witching Hour', '4 PM – 10 PM', 'Evening', 'Continuous care into the night', '#witching-hour'],
  ['Hospital Overnight', 'In-hospital', 'Critical First Nights', 'Support when nursery isn\'t available', '#hospital-overnight'],
  ['Sleep + Lactation', 'Always', 'Included Free', 'IBCLC & Gentle Sleep Coach on staff', '#sleep-coaching'],
] as const

const overnightIncludes = [
  'Newborn feeding', 'Diaper changes', 'Soothing & sleep', 'Pump cleaning', 'Bottle sterilizing',
  'Baby laundry', 'Light tidying', 'Family laundry', 'Coffee on', 'Trash out', 'Morning hand-off',
]

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
      <section className="py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="pill">Our Services</div>
          <h1 className="font-serif font-light text-ink text-display max-w-[900px]">
            Postpartum Doula &amp; Newborn Care Services<br /><em>in Philadelphia and the Main Line.</em>
          </h1>
          <p className="mt-6" style={{ fontSize: '1.125rem', color: 'var(--dim)', lineHeight: '1.7', maxWidth: '600px' }}>
            We customize every care plan to fit your schedule, your home, and your needs. Serving Philadelphia, the Main Line, and surrounding communities including select families in New Jersey.
          </p>
        </div>
      </section>

      {/* ─── At a Glance ───────────────────────────────────────────────── */}
      <section className="bg-canvas py-20">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <Eyebrow>At a Glance</Eyebrow>
          <h2 className="font-serif font-light text-ink text-h2 mb-10">
            Six ways to support<br /><em>your family.</em>
          </h2>

          <div style={{ overflowX: 'auto' }}>
            {atAGlanceData.map(([name, hours, tag, desc, href], i, arr) => (
              <div
                key={name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.6fr 1fr .8fr 1.4fr 80px',
                  gap: '2rem',
                  padding: '1.5rem 0',
                  borderTop: 'var(--rule-soft)',
                  ...(i === arr.length - 1 ? { borderBottom: 'var(--rule-soft)' } : {}),
                  alignItems: 'center',
                }}
              >
                <div className="font-serif text-ink" style={{ fontSize: '1.5rem', fontWeight: 300 }}>{name}</div>
                <div className="font-mono uppercase tracking-[0.18em]" style={{ fontSize: '0.75rem', color: 'var(--dim)' }}>{hours}</div>
                <span className="svc-tag">{tag}</span>
                <div className="font-serif italic" style={{ fontSize: '1rem', color: 'var(--ink-soft)' }}>{desc}</div>
                <a href={href} className="font-mono uppercase tracking-[0.18em]" style={{ fontSize: '0.75rem', color: 'var(--accent)', whiteSpace: 'nowrap' }}>Learn ↓</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Overnight Support ─────────────────────────────────────────── */}
      <section id="overnight" className="py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            <div>
              <span className="svc-tag">Most Popular · 10 PM – 6 AM</span>
              <h2 className="font-serif font-light text-ink text-h2 mb-5">
                Overnight Postpartum Doula Support
              </h2>
              {overnight?.fullDescription.split('\n\n').map((para, i, arr) => (
                <p
                  key={i}
                  className={`text-dim ${i < arr.length - 1 ? 'mb-4' : 'mb-6'}`}
                  style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}
                >
                  {para}
                </p>
              ))}

              {/* What's Included */}
              <div className="mt-2">
                <p className="font-mono uppercase tracking-[0.18em] text-mid mb-3" style={{ fontSize: '0.75rem' }}>
                  Every overnight shift includes
                </p>
                <div className="flex flex-wrap gap-2">
                  {overnightIncludes.map((item) => (
                    <span key={item} className="area-tag">{item}</span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Button variant="default" href="/contact">Book This Service</Button>
              </div>
            </div>

            <Media
              alt="An After the Stork doula providing overnight newborn care"
              label="Overnight Postpartum Support"
              style={{ height: '480px' }}
            />
          </div>
        </div>
      </section>

      {/* ─── Extended Overnight ────────────────────────────────────────── */}
      <section id="extended-overnight" className="py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            <div>
              <span className="svc-tag">Flexible · Commonly 9 PM – 7 AM</span>
              <h2 className="font-serif font-light text-ink text-h2 mb-5">
                Extended Overnight Newborn Care
              </h2>
              <p className="text-dim mb-6" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
                {extendedOvernight?.fullDescription}
              </p>
            </div>

            <Media
              alt="A peacefully sleeping newborn during extended overnight care"
              label="Extended Overnight Care"
              style={{ height: '360px' }}
            />
          </div>
        </div>
      </section>

      {/* ─── Daytime Support ───────────────────────────────────────────── */}
      <section id="daytime" className="py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-16 items-center">
            <Media
              alt="A parent resting while a doula provides daytime newborn support"
              label="Daytime Postpartum Support"
              style={{ height: '400px' }}
            />

            <div>
              <span className="svc-tag">Daytime · 5–8 Hours</span>
              <h2 className="font-serif font-light text-ink text-h2 mb-5">
                Daytime Postpartum Support
              </h2>
              {daytime?.fullDescription.split('\n\n').map((para, i, arr) => (
                <p
                  key={i}
                  className={`text-dim ${i < arr.length - 1 ? 'mb-4' : 'mb-6'}`}
                  style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}
                >
                  {para}
                </p>
              ))}
              <Button variant="ghost" href="/contact">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Evening & Hospital ────────────────────────────────────────── */}
      <section className="py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div id="witching-hour" style={{ border: 'var(--rule-soft)', background: 'var(--canvas)', padding: '2.5rem' }}>
              <span className="svc-tag">Evening · 4 PM – 10 PM</span>
              <h2 className="font-serif font-light text-ink text-h2 mb-4">
                Witching Hour Support
              </h2>
              <p className="text-dim" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
                {witchingHour?.fullDescription}
              </p>
            </div>

            <div id="hospital-overnight" style={{ border: 'var(--rule-soft)', background: 'var(--canvas)', padding: '2.5rem' }}>
              <span className="svc-tag">Hospital · Philadelphia-Area Hospitals</span>
              <h2 className="font-serif font-light text-ink text-h2 mb-4">
                Hospital Overnight Support
              </h2>
              <p className="text-dim" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
                {hospitalOvernight?.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Gentle Sleep Coaching ─────────────────────────────────────── */}
      <section id="sleep-coaching" className="py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            <div>
              <span className="svc-tag">Included for All Clients · No Additional Charge</span>
              <h2 className="font-serif font-light text-ink text-h2 mb-5">
                Gentle Sleep Coaching
              </h2>
              {sleepCoaching?.fullDescription.split('\n\n').map((para, i, arr) => (
                <p
                  key={i}
                  className={`text-dim ${i < arr.length - 1 ? 'mb-4' : ''}`}
                  style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}
                >
                  {para}
                </p>
              ))}
            </div>

            <Media
              alt="Georgette Kerr guiding a family through gentle sleep coaching"
              label="Georgette — Sleep Coaching"
              style={{ height: '360px' }}
            />
          </div>
        </div>
      </section>

      {/* ─── Breastfeeding & Lactation ─────────────────────────────────── */}
      <section id="lactation" className="py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Media
              alt="Allison Hart, MS RD IBCLC, providing lactation support"
              label="Allison Hart, IBCLC"
              style={{ height: '360px' }}
            />

            <div>
              <span className="svc-tag">IBCLC On Staff · Highest Credential Available</span>
              <h2 className="font-serif font-light text-ink text-h2 mb-5">
                Breastfeeding &amp; Lactation Support
              </h2>
              {lactation?.fullDescription.split('\n\n').map((para, i, arr) => (
                <p
                  key={i}
                  className={`text-dim ${i < arr.length - 1 ? 'mb-4' : 'mb-3'}`}
                  style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}
                >
                  {para}
                </p>
              ))}
              <p className="font-mono uppercase tracking-[0.18em]" style={{ fontSize: '0.75rem', color: 'var(--mid)' }}>
                Allison Hart, MS RD IBCLC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Service FAQs ──────────────────────────────────────────────── */}
      <section className="py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '900px' }}>
          <Eyebrow>Common Questions</Eyebrow>
          <h2 className="font-serif font-light text-ink text-h2 mb-8">
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
      <section className="py-20 bg-ink">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <h2 className="font-serif font-light text-paper text-h1">
                Ready to Build Your Care Plan?
              </h2>
              <p className="mt-3" style={{ fontSize: '0.9375rem', maxWidth: '480px', color: 'rgba(244,239,230,.75)', lineHeight: '1.75' }}>
                Start with a free consultation. We&apos;ll match you with the right doula and put together a care plan that makes sense for your family.
              </p>
            </div>
            <div>
              <Button variant="inverse" href="/contact">Book Your Free Consultation</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
