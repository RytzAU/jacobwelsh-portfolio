import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Arqelo — Property Intelligence',
  description:
    'Case study: B2C SaaS providing institutional-grade property investment analysis. Automated data pipelines, suburb intelligence scoring, and thirteen-section property briefs.',
  alternates: { canonical: 'https://jacobwelsh.dev/work/arqelo' },
  openGraph: {
    title: 'Arqelo — Property Intelligence — Jacob Welsh',
    description:
      'Institutional-grade property intelligence. Automated data pipelines, suburb scoring, and comprehensive investment briefs.',
    url: 'https://jacobwelsh.dev/work/arqelo',
  },
}
import { ArqeloDataPipeline } from '@/components/diagrams/ArqeloDataPipeline'
import { ScreenshotReel } from '@/components/ScreenshotReel'

const pipelineStages = [
  'Scrape',
  'Fuse',
  'Score',
  'Detect',
  'Deliver',
]

const overviewSlides = [
  { label: 'Property scanner — traffic light verdict', image: undefined },
  { label: 'Suburb intelligence — composite scoring', image: undefined },
  { label: 'Portfolio dashboard — equity tracking', image: undefined },
  { label: 'Life Compass — investment profiling', image: undefined },
  { label: 'Market intelligence — pattern detection', image: undefined },
]

const scannerSlides = [
  { label: 'URL input and extraction', image: undefined },
  { label: '5-factor score breakdown', image: undefined },
  { label: 'AI-generated insights', image: undefined },
]

const portfolioSlides = [
  { label: 'Portfolio overview', image: undefined },
  { label: 'Cash flow analysis', image: undefined },
  { label: '15-year wealth forecast', image: undefined },
]

const suburbSlides = [
  { label: 'Suburb scorecard', image: undefined },
  { label: 'CAGR comparison', image: undefined },
  { label: 'Demographic profile', image: undefined },
]

const intelligenceSlides = [
  { label: 'Early warning alerts', image: undefined },
  { label: 'Pattern detection', image: undefined },
  { label: 'Smart money tracking', image: undefined },
]

const comparablesSlides = [
  { label: 'Comparable sales results', image: undefined },
  { label: 'Price per sqm analysis', image: undefined },
  { label: 'Confidence scoring', image: undefined },
]

const briefSlides = [
  { label: 'Executive summary', image: undefined },
  { label: 'Financial analysis section', image: undefined },
  { label: 'DOCX export preview', image: undefined },
]

const platformModules = [
  {
    group: 'Property Analysis',
    items: [
      'Property Scanner — URL extraction with 5-factor scoring and traffic light verdicts',
      'Intelligence Briefs — 13-section reports with AI-generated strategic insights',
      'Comparable Sales — multi-state engine matching on location, type, and land area',
    ],
  },
  {
    group: 'Market Intelligence',
    items: [
      'Smart Suburbs — national suburb scoring with composite growth and yield metrics',
      'Early Warning Alerts — pattern detection for emerging opportunities and peak warnings',
      'Market Pulse — sentiment indicators with ripple effect and smart money tracking',
    ],
  },
  {
    group: 'Portfolio & Planning',
    items: [
      'Portfolio Tracker — property management with equity, LVR, and cash flow monitoring',
      'Wealth Forecasting — 15-year projections with scenario modelling across growth assumptions',
      'Life Compass — 8-step investment profiling generating personalised buyer briefs',
    ],
  },
  {
    group: 'Platform Infrastructure',
    items: [
      'Data Pipeline — multi-source orchestration with quality scoring and freshness monitoring',
      'Subscription Engine — four-tier access control with feature gating and usage tracking',
      'Admin Centre — user management, system health, scraping command centre, and data operations',
    ],
  },
]

