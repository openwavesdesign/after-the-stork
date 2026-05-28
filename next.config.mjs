/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    // Stub for a future approved image source (e.g. the WordPress media library
    // or a CDN). Local images in /public need no entry here.
    remotePatterns: [
      { protocol: 'https', hostname: 'afterthestork.info' },
      { protocol: 'https', hostname: 'www.afterthestork.info' },
    ],
  },
}

export default nextConfig
