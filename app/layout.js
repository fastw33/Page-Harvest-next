import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp'
import {
  CORE_KEYWORDS,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_PHONE,
  SITE_URL,
} from './lib/seo'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: 'Compra de tungsteno y carburo de tungsteno en Colombia',
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: CORE_KEYWORDS,
  category: 'industrial recycling',
  classification: 'Compra y recuperación de tungsteno y carburo de tungsteno en Colombia',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [{ url: '/assets/Harvest.webp', type: 'image/webp' }],
    shortcut: ['/assets/Harvest.webp'],
    apple: [{ url: '/assets/Harvest.webp', type: 'image/webp' }],
  },
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'google9968087b41714921.html',
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'es-CO': SITE_URL,
    },
  },
  openGraph: {
    title: `${SITE_NAME} | Compra de tungsteno y carburo de tungsteno en Colombia`,
    description: SITE_DESCRIPTION,
    type: 'website',
    locale: 'es_CO',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} | Compra de tungsteno y carburo de tungsteno en Colombia`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Compra de tungsteno y carburo de tungsteno en Colombia`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'contact:phone_number': SITE_PHONE,
    'geo.region': 'CO',
    'geo.placename': 'Colombia',
    'geo.position': '4.570868,-74.297333',
    ICBM: '4.570868, -74.297333',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='es-CO'>
      <head>
        <meta name='language' content='es-CO' />
        <meta name='distribution' content='global' />
        <meta name='target' content='colombia' />
        <meta name='country' content='Colombia' />
      </head>
      <body>
        <a href='#app-scroll' className='sr-only sr-only-focusable'>
          Saltar al contenido principal
        </a>
        <Navbar />
        <main
          id='app-scroll'
          tabIndex='-1'
          style={{ minHeight: 'calc(100vh - 200px)' }}
        >
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
