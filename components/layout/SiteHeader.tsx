'use client'

import Link from 'next/link'
import { useState } from 'react'
import navData from '@/data/navigation.json'

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

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
          {navData.primary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-dim hover:text-ink transition-colors uppercase tracking-[0.14em]"
              style={{ fontSize: '0.75rem' }}
            >
              {link.label}
            </Link>
          ))}
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
          {navData.primary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-dim hover:text-ink uppercase tracking-[0.14em]"
              style={{ fontSize: '0.875rem' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
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
