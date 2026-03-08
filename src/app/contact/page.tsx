import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Jacob Welsh. Open to technical leadership roles and meaningful collaborations. Based on the Gold Coast, Australia.',
  alternates: { canonical: 'https://jacobwelsh.dev/contact' },
  openGraph: {
    title: 'Contact — Jacob Welsh',
    description:
      'Get in touch with Jacob Welsh. Open to technical leadership roles and meaningful collaborations.',
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
            href="/"
            className="text-xs uppercase tracking-wider text-tertiary hover:text-primary transition-colors duration-500 font-body"
          >
            Index
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="flex-1 flex items-center">
        <div className="container py-24">
          <div className="max-w-wide">
            <Reveal>
              <h1 className="text-hero font-display text-primary mb-20">
                Let&apos;s build something.
              </h1>
            </Reveal>

            <div className="space-y-12">
              <Reveal delay={150}>
                <div>
                  <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-3">
                    Email
                  </p>
                  <a
                    href="mailto:hello@jacobwelsh.dev"
                    className="text-title font-display text-primary hover:text-secondary transition-colors duration-500"
                  >
                    hello@jacobwelsh.dev
                  </a>
                </div>
              </Reveal>

              <Reveal delay={250}>
                <div>
                  <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-3">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/jacob-welsh-566a35283/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-title font-display text-primary hover:text-secondary transition-colors duration-500"
                  >
                    /in/jacob-welsh
                  </a>
                </div>
              </Reveal>

              <Reveal delay={350}>
                <div>
                  <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-3">
                    GitHub
                  </p>
                  <div className="space-y-3">
                    <a
                      href="https://github.com/jacobwelsh92"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-title font-display text-primary hover:text-secondary transition-colors duration-500 block"
                    >
                      @jacobwelsh92
                    </a>
                    <a
                      href="https://github.com/RytzAU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-title font-display text-primary hover:text-secondary transition-colors duration-500 block"
                    >
                      @RytzAU
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={450}>
              <p className="mt-24 text-body-lg text-secondary font-body max-w-content">
                Based on the Gold Coast, Australia. Open to technical leadership
                roles and meaningful collaborations.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
