import type { Metadata } from "next";
import { Window, PageHeader } from "@/components/terminal/Window";
import { experience, education } from "@/data/experience";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "resume",
  description: `${profile.name}'s resume — experience, education, contact.`,
};

export default function ResumePage() {
  return (
    <div className="space-y-6">
      <PageHeader cmd="git log --oneline --all --author=billvo" />

      <div className="-mt-2 flex flex-wrap items-center gap-3">
        <a
          href="/resume.pdf"
          download="bill-vo-resume.pdf"
          className="inline-flex items-center gap-2 rounded-md border border-mono-green/60 bg-mono-green/10 px-3 py-1.5 text-sm text-mono-green transition-colors hover:bg-mono-green hover:text-bg"
        >
          <span>↓</span>
          <span>download resume.pdf</span>
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-fg-muted underline decoration-dotted underline-offset-4 hover:text-mono-blue"
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
                <span className="ml-auto text-xs text-fg-muted">({r.period})</span>
              </div>
              <ul className="mt-2 space-y-1.5 pl-[9ch] text-fg-dim">
                {r.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="shrink-0 text-mono-green">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5 pl-[9ch]">
                {r.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
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
              <div className="text-xs text-fg-muted">
                {e.period} · {e.note}
              </div>
            </li>
          ))}
        </ul>
      </Window>

      <Window title="contact">
        <div className="space-y-1 font-mono text-sm">
          <div>
            <span className="text-mono-blue">email:</span>{" "}
            <a className="link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
          <div>
            <span className="text-mono-blue">github:</span>{" "}
            <a className="link" href={profile.github}>
              @{profile.handle}
            </a>
          </div>
          <div>
            <span className="text-mono-blue">linkedin:</span>{" "}
            <a className="link" href={profile.linkedin}>
              linkedin
            </a>
          </div>
        </div>
      </Window>
    </div>
  );
}
