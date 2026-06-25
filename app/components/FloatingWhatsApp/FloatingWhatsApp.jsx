'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import { FloatingWhatsApp as FloatingWhatsAppWidget } from 'react-floating-whatsapp'
import styles from './FloatingWhatsApp.module.css'

const MOBILE_MEDIA_QUERY = '(max-width: 768px)'

export default function FloatingWhatsApp() {
  const [shouldRender, setShouldRender] = useState(false)
  const isMobile = useSyncExternalStore(
    onStoreChange => {
      if (typeof window === 'undefined') {
        return () => {}
      }

      const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY)
      mediaQuery.addEventListener('change', onStoreChange)

      return () => mediaQuery.removeEventListener('change', onStoreChange)
    },
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia(MOBILE_MEDIA_QUERY).matches,
    () => false
  )

  useEffect(() => {
    let timeoutId
    let idleId

    const enableWidget = () => setShouldRender(true)

    const handleInteraction = () => {
      enableWidget()
      window.removeEventListener('pointerdown', handleInteraction)
      window.removeEventListener('scroll', handleInteraction)
    }

    window.addEventListener('pointerdown', handleInteraction, { passive: true })
    window.addEventListener('scroll', handleInteraction, { passive: true, once: true })

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(enableWidget, { timeout: 4000 })
    } else {
      timeoutId = window.setTimeout(enableWidget, 2500)
    }

    return () => {
      window.removeEventListener('pointerdown', handleInteraction)
      window.removeEventListener('scroll', handleInteraction)
      if (typeof idleId === 'number' && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId)
      }
      if (typeof timeoutId === 'number') {
        window.clearTimeout(timeoutId)
      }
    }
  }, [])

  if (!shouldRender) {
    return null
  }

  return (
    <FloatingWhatsAppWidget
      phoneNumber='+573028583784'
      accountName='Metal Harvest'
      statusMessage='Normalmente respondemos en pocas horas'
      chatMessage='¡Hola! ¿Cómo podemos ayudarte?'
      placeholder='Escribe tu mensaje...'
      allowEsc
      allowClickAway
      avatar='/assets/harves.webp'
      className={styles.wrapper}
      buttonStyle={
        isMobile
          ? {
              right: '1rem',
              bottom: 'calc(env(safe-area-inset-bottom, 0px) + 13rem)',
              width: '56px',
              height: '56px',
            }
          : {
              right: '2rem',
              bottom: '2rem',
            }
      }
      chatboxStyle={
        isMobile
          ? {
              right: '1rem',
              left: '1rem',
              bottom: 'calc(env(safe-area-inset-bottom, 0px) + 17.5rem)',
              width: 'auto',
              maxWidth: 'min(360px, calc(100vw - 2rem))',
              marginLeft: 'auto',
            }
          : {
              right: '2rem',
              bottom: '7rem',
            }
      }
    />
  )
}
