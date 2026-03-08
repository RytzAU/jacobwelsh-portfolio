import { ImageResponse } from 'next/og'

export const alt = 'Jacob Welsh — Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#F5F1EB',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 100px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontFamily: 'Georgia, serif',
            fontWeight: 300,
            color: '#1A1917',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
          }}
        >
          Jacob Welsh
        </div>
        <div
          style={{
            fontSize: 28,
            fontFamily: 'system-ui, sans-serif',
            fontWeight: 400,
            color: '#6E6A64',
            marginTop: 24,
            lineHeight: 1.6,
          }}
        >
          Turning complex problems into simple tools.
        </div>
        <div
          style={{
            fontSize: 16,
            fontFamily: 'system-ui, sans-serif',
            fontWeight: 400,
            color: '#9E9A94',
            marginTop: 48,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          jacobwelsh.dev
        </div>
      </div>
    ),
    { ...size }
  )
}
