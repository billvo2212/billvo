"use client";

import { useEffect, useState } from "react";

/**
 * Returns the ⌘K / Ctrl+/ shortcut label appropriate to the user's OS.
 * Falls back to the non-Mac label during SSR to avoid a hydration mismatch;
 * the real value is set in a mount effect, so Mac users see a brief flicker
 * on first paint while the Windows/Linux user sees nothing.
 */
export function useShortcutLabel(): string {
  const [label, setLabel] = useState("Ctrl+/");
  useEffect(() => {
    const ua = navigator.userAgent || "";
    const platform = (navigator as Navigator & { userAgentData?: { platform?: string } })
      .userAgentData?.platform;
    const isMac = /mac|iphone|ipod|ipad/i.test(platform ?? ua);
    setLabel(isMac ? "⌘K" : "Ctrl+/");
  }, []);
  return label;
}
