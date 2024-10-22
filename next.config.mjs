/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export
    images: {
      unoptimized: true, // Use this if your project includes images
    },
    // assetPrefix: '/san103.github.io/',
    // basePath:  '/san103.github.io'
};

export default nextConfig;
