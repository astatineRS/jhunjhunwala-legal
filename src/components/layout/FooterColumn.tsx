"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

type Column = {
  heading: string;
  links: readonly { label: string; href: string }[];
};

/**
 * A footer link column. On phones the heading is a plus/minus toggle and the
 * links collapse behind it, so the footer is a short list of headings instead
 * of three stacked blocks. From `lg` up the rows are forced open and the
 * toggle affordance disappears.
 */
export default function FooterColumn({ column, delay }: { column: Column; delay?: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={delay} className="border-b border-cream/12 last:border-b-0 lg:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-3.5 text-left lg:pointer-events-none lg:py-0"
      >
        <h3 className="font-sans text-[0.9375rem] font-semibold tracking-wide text-white">{column.heading}</h3>
        <span aria-hidden className="relative grid size-5 shrink-0 place-items-center text-cream/70 lg:hidden">
          <span className="absolute h-px w-3.5 bg-current" />
          <span
            className={cn(
              "absolute h-px w-3.5 bg-current transition-transform duration-400 ease-[var(--ease-out-expo)]",
              open ? "rotate-0" : "rotate-90",
            )}
          />
        </span>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-expo)] lg:grid-rows-[1fr]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <ul className="min-h-0 overflow-hidden space-y-2 lg:mt-5 lg:space-y-3">
          {column.links.map((link) => (
            <li key={link.href} className="first:pt-0.5 last:pb-4 lg:last:pb-0">
              <Link
                href={link.href}
                className="group inline-flex text-[0.875rem] text-cream/72 transition-colors hover:text-gold md:text-[0.9375rem]"
              >
                <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
