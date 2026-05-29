'use client'
import { useEffect, useRef } from 'react'
import Script from 'next/script'
import site from '@/data/site.json'

export default function ContactFormEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      const iframe = iframeRef.current
      if (!iframe) return

      let height: number | undefined

      if (typeof event.data === 'number' && event.data > 0) {
        height = event.data
      } else if (event.data && typeof event.data === 'object') {
        const d = event.data as Record<string, unknown>
        const raw = d.height ?? d.frameHeight ?? d.iframeHeight ?? d.scrollHeight
        if (typeof raw === 'number' && raw > 0) height = raw
      } else if (typeof event.data === 'string') {
        try {
          const parsed = JSON.parse(event.data) as Record<string, unknown>
          const raw = parsed.height ?? parsed.frameHeight
          if (typeof raw === 'number' && raw > 0) height = raw
        } catch {
          const num = Number(event.data)
          if (num > 0) height = num
        }
      }

      if (height) {
        iframe.style.height = `${height}px`
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <>
      <iframe
        ref={iframeRef}
        title="After the Stork — Contact Form"
        id="enginehire-iframe"
        src={site.engineHire.formSrc}
        width="100%"
        scrolling="no"
        style={{ border: 'none', display: 'block', width: '100%', height: '1800px' }}
      />
      <Script src={site.engineHire.scriptSrc} strategy="afterInteractive" />
    </>
  )
}
