"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CommandInput from "./CommandInput";
import CrtToggle from "./CrtToggle";
import { useShortcutLabel } from "@/lib/use-mod-key";

const NAV = [
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "now", href: "/now" },
  { label: "hobbies", href: "/hobbies" },
  { label: "photos", href: "/photos" },
  { label: "writing", href: "/writing" },
  { label: "uses", href: "/uses" },
  { label: "resume", href: "/resume" },
];

export default function TopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [showInput, setShowInput] = useState(false);
  const shortcutLabel = useShortcutLabel();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMacCombo = e.metaKey && e.key === "k";
      const isWinCombo = e.ctrlKey && e.key === "/";
      if (isMacCombo || isWinCombo) {
        e.preventDefault();
        setShowInput((v) => !v);
      }
      if (e.key === "Escape") setShowInput(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur">
      <div className="container max-w-4xl px-4 md:px-6">
        <div className="flex items-center gap-3 py-2">
          <div className="flex gap-1.5">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <Link
            href="/"
            className="text-xs text-fg-dim transition-colors hover:text-mono-green md:text-sm"
          >
            billvo@portfolio:
            <span className="text-mono-blue">~{pathname === "/" ? "" : pathname}</span>
            <span className="text-mono-green">$</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => setShowInput((v) => !v)}
              className="hidden items-center gap-1 rounded border border-border px-2 py-1 text-xs text-fg-muted hover:text-mono-green md:inline-flex"
              aria-label="Open command palette"
            >
              <span className="text-mono-green">{shortcutLabel}</span>
            </button>
            <CrtToggle />
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-1 pb-2 text-xs md:text-sm">
          {NAV.map((n) => {
            const active = pathname === n.href || (n.href !== "/" && pathname.startsWith(n.href));
            return (
              <Link
                key={n.href}
                href={n.href}
                className={
                  active
                    ? "text-mono-green"
                    : "text-fg-muted transition-colors hover:text-mono-blue"
                }
              >
                <span className="text-fg-muted">cd </span>
                {n.label}
                {active && <span className="prompt-caret" />}
              </Link>
            );
          })}
        </nav>
      </div>
      {showInput && (
        <CommandInput
          onClose={() => setShowInput(false)}
          onNavigate={(path) => {
            router.push(path);
            setShowInput(false);
          }}
        />
      )}
    </header>
  );
}
