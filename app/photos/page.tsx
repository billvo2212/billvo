"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/terminal/Window";
import { photos } from "@/data/photos";

export default function PhotosPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <PageHeader cmd="ls ~/photos/*.jpg">
        <span className="text-fg-muted text-xs">
          {photos.length} photos · film + digital · click to zoom
        </span>
      </PageHeader>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="window text-left hover:border-mono-green transition-colors group"
          >
            <div className="relative aspect-[4/3] bg-bg-raised flex items-center justify-center overflow-hidden">
              <Image
                src={p.src}
                alt={p.caption || p.location}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="text-fg-muted text-xs absolute">[IMG_{String(i + 1).padStart(3, "0")}]</span>
            </div>
            <div className="p-3 text-xs">
              <div className="text-mono-blue">{p.location}</div>
              <div className="text-fg-muted">
                {p.date} {p.camera && <>· {p.camera}</>}
              </div>
              {p.caption && <div className="text-fg-dim mt-1">{"// "}{p.caption}</div>}
            </div>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div className="window max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="window-chrome">
              <div className="flex gap-1.5">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="ml-2">{photos[active].src}</span>
              <button
                onClick={() => setActive(null)}
                className="ml-auto text-fg-muted hover:text-mono-pink"
              >
                ×
              </button>
            </div>
            <div className="relative aspect-[4/3] bg-bg-raised">
              <Image
                src={photos[active].src}
                alt={photos[active].caption || photos[active].location}
                fill
                className="object-contain"
                sizes="80vw"
              />
            </div>
            <div className="p-4 text-sm">
              <div className="text-mono-blue">{photos[active].location}</div>
              <div className="text-fg-muted text-xs">
                {photos[active].date} {photos[active].camera && <>· {photos[active].camera}</>}
              </div>
              {photos[active].caption && (
                <div className="text-fg-dim mt-2">{"// "}{photos[active].caption}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
