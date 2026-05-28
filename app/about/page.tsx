import type { Metadata } from 'next'
import type { Doula } from '@/types'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Eyebrow from '@/components/ui/Eyebrow'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import doulaData from '@/data/doulas.json'

export const metadata: Metadata = {
  title: 'About After the Stork | Postpartum Doulas in Philadelphia & surrounding communities',
  description: 'After the Stork is a family-founded, award-winning postpartum doula service with over 25 years of experience supporting families in Philadelphia, the Main Line, Bucks County, New Jersey, and surrounding communities.',
}

const leadership = (doulaData as Doula[]).filter(d => d.isLeadership).sort((a, b) => a.order - b.order)

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-paper pt-16 md:pt-24 pb-14 md:pb-20">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <span className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-6" style={{ fontSize: '0.6875rem' }}>
            About Us
          </span>

          <h1
            className="font-serif font-light text-ink"
            style={{ fontSize: 'clamp(3.5rem, 6vw, 4.5rem)', lineHeight: 1.05, maxWidth: '768px' }}
          >
            We&rsquo;re Here for the Hardest — and Most <em>Beautiful</em> — Part of Parenthood
          </h1>
        </div>
      </section>

      {/* ─── Full-Width Brand Photo ────────────────────────────────────── */}
      <section>
        <ImagePlaceholder
          label="Full-Width Brand Photo"
          dimensions="1440 × 420 px"
          className="w-full"
          style={{ height: '420px' }}
        />
      </section>

      {/* ─── Origin Story ──────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16">
            {/* Left: copy */}
            <div>
              <Eyebrow>How It Began</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3"
                style={{ fontSize: '2.5rem' }}
              >
                How After the Stork Began
              </h2>
              <p
                className="font-mono text-dim leading-relaxed mt-4"
                style={{ fontSize: '1rem', maxWidth: '480px' }}
              >
                More than 25 years ago, Georgette Kerr became a certified postpartum doula out of a genuine desire to help new families — especially new moms — through the most demanding stretch of early parenthood.
              </p>
              <p
                className="font-mono text-dim leading-relaxed mt-3"
                style={{ fontSize: '1rem', maxWidth: '480px' }}
              >
                There was no marketing plan. No launch strategy. Just Georgette, showing up for families in her home of Philadelphia and the Main Line, where she was proud to grow up. Georgette cared so deeply and people took notice. Mothers began sharing her number with other mom-friends. That&rsquo;s how After the Stork grew — organically, authentically, one family trusting another. Today, it&rsquo;s a LOVE Award-winning team with 25+ years of community trust behind it.
              </p>
              <div className="font-mono text-stroke mt-6 flex items-center gap-2" style={{ fontSize: '0.75rem' }}>
                ◆ LOVE Award winner: 2020 · 2021 · 2022 · 2024
              </div>
            </div>

            {/* Right: portrait */}
            <div>
              <ImagePlaceholder
                label="Georgette — Founder Portrait"
                dimensions="600 × 960 px"
                className="w-full"
                style={{ height: '480px' }}
              />
              <p className="font-mono text-stroke mt-2" style={{ fontSize: '0.75rem' }}>
                Founder portrait — to be photographed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Leadership Team ───────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <Eyebrow>A Family Business</Eyebrow>
          <h2
            className="font-serif font-light text-ink mt-3 mb-3"
            style={{ fontSize: '2.5rem' }}
          >
            Meet the Family Behind After the Stork
          </h2>
          <p
            className="font-mono text-dim leading-relaxed mb-12"
            style={{ fontSize: '1rem', maxWidth: '640px' }}
          >
            After the Stork is, at its heart, a family business — and the family at the center of it has spent decades turning genuine care into a professional practice.
          </p>

          {/* Leadership rows */}
          {leadership.map((doula, i) => (
            <div
              key={doula.id}
              className={`flex flex-row gap-8 items-start border-t border-stroke py-10 ${i === leadership.length - 1 ? 'border-b' : ''}`}
            >
              <ImagePlaceholder
                label="Doula Photo"
                style={{ width: '200px', height: '240px', flexShrink: 0 }}
              />
              <div>
                <p className="font-mono text-ink uppercase tracking-[0.14em] font-medium" style={{ fontSize: '0.75rem' }}>
                  {doula.name}
                </p>
                <p className="font-mono text-mid uppercase tracking-[0.12em] mt-1" style={{ fontSize: '0.6875rem' }}>
                  {doula.title}
                </p>
                <p className="font-mono text-stroke mt-1" style={{ fontSize: '0.6875rem' }}>
                  {doula.credentials}
                </p>
                <p className="font-mono text-dim leading-relaxed mt-3" style={{ fontSize: '1rem', maxWidth: '560px' }}>
                  {doula.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Support Services ──────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <Eyebrow>What We Offer Beyond Newborn Care</Eyebrow>
          <h2
            className="font-serif font-light text-ink mt-3 mb-10"
            style={{ fontSize: '2.5rem' }}
          >
            Support That Goes Beyond the Baby
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="font-serif font-light text-ink mb-3" style={{ fontSize: '1.5rem' }}>
                Postpartum Support
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '1rem' }}>
                As mothers ourselves, we understand both the difficulties and joys of motherhood. We know when baby blues is no longer just baby blues and can refer you to the best local practitioners we&rsquo;ve worked with for many years.
              </p>
            </Card>

            <Card>
              <h3 className="font-serif font-light text-ink mb-3" style={{ fontSize: '1.5rem' }}>
                Infant Sleep Support
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '1rem' }}>
                Georgette attended the intensive three-month Gentle Sleep Coach training program and makes herself available to all After the Stork families to guide and troubleshoot through sleep issues — at no additional charge.
              </p>
            </Card>

            <Card>
              <h3 className="font-serif font-light text-ink mb-3" style={{ fontSize: '1.5rem' }}>
                Breastfeeding Support
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '1rem' }}>
                &ldquo;Your goals are our goals.&rdquo; Allison Hart, MS RD IBCLC, holds the highest breastfeeding credential available. Georgette is also trained through The Philadelphia Dept. of Public Health and The Breastfeeding Resource Center.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── Philosophy ────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="max-w-[900px] mx-auto text-center">
            <Eyebrow center>Our Philosophy of Care</Eyebrow>
            <h2
              className="font-serif font-light text-ink mt-4 mb-6"
              style={{ fontSize: '3rem' }}
            >
              Care That Feels Like <em>Family</em>
            </h2>
            <hr className="border-t border-stroke my-8 w-24 mx-auto" />
            <p
              className="font-mono text-dim leading-relaxed max-w-[640px] mx-auto mt-4"
              style={{ fontSize: '1rem' }}
            >
              We believe postpartum support should feel like a trusted family member arrived — someone who knows exactly what to do, does it quietly and expertly, and leaves your home better than they found it.
            </p>
            <p
              className="font-mono text-dim leading-relaxed max-w-[640px] mx-auto mt-4"
              style={{ fontSize: '1rem' }}
            >
              We love to empower you as a parent. Our goal is to boost your knowledge and confidence — teaching you evidence-based methods of caring for and comforting your newborn. We aim to work ourselves right out of the job.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Credentials ───────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ImagePlaceholder
              label="Certification / Team Photo"
              style={{ height: '400px' }}
            />

            <div>
              <Eyebrow>Expertise</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3"
                style={{ fontSize: '2.5rem' }}
              >
                Trained. Certified. <em>Experienced.</em>
              </h2>
              <p
                className="font-mono text-dim leading-relaxed mt-4 mb-8"
                style={{ fontSize: '1rem', maxWidth: '480px' }}
              >
                Every doula on our team is professionally trained by one of the Nation&rsquo;s leading postpartum doula training organizations — CAPPA, DONA, and Birth Arts International. Our staff is proud to include Registered Nurses (Labor &amp; Delivery and Postpartum), Newborn Care Specialists (NCS), Certified Lactation Consultants (CLC), International Board Certified Lactation Consultants (IBCLC), Registered Dietitians (MS RD), and Certified Gentle Sleep Coaches — plus ongoing education in infant care, feeding, and postpartum recovery.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'IBCLC — Allison Hart', body: 'Highest breastfeeding credential available' },
                  { title: 'Gentle Sleep Coach — Georgette', body: 'Intensive 3-month training program' },
                  { title: 'LOVE Award', body: '2020 · 2021 · 2022 · 2024' },
                  { title: 'CPR & First Aid', body: 'All team members certified' },
                  { title: 'TDAP Vaccine', body: 'All After the Stork doulas receive the TDAP vaccine to protect the families we serve' },
                ].map(({ title, body }) => (
                  <Card key={title} compact>
                    <h4 className="font-mono text-ink font-medium uppercase tracking-[0.12em]" style={{ fontSize: '0.75rem' }}>
                      {title}
                    </h4>
                    <p className="font-mono text-dim leading-relaxed mt-1" style={{ fontSize: '0.875rem' }}>
                      {body}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Awards + CTA ──────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-ink">
        <div className="mx-auto px-6 md:px-12 text-center" style={{ maxWidth: '1280px' }}>
          <div className="flex items-center justify-center gap-[0.625rem]">
            <span className="text-white/40" style={{ fontSize: '0.5rem' }} aria-hidden="true">◆</span>
            <span className="font-mono text-white/40 uppercase tracking-[0.2em]" style={{ fontSize: '0.6875rem' }}>Award-Winning Care</span>
          </div>

          <h2
            className="font-serif text-paper font-light mt-4"
            style={{ fontSize: 'clamp(2.75rem, 5vw, 3.25rem)', lineHeight: 1.1 }}
          >
            LOVE Award Winner — 2020, 2021, 2022 &amp; 2024
          </h2>

          <p
            className="font-mono leading-relaxed mt-4 max-w-[560px] mx-auto"
            style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)' }}
          >
            These awards reflect the trust and loyalty of the families we&rsquo;ve been honored to serve, and they drive us to maintain the standard of excellence that Georgette built this business on over 25 years ago.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {['Philadelphia', 'Bryn Mawr', 'Wayne', 'Villanova', 'Ardmore', 'Moorestown NJ', 'Haddonfield NJ'].map((area) => (
              <span
                key={area}
                className="border border-white/20 font-mono text-white/40 uppercase tracking-[0.12em] px-3 py-1"
                style={{ fontSize: '0.6875rem' }}
              >
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Button variant="inverse" href="/about/doulas">
              Meet Our Doulas
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
