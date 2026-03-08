'use client'

import { useEffect, useRef, useState } from 'react'

export function ShakeEcosystem() {
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
            .eco-label {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 10px;
              letter-spacing: 0.1em;
              fill: #6E6A64;
              text-transform: uppercase;
            }
            .eco-label-light {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 10px;
              letter-spacing: 0.12em;
              fill: #F5F1EB;
              text-transform: uppercase;
            }
            .eco-sublabel {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 8px;
              letter-spacing: 0.08em;
              fill: #9E9A94;
              text-transform: uppercase;
            }
            .eco-sublabel-light {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 7.5px;
              letter-spacing: 0.06em;
              fill: rgba(245,241,235,0.45);
              text-transform: uppercase;
            }
            .eco-header {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 8px;
              letter-spacing: 0.15em;
              fill: #9E9A94;
              text-transform: uppercase;
            }
          `}</style>
        </defs>

        {/* ── Column Headers ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1s ease',
            transitionDelay: '0.2s',
          }}
        >
          <text x="130" y="48" textAnchor="middle" className="eco-header">
            Applications
          </text>
          <text x="670" y="48" textAnchor="middle" className="eco-header">
            Integrations
          </text>
        </g>

        {/* ── Left: Applications (2 boxes, taller) ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.1s',
          }}
        >
          <rect x="50" y="80" width="160" height="100" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="130" y="122" textAnchor="middle" dominantBaseline="middle" className="eco-label">
            Admin Portal
          </text>
          <text x="130" y="145" textAnchor="middle" dominantBaseline="middle" className="eco-sublabel">
            16 Modules · 60 Pages
          </text>
        </g>

        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.2s',
          }}
        >
          <rect x="50" y="260" width="160" height="100" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="130" y="302" textAnchor="middle" dominantBaseline="middle" className="eco-label">
            Marketing Site
          </text>
          <text x="130" y="325" textAnchor="middle" dominantBaseline="middle" className="eco-sublabel">
            CMS-Driven · SEO
          </text>
        </g>

        {/* ── Center: Operations Engine ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.35s',
          }}
        >
          <rect x="290" y="65" width="220" height="320" fill="#1A1917" />
          <text x="400" y="190" textAnchor="middle" dominantBaseline="middle" className="eco-label-light">
            Operations
          </text>
          <text x="400" y="210" textAnchor="middle" dominantBaseline="middle" className="eco-label-light">
            Engine
          </text>
          <line x1="360" y1="228" x2="440" y2="228" stroke="rgba(245,241,235,0.15)" strokeWidth="1" />
          <text x="400" y="250" textAnchor="middle" dominantBaseline="middle" className="eco-sublabel-light">
            Invoicing · Payroll
          </text>
          <text x="400" y="266" textAnchor="middle" dominantBaseline="middle" className="eco-sublabel-light">
            Scheduling · Clinical
          </text>
          <text x="400" y="282" textAnchor="middle" dominantBaseline="middle" className="eco-sublabel-light">
            Analytics · CRM
          </text>
        </g>

        {/* ── Right: Integrations (3 boxes) ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.45s',
          }}
        >
          <rect x="590" y="70" width="160" height="70" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="670" y="100" textAnchor="middle" dominantBaseline="middle" className="eco-label">
            Accounting
          </text>
          <text x="670" y="120" textAnchor="middle" dominantBaseline="middle" className="eco-sublabel">
            Two-Way Sync
          </text>
        </g>

        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.55s',
          }}
        >
          <rect x="590" y="190" width="160" height="70" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="670" y="220" textAnchor="middle" dominantBaseline="middle" className="eco-label">
            Calendar
          </text>
          <text x="670" y="240" textAnchor="middle" dominantBaseline="middle" className="eco-sublabel">
            Outlook Integration
          </text>
        </g>

        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.65s',
          }}
        >
          <rect x="590" y="310" width="160" height="70" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="670" y="340" textAnchor="middle" dominantBaseline="middle" className="eco-label">
            Email
          </text>
          <text x="670" y="360" textAnchor="middle" dominantBaseline="middle" className="eco-sublabel">
            Campaigns · Automation
          </text>
        </g>

        {/* ── Connecting Lines ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.5s ease',
            transitionDelay: '0.5s',
          }}
        >
          {/* Left → Center */}
          <line x1="210" y1="130" x2="290" y2="130" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="210" y1="310" x2="290" y2="310" stroke="#D0CCC6" strokeWidth="1" />
          {/* Center → Right */}
          <line x1="510" y1="105" x2="590" y2="105" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="510" y1="225" x2="590" y2="225" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="510" y1="345" x2="590" y2="345" stroke="#D0CCC6" strokeWidth="1" />
        </g>

        {/* ── Animated data flow ── */}
        {visible && (
          <g>
            {/* Left → Center */}
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M210,130 L290,130" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2.4s" path="M210,310 L290,310" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="2.4s" />
            </circle>

            {/* Center → Right */}
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2s" path="M510,105 L590,105" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2.7s" path="M510,225 L590,225" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="2.7s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="3.3s" path="M510,345 L590,345" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="3.3s" />
            </circle>
          </g>
        )}
      </svg>
    </div>
  )
}
