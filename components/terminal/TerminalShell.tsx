"use client";

import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import BootSequence from "./BootSequence";
import KonamiListener from "./KonamiListener";

export default function TerminalShell({ children }: { children: React.ReactNode }) {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {!booted && <BootSequence onDone={() => setBooted(true)} />}
      <div className={booted ? "animate-fadeIn" : "opacity-0"}>
        <TopBar />
        <main className="container max-w-4xl pt-6 pb-24 px-4 md:px-6">
          {children}
        </main>
        <Footer />
      </div>
      <KonamiListener />
    </>
  );
}

function Footer() {
  return (
    <footer className="container max-w-4xl px-4 md:px-6 pb-10 text-xs text-fg-muted">
      <div className="border-t border-border pt-4 flex flex-wrap items-center justify-between gap-2">
        <span>
          <span className="text-mono-green">$</span> uptime —{" "}
          <span className="text-fg-dim">built by bill vo</span>
        </span>
        <span>
          <a href="https://github.com/billvo2212/portfolio" className="link">source</a>
          <span className="mx-2 text-fg-muted">·</span>
          <span>type <code className="text-mono-orange">help</code> for commands</span>
        </span>
      </div>
    </footer>
  );
}
