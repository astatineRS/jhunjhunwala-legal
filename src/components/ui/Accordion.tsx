"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "./icons";

export type AccordionItem = { question: string; answer: string };

type Tone = "sand" | "stone";

type Palette = {
  open: string;
  closed: string;
  index: string;
  question: string;
  chevron: string;
  answer: string;
};

const tones: Record<Tone, Palette> = {
  sand: {
    open: "border-gold/45 bg-sand-soft",
    closed: "border-transparent bg-sand-soft/70 hover:bg-sand-soft",
    index: "text-gold-deep",
    question: "text-ink",
    chevron: "bg-teal text-white",
    answer: "text-ink/70",
  },
  stone: {
    open: "border-transparent bg-stone",
    closed: "border-transparent bg-stone/85 hover:bg-stone",
    index: "text-cream/80",
    question: "text-white",
    chevron: "bg-cream text-ink",
    answer: "text-cream/85",
  },
};

export default function Accordion({
  items,
  className,
  tone = "sand",
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  className?: string;
  tone?: Tone;
  defaultOpen?: number | null;
}) {
  const palette = tones[tone];
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={cn("flex flex-col gap-2 md:gap-3", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <motion.div
            key={item.question}
            layout
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            className={cn(
              "overflow-hidden rounded-[var(--radius-card)] border transition-colors duration-500",
              isOpen ? palette.open : palette.closed,
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-3 px-4 py-4 text-left md:gap-4 md:px-7 md:py-5"
            >
              <span className={cn("font-display text-sm tabular-nums md:text-base", palette.index)}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={cn("display-3 flex-1 text-[1.0625rem] leading-snug md:text-[1.25rem]", palette.question)}>
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                className={cn("grid size-9 shrink-0 place-items-center rounded-full", palette.chevron)}
              >
                <ChevronDown className="size-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                >
                  <p className={cn("px-4 pb-5 pl-[2.75rem] text-[0.9375rem] leading-relaxed md:px-7 md:pb-6 md:pl-[4.5rem] md:text-[0.975rem]", palette.answer)}>
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
