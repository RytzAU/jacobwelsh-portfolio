import { Reveal } from '@/components/Reveal'
import { ScreenshotReel } from '@/components/ScreenshotReel'

const lifecycleStages = [
  'Enquiry',
  'Consultation',
  'Quoted',
  'Deposit Paid',
  'Scheduled',
  'In Progress',
  'Aftercare',
  'Completed',
  'Healed',
]

const bookingSlides = [
  { label: 'Enquiry Form' },
  { label: 'Consultation Booking' },
  { label: 'Deposit Payment' },
  { label: 'Session Confirmation' },
  { label: 'Aftercare Sequence' },
]

const messagingSlides = [
  { label: 'Project Conversation' },
  { label: 'General Channel' },
  { label: 'Admin Inbox' },
]

const dashboardSlides = [
  { label: 'Dashboard Overview' },
  { label: 'Project Pipeline' },
  { label: 'Client Management' },
  { label: 'Financial Reports' },
  { label: 'Calendar View' },
]

export function InkfolioDeepDives() {
  return (
    <>
      {/* Deep Dive 1: Nine-Stage Project Lifecycle */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <div className="max-w-wide">
          <Reveal>
            <h2 className="text-title font-display text-primary mb-6">
              Nine-Stage Project Lifecycle
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-body text-secondary font-body max-w-content mb-12">
              Every tattoo project flows through a defined state machine from
              initial enquiry to healed. Calendly webhooks and Stripe payment
              confirmations automatically advance projects between stages
              without manual intervention&mdash;the artist focuses on the work,
              not the administration.
            </p>
          </Reveal>

          {/* Pipeline visualization */}
          <Reveal delay={160}>
            <div className="flex flex-wrap items-center gap-2 mb-12">
              {lifecycleStages.map((stage, i) => (
                <span key={stage} className="flex items-center gap-2">
                  <span className="px-4 py-2.5 border border-border text-xs tracking-wider text-primary font-body uppercase">
                    {stage}
                  </span>
                  {i < lifecycleStages.length - 1 && (
                    <span className="text-tertiary text-small">&rarr;</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-body text-secondary font-body max-w-content">
              Each status transition triggers the appropriate client
              communication&mdash;booking confirmations, deposit receipts,
              session reminders, aftercare instructions. The artist sees every
              project&apos;s position in the pipeline at a glance and can
              advance or adjust stages manually when needed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Deep Dive 2: Booking and Payment Flow */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <div className="max-w-wide">
          <Reveal>
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
              <div>
                <p
                  className="font-display text-primary leading-none"
                  style={{ fontSize: 'clamp(4rem, 10vw, 7rem)' }}
                >
                  5
                </p>
                <p className="mt-3 text-small text-tertiary font-body">
                  automated cron jobs running email workflows
                </p>
              </div>
              <div>
                <h2 className="text-title font-display text-primary mb-6">
                  Booking &amp; Payment Flow
                </h2>
                <p className="text-body text-secondary font-body">
                  Calendly handles scheduling, Stripe handles money, and five
                  Vercel cron jobs orchestrate everything in between. Consultation
                  reminders fire twenty-four hours before appointments. Deposit
                  payment links are sent automatically after quotes. Aftercare
                  sequences trigger on session completion with timed follow-ups.
                  Failed payments get retry nudges. PDF invoices and receipts
                  generate via React PDF.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-12">
            <ScreenshotReel slides={bookingSlides} className="aspect-video" />
          </div>
        </Reveal>
      </section>

      {/* Deep Dive 3: Real-time Client Communication */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <div className="max-w-wide">
          <Reveal>
            <h2 className="text-title font-display text-primary mb-6">
              Real-time Client Communication
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-body text-secondary font-body max-w-content mb-4">
              Dual-channel messaging built on Supabase Realtime. Each project
              has its own conversation thread for design discussion, plus a
              general channel for everything else. The artist sees a unified
              inbox with unread counts across all clients.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-body text-secondary font-body max-w-content">
              Row-level security ensures complete client isolation&mdash;clients
              see only their own conversations, while the artist sees everything.
              Messages appear instantly on both sides without polling.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-12">
            <ScreenshotReel slides={messagingSlides} className="aspect-video" />
          </div>
        </Reveal>
      </section>

      {/* Deep Dive 4: Artist Operations Dashboard */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <div className="max-w-wide">
          <Reveal>
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
              <div>
                <p
                  className="font-display text-primary leading-none"
                  style={{ fontSize: 'clamp(4rem, 10vw, 7rem)' }}
                >
                  44
                </p>
                <p className="mt-3 text-small text-tertiary font-body">
                  routes across marketing, portal, admin, and API
                </p>
              </div>
              <div>
                <h2 className="text-title font-display text-primary mb-6">
                  Artist Operations Dashboard
                </h2>
                <p className="text-body text-secondary font-body">
                  Nine admin modules give the artist complete operational
                  control. Client CRM with source attribution and lifetime
                  spend. Project pipeline with drag-and-drop status management.
                  Financial dashboard with revenue reporting and invoice
                  history. Calendly-synced calendar. Portfolio management across
                  fourteen tattoo style categories. Waitlist for managing
                  demand. Settings for studio hours, pricing, and email
                  templates.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-12">
            <ScreenshotReel slides={dashboardSlides} className="aspect-video" />
          </div>
        </Reveal>
      </section>
    </>
  )
}
