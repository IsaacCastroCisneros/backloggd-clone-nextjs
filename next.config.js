/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    appDir:true,
    allowMiddlewareResponseBody:true
  },
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig
