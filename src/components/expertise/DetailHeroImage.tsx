"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { useReducedMotionSafe } from "@/lib/reduced-motion";
import { cn } from "@/lib/utils";

/**
 * Wide editorial image for a practice-area page: a cream curtain wipes upward
 * on entry while the photograph settles from a slight over-scale, then drifts
 * on scroll.
 *
 * The IntersectionObserver sits on the mask (the overflow-hidden frame) and the
 * curtain/photo are driven through inherited variants — an observer attached to
 * the translated curtain itself would never report an intersection.
 */
export default function DetailHeroImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative isolate overflow-hidden rounded-[var(--radius-card)] bg-sand",
        className,
      )}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 -top-[8%] h-[116%]"
        style={reduceMotion ? undefined : { y }}
        variants={{
          hidden: { scale: reduceMotion ? 1 : 1.14 },
          show: { scale: 1, transition: { duration: reduceMotion ? 0 : 1.5, ease: EASE_OUT_EXPO } },
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1320px) 1216px, 100vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute inset-0 z-10 bg-cream"
        variants={{
          hidden: { y: "0%" },
          show: {
            y: "-101%",
            transition: { duration: reduceMotion ? 0 : 1.2, ease: EASE_OUT_EXPO },
          },
        }}
      />

      <div className="absolute inset-0 ring-1 ring-inset ring-ink/5" aria-hidden />
    </motion.div>
  );
}
