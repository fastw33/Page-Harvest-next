export const dynamic = 'force-static'

export default function manifest() {
  return {
    name: 'Metal Harvest | Compra de tungsteno y carburo de tungsteno',
    short_name: 'Metal Harvest',
    description:
      'Compra, evaluación y recuperación de tungsteno, carburo de tungsteno y metales industriales.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#00896b',
    icons: [
      {
        src: '/assets/Harvest.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  }
}
