import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'ProEmails — Email SaaS Platform',
  description:
    'Case study: Four-application email SaaS with a two-thousand-domain marketplace, AI-powered composition, admin portal with CRM, and one-hundred-and-eighty-seven-endpoint API.',
  alternates: { canonical: 'https://jacobwelsh.dev/sites/proemails' },
  openGraph: {
    title: 'ProEmails — Email SaaS Platform — Jacob Welsh',
    description:
      'Email SaaS platform with domain marketplace, AI composition, admin portal with CRM, and comprehensive API.',
    url: 'https://jacobwelsh.dev/sites/proemails',
  },
}
import { ProEmailsArchitecture } from '@/components/diagrams/ProEmailsArchitecture'
import { ScreenshotReel } from '@/components/ScreenshotReel'

const overviewSlides = [
  { label: 'Landing — domain marketplace with availability search', image: undefined },
  { label: 'Dashboard — inbox with AI composition sidebar', image: undefined },
  { label: 'Compose — AI-powered editor with tone selection', image: undefined },
  { label: 'Admin — Stripe revenue and MRR dashboard', image: undefined },
  { label: 'Admin — domain portfolio with health scoring', image: undefined },
]

const dashboardSlides = [
  { label: 'Inbox — email list with keyboard shortcuts', image: undefined },
  { label: 'AI assistant — smart compose with tone selection', image: undefined },
  { label: 'Email tracking — open and click analytics', image: undefined },
]

const adminSlides = [
  { label: 'Revenue dashboard — MRR and subscription metrics', image: undefined },
  { label: 'Domain management — health scoring and DNS config', image: undefined },
  { label: 'CRM — contact database with lead scoring', image: undefined },
]

const platformModules = [
  {
    group: 'Landing and Checkout',
    items: [
      'Domain Marketplace — two thousand premium domains with real-time availability checking and search',
      'Pricing and Plans — three subscription tiers with monthly and yearly billing via Stripe',
      'Purchase Flow — domain selection, email configuration, Stripe checkout, and webhook provisioning',
      'Marketing — feature showcase, competitor comparison table, FAQ, and trust indicators',
    ],
  },
  {
    group: 'Customer Dashboard — 27 Pages',
    items: [
      'Email Client — inbox, compose, sent, drafts, archive, trash, starred, scheduled, and category folders',
      'AI Composition — Claude-powered email writing with six tone options, smart replies, and improvement suggestions',
      'Email Tracking — real-time open and click tracking with device detection and geographic data',
      'Analytics and Contacts — engagement metrics, send-time optimisation, contact management, and storage monitoring',
    ],
  },
  {
    group: 'Admin Portal — 11 Routes',
    items: [
      'Revenue Dashboard — Stripe MRR and ARR tracking, subscription lifecycle, churn analysis, and forecasting',
      'Domain Management — portfolio health scoring, DNS configuration, email provisioning, and sender reputation',
      'CRM System — contact database with CSV import, lead scoring, bulk operations, and segmentation',
      'Campaign Orchestration — Instantly integration, workflow builder, sequence editor, and A/B testing',
    ],
  },
  {
    group: 'API and Infrastructure',
    items: [
      'Express API — one hundred and eighty-seven endpoints across forty-five route modules with rate limiting and audit logging',
      'Authentication — JWT tokens, Supabase Auth, Google and Microsoft OAuth with AES-256-GCM token encryption',
      'Email Services — multi-provider delivery through Mailgun, SMTP, Gmail API, and Microsoft Graph with queue processing',
      'Database — Supabase PostgreSQL with thirty-plus tables, row-level security, eight migrations, and background jobs',
    ],
  },
]

