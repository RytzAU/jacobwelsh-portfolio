'use client'

import { useEffect, useRef, useState } from 'react'

const layers = [
  { label: 'Database cache', width: '100%' },
  { label: 'Direct extraction via Apify', width: '92%' },
  { label: 'Search-based fallback', width: '84%' },
  { label: 'Cross-platform matching', width: '76%' },
  { label: 'Background queue', width: '68%' },
  { label: 'Manual entry with intelligent prefill', width: '60%' },
]

export function ArqeloLayers() {
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
      <div className="w-full max-w-[600px]">
        {/* Title */}
        <div
          className="mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1s ease',
            transitionDelay: '0.1s',
          }}
        >
          <span className="text-[9px] tracking-[0.12em] text-tertiary font-body uppercase">
            Extraction Cascade
          </span>
        </div>

        {/* Layers */}
        <div className="space-y-2">
          {layers.map((layer, i) => (
            <div
              key={i}
              className="relative overflow-hidden"
              style={{
                width: visible ? layer.width : '0%',
                opacity: visible ? 1 : 0,
                transition: `width 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease`,
                transitionDelay: `${0.2 + i * 0.12}s`,
              }}
            >
              <div className="flex items-center gap-4 py-3 px-4 border border-border bg-[#EDEAE4]">
                <span className="text-[10px] text-tertiary font-body tabular-nums shrink-0 w-3">
                  {i + 1}
                </span>
                <span className="text-[11px] tracking-[0.02em] text-secondary font-body whitespace-nowrap">
                  {layer.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Fallback indicator */}
        <div
          className="mt-6 flex items-center gap-3"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1s ease',
            transitionDelay: '1.2s',
          }}
        >
          <div className="h-px flex-1 bg-border" />
          <span className="text-[8px] tracking-[0.1em] text-tertiary font-body uppercase">
            Progressive fallback
          </span>
          <div className="h-px w-8 bg-border" />
        </div>
      </div>
    </div>
  )
}
