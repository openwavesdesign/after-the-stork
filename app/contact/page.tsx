import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Contact After the Stork | Philadelphia Postpartum Doula Team',
  description: 'Ready to get started? Contact After the Stork to book a free consultation or ask questions about postpartum doula services in Philadelphia and the Main Line.',
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
  fontSize: '0.5625rem',
  letterSpacing: '.2em',
  textTransform: 'uppercase',
  color: 'var(--mid)',
  display: 'block',
  marginBottom: '10px',
}

export default function ContactPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="pill">Contact Us</div>
          <h1
            className="font-serif font-light text-ink"
            style={{ fontSize: 'clamp(3.25rem,6vw,6rem)', lineHeight: 1.02, letterSpacing: '-0.018em', maxWidth: '900px' }}
          >
            Contact Our Philadelphia <em>Postpartum Doula</em> Team
          </h1>
          <p className="mt-6" style={{ fontSize: '1.125rem', color: 'var(--dim)', lineHeight: '1.7', maxWidth: '560px' }}>
            Whether you&rsquo;re planning ahead during pregnancy, newly home from the hospital, or still figuring out what kind of support you need — reach out. There are no silly questions here. We typically respond within one business day.
          </p>
        </div>
      </section>

      {/* ─── Contact Layout ────────────────────────────────────────────── */}
      <section className="py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-20 items-start">

            {/* Left — Form Column */}
            <div>
              <Eyebrow>Send a Message</Eyebrow>

              {/* Form card */}
              <div style={{ background: 'var(--paper)', border: 'var(--rule)', padding: '48px' }}>
                <form className="flex flex-col gap-8">
                  <div>
                    <label htmlFor="firstName" style={labelStyle}>First Name</label>
                    <input id="firstName" type="text" name="firstName" style={inputStyle} />
                  </div>

                  <div>
                    <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                    <input id="lastName" type="text" name="lastName" style={inputStyle} />
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="email" style={labelStyle}>Email</label>
                      <input id="email" type="email" name="email" style={inputStyle} />
                    </div>
                    <div>
                      <label htmlFor="phone" style={labelStyle}>Phone</label>
                      <input id="phone" type="tel" name="phone" style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="dueDate" style={labelStyle}>Due Date / Baby&rsquo;s Birth Date</label>
                    <input
                      id="dueDate"
                      type="text"
                      name="dueDate"
                      placeholder="MM/DD/YYYY"
                      style={{ ...inputStyle, fontFamily: 'var(--font-mono)', fontSize: '0.9375rem' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="howHeard" style={labelStyle}>How Did You Hear About Us</label>
                    <select
                      id="howHeard"
                      name="howHeard"
                      style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                    >
                      <option value="">— Please select —</option>
                      <option value="google">Google</option>
                      <option value="referral">Referral from a Friend</option>
                      <option value="instagram">Instagram</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" style={labelStyle}>How Can We Help You</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>

                  <div>
                    <Button variant="default" type="submit">Send Message</Button>
                    <p className="font-mono mt-3" style={{ fontSize: '0.5625rem', color: 'var(--stroke)', letterSpacing: '.1em' }}>
                      Form connects to EngineHire CRM — to be wired up during development
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Right — Info Column */}
            <div>
              <Eyebrow>Get in Touch</Eyebrow>
              <h2 className="font-serif font-light text-ink mb-8" style={{ fontSize: '2.25rem' }}>
                Direct Contact
              </h2>

              {/* Phone */}
              <div style={{ borderTop: 'var(--rule-soft)', padding: '1.5rem 0', display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <span className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--accent)', lineHeight: 1 }}>☏</span>
                <div>
                  <p className="font-mono uppercase tracking-[0.2em]" style={{ fontSize: '0.5625rem', color: 'var(--mid)', marginBottom: '6px' }}>Phone</p>
                  <span className="font-serif" style={{ fontSize: '1.375rem', color: 'var(--ink)', lineHeight: 1 }}>[Phone Number]</span>
                </div>
              </div>

              {/* Email */}
              <div style={{ borderTop: 'var(--rule-soft)', padding: '1.5rem 0', display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <span className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--accent)', lineHeight: 1 }}>✉</span>
                <div>
                  <p className="font-mono uppercase tracking-[0.2em]" style={{ fontSize: '0.5625rem', color: 'var(--mid)', marginBottom: '6px' }}>Email</p>
                  <span className="font-serif" style={{ fontSize: '1.375rem', color: 'var(--ink)', lineHeight: 1 }}>[Email Address]</span>
                </div>
              </div>

              {/* Service Area */}
              <div style={{ borderTop: 'var(--rule-soft)', padding: '1.5rem 0', display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <span className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--accent)', lineHeight: 1 }}>◎</span>
                <div>
                  <p className="font-mono uppercase tracking-[0.2em]" style={{ fontSize: '0.5625rem', color: 'var(--mid)', marginBottom: '6px' }}>Service Area</p>
                  <span className="font-serif" style={{ fontSize: '1.375rem', color: 'var(--ink)', lineHeight: 1.35 }}>Philadelphia, Main Line, Montgomery &amp; Delaware Counties, select NJ communities.</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2 mb-8">
                {['Philadelphia', 'Bryn Mawr', 'Wayne', 'Villanova', 'Dresher', 'Moorestown NJ', 'Haddonfield NJ'].map((area) => (
                  <span key={area} className="area-tag">{area}</span>
                ))}
              </div>

              <div style={{ height: '280px', position: 'relative' }}>
                <ImagePlaceholder
                  label="Embedded Google Map — Service Area"
                  dimensions="Google Maps embed"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Closing ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-ink">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <p
            className="font-serif italic text-center"
            style={{ fontSize: '2.25rem', fontWeight: 300, color: 'var(--paper)' }}
          >
            We look forward to supporting your family.
          </p>
        </div>
      </section>
    </>
  )
}
