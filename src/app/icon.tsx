import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#1A1917',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
        }}
      >
        <span
          style={{
            color: '#F5F1EB',
            fontSize: 11,
            fontFamily: 'Georgia, serif',
            fontWeight: 300,
            lineHeight: 1,
            letterSpacing: '0.05em',
          }}
        >
          JFW
        </span>
      </div>
    ),
    { ...size }
  )
}
