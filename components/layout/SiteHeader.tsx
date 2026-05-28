'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import navData from '@/data/navigation.json'

type NavChild = { label: string; href: string }
type NavItem = { label: string; href?: string; children?: NavChild[] }

const nav = navData.primary as NavItem[]

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()

  function isActive(item: NavItem): boolean {
    if (item.href) return pathname === item.href
    if (item.children) return item.children.some(c => pathname === c.href || pathname.startsWith(c.href + '/'))
    return false
  }

  function closeMobile() {
    setMobileOpen(false)
    setMobileExpanded(null)
  }

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(244,239,230,.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: 'var(--rule-soft)',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between px-6 md:px-12"
        style={{ maxWidth: '1280px', height: '72px' }}
      >
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-ink" style={{ fontSize: '1.5rem', fontWeight: 400, letterSpacing: '-0.01em' }}>
            After{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>the</em>{' '}
            Stork
          </span>
          <span
            className="font-mono text-mid uppercase tracking-[0.22em]"
            style={{ fontSize: '0.5rem', marginTop: '5px' }}
          >
            Philadelphia · Main Line · Postpartum Care
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(item.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button
                  className="font-mono uppercase tracking-[0.18em] flex items-center gap-1 transition-colors"
                  style={{ fontSize: '0.625rem', color: isActive(item) ? 'var(--accent)' : 'var(--dim)' }}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen === item.label}
                  onClick={() => setDropdownOpen(dropdownOpen === item.label ? null : item.label)}
                >
                  {item.label}
                  <span aria-hidden="true" style={{ fontSize: '0.5rem', marginTop: '1px' }}>▾</span>
                </button>

                {dropdownOpen === item.label && (
                  <div
                    className="absolute top-full left-0 bg-paper border border-stroke shadow-sm"
                    style={{ minWidth: '11rem' }}
                    role="menu"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        onClick={() => setDropdownOpen(null)}
                        className="block font-mono uppercase tracking-[0.18em] px-4 py-3 transition-colors hover:bg-canvas"
                        style={{ fontSize: '0.625rem', color: pathname === child.href ? 'var(--accent)' : 'var(--dim)' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="font-mono uppercase tracking-[0.18em] transition-colors hover:text-accent"
                style={{ fontSize: '0.625rem', color: isActive(item) ? 'var(--accent)' : 'var(--dim)' }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="font-mono text-ink border border-ink uppercase tracking-[0.18em] hover:bg-ink hover:text-paper transition-colors"
            style={{ fontSize: '0.625rem', padding: '10px 22px' }}
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden font-mono text-ink"
          style={{ fontSize: '1rem' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-paper border-t border-stroke px-6 py-6 flex flex-col gap-5"
        >
          {nav.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="font-mono uppercase tracking-[0.18em] flex items-center gap-2 w-full"
                  style={{ fontSize: '0.875rem', color: isActive(item) ? 'var(--accent)' : 'var(--dim)' }}
                  aria-expanded={mobileExpanded === item.label}
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                >
                  {item.label}
                  <span aria-hidden="true" style={{ fontSize: '0.5rem' }}>
                    {mobileExpanded === item.label ? '▲' : '▾'}
                  </span>
                </button>
                {mobileExpanded === item.label && (
                  <div
                    className="mt-3 ml-4 flex flex-col gap-3 border-l pl-4"
                    style={{ borderColor: 'var(--stroke)' }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMobile}
                        className="font-mono uppercase tracking-[0.18em]"
                        style={{ fontSize: '0.875rem', color: pathname === child.href ? 'var(--accent)' : 'var(--dim)' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                onClick={closeMobile}
                className="font-mono uppercase tracking-[0.18em]"
                style={{ fontSize: '0.875rem', color: isActive(item) ? 'var(--accent)' : 'var(--dim)' }}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            onClick={closeMobile}
            className="font-mono text-ink border border-ink uppercase tracking-[0.18em] text-center hover:bg-ink hover:text-paper transition-colors"
            style={{ fontSize: '0.875rem', padding: '12px 22px' }}
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
