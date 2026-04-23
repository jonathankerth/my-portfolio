import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        {/* Preconnect to external origins for faster resource loading */}
        <link rel="preconnect" href="https://mypublicucket.s3.us-west-2.amazonaws.com" />
        <link rel="dns-prefetch" href="https://mypublicucket.s3.us-west-2.amazonaws.com" />
        <link rel="dns-prefetch" href="https://memedisplay.s3.us-west-2.amazonaws.com" />

        <link
          rel="icon"
          type="image/webp"
          href="/_next/image?url=https%3A%2F%2Fmypublicucket.s3.us-west-2.amazonaws.com%2FDALL%C2%B7E%2B2023-08-18%2B15.22.22.png&w=48&q=75"
        />
        <link
          rel="apple-touch-icon"
          href="/_next/image?url=https%3A%2F%2Fmypublicucket.s3.us-west-2.amazonaws.com%2FDALL%C2%B7E%2B2023-08-18%2B15.22.22.png&w=180&q=75"
        />
        <meta name="theme-color" content="#2563eb" />

        {/* Security headers for Best Practices */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Theme bootstrap — runs before paint to avoid light/dark flicker. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);var c=document.documentElement.classList;d?c.add('dark'):c.remove('dark');}catch(e){}})();`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
