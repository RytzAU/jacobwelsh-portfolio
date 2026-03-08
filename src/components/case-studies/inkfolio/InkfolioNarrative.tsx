import { Reveal } from '@/components/Reveal'
import { ScreenshotReel } from '@/components/ScreenshotReel'

const slides = [
  { label: 'Marketing Site' },
  { label: 'Client Portal' },
  { label: 'Artist Admin' },
  { label: 'Booking Flow' },
  { label: 'Financial Dashboard' },
]

export function InkfolioNarrative() {
  return (
    <>
      <section className="container pb-24">
        <div className="max-w-content">
          <Reveal>
            <p className="text-body-lg text-secondary font-body">
              A tattoo artist managing a growing studio through Instagram DMs,
              spreadsheets, manual invoicing, and printed aftercare
              instructions. Design revisions scattered across email threads.
              Deposits tracked by memory. No visibility into which clients were
              at which stage of their project.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-body-lg text-secondary font-body">
              Inkfolio replaces all of it with a unified platform. A public
              portfolio and blog funnel enquiries into a structured
              nine-stage lifecycle. Clients track their project, message the
              artist, and sign waivers digitally. The artist manages everything
              from a single dashboard&mdash;pipeline, finances, calendar,
              waitlist&mdash;with five automated email workflows handling
              reminders, aftercare sequences, and payment nudges.
            </p>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="container pb-24">
          <ScreenshotReel slides={slides} className="aspect-video" />
        </section>
      </Reveal>
    </>
  )
}
