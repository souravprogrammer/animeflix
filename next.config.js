/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  // reactStrictMode: true,
  dest: "public",
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA({
  reactStrictMode: true,
});

// /nextConfig;
