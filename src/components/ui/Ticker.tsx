"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotionSafe } from "@/lib/reduced-motion";
import { cn } from "@/lib/utils";

/**
 * Continuously drifting strip that the reader can also drag.
 *
 * The track is a real scroll container, so touch swipes, trackpad gestures and
 * the scroll wheel work natively; a pointer drag is wired up for mice. The
 * drift is written to `scrollLeft` every frame and wraps modulo one copy of the
 * children, so the loop is seamless and hand-scrolling composes with it instead
 * of fighting it. Unlike the CSS marquee this does not stop on hover — it only
 * yields while the reader is actually dragging.
 */
export default function Ticker({
  children,
  /** Drift in pixels per second. */
  speed = 40,
  className,
  ariaLabel,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
  ariaLabel?: string;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  /**
   * Sub-pixel drift accumulator. Reading back `scrollLeft` and adding to it
   * loses the fraction, and at 38px/s a frame is well under a pixel — the
   * strip would never move. The float is authoritative; the DOM follows it.
   */
  const offsetRef = useRef(0);
  const selfScrollRef = useRef(false);
  const reduced = useReducedMotionSafe();

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    /** A scroll we did not write came from the reader — take their position. */
    const onScroll = () => {
      if (selfScrollRef.current) selfScrollRef.current = false;
      else offsetRef.current = viewport.scrollLeft;
    };

    viewport.addEventListener("scroll", onScroll, { passive: true });
    if (reduced) return () => viewport.removeEventListener("scroll", onScroll);

    let frame = 0;
    let previous = performance.now();

    const tick = (now: number) => {
      const delta = now - previous;
      previous = now;
      frame = requestAnimationFrame(tick);

      const width = setRef.current?.offsetWidth ?? 0;
      if (width <= 0) return;

      offsetRef.current += (speed * delta) / 1000;
      // Wrap within one copy of the children so the loop is seamless.
      if (offsetRef.current >= width) offsetRef.current -= width;
      else if (offsetRef.current < 0) offsetRef.current += width;

      if (!draggingRef.current) {
        selfScrollRef.current = true;
        viewport.scrollLeft = offsetRef.current;
      }
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      viewport.removeEventListener("scroll", onScroll);
    };
  }, [reduced, speed]);

  /** Mouse drag. Touch and trackpad are already handled by the scroll container. */
  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const viewport = viewportRef.current;
    if (!viewport) return;

    draggingRef.current = true;
    const originX = event.clientX;
    const originScroll = viewport.scrollLeft;

    const move = (moveEvent: PointerEvent) => {
      viewport.scrollLeft = originScroll - (moveEvent.clientX - originX);
    };
    const end = () => {
      draggingRef.current = false;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
  };

  return (
    <div
      ref={viewportRef}
      onPointerDown={startDrag}
      aria-label={ariaLabel}
      role={ariaLabel ? "group" : undefined}
      className={cn("swipe-rail flex cursor-grab overflow-x-auto overscroll-x-contain active:cursor-grabbing", className)}
      style={{
        maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
      }}
    >
      <div ref={setRef} className="flex shrink-0 items-stretch">
        {children}
      </div>
      <div className="flex shrink-0 items-stretch" aria-hidden>
        {children}
      </div>
    </div>
  );
}
