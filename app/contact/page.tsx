import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Button from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import SectionBadge from '@/components/ui/SectionBadge'

export const metadata: Metadata = { title: 'Contact Us' }

const inputClass =
  'border border-stroke bg-transparent font-mono text-dim outline-none w-full tracking-[0.05em] focus:border-ink transition-colors px-4 py-3'
const labelClass = 'font-mono text-mid uppercase tracking-[0.14em] block mb-1'

export default function ContactPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-paper border-b border-stroke">
        <div className="mx-auto px-6 md:px-12 py-4" style={{ maxWidth: '1280px' }}>
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
        </div>
      </div>

      {/* ─── 01 / Hero ──────────────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-paper">
        <SectionBadge label="01 / Hero" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <span
            className="inline-block border border-stroke font-mono text-mid uppercase tracking-[0.16em] px-3 py-1"
            style={{ fontSize: '8px' }}
          >
            Contact Us
          </span>
          <h1
            className="font-serif font-light text-ink mt-4"
            style={{ fontSize: 'clamp(52px, 6vw, 72px)', lineHeight: 1.05, maxWidth: '900px' }}
          >
            Contact Our Philadelphia <em>Postpartum Doula</em> Team
          </h1>
          <p
            className="font-mono text-dim leading-relaxed mt-4"
            style={{ fontSize: '13px', maxWidth: '560px' }}
          >
            We&rsquo;d love to hear from you. Book a free consultation, ask a question, or tell us about your family. We typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ─── 02 / Contact Layout ────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-canvas">
        <SectionBadge label="02 / Contact" />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-20 items-start">

            {/* Left — Info Column */}
            <div>
              <Eyebrow>Get in Touch</Eyebrow>
              <h2
                className="font-serif font-light text-ink mt-3 mb-8"
                style={{ fontSize: '36px' }}
              >
                Direct Contact
              </h2>

              {/* Phone */}
              <div className="border-t border-stroke py-5 flex items-start gap-4">
                <span className="text-mid font-mono" style={{ fontSize: '16px' }}>☏</span>
                <div>
                  <p className="font-mono text-stroke uppercase tracking-[0.14em] mb-1" style={{ fontSize: '8px' }}>
                    Phone
                  </p>
                  {/* TODO: CLIENT INPUT NEEDED */}
                  <span className="font-mono text-dim" style={{ fontSize: '11px' }}>[Phone Number]</span>
                </div>
              </div>

              {/* Email */}
              <div className="border-t border-stroke py-5 flex items-start gap-4">
                <span className="text-mid font-mono" style={{ fontSize: '16px' }}>✉</span>
                <div>
                  <p className="font-mono text-stroke uppercase tracking-[0.14em] mb-1" style={{ fontSize: '8px' }}>
                    Email
                  </p>
                  <span className="font-mono text-dim" style={{ fontSize: '11px' }}>[Email Address]</span>
                </div>
              </div>

              {/* Service Area */}
              <div className="border-t border-stroke py-5 flex items-start gap-4">
                <span className="text-mid font-mono" style={{ fontSize: '16px' }}>◎</span>
                <div>
                  <p className="font-mono text-stroke uppercase tracking-[0.14em] mb-1" style={{ fontSize: '8px' }}>
                    Service Area
                  </p>
                  <span className="font-mono text-dim" style={{ fontSize: '11px' }}>Philadelphia, Main Line &amp; Surrounding Communities</span>
                </div>
              </div>

              {/* Area tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {['Philadelphia', 'Bryn Mawr', 'Wayne', 'Villanova', 'Ardmore'].map((area) => (
                  <span
                    key={area}
                    className="border border-stroke font-mono text-mid uppercase tracking-[0.12em] px-3 py-1"
                    style={{ fontSize: '8px' }}
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* Map placeholder */}
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
                {/* First Name */}
                <div>
                  <label className={labelClass} style={{ fontSize: '8px' }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className={inputClass}
                    style={{ fontSize: '11px' }}
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className={labelClass} style={{ fontSize: '8px' }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className={inputClass}
                    style={{ fontSize: '11px' }}
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} style={{ fontSize: '8px' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={inputClass}
                      style={{ fontSize: '11px' }}
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={{ fontSize: '8px' }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className={inputClass}
                      style={{ fontSize: '11px' }}
                    />
                  </div>
                </div>

                {/* Due Date */}
                <div>
                  <label className={labelClass} style={{ fontSize: '8px' }}>
                    Due Date / Baby&rsquo;s Birth Date
                  </label>
                  <input
                    type="text"
                    name="dueDate"
                    placeholder="MM/DD/YYYY"
                    className={inputClass}
                    style={{ fontSize: '11px' }}
                  />
                </div>

                {/* How Did You Hear */}
                <div>
                  <label className={labelClass} style={{ fontSize: '8px' }}>
                    How Did You Hear About Us
                  </label>
                  <select
                    name="howHeard"
                    className={`${inputClass} appearance-none cursor-pointer`}
                    style={{ fontSize: '11px' }}
                  >
                    <option value="">— Please select —</option>
                    <option value="google">Google</option>
                    <option value="referral">Referral from a Friend</option>
                    <option value="instagram">Instagram</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* How Can We Help */}
                <div>
                  <label className={labelClass} style={{ fontSize: '8px' }}>
                    How Can We Help You
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className={inputClass}
                    style={{ fontSize: '11px', resize: 'vertical' }}
                  />
                </div>

                <div>
                  <Button variant="default" type="submit">
                    Send Message
                  </Button>
                  <p className="font-mono text-stroke mt-3" style={{ fontSize: '8px' }}>
                    Form connects to EngineHire CRM — to be wired up during development
                  </p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 03 / Closing ───────────────────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 bg-ink">
        <SectionBadge label="03 / Closing" dark={true} />
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <p
            className="font-serif italic text-paper text-center"
            style={{ fontSize: '36px', fontWeight: 300 }}
          >
            We look forward to supporting your family.
          </p>
        </div>
      </section>
    </>
  )
}
