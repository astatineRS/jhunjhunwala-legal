"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { lenisRef } from "@/lib/lenis";

/**
 * Global inertial scrolling. Disabled outright for users who ask for reduced
 * motion, and torn down on unmount so route changes never stack instances.
 * The instance is published on `lenisRef` so scroll-driven controls (the
 * back-to-top button) travel with the same inertia instead of fighting it.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    lenisRef.current = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return null;
}
