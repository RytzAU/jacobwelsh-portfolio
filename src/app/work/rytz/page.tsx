import type { Metadata } from 'next'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'RYTZ — AI Legal Platform',
  description:
    'Case study: AI-powered platform giving self-represented litigants the tools to navigate Australian family law. Twelve integrated modules spanning legal research, document intelligence, and case strategy.',
  alternates: { canonical: 'https://jacobwelsh.dev/work/rytz' },
  openGraph: {
    title: 'RYTZ — AI Legal Platform — Jacob Welsh',
    description:
      'AI-powered platform for self-represented litigants. Multi-model AI orchestration, document intelligence, and case strategy tools.',
    url: 'https://jacobwelsh.dev/work/rytz',
  },
}
import { RytzArchitecture } from '@/components/diagrams/RytzArchitecture'
import { RytzHero } from '@/components/case-studies/rytz/RytzHero'
import { RytzNarrative } from '@/components/case-studies/rytz/RytzNarrative'
import { RytzApproaches } from '@/components/case-studies/rytz/RytzApproaches'
import { RytzFeatureGrid } from '@/components/case-studies/rytz/RytzFeatureGrid'
import { RytzPlatform } from '@/components/case-studies/rytz/RytzPlatform'
import { RytzMeta } from '@/components/case-studies/rytz/RytzMeta'

const pipelineStages = [
  'Input',
  'Recognition',
  'Extraction',
  'Analysis',
  'Intelligence',
]

const platformModules = [
  {
    group: 'Research & Knowledge',
    items: [
      'Legal Research — verified legislation and court rules with plain-English explanations',
      'Case Library — searchable precedent database for Australian family law',
      'My Research — personal workspace for saved cases and bookmarked sections',
    ],
  },
  {
    group: 'Document Intelligence',
    items: [
      'Document Analysis — upload any legal document for structured AI extraction',
      'Affidavit Preparation — AI-assisted drafting with strength scoring and compliance',
      'Forms Library — guided completion across 50+ Australian court documents',
    ],
  },
  {
    group: 'Case Strategy',
    items: [
      'Evidence Portfolio — organised vault with AI relevance analysis and court-readiness',
      'Settlement Planner — property settlement analysis aligned to legislative framework',
      'Parenting Planner — best-interests factor assessment with evidence gap identification',
    ],
  },
  {
    group: 'Command Centre',
    items: [
      'Intelligence Dashboard — case overview with strength scoring and next actions',
      'AI Legal Counsel — context-aware conversation that learns your case over time',
      'Case Planner — court dates, deadlines, and milestone tracking',
    ],
  },
]

export default function RytzCaseStudy() {
  return (
    <main id="main" className="min-h-screen">
      <RytzHero />

      <Reveal delay={300}>
        <section className="container pb-24">
          <RytzArchitecture />
        </section>
      </Reveal>

      <RytzNarrative />
      <RytzApproaches pipelineStages={pipelineStages} />
      <RytzFeatureGrid />
      <RytzPlatform modules={platformModules} />
      <RytzMeta />
    </main>
  )
}
