'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

interface DemoVideoProps {
  webm?: string
  mp4?: string
  poster?: string
  className?: string
  label?: string
}

export function DemoVideo({
  webm,
  mp4,
  poster,
  className = 'aspect-video',
  label,
}: DemoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scheduleHide = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current)
    setShowControls(true)
    if (playing) {
      hideTimer.current = setTimeout(() => setShowControls(false), 2500)
    }
  }, [playing])

  useEffect(() => {
    if (!playing) {
      setShowControls(true)
      if (hideTimer.current) clearTimeout(hideTimer.current)
    } else {
      scheduleHide()
    }
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current)
    }
  }, [playing, scheduleHide])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onTime = () => {
      if (v.duration) setProgress((v.currentTime / v.duration) * 100)
    }
    const onEnd = () => {
      setPlaying(false)
      setProgress(0)
    }
    v.addEventListener('timeupdate', onTime)
    v.addEventListener('ended', onEnd)
    return () => {
      v.removeEventListener('timeupdate', onTime)
      v.removeEventListener('ended', onEnd)
    }
  }, [])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (playing) {
      v.pause()
      setPlaying(false)
    } else {
      v.play().catch(() => {})
      setPlaying(true)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v || !v.duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      togglePlay()
    }
  }

  return (
    <div
      className={`${className} bg-surface relative overflow-hidden group/demo cursor-pointer`}
      onClick={togglePlay}
      onMouseMove={scheduleHide}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={playing ? 'Pause video' : 'Play video'}
    >
      <video
        ref={videoRef}
        muted={muted}
        playsInline
        preload="metadata"
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        {webm && <source src={webm} type="video/webm" />}
        {mp4 && <source src={mp4} type="video/mp4" />}
      </video>

      {/* Play facade — shown when not playing */}
      {!playing && (
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center gap-4 transition-opacity duration-500">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-500 group-hover/demo:scale-110 group-hover/demo:bg-white/15">
            <svg
              width="20"
              height="22"
              viewBox="0 0 16 18"
              fill="none"
              className="ml-1"
            >
              <path
                d="M1 1.5L14.5 9L1 16.5V1.5Z"
                fill="white"
                fillOpacity="0.9"
              />
            </svg>
          </div>
          {label && (
            <span className="text-[10px] tracking-[0.12em] text-white/60 font-body uppercase">
              {label}
            </span>
          )}
        </div>
      )}

      {/* Bottom controls — shown on hover/interaction while playing */}
      {playing && (
        <div
          className={`absolute bottom-0 left-0 right-0 transition-opacity duration-500 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Progress bar — seekable */}
          <div
            className="h-3 flex items-end cursor-pointer"
            onClick={handleSeek}
            role="slider"
            aria-label="Video progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
          >
            <div className="h-[2px] bg-white/10 w-full">
              <div
                className="h-full bg-white/50 transition-[width] duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/30 to-transparent">
            {/* Pause indicator */}
            <span className="text-[9px] tracking-[0.1em] text-white/50 font-body uppercase">
              {label ?? 'Demo'}
            </span>

            {/* Mute toggle */}
            <button
              onClick={toggleMute}
              className="text-white/50 hover:text-white/80 transition-colors duration-300"
              aria-label={muted ? 'Unmute' : 'Mute'}
            >
              {muted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M19.07 4.93a10 10 0 010 14.14" />
                  <path d="M15.54 8.46a5 5 0 010 7.07" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
