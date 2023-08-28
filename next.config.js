/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig:{
    maxRequestBodySize:'200mb',
  },
  reactStrictMode: true,
  images:{
    domains:['c2.staticflickr.com']
  }
}

module.exports = nextConfig
