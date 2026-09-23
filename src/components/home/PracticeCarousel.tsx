"use client";

import { useRef } from "react";
import { practiceAreas } from "@/content/practice-areas";
import PracticeCard from "@/components/cards/PracticeCard";
import SwipeRail, { type RailHandle } from "@/components/ui/SwipeRail";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import { ArrowLeft, ArrowRight } from "@/components/ui/icons";

/**
 * Practice-area rail. It holds still — the reader moves it, by swiping the
 * track or nudging it a card at a time with the arrows.
 */
export default function PracticeCarousel() {
  const controls = useRef<RailHandle>(null);

  const control =
    "grid size-11 place-items-center rounded-full bg-cream text-ink transition-all duration-500 ease-[var(--ease-out-expo)] hover:bg-gold hover:text-white";

  return (
    <section className="bg-stone py-12 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-3 text-cream">What we handle</p>
            </Reveal>
            <SplitText as="h2" text="Expertise" className="display-2 text-cream" />
          </div>

          <Reveal delay={1} className="flex items-end gap-4 md:gap-8 md:pb-2">
            <p className="max-w-sm text-[0.9375rem] leading-relaxed text-cream/85 md:text-[1.0625rem]">
              Legal advice across a range of matters for individuals, businesses, and organisations.
            </p>
            <div className="hidden shrink-0 items-center gap-3 sm:flex">
              <button
                type="button"
                onClick={() => controls.current?.prev()}
                aria-label="Previous practice areas"
                className={control}
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => controls.current?.next()}
                aria-label="Next practice areas"
                className={control}
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Bled past the page gutter so a card can scroll clear of both edges
            instead of being clipped inside the container. */}
        <SwipeRail
          controls={controls}
          className="-mx-5 mt-6 px-5 py-3 md:-mx-10 md:mt-12 md:px-10 xl:-mx-14 xl:px-14"
          ariaLabel="Practice areas"
          itemClassName="w-[78vw] max-w-[19rem] sm:w-[17rem] lg:w-[19rem]"
          items={practiceAreas.map((area) => (
            <PracticeCard key={area.slug} area={area} badge="gold" className="h-full w-full" />
          ))}
        />

        <Reveal delay={1} className="mt-7 flex justify-center md:mt-12">
          <ButtonLink href="/expertise" variant="light">
            View All
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
