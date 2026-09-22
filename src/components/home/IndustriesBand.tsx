"use client";

import Image from "next/image";
import { industries } from "@/content/industries";
import AutoCarousel from "@/components/ui/AutoCarousel";
import SectionHeading from "@/components/ui/SectionHeading";

/** Sector coverage as a self-advancing rail. */
export default function IndustriesBand() {
  return (
    <section className="bg-cream pb-12 md:pb-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Industries we serve"
          title="Legal Insight Across Industries"
          align="center"
          description="We understand the legal and commercial considerations that shape businesses across sectors."
        />
      </div>

      <AutoCarousel
        speed={24}
        gap={32}
        className="container-page mt-6 md:mt-14"
        ariaLabel="Industries we serve"
        itemClassName="w-[68vw] sm:w-[22rem] lg:w-[24rem]"
        items={industries.map((industry) => (
          <article key={industry.name}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] md:aspect-[16/10]">
              <Image
                src={industry.image}
                alt=""
                fill
                sizes="(max-width: 640px) 68vw, 24rem"
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 text-center font-display text-[1.25rem] font-semibold leading-tight text-ink md:mt-6 md:text-[1.5rem]">
              {industry.name}
            </h3>
            <p className="mx-auto mt-3 max-w-[22rem] text-center text-[0.875rem] leading-relaxed text-ink/60 md:text-[0.9375rem]">
              {industry.description}
            </p>
          </article>
        ))}
      />
    </section>
  );
}
