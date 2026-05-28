import type { Metadata } from 'next'
import type { Doula } from '@/types'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import doulaData from '@/data/doulas.json'

export const metadata: Metadata = {
  title: 'Meet Our Postpartum Doulas, Registered Nurses, Newborn Care Specialists, CLCs & IBCLCs | After the Stork',
  description: 'Meet the postpartum doulas of After the Stork, serving families in Philadelphia, the Main Line, Bucks County, New Jersey, and surrounding areas.',
}

const allDoulas = (doulaData as Doula[]).filter(d => d.active).sort((a, b) => a.order - b.order)

const filterOptions = ['All', 'Overnight', 'Daytime', 'NCS']

export default function DoulasPage() {
  return (
    <>
      {/* ─── Page Hero ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="pill">Our Team</div>
              <h1
                className="font-serif font-light text-ink"
                style={{ fontSize: 'clamp(2.25rem,4.5vw,3.25rem)', lineHeight: 1.05, letterSpacing: '-0.015em' }}
              >
                Meet the People Who Will Care for<br /><em>Your Family.</em>
              </h1>
              <p className="mt-6" style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75', maxWidth: '480px' }}>
                Our team of postpartum doulas brings warmth, expertise, and genuine dedication to every family. Every team member is professionally trained, background-checked, and passionate about postpartum care.
              </p>
            </div>

            <ImagePlaceholder
              label="Team Photo"
              dimensions="Team together"
              style={{ height: '400px' }}
            />
          </div>
        </div>
      </section>

      {/* ─── Doula Profiles ────────────────────────────────────────────── */}
      <section className="py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          {/* Filter + header row */}
          <div className="flex justify-between items-end mb-12 gap-8 flex-wrap">
            <div>
              <Eyebrow>The Team</Eyebrow>
              <h2 className="font-serif font-light text-ink" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)' }}>
                Our doulas.
              </h2>
            </div>
            <div className="flex gap-2 font-mono uppercase tracking-[0.18em]" style={{ fontSize: '0.75rem', color: 'var(--dim)' }}>
              {filterOptions.map((f, i) => (
                <span
                  key={f}
                  style={{
                    padding: '6px 14px',
                    border: `1px solid ${i === 0 ? 'var(--ink)' : 'var(--stroke)'}`,
                    color: i === 0 ? 'var(--ink)' : 'var(--dim)',
                    cursor: 'pointer',
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDoulas.map((doula) => {
              const isPlaceholder = doula.name === 'Doula Team Member'
              const areas = doula.areas.slice(0, 3).join(' · ')

              return (
                <div
                  key={doula.id}
                  className={`border bg-paper overflow-hidden transition-colors ${
                    isPlaceholder
                      ? 'opacity-45 border-dashed border-stroke'
                      : 'border-stroke hover:border-accent'
                  }`}
                >
                  <ImagePlaceholder
                    label="Doula Photo"
                    dimensions="3:4 ratio"
                    className="w-full"
                    style={{ aspectRatio: '3/4' } as React.CSSProperties}
                  />
                  <div style={{ padding: '28px', borderTop: 'var(--rule-soft)' }}>
                    <p className="font-serif text-ink font-light" style={{ fontSize: '1.625rem', lineHeight: 1.1 }}>
                      {isPlaceholder ? 'Coming Soon' : doula.name}
                    </p>
                    <p className="font-mono uppercase tracking-[0.22em] mt-2" style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>
                      {isPlaceholder ? 'Postpartum Doula' : doula.title}
                    </p>
                    <p className="font-mono mt-1" style={{ fontSize: '0.75rem', color: 'var(--mid)', letterSpacing: '.1em' }}>
                      {isPlaceholder ? 'Profile coming soon' : doula.credentials}
                    </p>
                    <p className="mt-4" style={{ fontSize: '0.875rem', color: 'var(--dim)', lineHeight: '1.7' }}>
                      {isPlaceholder
                        ? 'A member of the After the Stork care team.'
                        : doula.bio}
                    </p>
                    {!isPlaceholder && (
                      <p className="font-mono uppercase tracking-[0.14em] mt-4 flex items-center gap-2" style={{ fontSize: '0.75rem', color: 'var(--mid)' }}>
                        <span aria-hidden="true">◎</span>
                        {areas}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-ink">
        <div className="mx-auto px-6 md:px-12 text-center" style={{ maxWidth: '1280px' }}>
          <h2 className="font-serif font-light" style={{ fontSize: '2.25rem', color: 'var(--paper)' }}>
            Would You Like to Meet Us First?
          </h2>
          <p className="mt-4 max-w-[480px] mx-auto" style={{ fontSize: '0.9375rem', color: 'rgba(244,239,230,.75)', lineHeight: '1.75' }}>
            We offer a complimentary consultation call so you can ask questions, share your needs, and feel confident that you&rsquo;ll be well cared for during those first crucial weeks as new parents.
          </p>
          <div className="mt-8">
            <Button variant="inverse" href="/contact">Book a Free Consultation</Button>
          </div>
        </div>
      </section>
    </>
  )
}
