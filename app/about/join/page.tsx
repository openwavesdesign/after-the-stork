import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Eyebrow from '@/components/ui/Eyebrow'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import SectionBadge from '@/components/ui/SectionBadge'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Postpartum Doula Jobs in Philadelphia | Join After the Stork',
  description: 'After the Stork is hiring certified postpartum doulas in Philadelphia, the Main Line, and surrounding communities. Apply today.',
}

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
                We&rsquo;re Hiring
              </span>

              <h1
                className="font-serif font-light text-ink mt-4"
                style={{ fontSize: 'clamp(52px, 6vw, 64px)', lineHeight: 1.05 }}
              >
                Join Our Team of Postpartum Doulas
              </h1>

              <p
                className="font-mono text-dim leading-relaxed mt-4"
                style={{ fontSize: '12px', maxWidth: '480px' }}
              >
                We are always looking for talented, compassionate doulas and NCS professionals in Philadelphia, the Main Line, Bucks County, and New Jersey.
              </p>

              <div className="mt-8">
                <Button variant="default" href="#apply">
                  Apply Now
                </Button>
              </div>
            </div>

            {/* Right: photo */}
            <ImagePlaceholder
              label="Doula at Work Photo"
              style={{ height: '520px' }}
            />
          </div>
        </div>
      </section>

      {/* ─── 02 / Why Work With Us ──────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-canvas">
        <SectionBadge label="02 / Why Work With Us" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <Eyebrow>What Makes Us Different</Eyebrow>
          <h2
            className="font-serif font-light text-ink mt-3 mb-10"
            style={{ fontSize: '40px' }}
          >
            Why Doulas Love Working Here
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card cardNumber="01">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '20px' }}>
                Flexible Scheduling
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '11px' }}>
                Build a schedule around your life. We have an online scheduling system that makes it easy to share your availability and pair you with clients that match. For those giving 4–6 nights of availability, we can commit to filling your schedule so you have a stable income you can count on.
              </p>
            </Card>

            {/* Card 2 */}
            <Card cardNumber="02">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '20px' }}>
                Supportive Leadership
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '11px' }}>
                Regular communication, professional development, and genuine care for your experience.
              </p>
            </Card>

            {/* Card 3 */}
            <Card cardNumber="03">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '20px' }}>
                Meaningful Work
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '11px' }}>
                Every shift changes a family&rsquo;s experience of the newborn stage. That matters.
              </p>
            </Card>

            {/* Card 4 */}
            <Card cardNumber="04">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '20px' }}>
                Competitive Pay
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '11px' }}>
                Compensation that reflects your certifications, experience, and dedication.
              </p>
            </Card>

            {/* Card 5 */}
            <Card cardNumber="05">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '20px' }}>
                Employee Based
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '11px' }}>
                We pay a portion of your taxes, offer PTO, and offer time-and-a-half pay for those who desire overtime hours.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── 03 / Requirements + Application ───────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper" id="apply">
        <SectionBadge label="03 / Apply" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Left: requirements */}
            <div>
              <Eyebrow>Who We&rsquo;re Looking For</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3 mb-6"
                style={{ fontSize: '40px' }}
              >
                What We&rsquo;re Looking For
              </h2>

              {/* Requirement items */}
              {[
                'Certified postpartum doula (CAPPA, DONA, or equivalent) or newborn care specialist (NCS)',
                'CPR and First Aid certified (or willing to certify before starting)',
                'Reliable transportation within the Philadelphia metro / Main Line area',
                'Comfortable with overnight shifts (10 PM–6 AM or similar)',
                'Professional, warm, and trustworthy presence in family homes',
              ].map((req, i) => (
                <div key={i} className="border-t border-stroke py-5 flex gap-4 items-start">
                  <span className="text-mid mt-[2px]" style={{ fontSize: '8px' }}>◦</span>
                  <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '11px' }}>
                    {req}
                  </p>
                </div>
              ))}

              <p
                className="font-serif italic text-dim mt-6"
                style={{ fontSize: '14px' }}
              >
                New graduates are welcome to apply. We value potential, attitude, and heart.
              </p>
            </div>

            {/* Right: application form */}
            <div>
              <Eyebrow>Ready to Apply?</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3 mb-4"
                style={{ fontSize: '40px' }}
              >
                Application Form
              </h2>
              <p
                className="font-mono text-dim leading-relaxed mb-6"
                style={{ fontSize: '12px' }}
              >
                Fill out our short application and we&rsquo;ll be in touch within [X] business days.
              </p>

              <form id="apply-form" className="flex flex-col gap-5">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="font-mono text-mid uppercase tracking-[0.14em] mb-1 block"
                    style={{ fontSize: '8px' }}
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="border border-stroke bg-transparent font-mono text-dim outline-none w-full tracking-[0.05em] focus:border-ink transition-colors"
                    style={{ fontSize: '11px', padding: '12px 16px' }}
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="font-mono text-mid uppercase tracking-[0.14em] mb-1 block"
                    style={{ fontSize: '8px' }}
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="border border-stroke bg-transparent font-mono text-dim outline-none w-full tracking-[0.05em] focus:border-ink transition-colors"
                    style={{ fontSize: '11px', padding: '12px 16px' }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="font-mono text-mid uppercase tracking-[0.14em] mb-1 block"
                    style={{ fontSize: '8px' }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="border border-stroke bg-transparent font-mono text-dim outline-none w-full tracking-[0.05em] focus:border-ink transition-colors"
                    style={{ fontSize: '11px', padding: '12px 16px' }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="font-mono text-mid uppercase tracking-[0.14em] mb-1 block"
                    style={{ fontSize: '8px' }}
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="border border-stroke bg-transparent font-mono text-dim outline-none w-full tracking-[0.05em] focus:border-ink transition-colors"
                    style={{ fontSize: '11px', padding: '12px 16px' }}
                  />
                </div>

                {/* Certifications */}
                <div>
                  <label
                    htmlFor="certifications"
                    className="font-mono text-mid uppercase tracking-[0.14em] mb-1 block"
                    style={{ fontSize: '8px' }}
                  >
                    Certifications
                  </label>
                  <input
                    id="certifications"
                    name="certifications"
                    type="text"
                    placeholder="e.g. DONA Certified Postpartum Doula, IBCLC, NCS"
                    className="border border-stroke bg-transparent font-mono text-dim outline-none w-full tracking-[0.05em] focus:border-ink transition-colors placeholder:text-stroke"
                    style={{ fontSize: '11px', padding: '12px 16px' }}
                  />
                </div>

                {/* Tell Us About Yourself */}
                <div>
                  <label
                    htmlFor="about"
                    className="font-mono text-mid uppercase tracking-[0.14em] mb-1 block"
                    style={{ fontSize: '8px' }}
                  >
                    Tell Us About Yourself
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    rows={5}
                    className="border border-stroke bg-transparent font-mono text-dim outline-none w-full tracking-[0.05em] focus:border-ink transition-colors resize-none"
                    style={{ fontSize: '11px', padding: '12px 16px' }}
                  />
                </div>

                <div className="mt-2">
                  <Button variant="default" type="submit">
                    Submit Application
                  </Button>
                </div>

                <p className="font-mono text-stroke" style={{ fontSize: '8px' }}>
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
