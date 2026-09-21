"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * Wraps the article body and drives a thin reading-progress bar that sits just
 * below the fixed header. The scroll range is scoped to the wrapped element, so
 * the bar reflects progress through the article rather than through the page.
 */
export default function ArticleReader({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 20%", "end 90%"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 28, restDelta: 0.001 });
  const opacity = useTransform(scrollYProgress, [0, 0.012, 0.93, 1], [0, 1, 1, 0]);

  return (
    <>
      <motion.div
        style={{ opacity, top: "var(--header-h)" }}
        className="pointer-events-none fixed inset-x-0 z-[45] h-[2px] bg-ink/10"
        aria-hidden
      >
        <motion.div style={{ scaleX }} className="h-full origin-left bg-gold" />
      </motion.div>

      <div ref={ref}>{children}</div>
    </>
  );
}
