import type { NextConfig } from "next";

<<<<<<< HEAD
const isProd = process.env.NODE_ENV = 'production';

=======
const isProd = process.env.NODE_ENV === 'production';
>>>>>>> 3bc9f2596629faf17c758229a31412c9148a8e49
const nextConfig: NextConfig = {
  basePath: isProd ? '/portfolio' : '',
  output: 'export',
  images:{
    unoptimized: true,
  }
};

export default nextConfig;
