import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Mono, Inter } from 'next/font/google'
import '@/styles/globals.css'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.afterthestork.info'),
  title: {
    default: 'After the Stork — Philadelphia Postpartum Doula & Newborn Care',
    template: '%s | After the Stork',
  },
  description:
    'Philadelphia and the Main Line’s premier and longest-running postpartum doula agency since 2006. Expert overnight postpartum doula and newborn care, founded by Georgette Kerr.',
  openGraph: {
    type: 'website',
    siteName: 'After the Stork',
    locale: 'en_US',
    title: 'After the Stork — Philadelphia Postpartum Doula & Newborn Care',
    description:
      'Philadelphia and the Main Line’s premier and longest-running postpartum doula agency since 2006.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'After the Stork — Philadelphia Postpartum Doula & Newborn Care',
    description:
      'Philadelphia and the Main Line’s premier and longest-running postpartum doula agency since 2006.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmMono.variable} ${inter.variable}`}>
      <body>
        {/* Ensure reveal-animated content is visible when JS is unavailable */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
