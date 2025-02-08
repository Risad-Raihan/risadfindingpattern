/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ['localhost', 'vercel.app'],
    minimumCacheTTL: 60,
  },
  reactStrictMode: true,
  output: 'standalone',
}

module.exports = nextConfig
