'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface Slide {
  label: string
  image?: string
}

interface ScreenshotReelProps {
  slides: Slide[]
  className?: string
  interval?: number
}

export function ScreenshotReel({
  slides,
  className = 'aspect-[16/9]',
  interval = 4000,
}: ScreenshotReelProps) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (paused || slides.length <= 1) return
    const timer = setInterval(advance, interval)
    return () => clearInterval(timer)
  }, [paused, advance, interval, slides.length])

  return (
    <div
      className={`${className} bg-surface relative overflow-hidden`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {slide.image ? (
            <Image
              src={slide.image}
              alt={slide.label}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[10px] tracking-[0.12em] text-tertiary/40 font-body uppercase">
                {slide.label}
              </span>
            </div>
          )}
        </div>
      ))}

      {/* Progress indicators — thin lines */}
      {slides.length > 1 && (
        <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-[1px] transition-all duration-700 ${
                i === current
                  ? 'w-5 bg-tertiary/50'
                  : 'w-2.5 bg-tertiary/20 hover:bg-tertiary/35'
              }`}
            />
          ))}
        </div>
      )}

      {/* Current slide label — bottom left */}
      {slides[current]?.image && (
        <div className="absolute bottom-3 md:bottom-4 left-4 md:left-6">
          <span className="text-[9px] tracking-[0.1em] text-white/50 font-body uppercase">
            {slides[current].label}
          </span>
        </div>
      )}
    </div>
  )
}
