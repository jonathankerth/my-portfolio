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
      {
        protocol: 'https',
        hostname: 'mypublicucket.s3.us-west-2.amazonaws.com',
      },
    ],
    dangerouslyAllowSVG: true,
  },
}
