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
// Temporary: production Vercel URL until a custom domain is configured.
// ─────────────────────────────────────────
const SITE_URL = 'https://personal-portfolio-virid-alpha.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Mariano Nicolas Gil — Desarrollador fullstack',
    template: '%s | Mariano Gil',
  },
  description:
    'Desarrollador fullstack en Buenos Aires. Construyo aplicaciones web en producción con React, Next.js y Node.js. Disponible para trabajo remoto y proyectos freelance.',
  keywords: [
    'desarrollador fullstack',
    'desarrollador react',
    'next.js',
    'node.js',
    'buenos aires',
    'remoto',
    'desarrollador web',
  ],
  authors: [{ name: 'Mariano Nicolas Gil' }],
  creator: 'Mariano Nicolas Gil',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: SITE_URL,
    siteName: 'Mariano Gil',
    title: 'Mariano Nicolas Gil — Desarrollador fullstack',
    description:
      'Desarrollador fullstack en Buenos Aires. Construyo aplicaciones web en producción para negocios reales.',
    // Add an OG image: /public/og-image.png (1200×630px recommended)
    // images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Mariano Gil' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mariano Nicolas Gil — Desarrollador fullstack',
    description: 'Desarrollador fullstack en Buenos Aires.',
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
      lang="es"
      className={`${fraunces.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
