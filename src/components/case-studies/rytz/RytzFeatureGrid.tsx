import { Reveal } from '@/components/Reveal'
import { FeatureVideo } from '@/components/FeatureVideo'

export function RytzFeatureGrid() {
  return (
    <section className="container pb-24">
      <Reveal>
        <div className="border-t border-border pt-16 md:pt-24" />
      </Reveal>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
        <Reveal>
          <div>
            <FeatureVideo
              webm="/videos/rytz-documents.webm"
              className="aspect-[4/3] mb-6"
              label="Document Intelligence"
            />
            <h3 className="text-title font-display text-primary mb-2">
              Document Intelligence
            </h3>
            <p className="text-small text-secondary font-body">
              Upload any legal document and receive structured analysis.
              Automatic type detection across court orders, affidavits,
              financial statements, and correspondence. The system identifies
              relevant legal provisions and maps findings to the user&apos;s
              case with strategic insights.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div>
            <FeatureVideo
              webm="/videos/rytz-evidence.webm"
              mp4="/videos/rytz-evidence.mp4"
              className="aspect-[4/3] mb-6"
              label="Evidence Portfolio"
            />
            <h3 className="text-title font-display text-primary mb-2">
              Evidence Portfolio
            </h3>
            <p className="text-small text-secondary font-body">
              Structured evidence management with AI-powered relevance
              scoring. Each item is analysed for legal strength, categorised
              by type, and mapped to relevant legal factors. Court-readiness
              metrics track progress from initial collection to
              hearing-ready status.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div>
            <FeatureVideo
              webm="/videos/rytz-forms.webm"
              mp4="/videos/rytz-forms.mp4"
              className="aspect-[4/3] mb-6"
              label="Court Documents"
            />
            <h3 className="text-title font-display text-primary mb-2">
              Court Documents
            </h3>
            <p className="text-small text-secondary font-body">
              Guided completion across 50+ Australian family court forms with
              contextual guidance and validation. Auto-population from known
              case facts. AI-assisted affidavit preparation transforms draft
              content into court-appropriate language with compliance checking.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div>
            <FeatureVideo
              webm="/videos/rytz-chat.webm"
              mp4="/videos/rytz-chat.mp4"
              className="aspect-[4/3] mb-6"
              label="Legal Research"
            />
            <h3 className="text-title font-display text-primary mb-2">
              Legal Research
            </h3>
            <p className="text-small text-secondary font-body">
              Full-text search across legislation, court rules, and case
              authorities with plain-English explanations. Semantic retrieval
              surfaces relevant sections based on the user&apos;s situation.
              Bookmark and annotate for later reference.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
