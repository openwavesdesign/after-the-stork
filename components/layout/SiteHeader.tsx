'use client'

import Link from 'next/link'
import { useState } from 'react'
import navData from '@/data/navigation.json'

type NavChild = { label: string; href: string }
type NavItem = { label: string; href?: string; children?: NavChild[] }

const nav = navData.primary as NavItem[]

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  function closeMobile() {
    setMobileOpen(false)
    setMobileExpanded(null)
  }

  return (
    <header
      className="sticky top-0 z-50 bg-paper"
      style={{ borderBottom: 'var(--rule-ink)' }}
    >
      <div
        className="mx-auto flex items-center justify-between px-6 md:px-12"
        style={{ maxWidth: '1280px', height: '72px' }}
      >
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="font-serif text-ink"
            style={{ fontSize: '1.25rem', fontWeight: 400 }}
          >
            After the Stork
          </span>
          <span
            className="font-mono text-mid uppercase tracking-[0.12em]"
            style={{ fontSize: '0.6875rem', marginTop: '3px' }}
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
                  className="font-mono text-dim hover:text-ink transition-colors uppercase tracking-[0.14em] flex items-center gap-1"
                  style={{ fontSize: '0.75rem' }}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen === item.label}
                  onClick={() =>
                    setDropdownOpen(dropdownOpen === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <span aria-hidden="true" style={{ fontSize: '0.5rem', marginTop: '1px' }}>▾</span>
                </button>

                {dropdownOpen === item.label && (
                  <div
                    className="absolute top-full left-0 bg-paper border border-stroke"
                    style={{ minWidth: '11rem', marginTop: '0' }}
                    role="menu"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        onClick={() => setDropdownOpen(null)}
                        className="block font-mono text-dim hover:text-ink hover:bg-canvas transition-colors uppercase tracking-[0.14em] px-4 py-3"
                        style={{ fontSize: '0.75rem' }}
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
                className="font-mono text-dim hover:text-ink transition-colors uppercase tracking-[0.14em]"
                style={{ fontSize: '0.75rem' }}
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
            className="font-mono text-ink border border-ink uppercase tracking-[0.16em] hover:bg-ink hover:text-paper transition-colors"
            style={{ fontSize: '0.75rem', padding: '9px 22px' }}
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
                  className="font-mono text-dim hover:text-ink uppercase tracking-[0.14em] flex items-center gap-2 w-full"
                  style={{ fontSize: '0.875rem' }}
                  aria-expanded={mobileExpanded === item.label}
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <span aria-hidden="true" style={{ fontSize: '0.5rem' }}>
                    {mobileExpanded === item.label ? '▲' : '▾'}
                  </span>
                </button>
                {mobileExpanded === item.label && (
                  <div className="mt-3 ml-4 flex flex-col gap-3 border-l border-stroke pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMobile}
                        className="font-mono text-dim hover:text-ink uppercase tracking-[0.14em]"
                        style={{ fontSize: '0.875rem' }}
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
                className="font-mono text-dim hover:text-ink uppercase tracking-[0.14em]"
                style={{ fontSize: '0.875rem' }}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            onClick={closeMobile}
            className="font-mono text-ink border border-ink uppercase tracking-[0.16em] text-center hover:bg-ink hover:text-paper transition-colors"
            style={{ fontSize: '0.875rem', padding: '12px 22px' }}
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
