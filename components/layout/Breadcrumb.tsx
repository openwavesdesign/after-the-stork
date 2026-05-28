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
      className="flex items-center gap-2 font-mono text-muted"
      style={{ fontSize: '0.75rem' }}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-2 list-none">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">·</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-dim transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-dim" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
