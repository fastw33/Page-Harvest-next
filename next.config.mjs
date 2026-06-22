/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/tungsteno',
        destination: '/compra-de-tungsteno-colombia',
        permanent: true,
      },
      {
        source: '/carburo-de-tungsteno',
        destination: '/compra-de-carburo-de-tungsteno-colombia',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
