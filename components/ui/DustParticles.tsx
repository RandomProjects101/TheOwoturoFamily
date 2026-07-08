"use client";

import { useMemo, type CSSProperties } from "react";
import { createSeededRandom, seededHash } from "@/lib/utils";

interface DustParticlesProps {
  count?: number;
  className?: string;
}

/** Barely-there floating specks, like dust caught in a shaft of sunlight.
 * Positions are seeded so server and client render identically. */
export function DustParticles({ count = 26, className }: DustParticlesProps) {
  const particles = useMemo(() => {
    const random = createSeededRandom(seededHash("owoturo-dust-field"));
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: random() * 100,
      size: 2 + random() * 3,
      duration: 14 + random() * 12,
      delay: random() * 16,
      driftX: (random() - 0.5) * 70,
      opacity: 0.12 + random() * 0.3,
    }));
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="animate-dust absolute rounded-full bg-gold-soft"
          style={
            {
              left: `${p.left}%`,
              bottom: "-10px",
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--dust-x": `${p.driftX}px`,
              "--dust-opacity": p.opacity,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
