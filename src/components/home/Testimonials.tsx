"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/content/home";
import { EASE_OUT_EXPO } from "@/lib/motion";
import SplitText from "@/components/ui/SplitText";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "@/components/ui/icons";

const COUNT = testimonials.length;
const HALF = COUNT / 2;

/** Shortest signed distance from `active`, so the rail wraps both ways. */
function relative(index: number, active: number) {
  let offset = index - active;
  if (offset > HALF) offset -= COUNT;
  if (offset < -HALF) offset += COUNT;
  return offset;
}

/**
 * Long testimonials are trimmed to whole sentences rather than clamped
 * mid-word, so a card never looks like it was cut off by accident.
 */
function condense(quote: string, limit = 300) {
  if (quote.length <= limit) return quote;
  const sentences = quote.match(/[^.!?]+[.!?]+\s*/g) ?? [quote];
  let out = "";
  for (const sentence of sentences) {
    if ((out + sentence).length > limit && out) break;
    out += sentence;
  }
  return out.trim() || quote.slice(0, limit).trimEnd() + "…";
}

export default function Testimonials() {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  const go = useCallback((direction: 1 | -1) => {
    setActive((current) => (current + direction + COUNT) % COUNT);
  }, []);

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => setActive((current) => (current + 1) % COUNT), 6500);
    return () => window.clearInterval(id);
  }, [paused, reduced]);

  return (
    <section className="bg-gold py-12 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <SplitText as="h2" text="What Our Clients Say" className="display-2 text-white" />
        </div>

        <div
          className="-mx-5 -my-6 overflow-hidden px-5 py-6 md:-mx-10 md:px-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <div className="relative mt-6 md:mt-12 h-[21rem] sm:h-[19rem]">
            {testimonials.map((item, index) => {
              const offset = relative(index, active);
              const isActive = offset === 0;
              const isNeighbour = Math.abs(offset) === 1;

              return (
                <motion.figure
                  key={item.name}
                  aria-hidden={!isActive}
                  initial={false}
                  animate={{
                    x: `${offset * 64}%`,
                    scale: isActive ? 1 : 0.92,
                    opacity: isActive ? 1 : isNeighbour ? 1 : 0,
                  }}
                  transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
                  style={{ zIndex: 10 - Math.abs(offset) }}
                  className={cn(
                    "absolute inset-x-0 inset-y-0 mx-auto flex w-[92%] flex-col rounded-[var(--radius-card)] p-5 md:w-[54%] md:p-10",
                    isActive
                      ? "bg-cream shadow-[var(--shadow-lift)]"
                      : "pointer-events-none bg-white/25",
                  )}
                >
                  <figcaption className={cn(isActive && "text-center")}>
                    <span>
                      <span
                        className={cn(
                          "block font-display text-[1.125rem] font-semibold leading-tight md:text-[1.375rem]",
                          isActive ? "text-ink" : "text-ink/70",
                        )}
                      >
                        {item.name}
                      </span>
                      <span
                        className={cn(
                          "mt-1 block text-[0.875rem] leading-tight md:text-[0.9375rem]",
                          isActive ? "text-ink/65" : "text-ink/50",
                        )}
                      >
                        {item.role}
                      </span>
                    </span>
                  </figcaption>

                  <blockquote
                    className={cn(
                      "mt-4 text-[0.875rem] leading-relaxed md:mt-6 md:text-[1rem]",
                      isActive ? "text-center text-ink/80" : "text-ink/55",
                    )}
                  >
                    &ldquo;{condense(item.quote)}&rdquo;
                  </blockquote>
                </motion.figure>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 md:mt-10 md:gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="grid size-11 place-items-center rounded-full border border-white/50 text-white transition-all duration-500 ease-[var(--ease-out-expo)] hover:border-cream hover:bg-cream hover:text-gold-deep"
          >
            <ArrowLeft className="size-4" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show testimonial from ${item.name}`}
                aria-current={index === active}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500 ease-[var(--ease-out-expo)]",
                  index === active ? "w-8 bg-cream" : "w-1.5 bg-white/40 hover:bg-white/70",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="grid size-11 place-items-center rounded-full border border-white/50 text-white transition-all duration-500 ease-[var(--ease-out-expo)] hover:border-cream hover:bg-cream hover:text-gold-deep"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
