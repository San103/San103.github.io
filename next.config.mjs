/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export
    images: {
      unoptimized: true, // Use this if your project includes images
    },
};

export default nextConfig;
