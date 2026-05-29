'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import navData from '@/data/navigation.json'

type NavChild = { label: string; href: string }
type NavItem = { label: string; href?: string; children?: NavChild[] }

const nav = navData.primary as NavItem[]

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()

  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Clean up pending close timeout on unmount
  useEffect(() => {
    return () => { if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current) }
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleDocumentClick(e: MouseEvent) {
      if (dropdownOpen === null) return
      const target = e.target as Node
      const panel = dropdownRefs.current[dropdownOpen]
      const trigger = triggerRefs.current[dropdownOpen]
      if (panel && !panel.contains(target) && trigger && !trigger.contains(target)) {
        setDropdownOpen(null)
      }
    }
    document.addEventListener('mousedown', handleDocumentClick)
    return () => document.removeEventListener('mousedown', handleDocumentClick)
  }, [dropdownOpen])

  function isActive(item: NavItem): boolean {
    if (item.href) return pathname === item.href
    if (item.children) return item.children.some(c => pathname === c.href || pathname.startsWith(c.href + '/'))
    return false
  }

  function closeMobile() {
    setMobileOpen(false)
    setMobileExpanded(null)
  }

  function handleMouseEnter(label: string) {
    if (closeTimeoutRef.current) { clearTimeout(closeTimeoutRef.current); closeTimeoutRef.current = null }
    setDropdownOpen(label)
  }

  function handleMouseLeave() {
    closeTimeoutRef.current = setTimeout(() => setDropdownOpen(null), 150)
  }

  function handleDropdownKeyDown(e: React.KeyboardEvent<HTMLDivElement>, item: NavItem) {
    const isOpen = dropdownOpen === item.label

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!isOpen) {
        setDropdownOpen(item.label)
        requestAnimationFrame(() => {
          dropdownRefs.current[item.label]
            ?.querySelector<HTMLAnchorElement>('[role="menuitem"]')?.focus()
        })
      } else {
        const items = Array.from(
          dropdownRefs.current[item.label]?.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]') ?? []
        )
        const idx = items.indexOf(document.activeElement as HTMLAnchorElement)
        items[idx + 1]?.focus()
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (isOpen) {
        const items = Array.from(
          dropdownRefs.current[item.label]?.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]') ?? []
        )
        const idx = items.indexOf(document.activeElement as HTMLAnchorElement)
        if (idx <= 0) triggerRefs.current[item.label]?.focus()
        else items[idx - 1]?.focus()
      }
    }

    if (e.key === 'Escape') {
      e.preventDefault()
      setDropdownOpen(null)
      triggerRefs.current[item.label]?.focus()
    }

    if (e.key === 'Tab') {
      setDropdownOpen(null)
    }
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
            style={{ fontSize: '0.75rem', marginTop: '5px' }}
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
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
                onKeyDown={(e) => handleDropdownKeyDown(e, item)}
              >
                <button
                  ref={(el) => { triggerRefs.current[item.label] = el }}
                  className="font-mono uppercase tracking-[0.18em] flex items-center gap-1 transition-colors"
                  style={{ fontSize: '0.75rem', color: isActive(item) ? 'var(--accent)' : 'var(--dim)' }}
                  aria-haspopup="menu"
                  aria-expanded={dropdownOpen === item.label}
                  aria-controls={`dropdown-${item.label.toLowerCase()}`}
                  onClick={() => setDropdownOpen(dropdownOpen === item.label ? null : item.label)}
                >
                  {item.label}
                  <svg
                    aria-hidden="true"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    style={{
                      transition: prefersReduced ? 'none' : 'transform 200ms ease',
                      transform: dropdownOpen === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                      marginTop: '1px',
                      flexShrink: 0,
                    }}
                  >
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {dropdownOpen === item.label && (
                  <div
                    ref={(el) => { dropdownRefs.current[item.label] = el }}
                    id={`dropdown-${item.label.toLowerCase()}`}
                    className="nav-dropdown absolute top-full left-0 bg-paper border border-stroke shadow-sm"
                    style={{ minWidth: '11rem', borderTop: '2px solid var(--accent)' }}
                    role="menu"
                    aria-label={item.label}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        onClick={() => setDropdownOpen(null)}
                        className="block font-mono uppercase tracking-[0.18em] px-4 py-3 transition-colors hover:bg-accent-tint hover:text-accent"
                        style={{
                          fontSize: '0.75rem',
                          color: pathname === child.href ? 'var(--accent)' : 'var(--dim)',
                          background: pathname === child.href ? 'var(--accent-tint)' : undefined,
                        }}
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
                style={{ fontSize: '0.75rem', color: isActive(item) ? 'var(--accent)' : 'var(--dim)' }}
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
            style={{ fontSize: '0.75rem', padding: '10px 22px' }}
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
                  <span aria-hidden="true" style={{ fontSize: '0.75rem' }}>
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
