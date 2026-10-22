import { Window, PageHeader } from "@/components/terminal/Window";
import { now } from "@/data/now";

export default function NowPage() {
  return (
    <div className="space-y-6">
      <PageHeader cmd="cat ~/.now">
        <div className="text-fg-muted text-xs">
          what i&apos;m doing <em>now</em> — a <a href="https://nownownow.com" className="link">now page</a>.
        </div>
      </PageHeader>

      <Window title="~/.now">
        <div className="text-xs text-fg-muted mb-6 font-mono">
          <div>-- updated: <span className="text-mono-green">{now.updated}</span></div>
          <div>-- location: <span className="text-mono-blue">{now.location}</span></div>
        </div>
        <ul className="space-y-4">
          {now.bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-mono-green shrink-0 mt-0.5">▸</span>
              <div>
                <div className="text-mono-blue text-sm uppercase tracking-wider">{b.label}</div>
                <div className="text-fg-dim">{b.value}</div>
              </div>
            </li>
          ))}
        </ul>
      </Window>
    </div>
  );
}
