import Link from 'next/link'
import { Reveal } from '@/components/Reveal'
import { RhbcArchitecture } from '@/components/diagrams/RhbcArchitecture'
import { ScreenshotReel } from '@/components/ScreenshotReel'

const overviewSlides = [
  { label: 'Homepage — video hero with animated CTAs', image: undefined },
  { label: 'Services grid — six categories with stagger reveals', image: undefined },
  { label: 'Portfolio — filterable project gallery', image: undefined },
  { label: 'Before and after — transformation slider', image: undefined },
  { label: 'Contact — validated form with budget qualification', image: undefined },
]

const interactionSlides = [
  { label: 'Magnetic button — cursor-following hover', image: undefined },
  { label: '3D tilt card — perspective transforms', image: undefined },
  { label: 'Custom cursor — dual-layer with scaling', image: undefined },
]

const portfolioSlides = [
  { label: 'Portfolio filter — category and budget search', image: undefined },
  { label: 'Before and after slider — drag comparison', image: undefined },
  { label: 'Image lightbox — full-screen gallery', image: undefined },
]

const platformModules = [
  {
    group: 'Marketing Platform — 6 Pages',
    items: [
      'Homepage — video hero, services grid, projects showcase, testimonials, stats, and contact',
      'Portfolio — filterable project gallery with before-and-after sliders and full-screen lightbox',
      'Service Pages — four dedicated pages for concrete cutting, office strip-out, project management, and waste removal',
      'Contact System — real-time validated form with project type selection, budget qualification, and privacy notice',
    ],
  },
  {
    group: 'Interaction Engine',
    items: [
      'GSAP Animations — nine reusable scroll-triggered functions including fade, stagger, split text, and parallax',
      'Custom Cursor — dual-layer cursor with smooth following, interactive scaling, and touch device detection',
      'Magnetic Buttons — cursor-following hover effect with elastic bounce, three variants, and three sizes',
      '3D Tilt Cards — real-time cursor tracking with dynamic glow, perspective transforms, and elastic return',
    ],
  },
  {
    group: 'Design and Performance',
    items: [
      'Design System — Inter Variable typography, eight-point grid, six-level shadow system, and WCAG 2.2 AA compliance',
      'Smooth Scrolling — Lenis integration with locomotive-quality scroll behaviour and SplitType text reveals',
      'Responsive Architecture — mobile-first with four-column mobile, eight-column tablet, and twelve-column desktop grids',
      'Performance — Astro partial hydration, static-first rendering, and sub-two-point-five-second LCP target',
    ],
  },
  {
    group: 'Infrastructure',
    items: [
      'Astro Framework — static-first architecture with React islands for interactive components and zero default JavaScript',
      'SEO System — GeneralContractor JSON-LD schema, dynamic XML sitemap, Open Graph, and Twitter Cards',
      'Structured Data — business details, service catalogue, aggregate ratings, operating hours, and service area',
      'Build Pipeline — TypeScript strict mode, Tailwind CSS 4, Vite bundling, and Vercel deployment',
    ],
  },
]

