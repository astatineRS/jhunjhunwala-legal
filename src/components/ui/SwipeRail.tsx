"use client";

import { useCallback, useImperativeHandle, useRef, type ReactNode, type RefObject } from "react";
import { cn } from "@/lib/utils";

export type RailHandle = {
  next: () => void;
  prev: () => void;
};

/**
 * Static card rail: it never moves on its own. The track is a native
 * scroll container with snap points, so a thumb drag works exactly as a
 * reader expects on a phone, and the optional arrows scroll it a card at a
 * time on pointer devices. Edge padding is bled off the container so the
 * first card starts flush with the page gutter while the last one can still
 * scroll clear of the right edge.
 */
export default function SwipeRail({
  items,
  gap = 24,
  className,
  itemClassName,
  controls,
  ariaLabel,
}: {
  items: ReactNode[];
  /** Gap between cards, in pixels. */
  gap?: number;
  className?: string;
  itemClassName?: string;
  /** Imperative handle for external prev/next buttons. */
  controls?: RefObject<RailHandle | null>;
  ariaLabel?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const step = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const distance = card ? card.offsetWidth + gap : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  }, [gap]);

  useImperativeHandle(controls, () => ({ next: () => step(1), prev: () => step(-1) }), [step]);

  return (
    <div
      ref={trackRef}
      className={cn("swipe-rail flex snap-x snap-mandatory items-stretch overflow-x-auto overscroll-x-contain", className)}
      style={{ gap }}
      aria-label={ariaLabel}
      role={ariaLabel ? "group" : undefined}
      tabIndex={0}
    >
      {items.map((item, index) => (
        <div key={index} className={cn("shrink-0 snap-start", itemClassName)}>
          {item}
        </div>
      ))}
    </div>
  );
}
