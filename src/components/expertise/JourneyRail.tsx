"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { journey } from "@/content/home";
import { practiceAreas, type PracticeArea } from "@/content/practice-areas";
import { EASE_OUT_EXPO, viewportOnce } from "@/lib/motion";
import { ArrowRight } from "@/components/ui/icons";

type Step = { label: string; area: PracticeArea };

/** The eight journey stages, each resolved to the practice area that owns it. */
const steps: Step[] = journey
  .map((label) => ({ label, area: practiceAreas.find((area) => area.journey === label) }))
  .filter((step): step is Step => Boolean(step.area));

/**
 * Horizontal numbered rail on desktop, vertical list on mobile. Each stage
 * links to the practice area that handles it.
 *
 * The connecting rule is drawn between the *centres* of the first and last
 * markers — with eight equal columns that is 1/16th (6.25%) in from each edge.
 */
export default function JourneyRail() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      {/* Desktop rail */}
      <div className="relative hidden lg:block">
        <div className="pointer-events-none absolute inset-x-[6.25%] top-6 h-px bg-ink/12" aria-hidden />
        <motion.div
          className="pointer-events-none absolute inset-x-[6.25%] top-6 h-px origin-left bg-gold/70"
          aria-hidden
          initial={{ scaleX: reduceMotion ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: reduceMotion ? 0 : 1.6, ease: EASE_OUT_EXPO }}
        />

        <ol className="relative grid grid-cols-8">
          {steps.map((step, index) => (
            <motion.li
              key={step.label}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.15 + index * 0.08 }}
            >
              <Link
                href={`/expertise/${step.area.slug}`}
                className="group flex flex-col items-center px-2 text-center"
              >
                <span className="grid size-12 place-items-center rounded-full border border-ink/12 bg-white font-display text-[0.9375rem] font-semibold text-teal transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-5 font-display text-[1.0625rem] font-semibold leading-snug text-ink transition-colors duration-500 ease-[var(--ease-out-expo)] group-hover:text-teal">
                  {step.label}
                </span>
                <span className="mt-2 text-[0.8125rem] leading-relaxed text-ink/55">{step.area.short}</span>
              </Link>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* Mobile / tablet list */}
      <ol className="relative lg:hidden">
        <div className="absolute bottom-6 left-6 top-6 w-px bg-ink/12" aria-hidden />
        {steps.map((step, index) => (
          <motion.li
            key={step.label}
            className="relative"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
          >
            <Link
              href={`/expertise/${step.area.slug}`}
              className="group flex items-center gap-5 py-3.5"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-ink/12 bg-white font-display text-[0.9375rem] font-semibold text-teal transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-[1.0625rem] font-semibold leading-snug text-ink transition-colors duration-500 ease-[var(--ease-out-expo)] group-hover:text-teal">
                  {step.label}
                </span>
                <span className="mt-0.5 block text-[0.8125rem] leading-relaxed text-ink/55">
                  {step.area.short}
                </span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-ink/30 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1 group-hover:text-teal" />
            </Link>
          </motion.li>
        ))}
      </ol>
    </>
  );
}
