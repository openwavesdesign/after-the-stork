interface EyebrowProps {
  children: React.ReactNode
  className?: string
  center?: boolean
}

export default function Eyebrow({ children, className = '', center = false }: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-[10px] ${center ? 'justify-center' : ''} ${className}`}
    >
      <span className="text-mid" style={{ fontSize: '6px' }}>◆</span>
      <span
        className="font-mono text-mid uppercase tracking-[0.2em]"
        style={{ fontSize: '9px' }}
      >
        {children}
      </span>
    </div>
  )
}
