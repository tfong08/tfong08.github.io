/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"
const repoName = ""

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? `${repoName}/` : '',
}

export default nextConfig
