/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.alicdn.com" },
      { protocol: "https", hostname: "**.alibaba.com" },
      { protocol: "https", hostname: "**.1688.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:locale/shop/visual',
        destination: '/:locale/products/3d-contour-sleep-mask',
        permanent: true,
      },
      {
        source: '/:locale/shop/auditory',
        destination: '/:locale/products/white-noise-aroma-machine',
        permanent: true,
      },
      {
        source: '/:locale/shop/tactile',
        destination: '/:locale/products/acupressure-sleep-mat',
        permanent: true,
      },
      {
        source: '/:locale/shop/olfactory',
        destination: '/:locale/products/deep-sleep-pillow-spray',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
