'use client'

import { useEffect, useRef, useState } from 'react'

export function GreaterPlumbingArchitecture() {
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
            .gp-label {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 10px;
              letter-spacing: 0.1em;
              fill: #6E6A64;
              text-transform: uppercase;
            }
            .gp-label-light {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 10px;
              letter-spacing: 0.12em;
              fill: #F5F1EB;
              text-transform: uppercase;
            }
            .gp-sublabel {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 8px;
              letter-spacing: 0.08em;
              fill: #9E9A94;
              text-transform: uppercase;
            }
            .gp-sublabel-light {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 7.5px;
              letter-spacing: 0.06em;
              fill: rgba(245,241,235,0.45);
              text-transform: uppercase;
            }
            .gp-header {
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
          <text x="130" y="30" textAnchor="middle" className="gp-header">
            Public Website
          </text>
          <text x="400" y="30" textAnchor="middle" className="gp-header">
            Platform
          </text>
          <text x="670" y="30" textAnchor="middle" className="gp-header">
            Integrations
          </text>
        </g>

        {/* ── Left Column: Public Website Pages ── */}
        {/* SEO Hub */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.1s',
          }}
        >
          <rect x="40" y="45" width="180" height="70" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="130" y="72" textAnchor="middle" dominantBaseline="middle" className="gp-label">
            SEO Content Hub
          </text>
          <text x="130" y="92" textAnchor="middle" dominantBaseline="middle" className="gp-sublabel">
            33 Pages · 9 Brands · 5 Guides
          </text>
        </g>

        {/* Service Pages */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.2s',
          }}
        >
          <rect x="40" y="130" width="180" height="70" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="130" y="157" textAnchor="middle" dominantBaseline="middle" className="gp-label">
            Service Pages
          </text>
          <text x="130" y="177" textAnchor="middle" dominantBaseline="middle" className="gp-sublabel">
            9 Pillar · 12 Services · 4 Tools
          </text>
        </g>

        {/* Booking + Blog */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.3s',
          }}
        >
          <rect x="40" y="215" width="180" height="70" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="130" y="242" textAnchor="middle" dominantBaseline="middle" className="gp-label">
            Booking System
          </text>
          <text x="130" y="262" textAnchor="middle" dominantBaseline="middle" className="gp-sublabel">
            4-Step Wizard · Slots · Confirm
          </text>
        </g>

        {/* Location Pages */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.4s',
          }}
        >
          <rect x="40" y="300" width="180" height="70" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="130" y="327" textAnchor="middle" dominantBaseline="middle" className="gp-label">
            Locations + Blog
          </text>
          <text x="130" y="347" textAnchor="middle" dominantBaseline="middle" className="gp-sublabel">
            24 Suburbs · 45 Posts · 142 Combos
          </text>
        </g>

        {/* ── Center: Express Backend (dark block) ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.35s',
          }}
        >
          <rect x="290" y="45" width="220" height="325" fill="#1A1917" />
          <text x="400" y="155" textAnchor="middle" dominantBaseline="middle" className="gp-label-light">
            Express
          </text>
          <text x="400" y="175" textAnchor="middle" dominantBaseline="middle" className="gp-label-light">
            Backend
          </text>
          <line x1="360" y1="193" x2="440" y2="193" stroke="rgba(245,241,235,0.15)" strokeWidth="1" />
          <text x="400" y="215" textAnchor="middle" dominantBaseline="middle" className="gp-sublabel-light">
            30+ Endpoints
          </text>
          <text x="400" y="233" textAnchor="middle" dominantBaseline="middle" className="gp-sublabel-light">
            10 Database Tables
          </text>
          <text x="400" y="251" textAnchor="middle" dominantBaseline="middle" className="gp-sublabel-light">
            Admin Dashboard
          </text>
          <text x="400" y="269" textAnchor="middle" dominantBaseline="middle" className="gp-sublabel-light">
            Lead Attribution
          </text>
        </g>

        {/* ── Right Column: Integrations ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.45s',
          }}
        >
          <rect x="580" y="45" width="180" height="55" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="670" y="68" textAnchor="middle" dominantBaseline="middle" className="gp-label">
            Calendar
          </text>
          <text x="670" y="85" textAnchor="middle" dominantBaseline="middle" className="gp-sublabel">
            Outlook · Graph API
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
          <rect x="580" y="115" width="180" height="55" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="670" y="138" textAnchor="middle" dominantBaseline="middle" className="gp-label">
            Analytics
          </text>
          <text x="670" y="155" textAnchor="middle" dominantBaseline="middle" className="gp-sublabel">
            GA4 · Google Ads
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
          <rect x="580" y="185" width="180" height="55" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="670" y="208" textAnchor="middle" dominantBaseline="middle" className="gp-label">
            Email
          </text>
          <text x="670" y="225" textAnchor="middle" dominantBaseline="middle" className="gp-sublabel">
            Notifications · Alerts
          </text>
        </g>

        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.75s',
          }}
        >
          <rect x="580" y="255" width="180" height="55" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="670" y="278" textAnchor="middle" dominantBaseline="middle" className="gp-label">
            CMS
          </text>
          <text x="670" y="295" textAnchor="middle" dominantBaseline="middle" className="gp-sublabel">
            Blog · Content
          </text>
        </g>

        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.85s',
          }}
        >
          <rect x="580" y="325" width="180" height="55" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="670" y="348" textAnchor="middle" dominantBaseline="middle" className="gp-label">
            Maps
          </text>
          <text x="670" y="365" textAnchor="middle" dominantBaseline="middle" className="gp-sublabel">
            Geocoding · Distance
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
          <line x1="220" y1="80" x2="290" y2="80" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="220" y1="165" x2="290" y2="165" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="220" y1="250" x2="290" y2="250" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="220" y1="335" x2="290" y2="335" stroke="#D0CCC6" strokeWidth="1" />
          {/* Center → Right */}
          <line x1="510" y1="72" x2="580" y2="72" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="510" y1="142" x2="580" y2="142" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="510" y1="212" x2="580" y2="212" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="510" y1="282" x2="580" y2="282" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="510" y1="352" x2="580" y2="352" stroke="#D0CCC6" strokeWidth="1" />
        </g>

        {/* ── Bottom stats bar ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.2s ease',
            transitionDelay: '0.9s',
          }}
        >
          <line x1="40" y1="400" x2="760" y2="400" stroke="#D0CCC6" strokeWidth="1" />
          <text x="130" y="425" textAnchor="middle" className="gp-sublabel">
            283 Pages
          </text>
          <text x="310" y="425" textAnchor="middle" className="gp-sublabel">
            120+ Components
          </text>
          <text x="490" y="425" textAnchor="middle" className="gp-sublabel">
            10-Tab Admin Dashboard
          </text>
          <text x="670" y="425" textAnchor="middle" className="gp-sublabel">
            6 Integrations
          </text>
        </g>

        {/* ── Animated data flow ── */}
        {visible && (
          <g>
            {/* Left → Center */}
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M220,80 L290,80" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2.1s" path="M220,165 L290,165" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="2.1s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2.7s" path="M220,250 L290,250" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="2.7s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="3.3s" path="M220,335 L290,335" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="3.3s" />
            </circle>

            {/* Center → Right */}
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2s" path="M510,72 L580,72" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2.6s" path="M510,142 L580,142" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="2.6s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="3.2s" path="M510,212 L580,212" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="3.2s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="3.8s" path="M510,282 L580,282" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="3.8s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="4.4s" path="M510,352 L580,352" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3s" repeatCount="indefinite" begin="4.4s" />
            </circle>
          </g>
        )}
      </svg>
    </div>
  )
}
