import type { Metadata } from 'next'
import type { Service, Testimonial as TestimonialType } from '@/types'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Testimonial from '@/components/ui/Testimonial'
import servicesData from '@/data/services.json'
import testimonialsData from '@/data/testimonials.json'

export const metadata: Metadata = {
  title: 'Postpartum Doula & Overnight Newborn Care | Philadelphia & Main Line | After the Stork',
  description: 'After the Stork provides expert postpartum doula care for families in Philadelphia, the Main Line, Bucks County, New Jersey, and surrounding communities. After the Stork is known to be the leader in overnight support, starting babies off with good healthy sleep habits that they can take with them for their lifetimes. Daytime and overnight hours available. Book a free consultation today.',
}

const whyUsItems = [
  { n: '01', ttl: '25+ Years Experience', body: 'Georgette founded After the Stork over 25 years ago. Our reputation was built one family at a time as moms shared her phone number — now known by thousands of moms all over the Philadelphia area.' },
  { n: '02', ttl: 'Four-Time LOVE Award Winner', body: 'A community recognition of excellence in postpartum care — 2020, 2021, 2022, and 2024.' },
  { n: '03', ttl: 'IBCLC Lactation Support On Staff', body: 'Allison Hart, MS RD IBCLC, provides the highest level of breastfeeding and nutrition support available — rare for a postpartum doula service.' },
  { n: '04', ttl: 'Certified Gentle Sleep Coach', body: 'Georgette completed the intensive Gentle Sleep Coach training and guides all After the Stork families through infant sleep at no additional charge.' },
  { n: '05', ttl: 'A Family Business', body: 'Georgette, her daughter Ashley (GM), and daughter Allison (IBCLC) lead the team. This is personal — family is everything to them.' },
]

