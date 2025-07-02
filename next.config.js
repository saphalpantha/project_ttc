// /** @type {import('next').NextConfig} */


const nextConfig = {
  // output:'export',
  serverRuntimeConfig:{
    maxRequestBodySize:'200mb',
  },
  reactStrictMode: true,
  images:{
    minimumCacheTTL:60,
    domains:['c2.staticflickr.com']
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


module.exports  = withBundleAnalyzer(nextConfig)