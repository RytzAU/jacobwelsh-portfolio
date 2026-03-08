'use client'

import { useEffect, useRef, useState } from 'react'

export function RhbcArchitecture() {
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
            .rh-label {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 10px;
              letter-spacing: 0.1em;
              fill: #6E6A64;
              text-transform: uppercase;
            }
            .rh-label-light {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 10px;
              letter-spacing: 0.12em;
              fill: #F5F1EB;
              text-transform: uppercase;
            }
            .rh-sublabel {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 8px;
              letter-spacing: 0.08em;
              fill: #9E9A94;
              text-transform: uppercase;
            }
            .rh-sublabel-light {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 7.5px;
              letter-spacing: 0.06em;
              fill: rgba(245,241,235,0.45);
              text-transform: uppercase;
            }
            .rh-header {
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
            transitionDelay: '0.15s',
          }}
        >
          <text x="130" y="30" textAnchor="middle" className="rh-header">
            Interactions
          </text>
          <text x="400" y="30" textAnchor="middle" className="rh-header">
            Platform
          </text>
          <text x="670" y="30" textAnchor="middle" className="rh-header">
            Infrastructure
          </text>
        </g>

        {/* ── Left Column: Interaction Layer ── */}

        {/* Animation Engine */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.1s',
          }}
        >
          <rect x="40" y="50" width="180" height="85" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="130" y="82" textAnchor="middle" dominantBaseline="middle" className="rh-label">
            Animation Engine
          </text>
          <text x="130" y="102" textAnchor="middle" dominantBaseline="middle" className="rh-sublabel">
            GSAP · ScrollTrigger · Lenis
          </text>
        </g>

        {/* Custom Interactions */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.2s',
          }}
        >
          <rect x="40" y="155" width="180" height="85" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="130" y="187" textAnchor="middle" dominantBaseline="middle" className="rh-label">
            Custom Interactions
          </text>
          <text x="130" y="207" textAnchor="middle" dominantBaseline="middle" className="rh-sublabel">
            Magnetic · 3D Tilt · Cursor
          </text>
        </g>

        {/* Portfolio System */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.3s',
          }}
        >
          <rect x="40" y="260" width="180" height="85" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="130" y="292" textAnchor="middle" dominantBaseline="middle" className="rh-label">
            Portfolio System
          </text>
          <text x="130" y="312" textAnchor="middle" dominantBaseline="middle" className="rh-sublabel">
            Filtering · Lightbox · Slider
          </text>
        </g>

        {/* ── Center: Platform Core (dark block) ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.35s',
          }}
        >
          <rect x="290" y="50" width="220" height="295" fill="#1A1917" />
          <text x="400" y="130" textAnchor="middle" dominantBaseline="middle" className="rh-label-light">
            Astro
          </text>
          <text x="400" y="150" textAnchor="middle" dominantBaseline="middle" className="rh-label-light">
            React 19
          </text>
          <line x1="355" y1="170" x2="445" y2="170" stroke="rgba(245,241,235,0.15)" strokeWidth="1" />
          <text x="400" y="195" textAnchor="middle" dominantBaseline="middle" className="rh-sublabel-light">
            6 Pages
          </text>
          <text x="400" y="215" textAnchor="middle" dominantBaseline="middle" className="rh-sublabel-light">
            17 Components
          </text>
          <text x="400" y="235" textAnchor="middle" dominantBaseline="middle" className="rh-sublabel-light">
            4 Service Pages
          </text>
          <text x="400" y="255" textAnchor="middle" dominantBaseline="middle" className="rh-sublabel-light">
            Contact System
          </text>
        </g>

        {/* ── Right Column: Infrastructure ── */}

        {/* SEO System */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.45s',
          }}
        >
          <rect x="580" y="50" width="180" height="85" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="670" y="82" textAnchor="middle" dominantBaseline="middle" className="rh-label">
            SEO System
          </text>
          <text x="670" y="102" textAnchor="middle" dominantBaseline="middle" className="rh-sublabel">
            Schema · Sitemap · OG
          </text>
        </g>

        {/* Design System */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.55s',
          }}
        >
          <rect x="580" y="155" width="180" height="85" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="670" y="187" textAnchor="middle" dominantBaseline="middle" className="rh-label">
            Design System
          </text>
          <text x="670" y="207" textAnchor="middle" dominantBaseline="middle" className="rh-sublabel">
            Inter · 8pt Grid · WCAG
          </text>
        </g>

        {/* Performance */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.65s',
          }}
        >
          <rect x="580" y="260" width="180" height="85" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="670" y="292" textAnchor="middle" dominantBaseline="middle" className="rh-label">
            Performance
          </text>
          <text x="670" y="312" textAnchor="middle" dominantBaseline="middle" className="rh-sublabel">
            Partial Hydration · Static
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
          <line x1="220" y1="92" x2="290" y2="92" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="220" y1="197" x2="290" y2="197" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="220" y1="302" x2="290" y2="302" stroke="#D0CCC6" strokeWidth="1" />
          {/* Center → Right */}
          <line x1="510" y1="92" x2="580" y2="92" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="510" y1="197" x2="580" y2="197" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="510" y1="302" x2="580" y2="302" stroke="#D0CCC6" strokeWidth="1" />
        </g>

        {/* ── Bottom stats bar ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.2s ease',
            transitionDelay: '0.9s',
          }}
        >
          <line x1="40" y1="375" x2="760" y2="375" stroke="#D0CCC6" strokeWidth="1" />
          <text x="130" y="405" textAnchor="middle" className="rh-sublabel">
            6 Pages
          </text>
          <text x="310" y="405" textAnchor="middle" className="rh-sublabel">
            17 Components
          </text>
          <text x="490" y="405" textAnchor="middle" className="rh-sublabel">
            6 Services
          </text>
          <text x="670" y="405" textAnchor="middle" className="rh-sublabel">
            GSAP Powered
          </text>
        </g>

        {/* ── Animated data flow ── */}
        {visible && (
          <g>
            {/* Left → Center */}
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M220,92 L290,92" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2.1s" path="M220,197 L290,197" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="2.1s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2.7s" path="M220,302 L290,302" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="2.7s" />
            </circle>

            {/* Center → Right */}
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2s" path="M510,92 L580,92" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2.6s" path="M510,197 L580,197" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="2.6s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="3.2s" path="M510,302 L580,302" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="3.2s" />
            </circle>
          </g>
        )}
      </svg>
    </div>
  )
}
