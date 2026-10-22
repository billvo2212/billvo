import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://billvvo.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/now",
    "/hobbies",
    "/photos",
    "/writing",
    "/uses",
    "/resume",
  ].map((p) => ({
    url: `${SITE}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${SITE}/writing/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...posts];
}
