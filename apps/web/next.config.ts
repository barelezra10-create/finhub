import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@fintiex/ui", "@fintiex/calculators"],
};

export default config;
