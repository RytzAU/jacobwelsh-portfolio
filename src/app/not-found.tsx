import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="main" className="min-h-screen flex flex-col">
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

      <section className="flex-1 flex items-center">
        <div className="container py-24">
          <p className="text-xs uppercase tracking-wider text-tertiary font-body mb-6">
            404
          </p>
          <h1 className="text-hero font-display text-primary mb-8">
            Page not found.
          </h1>
          <p className="text-body-lg text-secondary font-body max-w-content mb-12">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/"
            className="text-body text-secondary hover:text-primary transition-colors duration-500 font-body"
          >
            Back to index &rarr;
          </Link>
        </div>
      </section>
    </main>
  )
}
