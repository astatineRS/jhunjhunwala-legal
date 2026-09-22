"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { lenisRef } from "@/lib/lenis";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { ArrowUp } from "@/components/ui/icons";

/**
 * Back-to-top control. Appears once the page is scrolled past a screen height
 * and scrolls through Lenis when smooth scrolling is active, so the ride up
 * matches the rest of the page rather than snapping.
 */
export default function ScrollToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setVisible(value > window.innerHeight * 0.9);
  });

  const toTop = () => {
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
          className="group fixed bottom-6 right-5 z-[55] grid size-12 place-items-center rounded-full bg-teal text-cream shadow-[var(--shadow-lift)] ring-1 ring-white/15 transition-colors duration-500 ease-[var(--ease-out-expo)] hover:bg-gold hover:text-white md:bottom-8 md:right-8"
        >
          <ArrowUp className="size-5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-0.5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
