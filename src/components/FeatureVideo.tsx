'use client'

import { useRef, useEffect, useState } from 'react'

interface FeatureVideoProps {
  webm?: string
  mp4?: string
  className?: string
  label?: string
}

export function FeatureVideo({
  webm,
  mp4,
  className = 'aspect-[16/9]',
  label,
}: FeatureVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          videoRef.current?.play().catch(() => {})
        } else {
          videoRef.current?.pause()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className={`${className} bg-surface relative overflow-hidden`}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {webm && <source src={webm} type="video/webm" />}
        {mp4 && <source src={mp4} type="video/mp4" />}
      </video>
      {label && (
        <div className="absolute bottom-3 md:bottom-4 left-4 md:left-6 pointer-events-none">
          <span className="text-[9px] tracking-[0.1em] text-white/50 font-body uppercase">
            {label}
          </span>
        </div>
      )}
    </div>
  )
}
