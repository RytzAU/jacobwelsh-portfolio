'use client'

export function VideoPlaceholder({
  className = 'aspect-[16/9]',
  label = 'Demo',
}: {
  className?: string
  label?: string
}) {
  return (
    <div
      className={`${className} bg-surface relative overflow-hidden group/vid cursor-pointer`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        {/* Play icon */}
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-tertiary/30 flex items-center justify-center transition-all duration-700 group-hover/vid:border-tertiary/50 group-hover/vid:scale-105">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            className="ml-0.5"
          >
            <path
              d="M1 1.5L14.5 9L1 16.5V1.5Z"
              stroke="#9E9A94"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-700 group-hover/vid:stroke-[#6E6A64]"
            />
          </svg>
        </div>
        {/* Label */}
        <span className="text-[9px] tracking-[0.14em] text-tertiary/60 font-body uppercase transition-colors duration-700 group-hover/vid:text-tertiary">
          {label}
        </span>
      </div>
    </div>
  )
}
