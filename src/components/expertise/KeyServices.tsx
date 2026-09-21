"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { KeyService } from "@/content/practice-areas";
import { EASE_OUT_EXPO, viewportOnce } from "@/lib/motion";
import { CheckCircle, ChevronDown } from "@/components/ui/icons";

/**
 * Two views of the same list: a grid of gold chips that expand in place to
 * reveal their description (the summary), and a fuller list beneath it (the
 * substance). Chips respond to hover, keyboard focus and tap.
 */
export default function KeyServices({ services }: { services: KeyService[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <ul className="grid items-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.li
              key={service.name}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: (index % 3) * 0.07 }}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex((current) => (current === index ? null : current))}
                onFocus={() => setOpenIndex(index)}
                onBlur={() => setOpenIndex((current) => (current === index ? null : current))}
                onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                className="flex w-full flex-col rounded-[1.5rem] border border-gold/35 bg-gold/10 px-6 py-4 text-left transition-colors duration-500 ease-[var(--ease-out-expo)] hover:border-gold/70 hover:bg-gold/20 focus-visible:border-gold/70 focus-visible:bg-gold/20"
              >
                <span className="flex items-center justify-between gap-4">
                  <span className="font-display text-[1.0625rem] font-semibold leading-snug text-ink">
                    {service.name}
                  </span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-gold-deep transition-transform duration-500 ease-[var(--ease-out-expo)] ${
                      isOpen ? "-rotate-180" : ""
                    }`}
                  />
                </span>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.span
                      key="description"
                      className="block overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.45, ease: EASE_OUT_EXPO }}
                    >
                      <span className="mt-3 block text-[0.875rem] leading-relaxed text-ink/70">
                        {service.description}
                      </span>
                    </motion.span>
                  ) : null}
                </AnimatePresence>
              </button>
            </motion.li>
          );
        })}
      </ul>

      <ul className="mt-16 grid gap-x-14 gap-y-10 border-t border-ink/10 pt-14 md:mt-20 md:grid-cols-2 md:pt-16">
        {services.map((service, index) => (
          <motion.li
            key={service.name}
            className="flex gap-4"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: (index % 2) * 0.09 }}
          >
            <CheckCircle className="mt-0.5 size-6 shrink-0 text-teal" />
            <div>
              <h3 className="font-display text-[1.1875rem] font-semibold leading-snug text-ink">
                {service.name}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/65">
                {service.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
