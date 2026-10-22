import { Window, PageHeader } from "@/components/terminal/Window";
import { experience, education } from "@/data/experience";
import { profile } from "@/data/profile";

export default function ResumePage() {
  return (
    <div className="space-y-6">
      <PageHeader cmd="git log --oneline --all --author=billvo" />

      <div className="flex flex-wrap items-center gap-3 -mt-2">
        <a
          href="/resume.pdf"
          download="bill-vo-resume.pdf"
          className="inline-flex items-center gap-2 text-sm bg-mono-green/10 border border-mono-green/60 text-mono-green hover:bg-mono-green hover:text-bg px-3 py-1.5 rounded-md transition-colors"
        >
          <span>↓</span>
          <span>download resume.pdf</span>
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-fg-muted hover:text-mono-blue underline underline-offset-4 decoration-dotted"
        >
          open in new tab →
        </a>
      </div>

      <Window title="experience">
        <ul className="space-y-5">
          {experience.map((r) => (
            <li key={r.commit} className="font-mono text-sm">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <span className="text-mono-yellow">{r.commit}</span>
                <span className="text-fg">
                  <span className="text-mono-green">{r.title}</span>{" "}
                  <span className="text-fg-muted">@</span>{" "}
                  <span className="text-mono-blue">{r.company}</span>
                </span>
                <span className="text-fg-muted text-xs ml-auto">({r.period})</span>
              </div>
              <ul className="pl-[9ch] mt-2 space-y-1.5 text-fg-dim">
                {r.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-mono-green shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="pl-[9ch] mt-3 flex flex-wrap gap-1.5">
                {r.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Window>

      <Window title="education">
        <ul className="space-y-4 font-mono text-sm">
          {education.map((e, i) => (
            <li key={i}>
              <div className="text-mono-green">{e.degree}</div>
              <div className="text-fg-dim">{e.school}</div>
              <div className="text-fg-muted text-xs">
                {e.period} · {e.note}
              </div>
            </li>
          ))}
        </ul>
      </Window>

      <Window title="contact">
        <div className="font-mono text-sm space-y-1">
          <div><span className="text-mono-blue">email:</span>{" "}<a className="link" href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <div><span className="text-mono-blue">github:</span>{" "}<a className="link" href={profile.github}>@{profile.handle}</a></div>
          <div><span className="text-mono-blue">linkedin:</span>{" "}<a className="link" href={profile.linkedin}>linkedin</a></div>
        </div>
      </Window>
    </div>
  );
}
