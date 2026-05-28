import type { Doula } from '@/types'
import Button from '@/components/ui/Button'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import SectionBadge from '@/components/ui/SectionBadge'
import Breadcrumb from '@/components/layout/Breadcrumb'
import doulaData from '@/data/doulas.json'

export const metadata = { title: 'Meet Our Doulas' }

const allDoulas = (doulaData as Doula[]).filter(d => d.active).sort((a, b) => a.order - b.order)

export default function DoulasPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-paper border-b border-stroke">
        <div className="mx-auto px-6 md:px-12 py-4" style={{ maxWidth: '1280px' }}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Meet Our Doulas' },
            ]}
          />
        </div>
      </div>

      {/* ─── 01 / Page Hero ─────────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="01 / Hero" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div>
              {/* Pill */}
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-6"
                style={{ fontSize: '8px' }}
              >
                Our Team
              </span>

              <h1
                className="font-serif font-light text-ink mt-4"
                style={{ fontSize: 'clamp(52px, 6vw, 64px)', lineHeight: 1.05 }}
              >
                Meet the People Who Will Care for Your Family
              </h1>

              <p
                className="font-mono text-dim leading-relaxed mt-4"
                style={{ fontSize: '12px', maxWidth: '480px' }}
              >
                Every person on the After the Stork team is selected personally by Georgette. Warmth, expertise, and a genuine love of this work — these are not optional.
              </p>
            </div>

            {/* Right: team photo */}
            <ImagePlaceholder
              label="Team Photo"
              dimensions="Team together"
              style={{ height: '400px' }}
            />
          </div>
        </div>
      </section>

      {/* ─── 02 / Doula Profiles ────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-canvas">
        <SectionBadge label="02 / Doula Profiles" />
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
                      style={{ fontSize: '22px' }}
                    >
                      {isPlaceholder ? 'Coming Soon' : doula.name}
                    </p>
                    <p
                      className="font-mono text-mid uppercase tracking-[0.12em] mt-1"
                      style={{ fontSize: '9px' }}
                    >
                      {isPlaceholder ? 'Postpartum Doula' : doula.title}
                    </p>
                    <p
                      className="font-mono text-stroke mt-1 leading-relaxed"
                      style={{ fontSize: '9px' }}
                    >
                      {isPlaceholder ? 'Profile coming soon' : doula.credentials}
                    </p>
                    <p
                      className="font-mono text-dim leading-relaxed mt-3"
                      style={{ fontSize: '11px' }}
                    >
                      {isPlaceholder
                        ? 'A member of the After the Stork care team.'
                        : doula.bio}
                    </p>
                    {!isPlaceholder && (
                      <p
                        className="font-mono text-stroke uppercase tracking-[0.1em] mt-3"
                        style={{ fontSize: '9px' }}
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

      {/* ─── 03 / CTA ───────────────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-ink">
        <SectionBadge label="03 / CTA" dark={true} />
        <div className="mx-auto px-6 md:px-12 text-center" style={{ maxWidth: '1280px' }}>
          <h2
            className="font-serif text-paper font-light"
            style={{ fontSize: '44px' }}
          >
            Would You Like to Meet Us First?
          </h2>
          <p
            className="font-mono leading-relaxed mt-4 max-w-[480px] mx-auto"
            style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}
          >
            Book a free consultation. We&rsquo;ll answer your questions, tell you about our team, and help you decide if After the Stork is the right fit for your family.
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
