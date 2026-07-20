"use client";

import { useState } from "react";

/** Animating `filter: blur()` is a well-known mobile Safari/Chrome jank
 * source — read the pointer type once via a lazy initializer (it can't
 * change mid-session) so callers can skip blur animations on touch devices. */
export function useIsCoarsePointer() {
  const [isCoarsePointer] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches
  );
  return isCoarsePointer;
}
