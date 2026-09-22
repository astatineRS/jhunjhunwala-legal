"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { process } from "@/content/home";
import { viewportOnce, EASE_OUT_EXPO } from "@/lib/motion";

/**
 * The four-step working method as a numbered editorial list. A hairline runs
 * down the left edge of the list and a gold rule fills it in as the section
 * scrolls, so the reader's progress and the firm's process advance together.
 */
export default function ProcessList() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 78%", "end 62%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.02, 1]);

  return (
    <div ref={ref} className="relative mt-8 md:mt-16">
      {/* track + scroll-linked fill */}
      <span
        aria-hidden
        className="absolute left-[19px] top-2 bottom-2 w-px bg-ink/12 md:left-[27px]"
      />
      <motion.span
        aria-hidden
        style={{ scaleY }}
        className="absolute left-[19px] top-2 bottom-2 w-px origin-top bg-gold md:left-[27px]"
      />

      <ol className="flex flex-col gap-6 md:gap-14">
        {process.map((item, index) => (
          <motion.li
            key={item.step}
            className="relative pl-14 md:pl-24"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: index * 0.07 }}
          >
            <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full bg-cream text-[0.8125rem] font-semibold text-teal ring-1 ring-ink/12 md:size-14 md:text-[0.9375rem]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="display-3 text-ink">{item.step}</h3>
            <p className="mt-2 md:mt-2.5 max-w-xl text-balance-pretty text-[0.9375rem] md:text-[1.0625rem] leading-relaxed text-ink/65">
              {item.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
