import type { NextConfig } from "next";

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const nextConfig: NextConfig = {
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  output: 'export',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
