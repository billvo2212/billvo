import type { Metadata } from "next";
import { Window, PageHeader } from "@/components/terminal/Window";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "projects",
  description: "Things I've built — side projects, internships, school.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <PageHeader cmd="ls -la ~/projects">
        <span className="text-fg-muted">{projects.length} items</span>
      </PageHeader>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <Window key={p.slug} title={`${p.slug}/`}>
            <article id={p.slug} className="scroll-mt-24">
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <h2 className="text-lg text-mono-yellow">
                  <span className="text-mono-green">▸</span> {p.title}
                </h2>
                <span className="text-xs text-fg-muted">{p.year}</span>
              </div>
              <p className="mb-3 text-sm text-fg">{p.blurb}</p>
              <p className="mb-4 text-sm leading-relaxed text-fg-dim">{p.description}</p>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                {p.link && (
                  <a href={p.link} className="link">
                    open →
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} className="link">
                    ./repo
                  </a>
                )}
              </div>
            </article>
          </Window>
        ))}
      </div>
    </div>
  );
}
