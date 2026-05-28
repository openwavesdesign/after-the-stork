interface SectionBadgeProps {
  label: string
  dark?: boolean
}

export default function SectionBadge({ label, dark = false }: SectionBadgeProps) {
  return (
    <div
      className={`absolute top-0 left-0 font-mono uppercase tracking-[0.16em] border-b border-r ${
        dark
          ? 'bg-white/10 text-white/60 border-white/20'
          : 'bg-ghost text-mid border-stroke'
      }`}
      style={{ fontSize: '8px', padding: '5px 10px' }}
    >
      {label}
    </div>
  )
}
