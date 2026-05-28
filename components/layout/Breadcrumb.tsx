import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      className="flex items-center gap-2 font-mono text-stroke"
      style={{ fontSize: '9px' }}
      aria-label="Breadcrumb"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true">·</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-dim transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-dim">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
