import Link from 'next/link'
import { Reveal } from '@/components/Reveal'
import { ShakeEcosystem } from '@/components/diagrams/ShakeEcosystem'
import { ScreenshotReel } from '@/components/ScreenshotReel'

const pipelineStages = ['Session', 'Validation', 'Invoice', 'Sync', 'Reconciliation']

const overviewSlides = [
  { label: 'Admin dashboard — practice overview', image: undefined },
  { label: 'Multi-practitioner calendar', image: undefined },
  { label: 'Invoice management', image: undefined },
  { label: 'Client profiles', image: undefined },
  { label: 'Financial intelligence hub', image: undefined },
]

const schedulingSlides = [
  { label: 'Week view — all practitioners', image: undefined },
  { label: 'Appointment creation modal', image: undefined },
  { label: 'Outlook calendar sync', image: undefined },
]

const financialSlides = [
  { label: 'Revenue dashboard', image: undefined },
  { label: 'Reconciliation report', image: undefined },
  { label: 'Cash flow projections', image: undefined },
]

const clinicalSlides = [
  { label: 'Progress notes library', image: undefined },
  { label: 'Session documentation', image: undefined },
  { label: 'Clinical assessments', image: undefined },
]

const platformModules = [
  {
    group: 'Practice Operations',
    items: [
      'Dashboard — role-aware analytics with practitioner and admin views',
      'Calendar — multi-practitioner scheduling with drag-drop and external calendar sync',
      'Sessions — status tracking, bulk operations, and automated billing flags',
      'Clients — profiles, NDIS tracking, clinical assessments, and intake workflows',
    ],
  },
  {
    group: 'Financial Management',
    items: [
      'Invoicing — multi-workflow generation with validation pipeline and accounting sync',
      'Financial Intelligence — real-time revenue, profitability, and cash flow analytics',
      'Payroll — timesheet generation, rate resolution, and approval workflows',
      'Staff — team directory, rate management, and performance tracking',
    ],
  },
  {
    group: 'Marketing & Outreach',
    items: [
      'Lead Management — scoring, source tracking, and conversion pipeline',
      'Email Campaigns — template builder, design studio, and delivery tracking',
      'Marketing Analytics — performance measurement and conversion tracking',
      'Communications — multi-channel messaging with template design tools',
    ],
  },
  {
    group: 'Content & Platform',
    items: [
      'CMS — headless content management with page versioning and templates',
      'Media Library — digital asset management with folder organisation',
      'Settings — integrations, security, appearance, and system configuration',
      'Team Activity — comprehensive audit logging and activity monitoring',
    ],
  },
]

