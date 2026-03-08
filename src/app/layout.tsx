import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jacobwelsh.dev'),
  title: {
    default: 'Jacob Welsh — Software Engineer',
    template: '%s — Jacob Welsh',
  },
  description:
    'I design and engineer platforms for industries where the details matter — legal, healthcare, and property.',
  keywords: [
    'software engineer',
    'full-stack developer',
    'React',
    'Next.js',
    'TypeScript',
    'Supabase',
    'legal technology',
    'healthcare platform',
    'property intelligence',
    'Gold Coast',
    'Australia',
  ],
  authors: [{ name: 'Jacob Welsh', url: 'https://jacobwelsh.dev' }],
  creator: 'Jacob Welsh',
  openGraph: {
    title: 'Jacob Welsh — Software Engineer',
    description:
      'I design and engineer platforms for industries where the details matter — legal, healthcare, and property.',
    url: 'https://jacobwelsh.dev',
    siteName: 'Jacob Welsh',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacob Welsh — Software Engineer',
    description:
      'I design and engineer platforms for industries where the details matter — legal, healthcare, and property.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://jacobwelsh.dev',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jacob Welsh',
  url: 'https://jacobwelsh.dev',
  email: 'hello@jacobwelsh.dev',
  jobTitle: 'Software Engineer',
  description:
    'I design and engineer platforms for industries where the details matter — legal, healthcare, and property.',
  sameAs: [
    'https://www.linkedin.com/in/jacob-welsh-566a35283/',
    'https://github.com/jacobwelsh92',
    'https://github.com/RytzAU',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Supabase',
    'AI Orchestration',
    'Systems Architecture',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
