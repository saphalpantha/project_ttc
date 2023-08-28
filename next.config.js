/** @type {import('next').NextConfig} */
const nextConfig = {
  serverless:{
    "api/get-images/[...imagePath]":{
      exclude:['./components/NewsNotice/NewsCardList.js'],
    }
  }
  serverRuntimeConfig:{
    maxRequestBodySize:'200mb',
  },
  reactStrictMode: true,
  images:{
    domains:['c2.staticflickr.com']
  }
}

module.exports = nextConfig
