module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.checklyhq.com',
      },
      {
        protocol: 'https',
        hostname: 'mypublicucket.s3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'catmemes.s3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'memedisplay.s3.us-west-2.amazonaws.com',
      },
    ],
    // Use modern image formats for smaller file sizes (saves ~318 KiB)
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    // Optimize image device sizes for your layout breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable compression
  compress: true,
  // Add security headers for Best Practices score
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      // Cache static assets for better performance (Est savings of 19 KiB)
      {
        source: '/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp|avif|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
