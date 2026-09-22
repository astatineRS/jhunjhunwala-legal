"use client";

import { animate, motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { practiceAreas } from "@/content/practice-areas";
import { EASE_OUT_EXPO } from "@/lib/motion";
import PracticeCard from "@/components/cards/PracticeCard";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import { ArrowLeft, ArrowRight } from "@/components/ui/icons";

const GAP = 24;

/**
 * Draggable practice-area rail. Constraints are measured from the track rather
 * than assumed, so the rail stays correct across breakpoints and font loads:
 * a ResizeObserver re-measures and clamps the offset back into range.
 */
export default function PracticeCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const x = useMotionValue(0);
  const span = useMotionValue(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(
    (value: number) => {
      const max = span.get();
      setAtStart(value > -4);
      setAtEnd(max <= 0 || value < -max + 4);
    },
    [span],
  );

  useMotionValueEvent(x, "change", sync);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const measure = () => {
      const next = Math.max(0, track.scrollWidth - viewport.clientWidth);
      span.set(next);
      setMaxDrag(next);
      if (x.get() < -next) {
        animate(x, -next, { duration: 0.4, ease: EASE_OUT_EXPO });
      }
      sync(x.get());
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);
    return () => observer.disconnect();
  }, [span, sync, x]);

  const step = useCallback(
    (direction: 1 | -1) => {
      const card = trackRef.current?.firstElementChild as HTMLElement | null;
      const distance = (card?.offsetWidth ?? 320) + GAP;
      const target = Math.min(0, Math.max(-span.get(), x.get() - direction * distance));
      animate(x, target, { duration: 0.75, ease: EASE_OUT_EXPO });
    },
    [span, x],
  );

  const control =
    "grid size-11 place-items-center rounded-full bg-cream text-ink transition-all duration-500 ease-[var(--ease-out-expo)] hover:bg-gold hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-cream disabled:hover:text-ink";

  return (
    <section className="bg-stone py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-3 text-cream">What we handle</p>
            </Reveal>
            <SplitText as="h2" text="Expertise" className="display-2 text-cream" />
          </div>

          <Reveal delay={1} className="flex items-end gap-8 md:pb-2">
            <p className="max-w-sm text-[1.0625rem] leading-relaxed text-cream/85">
              Legal advice across a range of matters for individuals, businesses, and organisations.
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => step(-1)}
                disabled={atStart}
                aria-label="Previous practice areas"
                className={control}
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                disabled={atEnd}
                aria-label="Next practice areas"
                className={control}
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </Reveal>
        </div>

        <div ref={viewportRef} className="mt-12 overflow-hidden py-3">
          <motion.div
            ref={trackRef}
            drag="x"
            style={{ x }}
            dragConstraints={{ left: -maxDrag, right: 0 }}
            dragElastic={0.05}
            dragTransition={{ power: 0.22, timeConstant: 320, bounceStiffness: 320, bounceDamping: 42 }}
            onDragStart={() => {
              draggingRef.current = true;
            }}
            onDragEnd={() => {
              window.setTimeout(() => {
                draggingRef.current = false;
              }, 0);
            }}
            onClickCapture={(event) => {
              if (draggingRef.current) event.preventDefault();
            }}
            className="flex w-max cursor-grab gap-6 active:cursor-grabbing"
          >
            {practiceAreas.map((area) => (
              <PracticeCard
                key={area.slug}
                area={area}
                badge="gold"
                className="w-[78vw] max-w-[19rem] shrink-0 sm:w-[17rem] lg:w-[19rem]"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
