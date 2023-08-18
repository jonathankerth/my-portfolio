/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.checklyhq.com'],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
