'use client'

import { useEffect, useRef, useState } from 'react'

export function RytzArchitecture() {
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
            .arch-label {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 10px;
              letter-spacing: 0.1em;
              fill: #6E6A64;
              text-transform: uppercase;
            }
            .arch-label-light {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 10px;
              letter-spacing: 0.12em;
              fill: #F5F1EB;
              text-transform: uppercase;
            }
            .arch-sublabel {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 8px;
              letter-spacing: 0.08em;
              fill: #9E9A94;
              text-transform: uppercase;
            }
            .arch-count {
              font-family: var(--font-display, serif);
              font-size: 14px;
              fill: #6E6A64;
              font-weight: 300;
            }
          `}</style>
        </defs>

        {/* ── Layer 1: Platform Interface ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.1s',
          }}
        >
          <rect
            x="100"
            y="40"
            width="600"
            height="72"
            fill="none"
            stroke="#D0CCC6"
            strokeWidth="1"
          />
          <text
            x="400"
            y="72"
            textAnchor="middle"
            dominantBaseline="middle"
            className="arch-label"
          >
            SRL Platform
          </text>
          <text
            x="400"
            y="92"
            textAnchor="middle"
            dominantBaseline="middle"
            className="arch-sublabel"
          >
            12 integrated legal intelligence tools
          </text>
        </g>

        {/* ── Connecting lines: Platform → Engines ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.5s ease',
            transitionDelay: '0.6s',
          }}
        >
          {/* Platform down to three engines */}
          <line x1="220" y1="112" x2="220" y2="170" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="400" y1="112" x2="400" y2="170" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="580" y1="112" x2="580" y2="170" stroke="#D0CCC6" strokeWidth="1" />

          {/* Engines down to orchestration bar */}
          <line x1="220" y1="242" x2="220" y2="280" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="400" y1="242" x2="400" y2="280" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="580" y1="242" x2="580" y2="280" stroke="#D0CCC6" strokeWidth="1" />

          {/* Orchestration down to intelligence */}
          <line x1="400" y1="320" x2="400" y2="355" stroke="#D0CCC6" strokeWidth="1" />
        </g>

        {/* ── Layer 2: Three AI Engines ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.25s',
          }}
        >
          {/* Language Engine */}
          <rect
            x="120"
            y="170"
            width="200"
            height="72"
            fill="none"
            stroke="#D0CCC6"
            strokeWidth="1"
          />
          <text
            x="220"
            y="202"
            textAnchor="middle"
            dominantBaseline="middle"
            className="arch-label"
          >
            Language Engine
          </text>
          <text
            x="220"
            y="222"
            textAnchor="middle"
            dominantBaseline="middle"
            className="arch-sublabel"
          >
            Reasoning · Analysis · Drafting
          </text>
        </g>

        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.35s',
          }}
        >
          {/* Document Vision */}
          <rect
            x="340"
            y="170"
            width="120"
            height="72"
            fill="none"
            stroke="#D0CCC6"
            strokeWidth="1"
          />
          <text
            x="400"
            y="202"
            textAnchor="middle"
            dominantBaseline="middle"
            className="arch-label"
          >
            Vision
          </text>
          <text
            x="400"
            y="222"
            textAnchor="middle"
            dominantBaseline="middle"
            className="arch-sublabel"
          >
            Extraction
          </text>
        </g>

        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.45s',
          }}
        >
          {/* Semantic Retrieval */}
          <rect
            x="480"
            y="170"
            width="200"
            height="72"
            fill="none"
            stroke="#D0CCC6"
            strokeWidth="1"
          />
          <text
            x="580"
            y="202"
            textAnchor="middle"
            dominantBaseline="middle"
            className="arch-label"
          >
            Semantic Retrieval
          </text>
          <text
            x="580"
            y="222"
            textAnchor="middle"
            dominantBaseline="middle"
            className="arch-sublabel"
          >
            Search · Discovery · Matching
          </text>
        </g>

        {/* ── Layer 3: AI Orchestration Bar (dark) ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.55s',
          }}
        >
          <rect x="100" y="280" width="600" height="40" fill="#1A1917" />
          <text
            x="400"
            y="303"
            textAnchor="middle"
            dominantBaseline="middle"
            className="arch-label-light"
          >
            AI Orchestration Layer
          </text>
        </g>

        {/* ── Layer 4: Intelligence Engine ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.65s',
          }}
        >
          <rect
            x="100"
            y="355"
            width="600"
            height="60"
            fill="none"
            stroke="#D0CCC6"
            strokeWidth="1"
          />
          <text
            x="400"
            y="380"
            textAnchor="middle"
            dominantBaseline="middle"
            className="arch-label"
          >
            Legal Intelligence Engine
          </text>
          <text
            x="400"
            y="400"
            textAnchor="middle"
            dominantBaseline="middle"
            className="arch-sublabel"
          >
            Case Memory · Verified Knowledge Base · Fact Extraction · Knowledge Graph
          </text>
        </g>

        {/* ── Animated data flow ── */}
        {visible && (
          <g>
            {/* Flow down: Platform → Language Engine */}
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion
                dur="3.5s"
                repeatCount="indefinite"
                begin="1.5s"
                path="M220,112 L220,170"
              />
              <animate
                attributeName="opacity"
                values="0;0.5;0.5;0"
                dur="3.5s"
                repeatCount="indefinite"
                begin="1.5s"
              />
            </circle>

            {/* Flow down: Platform → Vision */}
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion
                dur="3.5s"
                repeatCount="indefinite"
                begin="2s"
                path="M400,112 L400,170"
              />
              <animate
                attributeName="opacity"
                values="0;0.5;0.5;0"
                dur="3.5s"
                repeatCount="indefinite"
                begin="2s"
              />
            </circle>

            {/* Flow down: Platform → Semantic */}
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion
                dur="3.5s"
                repeatCount="indefinite"
                begin="2.5s"
                path="M580,112 L580,170"
              />
              <animate
                attributeName="opacity"
                values="0;0.5;0.5;0"
                dur="3.5s"
                repeatCount="indefinite"
                begin="2.5s"
              />
            </circle>

            {/* Flow down: Engines → Orchestration */}
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                begin="2s"
                path="M220,242 L220,280"
              />
              <animate
                attributeName="opacity"
                values="0;0.4;0.4;0"
                dur="4s"
                repeatCount="indefinite"
                begin="2s"
              />
            </circle>

            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                begin="2.8s"
                path="M580,242 L580,280"
              />
              <animate
                attributeName="opacity"
                values="0;0.4;0.4;0"
                dur="4s"
                repeatCount="indefinite"
                begin="2.8s"
              />
            </circle>

            {/* Flow down: Orchestration → Intelligence */}
            <circle r="2.5" fill="#F5F1EB" opacity="0">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                begin="2.2s"
                path="M400,320 L400,355"
              />
              <animate
                attributeName="opacity"
                values="0;0.6;0.6;0"
                dur="3s"
                repeatCount="indefinite"
                begin="2.2s"
              />
            </circle>
          </g>
        )}
      </svg>
    </div>
  )
}
