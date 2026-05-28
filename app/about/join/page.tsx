import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Eyebrow from '@/components/ui/Eyebrow'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import SectionBadge from '@/components/ui/SectionBadge'
import Breadcrumb from '@/components/layout/Breadcrumb'

export const metadata = { title: 'Join the Team' }

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
                Join Our Team of Postpartum Doulas &amp; NCS
              </h1>

              <p
                className="font-mono text-dim leading-relaxed mt-4"
                style={{ fontSize: '12px', maxWidth: '480px' }}
              >
                After the Stork is a growing, family-led postpartum care practice with 25+ years of roots in the Philadelphia community. We&rsquo;re looking for warm, skilled, reliable doulas and newborn care specialists who share our commitment to excellence.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Card cardNumber="01">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '20px' }}>
                Flexible Scheduling
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '11px' }}>
                We work around your availability. Whether you&rsquo;re looking for overnight shifts, daytime hours, or a consistent weekly schedule, we&rsquo;ll build something that works for you.
              </p>
            </Card>

            {/* Card 2 */}
            <Card cardNumber="02">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '20px' }}>
                Supportive Leadership
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '11px' }}>
                Our leadership team does this work themselves. They understand exactly what you&rsquo;ll encounter in the field and are always available to support, advise, and troubleshoot.
              </p>
            </Card>

            {/* Card 3 */}
            <Card cardNumber="03">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '20px' }}>
                Meaningful Work
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '11px' }}>
                Every shift you work makes a real difference. The families you support will remember your care for years. That&rsquo;s not hyperbole — it&rsquo;s what they tell us.
              </p>
            </Card>

            {/* Card 4 */}
            <Card cardNumber="04">
              <h3 className="font-serif text-ink mb-2" style={{ fontSize: '20px' }}>
                Competitive Pay
              </h3>
              <p className="font-mono text-dim leading-relaxed" style={{ fontSize: '11px' }}>
                We offer competitive compensation that reflects the skill, professionalism, and importance of postpartum care.
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
                'Certified postpartum doula, newborn care specialist, or relevant maternal/infant health credential',
                'Experience working with newborns and postpartum families in a professional capacity',
                'Reliable transportation and the ability to work overnight shifts',
                'A warm, professional, and calm presence — even at 3 AM',
                'CPR and first aid certification (or willingness to obtain)',
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
                Fill out the form below and we&rsquo;ll be in touch. All applications are reviewed personally by Georgette.
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
