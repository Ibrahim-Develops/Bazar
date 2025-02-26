import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
