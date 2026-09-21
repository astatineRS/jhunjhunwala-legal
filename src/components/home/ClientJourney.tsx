"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { journey } from "@/content/home";
import { practiceAreas } from "@/content/practice-areas";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  ClockIcon,
  EyeIcon,
  MailIcon,
  PinIcon,
  ShareIcon,
} from "@/components/ui/icons";

const stepIcons = [PinIcon, ShareIcon, MailIcon, ClockIcon, ArrowUpRight, EyeIcon, ArrowRight, CheckCircle];

const NODE_COUNT = journey.length;
const VIEW_W = 800;
const VIEW_H = 300;
const HIGH = 92;
const LOW = 208;

const points = journey.map((_, index) => ({
  x: ((index + 0.5) * VIEW_W) / NODE_COUNT,
  y: index % 2 === 0 ? HIGH : LOW,
}));

/** Smooth S-curve through the alternating nodes. */
const path = points.reduce((acc, point, index) => {
  if (index === 0) return `M ${point.x} ${point.y}`;
  const previous = points[index - 1];
  const handle = (point.x - previous.x) / 2;
  return `${acc} C ${previous.x + handle} ${previous.y}, ${point.x - handle} ${point.y}, ${point.x} ${point.y}`;
}, "");

const steps = journey.map((step, index) => ({
  step,
  Icon: stepIcons[index],
  area: practiceAreas.find((item) => item.journey === step) ?? practiceAreas[index],
}));

/**
 * The client journey, from incorporation to exit. The dashed rail is the track;
 * a solid line draws over it as the section scrolls, using `pathLength` so the
 * reveal follows the curve rather than a bounding box.
 */
export default function ClientJourney() {
  const railRef = useRef<HTMLDivElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);

  const rail = useScroll({ target: railRef, offset: ["start 80%", "end 60%"] });
  const column = useScroll({ target: columnRef, offset: ["start 85%", "end 70%"] });
  const pathLength = useSpring(rail.scrollYProgress, { stiffness: 110, damping: 30, restDelta: 0.001 });
  const scaleY = useSpring(column.scrollYProgress, { stiffness: 110, damping: 30, restDelta: 0.001 });

  return (
    <section className="bg-cream pb-20 md:pb-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Where we come in"
          title="Your Client Journey"
          align="center"
          description="Most businesses meet the same eight questions, in roughly this order. Each stage maps to a practice — start wherever you are."
        />

        {/* Zig-zag rail — wide screens only, where the labels have room to breathe. */}
        <div ref={railRef} className="relative mt-16 hidden h-[26rem] lg:block">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <path
              d={path}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeDasharray="7 9"
              vectorEffect="non-scaling-stroke"
              className="text-ink/25"
            />
            <motion.path
              d={path}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className="text-teal"
              style={{ pathLength }}
            />
          </svg>

          <ol className="absolute inset-0">
            {steps.map(({ step, Icon, area }, index) => (
              <li
                key={step}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${((index + 0.5) / NODE_COUNT) * 100}%`,
                  top: `${(points[index].y / VIEW_H) * 100}%`,
                }}
              >
                <Reveal delay={index}>
                  <Link
                    href={`/expertise/${area.slug}`}
                    className="group flex w-[7.5rem] flex-col items-center text-center"
                  >
                    <span className="grid size-16 place-items-center rounded-full bg-teal text-cream ring-8 ring-cream transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:scale-110 group-hover:bg-gold">
                      <Icon className="size-6" />
                    </span>
                    <span className="mt-4 font-display text-[1.125rem] font-semibold leading-tight text-ink transition-colors duration-500 group-hover:text-teal">
                      {step}
                    </span>
                    <span className="mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-ink/45">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* Stacked rail for phones and tablets. */}
        <div ref={columnRef} className="relative mt-12 lg:hidden">
          <div
            className="absolute bottom-8 left-7 top-8 w-px border-l border-dashed border-ink/25"
            aria-hidden
          >
            <motion.div style={{ scaleY }} className="-ml-px h-full w-px origin-top bg-teal" />
          </div>

          <ol className="flex flex-col gap-8">
            {steps.map(({ step, Icon, area }, index) => (
              <Reveal as="li" key={step} delay={index} className="relative">
                <Link href={`/expertise/${area.slug}`} className="group flex items-center gap-5">
                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-teal text-cream ring-8 ring-cream transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:bg-gold">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[1.25rem] font-semibold text-ink transition-colors duration-500 group-hover:text-teal">
                      {step}
                    </span>
                    <span className="block truncate text-[0.875rem] text-ink/55">{area.title}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
