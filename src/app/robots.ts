import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // PR previews are temporary copies of the site
    rules: { userAgent: "*", allow: "/", disallow: "/previews/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
