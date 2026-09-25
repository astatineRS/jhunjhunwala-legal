import Image from "next/image";
import { industries } from "@/content/home";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Industries() {
  return (
    <section className="bg-cream py-12 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Legal Insight Across Industries"
          description="We understand the legal and commercial considerations that shape businesses across sectors."
          align="center"
        />

        <div className="mt-8 grid gap-x-6 gap-y-10 md:mt-14 md:grid-cols-3 md:gap-y-14 lg:gap-x-10">
          {industries.map((industry, index) => (
            <Reveal key={`${industry.title}-${index}`} delay={index % 3}>
              <article className="text-center">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] bg-sand shadow-[var(--shadow-card)]">
                  <Image
                    src={industry.image}
                    alt="Legal professionals reviewing a document"
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="display-3 mt-4 text-ink md:mt-5">{industry.title}</h3>
                <p className="mx-auto mt-2 max-w-sm text-balance-pretty text-[0.9375rem] leading-relaxed text-ink/65 md:text-base">
                  {industry.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