export default function ProEmailsCaseStudy() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="container pt-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xs uppercase tracking-wider text-tertiary hover:text-primary transition-colors duration-500 font-body"
          >
            Jacob Welsh
          </Link>
          <Link
            href="/sites"
            className="text-xs uppercase tracking-wider text-tertiary hover:text-primary transition-colors duration-500 font-body"
          >
            Sites
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="container pt-[15vh] pb-16 md:pb-24">
        <Reveal>
          <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-6">
            Email Platform
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-hero font-display text-primary mb-8">
            ProEmails
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-body-lg text-secondary font-body max-w-wide">
            A four-application email SaaS platform&mdash;marketing website
            with a two-thousand-domain marketplace and Stripe checkout,
            twenty-seven-page customer dashboard with AI-powered email
            composition and real-time open and click tracking, admin portal
            with Stripe revenue analytics, domain portfolio management, and
            CRM operations, and a one-hundred-and-eighty-seven-endpoint
            Express API connecting thirteen external integrations across
            payments, email delivery, OAuth providers, and AI.
          </p>
        </Reveal>
      </section>

      {/* Architecture Diagram */}
      <Reveal delay={300}>
        <section className="container pb-24">
          <ProEmailsArchitecture />
        </section>
      </Reveal>

      {/* Narrative */}
      <section className="container pb-24">
        <div className="max-w-content">
          <Reveal>
            <p className="text-body-lg text-secondary font-body">
              Most email platforms are either too simple&mdash;forwarding
              addresses with no interface&mdash;or too expensive, locking
              features behind enterprise contracts. ProEmails fills the gap
              with a full email client that gives users a professional
              address on a premium domain, AI-powered composition, and
              real-time tracking, all through a single subscription starting
              at nine dollars a month.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-body-lg text-secondary font-body">
              The platform spans four interconnected applications. A
              marketing site with an embedded domain marketplace lets
              visitors search two thousand domains, check availability, and
              complete checkout through Stripe. On purchase, a webhook
              triggers automated email provisioning&mdash;creating the
              account, configuring DNS, and generating SMTP credentials.
              The customer dashboard provides twenty-seven pages of email
              management including AI composition through Claude, smart
              reply suggestions, tone analysis, and real-time open and
              click tracking. An admin portal surfaces Stripe revenue
              metrics, domain health scores, CRM operations, and campaign
              orchestration. A one-hundred-and-eighty-seven-endpoint
              Express API connects everything through thirteen external
              integrations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Overview Reel */}
      <Reveal>
        <section className="container pb-24">
          <ScreenshotReel slides={overviewSlides} className="aspect-[21/9]" />
        </section>
      </Reveal>

      {/* ─── Stats ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          <Reveal>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                187
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                API endpoints
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                13
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                external integrations
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                27
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                dashboard pages
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                30+
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                database tables
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Deep: Customer Dashboard ─── */}
      <section className="container pb-24">
        <div className="max-w-wide">
          <Reveal>
            <h2 className="text-title font-display text-primary mb-6">
              Customer Dashboard
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-body text-secondary font-body max-w-content mb-12">
              The dashboard is a twenty-seven-page email client built with
              eighty-six React components, two Zustand state stores, and
              eight custom hooks. The inbox supports search with suggestions,
              advanced filtering by date range, attachments, and labels,
              bulk operations across selected emails, and keyboard shortcuts
              for navigation, starring, archiving, and deletion. Emails are
              organised across twelve folder views including inbox, sent,
              drafts, outbox, archive, trash, starred, scheduled, important,
              newsletters, social, and updates.
            </p>
          </Reveal>

          {/* AI features grid */}
          <Reveal delay={160}>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-12">
              {[
                { label: 'Professional', desc: 'Tone' },
                { label: 'Friendly', desc: 'Tone' },
                { label: 'Formal', desc: 'Tone' },
                { label: 'Casual', desc: 'Tone' },
                { label: 'Assertive', desc: 'Tone' },
                { label: 'Empathetic', desc: 'Tone' },
              ].map((tone) => (
                <div
                  key={tone.label}
                  className="border border-border px-3 py-3 text-center"
                >
                  <p className="text-small text-primary font-body">
                    {tone.label}
                  </p>
                  <p className="text-xs text-tertiary font-body mt-1">
                    {tone.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-body text-secondary font-body max-w-content">
              AI composition runs through Claude with six tone options
              and four length presets. Smart reply generates context-aware
              response suggestions, a tone analyser evaluates and improves
              email language, and an AI sorter automatically categorises
              incoming mail. Real-time tracking records email opens via
              tracking pixel, link clicks through URL rewriting, and
              device and geographic data for each recipient interaction.
              An analytics dashboard visualises open rates, click-through
              rates, best send times, and top engaged contacts through
              Recharts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Screenshot Pair: Dashboard + Admin */}
      <Reveal>
        <section className="container pb-24">
          <div className="grid md:grid-cols-2 gap-4">
            <ScreenshotReel
              slides={dashboardSlides}
              className="aspect-[4/3]"
              interval={3500}
            />
            <ScreenshotReel
              slides={adminSlides}
              className="aspect-[4/3]"
              interval={4500}
            />
          </div>
        </section>
      </Reveal>

      {/* ─── Deep: API & Infrastructure ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScreenshotReel
              slides={[
                { label: 'Domain marketplace — availability checking' },
                { label: 'Stripe checkout — plan selection' },
                { label: 'Purchase success — email provisioned' },
              ]}
              className="aspect-[4/3]"
              interval={3500}
            />
            <div>
              <h2 className="text-title font-display text-primary mb-4">
                API &amp; Email Infrastructure
              </h2>
              <p className="text-body text-secondary font-body">
                The Express API spans one hundred and eighty-seven endpoints
                across forty-five route modules, secured by JWT authentication,
                rate limiting, and a full audit logger. Email provisioning
                is automated through a webhook pipeline&mdash;when Stripe
                confirms payment, the system creates the email account via
                the partner API, configures DNS records through Synergy,
                generates SMTP credentials, and dispatches confirmation
                emails through Mailgun.
              </p>
              <p className="mt-4 text-body text-secondary font-body">
                OAuth flows for Gmail and Microsoft use PKCE with
                AES-256-GCM encrypted token storage, enabling the
                bring-your-own-account model where users connect existing
                email accounts. A queue processor handles bulk email
                sending with natural timing patterns, IP warming
                integration, and rate limiting per sender account. Eleven
                business logic services cover AI composition, spam
                checking, SMTP reliability with circuit breakers,
                provider detection, and template rendering.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Endpoint category count grid */}
        <Reveal delay={120}>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-12">
            {[
              { label: 'Email Mgmt', count: '22' },
              { label: 'Admin', count: '23' },
              { label: 'Analytics', count: '14' },
              { label: 'Auth + OAuth', count: '11' },
              { label: 'AI Features', count: '9' },
              { label: 'Tracking', count: '8' },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-border px-4 py-3 text-center"
              >
                <p className="font-display text-primary text-lg">
                  {item.count}
                </p>
                <p className="text-xs tracking-wider text-tertiary font-body uppercase mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ─── Deep: Admin & Revenue ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-title font-display text-primary mb-4">
                Admin Portal &amp; Revenue Operations
              </h2>
              <p className="text-body text-secondary font-body">
                The admin portal provides thirty-nine components across
                eleven routes for managing every aspect of the business.
                A Stripe revenue dashboard tracks monthly and annual
                recurring revenue, subscription lifecycle stages, churn
                analysis, and customer lifetime value. Domain portfolio
                management monitors health scores across two thousand
                domains&mdash;checking sender reputation, SSL expiry,
                DNS configuration, and blacklist status.
              </p>
              <p className="mt-4 text-body text-secondary font-body">
                A CRM system manages contacts with CSV import, lead
                scoring, lifecycle tracking, and bulk operations. Campaign
                orchestration integrates with Instantly for multi-channel
                outreach with sequence building, A/B testing, and
                performance monitoring. A workflow builder provides
                drag-and-drop automation with trigger-action-condition
                logic. Google Analytics 4 and Clarity dashboards surface
                real-time visitor data, traffic sources, and session
                replays.
              </p>
            </div>
            <ScreenshotReel
              slides={[
                { label: 'Workflow builder — drag-and-drop automation' },
                { label: 'Campaign performance — open and reply rates' },
                { label: 'Email provisioning — account status dashboard' },
              ]}
              className="aspect-[4/3]"
              interval={4000}
            />
          </div>
        </Reveal>

        {/* Integration grid */}
        <Reveal delay={120}>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-12">
            {[
              { label: 'Stripe' },
              { label: 'Mailgun' },
              { label: 'Gmail API' },
              { label: 'Outlook' },
              { label: 'Claude AI' },
              { label: 'OpenAI' },
              { label: 'GA4' },
              { label: 'Inngest' },
              { label: 'Synergy' },
              { label: 'Cloudflare' },
            ].map((svc) => (
              <div
                key={svc.label}
                className="border border-border px-3 py-3 text-center"
              >
                <p className="text-xs tracking-wider text-tertiary font-body uppercase">
                  {svc.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ─── Complete Platform ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>
        <Reveal>
          <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-16">
            Complete Platform
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {platformModules.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 80}>
              <div>
                <h3 className="text-small font-body font-medium text-primary mb-5">
                  {group.group}
                </h3>
                <div className="space-y-4">
                  {group.items.map((item, ii) => {
                    const [name, desc] = item.split(' — ')
                    return (
                      <div
                        key={ii}
                        className="flex items-baseline gap-4 pb-4 border-b border-border"
                      >
                        <span className="text-xs text-tertiary font-body tabular-nums w-4 shrink-0">
                          {gi * 4 + ii + 1}
                        </span>
                        <div>
                          <span className="text-small text-primary font-body">
                            {name}
                          </span>
                          <span className="text-small text-tertiary font-body">
                            {' '}&mdash; {desc}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Metadata */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-12">
            <div className="flex flex-wrap gap-x-16 gap-y-6 text-small font-body">
              <div>
                <p className="text-tertiary mb-1">Role</p>
                <p className="text-primary">Sole Developer</p>
              </div>
              <div>
                <p className="text-tertiary mb-1">Timeline</p>
                <p className="text-primary">2024 &mdash; Present</p>
              </div>
              <div>
                <p className="text-tertiary mb-1">Stack</p>
                <p className="text-primary">
                  React, Express, TypeScript, Supabase, Stripe, Claude AI
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Back to Sites */}
      <section className="container pb-24">
        <Link href="/sites" className="group block">
          <Reveal>
            <div className="border-t border-border pt-12">
              <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-4">
                Back
              </p>
              <h3 className="text-display font-display text-primary group-hover:text-secondary transition-colors duration-500">
                All Sites{' '}
                <span className="text-tertiary group-hover:text-secondary transition-colors duration-500">
                  &rarr;
                </span>
              </h3>
            </div>
          </Reveal>
        </Link>
      </section>
    </main>
  )
}
