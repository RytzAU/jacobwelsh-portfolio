'use client'

import { useEffect, useRef, useState } from 'react'

export function ArqeloDataPipeline() {
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
            .dp-stat {
              font-family: var(--font-display, serif);
              font-size: 13px;
              fill: #6E6A64;
              font-weight: 300;
            }
          `}</style>
        </defs>

        {/* ── Row headers ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1s ease',
            transitionDelay: '0.15s',
          }}
        >
          <text x="400" y="30" textAnchor="middle" className="dp-header">
            Data Sources
          </text>
          <text x="400" y="255" textAnchor="middle" className="dp-header">
            Product
          </text>
        </g>

        {/* ── Top: 4 Data Source boxes ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.1s',
          }}
        >
          <rect x="40" y="45" width="160" height="60" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="120" y="72" textAnchor="middle" dominantBaseline="middle" className="dp-label">
            Government
          </text>
          <text x="120" y="90" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel">
            166K+ Transactions
          </text>
        </g>

        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.2s',
          }}
        >
          <rect x="220" y="45" width="160" height="60" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="300" y="72" textAnchor="middle" dominantBaseline="middle" className="dp-label">
            Commercial
          </text>
          <text x="300" y="90" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel">
            Listings · Sold Data
          </text>
        </g>

        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.3s',
          }}
        >
          <rect x="420" y="45" width="160" height="60" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="500" y="72" textAnchor="middle" dominantBaseline="middle" className="dp-label">
            Open Data
          </text>
          <text x="500" y="90" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel">
            Census · Demographics
          </text>
        </g>

        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.4s',
          }}
        >
          <rect x="600" y="45" width="160" height="60" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="680" y="72" textAnchor="middle" dominantBaseline="middle" className="dp-label">
            AI Analysis
          </text>
          <text x="680" y="90" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel">
            LLM · Scoring
          </text>
        </g>

        {/* ── Converging lines: Sources → Engine ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.5s ease',
            transitionDelay: '0.5s',
          }}
        >
          <line x1="120" y1="105" x2="250" y2="145" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="300" y1="105" x2="330" y2="145" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="500" y1="105" x2="470" y2="145" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="680" y1="105" x2="550" y2="145" stroke="#D0CCC6" strokeWidth="1" />
        </g>

        {/* ── Center: Intelligence Engine (dark bar) ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.45s',
          }}
        >
          <rect x="200" y="145" width="400" height="80" fill="#1A1917" />
          <text x="400" y="175" textAnchor="middle" dominantBaseline="middle" className="dp-label-light">
            Intelligence Engine
          </text>
          <line x1="340" y1="192" x2="460" y2="192" stroke="rgba(245,241,235,0.15)" strokeWidth="1" />
          <text x="400" y="210" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel-light">
            Fusion · Scoring · Patterns · Alerts
          </text>
        </g>

        {/* ── Expanding lines: Engine → Product ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.5s ease',
            transitionDelay: '0.6s',
          }}
        >
          <line x1="280" y1="225" x2="170" y2="270" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="400" y1="225" x2="400" y2="270" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="520" y1="225" x2="630" y2="270" stroke="#D0CCC6" strokeWidth="1" />
        </g>

        {/* ── Bottom: 3 Product boxes ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.55s',
          }}
        >
          <rect x="60" y="270" width="220" height="70" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="170" y="298" textAnchor="middle" dominantBaseline="middle" className="dp-label">
            Property Scanner
          </text>
          <text x="170" y="318" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel">
            13-Section Intelligence Briefs
          </text>
        </g>

        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.65s',
          }}
        >
          <rect x="290" y="270" width="220" height="70" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="400" y="298" textAnchor="middle" dominantBaseline="middle" className="dp-label">
            Portfolio Engine
          </text>
          <text x="400" y="318" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel">
            Forecasting · Wealth Tracking
          </text>
        </g>

        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.75s',
          }}
        >
          <rect x="520" y="270" width="220" height="70" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="630" y="298" textAnchor="middle" dominantBaseline="middle" className="dp-label">
            Market Intelligence
          </text>
          <text x="630" y="318" textAnchor="middle" dominantBaseline="middle" className="dp-sublabel">
            Suburb Scoring · Alerts
          </text>
        </g>

        {/* ── Bottom bar: infrastructure ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.2s ease',
            transitionDelay: '0.8s',
          }}
        >
          <line x1="60" y1="370" x2="740" y2="370" stroke="#D0CCC6" strokeWidth="1" />
          <text x="150" y="390" textAnchor="middle" className="dp-sublabel">
            81 Models
          </text>
          <text x="310" y="390" textAnchor="middle" className="dp-sublabel">
            90 Endpoints
          </text>
          <text x="490" y="390" textAnchor="middle" className="dp-sublabel">
            10 Integrations
          </text>
          <text x="650" y="390" textAnchor="middle" className="dp-sublabel">
            4 Subscription Tiers
          </text>
        </g>

        {/* ── Animated data flow ── */}
        {visible && (
          <g>
            {/* Sources → Engine (converging) */}
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M120,105 L250,145" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2s" path="M300,105 L330,145" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2.5s" path="M500,105 L470,145" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="2.5s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="3s" path="M680,105 L550,145" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="3s" />
            </circle>

            {/* Engine → Product (expanding) */}
            <circle r="2.5" fill="#F5F1EB" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2.2s" path="M280,225 L170,270" />
              <animate attributeName="opacity" values="0;0.6;0.6;0" dur="3s" repeatCount="indefinite" begin="2.2s" />
            </circle>
            <circle r="2.5" fill="#F5F1EB" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2.8s" path="M400,225 L400,270" />
              <animate attributeName="opacity" values="0;0.6;0.6;0" dur="3s" repeatCount="indefinite" begin="2.8s" />
            </circle>
            <circle r="2.5" fill="#F5F1EB" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="3.4s" path="M520,225 L630,270" />
              <animate attributeName="opacity" values="0;0.6;0.6;0" dur="3s" repeatCount="indefinite" begin="3.4s" />
            </circle>
          </g>
        )}
      </svg>
    </div>
  )
}