export default function HomePage() {
  const services = (servicesData as Service[])
    .filter((s) =>
      ['overnight', 'extended-overnight', 'daytime', 'witching-hour', 'hospital-overnight', 'sleep-coaching'].includes(s.id)
    )
    .sort((a, b) => a.order - b.order)

  const testimonials = (testimonialsData as TestimonialType[]).filter(t => t.active)

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <ImagePlaceholder
          label="Hero Image · Family with Newborn"
          dimensions="1440 × 900 px"
          className="absolute inset-0 w-full h-full"
        />

        {/* Top markers */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          padding: '48px 56px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.625rem',
          letterSpacing: '.2em',
          textTransform: 'uppercase',
        }}>
          <span style={{ background: 'rgba(244,239,230,.85)', padding: '8px 14px', backdropFilter: 'blur(6px)', color: 'var(--ink)' }}>
            № 01 · Welcome Home
          </span>
          <span style={{ background: 'rgba(244,239,230,.85)', padding: '8px 14px', backdropFilter: 'blur(6px)', color: 'var(--ink)' }}>
            Est. 2004 · Philadelphia
          </span>
        </div>

        <div style={{ flex: 1 }} />

        {/* Headline */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 3.5rem 3.5rem' }}>
          <h1
            className="font-serif font-light text-ink"
            style={{ fontSize: 'clamp(3.5rem,8vw,7.5rem)', lineHeight: 1.02, letterSpacing: '-0.018em', maxWidth: '1100px' }}
          >
            Finally. A Good<br /><em>Night&apos;s Sleep.</em>
          </h1>
        </div>

        {/* Bottom panel */}
        <div style={{ position: 'relative', zIndex: 2, background: 'var(--paper)', borderTop: '1px solid var(--ink)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 3.5rem 56px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_auto] gap-20 items-end">
              {/* Left */}
              <div>
                <Eyebrow>Philadelphia · Main Line · Bucks · New Jersey</Eyebrow>
                <p
                  className="font-serif"
                  style={{ fontSize: '1.375rem', lineHeight: '1.45', maxWidth: '620px', fontWeight: 300, color: 'var(--ink-soft)', marginTop: 0 }}
                >
                  Expert overnight postpartum doula and newborn care for families across greater Philadelphia. Twenty-five years of bringing rest, expertise, and a little quiet magic into your first weeks at home.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button variant="fill" href="/contact">Book a Free Consultation</Button>
                  <Button variant="ghost" href="/services">Explore Services</Button>
                </div>

                {/* ZIP bar */}
                <div style={{ display: 'flex', alignItems: 'stretch', border: '1px solid var(--ink)', maxWidth: '440px', marginTop: '2rem', background: 'var(--paper)' }}>
                  <label htmlFor="zip" className="sr-only">ZIP code</label>
                  <input
                    id="zip"
                    type="text"
                    placeholder="Enter your ZIP — check coverage"
                    style={{ flex: 1, border: 'none', background: 'transparent', padding: '16px 18px', fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--ink)', outline: 'none' }}
                  />
                  <button
                    type="button"
                    className="bg-ink text-paper font-mono uppercase tracking-[0.18em] hover:bg-accent-deep transition-colors"
                    style={{ padding: '0 26px', fontSize: '0.625rem' }}
                  >
                    Check
                  </button>
                </div>
              </div>

              {/* Right stats — hidden on mobile */}
              <div
                className="hidden lg:flex flex-col gap-9 text-right pl-14"
                style={{ borderLeft: '1px solid var(--ghost)' }}
              >
                <div>
                  <div className="font-serif text-ink" style={{ fontSize: '4.5rem', fontWeight: 300, lineHeight: .95, letterSpacing: '-.02em' }}>25+</div>
                  <div className="font-mono uppercase tracking-[0.18em] mt-2" style={{ fontSize: '0.625rem', color: 'var(--mid)', lineHeight: 1.5 }}>Years Serving<br />Philadelphia Families</div>
                </div>
                <div>
                  <div className="font-serif text-ink" style={{ fontSize: '4.5rem', fontWeight: 300, lineHeight: .95, letterSpacing: '-.02em' }}>4×</div>
                  <div className="font-mono uppercase tracking-[0.18em] mt-2" style={{ fontSize: '0.625rem', color: 'var(--mid)', lineHeight: 1.5 }}>LOVE Award<br />2020 · 2021 · 2022 · 2024</div>
                </div>
                <div>
                  <div className="font-serif text-ink" style={{ fontSize: '2.625rem', fontWeight: 300, lineHeight: .95, letterSpacing: '-.02em' }}>IBCLC</div>
                  <div className="font-mono uppercase tracking-[0.18em] mt-2" style={{ fontSize: '0.625rem', color: 'var(--mid)', lineHeight: 1.5 }}>Lactation Consultant<br />On Staff</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Awards Ribbon ────────────────────────────────────────────── */}
      <div className="awards-ribbon">
        <span className="awards-ribbon-item"><strong style={{ color: 'var(--ink)', fontWeight: 500 }}>LOVE Award Winner · 2020 · 2021 · 2022 · 2024</strong></span>
        <span className="awards-ribbon-item">25+ Years of Practice</span>
        <span className="awards-ribbon-item">Family Owned · Family Led</span>
        <span className="awards-ribbon-item">IBCLC On Staff</span>
        <span className="awards-ribbon-item">Certified Gentle Sleep Coach</span>
      </div>

      {/* ─── Video + Intro ────────────────────────────────────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr]" style={{ gap: 0, alignItems: 'center' }}>
            {/* Left */}
            <div className="px-6 md:px-12 lg:pr-16">
              <Eyebrow>Meet the Team</Eyebrow>
              <h2 className="font-serif font-light text-ink" style={{ fontSize: 'clamp(2.5rem,4vw,4.5rem)', lineHeight: 1.05 }}>
                Meet After<br /><em>the Stork.</em>
              </h2>
              <p className="mt-6" style={{ fontSize: '0.9375rem', lineHeight: '1.75', color: 'var(--dim)', maxWidth: '460px' }}>
                We know the newborn stage can feel overwhelming. You&apos;re healing, adjusting, and running on very little sleep — and we&apos;re here to help.
              </p>
              <p className="mt-4" style={{ fontSize: '0.9375rem', lineHeight: '1.75', color: 'var(--dim)', maxWidth: '460px' }}>
                Watch our short welcome video to learn about why After the Stork is the leading postpartum care team and how we support families like yours across greater Philadelphia.
              </p>
              <div className="mt-8">
                <Button variant="ghost" href="/about">Watch the Video · 2 min</Button>
              </div>
            </div>

            {/* Right */}
            <div
              className="px-6 md:px-12 lg:pl-16 mt-12 lg:mt-0"
              style={{ borderLeft: '1px solid var(--ghost)' }}
            >
              <ImagePlaceholder
                label="Welcome Video · 2:14"
                style={{ aspectRatio: '4/5' } as React.CSSProperties}
              />
              <p
                className="font-mono uppercase tracking-[0.18em] mt-3"
                style={{ fontSize: '0.5625rem', color: 'var(--accent)' }}
              >
                Filmed in Bryn Mawr — Spring 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services ─────────────────────────────────────────────────── */}
      <section className="bg-canvas py-20">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          {/* Header row */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 mb-14 items-end">
            <div>
              <Eyebrow>How We Help</Eyebrow>
              <h2 className="font-serif font-light text-ink" style={{ fontSize: 'clamp(2.5rem,4vw,4rem)', lineHeight: 1.05 }}>
                Our Services.
              </h2>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <p style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75', maxWidth: '400px' }}>
                Every family is different. We customize coverage to fit your schedule, your home, and your needs — from overnight to daytime to everything in between.
              </p>
              <Button variant="ghost" href="/services">View All Services</Button>
            </div>
          </div>

          {/* Numbered service list */}
          <div style={{ overflowX: 'auto' }}>
            {services.map((service, i) => (
              <div
                key={service.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '90px 220px 1fr 280px',
                  gap: '48px',
                  alignItems: 'center',
                  padding: '2.25rem 0',
                  borderTop: 'var(--rule-soft)',
                  ...(i === services.length - 1 ? { borderBottom: 'var(--rule-soft)' } : {}),
                }}
              >
                {/* Col 1: number */}
                <div className="font-serif" style={{ fontSize: '3rem', fontWeight: 300, fontStyle: 'italic', color: 'var(--accent-soft)', lineHeight: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Col 2: tag + hours */}
                <div>
                  <div className="svc-tag">{service.tagline}</div>
                  <div className="font-mono uppercase tracking-[0.18em]" style={{ fontSize: '0.6875rem', color: 'var(--ink)' }}>
                    {service.hours}
                  </div>
                </div>

                {/* Col 3: name + description */}
                <div>
                  <h3 className="font-serif font-light text-ink" style={{ fontSize: '2rem', marginBottom: '0.875rem' }}>
                    {service.name}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75', maxWidth: '580px' }}>
                    {service.shortDescription}
                  </p>
                </div>

                {/* Col 4: image */}
                <ImagePlaceholder label={service.name} style={{ height: '180px' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Us + Testimonials ────────────────────────────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Left: why us */}
            <div>
              <Eyebrow>Why After the Stork</Eyebrow>
              <h2 className="font-serif font-light text-ink" style={{ fontSize: 'clamp(2.25rem,3.5vw,3.5rem)', lineHeight: 1.05 }}>
                Why Families<br /><em>Choose Us.</em>
              </h2>

              <div className="mt-8">
                {whyUsItems.map(({ n, ttl, body }, i, arr) => (
                  <div
                    key={n}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr',
                      gap: '1.5rem',
                      padding: '1.75rem 0',
                      borderTop: 'var(--rule-soft)',
                      ...(i === arr.length - 1 ? { borderBottom: 'var(--rule-soft)' } : {}),
                      alignItems: 'start',
                    }}
                  >
                    <div className="font-serif italic" style={{ fontSize: '2.25rem', color: 'var(--accent)', fontWeight: 300, lineHeight: 1 }}>
                      {n}
                    </div>
                    <div>
                      <p className="font-mono uppercase tracking-[0.18em] text-ink" style={{ fontSize: '0.6875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                        {ttl}
                      </p>
                      <p style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75' }}>
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: testimonials */}
            <div>
              <div style={{ position: 'sticky', top: '120px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <Eyebrow>What Families Say</Eyebrow>
                {testimonials.map((t) => (
                  <Testimonial key={t.id} quote={t.quote} attribution={t.attribution} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Service Area ─────────────────────────────────────────────── */}
      <section className="bg-canvas py-20">
        <div className="mx-auto" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr]" style={{ gap: 0, alignItems: 'center' }}>
            {/* Left: map */}
            <div className="px-6 md:px-12 lg:pr-16">
              <div style={{ height: '480px', background: 'var(--paper-3)', border: 'var(--rule)', position: 'relative', overflow: 'hidden' }}>
                <svg viewBox="0 0 600 480" style={{ width: '100%', height: '100%' }}>
                  {/* Dot grid pattern */}
                  <defs>
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="var(--ghost)" />
                    </pattern>
                  </defs>
                  <rect width="600" height="480" fill="url(#dots)" />

                  {/* Schuylkill River (approximate) */}
                  <path d="M 180 80 Q 220 120 200 180 Q 185 230 210 290 Q 230 340 220 400" fill="none" stroke="var(--accent-tint)" strokeWidth="6" strokeLinecap="round" />
                  {/* Delaware River (right edge approximate) */}
                  <path d="M 480 60 Q 500 140 490 220 Q 480 300 500 400 Q 510 440 505 480" fill="none" stroke="var(--accent-tint)" strokeWidth="4" strokeLinecap="round" />

                  {/* Service area outline */}
                  <path d="M 120 100 L 500 80 L 520 380 L 100 400 Z" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.4" />

                  {/* Location pins */}
                  {/* Philadelphia */}
                  <g>
                    <circle cx="340" cy="200" r="6" fill="var(--accent)" />
                    <text x="352" y="204" fontFamily="var(--font-mono)" fontSize="9" fill="var(--ink)" letterSpacing="0.08em" textTransform="uppercase">PHILADELPHIA</text>
                  </g>
                  {/* Bryn Mawr */}
                  <g>
                    <circle cx="200" cy="230" r="5" fill="var(--accent)" opacity="0.8" />
                    <text x="212" y="234" fontFamily="var(--font-mono)" fontSize="8" fill="var(--dim)" letterSpacing="0.08em">BRYN MAWR</text>
                  </g>
                  {/* Wayne */}
                  <g>
                    <circle cx="175" cy="190" r="5" fill="var(--accent)" opacity="0.8" />
                    <text x="187" y="194" fontFamily="var(--font-mono)" fontSize="8" fill="var(--dim)" letterSpacing="0.08em">WAYNE</text>
                  </g>
                  {/* Villanova */}
                  <g>
                    <circle cx="195" cy="210" r="4" fill="var(--accent)" opacity="0.7" />
                    <text x="205" y="214" fontFamily="var(--font-mono)" fontSize="7" fill="var(--dim)" letterSpacing="0.08em">VILLANOVA</text>
                  </g>
                  {/* Ardmore */}
                  <g>
                    <circle cx="260" cy="240" r="4" fill="var(--accent)" opacity="0.7" />
                    <text x="270" y="244" fontFamily="var(--font-mono)" fontSize="7" fill="var(--dim)" letterSpacing="0.08em">ARDMORE</text>
                  </g>
                  {/* Gladwyne */}
                  <g>
                    <circle cx="220" cy="180" r="4" fill="var(--accent)" opacity="0.7" />
                    <text x="230" y="184" fontFamily="var(--font-mono)" fontSize="7" fill="var(--dim)" letterSpacing="0.08em">GLADWYNE</text>
                  </g>
                  {/* Chestnut Hill */}
                  <g>
                    <circle cx="310" cy="155" r="4" fill="var(--accent)" opacity="0.7" />
                    <text x="318" y="151" fontFamily="var(--font-mono)" fontSize="7" fill="var(--dim)" letterSpacing="0.08em">CHESTNUT HILL</text>
                  </g>
                  {/* Dresher */}
                  <g>
                    <circle cx="310" cy="125" r="4" fill="var(--accent)" opacity="0.7" />
                    <text x="320" y="129" fontFamily="var(--font-mono)" fontSize="7" fill="var(--dim)" letterSpacing="0.08em">DRESHER</text>
                  </g>
                  {/* New Hope */}
                  <g>
                    <circle cx="460" cy="120" r="4" fill="var(--accent)" opacity="0.7" />
                    <text x="468" y="116" fontFamily="var(--font-mono)" fontSize="7" fill="var(--dim)" letterSpacing="0.08em">NEW HOPE</text>
                  </g>
                  {/* Moorestown NJ */}
                  <g>
                    <circle cx="430" cy="290" r="4" fill="var(--accent-soft)" opacity="0.9" />
                    <text x="438" y="294" fontFamily="var(--font-mono)" fontSize="7" fill="var(--dim)" letterSpacing="0.08em">MOORESTOWN NJ</text>
                  </g>
                  {/* Haddonfield NJ */}
                  <g>
                    <circle cx="420" cy="260" r="4" fill="var(--accent-soft)" opacity="0.9" />
                    <text x="428" y="264" fontFamily="var(--font-mono)" fontSize="7" fill="var(--dim)" letterSpacing="0.08em">HADDONFIELD NJ</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Right */}
            <div
              className="px-6 md:px-12 lg:pl-16 mt-12 lg:mt-0"
              style={{ borderLeft: '1px solid var(--ghost)' }}
            >
              <Eyebrow>Where We Serve</Eyebrow>
              <h2 className="font-serif font-light text-ink" style={{ fontSize: 'clamp(2.25rem,3.5vw,3.5rem)', lineHeight: 1.05 }}>
                Greater Philadelphia<br />&amp; Beyond.
              </h2>
              <p className="mt-6" style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75', maxWidth: '400px' }}>
                We proudly serve families throughout Philadelphia, the Main Line, Montgomery and Delaware Counties, Bucks County, and select communities across the river in New Jersey.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Philadelphia', 'Bryn Mawr', 'Wayne', 'Villanova', 'Ardmore', 'Gladwyne', 'Chestnut Hill', 'Dresher', 'New Hope', 'Moorestown NJ', 'Haddonfield NJ'].map((area) => (
                  <span key={area} className="area-tag">{area}</span>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="ghost" href="/contact">Check Your Area</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Dark CTA ─────────────────────────────────────────────────── */}
      <section className="bg-ink py-20">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_auto] gap-20 items-center">
            {/* Left */}
            <div>
              <Eyebrow dark>Ready to Rest?</Eyebrow>
              <h2
                className="font-serif font-light"
                style={{ fontSize: 'clamp(2.75rem,5vw,4.5rem)', lineHeight: 1.05, color: 'var(--paper)', letterSpacing: '-0.015em' }}
              >
                Let&apos;s Talk About<br /><em style={{ color: 'var(--accent-soft)' }}>Your Family.</em>
              </h2>
              <p className="mt-6" style={{ fontSize: '0.9375rem', color: 'rgba(244,239,230,.75)', lineHeight: '1.75', maxWidth: '500px' }}>
                Booking a consultation is the first step toward real sleep, real recovery, and real support. We typically respond within one business day.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4">
              <Button variant="inverse" href="/contact">Book a Free Consultation</Button>
              <Button variant="inverse" href="/services">Explore Our Services</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
