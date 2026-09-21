"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/content/home";
import { EASE_OUT_EXPO } from "@/lib/motion";
import SectionHeading from "@/components/ui/SectionHeading";
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
    if (out && (out + sentence).trim().length > limit) break;
    out += sentence;
  }
  return out.trim() || quote.slice(0, limit).trimEnd() + "…";
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
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
    <section className="bg-cream py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="What clients say"
          title="Testimonials"
          align="center"
          description="A practice built on referrals lives or dies by how the last matter was handled."
        />

        <div
          className="-mx-5 -my-6 overflow-hidden px-5 py-6 md:-mx-10 md:px-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <div className="relative mt-14 h-[30rem] sm:h-[28rem]">
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
                    x: `${offset * 74}%`,
                    scale: isActive ? 1 : 0.86,
                    opacity: isActive ? 1 : isNeighbour ? 0.4 : 0,
                  }}
                  transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
                  style={{ zIndex: 10 - Math.abs(offset) }}
                  className={cn(
                    "absolute inset-y-0 inset-x-0 mx-auto flex w-[88%] flex-col rounded-[var(--radius-card)] p-7 md:w-[58%] md:p-12",
                    isActive
                      ? "bg-gold text-white shadow-[var(--shadow-lift)]"
                      : "bg-sand-soft text-ink",
                    !isActive && "pointer-events-none",
                  )}
                >
                  <span
                    className={cn(
                      "font-display text-[2.75rem] leading-none",
                      isActive ? "text-white/45" : "text-ink/15",
                    )}
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <blockquote
                    className={cn(
                      "font-display text-[1.1875rem] leading-snug md:text-[1.4375rem]",
                      isActive ? "text-white" : "text-ink/70",
                    )}
                  >
                    {condense(item.quote)}
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-4 pt-8">
                    <span className="relative size-14 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={item.avatar}
                        alt=""
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </span>
                    <span>
                      <span
                        className={cn(
                          "block font-display text-[1.125rem] font-semibold",
                          isActive ? "text-white" : "text-ink",
                        )}
                      >
                        {item.name}
                      </span>
                      <span
                        className={cn(
                          "block text-[0.8125rem] uppercase tracking-[0.12em]",
                          isActive ? "text-white/75" : "text-ink/50",
                        )}
                      >
                        {item.role}
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="grid size-12 place-items-center rounded-full border border-ink/20 text-ink transition-all duration-500 ease-[var(--ease-out-expo)] hover:border-teal hover:bg-teal hover:text-white"
          >
            <ArrowLeft className="size-5" />
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
                  index === active ? "w-8 bg-gold" : "w-1.5 bg-ink/20 hover:bg-ink/40",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="grid size-12 place-items-center rounded-full border border-ink/20 text-ink transition-all duration-500 ease-[var(--ease-out-expo)] hover:border-teal hover:bg-teal hover:text-white"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
