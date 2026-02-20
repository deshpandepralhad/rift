import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This is the "kill switch" for ESLint during Vercel builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Also skip type checks if they are causing hangs
    ignoreBuildErrors: true,
  },
  experimental: {
    // Prevents the worker pool from crashing due to memory spikes
    webpackBuildWorker: true,
  }
};

export default nextConfig;