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
      {
        source: "/regulatory_examination",
        destination: "/regulatory-examination",
        permanent: false,
      },
      {
        source: "/regulatory_change",
        destination: "/regulatory-change",
        permanent: false,
      },
      {
        source: "/solutions/general-counsel",
        destination: "/general-counsel",
        permanent: false,
      },
      {
        source: "/roles/general-counsel",
        destination: "/general-counsel",
        permanent: false,
      },
      {
        source: "/solutions/chief-compliance-officer",
        destination: "/chief-compliance-officer",
        permanent: false,
      },
      {
        source: "/roles/chief-compliance-officer",
        destination: "/chief-compliance-officer",
        permanent: false,
      },
      {
        source: "/solutions/chief-risk-officer",
        destination: "/chief-risk-officer",
        permanent: false,
      },
      {
        source: "/roles/chief-risk-officer",
        destination: "/chief-risk-officer",
        permanent: false,
      },
      {
        source: "/solutions/ai-governance",
        destination: "/ai-governance",
        permanent: false,
      },
      {
        source: "/solutions/mergers-acquisitions",
        destination: "/transformation",
        permanent: false,
      },
      {
        source: "/solutions/ma-transformation",
        destination: "/transformation",
        permanent: false,
      },
      {
        source: "/solutions/transformation",
        destination: "/transformation",
        permanent: false,
      },
      {
        source: "/mergers-acquisitions",
        destination: "/transformation",
        permanent: false,
      },
      {
        source: "/m-and-a-transformation",
        destination: "/transformation",
        permanent: false,
      },
      {
        source: "/ma-transformation",
        destination: "/transformation",
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
