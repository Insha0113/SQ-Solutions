import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the root: the parent home directory has a stray package-lock.json.
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
