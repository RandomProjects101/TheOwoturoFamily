"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FrameProps {
  src?: string;
  alt: string;
  /** Letter or short label shown when no photo is present yet. */
  monogram?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Set false for full-bleed backdrops where text is overlaid on top —
   * a large centered letter would collide with it. */
  showMonogram?: boolean;
  /** "contain" letterboxes instead of cropping — use for composed graphics
   * (collages, banners with text) where cropping would cut off content. */
  fit?: "cover" | "contain";
}

/**
 * Renders a photo if `src` resolves, otherwise falls back to a quiet,
 * intentional placeholder — never a broken-image icon.
 */
export function Frame({
  src,
  alt,
  monogram,
  className,
  imgClassName,
  sizes = "100vw",
  priority = false,
  showMonogram = true,
  fit = "cover",
}: FrameProps) {
  const [errored, setErrored] = useState(false);
  const showPlaceholder = !src || errored;

  return (
    <div className={cn("relative overflow-hidden bg-beige", className)}>
      {!showPlaceholder && (
        <Image
          src={src as string}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setErrored(true)}
          className={cn(fit === "cover" ? "object-cover" : "object-contain", imgClassName)}
        />
      )}
      {showPlaceholder && (
        <PlaceholderArt label={monogram ?? alt} showMonogram={showMonogram} />
      )}
    </div>
  );
}

function PlaceholderArt({ label, showMonogram }: { label: string; showMonogram: boolean }) {
  const initial = label.trim().charAt(0).toUpperCase() || "O";
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-beige to-beige-deep">
      {showMonogram && (
        <>
          <div className="absolute inset-3 border border-gold-deep/15" />
          <div className="flex flex-col items-center gap-3 text-gold-deep/60">
            <span className="font-display italic text-4xl md:text-5xl select-none">
              {initial}
            </span>
            <span className="h-px w-8 bg-gold-deep/40" />
          </div>
        </>
      )}
    </div>
  );
}
