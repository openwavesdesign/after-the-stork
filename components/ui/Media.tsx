import Image from 'next/image'
import React from 'react'

interface MediaProps {
  /** Image source. When omitted, a refined on-brand placeholder is shown. */
  src?: string | null
  /** Meaningful alt text (used when a real image is present). Required. */
  alt: string
  /** Visible caption shown inside the placeholder for context (e.g. "Georgette Kerr, Founder"). */
  label?: string
  /** CSS aspect-ratio, e.g. "3/4", "4/5", "16/9". Ignored if a height is set via style/className. */
  ratio?: string
  className?: string
  style?: React.CSSProperties
  priority?: boolean
  sizes?: string
  /** Warm editorial grade to unify disparate photography. Default true. */
  warm?: boolean
  /** Slow zoom on hover (CSS-only). Default true when a real image is present. */
  zoom?: boolean
}

export default function Media({
  src,
  alt,
  label,
  ratio,
  className = '',
  style,
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  warm = true,
  zoom = true,
}: MediaProps) {
  const wrapperStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'var(--paper-3)',
    ...(ratio ? { aspectRatio: ratio } : {}),
    ...style,
  }

  // ── Real image ────────────────────────────────────────────────────────────
  if (src) {
    return (
      <div className={`media-frame ${zoom ? 'media-zoom' : ''} ${className}`} style={wrapperStyle}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: 'cover' }}
        />
        {warm && (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(34,64,104,.04) 0%, rgba(27,24,20,.10) 100%)',
              mixBlendMode: 'multiply',
            }}
          />
        )}
      </div>
    )
  }

  // ── Branded placeholder (decorative; swapped for real photography) ──────────
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        ...wrapperStyle,
        background:
          'linear-gradient(135deg, var(--paper-2) 0%, var(--paper-3) 45%, var(--accent-tint) 100%)',
      }}
      aria-hidden="true"
    >
      {/* Concentric editorial motif */}
      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12 }}
      >
        <circle cx="100" cy="100" r="78" fill="none" stroke="var(--accent)" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="54" fill="none" stroke="var(--accent)" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="var(--accent)" strokeWidth="0.6" />
      </svg>
      {label && (
        <span
          className="relative z-10 font-mono uppercase tracking-[0.18em] text-center px-4"
          style={{ fontSize: '0.6875rem', color: 'var(--mid)' }}
        >
          {label}
        </span>
      )}
    </div>
  )
}
