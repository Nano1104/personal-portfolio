import type { Metadata, Viewport } from 'next'
import { Fraunces, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

// ─────────────────────────────────────────
// FONTS — loaded at build time, zero layout shift
// ─────────────────────────────────────────
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  axes: ['opsz'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400'],
})

// ─────────────────────────────────────────
// METADATA & SEO
// Update `metadataBase` with your real domain before deploying.
// ─────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://marianogil.dev'), // ← update with your domain
  title: {
    default: 'Mariano Nicolas Gil — Fullstack Developer',
    template: '%s | Mariano Gil',
  },
  description:
    'Fullstack developer based in Buenos Aires, building production web applications with React, Next.js, and Node.js. Available for remote work.',
  keywords: [
    'fullstack developer',
    'react developer',
    'next.js',
    'node.js',
    'buenos aires',
    'remote',
    'web developer',
  ],
  authors: [{ name: 'Mariano Nicolas Gil' }],
  creator: 'Mariano Nicolas Gil',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marianogil.dev',
    siteName: 'Mariano Gil',
    title: 'Mariano Nicolas Gil — Fullstack Developer',
    description:
      'Fullstack developer based in Buenos Aires, building production web applications.',
    // Add an OG image: /public/og-image.png (1200×630px recommended)
    // images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Mariano Gil' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mariano Nicolas Gil — Fullstack Developer',
    description: 'Fullstack developer based in Buenos Aires.',
    // images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  themeColor: '#0C0C0A',
}

// ─────────────────────────────────────────
// LAYOUT
// ─────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
