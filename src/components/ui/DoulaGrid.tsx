import { useState } from 'react'
import type { Doula } from '@/types'

interface DoulaGridProps {
  doulas: Doula[]
}

const AREA_FILTERS = ['All', 'Philadelphia', 'Main Line', 'Bucks County', 'New Jersey']

export default function DoulaGrid({ doulas }: DoulaGridProps) {
  const [selected, setSelected] = useState('All')

  const filtered = selected === 'All' ? doulas : doulas.filter(d => d.areas.includes(selected))

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

      {filtered.length === 0 ? (
        <div
          className="text-center"
          style={{ padding: '4rem 0', color: 'var(--dim)', fontSize: '0.9375rem' }}
        >
          We don&rsquo;t have a doula listed for {selected} yet &mdash;{' '}
          <a href="/contact" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
            contact us
          </a>{' '}
          and we&rsquo;ll match you with the right team member.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((doula) => {
            const areas = doula.areas.slice(0, 3).join(' · ')

            return (
              <div
                key={doula.id}
                className="border bg-paper overflow-hidden transition-colors border-stroke hover:border-accent"
              >
                {doula.photo ? (
                  <div
                    className="media-frame media-zoom w-full"
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
                ) : (
                  <div
                    className="relative flex items-center justify-center overflow-hidden w-full"
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
                )}
                <div style={{ padding: '28px', borderTop: 'var(--rule-soft)' }}>
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
                  <p className="mt-4" style={{ fontSize: '0.875rem', color: 'var(--dim)', lineHeight: '1.7' }}>
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
            )
          })}
        </div>
      )}
    </>
  )
}
