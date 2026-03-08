import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

export function RytzHero() {
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
            href="/work"
            className="text-xs uppercase tracking-wider text-tertiary hover:text-primary transition-colors duration-500 font-body"
          >
            Work
          </Link>
        </div>
      </header>

      <section className="container pt-[15vh] pb-16 md:pb-24">
        <Reveal>
          <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-6">
            Legal Technology
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-hero font-display text-primary mb-8">RYTZ</h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-body-lg text-secondary font-body max-w-wide">
            AI-powered platform giving self-represented litigants the tools to
            navigate Australian family law. Twelve integrated modules spanning
            legal research, document intelligence, evidence management, and
            case strategy&mdash;capabilities previously accessible only through
            expensive legal representation.
          </p>
        </Reveal>
      </section>
    </>
  )
}
