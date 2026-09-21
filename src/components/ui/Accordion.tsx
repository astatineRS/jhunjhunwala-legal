"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "./icons";

export type AccordionItem = { question: string; answer: string };

export default function Accordion({
  items,
  className,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <motion.div
            key={item.question}
            layout
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            className={cn(
              "overflow-hidden rounded-[var(--radius-card)] border transition-colors duration-500",
              isOpen ? "border-gold/45 bg-sand-soft" : "border-transparent bg-sand-soft/70 hover:bg-sand-soft",
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 px-5 py-5 text-left md:px-7"
            >
              <span className="font-display text-sm text-gold-deep tabular-nums md:text-base">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="display-3 flex-1 text-[1.0625rem] leading-snug text-ink md:text-[1.25rem]">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                className="grid size-9 shrink-0 place-items-center rounded-full bg-teal text-white"
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
                  <p className="px-5 pb-6 pl-[3.25rem] text-[0.975rem] leading-relaxed text-ink/70 md:px-7 md:pl-[4.5rem]">
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
