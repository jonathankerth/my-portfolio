/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.checklyhq.com', 'mypublicucket.s3.us-west-2.amazonaws.com'],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
