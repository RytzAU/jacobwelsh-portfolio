'use client'

import { useEffect, useRef, useState } from 'react'

export function DreamingPrintArchitecture() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="aspect-[16/9] bg-[#EDEAE4] relative overflow-hidden"
    >
      <svg
        viewBox="0 0 800 450"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            .dp-label {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 10px;
              letter-spacing: 0.1em;
              fill: #6E6A64;
              text-transform: uppercase;
            }
            .dp-label-light {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 10px;
              letter-spacing: 0.12em;
              fill: #F5F1EB;
              text-transform: uppercase;
            }
            .dp-sublabel {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 8px;
              letter-spacing: 0.08em;
              fill: #9E9A94;
              text-transform: uppercase;
            }
            .dp-sublabel-light {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 7.5px;
              letter-spacing: 0.06em;
              fill: rgba(245,241,235,0.45);
              text-transform: uppercase;
            }
            .dp-header {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 8px;
              letter-spacing: 0.15em;
              fill: #9E9A94;
              text-transform: uppercase;
            }
          `}</style>
        </defs>

        {/* ── Section Header ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1s ease',
            transitionDelay: '0.15s',
          }}
        >
          <text x="400" y="28" textAnchor="middle" className="dp-header">
            Content Ecosystem
          </text>
        </g>

        {/* ── Top Row: Content Boxes ── */}

        {/* Content Library */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.1s',
          }}
        >
          <rect x="40" y="42" width="170" height="110" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="125" y="78" textAnchor="middle" dominantBaseline="middle" className="dp-label">
            Content Library
          </text>
          <text x="125" y="100" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel">
            8 Posts · 20 FAQs
          </text>
          <text x="125" y="118" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel">
            8 Resource Guides
          </text>
        </g>

        {/* Product Catalog */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.2s',
          }}
        >
          <rect x="222" y="42" width="170" height="110" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="307" y="78" textAnchor="middle" dominantBaseline="middle" className="dp-label">
            Product Catalog
          </text>
          <text x="307" y="100" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel">
            5 Enterprise Printers
          </text>
          <text x="307" y="118" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel">
            Full Technical Specs
          </text>
        </g>

        {/* Procurement */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.3s',
          }}
        >
          <rect x="404" y="42" width="170" height="110" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="489" y="78" textAnchor="middle" dominantBaseline="middle" className="dp-label">
            Procurement
          </text>
          <text x="489" y="100" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel">
            Government · Corporate
          </text>
          <text x="489" y="118" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel">
            IPP · RAP Compliance
          </text>
        </g>

        {/* Core Pages */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.4s',
          }}
        >
          <rect x="586" y="42" width="170" height="110" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="671" y="78" textAnchor="middle" dominantBaseline="middle" className="dp-label">
            Core Pages
          </text>
          <text x="671" y="100" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel">
            Home · About · Services
          </text>
          <text x="671" y="118" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel">
            Contact · Legal
          </text>
        </g>

        {/* ── Connecting Lines (Top → Pipeline) ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.5s ease',
            transitionDelay: '0.5s',
          }}
        >
          <line x1="125" y1="152" x2="125" y2="200" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="307" y1="152" x2="307" y2="200" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="489" y1="152" x2="489" y2="200" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="671" y1="152" x2="671" y2="200" stroke="#D0CCC6" strokeWidth="1" />
        </g>

        {/* ── AI Assessment Pipeline (dark block) ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.45s',
          }}
        >
          <rect x="40" y="200" width="716" height="160" fill="#1A1917" />

          {/* Pipeline header */}
          <text
            x="400"
            y="225"
            textAnchor="middle"
            dominantBaseline="middle"
            className="dp-header"
            style={{ fill: 'rgba(245,241,235,0.35)' }}
          >
            AI Assessment Pipeline
          </text>

          {/* Stage 1: Input */}
          <text x="145" y="268" textAnchor="middle" dominantBaseline="middle" className="dp-label-light">
            6-Step Wizard
          </text>
          <text x="145" y="290" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel-light">
            Input Collection
          </text>

          {/* Arrow 1→2 */}
          <line x1="218" y1="276" x2="262" y2="276" stroke="rgba(245,241,235,0.15)" strokeWidth="1" />

          {/* Stage 2: AI */}
          <text x="335" y="268" textAnchor="middle" dominantBaseline="middle" className="dp-label-light">
            Claude AI
          </text>
          <text x="335" y="290" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel-light">
            Analysis · Matching
          </text>

          {/* Arrow 2→3 */}
          <line x1="408" y1="276" x2="452" y2="276" stroke="rgba(245,241,235,0.15)" strokeWidth="1" />

          {/* Stage 3: Report */}
          <text x="525" y="268" textAnchor="middle" dominantBaseline="middle" className="dp-label-light">
            PDF Report
          </text>
          <text x="525" y="290" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel-light">
            Branded Output
          </text>

          {/* Arrow 3→4 */}
          <line x1="598" y1="276" x2="638" y2="276" stroke="rgba(245,241,235,0.15)" strokeWidth="1" />

          {/* Stage 4: Email */}
          <text x="700" y="268" textAnchor="middle" dominantBaseline="middle" className="dp-label-light">
            Email
          </text>
          <text x="700" y="290" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel-light">
            Dual Notifications
          </text>

          {/* Bottom detail line */}
          <line x1="80" y1="320" x2="716" y2="320" stroke="rgba(245,241,235,0.08)" strokeWidth="1" />
          <text x="400" y="342" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel-light">
            4 API Endpoints · Anthropic SDK · Resend · React PDF
          </text>
        </g>

        {/* ── Bottom stats bar ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.2s ease',
            transitionDelay: '0.9s',
          }}
        >
          <line x1="40" y1="390" x2="756" y2="390" stroke="#D0CCC6" strokeWidth="1" />
          <text x="130" y="420" textAnchor="middle" className="dp-sublabel">
            27 Pages
          </text>
          <text x="310" y="420" textAnchor="middle" className="dp-sublabel">
            35 Components
          </text>
          <text x="490" y="420" textAnchor="middle" className="dp-sublabel">
            5 Enterprise Printers
          </text>
          <text x="670" y="420" textAnchor="middle" className="dp-sublabel">
            4 Integrations
          </text>
        </g>

        {/* ── Animated data flow ── */}
        {visible && (
          <g>
            {/* Top → Pipeline (vertical dots) */}
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.5s" path="M125,152 L125,200" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="2.5s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="2s" path="M307,152 L307,200" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="2.5s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="2.5s" path="M489,152 L489,200" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="2.5s" repeatCount="indefinite" begin="2.5s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="3s" path="M671,152 L671,200" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="2.5s" repeatCount="indefinite" begin="3s" />
            </circle>

            {/* Pipeline flow (horizontal dots inside dark block) */}
            <circle r="2" fill="#F5F1EB" opacity="0">
              <animateMotion dur="3.5s" repeatCount="indefinite" begin="2s" path="M218,276 L262,276" />
              <animate attributeName="opacity" values="0;0.4;0.4;0" dur="3.5s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle r="2" fill="#F5F1EB" opacity="0">
              <animateMotion dur="3.5s" repeatCount="indefinite" begin="2.6s" path="M408,276 L452,276" />
              <animate attributeName="opacity" values="0;0.4;0.4;0" dur="3.5s" repeatCount="indefinite" begin="2.6s" />
            </circle>
            <circle r="2" fill="#F5F1EB" opacity="0">
              <animateMotion dur="3.5s" repeatCount="indefinite" begin="3.2s" path="M598,276 L638,276" />
              <animate attributeName="opacity" values="0;0.4;0.4;0" dur="3.5s" repeatCount="indefinite" begin="3.2s" />
            </circle>
          </g>
        )}
      </svg>
    </div>
  )
}
