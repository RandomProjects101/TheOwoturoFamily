"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Initial vertical offset in pixels. */
  y?: number;
  once?: boolean;
  amount?: number;
  duration?: number;
}

/** Standard fade + rise entrance used to give every section the same
 * unhurried, cinematic feel as it comes into view.
 *
 * This used to also animate `filter: blur()`, but that's baked into the
 * server-rendered HTML as blurred (the server can't know the client's
 * pointer type), and Framer Motion never clears a CSS property that a
 * later client-side variant stops mentioning — so on touch devices the
 * blur got stuck permanently instead of resolving to sharp. Sticking to
 * opacity/transform avoids the mismatch entirely. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  amount = 0.3,
  duration = 1.1,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export const EASE_OUT = EASE;
