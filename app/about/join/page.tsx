import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Eyebrow from '@/components/ui/Eyebrow'
import Media from '@/components/ui/Media'

export const metadata: Metadata = {
  title: 'Postpartum Doula Jobs in Philadelphia | Join After the Stork',
  description: 'After the Stork is hiring certified postpartum doulas in Philadelphia, the Main Line, and surrounding communities. Apply today.',
}

const inputStyle: React.CSSProperties = {
  borderBottom: 'var(--rule)',
  background: 'transparent',
  padding: '10px 0 14px',
  fontFamily: 'var(--font-serif)',
  fontSize: '1.125rem',
  color: 'var(--ink)',
  outline: 'none',
  width: '100%',
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.75rem',
  letterSpacing: '.2em',
  textTransform: 'uppercase',
  color: 'var(--mid)',
  display: 'block',
  marginBottom: '10px',
}

const requirements = [
  'Certified postpartum doula (CAPPA, DONA, or equivalent) or newborn care specialist (NCS)',
  'CPR and First Aid certified (or willing to certify before starting)',
  'Reliable transportation within the Philadelphia metro / Main Line area',
  'Comfortable with overnight shifts (10 PM–6 AM or similar)',
  'Professional, warm, and trustworthy presence in family homes',
]

export default function JoinPage() {
  return (
    <>
      {/* ─── Page Hero ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="pill">We&rsquo;re Hiring</div>
              <h1
                className="font-serif font-light text-ink"
                style={{ fontSize: 'clamp(2.25rem,4.5vw,3.25rem)', lineHeight: 1.05, letterSpacing: '-0.015em' }}
              >
                Join Our Team of Postpartum<br /><em>Doulas.</em>
              </h1>
              <p className="mt-6" style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75', maxWidth: '480px' }}>
                We are always looking for talented, compassionate doulas and NCS professionals in Philadelphia, the Main Line, Bucks County, and New Jersey.
              </p>
              <div className="mt-8">
                <Button variant="default" href="#apply">Apply Now</Button>
              </div>
            </div>

            <Media
              alt="An After the Stork doula caring for a newborn"
              label="Join Our Team"
              style={{ height: '520px' }}
            />
          </div>
        </div>
      </section>

      {/* ─── Why Work With Us ──────────────────────────────────────────── */}
      <section className="py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <Eyebrow>What Makes Us Different</Eyebrow>
          <h2 className="font-serif font-light text-ink mb-10" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', lineHeight: 1.05 }}>
            Why Doulas Love<br /><em>Working Here.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card cardNumber="01">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '1.25rem' }}>
                Flexible Scheduling
              </h3>
              <p className="text-dim" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
                Build a schedule around your life. We have an online scheduling system that makes it easy to share your availability and pair you with clients that match your schedule. We are proud to have a full-time scheduling manager dedicated to making your schedule work around your life. For those giving 4–6 nights of availability, we can commit to filling your schedule so you have a stable income you can count on. No more weeks of waiting or losing work unexpectedly — we can make this a full-time job that truly supports your family.
              </p>
            </Card>

            <Card cardNumber="02">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '1.25rem' }}>
                Supportive Leadership
              </h3>
              <p className="text-dim" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
                Regular communication, professional development, and genuine care for your experience.
              </p>
            </Card>

            <Card cardNumber="03">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '1.25rem' }}>
                Meaningful Work
              </h3>
              <p className="text-dim" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
                Every shift changes a family&rsquo;s experience of the newborn stage. That matters.
              </p>
            </Card>

            <Card cardNumber="04">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '1.25rem' }}>
                Competitive Pay
              </h3>
              <p className="text-dim" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
                Compensation that reflects your certifications, experience, and dedication.
              </p>
            </Card>

            <Card cardNumber="05">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '1.25rem' }}>
                Employee Based
              </h3>
              <p className="text-dim" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
                We pay a portion of your taxes, offer PTO, and offer time-and-a-half pay for those who desire overtime hours.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── Pull Quote ────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12 text-center" style={{ maxWidth: '920px' }}>
          <p
            className="font-serif font-light text-ink"
            style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontStyle: 'italic', lineHeight: 1.3, maxWidth: '760px', margin: '0 auto' }}
          >
            &ldquo;After ten years bouncing between agencies, this is the first place I&apos;ve worked where the leadership actually <em style={{ color: 'var(--accent)' }}>remembers I have a family too.</em>&rdquo;
          </p>
          <p className="font-mono uppercase tracking-[0.18em] mt-8" style={{ fontSize: '0.75rem', color: 'var(--mid)' }}>
            — Maria D. · Doula since 2018
          </p>
        </div>
      </section>

      {/* ─── Requirements + Application ────────────────────────────────── */}
      <section className="py-20 bg-canvas" id="apply">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Left: requirements */}
            <div>
              <Eyebrow>Who We&rsquo;re Looking For</Eyebrow>
              <h2 className="font-serif font-light text-ink mb-6" style={{ fontSize: '2rem' }}>
                What We&rsquo;re<br /><em>Looking For.</em>
              </h2>

              {requirements.map((req, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: 'var(--rule-soft)',
                    display: 'grid',
                    gridTemplateColumns: '48px 1fr',
                    gap: '1rem',
                    padding: '1.5rem 0',
                    alignItems: 'start',
                  }}
                >
                  <div
                    className="font-serif italic"
                    style={{ fontSize: '1.5rem', color: 'var(--accent)', fontWeight: 300, lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75' }}>
                    {req}
                  </p>
                </div>
              ))}

              <p className="font-serif italic text-dim mt-6" style={{ fontSize: '1rem' }}>
                New graduates are welcome to apply. We value potential, attitude, and heart.
              </p>
            </div>

            {/* Right: application form */}
            <div>
              <Eyebrow>Ready to Apply?</Eyebrow>
              <h2 className="font-serif font-light text-ink mb-4" style={{ fontSize: '2rem' }}>
                Application Form
              </h2>
              <p className="text-dim mb-8" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
                Fill out our short application and we&rsquo;ll be in touch within two business days.
              </p>

              <form id="apply-form" className="flex flex-col gap-8">
                {[
                  { id: 'firstName', label: 'First Name', type: 'text' },
                  { id: 'lastName', label: 'Last Name', type: 'text' },
                  { id: 'email', label: 'Email', type: 'email' },
                  { id: 'phone', label: 'Phone', type: 'tel' },
                ].map(({ id, label, type }) => (
                  <div key={id}>
                    <label htmlFor={id} style={labelStyle}>{label}</label>
                    <input id={id} name={id} type={type} style={inputStyle} />
                  </div>
                ))}

                <div>
                  <label htmlFor="certifications" style={labelStyle}>Certifications</label>
                  <input
                    id="certifications"
                    name="certifications"
                    type="text"
                    placeholder="e.g. DONA Certified Postpartum Doula, IBCLC, NCS"
                    style={{ ...inputStyle, fontFamily: 'var(--font-mono)', fontSize: '0.9375rem' }}
                  />
                </div>

                <div>
                  <label htmlFor="about" style={labelStyle}>Tell Us About Yourself</label>
                  <textarea
                    id="about"
                    name="about"
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <div className="mt-2">
                  <Button variant="default" type="submit">Submit Application</Button>
                </div>

                <p className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '.1em' }}>
                  We respect your privacy. Your information is only used to follow up about joining our team.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
