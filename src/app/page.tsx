import Link from 'next/link'
import { Reveal } from '@/components/Reveal'
import { DemoVideo } from '@/components/DemoVideo'

const projects = [
  {
    slug: 'rytz',
    name: 'RYTZ',
    category: 'Legal Technology',
    brief: 'AI-powered platform for self-represented litigants',
    essence:
      'Twelve integrated modules orchestrating multiple AI models to give ordinary people access to legal capabilities that previously required expensive representation. Every interaction builds a deeper understanding of the user\u2019s case.',
    video: {
      webm: '/videos/rytz-demo.webm',
      mp4: '/videos/rytz-demo.mp4',
      poster: '/videos/rytz-demo-poster.jpg',
      label: 'RYTZ \u2014 Product Demo',
    },
  },
  {
    slug: 'shake',
    name: 'Shake',
    category: 'Healthcare Platform',
    brief: 'Production CRM/ERP for mental health practice',
    essence:
      'A practice management system built around how the business actually operates\u2014invoicing, payroll, scheduling, and clinical documentation, unified into a single platform designed to scale with the practice.',
  },
  {
    slug: 'arqelo',
    name: 'Arqelo',
    category: 'Property Intelligence',
    brief: 'Institutional-grade property investment analysis',
    essence:
      'Institutional-grade property intelligence made accessible. Automated data pipelines aggregate, score, and synthesise suburb-level insights into comprehensive investment briefs that rival analyst-prepared reports.',
  },
]

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number]
}) {
  return (
    <div className="group">
      {project.video ? (
        <DemoVideo
          webm={project.video.webm}
          mp4={project.video.mp4}
          poster={project.video.poster}
          className="aspect-[16/9]"
          label={project.video.label}
        />
      ) : (
        <Link href={`/work/${project.slug}`} className="block">
          <div className="aspect-[16/9] bg-surface overflow-hidden relative transition-colors duration-700 group-hover:bg-elevated">
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-display text-primary/[0.04] select-none leading-none group-hover:text-primary/[0.06] transition-colors duration-700"
                style={{ fontSize: 'clamp(8rem, 20vw, 18rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
        </Link>
      )}
      <Link href={`/work/${project.slug}`} className="block">
        <div className="mt-6 flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-display font-display text-primary group-hover:text-secondary transition-colors duration-500">
              {project.name}
            </h2>
            <p className="mt-1 text-small text-tertiary font-body md:hidden">
              {project.category}
            </p>
          </div>
          <div className="hidden md:flex items-baseline gap-6">
            <span className="text-small text-tertiary font-body">
              {project.brief}
            </span>
            <span className="text-small text-tertiary font-body">
              {project.category}
            </span>
          </div>
        </div>
        <p className="mt-4 text-small text-tertiary font-body max-w-content leading-relaxed">
          {project.essence}
        </p>
      </Link>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="container pt-8">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-tertiary font-body">
            Jacob Welsh
          </span>
          <nav className="flex items-center gap-6">
            <Link
              href="/work"
              className="text-xs uppercase tracking-wider text-tertiary hover:text-primary transition-colors duration-500 font-body"
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="text-xs uppercase tracking-wider text-tertiary hover:text-primary transition-colors duration-500 font-body"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container pt-[18vh] pb-24 md:pb-32">
        <Reveal>
          <h1 className="text-hero font-display text-primary max-w-wide">
            Turning complex problems<br className="hidden md:block" />
            {' '}into simple tools.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-body-lg text-secondary font-body max-w-content">
            I design and engineer platforms for industries where the details
            matter&mdash;legal, healthcare, and property.
          </p>
        </Reveal>
      </section>

      {/* Philosophy */}
      <section className="container pb-24 md:pb-32">
        <Reveal delay={300}>
          <div className="border-t border-border" />
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-[1fr_1px_1fr] gap-12 md:gap-16 max-w-wide">
          <Reveal delay={400}>
            <div>
              <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-6">
                Experience
              </p>
              <p className="text-body text-secondary font-body">
                The experience is the product. Every component, every
                transition, every moment of interaction is shaped with the same
                care as the architecture beneath it. Craft lives in the
                details&mdash;the weight of a typeface, the rhythm of a layout,
                the quiet satisfaction of an interface that simply feels right.
                Nothing exists by accident. Nothing is decorative. The goal is
                always the same: the person using it should never have to think
                about the design at all.
              </p>
            </div>
          </Reveal>

          <Reveal delay={450}>
            <div className="hidden md:block w-px bg-border h-full" />
          </Reveal>

          <Reveal delay={500}>
            <div>
              <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-6">
                Engineering
              </p>
              <p className="text-body text-secondary font-body">
                What the user never sees matters most. Beneath every interface
                is an engine built with uncompromising rigour&mdash;multi-model
                AI orchestration, real-time data pipelines, and systems
                architecture designed to scale invisibly. The sophistication is
                in the silence: platforms that handle immense complexity without
                ever letting it surface. Correct before clever. Safe before
                fast. If the engineering is visible, it has failed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Work */}
      <section className="container pb-32">
        <Reveal>
          <div className="border-t border-border" />
        </Reveal>

        <div className="mt-20 space-y-24">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={100 + index * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* View all */}
      <section className="container pb-16">
        <Reveal>
          <div className="border-t border-border pt-8">
            <Link
              href="/work"
              className="text-small text-secondary hover:text-primary transition-colors duration-500 font-body"
            >
              View all work &rarr;
            </Link>
          </div>
        </Reveal>
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
