import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { codeToHtml } from "shiki";
import { PageHeader, Window } from "@/components/terminal/Window";
import { getAllPosts, getPost } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

async function Pre({ children }: any) {
  const code = children?.props?.children ?? "";
  const lang = (children?.props?.className ?? "").replace("language-", "") || "text";
  try {
    const html = await codeToHtml(code, { lang, theme: "monokai" });
    return <div className="mb-4 rounded-md overflow-hidden border border-border" dangerouslySetInnerHTML={{ __html: html }} />;
  } catch {
    return <pre className="prose-mono"><code>{code}</code></pre>;
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <div className="space-y-6">
      <PageHeader cmd={`cat ~/writing/${post.meta.slug}.mdx`} />

      <Window title={`${post.meta.slug}.mdx`}>
        <header className="mb-6 pb-4 border-b border-border">
          <div className="text-xs text-fg-muted mb-2">
            --- {post.meta.date} ---
          </div>
          <h1 className="text-3xl text-mono-pink"># {post.meta.title}</h1>
          <p className="text-fg-dim mt-2">{post.meta.description}</p>
          {post.meta.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {post.meta.tags.map((t) => (
                <span key={t} className="tag">#{t}</span>
              ))}
            </div>
          )}
        </header>

        <article className="prose-mono max-w-none">
          <MDXRemote source={post.content} components={{ pre: Pre as any }} />
        </article>

        <footer className="mt-10 pt-4 border-t border-border text-sm">
          <Link href="/writing" className="link">← back to posts</Link>
        </footer>
      </Window>
    </div>
  );
}
