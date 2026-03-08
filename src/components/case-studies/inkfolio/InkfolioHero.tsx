import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

export function InkfolioHero() {
  return (
    <>
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

      <section className="container pt-[15vh] pb-16 md:pb-24">
        <Reveal>
          <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-6">
            Tattoo Platform
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-hero font-display text-primary mb-8">Inkfolio</h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-body-lg text-secondary font-body max-w-wide">
            Full-stack portfolio, booking, and client management platform for a
            tattoo studio. Public marketing site with gallery and blog, client
            portal with real-time messaging and digital waivers, artist admin
            dashboard with a nine-status project lifecycle and automated email
            workflows.
          </p>
        </Reveal>
      </section>
    </>
  )
}