export default function ArqeloCaseStudy() {
  return (
    <main id="main" className="min-h-screen">
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
            href="/work"
            className="text-xs uppercase tracking-wider text-tertiary hover:text-primary transition-colors duration-500 font-body"
          >
            Work
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="container pt-[15vh] pb-16 md:pb-24">
        <Reveal>
          <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-6">
            Property Intelligence
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-hero font-display text-primary mb-8">Arqelo</h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-body-lg text-secondary font-body max-w-wide">
            A national property intelligence platform built on eighty-one data
            models, ninety API endpoints, and ten external integrations. Government
            transaction records, commercial listings, demographic data, and AI
            analysis converge into a single intelligence engine&mdash;delivering
            institutional-grade property research to individual investors.
          </p>
        </Reveal>
      </section>

      {/* Data Pipeline Diagram */}
      <Reveal delay={300}>
        <section className="container pb-24">
          <ArqeloDataPipeline />
        </section>
      </Reveal>

      {/* Narrative */}
      <section className="container pb-24">
        <div className="max-w-content">
          <Reveal>
            <p className="text-body-lg text-secondary font-body">
              Australian property investors navigate a fragmented landscape.
              Transaction data lives in state government registries. Listing data
              is scattered across portals. Suburb statistics require cross-referencing
              census records, council reports, and commercial indices. Building
              a complete picture of a single property means pulling from a dozen
              sources&mdash;most of which don&apos;t talk to each other.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-body-lg text-secondary font-body">
              Arqelo solves this by ingesting data from government registries,
              commercial platforms, and open datasets into a unified intelligence
              engine. Users paste a property URL and receive a comprehensive
              analysis brief. They track portfolios with real-time equity
              monitoring. They compare suburbs using data-driven scoring. The
              platform does the research that previously required a team.
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

      {/* ─── Four Stats ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <Reveal>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                81
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                data models across the Prisma schema
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                90
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                API endpoints spanning sixteen domains
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                166K
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                government property transactions ingested
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                4
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                subscription tiers with feature gating
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Deep: National Data Pipeline ─── */}
      <section className="container pb-24">
        <div className="max-w-wide">
          <Reveal>
            <h2 className="text-title font-display text-primary mb-6">
              National Data Pipeline
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-body text-secondary font-body max-w-content mb-12">
              Property intelligence is only as good as the data behind it. Arqelo
              operates a multi-source data pipeline that ingests from government
              registries, commercial platforms, and open datasets&mdash;each with
              different formats, update frequencies, and reliability characteristics.
              A quality scoring system assigns confidence grades from A through F,
              weighting government sources highest and derived estimates lowest.
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
              Data from multiple sources is reconciled through a fusion layer
              that detects discrepancies and calculates agreement scores across
              providers. Pre-computed metrics&mdash;CAGR over one, three, five,
              and ten years, composite suburb scores, pattern
              clusters&mdash;are generated by background jobs and cached for
              instant retrieval. The pipeline runs on daily, weekly, and
              quarterly cycles with circuit breakers, retry logic, and
              comprehensive audit trails for every import batch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Screenshot Pair: Scanner + Suburb */}
      <Reveal>
        <section className="container pb-24">
          <div className="grid md:grid-cols-2 gap-4">
            <ScreenshotReel
              slides={scannerSlides}
              className="aspect-[4/3]"
              interval={3500}
            />
            <ScreenshotReel
              slides={suburbSlides}
              className="aspect-[4/3]"
              interval={4500}
            />
          </div>
        </section>
      </Reveal>

      {/* ─── Deep: Property Intelligence Scanner ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScreenshotReel
              slides={[
                { label: 'URL paste and extraction' },
                { label: 'Traffic light verdict' },
                { label: 'Factor breakdown radar' },
              ]}
              className="aspect-[4/3]"
              interval={3500}
            />
            <div>
              <h2 className="text-title font-display text-primary mb-4">
                Property Intelligence Scanner
              </h2>
              <p className="text-body text-secondary font-body">
                Users paste a property URL from any major listing platform.
                The system extracts property data through a multi-layer cascade
                with progressive fallbacks, then runs five-factor analysis:
                growth potential, rental yield, affordability, market momentum,
                and stability risk. Each factor produces a score from zero to
                one hundred, culminating in a traffic light
                verdict&mdash;green, amber, or red.
              </p>
              <p className="mt-4 text-body text-secondary font-body">
                AI-generated insights layer strategic analysis on top of the
                raw scores&mdash;identifying strengths, weaknesses,
                opportunities, and threats specific to the property. Budget-managed
                AI requests ensure cost control across subscription tiers, with
                daily tracking and reservation-based allocation.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── Deep: Comparable Sales Engine ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-title font-display text-primary mb-4">
                Comparable Sales Engine
              </h2>
              <p className="text-body text-secondary font-body">
                Accurate valuation requires comparable sales data. Arqelo
                operates a multi-state comparables engine with
                transaction-level data where available and suburb-median
                fallbacks elsewhere. Properties are matched on location,
                property type, land area, and structural characteristics, with
                confidence weighting by data recency, sample size, and source
                reliability.
              </p>
              <p className="mt-4 text-body text-secondary font-body">
                Government transaction records provide the highest-confidence
                matches. Commercial sold listings extend coverage nationally
                with distance-based queries using geocoded coordinates.
                Pre-computed CAGR metrics over multiple time horizons enable
                instant growth comparisons without real-time calculation.
              </p>
            </div>
            <ScreenshotReel
              slides={comparablesSlides}
              className="aspect-[4/3]"
              interval={4000}
            />
          </div>
        </Reveal>
      </section>

      {/* Screenshot Pair: Intelligence + Briefs */}
      <Reveal>
        <section className="container pb-24">
          <div className="grid md:grid-cols-2 gap-4">
            <ScreenshotReel
              slides={intelligenceSlides}
              className="aspect-[4/3]"
              interval={3500}
            />
            <ScreenshotReel
              slides={briefSlides}
              className="aspect-[4/3]"
              interval={4500}
            />
          </div>
        </section>
      </Reveal>

      {/* ─── Deep: Market Intelligence ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <div className="max-w-wide grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
          <Reveal>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(4rem, 10vw, 7rem)' }}
              >
                A&ndash;F
              </p>
              <p className="mt-3 text-small text-tertiary font-body">
                quality grades scoring every data point by source tier and
                freshness
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <h2 className="text-title font-display text-primary mb-6">
                Market Intelligence System
              </h2>
              <p className="text-body text-secondary font-body">
                Beyond individual property analysis, Arqelo monitors market-wide
                patterns. Early warning alerts detect emerging opportunities,
                peak warnings, turnaround signals, and decline indicators across
                suburbs nationally. Pattern clustering groups suburbs with similar
                characteristics for geographic analysis. Correlation matrices
                identify which market indicators move together.
              </p>
              <p className="mt-4 text-body text-secondary font-body">
                Smart money tracking follows corporate investment signals.
                Gentrification pattern detection identifies suburbs in early
                transition. Ripple effect analysis maps how price movements
                propagate through adjacent areas. All intelligence is
                personalised against the user&apos;s buyer profile, surfacing
                the opportunities most relevant to their strategy and budget.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Deep: Portfolio & Forecasting ─── */}
      <section className="container pb-24">
        <div className="max-w-wide">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-title font-display text-primary mb-6">
                  Portfolio Engine
                </h2>
                <p className="text-body text-secondary font-body">
                  Investors need to understand their position across the entire
                  portfolio&mdash;not just individual properties. Arqelo tracks
                  acquisition details, current valuations, loan balances, rental
                  income, and expenses to produce real-time equity, LVR, and
                  cash flow metrics per property and in aggregate.
                </p>
                <p className="mt-4 text-body text-secondary font-body">
                  Fifteen-year wealth forecasting models portfolio growth under
                  configurable assumptions for capital appreciation, rent growth,
                  inflation, and interest rates. Goal tracking monitors progress
                  toward property count, equity, and passive income targets.
                  Historical snapshots capture portfolio state over time,
                  enabling trend analysis and performance measurement.
                </p>
              </div>
              <ScreenshotReel
                slides={portfolioSlides}
                className="aspect-[4/3]"
                interval={4000}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Feature Grid: 2x2 ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          <Reveal>
            <div>
              <ScreenshotReel
                slides={[
                  { label: 'Buyer profile wizard' },
                  { label: 'Risk appetite calibration' },
                  { label: 'Strategy classification' },
                ]}
                className="aspect-[4/3] mb-6"
                interval={3500}
              />
              <h3 className="text-title font-display text-primary mb-2">
                Life Compass
              </h3>
              <p className="text-small text-secondary font-body">
                An eight-step guided questionnaire capturing investment
                objectives, financial position, risk tolerance, and location
                preferences across thirty-six questions. Generates a
                personalised buyer&apos;s brief with derived metrics including
                affordability ratio, portfolio LVR, and strategy classification
                that powers suburb matching and opportunity personalisation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <ScreenshotReel
                slides={[
                  { label: 'White-label DOCX cover' },
                  { label: 'Brief section layout' },
                  { label: 'Team branding config' },
                ]}
                className="aspect-[4/3] mb-6"
                interval={4000}
              />
              <h3 className="text-title font-display text-primary mb-2">
                White-Label Reports
              </h3>
              <p className="text-small text-secondary font-body">
                Professional property analysis reports exported as editable
                DOCX or PDF with full white-label branding&mdash;company logo,
                colours, agent details, and custom footer text. Buyers agents
                generate client-ready reports under their own brand with a
                client portfolio management system for tracking multiple
                investors.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <ScreenshotReel
                slides={[
                  { label: 'Achievement gallery' },
                  { label: 'Badge progress' },
                  { label: 'Streak tracking' },
                ]}
                className="aspect-[4/3] mb-6"
                interval={4200}
              />
              <h3 className="text-title font-display text-primary mb-2">
                Achievements
              </h3>
              <p className="text-small text-secondary font-body">
                A five-tier badge system across seven categories driving
                platform engagement. Badges are earned through first actions,
                thresholds, streaks, and combinations. Five rarity
                levels&mdash;from common to legendary&mdash;with progress
                tracking and XP accumulation encouraging deeper exploration
                of the platform&apos;s capabilities.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <ScreenshotReel
                slides={[
                  { label: 'Admin dashboard' },
                  { label: 'Scraping command centre' },
                  { label: 'System health monitor' },
                ]}
                className="aspect-[4/3] mb-6"
                interval={3800}
              />
              <h3 className="text-title font-display text-primary mb-2">
                Admin &amp; Orchestration
              </h3>
              <p className="text-small text-secondary font-body">
                Nine-module admin panel with user management, subscription
                oversight, and a scraping command centre for scheduling,
                queue seeding, and manual job triggering. System health
                monitoring tracks pipeline execution, cache hit rates,
                and data provider status with circuit breaker patterns.
              </p>
            </div>
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
            Complete Platform &mdash; 12 Modules
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
                          {gi * 3 + ii + 1}
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
                <p className="text-primary">Founder &amp; Lead Developer</p>
              </div>
              <div>
                <p className="text-tertiary mb-1">Timeline</p>
                <p className="text-primary">2025 &mdash; Present</p>
              </div>
              <div>
                <p className="text-tertiary mb-1">Stack</p>
                <p className="text-primary">
                  Next.js, TypeScript, Supabase, Prisma, Stripe, Inngest
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Next Project */}
      <section className="container pb-24">
        <Link href="/work/rytz" className="group block">
          <Reveal>
            <div className="border-t border-border pt-12">
              <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-4">
                Next
              </p>
              <h3 className="text-display font-display text-primary group-hover:text-secondary transition-colors duration-500">
                RYTZ{' '}
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
