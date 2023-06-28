/** @type {import('next').NextConfig} */
const nextConfig = {
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  images: {
    // loader: 'custom',
    // loaderFile: './src/utils/imageLoader.ts',
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.s3.eu-west-**.amazonaws.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**-**.s3.eu-west-**.amazonaws.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.tiktokcdn**.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.cloudfront.net',
        port: '',
      },
      {
        protocol: 'http',
        hostname: '**.cloudfront.net',
        port: '',
      }
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
