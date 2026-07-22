"use client";

import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/utils";

export const JOURNEY_SECTIONS = [
  { id: "hero", label: "Welcome" },
  { id: "intro", label: "Introduction" },
  { id: "gallery", label: "Family Gallery" },
  // { id: "voices", label: "The Family Speaks" }, — re-add alongside FamilySpeaks in app/page.tsx
  { id: "memories", label: "Favourite Memories" },
  { id: "timeline", label: "Her Timeline" },
  { id: "wall", label: "Photo Wall" },
  { id: "loved", label: "Things She Loved" },
  { id: "final", label: "In Loving Memory" },
] as const;

export function ProgressNav() {
  const activeId = useActiveSection(JOURNEY_SECTIONS.map((s) => s.id));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Journey through her story"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex"
    >
      {JOURNEY_SECTIONS.map((section) => {
        const isActive = section.id === activeId;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollTo(section.id)}
            aria-label={`Go to ${section.label}`}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center gap-2 py-0.5"
          >
            <span className="pointer-events-none translate-x-2 whitespace-nowrap rounded-full bg-ink/85 px-2.5 py-1 font-sans text-[11px] tracking-wide text-cream opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              {section.label}
            </span>
            <span
              className={cn(
                "block h-2 w-2 rounded-full border transition-all duration-300",
                isActive
                  ? "scale-125 border-gold-deep bg-gold-deep"
                  : "border-ink-faint/40 bg-transparent group-hover:border-gold-deep/70"
              )}
            />
          </button>
        );
      })}
    </nav>
  );
}
