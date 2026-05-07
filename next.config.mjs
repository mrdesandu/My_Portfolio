/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: {
    appIsrStatus: false, // Disables the static indicator in Next 15+
    buildActivity: false,
  },
}

export default nextConfig