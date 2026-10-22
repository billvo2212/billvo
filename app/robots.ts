import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://billvvo.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/secret"] },
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
