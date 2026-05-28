import type { Metadata } from 'next'
import type { Doula } from '@/types'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Eyebrow from '@/components/ui/Eyebrow'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import SectionBadge from '@/components/ui/SectionBadge'
import Breadcrumb from '@/components/layout/Breadcrumb'
import doulaData from '@/data/doulas.json'

export const metadata: Metadata = {
  title: 'About After the Stork | Postpartum Doulas in Philadelphia & Surrounding Communities',
  description: 'After the Stork is a family-founded, award-winning postpartum doula service with over 25 years of experience supporting families in Philadelphia, the Main Line, Bucks County, New Jersey, and surrounding communities.',
}

const leadership = (doulaData as Doula[]).filter(d => d.isLeadership).sort((a, b) => a.order - b.order)

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-paper border-b border-stroke">
        <div className="mx-auto px-6 md:px-12 py-4" style={{ maxWidth: '1280px' }}>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
        </div>
      </div>

      {/* ─── 01 / Hero ──────────────────────────────────────────────────────── */}
      <section className="relative bg-paper pt-16 md:pt-24 pb-14 md:pb-20">
        <SectionBadge label="01 / Hero" />
        <div className="mx-auto px-6 md:px-12 relative overflow-hidden" style={{ maxWidth: '1280px' }}>
          {/* Decorative numeral */}
          <span
            className="absolute top-0 right-0 font-serif text-ghost select-none pointer-events-none hidden md:block"
            style={{ fontSize: '180px', lineHeight: '0.85' }}
            aria-hidden="true"
          >
            02
          </span>

          {/* Pill */}
          <span className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-6" style={{ fontSize: '8px' }}>
            About Us
          </span>

          {/* H1 */}
          <h1
            className="font-serif font-light text-ink"
            style={{ fontSize: 'clamp(56px, 6vw, 72px)', lineHeight: 1.05, maxWidth: '768px' }}
          >
            We&rsquo;re Here for the Hardest — and Most <em>Beautiful</em> — Part of Parenthood
          </h1>
        </div>
      </section>

      {/* ─── 02 / Full-Width Brand Photo ────────────────────────────────────── */}
      <section className="relative">
        <SectionBadge label="02 / Brand Photo" />
        <ImagePlaceholder
          label="Full-Width Brand Photo"
          dimensions="1440 × 420 px"
          className="w-full"
          style={{ height: '420px' }}
        />
      </section>

      {/* ─── 03 / Origin Story ──────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="03 / Origin Story" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16">
            {/* Left: copy */}
            <div>
              <Eyebrow>How It Began</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3"
                style={{ fontSize: '40px' }}
              >
                How After the Stork Began
              </h2>
              <p
                className="font-mono text-dim leading-relaxed mt-4"
                style={{ fontSize: '12px', maxWidth: '480px' }}
              >
                More than 25 years ago, Georgette Kerr became a certified postpartum doula out of a genuine desire to help new families — especially new moms — through the most demanding stretch of early parenthood.
              </p>
              <p
                className="font-mono text-dim leading-relaxed mt-3"
                style={{ fontSize: '12px', maxWidth: '480px' }}
              >
                There was no marketing plan. No launch strategy. Just Georgette, showing up for families in her home of Philadelphia and the Main Line, where she was proud to grow up. Georgette cared so deeply and people took notice. Mothers began sharing her number with other mom-friends. That&rsquo;s how After the Stork grew — organically, authentically, one family trusting another. Today, it&rsquo;s a LOVE Award-winning team with 25+ years of community trust behind it.
              </p>
              <div className="font-mono text-stroke mt-6 flex items-center gap-2" style={{ fontSize: '8px' }}>
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
              <p className="font-mono text-stroke mt-2" style={{ fontSize: '8px' }}>
                Founder portrait — to be photographed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 04 / Leadership Team ───────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-canvas">
        <SectionBadge label="04 / Leadership Team" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <Eyebrow>A Family Business</Eyebrow>
          <h2
            className="font-serif font-light text-ink mt-3 mb-3"
            style={{ fontSize: '40px' }}
          >
            Meet the Family Behind After the Stork
          </h2>
          <p
            className="font-mono text-dim leading-relaxed mb-12"
            style={{ fontSize: '12px', maxWidth: '640px' }}
          >
            After the Stork is, at its heart, a family business — and the family at the center of it has spent decades turning genuine care into a professional practice.
          </p>

          {/* Leadership rows */}
          {leadership.map((doula, i) => (
            <div
              key={doula.id}
              className={`flex flex-row gap-8 items-start border-t border-stroke py-10 ${i === leadership.length - 1 ? 'border-b' : ''}`}
            >
              {/* Photo */}
              <ImagePlaceholder
                label="Doula Photo"
                style={{ width: '200px', height: '240px', flexShrink: 0 }}
              />
              {/* Info */}
              <div>
                <p className="font-mono text-ink uppercase tracking-[0.14em] font-medium" style={{ fontSize: '10px' }}>
                  {doula.name}
                </p>
                <p className="font-mono text-mid uppercase tracking-[0.12em] mt-1" style={{ fontSize: '9px' }}>
                  {doula.title}
                </p>
                <p className="font-mono text-stroke mt-1" style={{ fontSize: '9px' }}>
                  {doula.credentials}
                </p>
                <p className="font-mono text-dim leading-relaxed mt-3" style={{ fontSize: '11px', maxWidth: '560px' }}>
                  {doula.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 05 / Support Services ──────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="05 / Support Services" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <Eyebrow>What We Offer Beyond Newborn Care</Eyebrow>
          <h2
            className="font-serif font-light text-ink mt-3 mb-10"
            style={{ fontSize: '40px' }}
          >
            Support That Goes Beyond the Baby
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card>
              <h3 className="font-serif font-light text-ink mb-3" style={{ fontSize: '24px' }}>
                Postpartum Support
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '11px' }}>
                As mothers ourselves, we understand both the difficulties and joys of motherhood. We know when baby blues is no longer just baby blues and can refer you to the best local practitioners we&rsquo;ve worked with for many years.
              </p>
            </Card>

            {/* Card 2 */}
            <Card>
              <h3 className="font-serif font-light text-ink mb-3" style={{ fontSize: '24px' }}>
                Infant Sleep Support
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '11px' }}>
                Georgette attended the intensive three-month Gentle Sleep Coach training program and makes herself available to all After the Stork families to guide and troubleshoot through sleep issues — at no additional charge.
              </p>
            </Card>

            {/* Card 3 */}
            <Card>
              <h3 className="font-serif font-light text-ink mb-3" style={{ fontSize: '24px' }}>
                Breastfeeding Support
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '11px' }}>
                &ldquo;Your goals are our goals.&rdquo; Allison Hart, MS RD IBCLC, holds the highest breastfeeding credential available. Georgette is also trained through The Philadelphia Dept. of Public Health and The Breastfeeding Resource Center.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── 06 / Philosophy ────────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="06 / Philosophy" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="max-w-[900px] mx-auto text-center">
            <Eyebrow center>Our Philosophy of Care</Eyebrow>
            <h2
              className="font-serif font-light text-ink mt-4 mb-6"
              style={{ fontSize: '48px' }}
            >
              Care That Feels Like <em>Family</em>
            </h2>
            <hr className="border-t border-stroke my-8 w-24 mx-auto" />
            <p
              className="font-mono text-dim leading-relaxed max-w-[640px] mx-auto mt-4"
              style={{ fontSize: '13px' }}
            >
              We believe postpartum support should feel like a trusted family member arrived — someone who knows exactly what to do, does it quietly and expertly, and leaves your home better than they found it.
            </p>
            <p
              className="font-mono text-dim leading-relaxed max-w-[640px] mx-auto mt-4"
              style={{ fontSize: '13px' }}
            >
              We love to empower you as a parent. Our goal is to boost your knowledge and confidence — teaching you evidence-based methods of caring for and comforting your newborn. We aim to work ourselves right out of the job.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 07 / Credentials ───────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-canvas">
        <SectionBadge label="07 / Credentials" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: image */}
            <ImagePlaceholder
              label="Certification / Team Photo"
              style={{ height: '400px' }}
            />

            {/* Right: content */}
            <div>
              <Eyebrow>Expertise</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3"
                style={{ fontSize: '40px' }}
              >
                Trained. Certified. <em>Experienced.</em>
              </h2>
              <p
                className="font-mono text-dim leading-relaxed mt-4 mb-8"
                style={{ fontSize: '12px', maxWidth: '480px' }}
              >
                Every doula on our team is professionally trained by one of the Nation&rsquo;s leading postpartum doula training organizations — CAPPA, DONA, and Birth Arts International. Our staff is proud to include Registered Nurses (Labor &amp; Delivery and Postpartum), Newborn Care Specialists (NCS), Certified Lactation Consultants (CLC), International Board Certified Lactation Consultants (IBCLC), Registered Dietitians (MS RD), and Certified Gentle Sleep Coaches — plus ongoing education in infant care, feeding, and postpartum recovery.
              </p>

              {/* 2x2 credential cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card compact>
                  <h4 className="font-mono text-ink font-medium uppercase tracking-[0.12em]" style={{ fontSize: '10px' }}>
                    IBCLC — Allison Hart
                  </h4>
                  <p className="font-mono text-dim leading-relaxed mt-1" style={{ fontSize: '10px' }}>
                    Highest breastfeeding credential available
                  </p>
                </Card>
                <Card compact>
                  <h4 className="font-mono text-ink font-medium uppercase tracking-[0.12em]" style={{ fontSize: '10px' }}>
                    Gentle Sleep Coach — Georgette
                  </h4>
                  <p className="font-mono text-dim leading-relaxed mt-1" style={{ fontSize: '10px' }}>
                    Intensive 3-month training program
                  </p>
                </Card>
                <Card compact>
                  <h4 className="font-mono text-ink font-medium uppercase tracking-[0.12em]" style={{ fontSize: '10px' }}>
                    LOVE Award
                  </h4>
                  <p className="font-mono text-dim leading-relaxed mt-1" style={{ fontSize: '10px' }}>
                    2020 · 2021 · 2022 · 2024
                  </p>
                </Card>
                <Card compact>
                  <h4 className="font-mono text-ink font-medium uppercase tracking-[0.12em]" style={{ fontSize: '10px' }}>
                    CPR &amp; First Aid
                  </h4>
                  <p className="font-mono text-dim leading-relaxed mt-1" style={{ fontSize: '10px' }}>
                    All team members certified
                  </p>
                </Card>
                <Card compact>
                  <h4 className="font-mono text-ink font-medium uppercase tracking-[0.12em]" style={{ fontSize: '10px' }}>
                    TDAP Vaccine
                  </h4>
                  <p className="font-mono text-dim leading-relaxed mt-1" style={{ fontSize: '10px' }}>
                    All After the Stork doulas receive the TDAP vaccine to protect the families we serve
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 08 / Awards + CTA ──────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-ink">
        <SectionBadge label="08 / Awards + CTA" dark={true} />
        <div className="mx-auto px-6 md:px-12 text-center" style={{ maxWidth: '1280px' }}>
          {/* Dark eyebrow */}
          <div className="flex items-center justify-center gap-[10px]">
            <span className="text-white/40" style={{ fontSize: '6px' }}>◆</span>
            <span className="font-mono text-white/40 uppercase tracking-[0.2em]" style={{ fontSize: '9px' }}>Award-Winning Care</span>
          </div>

          <h2
            className="font-serif text-paper font-light mt-4"
            style={{ fontSize: 'clamp(44px, 5vw, 52px)', lineHeight: 1.1 }}
          >
            LOVE Award Winner — 2020, 2021, 2022 &amp; 2024
          </h2>

          <p
            className="font-mono leading-relaxed mt-4 max-w-[560px] mx-auto"
            style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}
          >
            The LOVE Award recognizes the businesses and organizations that Philadelphians love most. After the Stork has earned this recognition four times — a reflection of the trust families place in us year after year.
          </p>

          {/* Area tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {['Philadelphia', 'Bryn Mawr', 'Wayne', 'Villanova', 'Ardmore', 'Gladwyne', 'Chestnut Hill'].map((area) => (
              <span
                key={area}
                className="border border-white/20 font-mono text-white/40 uppercase tracking-[0.12em] px-3 py-1"
                style={{ fontSize: '8px' }}
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
