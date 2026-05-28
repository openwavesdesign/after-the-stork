interface EyebrowProps {
  children: React.ReactNode
  className?: string
  center?: boolean
  dark?: boolean
}

export default function Eyebrow({ children, className = '', center = false, dark = false }: EyebrowProps) {
  const color = dark ? 'var(--accent-soft)' : 'var(--accent)'
  return (
    <div
      className={`flex items-center gap-3 ${center ? 'justify-center' : ''} ${className}`}
      style={{ marginBottom: '1.375rem' }}
    >
      <span
        aria-hidden="true"
        style={{ display: 'inline-block', width: '28px', height: '1px', background: color, flexShrink: 0 }}
      />
      <span
        className="font-mono uppercase tracking-[0.22em]"
        style={{ fontSize: '0.625rem', color }}
      >
        {children}
      </span>
    </div>
  )
}
