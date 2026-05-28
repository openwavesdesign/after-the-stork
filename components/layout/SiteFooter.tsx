import Link from 'next/link'
import navData from '@/data/navigation.json'

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div
        className="mx-auto px-6 md:px-12 py-16 md:py-20"
        style={{ maxWidth: '1280px' }}
      >
        {/* Four column grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex flex-col leading-none mb-4">
              <span
                className="font-serif text-paper"
                style={{ fontSize: '1.25rem', fontWeight: 400 }}
              >
                After the Stork
              </span>
              <span
                className="font-mono text-white/40 uppercase tracking-[0.12em] mt-1"
                style={{ fontSize: '0.6875rem' }}
              >
                Philadelphia · Main Line · Postpartum Care
              </span>
            </Link>
            <p
              className="font-mono text-white/50 mt-4"
              style={{ fontSize: '0.875rem', lineHeight: '1.8' }}
            >
              Expert postpartum doula and newborn care for families across greater Philadelphia.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4
              className="font-mono text-white/40 uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '0.6875rem' }}
            >
              {navData.footer[0].label}
            </h4>
            <ul className="flex flex-col gap-3">
              {navData.footer[0].links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-white/60 hover:text-paper transition-colors uppercase tracking-[0.1em]"
                    style={{ fontSize: '0.75rem' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4
              className="font-mono text-white/40 uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '0.6875rem' }}
            >
              {navData.footer[1].label}
            </h4>
            <ul className="flex flex-col gap-3">
              {navData.footer[1].links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-white/60 hover:text-paper transition-colors uppercase tracking-[0.1em]"
                    style={{ fontSize: '0.75rem' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4
              className="font-mono text-white/40 uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '0.6875rem' }}
            >
              {navData.footer[2].label}
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="font-mono text-white/40 uppercase tracking-[0.1em]" style={{ fontSize: '0.75rem' }}>
                ☏ [Phone Number]
              </li>
              <li className="font-mono text-white/40 uppercase tracking-[0.1em]" style={{ fontSize: '0.75rem' }}>
                ✉ [Email Address]
              </li>
              {navData.footer[2].links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-white/60 hover:text-paper transition-colors uppercase tracking-[0.1em]"
                    style={{ fontSize: '0.75rem' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <p
            className="font-mono text-white/30 uppercase tracking-[0.1em]"
            style={{ fontSize: '0.6875rem' }}
          >
            © 2025 After the Stork. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-white/30 uppercase tracking-[0.1em]" style={{ fontSize: '0.6875rem' }}>Privacy</span>
            <span className="font-mono text-white/20" style={{ fontSize: '0.6875rem' }}>·</span>
            <span className="font-mono text-white/30 uppercase tracking-[0.1em]" style={{ fontSize: '0.6875rem' }}>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
