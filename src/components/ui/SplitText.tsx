"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  /** Delay before the first word starts, in seconds. */
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  once?: boolean;
};

/**
 * Word-by-word mask reveal. Each word sits in an overflow-hidden span and
 * slides up from below the baseline — the signature headline motion.
 *
 * The viewport observer is attached to the *mask* span, never the translated
 * child: a child sitting at translateY(110%) is clipped by its own parent, so
 * an observer on it would report zero intersection and never fire.
 */
export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.055,
  as: Tag = "h2",
  once = true,
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={cn("inline-block", className)}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom"
          initial="hidden"
          whileInView="show"
          viewport={{ once, amount: 0.2 }}
        >
          <motion.span
            className="inline-block pb-[0.16em] will-change-transform"
            variants={{ hidden: { y: "115%" }, show: { y: "0%" } }}
            transition={{ duration: 0.95, ease: EASE_OUT_EXPO, delay: delay + index * stagger }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  );
}
