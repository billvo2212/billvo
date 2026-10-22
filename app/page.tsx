import Link from "next/link";
import { Window, PageHeader } from "@/components/terminal/Window";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { now } from "@/data/now";

export default function Home() {
  const highlighted = projects.filter((p) => p.highlight).slice(0, 2);
  const recent = highlighted.length ? highlighted : projects.slice(0, 2);

  return (
    <div className="space-y-8">
      <PageHeader cmd="cat ~/README.md">
        <div className="text-fg-dim">
          welcome to <span className="text-mono-green">~/billvo</span>. a terminal-shaped portfolio.
        </div>
      </PageHeader>

      <section className="window animate-fadeIn">
        <div className="window-chrome">
          <div className="flex gap-1.5">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="ml-2">~/README.md</span>
        </div>
        <div className="p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            <span className="text-fg-muted"># </span>
            <span className="text-fg">{profile.name}</span>
          </h1>
          <p className="text-mono-yellow text-sm md:text-base mb-6">
            {"// "} {profile.tagline}
          </p>
          <div className="space-y-3 text-fg-dim leading-relaxed">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link href="/about" className="link">cd ~/about</Link>
            <Link href="/projects" className="link">cd ~/projects</Link>
            <Link href="/now" className="link">cd ~/now</Link>
            <a href="/resume.pdf" download="bill-vo-resume.pdf" className="link">./resume.pdf</a>
            <a href={`mailto:${profile.email}`} className="link">./contact.sh</a>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        <Window title="~/now — $(cat .now | head)">
          <div className="text-xs text-fg-muted mb-3">updated {now.updated} · {now.location}</div>
          <ul className="space-y-2 text-sm">
            {now.bullets.slice(0, 4).map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-mono-green shrink-0">▸</span>
                <span>
                  <span className="text-mono-blue">{b.label}:</span>{" "}
                  <span className="text-fg-dim">{b.value}</span>
                </span>
              </li>
            ))}
          </ul>
          <Link href="/now" className="link text-xs mt-4 inline-block">read more →</Link>
        </Window>

        <Window title="ls ~/projects | head -2">
          <ul className="space-y-3 text-sm">
            {recent.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects#${p.slug}`} className="group block">
                  <div className="flex items-baseline gap-2">
                    <span className="text-mono-green">▸</span>
                    <span className="text-fg group-hover:text-mono-blue transition-colors">
                      {p.title}
                    </span>
                    <span className="text-xs text-fg-muted ml-auto">{p.year}</span>
                  </div>
                  <div className="text-xs text-fg-muted ml-5 mt-1">{p.blurb}</div>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/projects" className="link text-xs mt-4 inline-block">see all →</Link>
        </Window>
      </section>

      <section className="text-xs text-fg-muted">
        <p>
          tip: press <kbd className="tag">⌘</kbd>+<kbd className="tag">K</kbd> to open a prompt.
          try <code className="text-mono-orange">help</code>, <code className="text-mono-orange">whoami</code>, or <code className="text-mono-orange">sudo</code>.
        </p>
      </section>
    </div>
  );
}
