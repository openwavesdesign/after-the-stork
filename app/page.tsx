import type { Metadata } from 'next'
import type { Service, Testimonial as TestimonialType } from '@/types'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import Media from '@/components/ui/Media'
import Reveal from '@/components/ui/Reveal'
import Testimonial from '@/components/ui/Testimonial'
import servicesData from '@/data/services.json'
import testimonialsData from '@/data/testimonials.json'

export const metadata: Metadata = {
  title: 'Postpartum Doula & Overnight Newborn Care | Philadelphia & Main Line | After the Stork',
  description: 'After the Stork provides expert postpartum doula care for families in Philadelphia, the Main Line, Bucks County, New Jersey, and surrounding communities. After the Stork is known to be the leader in overnight support, starting babies off with good healthy sleep habits that they can take with them for their lifetimes. Daytime and overnight hours available. Book a free consultation today.',
}

const whyUsItems = [
  { n: '01', ttl: 'Serving Families Since 2006', body: 'Georgette founded After the Stork in 2006. The premier and longest-running postpartum doula agency in the region, our reputation was built one family at a time as moms shared her phone number — now known by thousands of families all over the Philadelphia area.' },
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
        <Media
          alt="A Philadelphia family resting peacefully with their newborn"
          label="Family with Newborn"
          priority
          warm={false}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />

        <div style={{ flex: 1 }} />

        {/* Headline */}
        <div className="px-6 md:px-14 pb-14" style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', width: '100%', margin: '0 auto' }}>
          <h1 className="font-serif font-light text-ink text-display max-w-[1100px]">
            Finally. A Good<br /><em>Night&apos;s Sleep.</em>
          </h1>
        </div>

        {/* Bottom panel */}
        <div style={{ position: 'relative', zIndex: 2, background: 'var(--paper)', borderTop: '1px solid var(--ink)' }}>
          <div className="px-6 md:px-14 py-12 md:py-14" style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_auto] gap-20 items-end">
              {/* Left */}
              <div>
                <Eyebrow>Philadelphia · Main Line · Bucks County · New Jersey · Surrounding Communities</Eyebrow>
                <p
                  className="font-serif"
                  style={{ fontSize: '1.375rem', lineHeight: '1.45', maxWidth: '620px', fontWeight: 300, color: 'var(--ink-soft)', marginTop: 0 }}
                >
                  The region&apos;s premier and longest-running postpartum doula agency since 2006 — expert overnight and daytime newborn care for families across Philadelphia, the Main Line, Bucks County, New Jersey and neighboring communities.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button variant="fill" href="/contact">Book a Free Consultation</Button>
                  <Button variant="ghost" href="/services">Explore Services</Button>
                </div>

                {/* ZIP bar */}
                <div style={{ display: 'flex', alignItems: 'stretch', border: '1px solid var(--ink)', maxWidth: '440px', width: '100%', marginTop: '2rem', background: 'var(--paper)' }}>
                  <label htmlFor="zip" className="sr-only">ZIP code</label>
                  <input
                    id="zip"
                    type="text"
                    placeholder="Enter ZIP code — check service area coverage"
                    style={{ flex: 1, border: 'none', background: 'transparent', padding: '16px 18px', fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--ink)', outline: 'none' }}
                  />
                  <button
                    type="button"
                    className="bg-ink text-paper font-mono uppercase tracking-[0.18em] hover:bg-accent-deep transition-colors"
                    style={{ padding: '0 26px', fontSize: '0.75rem' }}
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
                  <div className="font-serif text-ink" style={{ fontSize: '4.5rem', fontWeight: 300, lineHeight: .95, letterSpacing: '-.02em' }}>2006</div>
                  <div className="font-mono uppercase tracking-[0.18em] mt-2" style={{ fontSize: '0.75rem', color: 'var(--mid)', lineHeight: 1.5 }}>Serving Philadelphia<br />Families Since</div>
                </div>
                <div>
                  <div className="font-serif text-ink" style={{ fontSize: '4.5rem', fontWeight: 300, lineHeight: .95, letterSpacing: '-.02em' }}>4×</div>
                  <div className="font-mono uppercase tracking-[0.18em] mt-2" style={{ fontSize: '0.75rem', color: 'var(--mid)', lineHeight: 1.5 }}>LOVE Award<br />2020 · 2021 · 2022 · 2024</div>
                </div>
                <div>
                  <div className="font-serif text-ink" style={{ fontSize: '2.625rem', fontWeight: 300, lineHeight: .95, letterSpacing: '-.02em' }}>IBCLC</div>
                  <div className="font-mono uppercase tracking-[0.18em] mt-2" style={{ fontSize: '0.75rem', color: 'var(--mid)', lineHeight: 1.5 }}>Lactation Consultant<br />On Staff</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Awards / Affiliations ribbon ─────────────────────────────── */}
      <div className="awards-ribbon" role="list" aria-label="Awards and certifications">
        <span className="awards-ribbon-item" role="listitem">LOVE Award · 2020 · 2021 · 2022 · 2024</span>
        <span className="awards-ribbon-item" role="listitem">IBCLC on Staff</span>
        <span className="awards-ribbon-item" role="listitem">Certified Gentle Sleep Coach</span>
        <span className="awards-ribbon-item" role="listitem">CAPPA · DONA Trained</span>
        <span className="awards-ribbon-item" role="listitem">All Doulas CPR &amp; TDAP Certified</span>
      </div>

      {/* ─── Video + Intro ────────────────────────────────────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr]" style={{ gap: 0, alignItems: 'center' }}>
            {/* Left */}
            <div className="px-6 md:px-12 lg:pr-16">
              <Eyebrow>Meet the Team</Eyebrow>
              <h2 className="font-serif font-light text-ink text-h2">
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
            <div className="px-6 md:px-12 lg:pl-16 mt-12 lg:mt-0 lg:border-l border-ghost">
              <Media
                alt="After the Stork welcome video"
                label="Welcome Video · 2:14"
                ratio="4/5"
              />
              <p
                className="font-mono uppercase tracking-[0.18em] mt-3"
                style={{ fontSize: '0.75rem', color: 'var(--accent)' }}
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
              <h2 className="font-serif font-light text-ink text-h2">
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
          <div>
            {services.map((service, i) => (
              <Reveal
                key={service.id}
                delay={(i % 3) * 70}
                style={{
                  padding: '1.75rem 0',
                  borderTop: 'var(--rule-soft)',
                  ...(i === services.length - 1 ? { borderBottom: 'var(--rule-soft)' } : {}),
                }}
              >
                {/* Mobile layout */}
                <div className="flex gap-5 lg:hidden">
                  <div className="font-serif flex-shrink-0" style={{ fontSize: '2rem', fontWeight: 300, fontStyle: 'italic', color: 'var(--accent-mid)', lineHeight: 1, width: '2.5rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="svc-tag">{service.tagline}</div>
                    <div className="font-mono uppercase tracking-[0.18em] mb-2" style={{ fontSize: '0.75rem', color: 'var(--ink)' }}>{service.hours}</div>
                    <h3 className="font-serif font-light text-ink text-h3 mb-2.5">{service.name}</h3>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75' }}>{service.shortDescription}</p>
                  </div>
                </div>

                {/* Desktop layout */}
                <div
                  className="hidden lg:grid"
                  style={{ gridTemplateColumns: '90px 220px 1fr 280px', gap: '48px', alignItems: 'center' }}
                >
                  <div className="font-serif font-light italic text-accent-mid text-[3rem] leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="svc-tag">{service.tagline}</div>
                    <div className="font-mono uppercase tracking-[0.18em]" style={{ fontSize: '0.75rem', color: 'var(--ink)' }}>{service.hours}</div>
                  </div>
                  <div>
                    <h3 className="font-serif font-light text-ink text-h3 mb-3.5">{service.name}</h3>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75', maxWidth: '580px' }}>{service.shortDescription}</p>
                  </div>
                  <Media alt={`${service.name} — After the Stork`} label={service.name} style={{ height: '180px' }} />
                </div>
              </Reveal>
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
              <h2 className="font-serif font-light text-ink text-h2">
                Why Families<br /><em>Choose Us.</em>
              </h2>

              <div className="mt-8">
                {whyUsItems.map(({ n, ttl, body }, i, arr) => (
                  <Reveal
                    key={n}
                    delay={(i % 3) * 60}
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
                      <p className="font-mono uppercase tracking-[0.18em] text-ink" style={{ fontSize: '0.75rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                        {ttl}
                      </p>
                      <p style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75' }}>
                        {body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right: testimonials */}
            <div>
              <div style={{ position: 'sticky', top: '120px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <Eyebrow>What Our Families Say</Eyebrow>
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
                <svg viewBox="0 0 600 480" style={{ width: '100%', height: '100%' }} aria-hidden="true" role="presentation">
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
                    <text x="352" y="204" fontFamily="var(--font-mono)" fontSize="9" fill="var(--ink)" letterSpacing="0.08em">PHILADELPHIA</text>
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
            <div className="px-6 md:px-12 lg:pl-16 mt-12 lg:mt-0 lg:border-l border-ghost">
              <Eyebrow>Where We Serve</Eyebrow>
              <h2 className="font-serif font-light text-ink text-h2">
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
              <h2 className="font-serif font-light text-paper text-h1">
                Let&apos;s Talk About<br /><em style={{ color: 'var(--accent-soft)' }}>Your Family.</em>
              </h2>
              <p className="mt-6" style={{ fontSize: '0.9375rem', color: 'rgba(244,239,230,.75)', lineHeight: '1.75', maxWidth: '500px' }}>
                Booking a consultation is the first step toward real sleep, real recovery, and real support.
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
