'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
  isLast?: boolean
}

export default function FAQItem({ question, answer, isLast = false }: FAQItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        borderTop: 'var(--rule-soft)',
        borderBottom: isLast ? 'var(--rule-soft)' : undefined,
      }}
    >
      <button
        className="w-full flex items-start justify-between gap-8 text-left"
        style={{ padding: '1.75rem 0' }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h3
          className="font-serif text-ink"
          style={{ fontSize: '1.5rem', fontWeight: 400, letterSpacing: '-0.005em', lineHeight: 1.3, flex: 1 }}
        >
          {question}
        </h3>
        <span
          className="font-serif flex-shrink-0"
          style={{
            fontSize: '1.5rem',
            color: 'var(--accent)',
            fontWeight: 300,
            lineHeight: 1,
            marginTop: '4px',
            transition: 'transform 0.3s',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            display: 'inline-block',
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease, padding 0.4s ease',
          paddingBottom: open ? '1.75rem' : '0',
        }}
      >
        <p
          className="text-dim"
          style={{ fontSize: '0.9375rem', lineHeight: '1.75', maxWidth: '720px' }}
        >
          {answer}
        </p>
      </div>
    </div>
  )
}
