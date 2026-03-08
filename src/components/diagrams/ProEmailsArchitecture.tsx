'use client'

import { useEffect, useRef, useState } from 'react'

export function ProEmailsArchitecture() {
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
            .pe-label {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 10px;
              letter-spacing: 0.1em;
              fill: #6E6A64;
              text-transform: uppercase;
            }
            .pe-label-light {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 10px;
              letter-spacing: 0.12em;
              fill: #F5F1EB;
              text-transform: uppercase;
            }
            .pe-sublabel {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 8px;
              letter-spacing: 0.08em;
              fill: #9E9A94;
              text-transform: uppercase;
            }
            .pe-sublabel-light {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 7.5px;
              letter-spacing: 0.06em;
              fill: rgba(245,241,235,0.45);
              text-transform: uppercase;
            }
            .pe-header {
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
          <text x="400" y="25" textAnchor="middle" className="pe-header">
            Applications
          </text>
        </g>

        {/* ── Top Row: 3 Frontend Apps ── */}

        {/* Landing Page */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.1s',
          }}
        >
          <rect x="45" y="38" width="220" height="100" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="155" y="72" textAnchor="middle" dominantBaseline="middle" className="pe-label">
            Landing Page
          </text>
          <text x="155" y="92" textAnchor="middle" dominantBaseline="middle" className="pe-sublabel">
            Marketing · Pricing
          </text>
          <text x="155" y="110" textAnchor="middle" dominantBaseline="middle" className="pe-sublabel">
            Domain Search · Checkout
          </text>
        </g>

        {/* Customer Dashboard */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.2s',
          }}
        >
          <rect x="290" y="38" width="220" height="100" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="400" y="72" textAnchor="middle" dominantBaseline="middle" className="pe-label">
            Customer Dashboard
          </text>
          <text x="400" y="92" textAnchor="middle" dominantBaseline="middle" className="pe-sublabel">
            27 Pages · AI Compose
          </text>
          <text x="400" y="110" textAnchor="middle" dominantBaseline="middle" className="pe-sublabel">
            Inbox · Tracking · Analytics
          </text>
        </g>

        {/* Admin Portal */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.3s',
          }}
        >
          <rect x="535" y="38" width="220" height="100" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="645" y="72" textAnchor="middle" dominantBaseline="middle" className="pe-label">
            Admin Portal
          </text>
          <text x="645" y="92" textAnchor="middle" dominantBaseline="middle" className="pe-sublabel">
            11 Routes · CRM
          </text>
          <text x="645" y="110" textAnchor="middle" dominantBaseline="middle" className="pe-sublabel">
            Revenue · Domains · Campaigns
          </text>
        </g>

        {/* ── Connecting Lines (Apps → API) ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.5s ease',
            transitionDelay: '0.4s',
          }}
        >
          <line x1="155" y1="138" x2="155" y2="175" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="400" y1="138" x2="400" y2="175" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="645" y1="138" x2="645" y2="175" stroke="#D0CCC6" strokeWidth="1" />
        </g>

        {/* ── Center: API Layer (dark block) ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.35s',
          }}
        >
          <rect x="45" y="175" width="710" height="135" fill="#1A1917" />
          <text x="400" y="212" textAnchor="middle" dominantBaseline="middle" className="pe-label-light">
            Express API
          </text>
          <line x1="340" y1="228" x2="460" y2="228" stroke="rgba(245,241,235,0.15)" strokeWidth="1" />
          <text x="400" y="250" textAnchor="middle" dominantBaseline="middle" className="pe-sublabel-light">
            187 Endpoints · 11 Services · 3 Middleware
          </text>
          <text x="400" y="270" textAnchor="middle" dominantBaseline="middle" className="pe-sublabel-light">
            Supabase · PostgreSQL · 30+ Tables
          </text>
          <text x="400" y="290" textAnchor="middle" dominantBaseline="middle" className="pe-sublabel-light">
            JWT Auth · Queue Processing · Webhooks
          </text>
        </g>

        {/* ── Connecting Lines (API → Integrations) ── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.5s ease',
            transitionDelay: '0.55s',
          }}
        >
          <line x1="130" y1="310" x2="130" y2="340" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="312" y1="310" x2="312" y2="340" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="492" y1="310" x2="492" y2="340" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="672" y1="310" x2="672" y2="340" stroke="#D0CCC6" strokeWidth="1" />
        </g>

        {/* ── Bottom Row: Integrations ── */}

        {/* Payments */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.5s',
          }}
        >
          <rect x="48" y="340" width="165" height="55" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="130" y="360" textAnchor="middle" dominantBaseline="middle" className="pe-label">
            Payments
          </text>
          <text x="130" y="378" textAnchor="middle" dominantBaseline="middle" className="pe-sublabel">
            Stripe · Subscriptions
          </text>
        </g>

        {/* Email Delivery */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.6s',
          }}
        >
          <rect x="228" y="340" width="165" height="55" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="310" y="360" textAnchor="middle" dominantBaseline="middle" className="pe-label">
            Email Delivery
          </text>
          <text x="310" y="378" textAnchor="middle" dominantBaseline="middle" className="pe-sublabel">
            Mailgun · SMTP · IMAP
          </text>
        </g>

        {/* OAuth */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.7s',
          }}
        >
          <rect x="408" y="340" width="165" height="55" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="490" y="360" textAnchor="middle" dominantBaseline="middle" className="pe-label">
            OAuth Providers
          </text>
          <text x="490" y="378" textAnchor="middle" dominantBaseline="middle" className="pe-sublabel">
            Gmail · Outlook · BYOA
          </text>
        </g>

        {/* AI + Analytics */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '0.8s',
          }}
        >
          <rect x="588" y="340" width="165" height="55" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="670" y="360" textAnchor="middle" dominantBaseline="middle" className="pe-label">
            AI + Analytics
          </text>
          <text x="670" y="378" textAnchor="middle" dominantBaseline="middle" className="pe-sublabel">
            Claude · OpenAI · GA4
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
          <line x1="48" y1="415" x2="753" y2="415" stroke="#D0CCC6" strokeWidth="1" />
          <text x="120" y="438" textAnchor="middle" className="pe-sublabel">
            4 Applications
          </text>
          <text x="310" y="438" textAnchor="middle" className="pe-sublabel">
            187 Endpoints
          </text>
          <text x="500" y="438" textAnchor="middle" className="pe-sublabel">
            13 Integrations
          </text>
          <text x="680" y="438" textAnchor="middle" className="pe-sublabel">
            30+ Tables
          </text>
        </g>

        {/* ── Animated data flow ── */}
        {visible && (
          <g>
            {/* Apps → API (downward) */}
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.5s" path="M155,138 L155,175" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="2.5s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="2s" path="M400,138 L400,175" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="2.5s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="2.5s" path="M645,138 L645,175" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="2.5s" repeatCount="indefinite" begin="2.5s" />
            </circle>

            {/* API → Integrations (downward) */}
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="2.2s" path="M130,310 L130,340" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="2.5s" repeatCount="indefinite" begin="2.2s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="2.7s" path="M312,310 L312,340" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="2.5s" repeatCount="indefinite" begin="2.7s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="3.2s" path="M492,310 L492,340" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="2.5s" repeatCount="indefinite" begin="3.2s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="3.7s" path="M672,310 L672,340" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="2.5s" repeatCount="indefinite" begin="3.7s" />
            </circle>
          </g>
        )}
      </svg>
    </div>
  )
}
