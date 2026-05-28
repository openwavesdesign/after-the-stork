export interface Doula {
  id: string
  name: string
  title: string
  credentials: string
  bio: string
  photo: string | null
  areas: string[]
  active: boolean
  order: number
  isLeadership: boolean
}

export interface Service {
  id: string
  name: string
  tagline: string
  hours: string
  shortDescription: string
  fullDescription: string
  active: boolean
  order: number
}

export interface Testimonial {
  id: string
  quote: string
  attribution: string
  active: boolean
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQCategory {
  category: string
  slug: string
  items: FAQItem[]
}

export interface NavLink {
  label: string
  href: string
}

export interface NavSection {
  label: string
  links: NavLink[]
}

export interface Navigation {
  primary: NavLink[]
  footer: NavSection[]
}

export interface BlogPost {
  title: string
  slug: string
  author: string
  category: string
  date: string
  readingTime: string
  featuredImage: string | null
  metaDescription: string
  active: boolean
}

export interface ResourceItem {
  title: string
  type: string
  source: string
}

export interface ResourceCategory {
  category: string
  items: ResourceItem[]
}
