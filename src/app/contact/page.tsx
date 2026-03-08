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
          <Link
            href="/work"
            className="text-xs uppercase tracking-wider text-tertiary hover:text-primary transition-colors duration-500 font-body"
          >
            Work
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="flex-1 flex items-center">
        <div className="container py-24">
          <div className="max-w-wide">
            <Reveal>
              <h1 className="text-hero font-display text-primary">
                Let&apos;s build something.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-20 border-t border-border" />
            </Reveal>

            <div className="mt-12 grid md:grid-cols-3 gap-12 md:gap-16">
              <Reveal delay={300}>
                <a
                  href="mailto:hello@jacobwelsh.dev"
                  className="group block"
                >
                  <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-4">
                    Email
                  </p>
                  <p className="text-body text-primary group-hover:text-secondary transition-colors duration-500 font-body">
                    hello@jacobwelsh.dev
                  </p>
                </a>
              </Reveal>

              <Reveal delay={380}>
                <a
                  href="https://www.linkedin.com/in/jacob-welsh-566a35283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-4">
                    LinkedIn
                  </p>
                  <p className="text-body text-primary group-hover:text-secondary transition-colors duration-500 font-body">
                    jacob-welsh
                  </p>
                </a>
              </Reveal>

              <Reveal delay={460}>
                <a
                  href="https://github.com/jacobwelsh92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-4">
                    GitHub
                  </p>
                  <p className="text-body text-primary group-hover:text-secondary transition-colors duration-500 font-body">
                    jacobwelsh92
                  </p>
                </a>
              </Reveal>
            </div>

            <Reveal delay={550}>
              <p className="mt-20 text-small text-tertiary font-body">
                Gold Coast, Australia
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container pb-12">
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
