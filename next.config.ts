import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/wedding-thankyou" : "",
  assetPrefix: isProd ? "/wedding-thankyou/" : "",
};

export default nextConfig;
