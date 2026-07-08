"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "@/components/layout/Reveal";
import { memories } from "@/data/content";
import { createSeededRandom, seededHash } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

function getNoteStyle(id: string) {
  const rand = createSeededRandom(seededHash(id));
  return {
    rotate: (rand() - 0.5) * 8,
    floatDelay: rand() * 2,
    floatDuration: 5 + rand() * 3,
  };
}

export function FavouriteMemories() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = memories.find((m) => m.id === activeId) ?? null;

  useEffect(() => {
    if (!activeId) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeId]);

  return (
    <section
      id="memories"
      className="relative w-full overflow-hidden bg-cream px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold-deep">
            Favourite Memories
          </p>
          <h2 className="mt-5 font-display text-3xl italic text-ink sm:text-4xl">
            Little notes we still hold on to
          </h2>
          <p className="mt-4 font-serif text-sm italic text-ink-faint">
            Click a note to read the whole story.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:gap-x-10 md:gap-y-14">
          {memories.map((memory, i) => {
            const { rotate, floatDelay, floatDuration } = getNoteStyle(memory.id);
            return (
              <Reveal key={memory.id} delay={(i % 3) * 0.12} y={20}>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: floatDuration,
                    delay: floatDelay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.button
                    type="button"
                    layoutId={`note-${memory.id}`}
                    onClick={() => setActiveId(memory.id)}
                    style={{ rotate }}
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    whileFocus={{ scale: 1.05, rotate: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    aria-label={`Read memory: ${memory.title}`}
                    className="relative block w-full rounded-sm bg-paper p-6 text-left shadow-card"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -top-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-gold-soft shadow-sm"
                    />
                    <p className="font-hand text-2xl leading-snug text-ink">
                      {memory.title}
                    </p>
                    {memory.date && (
                      <p className="mt-2 font-sans text-[11px] uppercase tracking-wider text-ink-faint">
                        {memory.date}
                      </p>
                    )}
                    <p className="mt-3 line-clamp-3 font-serif text-sm italic text-ink-soft">
                      {memory.excerpt}
                    </p>
                  </motion.button>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/70 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setActiveId(null)}
          >
            <motion.div
              layoutId={`note-${active.id}`}
              onClick={(e) => e.stopPropagation()}
              transition={{ duration: 0.6, ease: EASE }}
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              className="relative max-h-[80vh] w-full max-w-xl overflow-y-auto rounded-sm bg-paper p-8 shadow-soft sm:p-10"
            >
              <button
                type="button"
                onClick={() => setActiveId(null)}
                aria-label="Close memory"
                className="absolute right-5 top-5 text-ink-faint transition-colors hover:text-ink"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <p className="pr-8 font-hand text-3xl text-ink">{active.title}</p>
              {active.date && (
                <p className="mt-2 font-sans text-xs uppercase tracking-wider text-gold-deep">
                  {active.date}
                </p>
              )}
              <p className="mt-6 whitespace-pre-line font-serif text-lg leading-relaxed text-ink-soft">
                {active.story}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
