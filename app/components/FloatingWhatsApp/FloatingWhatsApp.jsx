'use client'

import { FloatingWhatsApp as FloatingWhatsAppWidget } from 'react-floating-whatsapp'
import styles from './FloatingWhatsApp.module.css'

export default function FloatingWhatsApp() {
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
      buttonClassName={styles.button}
      chatboxClassName={styles.chatbox}
    />
  )
}
