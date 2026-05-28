interface EyebrowProps {
  children: React.ReactNode
  className?: string
  center?: boolean
}

export default function Eyebrow({ children, className = '', center = false }: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-[0.625rem] ${center ? 'justify-center' : ''} ${className}`}
    >
      <span className="text-mid" style={{ fontSize: '0.5rem' }} aria-hidden="true">◆</span>
      <span
        className="font-mono text-mid uppercase tracking-[0.2em]"
        style={{ fontSize: '0.6875rem' }}
      >
        {children}
      </span>
    </div>
  )
}
