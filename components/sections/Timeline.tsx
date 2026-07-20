"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/layout/Reveal";
import { Frame } from "@/components/ui/Frame";
import { timelineEvents } from "@/data/content";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Timeline() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="timeline"
      className="relative w-full bg-cream-soft px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold-deep">
            Her Timeline
          </p>
          <h2 className="mt-5 font-display text-3xl italic text-ink sm:text-4xl">
            A life, gently unfolding
          </h2>
          <p className="mt-4 font-serif text-sm italic text-ink-faint">
            Click a moment to learn more.
          </p>
        </Reveal>

        <div className="relative mt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[13px] hidden h-px bg-gold-deep/25 md:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 left-[13px] top-2 w-px bg-gold-deep/25 md:hidden"
          />

          <div className="flex flex-col gap-12 md:flex-row md:gap-10 md:overflow-x-auto md:pb-8">
            {timelineEvents.map((event, i) => {
              const isActive = event.id === activeId;
              return (
                <Reveal
                  key={event.id}
                  delay={i * 0.08}
                  y={16}
                  className="relative md:w-64 md:shrink-0"
                >
                  <button
                    type="button"
                    onClick={() => setActiveId(isActive ? null : event.id)}
                    aria-expanded={isActive}
                    className="flex items-start gap-4 text-left md:flex-col md:items-start md:gap-4"
                  >
                    <span
                      className={cn(
                        "relative z-10 mt-0.5 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border bg-cream-soft transition-colors duration-300",
                        isActive ? "border-gold-deep" : "border-gold-deep/40"
                      )}
                    >
                      <span
                        className={cn(
                          "h-2 w-2 rounded-full transition-colors duration-300",
                          isActive ? "bg-gold-deep" : "bg-gold-deep/50"
                        )}
                      />
                    </span>
                    <span className="block font-display text-lg italic text-ink">
                      {event.title}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6, ease: EASE }}
                        className="overflow-hidden pl-[38px] md:pl-0"
                      >
                        <div className="mt-4 max-w-xs">
                          <Frame
                            src={event.photo}
                            alt={event.title}
                            monogram={event.title}
                            className="aspect-[4/3] w-full rounded-sm"
                            imgClassName={event.photoPosition ?? "object-top"}
                            sizes="256px"
                          />
                          <p className="mt-4 font-serif text-sm leading-relaxed text-ink-soft">
                            {event.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
