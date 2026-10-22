import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Window } from "@/components/terminal/Window";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "writing",
  description: "Short posts, notes, and thoughts.",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-6">
      <PageHeader cmd="ls -t ~/writing/posts/">
        <div className="flex items-center gap-3 text-xs text-fg-muted">
          <span>{posts.length} entries</span>
          <span>·</span>
          <a href="/writing/rss.xml" className="link">
            rss
          </a>
        </div>
      </PageHeader>

      <Window title="posts/">
        {posts.length === 0 ? (
          <p className="text-sm text-fg-muted">no posts yet. check back soon.</p>
        ) : (
          <ul className="divide-y divide-border">
            {posts.map((p) => (
              <li key={p.slug} className="py-3 first:pt-0 last:pb-0">
                <Link href={`/writing/${p.slug}`} className="group block">
                  <div className="flex items-baseline gap-3">
                    <span className="shrink-0 text-mono-green">▸</span>
                    <span className="text-fg transition-colors group-hover:text-mono-blue">
                      {p.title}
                    </span>
                    <span className="ml-auto text-xs text-fg-muted">{p.date}</span>
                  </div>
                  <div className="ml-5 mt-1 text-sm text-fg-dim">{p.description}</div>
                  {p.tags.length > 0 && (
                    <div className="ml-5 mt-2 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Window>
    </div>
  );
}
