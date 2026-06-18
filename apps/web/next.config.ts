import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  // Tells Next.js where the monorepo root is so it can trace
  // dependencies from the pnpm store correctly on Vercel
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

export default nextConfig;
