import type { Metadata } from 'next'
import Eyebrow from '@/components/ui/Eyebrow'
import ContactFormEmbed from './ContactFormEmbed'
import SocialIcon from '@/components/ui/SocialIcon'
import site from '@/data/site.json'

export const metadata: Metadata = {
  title: 'Contact After the Stork | Philadelphia Postpartum Doula Team',
  description: 'Ready to get started? Contact After the Stork to book a free consultation or ask questions about postpartum doula services in Philadelphia and the Main Line.',
}

export default function ContactPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <div className="pill">Contact Us</div>
          <h1 className="font-serif font-light text-ink text-display max-w-[900px]">
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

            {/* Left — EngineHire form embed */}
            <div>
              <Eyebrow>Send a Message</Eyebrow>
              <div style={{ background: 'var(--paper)', border: 'var(--rule)', padding: '12px' }}>
                <ContactFormEmbed />
              </div>
            </div>

            {/* Right — Info Column */}
            <div>
              <Eyebrow>Get in Touch</Eyebrow>
              <h2 className="font-serif font-light text-ink text-h3 mb-8">
                Direct Contact
              </h2>

              {/* Phone */}
              <div style={{ borderTop: 'var(--rule-soft)', padding: '1.5rem 0', display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <span className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--accent)', lineHeight: 1 }} aria-hidden="true">☏</span>
                <div>
                  <p className="font-mono uppercase tracking-[0.2em]" style={{ fontSize: '0.75rem', color: 'var(--mid)', marginBottom: '6px' }}>Phone</p>
                  <a href={site.phone.href} className="font-serif hover:text-accent transition-colors" style={{ fontSize: '1.375rem', color: 'var(--ink)', lineHeight: 1 }}>{site.phone.display}</a>
                </div>
              </div>

              {/* Email */}
              <div style={{ borderTop: 'var(--rule-soft)', padding: '1.5rem 0', display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <span className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--accent)', lineHeight: 1 }} aria-hidden="true">✉</span>
                <div>
                  <p className="font-mono uppercase tracking-[0.2em]" style={{ fontSize: '0.75rem', color: 'var(--mid)', marginBottom: '6px' }}>Email</p>
                  <a href={site.email.href} className="font-serif hover:text-accent transition-colors" style={{ fontSize: '1.375rem', color: 'var(--ink)', lineHeight: 1 }}>{site.email.display}</a>
                </div>
              </div>

              {/* Service Area */}
              <div style={{ borderTop: 'var(--rule-soft)', padding: '1.5rem 0', display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <span className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--accent)', lineHeight: 1 }} aria-hidden="true">◎</span>
                <div>
                  <p className="font-mono uppercase tracking-[0.2em]" style={{ fontSize: '0.75rem', color: 'var(--mid)', marginBottom: '6px' }}>Service Area</p>
                  <span className="font-serif" style={{ fontSize: '1.375rem', color: 'var(--ink)', lineHeight: 1.35 }}>{site.serviceArea}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2 mb-8">
                {['Philadelphia', 'Bryn Mawr', 'Wayne', 'Villanova', 'Dresher', 'Moorestown NJ', 'Haddonfield NJ'].map((area) => (
                  <span key={area} className="area-tag">{area}</span>
                ))}
              </div>

              {/* Social */}
              <div style={{ borderTop: 'var(--rule-soft)', paddingTop: '1.5rem' }}>
                <p className="font-mono uppercase tracking-[0.2em] mb-3" style={{ fontSize: '0.75rem', color: 'var(--mid)' }}>Follow Along</p>
                <div className="flex flex-wrap gap-3">
                  {site.social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="hover:text-accent transition-colors"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '2.25rem',
                        height: '2.25rem',
                        borderRadius: '50%',
                        border: '1px solid var(--rule)',
                        color: 'var(--dim)',
                      }}
                    >
                      <SocialIcon platform={s.label as 'Facebook' | 'Instagram' | 'LinkedIn'} size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Closing ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-ink">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: '1280px' }}>
          <p className="font-serif font-light italic text-center text-paper text-h2">
            We look forward to supporting your family.
          </p>
        </div>
      </section>
    </>
  )
}
