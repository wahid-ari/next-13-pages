/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REPO_URL: "https://github.com/wahid-ari/next-13-pages",
    API_URL: "http://localhost:3000",
    // API_URL: "https://next-dataa.vercel.app",
  },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com", "ui-avatars.com"],
  },
};

module.exports = nextConfig;