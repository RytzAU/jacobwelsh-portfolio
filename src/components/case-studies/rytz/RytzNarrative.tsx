import { Reveal } from '@/components/Reveal'
import { DemoVideo } from '@/components/DemoVideo'

export function RytzNarrative() {
  return (
    <>
      <section className="container pb-24">
        <div className="max-w-content">
          <Reveal>
            <p className="text-body-lg text-secondary font-body">
              Thousands of Australians navigate family law proceedings without
              legal representation every year. The system is complex, emotionally
              charged, and unforgiving of mistakes. Critical deadlines get missed.
              Evidence goes unorganised. Court documents are filed incorrectly.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-body-lg text-secondary font-body">
              RYTZ consolidates the entire case preparation workflow into a
              single platform. Users research relevant law, upload and analyse
              documents, build structured evidence portfolios, plan settlements,
              and prepare court-ready materials&mdash;guided at every step by
              AI that understands Australian family law and learns the specifics
              of their case.
            </p>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="container pb-24">
          <DemoVideo
            webm="/videos/rytz-demo.webm"
            mp4="/videos/rytz-demo.mp4"
            poster="/videos/rytz-demo-poster.jpg"
            className="aspect-video"
            label="Product Demo"
          />
        </section>
      </Reveal>
    </>
  )
}
