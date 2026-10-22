"use client";

import { useEffect, useState } from "react";

export default function CrtToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("crt") === "1";
    setOn(saved);
    document.documentElement.classList.toggle("crt", saved);
  }, []);

  const toggle = () => {
    const next = !on;
    setOn(next);
    document.documentElement.classList.toggle("crt", next);
    localStorage.setItem("crt", next ? "1" : "0");
  };

  return (
    <button
      onClick={toggle}
      className="text-xs text-fg-muted hover:text-mono-green border border-border rounded px-2 py-1"
      aria-label="Toggle CRT effect"
      title="Toggle CRT scanlines"
    >
      crt:{on ? <span className="text-mono-green">on</span> : "off"}
    </button>
  );
}
