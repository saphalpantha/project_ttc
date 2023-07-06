/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig:{
    maxRequestBodySize:'20mb',
  },
  reactStrictMode: true,
  images:{
    domains:['c2.staticflickr.com']
  }
}

module.exports = nextConfig
