import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/obligation_control_mapping",
        destination: "/obligation-control-mapping",
        permanent: false,
      },
      {
        source: "/platform/obligation_control_mapping",
        destination: "/obligation-control-mapping",
        permanent: false,
      },
      {
        source: "/platform/obligation-control-mapping",
        destination: "/obligation-control-mapping",
        permanent: false,
      },
      {
        source: "/platform/applicability-engine",
        destination: "/applicability-engine",
        permanent: false,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};


export default nextConfig;
