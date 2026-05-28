import type { Metadata } from 'next'
import type { Service, Testimonial as TestimonialType } from '@/types'

export const metadata: Metadata = {
  title: 'Postpartum Doula & Overnight Newborn Care | Philadelphia & Main Line | After the Stork',
  description: 'After the Stork provides expert postpartum doula care for families in Philadelphia, the Main Line, Bucks County, New Jersey, and surrounding communities. After the Stork is known to be the leader in overnight support, starting babies off with good healthy sleep habits that they can take with them for their lifetimes. Daytime and overnight hours available. Book a free consultation today.',
}
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import SectionBadge from '@/components/ui/SectionBadge'
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
      {/* ─── 01 / Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-paper" style={{ minHeight: '520px' }}>
        <SectionBadge label="01 / Hero" />

        {/* Background image placeholder */}
        <ImagePlaceholder
          label="Full-Bleed Hero Image"
          dimensions="1440 × 900 px minimum"
          className="absolute inset-0 w-full h-full"
        />

        {/* Content panel anchored to bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-paper"
          style={{ borderTop: 'var(--rule-ink)' }}
        >
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
                  style={{ fontSize: 'clamp(56px, 8vw, 80px)', lineHeight: 1.05 }}
                >
                  Finally. A Good
                  <br />
                  <em>Night&apos;s Sleep.</em>
                </h1>
                <p
                  className="font-mono text-dim leading-relaxed mt-4"
                  style={{ fontSize: '13px', maxWidth: '520px' }}
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
                    style={{ fontSize: '10px', letterSpacing: '0.1em' }}
                  />
                  <button
                    type="button"
                    className="bg-ink text-paper font-mono uppercase px-5 py-3"
                    style={{ fontSize: '9px', letterSpacing: '0.16em' }}
                  >
                    Check
                  </button>
                </div>
                <p
                  className="font-mono text-stroke mt-2"
                  style={{ fontSize: '8px' }}
                >
                  ZIP lookup widget — confirms coverage in real time
                </p>
              </div>

              {/* Right: stats */}
              <div className="border-l border-stroke text-right pl-8 flex-col justify-center gap-8 hidden lg:flex">
                <div>
                  <div
                    className="font-serif text-ink font-light"
                    style={{ fontSize: '48px', lineHeight: 1 }}
                  >
                    25+
                  </div>
                  <div
                    className="font-mono text-dim uppercase tracking-[0.12em] mt-1"
                    style={{ fontSize: '9px' }}
                  >
                    Years Serving Philadelphia Families
                  </div>
                </div>
                <div>
                  <div
                    className="font-serif text-ink font-light"
                    style={{ fontSize: '48px', lineHeight: 1 }}
                  >
                    4×
                  </div>
                  <div
                    className="font-mono text-dim uppercase tracking-[0.12em] mt-1"
                    style={{ fontSize: '9px' }}
                  >
                    LOVE Award Winner / 2020 · 2021 · 2022 · 2024
                  </div>
                </div>
                <div>
                  <div
                    className="font-serif text-ink font-light"
                    style={{ fontSize: '48px', lineHeight: 1 }}
                  >
                    IBCLC
                  </div>
                  <div
                    className="font-mono text-dim uppercase tracking-[0.12em] mt-1"
                    style={{ fontSize: '9px' }}
                  >
                    Lactation Consultant / On Staff
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02 / Welcome Video ─────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="02 / Welcome Video" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            {/* Left: copy */}
            <div>
              <Eyebrow>Meet the Team</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3"
                style={{ fontSize: '40px' }}
              >
                Meet After the Stork
              </h2>
              <p
                className="font-mono text-dim leading-relaxed mt-4"
                style={{ fontSize: '12px', maxWidth: '460px' }}
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
                style={{ fontSize: '8px' }}
              >
                Video embed — to be recorded and added before launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 03 / Services Overview ─────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-canvas">
        <SectionBadge label="03 / Services Overview" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          {/* Header row */}
          <div className="flex justify-between items-end mb-8 flex-wrap gap-6">
            <div>
              <Eyebrow>How We Help</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3"
                style={{ fontSize: '40px' }}
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

      {/* ─── 04 / Trust + Testimonials ──────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="04 / Trust + Testimonials" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: trust items */}
            <div>
              <Eyebrow>Why After the Stork</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3"
                style={{ fontSize: '40px' }}
              >
                Why Families Choose Us
              </h2>

              {/* Trust item 1 */}
              <div className="border-t border-stroke py-6 flex gap-5 items-start">
                <span
                  className="font-serif text-ghost font-light"
                  style={{ fontSize: '36px', minWidth: '40px', lineHeight: 1 }}
                >
                  01
                </span>
                <div>
                  <p
                    className="font-mono text-ink uppercase tracking-[0.12em] font-medium"
                    style={{ fontSize: '10px' }}
                  >
                    20+ Years Experience
                  </p>
                  <p
                    className="font-mono text-dim leading-relaxed mt-1"
                    style={{ fontSize: '11px' }}
                  >
                    Georgette founded After the Stork over 20 years ago. Our reputation was built
                    one family at a time as moms shared her phone number to other mom-friends who
                    needed a good night&apos;s rest. Now it&apos;s known by thousands of moms all
                    over the Philadelphia area.
                  </p>
                </div>
              </div>

              {/* Trust item 2 */}
              <div className="border-t border-stroke py-6 flex gap-5 items-start">
                <span
                  className="font-serif text-ghost font-light"
                  style={{ fontSize: '36px', minWidth: '40px', lineHeight: 1 }}
                >
                  02
                </span>
                <div>
                  <p
                    className="font-mono text-ink uppercase tracking-[0.12em] font-medium"
                    style={{ fontSize: '10px' }}
                  >
                    LOVE Award — 2020, 2021, 2022 &amp; 2024
                  </p>
                  <p
                    className="font-mono text-dim leading-relaxed mt-1"
                    style={{ fontSize: '11px' }}
                  >
                    Four-time LOVE Award winners — a community recognition of excellence in
                    postpartum care.
                  </p>
                </div>
              </div>

              {/* Trust item 3 */}
              <div className="border-t border-stroke py-6 flex gap-5 items-start">
                <span
                  className="font-serif text-ghost font-light"
                  style={{ fontSize: '36px', minWidth: '40px', lineHeight: 1 }}
                >
                  03
                </span>
                <div>
                  <p
                    className="font-mono text-ink uppercase tracking-[0.12em] font-medium"
                    style={{ fontSize: '10px' }}
                  >
                    IBCLC Lactation Support On Staff
                  </p>
                  <p
                    className="font-mono text-dim leading-relaxed mt-1"
                    style={{ fontSize: '11px' }}
                  >
                    Allison Hart, MS RD IBCLC, provides the highest level of breastfeeding and
                    nutrition support available — rare for a postpartum doula service.
                  </p>
                </div>
              </div>

              {/* Trust item 4 */}
              <div className="border-t border-stroke py-6 flex gap-5 items-start">
                <span
                  className="font-serif text-ghost font-light"
                  style={{ fontSize: '36px', minWidth: '40px', lineHeight: 1 }}
                >
                  04
                </span>
                <div>
                  <p
                    className="font-mono text-ink uppercase tracking-[0.12em] font-medium"
                    style={{ fontSize: '10px' }}
                  >
                    Certified Gentle Sleep Coach
                  </p>
                  <p
                    className="font-mono text-dim leading-relaxed mt-1"
                    style={{ fontSize: '11px' }}
                  >
                    Georgette completed the intensive Gentle Sleep Coach training and guides all
                    After the Stork families through infant sleep at no additional charge.
                  </p>
                </div>
              </div>

              {/* Trust item 5 */}
              <div className="border-t border-b border-stroke py-6 flex gap-5 items-start">
                <span
                  className="font-serif text-ghost font-light"
                  style={{ fontSize: '36px', minWidth: '40px', lineHeight: 1 }}
                >
                  05
                </span>
                <div>
                  <p
                    className="font-mono text-ink uppercase tracking-[0.12em] font-medium"
                    style={{ fontSize: '10px' }}
                  >
                    A Family Business
                  </p>
                  <p
                    className="font-mono text-dim leading-relaxed mt-1"
                    style={{ fontSize: '11px' }}
                  >
                    Georgette, her daughter Ashley (GM), and daughter Allison (IBCLC) lead the
                    team. This is personal — they care about your family because family is
                    everything to them.
                  </p>
                </div>
              </div>
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
                style={{ fontSize: '8px' }}
              >
                Real client testimonials — to be collected and verified before launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 05 / Service Area ──────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-canvas">
        <SectionBadge label="05 / Service Area" />
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
                style={{ fontSize: '40px' }}
              >
                Greater Philadelphia &amp; Beyond
              </h2>
              <p
                className="font-mono text-dim leading-relaxed mt-4"
                style={{ fontSize: '12px' }}
              >
                We proudly support families throughout Philadelphia, the Main Line, Bucks County,
                New Jersey, and surrounding communities.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Philadelphia',
                  'Bryn Mawr',
                  'Wayne',
                  'Villanova',
                  'Ardmore',
                  'Gladwyne',
                  'Chestnut Hill',
                  'Dresher',
                  'New Hope',
                  'Moorestown NJ',
                  'Haddonfield NJ',
                  '+ More',
                ].map((area) => (
                  <span
                    key={area}
                    className="border border-stroke font-mono text-mid uppercase tracking-[0.12em] px-3 py-1"
                    style={{ fontSize: '8px' }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 06 / CTA Banner ────────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-ink">
        <SectionBadge label="06 / CTA" dark={true} />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
            {/* Left: heading + body */}
            <div>
              <h2
                className="font-serif text-paper font-light"
                style={{ fontSize: 'clamp(44px, 5vw, 52px)', lineHeight: 1.1 }}
              >
                Ready to Rest? Let&apos;s Talk.
              </h2>
              <p
                className="font-mono leading-relaxed mt-4"
                style={{ fontSize: '12px', maxWidth: '480px', color: 'rgba(255,255,255,0.6)' }}
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
