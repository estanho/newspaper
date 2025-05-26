import type { NextConfig } from "next";

import "@/lib/envConfig";

const nextConfig: NextConfig = {
  env: {
    APP_BASE_URL: process.env.APP_BASE_URL,
  },
  transpilePackages: ["react-tweet"],
};

export default nextConfig;
