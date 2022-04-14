/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domain :['fakeapi.com'],
    formats: ['image/avif','image/webp']
  }
}

module.exports = nextConfig
