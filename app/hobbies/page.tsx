"use client";

import { useState } from "react";
import { PageHeader } from "@/components/terminal/Window";
import { hobbies } from "@/data/hobbies";

export default function HobbiesPage() {
  const [open, setOpen] = useState<string | null>(null);
  const active = hobbies.find((h) => h.filename === open) ?? null;

  return (
    <div className="space-y-6">
      <PageHeader cmd="ls -lah ~/hobbies">
        <span className="text-fg-muted text-xs">{hobbies.length} files · click to open</span>
      </PageHeader>

      <div className="window">
        <div className="window-chrome">
          <div className="flex gap-1.5">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="ml-2">zsh — ~/hobbies</span>
        </div>
        <div className="p-4 font-mono text-sm">
          <div className="hidden md:grid grid-cols-[auto_80px_auto_1fr] gap-x-6 text-xs text-fg-muted border-b border-border pb-2 mb-2">
            <span>permissions</span><span>size</span><span>modified</span><span>name</span>
          </div>
          <ul className="space-y-1">
            {hobbies.map((h) => (
              <li key={h.filename}>
                <button
                  onClick={() => setOpen(h.filename === open ? null : h.filename)}
                  className="grid grid-cols-[auto_80px_auto_1fr] gap-x-6 w-full text-left hover:bg-bg-raised px-2 py-1 rounded transition-colors"
                >
                  <span className="text-fg-muted">-rw-r--r--</span>
                  <span className="text-fg-muted">{h.size}</span>
                  <span className="text-fg-muted hidden md:inline">Oct 20</span>
                  <span className="text-mono-blue">{h.filename}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {active && (
        <div className="window animate-fadeIn">
          <div className="window-chrome">
            <div className="flex gap-1.5">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <span className="ml-2">cat {active.filename}</span>
            <button
              onClick={() => setOpen(null)}
              className="ml-auto text-fg-muted hover:text-mono-pink"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="p-6">
            <h2 className="text-xl text-mono-yellow mb-4"># {active.title}</h2>
            <div className="text-fg-dim whitespace-pre-line leading-relaxed">
              {active.body}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
