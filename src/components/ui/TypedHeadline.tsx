"use client";

import { useEffect, useState } from "react";
import { useReducedMotionSafe } from "@/lib/reduced-motion";
import { cn } from "@/lib/utils";

type Phase = "hold" | "erase" | "write";

/**
 * Headline that writes itself out one character at a time, rests, erases, and
 * moves to the next line.
 *
 * The first render is the complete first line, not an empty box: the server has
 * no timers, so starting mid-animation would be a hydration mismatch, and a
 * crawler (or a reader on a slow hydrate) would see a headless hero. The cycle
 * therefore begins by erasing what is already on screen.
 *
 * Each character is its own span with a one-shot `ink-char` animation, so only
 * the character that just landed animates — React keeps the earlier spans
 * mounted and their animations never re-run. The caret is a slanted nib rather
 * than a terminal block, which is what makes the line read as written rather
 * than printed.
 */
export default function TypedHeadline({
  lines,
  className,
  /** Milliseconds per character while writing. */
  writeMs = 52,
  /** Milliseconds per character while erasing; erasing should feel quicker. */
  eraseMs = 24,
  /** How long a finished line rests before it is erased. */
  holdMs = 2400,
}: {
  lines: string[];
  className?: string;
  writeMs?: number;
  eraseMs?: number;
  holdMs?: number;
}) {
  const reduced = useReducedMotionSafe();
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(lines[0].length);
  const [phase, setPhase] = useState<Phase>("hold");

  useEffect(() => {
    if (reduced) return;

    const line = lines[index];
    let delay: number;
    let step: () => void;

    if (phase === "hold") {
      delay = holdMs;
      step = () => setPhase("erase");
    } else if (phase === "erase") {
      if (count > 0) {
        delay = eraseMs;
        step = () => setCount((c) => c - 1);
      } else {
        // A beat with an empty line, so the next one starts on a clean page.
        delay = 260;
        step = () => {
          setIndex((i) => (i + 1) % lines.length);
          setPhase("write");
        };
      }
    } else if (count < line.length) {
      delay = writeMs;
      step = () => setCount((c) => c + 1);
    } else {
      delay = 0;
      step = () => setPhase("hold");
    }

    const timer = window.setTimeout(step, delay);
    return () => window.clearTimeout(timer);
  }, [count, eraseMs, holdMs, index, lines, phase, reduced, writeMs]);

  // Reduced motion gets the headline outright, with no caret and no cycle.
  const visible = reduced ? lines[0] : lines[index].slice(0, count);
  // The tallest line holds the box open, so the sub-head and buttons below do
  // not jump every time a shorter line is written.
  const tallest = lines.reduce((a, b) => (b.length > a.length ? b : a));

  return (
    <span className={cn("relative block", className)}>
      <span aria-hidden className="invisible block">
        {tallest}
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <span>
          <span className="sr-only">{lines[index]}</span>
          <span aria-hidden className="whitespace-pre-wrap">
            {visible.split("").map((char, i) => (
              <span key={`${index}-${i}`} className="ink-char">
                {char}
              </span>
            ))}
            {reduced ? null : <span className="ink-caret" />}
          </span>
        </span>
      </span>
    </span>
  );
}
