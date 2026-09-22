import type { Insight } from "@/content/insights";
import InsightCard from "@/components/cards/InsightCard";
import Reveal from "@/components/ui/Reveal";

/** The full archive: a plain three-column grid of article cards on cream. */
export default function InsightLibrary({ insights }: { insights: Insight[] }) {
  return (
    <section className="bg-cream pb-12 md:pb-32">
      <div className="container-page">
        <h2 className="sr-only">All articles</h2>
        <ul className="grid gap-x-4 md:gap-x-7 gap-y-6 md:gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight, index) => (
            <Reveal as="li" key={insight.slug} delay={index % 3} className="h-full">
              <InsightCard insight={insight} className="h-full" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
