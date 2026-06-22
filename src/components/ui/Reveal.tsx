import React, { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  /** Render element tag. Default 'div'. */
  as?: React.ElementType
  /** Stagger delay in ms. */
  delay?: number
  className?: string
  style?: React.CSSProperties
}

/**
 * Subtle fade/translate-up on scroll into view. Motion is disabled for users
 * who prefer reduced motion (handled in globals.css) and content is forced
 * visible when JS is unavailable (noscript rule in the root layout).
 */
export default function Reveal({ children, as = 'div', delay = 0, className = '', style }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ ...style, transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  )
}