export default function ShakeCaseStudy() {
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
            href="/"
            className="text-xs uppercase tracking-wider text-tertiary hover:text-primary transition-colors duration-500 font-body"
          >
            Index
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="container pt-[15vh] pb-16 md:pb-24">
        <Reveal>
          <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-6">
            Healthcare Platform
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-hero font-display text-primary mb-8">Shake</h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-body-lg text-secondary font-body max-w-wide">
            A sixteen-module admin portal and CMS-driven marketing website
            managing operations, clinical documentation, finance, and growth
            for a mental health counselling practice&mdash;with deep integration
            into accounting, calendar, and communication infrastructure.
          </p>
        </Reveal>
      </section>

      {/* Ecosystem Diagram */}
      <Reveal delay={300}>
        <section className="container pb-24">
          <ShakeEcosystem />
        </section>
      </Reveal>

      {/* Narrative */}
      <section className="container pb-24">
        <div className="max-w-content">
          <Reveal>
            <p className="text-body-lg text-secondary font-body">
              When a mental health practice grows beyond a single practitioner,
              everything breaks. Scheduling across multiple calendars. Invoicing
              across different funding sources&mdash;NDIS, Medicare,
              Private&mdash;each with different GST rules. Payroll that must be
              accurate to the dollar. Clinical documentation that demands
              compliance. Marketing that needs measurement.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-body-lg text-secondary font-body">
              Shake is the system that makes it all work&mdash;a purpose-built
              platform spanning admin portal and marketing website, with
              two-way synchronisation into the practice&apos;s accounting,
              calendar, and email infrastructure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Platform Overview Reel */}
      <Reveal>
        <section className="container pb-24">
          <ScreenshotReel slides={overviewSlides} className="aspect-[21/9]" />
        </section>
      </Reveal>

      {/* ─── Three Stats ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <div className="grid grid-cols-3 gap-8 md:gap-16">
          <Reveal>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                16
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                integrated modules across the admin portal
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                6
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                user roles with row-level data isolation
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                3
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                external platforms with two-way synchronisation
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Deep: Financial Operations Pipeline ─── */}
      <section className="container pb-24">
        <div className="max-w-wide">
          <Reveal>
            <h2 className="text-title font-display text-primary mb-6">
              Financial Operations Pipeline
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-body text-secondary font-body max-w-content mb-12">
              Healthcare invoicing is complex. Different funding types carry
              different GST obligations&mdash;NDIS and Medicare are GST-free,
              private sessions carry ten percent. Each invoice passes through a
              multi-gate validation pipeline before touching the accounting
              system. Session eligibility, funding plan validity, line item
              accuracy, tax calculations, contact verification, and sync
              readiness are all verified before any data leaves the platform.
            </p>
          </Reveal>

          {/* Pipeline visualization */}
          <Reveal delay={160}>
            <div className="flex flex-wrap items-center gap-3 mb-12">
              {pipelineStages.map((stage, i) => (
                <span key={stage} className="flex items-center gap-3">
                  <span className="px-5 py-3 border border-border text-xs tracking-wider text-primary font-body uppercase">
                    {stage}
                  </span>
                  {i < pipelineStages.length - 1 && (
                    <span className="text-tertiary text-small">&rarr;</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-body text-secondary font-body max-w-content">
              Two-way synchronisation with the practice&apos;s accounting system
              keeps both platforms in lockstep. Invoices push out with automatic
              contact creation. Payment confirmations flow back via webhooks.
              A reconciliation engine runs daily, comparing amounts across
              systems and classifying discrepancies by severity&mdash;from sync
              delays to amount mismatches to unbilled sessions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Screenshot Pair: Scheduling + Financial */}
      <Reveal>
        <section className="container pb-24">
          <div className="grid md:grid-cols-2 gap-4">
            <ScreenshotReel
              slides={schedulingSlides}
              className="aspect-[4/3]"
              interval={3500}
            />
            <ScreenshotReel
              slides={financialSlides}
              className="aspect-[4/3]"
              interval={4500}
            />
          </div>
        </section>
      </Reveal>

      {/* ─── Deep: Multi-Practitioner Scheduling ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScreenshotReel
              slides={[
                { label: 'Week view layout' },
                { label: 'Drag-drop scheduling' },
                { label: 'Outlook sync status' },
              ]}
              className="aspect-[4/3]"
              interval={3500}
            />
            <div>
              <h2 className="text-title font-display text-primary mb-4">
                Multi-Practitioner Scheduling
              </h2>
              <p className="text-body text-secondary font-body">
                Practitioners operate across multiple locations with overlapping
                availability. The calendar presents all practitioners in
                parallel, with drag-and-drop scheduling that detects conflicts
                against both internal appointments and connected external
                calendars.
              </p>
              <p className="mt-4 text-body text-secondary font-body">
                Completed sessions are automatically flagged for billing.
                Appointments sync bidirectionally with practitioner calendars,
                with client name anonymisation for shared environments.
                Status transitions&mdash;scheduled, confirmed, completed,
                no-show&mdash;feed directly into invoicing and analytics.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── Deep: Clinical Documentation ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-title font-display text-primary mb-4">
                Clinical Documentation
              </h2>
              <p className="text-body text-secondary font-body">
                Every session generates clinical documentation&mdash;progress
                notes capturing mood assessments, goals addressed, interventions
                applied, homework assigned, and next session focus. Notes link
                directly to appointments, creating an unbroken clinical record
                per client.
              </p>
              <p className="mt-4 text-body text-secondary font-body">
                Standardised outcome measures track client progress over time.
                Token-based assessment delivery means clients complete measures
                outside the platform, with results flowing back into their
                clinical profile automatically. Treatment plans structure the
                therapeutic journey with modality tracking and scheduled review
                points.
              </p>
            </div>
            <ScreenshotReel
              slides={clinicalSlides}
              className="aspect-[4/3]"
              interval={4000}
            />
          </div>
        </Reveal>
      </section>

      {/* Screenshot Pair: CRM + CMS */}
      <Reveal>
        <section className="container pb-24">
          <div className="grid md:grid-cols-2 gap-4">
            <ScreenshotReel
              slides={[
                { label: 'Lead management pipeline' },
                { label: 'Email campaigns' },
                { label: 'Marketing analytics' },
              ]}
              className="aspect-[4/3]"
              interval={3500}
            />
            <ScreenshotReel
              slides={[
                { label: 'CMS page editor' },
                { label: 'Media library' },
                { label: 'Marketing website' },
              ]}
              className="aspect-[4/3]"
              interval={4500}
            />
          </div>
        </section>
      </Reveal>

      {/* ─── Deep: Growth Engine ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <div className="max-w-wide">
          <Reveal>
            <h2 className="text-title font-display text-primary mb-6">
              Growth Engine
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-body text-secondary font-body max-w-content">
              Beyond operations, Shake drives practice growth. Inbound
              inquiries from the marketing website are scored, prioritised,
              and tracked through a conversion pipeline from lead to active
              client. A headless CMS gives the practice full control over
              their web presence&mdash;pages, blog content, service
              descriptions, and media&mdash;with versioning and draft
              workflows. Email campaigns with template design tools enable
              targeted outreach. AI-powered analysis classifies inbound
              communications by urgency, sentiment, and suggested response.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Complete Platform ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>
        <Reveal>
          <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-16">
            Complete Platform &mdash; 16 Modules
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
                <p className="text-primary">Sole Developer &amp; Architect</p>
              </div>
              <div>
                <p className="text-tertiary mb-1">Timeline</p>
                <p className="text-primary">2024 &mdash; Present</p>
              </div>
              <div>
                <p className="text-tertiary mb-1">Stack</p>
                <p className="text-primary">
                  Next.js, TypeScript, Supabase, Prisma, React Native
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Next Project */}
      <section className="container pb-24">
        <Link href="/work/arqelo" className="group block">
          <Reveal>
            <div className="border-t border-border pt-12">
              <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-4">
                Next
              </p>
              <h3 className="text-display font-display text-primary group-hover:text-secondary transition-colors duration-500">
                Arqelo{' '}
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
