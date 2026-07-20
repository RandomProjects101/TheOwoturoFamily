"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Frame } from "@/components/ui/Frame";
import { family } from "@/data/content";
import { useIsCoarsePointer } from "@/lib/useIsCoarsePointer";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const isCoarsePointer = useIsCoarsePointer();

  const scrollToIntro = () => {
    document.getElementById("intro")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-ink"
    >
      <motion.div
        initial={
          isCoarsePointer
            ? { opacity: 0, scale: 1.09 }
            : { opacity: 0, scale: 1.09, filter: "blur(26px)" }
        }
        animate={
          isCoarsePointer ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, filter: "blur(4px)" }
        }
        transition={{ duration: 3.4, ease: EASE }}
        className="absolute inset-0"
      >
        <Frame
          src={family.heroPhoto}
          alt="The Owoturo family"
          className="h-full w-full"
          priority
          sizes="100vw"
          showMonogram={false}
        />
      </motion.div>

      {/* Warm, single-tone overlay for legibility — not a decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/35 to-ink/75" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center text-cream">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.1, ease: EASE }}
          className="mb-6 font-sans text-xs uppercase tracking-[0.4em] text-cream/70"
        >
          The {family.familyName} Family
        </motion.span>

        <motion.h1
          initial={isCoarsePointer ? { opacity: 0, y: 22 } : { opacity: 0, y: 22, filter: "blur(10px)" }}
          animate={isCoarsePointer ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.7, delay: 1.5, ease: EASE }}
          className="text-balance font-display text-5xl italic leading-tight sm:text-6xl md:text-7xl"
        >
          {family.heroTitle}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.4, ease: EASE }}
          className="mt-7 font-serif text-lg italic text-cream/90 sm:text-xl"
        >
          {family.heroSubtitleLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </motion.div>

        <motion.button
          type="button"
          onClick={scrollToIntro}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 1.2, delay: 3.2, ease: EASE }}
          className="mt-14 rounded-full border border-cream/50 px-9 py-3.5 font-sans text-sm tracking-[0.2em] uppercase text-cream transition-colors duration-300 hover:border-gold-soft hover:bg-cream/10"
        >
          {family.heroCta}
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.8 }}
        className="absolute bottom-9 left-1/2 z-10 -translate-x-1/2 text-cream/60"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" strokeWidth={1.25} />
        </motion.div>
      </motion.div>
    </section>
  );
}
