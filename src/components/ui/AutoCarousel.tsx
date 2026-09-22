"use client";

import { animate, motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type CarouselHandle = {
  next: () => void;
  prev: () => void;
};

/**
 * Infinite, self-advancing card rail.
 *
 * The item set is repeated until it covers the viewport twice over and the
 * track offset is wrapped modulo one set width, so the loop is seamless without
 * measuring individual cards. Idle drift and arrow steps write to the same
 * motion value, so they can never fight each other. Drift pauses on hover and
 * focus, and is off entirely under reduced-motion (arrows still work).
 */
export default function AutoCarousel({
  items,
  speed = 34,
  gap = 24,
  className,
  itemClassName,
  controls,
  ariaLabel,
}: {
  /** One entry per card. Repeated for the loop; clones are hidden from a11y. */
  items: ReactNode[];
  /** Idle drift in pixels per second. */
  speed?: number;
  /** Gap between cards, in pixels. */
  gap?: number;
  className?: string;
  itemClassName?: string;
  /** Imperative handle for external prev/next buttons. */
  controls?: RefObject<CarouselHandle | null>;
  ariaLabel?: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const steppingRef = useRef(false);
  const periodRef = useRef(0);

  const x = useMotionValue(0);
  const [copies, setCopies] = useState(2);
  const reduced = useReducedMotion();

  // Period = one set plus the gap separating it from the next copy. Enough
  // copies are rendered that the track always overhangs the viewport.
  useEffect(() => {
    const viewport = viewportRef.current;
    const set = setRef.current;
    if (!viewport || !set) return;

    const measure = () => {
      const width = set.offsetWidth;
      if (width <= 0) return;
      periodRef.current = width + gap;
      setCopies(Math.max(2, Math.ceil(viewport.clientWidth / width) + 1));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(set);
    return () => observer.disconnect();
  }, [gap, items.length]);

  /** Keep the offset inside (-period, 0] so a copy always covers the viewport. */
  const wrap = useCallback((value: number) => {
    const span = periodRef.current;
    if (span <= 0) return value;
    return -(((-value % span) + span) % span);
  }, []);

  useAnimationFrame((_, delta) => {
    if (reduced || pausedRef.current || steppingRef.current || periodRef.current <= 0) return;
    x.set(wrap(x.get() - (speed * delta) / 1000));
  });

  const step = useCallback(
    (direction: 1 | -1) => {
      const card = setRef.current?.firstElementChild as HTMLElement | null;
      const distance = (card?.offsetWidth ?? 300) + gap;
      steppingRef.current = true;
      animate(x, x.get() - direction * distance, {
        duration: 0.7,
        ease: EASE_OUT_EXPO,
        onComplete: () => {
          x.set(wrap(x.get()));
          steppingRef.current = false;
        },
      });
    },
    [gap, wrap, x],
  );

  useImperativeHandle(controls, () => ({ next: () => step(1), prev: () => step(-1) }), [step]);

  return (
    <div
      ref={viewportRef}
      className={cn("overflow-hidden", className)}
      onPointerEnter={() => {
        pausedRef.current = true;
      }}
      onPointerLeave={() => {
        pausedRef.current = false;
      }}
      onFocusCapture={() => {
        pausedRef.current = true;
      }}
      onBlurCapture={() => {
        pausedRef.current = false;
      }}
      aria-label={ariaLabel}
      role={ariaLabel ? "group" : undefined}
    >
      <motion.div style={{ x, gap }} className="flex w-max items-stretch">
        {Array.from({ length: copies }, (_, copy) => (
          <div
            key={copy}
            ref={copy === 0 ? setRef : undefined}
            className="flex shrink-0 items-stretch"
            style={{ gap }}
            aria-hidden={copy > 0 || undefined}
          >
            {items.map((item, index) => (
              <div key={index} className={cn("shrink-0", itemClassName)}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
