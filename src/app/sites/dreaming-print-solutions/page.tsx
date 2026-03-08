import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Dreaming Print Solutions — Marketing Platform',
  description:
    'Case study: Twenty-seven page marketing platform with AI-powered print assessment, enterprise printer product pages, government procurement guides, and content library.',
  alternates: { canonical: 'https://jacobwelsh.dev/sites/dreaming-print-solutions' },
  openGraph: {
    title: 'Dreaming Print Solutions — Jacob Welsh',
    description:
      '27-page marketing platform with AI print assessment, enterprise product pages, and procurement guides.',
    url: 'https://jacobwelsh.dev/sites/dreaming-print-solutions',
  },
}
import { DreamingPrintArchitecture } from '@/components/diagrams/DreamingPrintArchitecture'
import { ScreenshotReel } from '@/components/ScreenshotReel'

const overviewSlides = [
  { label: 'Homepage — hero with ochre brand identity', image: undefined },
  { label: 'Product catalog — enterprise printer range', image: undefined },
  { label: 'AI print assessment — wizard interface', image: undefined },
  { label: 'Government procurement — IPP compliance guide', image: undefined },
  { label: 'Blog — technical articles and guides', image: undefined },
]

const assessmentSlides = [
  { label: 'Business profile step — industry and size', image: undefined },
  { label: 'Current setup analysis — printer audit', image: undefined },
  { label: 'AI results — personalised recommendations', image: undefined },
]

const procurementSlides = [
  { label: 'Government procurement — pathway selection', image: undefined },
  { label: 'Corporate procurement — RAP alignment', image: undefined },
  { label: 'Why Indigenous — social impact metrics', image: undefined },
]

const platformModules = [
  {
    group: 'Marketing Platform — 27 Pages',
    items: [
      'Content Library — eight blog posts across three categories, twenty FAQs, and eight resource guides',
      'Product Catalog — five enterprise printer pages with full technical specifications and comparison data',
      'Procurement Pathways — government IPP compliance, corporate RAP alignment, and Indigenous ownership',
      'Core Pages — home, about, services, contact, privacy policy, and terms of service',
    ],
  },
  {
    group: 'AI Assessment Engine',
    items: [
      'Six-Step Wizard — business profile, current setup, print volume, workflow needs, budget, and contact',
      'AI Analysis — personalised equipment recommendations with cost analysis and ROI projections',
      'PDF Report — branded assessment documents with executive summary, recommendations, and metrics',
      'Email Delivery — dual-channel notifications to business team and customer with assessment summaries',
    ],
  },
  {
    group: 'Integrations',
    items: [
      'Anthropic Claude — AI-powered print needs analysis with equipment matching and cost projections',
      'Resend Email — contact form confirmations, assessment results, and business lead notifications',
      'Vercel Analytics — traffic monitoring and performance measurement with Speed Insights',
      'React PDF — branded assessment report generation with structured layout and recommendation data',
    ],
  },
  {
    group: 'Infrastructure',
    items: [
      'Next.js 16 — React 19, TypeScript, Tailwind CSS 4, and Framer Motion page transitions',
      'API Layer — four validated endpoints for assessment analysis, submission, PDF generation, and contact',
      'SEO System — structured data, dynamic sitemap generation, Open Graph tags, and security headers',
      'Content Architecture — data-driven pages with centralised product, blog, FAQ, and resource datasets',
    ],
  },
]

