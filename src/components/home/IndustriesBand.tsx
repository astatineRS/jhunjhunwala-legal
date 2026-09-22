import Image from "next/image";
import { industries } from "@/content/industries";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/** Sector coverage, three-up on desktop. The first six industries lead. */
export default function IndustriesBand() {
  const featured = industries.slice(0, 6);

  return (
    <section className="bg-cream pb-20 md:pb-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Industries we serve"
          title="Legal Insight Across Industries"
          align="center"
          description="We understand the legal and commercial considerations that shape businesses across sectors."
        />

        <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((industry, index) => (
            <Reveal as="li" key={industry.name} delay={index % 3}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)]">
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-center font-display text-[1.5rem] font-semibold leading-tight text-ink">
                {industry.name}
              </h3>
              <p className="mx-auto mt-3 max-w-[22rem] text-center text-[0.9375rem] leading-relaxed text-ink/60">
                {industry.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
