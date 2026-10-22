import type { Metadata } from "next";
import { Window, PageHeader } from "@/components/terminal/Window";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "about",
  description: `${profile.name} — ${profile.tagline}.`,
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <PageHeader cmd="cat ~/about.md" />
      <Window title="about.md">
        <div className="prose-mono max-w-none">
          <h1># whoami</h1>
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <h2>## stats</h2>
          <ul>
            <li>location: {profile.location}</li>
            <li>
              mail: <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              github: <a href={profile.github}>@{profile.handle}</a>
            </li>
            <li>
              linkedin: <a href={profile.linkedin}>linkedin.com</a>
            </li>
          </ul>
          <h2>## values i try (and often fail) to live by</h2>
          <ul>
            <li>ship small, ship often. prod is the only real teacher.</li>
            <li>the boring tool wins. use postgres until you can&apos;t.</li>
            <li>write it down. future-me is a stranger.</li>
            <li>be kind in code review. be kind in general.</li>
          </ul>
        </div>
      </Window>
    </div>
  );
}
