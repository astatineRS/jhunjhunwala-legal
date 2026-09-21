"use client";

import Image from "next/image";
import Link from "next/link";
import { animate, motion, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { practiceAreas } from "@/content/practice-areas";
import { EASE_OUT_EXPO } from "@/lib/motion";
import ArrowBadge from "@/components/ui/ArrowBadge";
import SectionHeading from "@/components/ui/SectionHeading";
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

  const fill = useTransform(x, (value) => {
    const max = span.get();
    return max > 0 ? Math.min(1, Math.max(0, -value / max)) : 0;
  });

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

  return (
    <section className="bg-slate-green py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we handle"
          title="Areas Of Practice"
          tone="light"
          aside={
            <p className="text-[1.0625rem] leading-relaxed text-cream/75">
              Eight practices, one working method. Whether the question is a shareholder
              arrangement, a contract under strain or a dispute already in motion, the advice starts
              from where you actually stand.
            </p>
          }
        />

        <div ref={viewportRef} className="mt-14 overflow-hidden py-3">
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
            className="flex w-max cursor-grab gap-6 active:cursor-grabbing"
          >
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/expertise/${area.slug}`}
                draggable={false}
                onClick={(event) => {
                  if (draggingRef.current) event.preventDefault();
                }}
                className="group flex w-[78vw] max-w-[21rem] shrink-0 flex-col overflow-hidden rounded-[var(--radius-card)] bg-cream transition-all duration-600 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)] sm:w-[19rem] lg:w-[21rem]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={area.image}
                    alt=""
                    fill
                    draggable={false}
                    sizes="(max-width: 640px) 78vw, 21rem"
                    className="object-cover transition-transform duration-[1.1s] ease-[var(--ease-out-expo)] group-hover:scale-[1.07]"
                  />
                  <span className="absolute right-4 top-4">
                    <ArrowBadge tone="gold" size={34} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[1.3125rem] font-semibold leading-snug text-ink transition-colors duration-500 group-hover:text-teal">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/65">{area.teaser}</p>
                  <span className="mt-auto pt-6 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-teal">
                    {area.journey}
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 flex items-center gap-8">
          <div className="h-px flex-1 bg-cream/15" aria-hidden>
            <motion.div style={{ scaleX: fill }} className="h-px origin-left bg-gold" />
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => step(-1)}
              disabled={atStart}
              aria-label="Previous practice areas"
              className="grid size-12 place-items-center rounded-full border border-cream/30 text-cream transition-all duration-500 ease-[var(--ease-out-expo)] hover:border-cream hover:bg-cream hover:text-slate-green disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-cream"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              disabled={atEnd}
              aria-label="Next practice areas"
              className="grid size-12 place-items-center rounded-full border border-cream/30 text-cream transition-all duration-500 ease-[var(--ease-out-expo)] hover:border-cream hover:bg-cream hover:text-slate-green disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-cream"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
