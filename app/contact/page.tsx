import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Contact After the Stork | Philadelphia Postpartum Doula Team',
  description: 'Ready to get started? Contact After the Stork to book a free consultation or ask questions about postpartum doula services in Philadelphia and the Main Line.',
}

const inputClass =
  'border border-stroke bg-transparent font-mono text-dim outline-none w-full tracking-[0.05em] focus:border-ink transition-colors px-4 py-3'
const labelClass = 'font-mono text-mid uppercase tracking-[0.14em] block mb-1'

export default function ContactPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <span
            className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1"
            style={{ fontSize: '0.6875rem' }}
          >
            Contact Us
          </span>
          <h1
            className="font-serif font-light text-ink mt-4"
            style={{ fontSize: 'clamp(3.25rem, 6vw, 4.5rem)', lineHeight: 1.05, maxWidth: '900px' }}
          >
            Contact Our Philadelphia <em>Postpartum Doula</em> Team
          </h1>
          <p
            className="font-mono text-dim leading-relaxed mt-4"
            style={{ fontSize: '1rem', maxWidth: '560px' }}
          >
            Whether you&rsquo;re planning ahead during pregnancy, newly home from the hospital, or still figuring out what kind of support you need — reach out. There are no silly questions here. We typically respond within one business day.
          </p>
        </div>
      </section>

      {/* ─── Contact Layout ────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-canvas">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-20 items-start">

            {/* Left — Info Column */}
            <div>
              <Eyebrow>Get in Touch</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3 mb-8"
                style={{ fontSize: '2.25rem' }}
              >
                Direct Contact
              </h2>

              <div className="border-t border-stroke py-5 flex items-start gap-4">
                <span className="text-mid font-mono" style={{ fontSize: '1rem' }} aria-hidden="true">☏</span>
                <div>
                  <p className="font-mono text-stroke uppercase tracking-[0.14em] mb-1" style={{ fontSize: '0.6875rem' }}>
                    Phone
                  </p>
                  <span className="font-mono text-dim" style={{ fontSize: '1rem' }}>[Phone Number]</span>
                </div>
              </div>

              <div className="border-t border-stroke py-5 flex items-start gap-4">
                <span className="text-mid font-mono" style={{ fontSize: '1rem' }} aria-hidden="true">✉</span>
                <div>
                  <p className="font-mono text-stroke uppercase tracking-[0.14em] mb-1" style={{ fontSize: '0.6875rem' }}>
                    Email
                  </p>
                  <span className="font-mono text-dim" style={{ fontSize: '1rem' }}>[Email Address]</span>
                </div>
              </div>

              <div className="border-t border-stroke py-5 flex items-start gap-4">
                <span className="text-mid font-mono" style={{ fontSize: '1rem' }} aria-hidden="true">◎</span>
                <div>
                  <p className="font-mono text-stroke uppercase tracking-[0.14em] mb-1" style={{ fontSize: '0.6875rem' }}>
                    Service Area
                  </p>
                  <span className="font-mono text-dim" style={{ fontSize: '1rem' }}>Serving Philadelphia, the Main Line, Montgomery &amp; Delaware Counties, and select NJ communities.</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['Philadelphia', 'Bryn Mawr', 'Wayne', 'Villanova', 'Dresher', 'Moorestown NJ', 'Haddonfield NJ'].map((area) => (
                  <span
                    key={area}
                    className="border border-stroke font-mono text-mid uppercase tracking-[0.12em] px-3 py-1"
                    style={{ fontSize: '0.6875rem' }}
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="mt-8 border border-dashed border-stroke relative" style={{ height: '280px' }}>
                <ImagePlaceholder
                  label="Embedded Google Map — Service Area"
                  dimensions="Google Maps embed"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Right — Form Column */}
            <div>
              <Eyebrow>Send a Message</Eyebrow>

              <form className="flex flex-col gap-5 mt-6">
                <div>
                  <label htmlFor="firstName" className={labelClass} style={{ fontSize: '0.6875rem' }}>
                    First Name
                  </label>
                  <input id="firstName" type="text" name="firstName" className={inputClass} style={{ fontSize: '1rem' }} />
                </div>

                <div>
                  <label htmlFor="lastName" className={labelClass} style={{ fontSize: '0.6875rem' }}>
                    Last Name
                  </label>
                  <input id="lastName" type="text" name="lastName" className={inputClass} style={{ fontSize: '1rem' }} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className={labelClass} style={{ fontSize: '0.6875rem' }}>
                      Email
                    </label>
                    <input id="email" type="email" name="email" className={inputClass} style={{ fontSize: '1rem' }} />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass} style={{ fontSize: '0.6875rem' }}>
                      Phone
                    </label>
                    <input id="phone" type="tel" name="phone" className={inputClass} style={{ fontSize: '1rem' }} />
                  </div>
                </div>

                <div>
                  <label htmlFor="dueDate" className={labelClass} style={{ fontSize: '0.6875rem' }}>
                    Due Date / Baby&rsquo;s Birth Date
                  </label>
                  <input
                    id="dueDate"
                    type="text"
                    name="dueDate"
                    placeholder="MM/DD/YYYY"
                    className={inputClass}
                    style={{ fontSize: '1rem' }}
                  />
                </div>

                <div>
                  <label htmlFor="howHeard" className={labelClass} style={{ fontSize: '0.6875rem' }}>
                    How Did You Hear About Us
                  </label>
                  <select
                    id="howHeard"
                    name="howHeard"
                    className={`${inputClass} appearance-none cursor-pointer`}
                    style={{ fontSize: '1rem' }}
                  >
                    <option value="">— Please select —</option>
                    <option value="google">Google</option>
                    <option value="referral">Referral from a Friend</option>
                    <option value="instagram">Instagram</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass} style={{ fontSize: '0.6875rem' }}>
                    How Can We Help You
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={inputClass}
                    style={{ fontSize: '1rem', resize: 'vertical' }}
                  />
                </div>

                <div>
                  <Button variant="default" type="submit">
                    Send Message
                  </Button>
                  <p className="font-mono text-stroke mt-3" style={{ fontSize: '0.75rem' }}>
                    Form connects to EngineHire CRM — to be wired up during development
                  </p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Closing ───────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-ink">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <p
            className="font-serif italic text-paper text-center"
            style={{ fontSize: '2.25rem', fontWeight: 300 }}
          >
            We look forward to supporting your family.
          </p>
        </div>
      </section>
    </>
  )
}
