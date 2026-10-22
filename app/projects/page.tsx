import { Window, PageHeader } from "@/components/terminal/Window";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <PageHeader cmd="ls -la ~/projects">
        <span className="text-fg-muted">{projects.length} items</span>
      </PageHeader>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <Window key={p.slug} title={`${p.slug}/`}>
            <article id={p.slug} className="scroll-mt-24">
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h2 className="text-lg text-mono-yellow">
                  <span className="text-mono-green">▸</span> {p.title}
                </h2>
                <span className="text-xs text-fg-muted">{p.year}</span>
              </div>
              <p className="text-sm text-fg mb-3">{p.blurb}</p>
              <p className="text-sm text-fg-dim mb-4 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.stack.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                {p.link && <a href={p.link} className="link">open →</a>}
                {p.repo && <a href={p.repo} className="link">./repo</a>}
              </div>
            </article>
          </Window>
        ))}
      </div>
    </div>
  );
}
