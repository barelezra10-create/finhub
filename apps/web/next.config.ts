import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@fintiex/ui", "@fintiex/db", "@fintiex/calculators"],
  typedRoutes: true,
};

export default config;
