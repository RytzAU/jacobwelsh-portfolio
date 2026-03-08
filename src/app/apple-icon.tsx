import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#1A1917',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 36,
        }}
      >
        <span
          style={{
            color: '#F5F1EB',
            fontSize: 56,
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
