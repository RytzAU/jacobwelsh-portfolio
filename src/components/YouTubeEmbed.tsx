'use client'

import { useState } from 'react'

interface YouTubeEmbedProps {
  videoId: string
  title?: string
  className?: string
}

export function YouTubeEmbed({
  videoId,
  title = 'Video',
  className = 'aspect-video',
}: YouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(false)
  const thumbUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <div className={`${className} bg-surface relative overflow-hidden group/yt`}>
      {loaded ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          onClick={() => setLoaded(true)}
          className="absolute inset-0 w-full h-full cursor-pointer"
          aria-label={`Play ${title}`}
        >
          {/* YouTube thumbnail */}
          <img
            src={thumbUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover/yt:bg-black/30 transition-colors duration-500" />
          {/* Play button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-500 group-hover/yt:scale-110 group-hover/yt:bg-white/15">
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
            <span className="text-[10px] tracking-[0.12em] text-white/60 font-body uppercase">
              {title}
            </span>
          </div>
        </button>
      )}
    </div>
  )
}
