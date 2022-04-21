/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains :['fakestoreapi.com', './components/Feedback/feedbacksObject.js'],
    formats: ['image/avif','image/webp']
  }
}

module.exports = nextConfig
