import type { Metadata } from 'next'
import type { Doula } from '@/types'
import Button from '@/components/ui/Button'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import doulaData from '@/data/doulas.json'

export const metadata: Metadata = {
  title: 'Meet Our Postpartum Doulas, Registered Nurses, Newborn Care Specialists, CLCs & IBCLCs | After the Stork',
  description: 'Meet the postpartum doulas of After the Stork, serving families in Philadelphia, the Main Line, Bucks County, New Jersey, and surrounding areas.',
}

const allDoulas = (doulaData as Doula[]).filter(d => d.active).sort((a, b) => a.order - b.order)

export default function DoulasPage() {
  return (
    <>

      {/* ─── Page Hero ─────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-6"
                style={{ fontSize: '0.6875rem' }}
              >
                Our Team
              </span>

              <h1
                className="font-serif font-light text-ink mt-4"
                style={{ fontSize: 'clamp(3.25rem, 6vw, 4rem)', lineHeight: 1.05 }}
              >
                Meet the People Who Will Care for Your Family
              </h1>

              <p
                className="font-mono text-dim leading-relaxed mt-4"
                style={{ fontSize: '1rem', maxWidth: '480px' }}
              >
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
      <section className="py-14 md:py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDoulas.map((doula) => {
              const isPlaceholder = doula.name === 'Doula Team Member'
              const areas = doula.areas.slice(0, 3).join(' · ')

              return (
                <div
                  key={doula.id}
                  className={`border bg-paper overflow-hidden ${
                    isPlaceholder
                      ? 'opacity-45 border-dashed border-stroke'
                      : 'border-stroke'
                  }`}
                >
                  <ImagePlaceholder
                    label="Doula Photo"
                    dimensions="3:4 ratio"
                    className="w-full"
                    style={{ height: '280px' }}
                  />
                  <div className="p-7 border-t border-stroke">
                    <p
                      className="font-serif text-ink font-light"
                      style={{ fontSize: '1.375rem' }}
                    >
                      {isPlaceholder ? 'Coming Soon' : doula.name}
                    </p>
                    <p
                      className="font-mono text-mid uppercase tracking-[0.12em] mt-1"
                      style={{ fontSize: '0.6875rem' }}
                    >
                      {isPlaceholder ? 'Postpartum Doula' : doula.title}
                    </p>
                    <p
                      className="font-mono text-stroke mt-1 leading-relaxed"
                      style={{ fontSize: '0.6875rem' }}
                    >
                      {isPlaceholder ? 'Profile coming soon' : doula.credentials}
                    </p>
                    <p
                      className="font-mono text-dim leading-relaxed mt-3"
                      style={{ fontSize: '1rem' }}
                    >
                      {isPlaceholder
                        ? 'A member of the After the Stork care team.'
                        : doula.bio}
                    </p>
                    {!isPlaceholder && (
                      <p
                        className="font-mono text-stroke uppercase tracking-[0.1em] mt-3"
                        style={{ fontSize: '0.6875rem' }}
                      >
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
      <section className="py-14 md:py-20 bg-ink">
        <div className="mx-auto px-6 md:px-12 text-center" style={{ maxWidth: '1280px' }}>
          <h2
            className="font-serif text-paper font-light"
            style={{ fontSize: '2.75rem' }}
          >
            Would You Like to Meet Us First?
          </h2>
          <p
            className="font-mono leading-relaxed mt-4 max-w-[480px] mx-auto"
            style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)' }}
          >
            We offer a complimentary consultation call so you can ask questions, share your needs, and feel confident that you&rsquo;ll be well cared for during those first crucial weeks as new parents.
          </p>
          <div className="mt-8">
            <Button variant="inverse" href="/contact">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
