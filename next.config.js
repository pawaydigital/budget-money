// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
});

const nextConfig = {
  reactStrictMode: true,
};

// @ts-ignore
module.exports = withPWA(nextConfig);
