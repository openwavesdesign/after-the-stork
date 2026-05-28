import Link from 'next/link'
import navData from '@/data/navigation.json'

export default function SiteFooter() {
  return (
    <footer className="bg-ink" style={{ color: 'var(--paper)' }}>
      <div
        className="mx-auto px-6 md:px-12 py-20 md:py-24 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-14 md:gap-10"
        style={{ maxWidth: '1280px' }}
      >
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="font-serif block mb-3"
            style={{ fontSize: '2rem', fontWeight: 400, color: 'var(--paper)', letterSpacing: '-0.01em', lineHeight: 1 }}
          >
            After{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent-soft)' }}>the</em>{' '}
            Stork
          </Link>
          <p
            className="font-mono uppercase tracking-[0.22em] mb-5"
            style={{ fontSize: '0.75rem', color: 'var(--accent-soft)' }}
          >
            Est. 2004 · Philadelphia
          </p>
          <p style={{ fontSize: '0.875rem', color: 'rgba(244,239,230,.78)', lineHeight: '1.7', maxWidth: '320px' }}>
            Expert overnight postpartum doula and newborn care for families across Philadelphia, the Main Line, Bucks County, and select communities in New Jersey.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4
            className="font-mono uppercase tracking-[0.22em] mb-6"
            style={{ fontSize: '0.75rem', color: 'var(--accent-soft)' }}
          >
            Services
          </h4>
          <ul className="flex flex-col gap-3">
            {navData.footer[0].links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link" style={{ fontSize: '0.875rem' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4
            className="font-mono uppercase tracking-[0.22em] mb-6"
            style={{ fontSize: '0.75rem', color: 'var(--accent-soft)' }}
          >
            Company
          </h4>
          <ul className="flex flex-col gap-3">
            {navData.footer[1].links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link" style={{ fontSize: '0.875rem' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="font-mono uppercase tracking-[0.22em] mb-6"
            style={{ fontSize: '0.75rem', color: 'var(--accent-soft)' }}
          >
            Contact
          </h4>
          <ul className="flex flex-col gap-3">
            <li style={{ fontSize: '0.875rem', color: 'rgba(244,239,230,.85)' }}>[Phone Number]</li>
            <li style={{ fontSize: '0.875rem', color: 'rgba(244,239,230,.85)' }}>[Email Address]</li>
            {navData.footer[2].links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link" style={{ fontSize: '0.875rem' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-2 font-mono uppercase tracking-[0.14em]"
        style={{
          maxWidth: '1280px',
          borderTop: '1px solid rgba(255,255,255,.08)',
          fontSize: '0.75rem',
          color: 'rgba(244,239,230,.6)',
        }}
      >
        <span>© 2026 After the Stork — All rights reserved</span>
        <span>Privacy · Terms · LOVE Award Winner 2020 · 2021 · 2022 · 2024</span>
      </div>
    </footer>
  )
}
