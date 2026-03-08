'use client'

import { useEffect, useRef, useState } from 'react'

const states = [
  { label: 'Draft', short: 'DRAFT' },
  { label: 'Generated', short: 'GEN' },
  { label: 'Pending', short: 'PEND' },
  { label: 'Syncing', short: 'SYNC' },
  { label: 'Synced', short: 'DONE' },
]

export function ShakeStateMachine() {
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
      className="aspect-[16/9] bg-[#EDEAE4] relative overflow-hidden flex items-center justify-center px-6 md:px-16"
    >
      <style>{`
        @keyframes nodeHighlight {
          0%, 100% { border-color: #D0CCC6; color: #9E9A94; }
          8%, 15% { border-color: #1A1917; color: #1A1917; }
        }
        @keyframes dotTravel {
          0% { left: 0%; opacity: 0; }
          2% { opacity: 1; }
          98% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>

      <div className="w-full max-w-[700px]">
        {/* Flow label */}
        <div
          className="text-center mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1s ease',
            transitionDelay: '0.8s',
          }}
        >
          <span className="text-[9px] tracking-[0.12em] text-tertiary font-body uppercase">
            Invoice Lifecycle
          </span>
        </div>

        {/* State nodes with connecting lines */}
        <div className="flex items-center justify-between relative">
          {/* Background connecting line */}
          <div
            className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 1s ease',
              transitionDelay: '0.5s',
            }}
          />

          {/* Animated traveling dot */}
          {visible && (
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
              <div
                className="absolute w-2 h-2 bg-primary rounded-full -translate-y-1/2"
                style={{
                  animation: 'dotTravel 4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                  animationDelay: '2s',
                }}
              />
            </div>
          )}

          {/* State nodes */}
          {states.map((state, i) => (
            <div
              key={state.label}
              className="relative z-10 flex flex-col items-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(6px)',
                transition:
                  'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div
                className="bg-[#EDEAE4] border px-3 py-2.5 md:px-5 md:py-3.5"
                style={{
                  animation: visible
                    ? `nodeHighlight 5s ease-in-out infinite`
                    : 'none',
                  animationDelay: `${2 + i * 0.8}s`,
                  borderColor: '#D0CCC6',
                }}
              >
                {/* Show full label on md+, short on mobile */}
                <span className="hidden md:inline text-[10px] tracking-[0.1em] text-secondary font-body uppercase whitespace-nowrap">
                  {state.label}
                </span>
                <span className="md:hidden text-[9px] tracking-[0.08em] text-secondary font-body uppercase">
                  {state.short}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Flow arrows */}
        <div
          className="flex justify-between px-8 md:px-12 mt-4"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1s ease',
            transitionDelay: '1s',
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="text-[10px] text-tertiary font-body"
            >
              &darr;
            </span>
          ))}
        </div>

        {/* Retry / audit labels */}
        <div
          className="flex justify-between mt-6 px-2"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1s ease',
            transitionDelay: '1.2s',
          }}
        >
          <span className="text-[8px] tracking-[0.1em] text-tertiary font-body uppercase">
            Retry logic
          </span>
          <span className="text-[8px] tracking-[0.1em] text-tertiary font-body uppercase">
            Exponential backoff
          </span>
          <span className="text-[8px] tracking-[0.1em] text-tertiary font-body uppercase">
            Audit trail
          </span>
        </div>
      </div>
    </div>
  )
}
