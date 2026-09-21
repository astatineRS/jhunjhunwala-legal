"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Insight } from "@/content/insights";
import InsightCard from "@/components/cards/InsightCard";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";

const ALL = "All";

/**
 * Category filter + animated grid. The grid keeps its own `layout` animation so
 * cards glide into their new positions instead of snapping when a filter changes.
 */
export default function InsightLibrary({ insights }: { insights: Insight[] }) {
  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(insights.map((insight) => insight.category)))],
    [insights],
  );
  const [active, setActive] = useState<string>(ALL);
  const reduce = useReducedMotion();

  const visible = useMemo(
    () => (active === ALL ? insights : insights.filter((insight) => insight.category === active)),
    [active, insights],
  );

  return (
    <section className="bg-sand-soft/45 py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow text-teal">The archive</p>
            </Reveal>
            <SplitText
              as="h2"
              text="Perspectives, briefings and practical notes"
              className="display-3 mt-4 max-w-2xl capitalize text-ink"
            />
          </div>
          <Reveal delay={1}>
            <p className="max-w-sm text-[1.0625rem] leading-relaxed text-ink/65">
              Filter by practice to find what is relevant to the matter in front of you.
            </p>
          </Reveal>
        </div>

        <Reveal delay={2} className="mt-10">
          <div
            role="group"
            aria-label="Filter articles by category"
            className="flex flex-wrap gap-2.5"
          >
            {categories.map((category) => {
              const selected = category === active;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  aria-pressed={selected}
                  className={cn(
                    "relative isolate rounded-full border px-5 py-2 text-[0.875rem] font-medium transition-colors duration-500 ease-[var(--ease-out-expo)]",
                    selected
                      ? "border-teal text-white"
                      : "border-ink/15 text-ink/65 hover:border-ink/40 hover:text-ink",
                  )}
                >
                  {selected ? (
                    <motion.span
                      layoutId="insight-filter-pill"
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-full bg-teal"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 340, damping: 34, mass: 0.7 }
                      }
                    />
                  ) : null}
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        <p aria-live="polite" className="mt-8 text-[0.875rem] text-ink/50">
          {visible.length === 0
            ? "No articles in this category yet."
            : `Showing ${visible.length} of ${insights.length} article${insights.length === 1 ? "" : "s"}${
                active === ALL ? "" : ` in ${active}`
              }.`}
        </p>

        <motion.div
          layout={!reduce}
          className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((insight) => (
              <motion.div
                key={insight.slug}
                layout={!reduce}
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -12 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { duration: 0.55, ease: EASE_OUT_EXPO, layout: { duration: 0.6, ease: EASE_OUT_EXPO } }
                }
              >
                <InsightCard insight={insight} tone="white" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 ? (
          <div className="mt-4 rounded-[var(--radius-card)] border border-dashed border-ink/15 bg-white/70 px-8 py-14 text-center">
            <p className="font-display text-[1.375rem] text-ink">Nothing filed here yet</p>
            <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink/60">
              We publish as matters raise questions worth answering. In the meantime, browse every
              article or write to us with the question you actually have.
            </p>
            <button
              type="button"
              onClick={() => setActive(ALL)}
              className="mt-6 rounded-full border border-ink/15 px-5 py-2 text-[0.875rem] font-medium text-ink transition-colors duration-500 ease-[var(--ease-out-expo)] hover:border-ink/40 hover:bg-ink/5"
            >
              Show all articles
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
