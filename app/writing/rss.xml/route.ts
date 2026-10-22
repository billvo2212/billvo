import { getAllPosts } from "@/lib/posts";
import { profile } from "@/data/profile";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://billvvo.dev";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function GET() {
  const posts = getAllPosts();
  const items = posts
    .map(
      (p) => `<item>
      <title>${esc(p.title)}</title>
      <link>${SITE}/writing/${p.slug}</link>
      <guid>${SITE}/writing/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
    </item>`,
    )
    .join("\n    ");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(profile.name)} — writing</title>
    <link>${SITE}/writing</link>
    <atom:link href="${SITE}/writing/rss.xml" rel="self" type="application/rss+xml" />
    <description>Posts from ${esc(profile.name)}.</description>
    <language>en-us</language>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
