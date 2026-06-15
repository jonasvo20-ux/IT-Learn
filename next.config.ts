// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.html": {
        type: "raw",
      },
    },
  },
};

export default nextConfig;