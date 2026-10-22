"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function KonamiListener() {
  const router = useRouter();
  const buf = useRef<string[]>([]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      buf.current = [...buf.current, e.key].slice(-KONAMI.length);
      if (buf.current.join(",") === KONAMI.join(",")) {
        router.push("/secret");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  return null;
}
