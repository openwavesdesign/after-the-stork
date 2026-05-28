import type { Metadata } from 'next'
import type { Service, Testimonial as TestimonialType } from '@/types'

export const metadata: Metadata = {
  title: 'Postpartum Doula & Overnight Newborn Care | Philadelphia & Main Line | After the Stork',
  description: 'After the Stork provides expert postpartum doula care for families in Philadelphia, the Main Line, Bucks County, New Jersey, and surrounding communities. After the Stork is known to be the leader in overnight support, starting babies off with good healthy sleep habits that they can take with them for their lifetimes. Daytime and overnight hours available. Book a free consultation today.',
}
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import ServiceBlock from '@/components/ui/ServiceBlock'
import Testimonial from '@/components/ui/Testimonial'
import servicesData from '@/data/services.json'
import testimonialsData from '@/data/testimonials.json'

export default function HomePage() {
  const services = (servicesData as Service[])
    .filter((s) =>
      ['overnight', 'daytime', 'witching-hour', 'hospital-overnight', 'sleep-coaching', 'lactation'].includes(s.id)
    )
    .sort((a, b) => a.order - b.order)

  const testimonials = testimonialsData as TestimonialType[]

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-paper">
        <ImagePlaceholder
          label="Full-Bleed Hero Image"
          dimensions="1440 × 900 px minimum"
          style={{ height: '480px' }}
          className="w-full"
        />

        <div style={{ borderTop: 'var(--rule-ink)' }}>
          <div
            className="mx-auto px-6 md:px-12 py-10 md:py-14"
            style={{ maxWidth: '1280px' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-center">
              {/* Left: copy */}
              <div>
                <Eyebrow>Philadelphia · Main Line · Bucks County · New Jersey · Surrounding Communities</Eyebrow>
                <h1
                  className="font-serif font-light text-ink mt-4"
                  style={{ fontSize: 'clamp(3.5rem, 8vw, 5rem)', lineHeight: 1.05 }}
                >
                  Finally. A Good
                  <br />
                  <em>Night&apos;s Sleep.</em>
                </h1>
                <p
                  className="font-mono text-dim leading-relaxed mt-4"
                  style={{ fontSize: '1rem', maxWidth: '520px' }}
                >
                  Expert overnight postpartum doula and newborn care for families across
                  Philadelphia, the Main Line, Bucks County, New Jersey and neighboring communities.
                </p>
                <div className="flex flex-row gap-4 mt-8 flex-wrap">
                  <Button variant="default" href="/contact">
                    Book a Free Consultation
                  </Button>
                  <Button variant="ghost" href="/services">
                    Explore Services
                  </Button>
                </div>
                {/* ZIP bar */}
                <div className="flex flex-row gap-0 mt-6">
                  <input
                    type="text"
                    placeholder="Enter ZIP code — check service area coverage"
                    className="border border-stroke font-mono text-dim px-4 py-3 outline-none bg-transparent w-64"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}
                    aria-label="ZIP code"
                  />
                  <button
                    type="button"
                    className="bg-ink text-paper font-mono uppercase px-5 py-3"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.16em' }}
                  >
                    Check
                  </button>
                </div>
              </div>

              {/* Right: stats */}
              <div className="border-l border-stroke text-right pl-8 flex-col justify-center gap-8 hidden lg:flex">
                <div>
                  <div
                    className="font-serif text-ink font-light"
                    style={{ fontSize: '3rem', lineHeight: 1 }}
                  >
                    25+
                  </div>
                  <div
                    className="font-mono text-dim uppercase tracking-[0.12em] mt-1"
                    style={{ fontSize: '0.6875rem' }}
                  >
                    Years Serving Philadelphia Families
                  </div>
                </div>
                <div>
                  <div
                    className="font-serif text-ink font-light"
                    style={{ fontSize: '3rem', lineHeight: 1 }}
                  >
                    4×
                  </div>
                  <div
                    className="font-mono text-dim uppercase tracking-[0.12em] mt-1"
                    style={{ fontSize: '0.6875rem' }}
                  >
                    LOVE Award Winner / 2020 · 2021 · 2022 · 2024
                  </div>
                </div>
                <div>
                  <div
                    className="font-serif text-ink font-light"
                    style={{ fontSize: '3rem', lineHeight: 1 }}
                  >
                    IBCLC
                  </div>
                  <div
                    className="font-mono text-dim uppercase tracking-[0.12em] mt-1"
                    style={{ fontSize: '0.6875rem' }}
                  >
                    Lactation Consultant / On Staff
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Welcome Video ─────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            {/* Left: copy */}
            <div>
              <Eyebrow>Meet the Team</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3"
                style={{ fontSize: '2.5rem' }}
              >
                Meet After the Stork
              </h2>
              <p
                className="font-mono text-dim leading-relaxed mt-4"
                style={{ fontSize: '1rem', maxWidth: '460px' }}
              >
                We know the newborn stage can feel overwhelming. You&apos;re healing, adjusting,
                and running on very little sleep — and we&apos;re here to help. Watch our short
                welcome video to learn about why After the Stork is the leading postpartum care
                team and how we support families like yours.
              </p>
              <div className="mt-6">
                <Button variant="ghost" href="/about">
                  Watch the Video
                </Button>
              </div>
            </div>

            {/* Right: video placeholder */}
            <div>
              <ImagePlaceholder
                label="Welcome Video — ~2 min"
                dimensions="16:9 · HD"
                className="w-full"
                style={{ height: '380px' }}
              />
              <p
                className="font-mono text-stroke mt-2"
                style={{ fontSize: '0.75rem' }}
              >
                Video embed — to be recorded and added before launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services Overview ─────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          {/* Header row */}
          <div className="flex justify-between items-end mb-8 flex-wrap gap-6">
            <div>
              <Eyebrow>How We Help</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3"
                style={{ fontSize: '2.5rem' }}
              >
                Our Services
              </h2>
            </div>
            <Button variant="ghost" href="/services">
              View All Services
            </Button>
          </div>

          {/* Service blocks */}
          <div>
            {services.map((service, i) => (
              <ServiceBlock
                key={service.id}
                service={service}
                isLast={i === services.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust + Testimonials ──────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: trust items */}
            <div>
              <Eyebrow>Why After the Stork</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3"
                style={{ fontSize: '2.5rem' }}
              >
                Why Families Choose Us
              </h2>

              {[
                { n: '01', title: '20+ Years Experience', body: "Georgette founded After the Stork over 20 years ago. Our reputation was built one family at a time as moms shared her phone number to other mom-friends who needed a good night’s rest. Now it’s known by thousands of moms all over the Philadelphia area." },
                { n: '02', title: 'LOVE Award — 2020, 2021, 2022 & 2024', body: 'Four-time LOVE Award winners — a community recognition of excellence in postpartum care.' },
                { n: '03', title: 'IBCLC Lactation Support On Staff', body: 'Allison Hart, MS RD IBCLC, provides the highest level of breastfeeding and nutrition support available — rare for a postpartum doula service.' },
                { n: '04', title: 'Certified Gentle Sleep Coach', body: 'Georgette completed the intensive Gentle Sleep Coach training and guides all After the Stork families through infant sleep at no additional charge.' },
                { n: '05', title: 'A Family Business', body: 'Georgette, her daughter Ashley (GM), and daughter Allison (IBCLC) lead the team. This is personal — they care about your family because family is everything to them.' },
              ].map(({ n, title, body }, i, arr) => (
                <div key={n} className={`border-t ${i === arr.length - 1 ? 'border-b' : ''} border-stroke py-6 flex gap-5 items-start`}>
                  <span
                    className="font-serif text-ghost font-light"
                    style={{ fontSize: '2.25rem', minWidth: '2.5rem', lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {n}
                  </span>
                  <div>
                    <p
                      className="font-mono text-ink uppercase tracking-[0.12em] font-medium"
                      style={{ fontSize: '0.75rem' }}
                    >
                      {title}
                    </p>
                    <p
                      className="font-mono text-dim leading-relaxed mt-1"
                      style={{ fontSize: '1rem' }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: testimonials */}
            <div>
              <Eyebrow>What Our Families Say</Eyebrow>
              <div className="mt-4 flex flex-col gap-4">
                {testimonials
                  .filter((t) => t.active)
                  .map((t) => (
                    <Testimonial
                      key={t.id}
                      quote={t.quote}
                      attribution={t.attribution}
                    />
                  ))}
              </div>
              <p
                className="font-mono text-stroke mt-3"
                style={{ fontSize: '0.75rem' }}
              >
                Real client testimonials — to be collected and verified before launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Service Area ──────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-16 items-center">
            {/* Left: map */}
            <div>
              <ImagePlaceholder
                label="Embedded Google Map"
                dimensions="Service area map"
                className="border border-dashed border-stroke h-[280px]"
              />
            </div>

            {/* Right: copy */}
            <div>
              <Eyebrow>Where We Serve</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3"
                style={{ fontSize: '2.5rem' }}
              >
                Greater Philadelphia &amp; Beyond
              </h2>
              <p
                className="font-mono text-dim leading-relaxed mt-4"
                style={{ fontSize: '1rem' }}
              >
                We proudly support families throughout Philadelphia, the Main Line, Bucks County,
                New Jersey, and surrounding communities.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Philadelphia', 'Bryn Mawr', 'Wayne', 'Villanova', 'Ardmore',
                  'Gladwyne', 'Chestnut Hill', 'Dresher', 'New Hope', 'Moorestown NJ', 'Haddonfield NJ', '+ More',
                ].map((area) => (
                  <span
                    key={area}
                    className="border border-stroke font-mono text-mid uppercase tracking-[0.12em] px-3 py-1"
                    style={{ fontSize: '0.6875rem' }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-ink">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
            {/* Left: heading + body */}
            <div>
              <h2
                className="font-serif text-paper font-light"
                style={{ fontSize: 'clamp(2.75rem, 5vw, 3.25rem)', lineHeight: 1.1 }}
              >
                Ready to Rest? Let&apos;s Talk.
              </h2>
              <p
                className="font-mono leading-relaxed mt-4"
                style={{ fontSize: '1rem', maxWidth: '480px', color: 'rgba(255,255,255,0.7)' }}
              >
                Booking a consultation is the first step toward real sleep, real recovery, and
                real support.
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
