import { Window, PageHeader } from "@/components/terminal/Window";
import { uses } from "@/data/uses";

function Section({ title, items }: { title: string; items: { k: string; v: string }[] }) {
  return (
    <Window title={title}>
      <dl className="font-mono text-sm space-y-2">
        {items.map((it) => (
          <div key={it.k} className="grid grid-cols-[120px_1fr] gap-3">
            <dt className="text-mono-blue">{it.k}</dt>
            <dd className="text-fg-dim">{it.v}</dd>
          </div>
        ))}
      </dl>
    </Window>
  );
}

export default function UsesPage() {
  return (
    <div className="space-y-6">
      <PageHeader cmd="cat ~/uses.md">
        <span className="text-fg-muted text-xs">
          the tools i reach for. inspired by <a href="https://uses.tech" className="link">uses.tech</a>.
        </span>
      </PageHeader>
      <Section title="# machine" items={uses.machine} />
      <Section title="# dev environment" items={uses.dev} />
      <Section title="# stack" items={uses.stack} />
    </div>
  );
}
