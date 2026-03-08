import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

const sites = [
  {
    slug: 'greater-plumbing',
    name: 'Greater Plumbing Co',
    category: 'Business Website',
    description:
      'Two-hundred-and-eighty-three page website and admin platform with a thirty-three page hot water SEO hub, one hundred and forty-two location-service pages, booking system with calendar sync, interactive tools, and a ten-tab operations dashboard.',
    stack: 'React, Express, TypeScript, PostgreSQL, Sanity CMS',
    year: '2024',
  },
  {
    slug: 'rhbc-premium',
    name: 'RHBC Services',
    category: 'Business Website',
    description:
      'Six-page premium marketing website with GSAP-powered animations, magnetic buttons, three-dimensional card interactions, a custom cursor, filterable project portfolio with before-and-after sliders, and a conversion-optimised contact system.',
    stack: 'Astro, React, GSAP, Tailwind CSS, TypeScript',
    year: '2025',
  },
  {
    slug: 'dreaming-print-solutions',
    name: 'Dreaming Print Solutions',
    category: 'Marketing Platform',
    description:
      'Twenty-seven page marketing platform with a six-step AI-powered print assessment, five enterprise printer product pages, government and corporate procurement guides, and a content library of eight blog posts, twenty FAQs, and eight resource guides.',
    stack: 'Next.js, React, TypeScript, Tailwind CSS, Claude AI',
    year: '2025',
  },
  {
    slug: 'proemails',
    name: 'ProEmails',
    category: 'Email Platform',
    description:
      'Four-application email SaaS platform with a two-thousand-domain marketplace, twenty-seven-page customer dashboard with AI-powered composition across six tones, eleven-route admin portal with CRM and revenue operations, and a one-hundred-and-eighty-seven-endpoint Express API.',
    stack: 'React, Express, TypeScript, Supabase, Stripe, Claude AI',
    year: '2024',
  },
]

export default function SitesIndex() {
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
            href="/work"
            className="text-xs uppercase tracking-wider text-tertiary hover:text-primary transition-colors duration-500 font-body"
          >
            Work
          </Link>
        </div>
      </header>

      {/* Title */}
      <section className="container pt-[15vh] pb-16 md:pb-24">
        <Reveal>
          <h1 className="text-hero font-display text-primary">Sites</h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 text-body-lg text-secondary font-body max-w-content">
            Websites designed and developed for businesses. Each project
            includes detailed case studies covering architecture,
            integrations, and key features.
          </p>
        </Reveal>
      </section>

      {/* Sites List */}
      <section className="container pb-24">
        <Reveal delay={200}>
          <div className="border-t border-border" />
        </Reveal>

        <div className="mt-12 space-y-0">
          {sites.map((site, i) => (
            <Reveal key={site.slug} delay={300 + i * 80}>
              <Link
                href={`/sites/${site.slug}`}
                className="group block py-10 border-b border-border"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4">
                      <h2 className="text-display font-display text-primary group-hover:text-secondary transition-colors duration-500">
                        {site.name}
                      </h2>
                      <span className="text-xs uppercase tracking-wider text-tertiary font-body">
                        {site.category}
                      </span>
                    </div>
                    <p className="mt-3 text-body text-secondary font-body max-w-wide">
                      {site.description}
                    </p>
                  </div>
                  <div className="shrink-0 flex items-baseline gap-4 md:text-right">
                    <span className="text-small text-tertiary font-body">
                      {site.year}
                    </span>
                    <span className="text-small text-tertiary group-hover:text-primary transition-colors duration-500 font-body">
                      &rarr;
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-xs text-tertiary font-body">
                  {site.stack}
                </p>
              </Link>
            </Reveal>
          ))}
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
