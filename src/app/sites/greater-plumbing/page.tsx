import Link from 'next/link'
import { Reveal } from '@/components/Reveal'
import { GreaterPlumbingArchitecture } from '@/components/diagrams/GreaterPlumbingArchitecture'
import { ScreenshotReel } from '@/components/ScreenshotReel'

const overviewSlides = [
  { label: 'Homepage — hero with interactive canvas animation', image: undefined },
  { label: 'Service pillar page — blocked drains', image: undefined },
  { label: 'Hot water hub — system comparison', image: undefined },
  { label: 'Booking wizard — time slot selection', image: undefined },
  { label: 'Admin dashboard — analytics overview', image: undefined },
]

const hotWaterSlides = [
  { label: 'Hub overview — systems and brands', image: undefined },
  { label: 'System selector tool', image: undefined },
  { label: 'Rebate calculator', image: undefined },
]

const adminSlides = [
  { label: 'Dashboard — visitor analytics', image: undefined },
  { label: 'Booking management', image: undefined },
  { label: 'Calendar view', image: undefined },
]

const platformModules = [
  {
    group: 'Public Website — 283 Pages',
    items: [
      'Hot Water Content Hub — thirty-three pages across systems, brands, guides, services, and tools',
      'Service Pillar Pages — nine SEO-optimised pages with structured data and FAQ schema markup',
      'Location Matrix — twenty-four suburbs cross-referenced against twelve services for 142 pages',
      'Blog — forty-five posts across eleven categories managed through headless CMS with GROQ queries',
    ],
  },
  {
    group: 'Conversion Engine',
    items: [
      'Booking Wizard — four-step appointment flow with time slot selection and confirmation emails',
      'Google Ads Landing Pages — conversion-optimised pages with GCLID capture and enhanced tracking',
      'Contact and Inquiry Forms — multi-form lead capture with UTM persistence and ad attribution',
      'Interactive Tools — system selector, rebate calculator, cost calculator, and sizing calculator',
    ],
  },
  {
    group: 'Admin Dashboard — 10 Tabs',
    items: [
      'Analytics and Visitor Tracking — KPI cards, charts, traffic sources, and GA4 API integration',
      'Booking and Job Management — appointment lifecycle from pending through completion with status tracking',
      'Customer and Technician CRM — client database, staff assignment, specialties, and contact management',
      'Calendar and Scheduling — day view with Microsoft Outlook sync, technician filtering, and event cards',
    ],
  },
  {
    group: 'Infrastructure',
    items: [
      'Express Backend — thirty-plus validated endpoints across nine route modules with Zod schemas',
      'PostgreSQL Database — ten tables via Neon serverless with Drizzle ORM and connection pooling',
      'SEO System — dynamic sitemap, LocalBusiness and FAQ structured data, breadcrumbs, and Open Graph',
      'Security — rate limiting, geo-blocking, canvas-based bot detection, and ad traffic quality scoring',
    ],
  },
]

