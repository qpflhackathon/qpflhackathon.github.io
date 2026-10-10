import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exported as a static site to `out/` for GitHub Pages
  output: "export",
  // PR previews are served from a sub-path (e.g. /previews/pr-12)
  basePath: process.env.BASE_PATH ?? "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
