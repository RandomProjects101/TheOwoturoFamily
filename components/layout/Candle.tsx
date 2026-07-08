"use client";

import { motion } from "framer-motion";

/** A small flickering candle that quietly sits in the corner throughout
 * the journey — a single, restrained symbol rather than a decoration. */
export function Candle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-[max(1.25rem,env(safe-area-inset-left))] z-40 hidden select-none sm:block"
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center">
        {/* soft glow */}
        <div className="absolute -top-3 h-8 w-8 rounded-full bg-gold-soft/40 blur-lg" />

        {/* flame */}
        <div className="relative h-4 w-2.5 animate-flicker">
          <div className="h-full w-full rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-t from-gold-deep via-gold to-[#ffe3b0]" />
        </div>

        {/* wick */}
        <div className="h-1 w-px bg-ink-soft/60" />

        {/* candle body */}
        <div className="h-10 w-3.5 rounded-[2px] bg-gradient-to-b from-cream-soft to-beige shadow-[0_2px_6px_rgba(44,38,32,0.15)]" />

        {/* base */}
        <div className="h-1 w-6 rounded-full bg-beige-deep/70" />
      </div>

      <span className="pointer-events-none absolute left-1/2 bottom-full mb-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink/85 px-3 py-1 font-sans text-[11px] tracking-wide text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        In her memory
      </span>
    </motion.div>
  );
}
