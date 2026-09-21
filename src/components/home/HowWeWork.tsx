"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { process } from "@/content/home";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";

/**
 * The four working steps. A progress rail fills as the panel moves through the
 * viewport, so the list reads as a sequence rather than four separate claims.
 */
export default function HowWeWork() {
  const panelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start 85%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section className="bg-cream pb-20 md:pb-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow mb-3 text-teal">The working method</p>
          </Reveal>
          <SplitText as="h2" text="How We Work" className="display-2 text-ink" />
          <Reveal delay={1}>
            <p className="mt-5 text-balance-pretty text-[1.0625rem] leading-relaxed text-ink/65">
              A consistent sequence, whatever the matter. It keeps the advice grounded in facts and
              keeps you in control of every decision that follows.
            </p>
          </Reveal>
        </div>

        <div
          ref={panelRef}
          className="relative mt-14 rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)] md:p-12"
        >
          <div
            className="absolute bottom-[calc(1.5rem+1.75rem)] left-[calc(1.5rem+1.75rem)] top-[calc(1.5rem+1.75rem)] w-px bg-ink/10 md:bottom-[calc(3rem+1.75rem)] md:left-[calc(3rem+1.75rem)] md:top-[calc(3rem+1.75rem)]"
            aria-hidden
          >
            <motion.div style={{ scaleY }} className="h-full w-px origin-top bg-teal" />
          </div>

          <ol className="relative flex flex-col gap-10 md:gap-12">
            {process.map((item, index) => (
              <Reveal as="li" key={item.step} delay={index} className="flex items-start gap-6 md:gap-9">
                <span className="grid size-14 shrink-0 place-items-center rounded-full border border-teal/25 bg-white font-display text-[1.125rem] font-semibold text-teal tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="pt-2">
                  <h3 className="font-display text-[1.5rem] font-semibold text-ink md:text-[1.75rem]">
                    {item.step}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[1rem] leading-relaxed text-ink/65">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