export default function DreamingPrintSolutionsCaseStudy() {
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
            Marketing Platform
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-hero font-display text-primary mb-8">
            Dreaming Print Solutions
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-body-lg text-secondary font-body max-w-wide">
            A twenty-seven page marketing platform for an Indigenous-owned
            enterprise print solutions business&mdash;featuring a six-step
            AI-powered print assessment that analyses business needs and
            generates personalised equipment recommendations with
            downloadable PDF reports, five enterprise printer product pages
            with full technical specifications, government and corporate
            procurement guides for IPP and RAP compliance, and a content
            library of eight blog posts, twenty FAQs, and eight resource
            guides.
          </p>
        </Reveal>
      </section>

      {/* Architecture Diagram */}
      <Reveal delay={300}>
        <section className="container pb-24">
          <DreamingPrintArchitecture />
        </section>
      </Reveal>

      {/* Narrative */}
      <section className="container pb-24">
        <div className="max-w-content">
          <Reveal>
            <p className="text-body-lg text-secondary font-body">
              An Indigenous-owned enterprise print solutions business needed
              more than a product brochure. They needed a platform that could
              educate government and corporate buyers on procurement compliance,
              guide prospects through an intelligent needs assessment, and
              position five enterprise printer models against specific business
              requirements&mdash;all while communicating the social and economic
              impact of Indigenous procurement.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-body-lg text-secondary font-body">
              The result is a twenty-seven page platform anchored by a six-step
              AI assessment that collects business profile, current setup, print
              volume, workflow needs, and budget parameters before generating
              personalised recommendations through Claude. Assessment results
              are delivered as branded PDF reports and dual-channel email
              notifications. Three dedicated procurement pathways guide
              government buyers through IPP compliance and corporate buyers
              through RAP alignment, supported by eight technical blog posts,
              twenty FAQs, and eight downloadable resource guides.
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
                27
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
                6
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                AI assessment steps
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                5
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                enterprise printer models
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                3
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                procurement pathways
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Deep: AI Print Assessment ─── */}
      <section className="container pb-24">
        <div className="max-w-wide">
          <Reveal>
            <h2 className="text-title font-display text-primary mb-6">
              AI Print Assessment
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-body text-secondary font-body max-w-content mb-12">
              The platform&apos;s flagship feature is a six-step assessment
              wizard that collects business profile, current printer setup,
              monthly print volume, workflow and security needs, budget
              parameters, and contact information. On submission, the data
              is sent to Claude for analysis&mdash;generating personalised
              equipment recommendations with match scores, cost comparisons,
              ROI projections, and payback period estimates. Results are
              rendered on-screen, delivered as a branded PDF report, and
              sent as dual-channel email notifications to both the business
              team and the customer.
            </p>
          </Reveal>

          {/* Assessment steps visualization */}
          <Reveal delay={160}>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-12">
              {[
                { label: 'Business Profile', desc: 'Industry · Size' },
                { label: 'Current Setup', desc: 'Printers · Issues' },
                { label: 'Print Volume', desc: 'Monthly · Color' },
                { label: 'Workflow Needs', desc: 'Security · Scanning' },
                { label: 'Budget Timeline', desc: 'Range · Urgency' },
                { label: 'Contact Info', desc: 'Details · Delivery' },
              ].map((step) => (
                <div
                  key={step.label}
                  className="border border-border px-3 py-3 text-center"
                >
                  <p className="text-small text-primary font-body">
                    {step.label}
                  </p>
                  <p className="text-xs text-tertiary font-body mt-1">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-body text-secondary font-body max-w-content">
              The AI analysis engine evaluates each submission against the
              full product catalog, producing a primary recommendation with
              alternatives ranked by match score. Cost analysis includes
              current spend estimates, projected savings, and breakeven
              timelines. Workflow insights cover efficiency, security, cost
              optimisation, sustainability, and productivity considerations
              specific to the customer&apos;s industry and scale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Screenshot Pair: Assessment + Procurement */}
      <Reveal>
        <section className="container pb-24">
          <div className="grid md:grid-cols-2 gap-4">
            <ScreenshotReel
              slides={assessmentSlides}
              className="aspect-[4/3]"
              interval={3500}
            />
            <ScreenshotReel
              slides={procurementSlides}
              className="aspect-[4/3]"
              interval={4500}
            />
          </div>
        </section>
      </Reveal>

      {/* ─── Deep: Content & Product Library ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScreenshotReel
              slides={[
                { label: 'Product page — full technical specifications' },
                { label: 'Blog listing — category filtering' },
                { label: 'FAQ page — accordion interface' },
              ]}
              className="aspect-[4/3]"
              interval={3500}
            />
            <div>
              <h2 className="text-title font-display text-primary mb-4">
                Content &amp; Product Library
              </h2>
              <p className="text-body text-secondary font-body">
                Five enterprise printer product pages carry full technical
                specifications, volume recommendations, and feature
                breakdowns. Eight blog posts across three categories provide
                technical depth on printer selection, managed print services,
                and procurement compliance. Twenty FAQs across six categories
                address common buyer questions, and eight resource guides
                link editorial content to actionable procurement and product
                information.
              </p>
              <p className="mt-4 text-body text-secondary font-body">
                All content is driven by centralised data files, making
                updates a single-source change. Product data feeds both
                the catalog pages and the AI assessment&apos;s recommendation
                engine, ensuring consistency between what buyers see and
                what the system recommends.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Content count grid */}
        <Reveal delay={120}>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-12">
            {[
              { label: 'Blog Posts', count: '8' },
              { label: 'FAQs', count: '20' },
              { label: 'Resources', count: '8' },
              { label: 'Printers', count: '5' },
              { label: 'Categories', count: '6' },
              { label: 'API Endpoints', count: '4' },
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

      {/* ─── Deep: Procurement Pathways ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-title font-display text-primary mb-4">
                Procurement Pathways
              </h2>
              <p className="text-body text-secondary font-body">
                Three dedicated pages guide different buyer segments through
                procurement compliance. The government procurement page covers
                Indigenous Procurement Policy thresholds, Mandatory Set Aside
                ranges, Exemption 16 provisions, and Minimum Mandatory
                Requirements&mdash;with state-by-state policy breakdowns for
                Commonwealth, Queensland, New South Wales, Victoria, and
                Western Australia.
              </p>
              <p className="mt-4 text-body text-secondary font-body">
                The corporate procurement page aligns the business with
                Reconciliation Action Plan targets across four RAP tiers,
                ESG reporting metrics, and Tier 1 contractor participation
                requirements. An Indigenous ownership page communicates
                Supply Nation certification, social return metrics, and
                community impact&mdash;positioning every purchase as both
                a business and social investment.
              </p>
            </div>
            <ScreenshotReel
              slides={[
                { label: 'IPP thresholds — contract value ranges' },
                { label: 'RAP tiers — corporate compliance' },
                { label: 'Social impact — return metrics' },
              ]}
              className="aspect-[4/3]"
              interval={4000}
            />
          </div>
        </Reveal>

        {/* Procurement pathway boxes */}
        <Reveal delay={120}>
          <div className="grid grid-cols-3 gap-3 mt-12">
            {[
              { label: 'Government', desc: 'IPP · Exemption 16 · MSA' },
              { label: 'Corporate', desc: 'RAP · ESG · MMR' },
              { label: 'Indigenous', desc: 'Supply Nation · Social Impact' },
            ].map((path) => (
              <div
                key={path.label}
                className="border border-border px-4 py-4 text-center"
              >
                <p className="text-small text-primary font-body font-medium">
                  {path.label}
                </p>
                <p className="text-xs text-tertiary font-body mt-1">
                  {path.desc}
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
                <p className="text-primary">2025</p>
              </div>
              <div>
                <p className="text-tertiary mb-1">Stack</p>
                <p className="text-primary">
                  Next.js, React, TypeScript, Tailwind CSS, Claude AI
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
