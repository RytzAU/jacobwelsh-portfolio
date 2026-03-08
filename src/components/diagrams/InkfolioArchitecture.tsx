'use client'

import { useEffect, useRef, useState } from 'react'

export function InkfolioArchitecture() {
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

  const fade = (delay: string) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(8px)',
    transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: delay,
  })

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
            .ink-label {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 10px;
              letter-spacing: 0.1em;
              fill: #6E6A64;
              text-transform: uppercase;
            }
            .ink-label-light {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 10px;
              letter-spacing: 0.12em;
              fill: #F5F1EB;
              text-transform: uppercase;
            }
            .ink-sublabel {
              font-family: var(--font-body, system-ui, sans-serif);
              font-size: 8px;
              letter-spacing: 0.08em;
              fill: #9E9A94;
              text-transform: uppercase;
            }
          `}</style>
        </defs>

        {/* Layer 1: Three Frontend Surfaces */}
        <g style={fade('0.1s')}>
          <rect x="60" y="35" width="200" height="65" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="160" y="62" textAnchor="middle" dominantBaseline="middle" className="ink-label">Marketing Site</text>
          <text x="160" y="80" textAnchor="middle" dominantBaseline="middle" className="ink-sublabel">Portfolio &middot; Blog &middot; Booking</text>
        </g>

        <g style={fade('0.2s')}>
          <rect x="300" y="35" width="200" height="65" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="400" y="62" textAnchor="middle" dominantBaseline="middle" className="ink-label">Client Portal</text>
          <text x="400" y="80" textAnchor="middle" dominantBaseline="middle" className="ink-sublabel">Tracking &middot; Messaging &middot; Waivers</text>
        </g>

        <g style={fade('0.3s')}>
          <rect x="540" y="35" width="200" height="65" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="640" y="62" textAnchor="middle" dominantBaseline="middle" className="ink-label">Artist Admin</text>
          <text x="640" y="80" textAnchor="middle" dominantBaseline="middle" className="ink-sublabel">Pipeline &middot; CRM &middot; Finance</text>
        </g>

        {/* Connecting lines: Surfaces → API Layer */}
        <g style={{ opacity: visible ? 1 : 0, transition: 'opacity 1.5s ease', transitionDelay: '0.6s' }}>
          <line x1="160" y1="100" x2="160" y2="145" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="400" y1="100" x2="400" y2="145" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="640" y1="100" x2="640" y2="145" stroke="#D0CCC6" strokeWidth="1" />

          <line x1="160" y1="185" x2="160" y2="230" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="310" y1="185" x2="310" y2="230" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="490" y1="185" x2="490" y2="230" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="640" y1="185" x2="640" y2="230" stroke="#D0CCC6" strokeWidth="1" />

          <line x1="160" y1="295" x2="160" y2="340" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="310" y1="295" x2="310" y2="340" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="490" y1="295" x2="490" y2="340" stroke="#D0CCC6" strokeWidth="1" />
          <line x1="640" y1="295" x2="640" y2="340" stroke="#D0CCC6" strokeWidth="1" />
        </g>

        {/* Layer 2: Next.js API Layer (dark bar) */}
        <g style={{ opacity: visible ? 1 : 0, transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '0.45s' }}>
          <rect x="60" y="145" width="680" height="40" fill="#1A1917" />
          <text x="400" y="168" textAnchor="middle" dominantBaseline="middle" className="ink-label-light">Next.js API Layer</text>
        </g>

        {/* Layer 3: Four External Services */}
        <g style={fade('0.55s')}>
          <rect x="60" y="230" width="160" height="65" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="140" y="257" textAnchor="middle" dominantBaseline="middle" className="ink-label">Supabase</text>
          <text x="140" y="275" textAnchor="middle" dominantBaseline="middle" className="ink-sublabel">Auth &middot; Database &middot; Realtime</text>
        </g>

        <g style={fade('0.65s')}>
          <rect x="240" y="230" width="140" height="65" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="310" y="257" textAnchor="middle" dominantBaseline="middle" className="ink-label">Stripe</text>
          <text x="310" y="275" textAnchor="middle" dominantBaseline="middle" className="ink-sublabel">Payments &middot; Invoices</text>
        </g>

        <g style={fade('0.75s')}>
          <rect x="420" y="230" width="140" height="65" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="490" y="257" textAnchor="middle" dominantBaseline="middle" className="ink-label">Calendly</text>
          <text x="490" y="275" textAnchor="middle" dominantBaseline="middle" className="ink-sublabel">Bookings &middot; Webhooks</text>
        </g>

        <g style={fade('0.85s')}>
          <rect x="580" y="230" width="160" height="65" fill="none" stroke="#D0CCC6" strokeWidth="1" />
          <text x="660" y="257" textAnchor="middle" dominantBaseline="middle" className="ink-label">Resend</text>
          <text x="660" y="275" textAnchor="middle" dominantBaseline="middle" className="ink-sublabel">Email Workflows</text>
        </g>

        {/* Layer 4: Database (dark bar) */}
        <g style={{ opacity: visible ? 1 : 0, transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '0.95s' }}>
          <rect x="60" y="340" width="680" height="40" fill="#1A1917" />
          <text x="400" y="363" textAnchor="middle" dominantBaseline="middle" className="ink-label-light">PostgreSQL &middot; 13 Tables &middot; Row-Level Security</text>
        </g>

        {/* Animated data flow */}
        {visible && (
          <g>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3.5s" repeatCount="indefinite" begin="1.5s" path="M160,100 L160,145" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3.5s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3.5s" repeatCount="indefinite" begin="2s" path="M400,100 L400,145" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3.5s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle r="2" fill="#1A1917" opacity="0">
              <animateMotion dur="3.5s" repeatCount="indefinite" begin="2.5s" path="M640,100 L640,145" />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur="3.5s" repeatCount="indefinite" begin="2.5s" />
            </circle>
            <circle r="2" fill="#F5F1EB" opacity="0">
              <animateMotion dur="4s" repeatCount="indefinite" begin="2s" path="M160,185 L160,230" />
              <animate attributeName="opacity" values="0;0.6;0.6;0" dur="4s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle r="2" fill="#F5F1EB" opacity="0">
              <animateMotion dur="4s" repeatCount="indefinite" begin="2.5s" path="M490,185 L490,230" />
              <animate attributeName="opacity" values="0;0.6;0.6;0" dur="4s" repeatCount="indefinite" begin="2.5s" />
            </circle>
            <circle r="2.5" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="2.2s" path="M310,295 L310,340" />
              <animate attributeName="opacity" values="0;0.4;0.4;0" dur="3s" repeatCount="indefinite" begin="2.2s" />
            </circle>
            <circle r="2.5" fill="#1A1917" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin="3s" path="M640,295 L640,340" />
              <animate attributeName="opacity" values="0;0.4;0.4;0" dur="3s" repeatCount="indefinite" begin="3s" />
            </circle>
          </g>
        )}
      </svg>
    </div>
  )
}
