import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import CtaBand from "@/components/layout/CtaBand";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PracticeCard from "@/components/cards/PracticeCard";
import { practiceAreas } from "@/content/practice-areas";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Legal advice across corporate, commercial, transactional and dispute-related matters, from setting up a business to resolving complex disputes.",
  alternates: { canonical: "/expertise" },
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        title="Expertise"
        subtitle="Tell us what you're dealing with, and let's discuss how we can help."
        image="/images/hero-banner.jpg"
      />

      <section className="bg-cream py-12 md:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Services"
            title="Legal expertise for every stage of your journey."
            aside={
              <div className="space-y-3 md:space-y-4 text-[0.875rem] md:text-[0.9375rem] leading-relaxed text-ink/65">
                <p>
                  We provide legal support across corporate, commercial, transactional, and
                  dispute-related matters. Our advice is tailored to the needs and objectives of each
                  client.
                </p>
                <p>
                  From building and growing a business to managing complex transactions and resolving
                  disputes, we help clients understand their options, manage risk, and move forward
                  with clarity.
                </p>
              </div>
            }
          />

          <div className="mt-9 md:mt-16 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, index) => (
              <Reveal key={area.slug} delay={index % 3} className="h-full">
                <PracticeCard area={area} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
