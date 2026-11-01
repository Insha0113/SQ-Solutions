import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the root: the parent home directory has a stray package-lock.json.
    root: path.join(__dirname),
    // Tailwind v4 compiler. Without this loader no utility classes are generated.
    rules: {
      "*.css": {
        loaders: [{ loader: "@tailwindcss/turbopack", options: { base: path.join(__dirname) } }],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
