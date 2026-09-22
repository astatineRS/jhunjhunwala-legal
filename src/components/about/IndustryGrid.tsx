import Image from "next/image";
import { industries } from "@/content/industries";
import Reveal from "@/components/ui/Reveal";

/** Twelve sector cards on the teal band — cream tiles, staggered in by row. */
export default function IndustryGrid() {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
      {industries.map((industry, index) => (
        <Reveal as="li" key={industry.name} delay={index % 4} className="h-full">
          <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-cream transition-transform duration-600 ease-[var(--ease-out-expo)] hover:-translate-y-1.5">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={industry.image}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1.1s] ease-[var(--ease-out-expo)] group-hover:scale-[1.07]"
              />
              <span className="absolute inset-0 bg-teal-deep/25 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
            </div>
            <div className="flex flex-1 flex-col gap-1.5 px-3.5 py-3.5 sm:gap-2 sm:px-5 sm:py-5">
              <h3 className="font-display text-[1rem] sm:text-[1.25rem] font-semibold leading-snug text-ink">
                {industry.name}
              </h3>
              <p className="text-[0.8125rem] sm:text-[0.9375rem] leading-relaxed text-ink/65">{industry.description}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
