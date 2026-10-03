import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  webpack: (config) => {
    config.cache = false;
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
      ignored: ["**/node_modules/**", "**/.next/**", "**/.git/**", "/data/**", "/data"],
    };
    return config;
  },
};
export default nextConfig;
