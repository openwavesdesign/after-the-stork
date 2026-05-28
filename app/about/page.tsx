import type { Metadata } from 'next'
import type { Doula } from '@/types'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import Media from '@/components/ui/Media'
import doulaData from '@/data/doulas.json'

export const metadata: Metadata = {
  title: 'About After the Stork | Postpartum Doulas in Philadelphia & surrounding communities',
  description: 'After the Stork is a family-founded, award-winning postpartum doula service — Philadelphia and the Main Line’s premier and longest-running agency since 2006 — supporting families in Philadelphia, the Main Line, Bucks County, New Jersey, and surrounding communities.',
}

const leadership = (doulaData as Doula[]).filter(d => d.isLeadership).sort((a, b) => a.order - b.order)

const beyondItems = [
  { icon: '◐', title: 'Postpartum Support', body: 'As mothers ourselves, we understand both the difficulties and joys of motherhood. We know when baby blues is no longer just baby blues — and can refer you to the best local practitioners we\'ve worked with for many years.' },
  { icon: '☾', title: 'Infant Sleep Support', body: 'Georgette attended the intensive three-month Gentle Sleep Coach training and makes herself available to all After the Stork families to guide and troubleshoot through sleep issues — at no additional charge.' },
  { icon: '✦', title: 'Breastfeeding Support', body: '"Your goals are our goals." Allison Hart, MS RD IBCLC, holds the highest breastfeeding credential available. Georgette is also trained through The Philadelphia Dept. of Public Health and The Breastfeeding Resource Center.' },
]

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="pill">About Us</div>
          <h1
            className="font-serif font-light text-ink"
            style={{ fontSize: 'clamp(2.25rem,4.5vw,3.25rem)', lineHeight: 1.05, letterSpacing: '-0.015em', maxWidth: '900px' }}
          >
            We&rsquo;re Here for the Hardest — and Most <em>Beautiful</em> — Part of Parenthood
          </h1>
          <p className="mt-6" style={{ fontSize: '1.125rem', color: 'var(--dim)', lineHeight: '1.7', maxWidth: '620px' }}>
            After the Stork is a family business built on two decades of genuine care, community trust, and an unwavering commitment to the families who let us into their homes.
          </p>
        </div>
      </section>

      {/* ─── Full-bleed image ──────────────────────────────────────────── */}
      <div style={{ borderBottom: 'var(--rule-soft)' }}>
        <Media
          alt="The After the Stork team in Bryn Mawr"
          label="After the Stork Team — Bryn Mawr"
          style={{ height: '520px' }}
          className="w-full"
        />
      </div>

      {/* ─── Story section ─────────────────────────────────────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr]" style={{ gap: 0, alignItems: 'center' }}>
            {/* Left */}
            <div className="px-6 md:px-12 lg:pr-16">
              <Eyebrow>How It Began</Eyebrow>
              <h2 className="font-serif font-light text-ink" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', lineHeight: 1.05 }}>
                How After<br /><em>the Stork Began.</em>
              </h2>
              <p className="mt-6" style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75', maxWidth: '480px' }}>
                In 2006, Georgette Kerr became a certified postpartum doula out of a genuine desire to help new families — especially new moms — through the most demanding stretch of early parenthood. There was no marketing plan. No launch strategy. Just Georgette, showing up for families in her home of Philadelphia and the Main Line, where she was proud to grow up.
              </p>
              <p className="mt-4" style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75', maxWidth: '480px' }}>
                Georgette cared so deeply and people took notice. Mothers began sharing her number with other mom-friends. That&rsquo;s how After the Stork grew — organically, authentically, one family trusting another.
              </p>
              <blockquote style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--ink-soft)', lineHeight: 1.5, borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem', marginTop: '2rem' }}>
                Today, it&rsquo;s a LOVE Award-winning team that has earned the region&rsquo;s trust as its premier and longest-running postpartum doula agency since 2006.
              </blockquote>
            </div>

            {/* Right */}
            <div
              className="px-6 md:px-12 lg:pl-16 mt-12 lg:mt-0"
              style={{ borderLeft: '1px solid var(--ghost)' }}
            >
              <Media
                alt="Georgette Kerr, founder of After the Stork"
                label="Georgette Kerr, Founder"
                ratio="3/4"
              />
              <p className="font-mono uppercase tracking-[0.18em] mt-3 flex items-center gap-3" style={{ fontSize: '0.75rem', color: 'var(--mid)' }}>
                <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--stroke)' }} />
                LOVE Award winner — 2020, 2021, 2022 &amp; 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Leadership section ────────────────────────────────────────── */}
      <section className="bg-canvas py-20">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <Eyebrow>A Family Business</Eyebrow>
          <h2 className="font-serif font-light text-ink" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', lineHeight: 1.05 }}>
            Meet the Family Behind<br /><em>After the Stork.</em>
          </h2>
          <p className="mt-4 mb-2" style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75', maxWidth: '580px' }}>
            After the Stork is, at its heart, a family business — and the family at the center of it has spent decades turning genuine care into a professional practice.
          </p>

          {leadership.map((doula, i) => (
            <div
              key={doula.id}
              style={{
                borderTop: 'var(--rule-soft)',
                ...(i === leadership.length - 1 ? { borderBottom: 'var(--rule-soft)' } : {}),
                display: 'grid',
                gridTemplateColumns: '280px 1fr',
                gap: '3.5rem',
                padding: '3rem 0',
                alignItems: 'start',
              }}
            >
              <Media
                src={doula.photo}
                alt={`${doula.name}, ${doula.title} at After the Stork`}
                label={doula.name}
                ratio="3/4"
                style={{ width: '280px' }}
              />
              <div>
                <div className="font-mono uppercase tracking-[0.22em]" style={{ fontSize: '0.75rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                  {doula.title}
                </div>
                <h3 className="font-serif font-light text-ink" style={{ fontSize: '1.625rem', lineHeight: 1.1 }}>
                  {doula.name}
                </h3>
                <p className="font-mono uppercase tracking-[0.18em] mt-2" style={{ fontSize: '0.75rem', color: 'var(--mid)' }}>
                  {doula.credentials}
                </p>
                <p className="mt-5" style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75', maxWidth: '560px' }}>
                  {doula.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Beyond the Baby trio ─────────────────────────────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <Eyebrow>What We Offer Beyond Newborn Care</Eyebrow>
          <h2 className="font-serif font-light text-ink mb-12" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', lineHeight: 1.05 }}>
            Support That Goes<br /><em>Beyond the Baby.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beyondItems.map((item) => (
              <div
                key={item.title}
                className="border"
                style={{ borderColor: 'var(--stroke)', padding: '2.5rem' }}
              >
                <div className="font-serif" style={{ fontSize: '2.625rem', color: 'var(--accent)', marginBottom: '1.25rem', lineHeight: 1 }}>
                  {item.icon}
                </div>
                <h3 className="font-serif font-light text-ink" style={{ fontSize: '1.5rem', marginBottom: '0.875rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Philosophy ────────────────────────────────────────────────── */}
      <section className="bg-canvas py-20">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '920px' }}>
          <Eyebrow center>Our Philosophy of Care</Eyebrow>
          <h2 className="font-serif font-light text-ink text-center" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', lineHeight: 1.05 }}>
            Care That Feels Like <em>Family</em>
          </h2>
          <hr style={{ border: 'none', borderTop: 'var(--rule-soft)', margin: '2rem auto', width: '80px' }} />
          <p className="text-center mt-6" style={{ fontSize: '1.125rem', color: 'var(--dim)', lineHeight: '1.75', maxWidth: '680px', margin: '0 auto' }}>
            We believe postpartum support should feel like a trusted family member arrived — someone who knows exactly what to do, does it quietly and expertly, and leaves your home better than they found it.
          </p>
          <p className="text-center mt-5" style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75', maxWidth: '640px', margin: '1.25rem auto 0' }}>
            We love to empower you as a parent. Our goal is to boost your knowledge and confidence — teaching you evidence-based methods of caring for and comforting your newborn. We aim to work ourselves right out of the job.
          </p>
        </div>
      </section>

      {/* ─── Credentials ───────────────────────────────────────────────── */}
      <section className="bg-paper py-20">
        <div className="mx-auto" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr]" style={{ gap: 0, alignItems: 'center' }}>
            {/* Left: image */}
            <div className="px-6 md:px-12 lg:pr-16">
              <Media
                alt="After the Stork doulas with their professional certifications"
                label="Trained & Certified Team"
                ratio="4/5"
              />
            </div>

            {/* Right */}
            <div
              className="px-6 md:px-12 lg:pl-16 mt-12 lg:mt-0"
              style={{ borderLeft: '1px solid var(--ghost)' }}
            >
              <Eyebrow>Expertise</Eyebrow>
              <h2 className="font-serif font-light text-ink" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', lineHeight: 1.05 }}>
                Trained. Certified.<br /><em>Experienced.</em>
              </h2>
              <p className="mt-5 mb-8" style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75', maxWidth: '480px' }}>
                Every doula on our team is professionally trained by one of the nation&rsquo;s leading postpartum doula training organizations — CAPPA, DONA, and Birth Arts International. Our staff is proud to include Registered Nurses (Labor &amp; Delivery and Postpartum), Newborn Care Specialists (NCS), Certified Lactation Consultants (CLC), an International Board Certified Lactation Consultant (IBCLC), a Registered Dietitian (MS RD), and a Certified Gentle Sleep Coach — plus ongoing education in infant care, feeding, and postpartum recovery.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'IBCLC', body: 'Allison Hart, MS RD IBCLC — Highest breastfeeding credential available' },
                  { title: 'Gentle Sleep Coach', body: 'Georgette — Intensive 3-month training program' },
                  { title: 'LOVE Award', body: '2020 · 2021 · 2022 · 2024' },
                  { title: 'CPR & First Aid', body: 'All team members certified' },
                ].map(({ title, body }) => (
                  <div key={title} style={{ border: 'var(--rule-soft)', padding: '1.25rem', background: 'var(--canvas)' }}>
                    <h4 className="font-mono uppercase tracking-[0.18em] text-ink" style={{ fontSize: '0.75rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                      {title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--dim)', lineHeight: '1.6' }}>
                      {body}
                    </p>
                  </div>
                ))}

                {/* Full-width TDAP card */}
                <div className="col-span-2" style={{ border: 'var(--rule-soft)', padding: '1.25rem', background: 'var(--canvas)' }}>
                  <h4 className="font-mono uppercase tracking-[0.18em] text-ink" style={{ fontSize: '0.75rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                    TDAP Vaccine
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--dim)', lineHeight: '1.6' }}>
                    All After the Stork doulas proudly receive the TDAP vaccine to do our part to protect the most vulnerable population we serve against whooping cough.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Dark CTA ──────────────────────────────────────────────────── */}
      <section className="bg-ink py-20">
        <div className="mx-auto px-6 md:px-12 text-center" style={{ maxWidth: '1280px' }}>
          <Eyebrow center dark>Award-Winning Care</Eyebrow>
          <h2 className="font-serif font-light" style={{ fontSize: 'clamp(1.875rem,3.5vw,2.75rem)', lineHeight: 1.05, color: 'var(--paper)' }}>
            LOVE Award Winner — 2020, 2021, 2022 &amp; <em style={{ color: 'var(--accent-soft)' }}>2024.</em>
          </h2>
          <p className="mt-6 max-w-[560px] mx-auto" style={{ fontSize: '0.9375rem', color: 'rgba(244,239,230,.75)', lineHeight: '1.75' }}>
            These awards reflect the trust and loyalty of the families we&rsquo;ve been honored to serve, and they drive us to maintain the standard of excellence that Georgette built this business on back in 2006.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {['Philadelphia', 'Bryn Mawr', 'Wayne', 'Villanova', 'Ardmore', 'Moorestown NJ', 'Haddonfield NJ'].map((area) => (
              <span
                key={area}
                className="font-mono uppercase tracking-[0.1em]"
                style={{ border: '1px solid rgba(255,255,255,.2)', padding: '6px 14px', fontSize: '0.75rem', color: 'rgba(244,239,230,.6)', borderRadius: '100px', whiteSpace: 'nowrap' }}
              >
                {area}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Button variant="inverse" href="/about/doulas">Meet Our Doulas</Button>
          </div>
        </div>
      </section>
    </>
  )
}
