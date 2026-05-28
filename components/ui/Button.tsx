import Link from 'next/link'
import React from 'react'

type ButtonVariant = 'default' | 'ghost' | 'inverse' | 'fill'

interface ButtonProps {
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const variantClasses: Record<ButtonVariant, string> = {
  default: 'border border-ink text-ink hover:bg-ink hover:text-paper',
  ghost: 'border border-stroke text-dim hover:border-ink hover:text-ink',
  inverse: 'border border-white/40 text-paper hover:border-white',
  fill: 'bg-ink text-paper border border-ink hover:bg-dim',
}

export default function Button({
  variant = 'default',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-[0.625rem] font-mono uppercase tracking-[0.16em] transition-colors duration-150'
  const style = { fontSize: '0.75rem', padding: '0.8125rem 2rem' }
  const classes = `${base} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {children}
        <span aria-hidden="true">→</span>
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={style}>
      {children}
      <span aria-hidden="true">→</span>
    </button>
  )
}
