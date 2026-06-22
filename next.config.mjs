/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      { protocol: "https", hostname: "**.alicdn.com" },
      { protocol: "https", hostname: "**.alibaba.com" },
      { protocol: "https", hostname: "**.1688.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "**.r2.dev" },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: '/:locale/shop/visual',
        destination: '/products/3d-contour-sleep-mask',
        permanent: true,
      },
      {
        source: '/:locale/shop/auditory',
        destination: '/products/white-noise-aroma-machine',
        permanent: true,
      },
      {
        source: '/:locale/shop/tactile',
        destination: '/products/acupressure-sleep-mat',
        permanent: true,
      },
      {
        source: '/:locale/shop/olfactory',
        destination: '/products/deep-sleep-pillow-spray',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
