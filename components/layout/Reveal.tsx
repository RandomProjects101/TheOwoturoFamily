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
  blur?: boolean;
  once?: boolean;
  amount?: number;
  duration?: number;
}

/** Standard fade + blur + rise entrance used to give every section the
 * same unhurried, cinematic feel as it comes into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  blur = true,
  once = true,
  amount = 0.3,
  duration = 1.1,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y, filter: blur ? "blur(10px)" : "blur(0px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
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
