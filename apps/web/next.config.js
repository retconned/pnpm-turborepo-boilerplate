/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@retconned/ui"],
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
