"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type TocEntry = { id: string; title: string };

/** Fraction of the viewport height treated as the reading line. */
const READING_LINE = 0.25;

/**
 * Sticky contents rail for the policy documents. The active entry is derived
 * from an IntersectionObserver over the section bodies — not the headings — so
 * that whatever the reader is looking at always covers the reading line and the
 * rail can never go stale after a jump, a restored scroll position or a hash
 * link. It costs nothing while the reader is idle.
 */
export default function PolicyToc({ entries }: { entries: TocEntry[] }) {
  const [active, setActive] = useState(entries[0]?.id ?? "");

  useEffect(() => {
    const nodes = entries
      .map((entry) => document.querySelector<HTMLElement>(`[data-toc-section="${entry.id}"]`))
      .filter((node): node is HTMLElement => node !== null);
    if (nodes.length === 0) return;

    const order: Record<string, number> = {};
    entries.forEach((entry, index) => {
      order[entry.id] = index;
    });

    /** Last section whose top has passed the reading line. */
    const fromGeometry = () => {
      const line = window.innerHeight * READING_LINE;
      let current = entries[0]?.id ?? "";
      for (const node of nodes) {
        const id = node.dataset.tocSection;
        if (id && node.getBoundingClientRect().top <= line) current = id;
      }
      return current;
    };

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (records) => {
        for (const record of records) {
          const id = record.target instanceof HTMLElement ? record.target.dataset.tocSection : undefined;
          if (!id) continue;
          if (record.isIntersecting) visible.add(id);
          else visible.delete(id);
        }

        if (visible.size === 0) {
          // Above the first section or below the last — read the page instead.
          setActive(fromGeometry());
          return;
        }

        // Topmost section crossing the reading line wins.
        let best = "";
        let bestIndex = Number.POSITIVE_INFINITY;
        for (const id of visible) {
          const index = order[id] ?? Number.POSITIVE_INFINITY;
          if (index < bestIndex) {
            bestIndex = index;
            best = id;
          }
        }
        setActive(best);
      },
      { rootMargin: `-${READING_LINE * 100}% 0px -${(1 - READING_LINE) * 100 - 2}% 0px`, threshold: 0 },
    );

    for (const node of nodes) observer.observe(node);

    // The observer's first callback lands before layout has settled on a
    // restored scroll position, so seed the state from geometry as well.
    const frame = requestAnimationFrame(() => setActive(fromGeometry()));

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [entries]);

  const jump = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();

    const headerHeight =
      Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--header-h"),
      ) || 88;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 24;

    window.scrollTo({ top, behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
    setActive(id);
  };

  return (
    <nav aria-label="On this page" className="text-[0.9375rem]">
      <p className="eyebrow mb-4 text-[0.6875rem] text-ink/40">On This Page</p>
      <ol className="flex flex-col">
        {entries.map((entry) => {
          const isActive = entry.id === active;
          return (
            <li key={entry.id} className="relative">
              <a
                href={`#${entry.id}`}
                onClick={jump(entry.id)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "block border-l border-ink/12 py-2 pl-4 leading-snug transition-colors duration-400 ease-[var(--ease-out-expo)]",
                  isActive ? "text-ink" : "text-ink/50 hover:text-ink/80",
                )}
              >
                {entry.title}
              </a>
              {isActive ? (
                <motion.span
                  layoutId="policy-toc-marker"
                  aria-hidden
                  transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                  className="absolute left-0 top-0 h-full w-[2px] bg-gold"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
