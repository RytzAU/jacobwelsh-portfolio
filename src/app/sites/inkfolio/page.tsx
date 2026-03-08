import type { Metadata } from 'next'
import { Reveal } from '@/components/Reveal'
import { InkfolioArchitecture } from '@/components/diagrams/InkfolioArchitecture'

export const metadata: Metadata = {
  title: 'Inkfolio — Tattoo Platform',
  description:
    'Case study: Full-stack tattoo artist platform with forty-four routes, nine-status project lifecycle, real-time messaging, Stripe payments, Calendly booking, and automated email workflows.',
  alternates: { canonical: 'https://jacobwelsh.dev/sites/inkfolio' },
  openGraph: {
    title: 'Inkfolio — Tattoo Platform — Jacob Welsh',
    description:
      'Full-stack portfolio, booking, and client management platform for a tattoo studio. Built with Next.js 16, Supabase, Stripe, and Calendly.',
    url: 'https://jacobwelsh.dev/sites/inkfolio',
  },
}
import { InkfolioHero } from '@/components/case-studies/inkfolio/InkfolioHero'
import { InkfolioNarrative } from '@/components/case-studies/inkfolio/InkfolioNarrative'
import { InkfolioDeepDives } from '@/components/case-studies/inkfolio/InkfolioDeepDives'
import { InkfolioPlatform } from '@/components/case-studies/inkfolio/InkfolioPlatform'
import { InkfolioMeta } from '@/components/case-studies/inkfolio/InkfolioMeta'

const platformModules = [
  {
    group: 'Public Marketing Site',
    items: [
      'Portfolio Gallery — filterable work across fourteen tattoo styles',
      'Blog — eight MDX articles with rich media and SEO',
      'Booking Flow — structured enquiry form with style and placement selection',
      'Studio Guide — location, hours, preparation, and aftercare information',
    ],
  },
  {
    group: 'Client Portal',
    items: [
      'Project Tracker — real-time status through nine lifecycle stages',
      'Messaging — dual-channel conversations with the artist',
      'Digital Waiver — electronic consent forms with PDF generation',
      'Documents — invoices, receipts, and aftercare instructions',
    ],
  },
  {
    group: 'Artist Admin Dashboard',
    items: [
      'Client Management — CRM with source attribution and lifetime spend',
      'Project Pipeline — visual pipeline with status management',
      'Financial Dashboard — revenue reporting, invoices, and payment tracking',
      'Calendar & Waitlist — Calendly-synced schedule and demand management',
    ],
  },
  {
    group: 'Infrastructure',
    items: [
      'Payments — Stripe integration with deposits, invoices, and receipts',
      'Email Automation — five cron jobs powering reminders and aftercare',
      'Real-time Messaging — Supabase Realtime with presence indicators',
      'Database — PostgreSQL with thirteen RLS-protected tables and Sentry monitoring',
    ],
  },
]

export default function InkfolioCaseStudy() {
  return (
    <main className="min-h-screen">
      <InkfolioHero />

      <Reveal delay={300}>
        <section className="container pb-24">
          <InkfolioArchitecture />
        </section>
      </Reveal>

      <InkfolioNarrative />

      {/* Stats */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>
        <div className="max-w-wide grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { value: '44', label: 'Routes across marketing, portal, admin, and API' },
            { value: '13', label: 'Database tables with row-level security' },
            { value: '9', label: 'Statuses in the project lifecycle state machine' },
            { value: '5', label: 'Automated cron jobs for email workflows' },
          ].map((stat, i) => (
            <Reveal key={stat.value} delay={i * 80}>
              <div>
                <p
                  className="font-display text-primary leading-none"
                  style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}
                >
                  {stat.value}
                </p>
                <p className="mt-3 text-small text-tertiary font-body">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <InkfolioDeepDives />
      <InkfolioPlatform modules={platformModules} />
      <InkfolioMeta />
    </main>
  )
}
