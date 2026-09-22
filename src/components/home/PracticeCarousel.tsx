"use client";

import { useRef } from "react";
import { practiceAreas } from "@/content/practice-areas";
import PracticeCard from "@/components/cards/PracticeCard";
import AutoCarousel, { type CarouselHandle } from "@/components/ui/AutoCarousel";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import { ArrowLeft, ArrowRight } from "@/components/ui/icons";

/**
 * Practice-area rail. Drifts on its own and loops endlessly; the arrows nudge
 * it a card at a time and hovering holds it still so a card can be read.
 */
export default function PracticeCarousel() {
  const controls = useRef<CarouselHandle>(null);

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
            <div className="flex shrink-0 items-center gap-3">
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

        <AutoCarousel
          controls={controls}
          speed={38}
          className="mt-6 md:mt-12 py-3"
          ariaLabel="Practice areas"
          itemClassName="w-[78vw] max-w-[19rem] sm:w-[17rem] lg:w-[19rem]"
          items={practiceAreas.map((area) => (
            <PracticeCard key={area.slug} area={area} badge="gold" className="h-full w-full" />
          ))}
        />
      </div>
    </section>
  );
}
