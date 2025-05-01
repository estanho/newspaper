import type { NextConfig } from "next";

import "@/lib/envConfig";

const nextConfig: NextConfig = {
  env: {
    APP_BASE_URL: process.env.APP_BASE_URL,
  },
};

export default nextConfig;
