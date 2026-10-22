import Link from "next/link";
import { PageHeader, Window } from "@/components/terminal/Window";
import { getAllPosts } from "@/lib/posts";

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-6">
      <PageHeader cmd="ls -t ~/writing/posts/">
        <span className="text-fg-muted text-xs">{posts.length} entries</span>
      </PageHeader>

      <Window title="posts/">
        {posts.length === 0 ? (
          <p className="text-fg-muted text-sm">no posts yet. check back soon.</p>
        ) : (
          <ul className="divide-y divide-border">
            {posts.map((p) => (
              <li key={p.slug} className="py-3 first:pt-0 last:pb-0">
                <Link href={`/writing/${p.slug}`} className="group block">
                  <div className="flex items-baseline gap-3">
                    <span className="text-mono-green shrink-0">▸</span>
                    <span className="text-fg group-hover:text-mono-blue transition-colors">
                      {p.title}
                    </span>
                    <span className="text-xs text-fg-muted ml-auto">{p.date}</span>
                  </div>
                  <div className="ml-5 mt-1 text-sm text-fg-dim">{p.description}</div>
                  {p.tags.length > 0 && (
                    <div className="ml-5 mt-2 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">#{t}</span>
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
