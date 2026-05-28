import type { Doula } from '@/types'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Eyebrow from '@/components/ui/Eyebrow'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import SectionBadge from '@/components/ui/SectionBadge'
import Breadcrumb from '@/components/layout/Breadcrumb'
import doulaData from '@/data/doulas.json'

export const metadata = { title: 'About After the Stork' }

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
                After the Stork was founded over 25 years ago by Georgette Kerr — a certified postpartum doula and certified Gentle Sleep Coach with a genuine desire to help new families through the postpartum period. She built this business slowly and organically, one family at a time. Moms shared her phone number with friends. Word traveled the way it does when someone genuinely cares.
              </p>
              <p
                className="font-mono text-dim leading-relaxed mt-3"
                style={{ fontSize: '12px', maxWidth: '480px' }}
              >
                Today, After the Stork is a family business — run by Georgette and her two daughters, Ashley and Allison. The same warmth, the same standard of excellence, and the same commitment to every family we serve.
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
            After the Stork is led by three women who each bring a different expertise — and a personal investment in the families they serve.
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
                Our overnight and daytime doulas provide expert newborn care, feeding support, emotional reassurance, and light household assistance — so you can focus on healing, bonding, and rest.
              </p>
            </Card>

            {/* Card 2 */}
            <Card>
              <h3 className="font-serif font-light text-ink mb-3" style={{ fontSize: '24px' }}>
                Infant Sleep Support
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '11px' }}>
                Georgette completed the intensive Gentle Sleep Coach training program and makes herself available to all After the Stork families to guide and troubleshoot infant sleep — at no additional charge.
              </p>
            </Card>

            {/* Card 3 */}
            <Card>
              <h3 className="font-serif font-light text-ink mb-3" style={{ fontSize: '24px' }}>
                Breastfeeding Support
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '11px' }}>
                Allison Hart, MS RD IBCLC, provides expert lactation support alongside postpartum nutrition guidance. &ldquo;Your goals are our goals.&rdquo;
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
              We believe the postpartum period is one of the most significant — and most underserved — transitions in a family&rsquo;s life. Too often, new parents are sent home from the hospital with a newborn and an assumption that they&rsquo;ll figure it out. We&rsquo;re here to make sure they don&rsquo;t have to.
            </p>
            <p
              className="font-mono text-dim leading-relaxed max-w-[640px] mx-auto mt-4"
              style={{ fontSize: '13px' }}
            >
              Our standard is simple: every family should feel completely supported, completely confident, and completely at ease. We aim to work ourselves right out of a job — leaving behind a rested, confident family that no longer needs us.
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
                Every member of the After the Stork team is a nationally trained professional. Our leadership team brings credentials that go well beyond standard doula certification.
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
