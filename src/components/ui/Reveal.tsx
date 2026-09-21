"use client";

import { motion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  variants?: Variants;
};

/** Scroll-triggered entrance for any block. Fires once. */
export default function Reveal({ children, className, delay = 0, as = "div", variants = fadeUp }: RevealProps) {
  const Component = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      custom={delay}
    >
      {children}
    </Component>
  );
}
