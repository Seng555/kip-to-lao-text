import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: {}, // ✅ use empty object instead of true
    typedRoutes: true,
  },
};

export default nextConfig;