export default function GreaterPlumbingCaseStudy() {
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
            Business Website
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-hero font-display text-primary mb-8">
            Greater Plumbing Co
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-body-lg text-secondary font-body max-w-wide">
            A two-hundred-and-eighty-three page website and admin platform
            for a Gold Coast plumbing practice&mdash;featuring a thirty-three
            page hot water SEO hub, one hundred and forty-two
            location-service combination pages, a multi-step booking system
            with calendar synchronisation, four interactive service tools,
            and a ten-tab operations dashboard with analytics, customer
            management, and job tracking.
          </p>
        </Reveal>
      </section>

      {/* Architecture Diagram */}
      <Reveal delay={300}>
        <section className="container pb-24">
          <GreaterPlumbingArchitecture />
        </section>
      </Reveal>

      {/* Narrative */}
      <section className="container pb-24">
        <div className="max-w-content">
          <Reveal>
            <p className="text-body-lg text-secondary font-body">
              A plumbing business on the Gold Coast needed more than a
              brochure site. They needed a platform that could capture
              leads from organic search and paid campaigns, convert
              visitors through an intelligent booking flow, synchronise
              appointments with their calendar infrastructure, and
              give the team a dashboard to manage every aspect of
              daily operations.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-body-lg text-secondary font-body">
              The result spans two hundred and eighty-three unique URLs
              of SEO-driven content&mdash;twenty-four suburb pages each
              cross-referenced against twelve services, forty-five blog
              posts managed through a headless CMS, a full booking system,
              four interactive calculators, and an admin platform with
              ten dedicated management modules. Six external integrations
              and a validated API layer connect everything end to end.
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

      {/* ─── Three Stats ─── */}
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
                283
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                unique accessible pages
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                24
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                suburbs with localised content
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                10
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                admin dashboard modules
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                6
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                external integrations
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Deep: SEO Content Hub ─── */}
      <section className="container pb-24">
        <div className="max-w-wide">
          <Reveal>
            <h2 className="text-title font-display text-primary mb-6">
              SEO Content Hub
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-body text-secondary font-body max-w-content mb-12">
              The hot water hub spans thirty-three pages&mdash;a main hub,
              five system type pages, nine brand pages, five editorial
              guides, four service pages, four interactive tools, and a
              conversion landing page. Each carries structured data, FAQ
              schema markup, breadcrumb navigation, and Open Graph tags.
              Nine service pillar pages target high-intent keywords with
              location modifiers and custom FAQ sections. Twenty-four
              suburb pages are cross-referenced against twelve services,
              generating one hundred and forty-two location-service
              combination pages with hyper-local content, FAQs, and
              descriptions. Forty-five blog posts across eleven categories
              are managed through a headless CMS. A dynamic sitemap
              generator ensures every indexable URL is visible to search
              engines.
            </p>
          </Reveal>

          {/* Hub structure visualization */}
          <Reveal delay={160}>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-12">
              {[
                { label: 'Hot Water Hub', count: '33' },
                { label: 'Pillar Pages', count: '9' },
                { label: 'Suburbs', count: '24' },
                { label: 'Location Combos', count: '142' },
                { label: 'Blog Posts', count: '45' },
                { label: 'Services', count: '12' },
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

          <Reveal delay={200}>
            <p className="text-body text-secondary font-body max-w-content">
              Location-service pages carry hyper-local content,
              suburb-specific FAQs, and geographic schema markup
              for each combination. Blog articles are managed
              through a headless CMS with GROQ queries, category
              filtering across eleven topics, and portable text
              rendering&mdash;giving the team full editorial control
              without developer involvement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Screenshot Pair: Hot Water + Admin */}
      <Reveal>
        <section className="container pb-24">
          <div className="grid md:grid-cols-2 gap-4">
            <ScreenshotReel
              slides={hotWaterSlides}
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

      {/* ─── Deep: Booking + Calendar ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScreenshotReel
              slides={[
                { label: 'Service selection step' },
                { label: 'Time slot calendar' },
                { label: 'Booking confirmation' },
              ]}
              className="aspect-[4/3]"
              interval={3500}
            />
            <div>
              <h2 className="text-title font-display text-primary mb-4">
                Booking System
              </h2>
              <p className="text-body text-secondary font-body">
                A four-step booking wizard walks customers through
                service selection, time slot availability, contact
                details, and confirmation. Completed bookings
                automatically create events in the team&apos;s
                calendar through a bidirectional sync, and
                confirmation emails are dispatched to both the
                customer and the business.
              </p>
              <p className="mt-4 text-body text-secondary font-body">
                Every form submission&mdash;whether a booking, contact
                inquiry, or service request&mdash;captures ad attribution
                parameters for conversion tracking. Enhanced conversion
                data flows back to the advertising platform with hashed
                user information for closed-loop measurement.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── Deep: Interactive Tools ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-title font-display text-primary mb-4">
                Interactive Service Tools
              </h2>
              <p className="text-body text-secondary font-body">
                Four interactive tools help visitors make informed
                decisions. A system selector walks through a
                questionnaire-based recommendation engine. A rebate
                calculator computes government incentive amounts in
                real time. A cost calculator compares running costs
                across system types with configurable parameters.
                A sizing calculator recommends system capacity based
                on household characteristics.
              </p>
              <p className="mt-4 text-body text-secondary font-body">
                Each tool is a standalone page with its own structured
                data, schema markup, and SEO targeting&mdash;turning
                utility into a search acquisition channel.
              </p>
            </div>
            <ScreenshotReel
              slides={[
                { label: 'System selector wizard' },
                { label: 'Rebate calculator results' },
                { label: 'Cost comparison tool' },
              ]}
              className="aspect-[4/3]"
              interval={4000}
            />
          </div>
        </Reveal>
      </section>

      {/* ─── Deep: Admin Dashboard ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <div className="max-w-wide">
          <Reveal>
            <h2 className="text-title font-display text-primary mb-6">
              Operations Dashboard
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-body text-secondary font-body max-w-content mb-12">
              The admin platform spans ten dedicated modules. A dashboard
              surfaces real-time KPIs&mdash;total bookings, active
              technicians, completion rate, and revenue estimates&mdash;with
              charts for bookings by service and monthly trends. Booking
              management tracks appointments through their full
              lifecycle&mdash;pending, confirmed, in progress,
              completed&mdash;with automatic status propagation across
              the job tracking and completed jobs modules.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
              {[
                { label: 'Dashboard', desc: 'KPIs + Charts' },
                { label: 'Bookings', desc: 'Lifecycle' },
                { label: 'Active Jobs', desc: 'Tracking' },
                { label: 'Completed', desc: 'Follow-Up' },
                { label: 'Analytics', desc: 'Export + Insights' },
                { label: 'Calendar', desc: 'Outlook Sync' },
                { label: 'Customers', desc: 'CRM' },
                { label: 'Technicians', desc: 'Staff' },
                { label: 'Users', desc: 'Invitations' },
                { label: 'Visitors', desc: 'GA4 API' },
              ].map((tab) => (
                <div
                  key={tab.label}
                  className="border border-border px-3 py-3 text-center"
                >
                  <p className="text-small text-primary font-body">
                    {tab.label}
                  </p>
                  <p className="text-xs text-tertiary font-body mt-1">
                    {tab.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-body text-secondary font-body max-w-content">
              A calendar view synchronises bidirectionally with
              the team&apos;s Microsoft Outlook through the Graph API.
              Customer management aggregates client data from bookings
              into a searchable CRM with booking history and spend
              tracking. A visitor analytics module pulls real-time
              data from the Google Analytics 4 API&mdash;sessions,
              bounce rate, traffic sources, device distribution,
              geographic breakdown, and conversion trends. An
              eight-step onboarding wizard guides new team members
              through initial configuration.
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
                  React, Express, TypeScript, PostgreSQL, Sanity CMS
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
