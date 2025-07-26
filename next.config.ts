import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cambiar a standalone para Netlify
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Deshabilitar características que no funcionan con export estático
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true, // Cambiar a true para deploy más rápido
  },
};

export default nextConfig;
