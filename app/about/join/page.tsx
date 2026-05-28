import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Eyebrow from '@/components/ui/Eyebrow'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Postpartum Doula Jobs in Philadelphia | Join After the Stork',
  description: 'After the Stork is hiring certified postpartum doulas in Philadelphia, the Main Line, and surrounding communities. Apply today.',
}

const inputClass =
  'border border-stroke bg-transparent font-mono text-dim outline-none w-full tracking-[0.05em] focus:border-ink transition-colors'
const labelClass = 'font-mono text-mid uppercase tracking-[0.14em] mb-1 block'

export default function JoinPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-paper border-b border-stroke">
        <div className="mx-auto px-6 md:px-12 py-4" style={{ maxWidth: '1280px' }}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Join the Team' },
            ]}
          />
        </div>
      </div>

      {/* ─── Page Hero ─────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1 mb-6"
                style={{ fontSize: '0.6875rem' }}
              >
                We&rsquo;re Hiring
              </span>

              <h1
                className="font-serif font-light text-ink mt-4"
                style={{ fontSize: 'clamp(3.25rem, 6vw, 4rem)', lineHeight: 1.05 }}
              >
                Join Our Team of Postpartum Doulas
              </h1>

              <p
                className="font-mono text-dim leading-relaxed mt-4"
                style={{ fontSize: '1rem', maxWidth: '480px' }}
              >
                We are always looking for talented, compassionate doulas and NCS professionals in Philadelphia, the Main Line, Bucks County, and New Jersey.
              </p>

              <div className="mt-8">
                <Button variant="default" href="#apply">
                  Apply Now
                </Button>
              </div>
            </div>

            <ImagePlaceholder
              label="Doula at Work Photo"
              style={{ height: '520px' }}
            />
          </div>
        </div>
      </section>

      {/* ─── Why Work With Us ──────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <Eyebrow>What Makes Us Different</Eyebrow>
          <h2
            className="font-serif font-light text-ink mt-3 mb-10"
            style={{ fontSize: '2.5rem' }}
          >
            Why Doulas Love Working Here
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card cardNumber="01">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '1.25rem' }}>
                Flexible Scheduling
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '1rem' }}>
                Build a schedule around your life. We have an online scheduling system that makes it easy to share your availability and pair you with clients that match. For those giving 4–6 nights of availability, we can commit to filling your schedule so you have a stable income you can count on.
              </p>
            </Card>

            <Card cardNumber="02">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '1.25rem' }}>
                Supportive Leadership
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '1rem' }}>
                Regular communication, professional development, and genuine care for your experience.
              </p>
            </Card>

            <Card cardNumber="03">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '1.25rem' }}>
                Meaningful Work
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '1rem' }}>
                Every shift changes a family&rsquo;s experience of the newborn stage. That matters.
              </p>
            </Card>

            <Card cardNumber="04">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '1.25rem' }}>
                Competitive Pay
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '1rem' }}>
                Compensation that reflects your certifications, experience, and dedication.
              </p>
            </Card>

            <Card cardNumber="05">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '1.25rem' }}>
                Employee Based
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '1rem' }}>
                We pay a portion of your taxes, offer PTO, and offer time-and-a-half pay for those who desire overtime hours.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── Requirements + Application ────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-paper" id="apply">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Left: requirements */}
            <div>
              <Eyebrow>Who We&rsquo;re Looking For</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3 mb-6"
                style={{ fontSize: '2.5rem' }}
              >
                What We&rsquo;re Looking For
              </h2>

              {[
                'Certified postpartum doula (CAPPA, DONA, or equivalent) or newborn care specialist (NCS)',
                'CPR and First Aid certified (or willing to certify before starting)',
                'Reliable transportation within the Philadelphia metro / Main Line area',
                'Comfortable with overnight shifts (10 PM–6 AM or similar)',
                'Professional, warm, and trustworthy presence in family homes',
              ].map((req, i) => (
                <div key={i} className="border-t border-stroke py-5 flex gap-4 items-start">
                  <span className="text-mid mt-[2px]" style={{ fontSize: '0.5rem' }} aria-hidden="true">◦</span>
                  <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '1rem' }}>
                    {req}
                  </p>
                </div>
              ))}

              <p
                className="font-serif italic text-dim mt-6"
                style={{ fontSize: '1rem' }}
              >
                New graduates are welcome to apply. We value potential, attitude, and heart.
              </p>
            </div>

            {/* Right: application form */}
            <div>
              <Eyebrow>Ready to Apply?</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3 mb-4"
                style={{ fontSize: '2.5rem' }}
              >
                Application Form
              </h2>
              <p
                className="font-mono text-dim leading-relaxed mb-6"
                style={{ fontSize: '1rem' }}
              >
                Fill out our short application and we&rsquo;ll be in touch within [X] business days.
              </p>

              <form id="apply-form" className="flex flex-col gap-5">
                {[
                  { id: 'firstName', label: 'First Name', type: 'text' },
                  { id: 'lastName', label: 'Last Name', type: 'text' },
                  { id: 'email', label: 'Email', type: 'email' },
                  { id: 'phone', label: 'Phone', type: 'tel' },
                ].map(({ id, label, type }) => (
                  <div key={id}>
                    <label htmlFor={id} className={labelClass} style={{ fontSize: '0.6875rem' }}>
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      className={inputClass}
                      style={{ fontSize: '1rem', padding: '12px 16px' }}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="certifications" className={labelClass} style={{ fontSize: '0.6875rem' }}>
                    Certifications
                  </label>
                  <input
                    id="certifications"
                    name="certifications"
                    type="text"
                    placeholder="e.g. DONA Certified Postpartum Doula, IBCLC, NCS"
                    className={`${inputClass} placeholder:text-stroke`}
                    style={{ fontSize: '1rem', padding: '12px 16px' }}
                  />
                </div>

                <div>
                  <label htmlFor="about" className={labelClass} style={{ fontSize: '0.6875rem' }}>
                    Tell Us About Yourself
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    rows={5}
                    className={`${inputClass} resize-none`}
                    style={{ fontSize: '1rem', padding: '12px 16px' }}
                  />
                </div>

                <div className="mt-2">
                  <Button variant="default" type="submit">
                    Submit Application
                  </Button>
                </div>

                <p className="font-mono text-stroke" style={{ fontSize: '0.75rem' }}>
                  Form connects to EngineHire CRM — to be wired up during development
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
