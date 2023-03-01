/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ["@retconned/ui"],
  swcMinify: true,
}

module.exports = nextConfig
