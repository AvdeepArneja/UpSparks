/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com', 'images.unsplash.com', 'static.wixstatic.com'],
    unoptimized: false,
  },
  // Optimize production builds
  swcMinify: true,
  compress: true,
}

module.exports = nextConfig
