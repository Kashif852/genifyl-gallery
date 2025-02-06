/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline';
              style-src 'self' 'unsafe-inline';
              font-src 'self' data: https://fonts.gstatic.com;
              img-src 'self' data: https: blob:;
              connect-src 'self' ${process.env.NEXT_PUBLIC_API_BASE_URL || '*'} http://localhost:4000 https://ik.imagekit.io https://api.emailjs.com;
              frame-src 'self';
              media-src 'self';
              worker-src 'self' blob:;
            `.replace(/\s+/g, ' ').trim(),
          },
        ],
      },
    ];
  },
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: false, // Disable locale detection temporarily
  },
  images: {
    domains: ['ik.imagekit.io'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
