/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Infinite-Space/' : "",
  };
  

export default nextConfig;
