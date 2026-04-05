import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api-proxy/:path*",
        // destination: "https://api-koperasi.ranel.my.id/api/:path*",
        destination: "https://koperasi-tan.vercel.app/api/:path*",
      },
    ];
  },
  // ----------------------------
};

export default nextConfig;