export default function RhbcPremiumCaseStudy() {
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
            Business Website
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-hero font-display text-primary mb-8">
            RHBC Services
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-body-lg text-secondary font-body max-w-wide">
            A six-page premium marketing website for a Queensland construction
            and demolition services company&mdash;featuring GSAP-powered
            animations with magnetic buttons, three-dimensional card
            interactions, and a custom cursor, a filterable project portfolio
            with before-and-after transformation sliders and full-screen
            lightbox, four dedicated service pages, and a conversion-optimised
            contact system with real-time validation and budget qualification.
          </p>
        </Reveal>
      </section>

      {/* Architecture Diagram */}
      <Reveal delay={300}>
        <section className="container pb-24">
          <RhbcArchitecture />
        </section>
      </Reveal>

      {/* Narrative */}
      <section className="container pb-24">
        <div className="max-w-content">
          <Reveal>
            <p className="text-body-lg text-secondary font-body">
              A construction and demolition company on the Gold Coast needed
              a site that could compete with firms ten times their size. The
              brief was clear&mdash;premium feel, fast performance, and a
              portfolio that could showcase transformation work as
              convincingly as the work itself. Generic WordPress templates
              were off the table.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-body-lg text-secondary font-body">
              The result is a six-page Astro site where every interaction is
              deliberate. A custom cursor tracks across the viewport, buttons
              follow the mouse with magnetic pull, project cards respond to
              cursor position with three-dimensional perspective shifts, and
              nine scroll-triggered animation functions orchestrate content
              reveals across every section. A filterable portfolio showcases
              completed work with before-and-after comparison sliders, and a
              validated contact form qualifies leads by project type and
              budget range before submission.
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
                6
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                unique pages
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                17
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                React components
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                6
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                service categories
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                9
              </p>
              <p className="mt-2 text-small text-tertiary font-body">
                animation utilities
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Deep: Interaction Design ─── */}
      <section className="container pb-24">
        <div className="max-w-wide">
          <Reveal>
            <h2 className="text-title font-display text-primary mb-6">
              Interaction Design
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-body text-secondary font-body max-w-content mb-12">
              Every interactive element runs through GSAP with ScrollTrigger
              orchestrating viewport-based reveals. Nine reusable animation
              functions handle fade-ins, stagger sequences, split-text
              reveals at character, word, and line level, number counters,
              and parallax depth effects. Lenis provides locomotive-quality
              smooth scrolling across the entire site, and SplitType powers
              granular text animations on headings and feature copy.
            </p>
          </Reveal>

          {/* Interaction feature grid */}
          <Reveal delay={160}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
              {[
                { label: 'Magnetic Buttons', desc: 'Cursor Follow · Elastic' },
                { label: '3D Tilt Cards', desc: 'Perspective · Glow' },
                { label: 'Custom Cursor', desc: 'Dual Layer · Scaling' },
                { label: 'Text Reveals', desc: 'Split · Stagger' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-border px-3 py-3 text-center"
                >
                  <p className="text-small text-primary font-body">
                    {item.label}
                  </p>
                  <p className="text-xs text-tertiary font-body mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-body text-secondary font-body max-w-content">
              Buttons track the cursor at a thirty-five percent offset,
              creating a magnetic pull effect with an elastic bounce on
              release. Project cards calculate real-time cursor position
              to apply three-dimensional rotation up to ten degrees on
              each axis, paired with a dynamic glow that follows the
              pointer. A dual-layer custom cursor&mdash;an outer ring
              and inner dot&mdash;follows with a smooth lag, scales on
              interactive elements, and hides automatically on touch
              devices. All animations respect the reduced-motion
              preference.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Screenshot Pair: Interactions + Portfolio */}
      <Reveal>
        <section className="container pb-24">
          <div className="grid md:grid-cols-2 gap-4">
            <ScreenshotReel
              slides={interactionSlides}
              className="aspect-[4/3]"
              interval={3500}
            />
            <ScreenshotReel
              slides={portfolioSlides}
              className="aspect-[4/3]"
              interval={4500}
            />
          </div>
        </section>
      </Reveal>

      {/* ─── Deep: Portfolio & Transformation ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScreenshotReel
              slides={[
                { label: 'Portfolio grid with category filters' },
                { label: 'Before-and-after drag slider' },
                { label: 'Full-screen lightbox with gallery' },
              ]}
              className="aspect-[4/3]"
              interval={3500}
            />
            <div>
              <h2 className="text-title font-display text-primary mb-4">
                Portfolio &amp; Transformation Showcase
              </h2>
              <p className="text-body text-secondary font-body">
                The portfolio page features a multi-field filtering system
                with real-time search, category selection, budget range,
                and location filtering with three-hundred-millisecond
                debounce. Each project carries before-and-after
                transformation images presented through draggable
                comparison sliders with touch and keyboard support.
              </p>
              <p className="mt-4 text-body text-secondary font-body">
                A full-screen lightbox opens project galleries with
                keyboard navigation, swipe gestures, and escape-to-close.
                Project metadata includes location, duration, budget
                range, and specific achievement highlights&mdash;giving
                prospective clients concrete evidence of capability
                before they make contact.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── Deep: Conversion System ─── */}
      <section className="container pb-24">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-title font-display text-primary mb-4">
                Conversion System
              </h2>
              <p className="text-body text-secondary font-body">
                The contact form validates fields in real time with
                project type selection, budget range qualification, and
                a character counter on the message field. Submission
                triggers GSAP-animated success and error states. A
                floating emergency call-to-action button provides
                instant mobile access to the business phone number.
              </p>
              <p className="mt-4 text-body text-secondary font-body">
                Trust signals are layered throughout&mdash;four verified
                testimonials with star ratings and company affiliations,
                animated stat counters showing five-hundred-plus projects
                and ninety-eight percent satisfaction, and a certifications
                bar displaying licensing, insurance, and safety credentials.
                The sticky navigation keeps a quote button and phone
                number visible at all times.
              </p>
            </div>
            <ScreenshotReel
              slides={[
                { label: 'Contact form with budget qualification' },
                { label: 'Testimonials carousel with verified badges' },
                { label: 'Stats dashboard with counter animations' },
              ]}
              className="aspect-[4/3]"
              interval={4000}
            />
          </div>
        </Reveal>

        {/* Services grid */}
        <Reveal delay={120}>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-12">
            {[
              { label: 'Project Mgmt' },
              { label: 'Concrete Cutting' },
              { label: 'Procurement' },
              { label: 'Skilled Labor' },
              { label: 'Office Strip Out' },
              { label: 'Waste Removal' },
            ].map((svc) => (
              <div
                key={svc.label}
                className="border border-border px-3 py-3 text-center"
              >
                <p className="text-xs tracking-wider text-tertiary font-body uppercase">
                  {svc.label}
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
                  Astro, React, GSAP, Tailwind CSS, TypeScript
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
