import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Old Figma Sites URLs
  async redirects() {
    return [
      { source: "/projectsphere", destination: "/work/sphere", permanent: true },
      { source: "/projectsales", destination: "/#work", permanent: true },
      { source: "/projectvinya", destination: "/", permanent: true },
      { source: "/work", destination: "/#work", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/contact", destination: "/#about", permanent: true },
    ];
  },
};

export default nextConfig;
