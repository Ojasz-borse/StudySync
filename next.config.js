/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable image optimization for development
  images: {
    unoptimized: true,
  },
  
  // Experimental features
  experimental: {
    // Add any experimental features here if needed
  },
  
  // Output configuration
  output: 'standalone',
}

module.exports = nextConfig 