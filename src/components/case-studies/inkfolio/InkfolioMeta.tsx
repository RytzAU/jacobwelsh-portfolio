import Link from 'next/link'
import { Reveal } from '@/components/Reveal'

export function InkfolioMeta() {
  return (
    <>
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-12">
            <div className="flex flex-wrap gap-x-16 gap-y-6 text-small font-body">
              <div>
                <p className="text-tertiary mb-1">Role</p>
                <p className="text-primary">Sole Developer</p>
              </div>
              <div>
                <p className="text-tertiary mb-1">Client</p>
                <p className="text-primary">Amzart (Memento Tattoo Studio)</p>
              </div>
              <div>
                <p className="text-tertiary mb-1">Timeline</p>
                <p className="text-primary">2026</p>
              </div>
              <div>
                <p className="text-tertiary mb-1">Stack</p>
                <p className="text-primary">
                  Next.js 16, TypeScript, Supabase, Stripe, Calendly, Resend
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

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
    </>
  )
}
