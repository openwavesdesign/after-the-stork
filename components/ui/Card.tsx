import React from 'react'

interface CardProps {
  children: React.ReactNode
  cardNumber?: string
  className?: string
  compact?: boolean
}

export default function Card({ children, cardNumber, className = '', compact = false }: CardProps) {
  return (
    <div
      className={`border border-stroke bg-paper ${compact ? 'p-5' : 'p-8'} ${className}`}
    >
      {cardNumber && (
        <div
          className="font-serif text-ghost mb-4 leading-none"
          style={{ fontSize: '2.25rem' }}
          aria-hidden="true"
        >
          {cardNumber}
        </div>
      )}
      {children}
    </div>
  )
}
