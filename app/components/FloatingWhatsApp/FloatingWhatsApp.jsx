'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import styles from './FloatingWhatsApp.module.css'

const MOBILE_MEDIA_QUERY = '(max-width: 768px)'

export default function FloatingWhatsApp() {
  const [FloatingWhatsAppWidget, setFloatingWhatsAppWidget] = useState(null)
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
    let isCancelled = false

    const loadWidget = async () => {
      const whatsappModule = await import('react-floating-whatsapp')

      if (!isCancelled) {
        setFloatingWhatsAppWidget(() => whatsappModule.FloatingWhatsApp)
      }
    }

    if (typeof window === 'undefined') {
      return undefined
    }

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(loadWidget, { timeout: 2500 })

      return () => {
        isCancelled = true
        window.cancelIdleCallback(idleId)
      }
    }

    const timeoutId = window.setTimeout(loadWidget, 1200)

    return () => {
      isCancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [])

  if (!FloatingWhatsAppWidget) {
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
      notification
      notificationSound
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
