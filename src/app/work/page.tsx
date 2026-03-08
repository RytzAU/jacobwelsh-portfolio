import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Platforms, products, and builds by Jacob Welsh. Case studies covering architecture, AI orchestration, and systems engineering for legal, healthcare, and property industries.',
  alternates: { canonical: 'https://jacobwelsh.dev/work' },
  openGraph: {
    title: 'Work — Jacob Welsh',
    description:
      'Platforms, products, and builds. Case studies covering architecture, AI orchestration, and systems engineering.',
    url: 'https://jacobwelsh.dev/work',
  },
}

const featured = [
  {
    slug: 'rytz',
    name: 'RYTZ',
    category: 'Legal Technology',
    description:
      'AI-powered platform helping self-represented litigants navigate Australian family law. Multi-AI orchestration, document intelligence, three-portal architecture.',
    stack: 'React, Supabase, Claude, Gemini, Pinecone, React Native',
    year: '2024',
  },
  {
    slug: 'shake',
    name: 'Shake',
    category: 'Healthcare Platform',
    description:
      'Production CRM/ERP automating invoicing, payroll, scheduling, and clinical documentation for a mental health counselling practice.',
    stack: 'Next.js, React, Supabase, Xero API, Microsoft Graph',
    year: '2024',
  },
  {
    slug: 'arqelo',
    name: 'Arqelo',
    category: 'Property Intelligence',
    description:
      'B2C SaaS providing institutional-grade property investment analysis. 13-section property briefs, portfolio tracking, suburb intelligence scoring.',
    stack: 'Next.js 16, React 19, Supabase, Stripe, Apify',
    year: '2025',
  },
]

const builds = [
  {
    name: 'Inkfolio',
    type: 'Tattoo Platform',
    stack: 'Next.js 16, Supabase, Stripe, Calendly',
    href: '/sites/inkfolio',
  },
  {
    name: 'RHBC Services',
    type: 'Business Website',
    stack: 'Astro, React, GSAP',
    href: '/sites/rhbc-premium',
  },
  {
    name: 'Dreaming Print Solutions',
    type: 'Marketing Platform',
    stack: 'Next.js, React, Claude AI',
    href: '/sites/dreaming-print-solutions',
  },
  {
    name: 'Greater Plumbing Co',
    type: 'Business Website',
    stack: 'React, Express, Sanity CMS',
    href: '/sites/greater-plumbing',
  },
  {
    name: 'ProEmails',
    type: 'Email Platform',
    stack: 'React, Express, Supabase, Stripe',
    href: '/sites/proemails',
  },
]

export default function WorkIndex() {
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
            href="/contact"
            className="text-xs uppercase tracking-wider text-tertiary hover:text-primary transition-colors duration-500 font-body"
          >
            Contact
          </Link>
        </div>
      </header>

      {/* Title */}
      <section className="container pt-[15vh] pb-16 md:pb-24">
        <Reveal>
          <h1 className="text-hero font-display text-primary">Work</h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 text-body-lg text-secondary font-body max-w-content">
            Platforms, products, and builds. The featured projects below include
            detailed case studies.
          </p>
        </Reveal>
      </section>

      {/* Featured Projects */}
      <section className="container pb-24">
        <Reveal delay={200}>
          <div className="border-t border-border" />
        </Reveal>

        <div className="mt-12 space-y-0">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={300 + i * 80}>
              <Link
                href={`/work/${project.slug}`}
                className="group block py-10 border-b border-border"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4">
                      <h2 className="text-display font-display text-primary group-hover:text-secondary transition-colors duration-500">
                        {project.name}
                      </h2>
                      <span className="text-xs uppercase tracking-wider text-tertiary font-body">
                        {project.category}
                      </span>
                    </div>
                    <p className="mt-3 text-body text-secondary font-body max-w-wide">
                      {project.description}
                    </p>
                  </div>
                  <div className="shrink-0 flex items-baseline gap-4 md:text-right">
                    <span className="text-small text-tertiary font-body">
                      {project.year}
                    </span>
                    <span className="text-small text-tertiary group-hover:text-primary transition-colors duration-500 font-body">
                      &rarr;
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-xs text-tertiary font-body">
                  {project.stack}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* All Builds */}
      <section className="container pb-24">
        <Reveal>
          <div className="flex items-baseline justify-between mb-8">
            <p className="text-xs uppercase tracking-wider text-tertiary font-body">
              Previous Builds
            </p>
            <Link
              href="/sites"
              className="text-xs uppercase tracking-wider text-tertiary hover:text-primary transition-colors duration-500 font-body"
            >
              View Sites &rarr;
            </Link>
          </div>
        </Reveal>

        <div className="space-y-0">
          {builds.map((build, i) => {
            const inner = (
              <div className="py-5 border-b border-border flex items-baseline justify-between gap-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-body font-body text-primary">
                    {build.name}
                  </span>
                  <span className="text-small text-tertiary font-body hidden md:inline">
                    {build.type}
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-tertiary font-body">
                    {build.stack}
                  </span>
                  {'href' in build && (
                    <span className="text-small text-tertiary group-hover:text-primary transition-colors duration-500 font-body">
                      &rarr;
                    </span>
                  )}
                </div>
              </div>
            )
            return (
              <Reveal key={build.name} delay={i * 50}>
                {'href' in build ? (
                  <Link
                    href={(build as { href: string }).href}
                    className="group block"
                  >
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="container pb-12">
        <div className="border-t border-border pt-8 flex items-center justify-between">
          <span className="text-xs text-tertiary font-body">&copy; 2026</span>
          <a
            href="mailto:hello@jacobwelsh.dev"
            className="text-small text-secondary hover:text-primary transition-colors duration-500 font-body"
          >
            hello@jacobwelsh.dev
          </a>
        </div>
      </footer>
    </main>
  )
}
