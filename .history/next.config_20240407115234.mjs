/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow images from facebook.com domain
    // Adjust the regular expression pattern if necessary
    domains: [],
    // Use remotePatterns instead of domains
    // This configuration allows images from any subdomain of facebook.com
    remotePatterns: ['^https://(.*?)\\.facebook\\.com'],
  },
};

export default nextConfig;
