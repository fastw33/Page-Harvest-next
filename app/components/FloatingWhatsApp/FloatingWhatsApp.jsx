'use client'

import { FloatingWhatsApp as FloatingWhatsAppWidget } from 'react-floating-whatsapp'

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
    />
  )
}
