"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Hydration-safe reduced-motion flag.
 *
 * `useReducedMotion` reads the media query during the first client render, and
 * the server has no way to know the answer — branching on it while rendering
 * therefore produces markup the server never wrote, which React reports as a
 * hydration mismatch. This reports `false` until after hydration, so the first
 * client paint matches the server, and the motion is dropped on the next commit.
 */
export function useReducedMotionSafe() {
  const reduced = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  return hydrated && reduced === true;
}
