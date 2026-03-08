import { Reveal } from '@/components/Reveal'
import { FeatureVideo } from '@/components/FeatureVideo'

export function RytzApproaches({
  pipelineStages,
}: {
  pipelineStages: string[]
}) {
  return (
    <>
      {/* Multi-Model Intelligence */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <div className="max-w-wide">
          <Reveal>
            <h2 className="text-title font-display text-primary mb-6">
              Multi-Model Intelligence
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-body text-secondary font-body max-w-content">
              Different legal tasks demand different AI capabilities. RYTZ
              orchestrates multiple specialised models&mdash;each selected for
              what it does best. Language understanding, document vision, and
              semantic retrieval work in concert, with an orchestration layer
              routing each task to the optimal engine. The result is analysis
              that&apos;s both faster and more nuanced than any single model
              could achieve.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hero Feature: AI Legal Counsel */}
      <section className="container pb-24">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FeatureVideo
              webm="/videos/rytz-chat.webm"
              mp4="/videos/rytz-chat.mp4"
              className="aspect-[4/3]"
              label="AI Legal Counsel"
            />
            <div>
              <h3 className="text-title font-display text-primary mb-4">
                AI Legal Counsel
              </h3>
              <p className="text-body text-secondary font-body">
                Conversational AI that understands the user&apos;s specific
                case. Context-aware responses grounded in verified legislation,
                with every interaction building a deeper understanding of the
                user&apos;s situation.
              </p>
              <p className="mt-4 text-body text-secondary font-body">
                The system extracts and remembers case facts across
                conversations&mdash;parties, timelines, assets, concerns, legal
                issues. It surfaces relevant authorities, identifies evidence
                gaps, and suggests actionable next steps. Every response
                references real law. Every suggestion considers the user&apos;s
                specific circumstances.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Document Pipeline */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <div className="max-w-wide">
          <Reveal>
            <h2 className="text-title font-display text-primary mb-6">
              Proprietary Document Pipeline
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-body text-secondary font-body max-w-content mb-12">
              Legal documents are dense, varied, and unforgiving of
              misinterpretation. RYTZ&apos;s document intelligence system
              processes any legal document&mdash;court orders, affidavits,
              financial statements, correspondence&mdash;through a purpose-built
              pipeline that recognises document types automatically and applies
              specialised analysis tailored to each.
            </p>
          </Reveal>

          {/* Pipeline visualization */}
          <Reveal delay={160}>
            <div className="flex flex-wrap items-center gap-3 mb-12">
              {pipelineStages.map((stage, i) => (
                <span key={stage} className="flex items-center gap-3">
                  <span className="px-5 py-3 border border-border text-xs tracking-wider text-primary font-body uppercase">
                    {stage}
                  </span>
                  {i < pipelineStages.length - 1 && (
                    <span className="text-tertiary text-small">&rarr;</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-body text-secondary font-body max-w-content">
              The system identifies document types through multi-stage detection,
              routes each through specialised extraction prompts, validates
              output quality, and persists high-confidence results automatically.
              A second intelligence layer enriches raw extraction with strategic
              analysis&mdash;relevant legal provisions, precedent references,
              and case-specific insights.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Video Pair: Document Intelligence + Evidence */}
      <Reveal>
        <section className="container pb-24">
          <div className="grid md:grid-cols-2 gap-4">
            <FeatureVideo
              webm="/videos/rytz-documents.webm"
              className="aspect-[4/3]"
              label="Document Intelligence"
            />
            <FeatureVideo
              webm="/videos/rytz-evidence.webm"
              mp4="/videos/rytz-evidence.mp4"
              className="aspect-[4/3]"
              label="Evidence Portfolio"
            />
          </div>
        </section>
      </Reveal>

      {/* Verified Legal Knowledge */}
      <section className="container pb-24">
        <Reveal>
          <div className="border-t border-border pt-16 md:pt-24" />
        </Reveal>

        <div className="max-w-wide grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
          <Reveal>
            <div>
              <p
                className="font-display text-primary leading-none"
                style={{ fontSize: 'clamp(4rem, 10vw, 7rem)' }}
              >
                Thousands
              </p>
              <p className="mt-3 text-small text-tertiary font-body">
                of verified legal provisions powering every interaction
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <h2 className="text-title font-display text-primary mb-6">
                Verified Legal Knowledge
              </h2>
              <p className="text-body text-secondary font-body">
                Every analysis is grounded in a comprehensive, practitioner-verified
                knowledge base spanning Australian family law&mdash;legislation,
                court rules, case authorities, and procedural requirements. This
                isn&apos;t generic AI. Every response references real law. Every
                form includes verified guidance. Every deadline is sourced from
                legislation. Court registry information, filing fees, and witness
                requirements are maintained with legal practitioner verification.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Continuous Case Intelligence */}
      <section className="container pb-24">
        <div className="max-w-wide">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-title font-display text-primary mb-6">
                  Continuous Case Intelligence
                </h2>
                <p className="text-body text-secondary font-body">
                  The platform learns from every interaction. As users converse
                  with the AI, upload documents, and build evidence, RYTZ
                  constructs a living picture of their case&mdash;parties,
                  timelines, assets, concerns, legal issues.
                </p>
                <p className="mt-4 text-body text-secondary font-body">
                  This accumulated intelligence makes every subsequent
                  interaction more contextual. Chat responses reference earlier
                  conversations. Document analysis considers existing evidence.
                  Form fields pre-populate from known facts. The platform gets
                  smarter the more it&apos;s used.
                </p>
              </div>
              <FeatureVideo
                webm="/videos/rytz-casefile.webm"
                mp4="/videos/rytz-casefile.mp4"
                className="aspect-[4/3]"
                label="Case Intelligence"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video Pair: Forms + Case File */}
      <Reveal>
        <section className="container pb-24">
          <div className="grid md:grid-cols-2 gap-4">
            <FeatureVideo
              webm="/videos/rytz-forms.webm"
              mp4="/videos/rytz-forms.mp4"
              className="aspect-[4/3]"
              label="Forms Library"
            />
            <FeatureVideo
              webm="/videos/rytz-casefile.webm"
              mp4="/videos/rytz-casefile.mp4"
              className="aspect-[4/3]"
              label="Case File"
            />
          </div>
        </section>
      </Reveal>
    </>
  )
}
