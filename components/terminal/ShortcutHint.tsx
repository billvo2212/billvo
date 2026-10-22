"use client";

import { useShortcutLabel } from "@/lib/use-mod-key";

/**
 * One-line hint shown at the bottom of the home page telling visitors which
 * key opens the command input. Reads the user's OS at mount so Mac sees ⌘K
 * and Windows/Linux sees Ctrl+/.
 */
export default function ShortcutHint() {
  const label = useShortcutLabel();
  return (
    <p>
      tip: press <kbd className="tag">{label}</kbd> to open a prompt. try{" "}
      <code className="text-mono-orange">help</code>,{" "}
      <code className="text-mono-orange">whoami</code>, or{" "}
      <code className="text-mono-orange">sudo</code>.
    </p>
  );
}
