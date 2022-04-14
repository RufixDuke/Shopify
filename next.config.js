/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domain :['https://fakestoreapi.com'],
    formats: ['image/avif','image/webp']
  }
}

module.exports = nextConfig
