/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "cz", "ru"],
  },
};

module.exports = nextConfig;
