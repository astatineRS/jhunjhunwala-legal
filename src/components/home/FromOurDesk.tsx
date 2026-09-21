import { insights } from "@/content/insights";
import InsightCard from "@/components/cards/InsightCard";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FromOurDesk() {
  const latest = insights.slice(0, 3);

  return (
    <section className="bg-teal-deep py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Insights"
          title="From Our Desk"
          tone="light"
          aside={
            <p className="text-[1.0625rem] leading-relaxed text-cream/75">
              Notes on the questions clients actually ask — written to be useful before a matter
              starts, not after it goes wrong.
            </p>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {latest.map((insight, index) => (
            <Reveal key={insight.slug} delay={index} className="h-full">
              <InsightCard insight={insight} className="h-full" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={1} className="mt-12 flex justify-center">
          <ButtonLink href="/resources" variant="light">
            Read All Insights
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
