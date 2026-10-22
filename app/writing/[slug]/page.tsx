import type { Metadata } from "next";
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

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      type: "article",
      title: post.meta.title,
      description: post.meta.description,
      publishedTime: post.meta.date,
      tags: post.meta.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
    },
  };
}

async function Pre({ children }: any) {
  const code = children?.props?.children ?? "";
  const lang = (children?.props?.className ?? "").replace("language-", "") || "text";
  try {
    const html = await codeToHtml(code, { lang, theme: "monokai" });
    return (
      <div
        className="mb-4 overflow-hidden rounded-md border border-border"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch {
    return (
      <pre className="prose-mono">
        <code>{code}</code>
      </pre>
    );
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <div className="space-y-6">
      <PageHeader cmd={`cat ~/writing/${post.meta.slug}.mdx`} />

      <Window title={`${post.meta.slug}.mdx`}>
        <header className="mb-6 border-b border-border pb-4">
          <div className="mb-2 text-xs text-fg-muted">--- {post.meta.date} ---</div>
          <h1 className="text-3xl text-mono-pink"># {post.meta.title}</h1>
          <p className="mt-2 text-fg-dim">{post.meta.description}</p>
          {post.meta.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {post.meta.tags.map((t) => (
                <span key={t} className="tag">
                  #{t}
                </span>
              ))}
            </div>
          )}
        </header>

        <article className="prose-mono max-w-none">
          <MDXRemote source={post.content} components={{ pre: Pre as any }} />
        </article>

        <footer className="mt-10 border-t border-border pt-4 text-sm">
          <Link href="/writing" className="link">
            ← back to posts
          </Link>
        </footer>
      </Window>
    </div>
  );
}
