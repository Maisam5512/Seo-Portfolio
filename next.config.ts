import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [], // You can add your image domains here if needed
  },
  // Remove the experimental.serverActions flag completely
};

export default nextConfig;