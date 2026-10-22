"use client";

import { useEffect, useState } from "react";

const LINES = [
  "Booting billvo-os v0.2.0...",
  "[  OK  ] mounted /dev/dreams",
  "[  OK  ] loaded curiosity.sys",
  "[  OK  ] started coffee.service",
  "[  OK  ] decrypted /home/billvo",
  "whoami: bill vo",
  "pwd: /home/billvo",
  "> ready.",
];

export default function BootSequence({ onDone }: { onDone: () => void }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => {
        if (i >= LINES.length) {
          clearInterval(t);
          setTimeout(onDone, 300);
          return i;
        }
        return i + 1;
      });
    }, 150);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[60] bg-bg flex items-center justify-center">
      <pre className="font-mono text-sm md:text-base text-fg-dim p-6 max-w-xl">
        {LINES.slice(0, idx).map((l, i) => (
          <div key={i} className="animate-fadeIn">
            {l.includes("[  OK  ]") ? (
              <>
                <span className="text-mono-green">[  OK  ]</span>
                {l.replace("[  OK  ]", "")}
              </>
            ) : l.startsWith(">") ? (
              <span className="text-mono-yellow">{l}</span>
            ) : (
              l
            )}
          </div>
        ))}
        <span className="text-mono-green prompt-caret" />
      </pre>
    </div>
  );
}
