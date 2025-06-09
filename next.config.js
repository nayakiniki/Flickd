/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Removed serverComponentsExternalPackages
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["localhost"],
    formats: ["image/webp", "image/avif"],
    unoptimized: true,
  },
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
}

module.exports = nextConfig
