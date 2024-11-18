/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
// next.config.js
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      worker_threads: false,
      stream: false,
      fs: false,
      path: false,
      os: false,
    };
    return config;
  },
  images: {
    domains: ["rickandmortyapi.com"],
  },
};
