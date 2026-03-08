import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Jacob Welsh. I build platforms for legal, healthcare, and property industries. Based on the Gold Coast, Australia.',
  alternates: { canonical: 'https://jacobwelsh.dev/contact' },
  openGraph: {
    title: 'Contact — Jacob Welsh',
    description:
      'I build platforms for industries where the details matter. Based on the Gold Coast, open to projects locally and internationally.',
    url: 'https://jacobwelsh.dev/contact',
  },
}

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="container pt-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xs uppercase tracking-wider text-tertiary hover:text-primary transition-colors duration-500 font-body"
          >
            Jacob Welsh
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/work"
              className="text-xs uppercase tracking-wider text-tertiary hover:text-primary transition-colors duration-500 font-body"
            >
              Work
            </Link>
            <Link
              href="/"
              className="text-xs uppercase tracking-wider text-tertiary hover:text-primary transition-colors duration-500 font-body"
            >
              Index
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container pt-[15vh] pb-16 md:pb-24">
        <Reveal>
          <h1 className="text-hero font-display text-primary max-w-wide">
            Let&apos;s build something.
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-8 text-body-lg text-secondary font-body max-w-content">
            If your business runs on manual processes, disconnected tools, or
            software that wasn&apos;t built for how you actually
            operate&mdash;that&apos;s the kind of problem I solve.
          </p>
        </Reveal>
      </section>

      {/* Primary Contact */}
      <section className="container">
        <Reveal delay={250}>
          <div className="border-t border-border" />
        </Reveal>

        <div className="mt-12 md:mt-16 max-w-wide">
          <Reveal delay={300}>
            <a
              href="mailto:hello@jacobwelsh.dev"
              className="group block py-10 border-b border-border"
            >
              <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-4">
                Email
              </p>
              <p className="text-display font-display text-primary group-hover:text-secondary transition-colors duration-500">
                hello@jacobwelsh.dev
              </p>
            </a>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-16">
            <Reveal delay={380}>
              <a
                href="https://www.linkedin.com/in/jacob-welsh-566a35283/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 border-b border-border"
              >
                <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-3">
                  LinkedIn
                </p>
                <p className="text-title font-display text-primary group-hover:text-secondary transition-colors duration-500">
                  jacob-welsh
                  <span className="inline-block ml-2 text-tertiary group-hover:text-secondary transition-colors duration-500">
                    &nearr;
                  </span>
                </p>
              </a>
            </Reveal>
            <Reveal delay={440}>
              <a
                href="https://github.com/jacobwelsh92"
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 border-b border-border"
              >
                <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-3">
                  GitHub
                </p>
                <p className="text-title font-display text-primary group-hover:text-secondary transition-colors duration-500">
                  jacobwelsh92
                  <span className="inline-block ml-2 text-tertiary group-hover:text-secondary transition-colors duration-500">
                    &nearr;
                  </span>
                </p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="container pt-16 md:pt-24 flex-1">
        <Reveal delay={500}>
          <div className="border-t border-border pt-12 md:pt-16" />
        </Reveal>

        <div className="max-w-wide grid md:grid-cols-[1fr_1px_1fr] gap-12 md:gap-16">
          <Reveal delay={550}>
            <div>
              <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-6">
                What I Build
              </p>
              <div className="space-y-5">
                {[
                  'Platforms that replace scattered tools with one system designed around how you work',
                  'AI integrations that solve domain-specific problems, not generic chatbots',
                  'Operational software for industries where compliance and accuracy are non-negotiable',
                  'Production systems with the architecture to scale invisibly',
                ].map((item) => (
                  <p
                    key={item}
                    className="text-body text-secondary font-body leading-relaxed"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="hidden md:block w-px bg-border h-full" />
          </Reveal>

          <Reveal delay={650}>
            <div>
              <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-6">
                How It Works
              </p>
              <div className="space-y-5">
                {[
                  { step: '01', text: 'You describe the problem. I listen and ask the right questions.' },
                  { step: '02', text: 'I scope the architecture and we align on what gets built.' },
                  { step: '03', text: 'I build, you review. Iterative, transparent, no surprises.' },
                  { step: '04', text: 'You get a production system that works from day one.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="text-xs text-tertiary font-body tabular-nums pt-1 shrink-0">
                      {item.step}
                    </span>
                    <p className="text-body text-secondary font-body leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section className="container pt-16 md:pt-24">
        <Reveal delay={700}>
          <div className="max-w-wide">
            <p className="text-body-lg text-secondary font-body max-w-content">
              Based on the Gold Coast, Australia. Working with clients locally
              and internationally.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="container pb-12 mt-16">
        <div className="border-t border-border pt-8 flex items-center justify-between">
          <span className="text-xs text-tertiary font-body">&copy; 2026</span>
          <Link
            href="/work"
            className="text-small text-secondary hover:text-primary transition-colors duration-500 font-body"
          >
            View work &rarr;
          </Link>
        </div>
      </footer>
    </main>
  )
}
