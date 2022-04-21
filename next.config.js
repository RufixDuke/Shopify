/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com',
      'images.unsplash.com',
      // 'images.pexels.com'
    ],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
