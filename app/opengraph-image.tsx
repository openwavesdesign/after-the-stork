import { ImageResponse } from 'next/og'

// Temporary, on-brand OG share image — swap for real brand artwork when the
// client logo is provided. Rendered at build/request time, no external assets.
export const runtime = 'edge'
export const alt = 'After the Stork — Philadelphia Postpartum Doula & Newborn Care'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '90px',
          backgroundColor: '#F4EFE6',
          color: '#1B1814',
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: '#224068',
          }}
        >
          Philadelphia · Main Line · Postpartum Care
        </div>
        <div style={{ display: 'flex', marginTop: 28 }}>
          <div style={{ width: 70, height: 2, backgroundColor: '#224068' }} />
        </div>
        <div
          style={{
            fontSize: 104,
            fontWeight: 600,
            lineHeight: 1.0,
            marginTop: 30,
            letterSpacing: -2,
          }}
        >
          After the Stork
        </div>
        <div style={{ fontSize: 34, color: '#3F3B30', marginTop: 34, maxWidth: 880 }}>
          Premier &amp; longest-running postpartum doula agency since 2006.
        </div>
      </div>
    ),
    { ...size },
  )
}
