import { useEffect, useState } from 'react'
import type { Doula } from '@/types'

interface DoulaGridProps {
  doulas: Doula[]
}

const AREA_FILTERS = ['All', 'Philadelphia', 'Main Line', 'Bucks County', 'New Jersey']

function DoulaPhoto({ doula, className }: { doula: Doula; className?: string }) {
  if (doula.photo) {
    return (
      <div
        className={`media-frame media-zoom w-full ${className ?? ''}`}
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'var(--paper-3)',
          aspectRatio: '3/4',
        }}
      >
        <img
          src={doula.photo}
          alt={`${doula.name}, ${doula.title}`}
          style={{ objectFit: 'cover', width: '100%', height: '100%', display: 'block' }}
        />
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(34,64,104,.04) 0%, rgba(27,24,20,.10) 100%)',
            mixBlendMode: 'multiply',
            pointerEvents: 'none',
          }}
        />
      </div>
    )
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden w-full ${className ?? ''}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--paper-3)',
        aspectRatio: '3/4',
        background: 'linear-gradient(135deg, var(--paper-2) 0%, var(--paper-3) 45%, var(--accent-tint) 100%)',
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12 }}
      >
        <circle cx="100" cy="100" r="78" fill="none" stroke="var(--accent)" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="54" fill="none" stroke="var(--accent)" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="var(--accent)" strokeWidth="0.6" />
      </svg>
      <span
        className="relative z-10 font-mono uppercase tracking-[0.18em] text-center px-4"
        style={{ fontSize: '0.6875rem', color: 'var(--mid)' }}
      >
        {doula.name}
      </span>
    </div>
  )
}

function DoulaModal({ doula, onClose }: { doula: Doula; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  const areas = doula.areas.join(' · ')

  return (
    <div
      role="presentation"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(27,24,20,.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={doula.name}
        onClick={(e) => e.stopPropagation()}
        className="bg-paper"
        style={{
          position: 'relative',
          maxWidth: '760px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 280px) 1fr',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '32px',
            height: '32px',
            border: '1px solid var(--stroke)',
            background: 'var(--paper)',
            color: 'var(--ink)',
            fontSize: '1.125rem',
            lineHeight: 1,
            cursor: 'pointer',
            zIndex: 1,
          }}
        >
          ×
        </button>

        <DoulaPhoto doula={doula} />

        <div style={{ padding: '32px' }}>
          <p className="font-serif text-ink font-light text-h3">{doula.name}</p>
          <p
            className="font-mono uppercase tracking-[0.22em] mt-2"
            style={{ fontSize: '0.75rem', color: 'var(--accent)' }}
          >
            {doula.title}
          </p>
          <p className="font-mono mt-1" style={{ fontSize: '0.75rem', color: 'var(--mid)', letterSpacing: '.1em' }}>
            {doula.credentials}
          </p>
          <p className="mt-4" style={{ fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: '1.75' }}>
            {doula.bio}
          </p>
          <p
            className="font-mono uppercase tracking-[0.14em] mt-4 flex items-center gap-2"
            style={{ fontSize: '0.75rem', color: 'var(--mid)' }}
          >
            <span aria-hidden="true">◎</span>
            {areas}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function DoulaGrid({ doulas }: DoulaGridProps) {
  const [selected, setSelected] = useState('All')
  const [openDoula, setOpenDoula] = useState<Doula | null>(null)
  const [visible, setVisible] = useState(true)

  const filtered = selected === 'All' ? doulas : doulas.filter(d => d.areas.includes(selected))
  const [displayed, setDisplayed] = useState(filtered)

  useEffect(() => {
    setVisible(false)
    const timeout = setTimeout(() => {
      setDisplayed(filtered)
      setVisible(true)
    }, 220)
    return () => clearTimeout(timeout)
  }, [selected])

  return (
    <>
      <div className="flex justify-start mb-12">
        <div className="flex gap-2 font-mono uppercase tracking-[0.18em] flex-wrap" style={{ fontSize: '0.75rem' }}>
          {AREA_FILTERS.map((area) => {
            const isActive = selected === area
            return (
              <button
                key={area}
                type="button"
                onClick={() => setSelected(area)}
                aria-pressed={isActive}
                style={{
                  padding: '6px 14px',
                  border: `1px solid ${isActive ? 'var(--ink)' : 'var(--stroke)'}`,
                  color: isActive ? 'var(--ink)' : 'var(--dim)',
                  background: 'none',
                  cursor: 'pointer',
                }}
              >
                {area}
              </button>
            )
          })}
        </div>
      </div>

      {displayed.length === 0 ? (
        <div
          className="text-center"
          style={{
            padding: '4rem 0',
            color: 'var(--dim)',
            fontSize: '0.9375rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(6px)',
            transition: 'opacity .22s ease, transform .22s cubic-bezier(.2,.6,.2,1)',
          }}
        >
          We don&rsquo;t have a doula listed for {selected} yet &mdash;{' '}
          <a href="/contact" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
            contact us
          </a>{' '}
          and we&rsquo;ll match you with the right team member.
        </div>
      ) : (
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(6px)',
            transition: 'opacity .22s ease, transform .22s cubic-bezier(.2,.6,.2,1)',
          }}
        >
          {displayed.map((doula) => (
            <button
              key={doula.id}
              type="button"
              onClick={() => setOpenDoula(doula)}
              className="border bg-paper overflow-hidden transition-colors border-stroke hover:border-accent text-left"
            >
              <DoulaPhoto doula={doula} />
              <div style={{ padding: '16px', borderTop: 'var(--rule-soft)' }}>
                <p className="font-serif text-ink font-light" style={{ fontSize: '1.0625rem' }}>
                  {doula.name}
                </p>
                <p
                  className="font-mono uppercase tracking-[0.18em] mt-1"
                  style={{ fontSize: '0.6875rem', color: 'var(--accent)' }}
                >
                  {doula.areas[0]}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {openDoula && <DoulaModal doula={openDoula} onClose={() => setOpenDoula(null)} />}
    </>
  )
}
