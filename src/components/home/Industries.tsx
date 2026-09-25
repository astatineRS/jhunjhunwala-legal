import Image from "next/image";
import { industries } from "@/content/home";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Ticker from "@/components/ui/Ticker";

function IndustryCard({
  industry,
  mobile = false,
}: {
  industry: (typeof industries)[number];
  mobile?: boolean;
}) {
  return (
    <article className="text-center">
      <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] bg-sand shadow-[var(--shadow-card)]">
        <Image
          src={industry.image}
          alt="Legal professionals reviewing a document"
          fill
          sizes={mobile ? "84vw" : "33vw"}
          className="object-cover"
        />
      </div>
      <h3 className="display-3 mt-4 text-ink md:mt-5">{industry.title}</h3>
      <p className="mx-auto mt-2 max-w-sm text-balance-pretty text-[0.9375rem] leading-relaxed text-ink/65 md:text-base">
        {industry.description}
      </p>
    </article>
  );
}

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

        <Ticker
          speed={24}
          ariaLabel="Industries we serve. Swipe or drag to explore."
          className="-mx-5 mt-8 px-5 pb-2 md:hidden"
        >
          {industries.map((industry, index) => (
            <div
              key={`mobile-${industry.title}-${index}`}
              className="w-[84vw] max-w-[24rem] shrink-0 pr-5"
            >
              <IndustryCard industry={industry} mobile />
            </div>
          ))}
        </Ticker>

        <div className="mt-14 hidden gap-x-6 gap-y-14 md:grid md:grid-cols-3 lg:gap-x-10">
          {industries.map((industry, index) => (
            <Reveal key={`${industry.title}-${index}`} delay={index % 3}>
              <IndustryCard industry={industry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
