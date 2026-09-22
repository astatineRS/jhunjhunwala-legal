import { insights } from "@/content/insights";
import InsightCard from "@/components/cards/InsightCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FromOurDesk() {
  const latest = insights.slice(0, 3);

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Insights"
          title="From Our Desk"
          align="center"
          description="Legal developments can affect your business, your work, and your everyday decisions. Explore our latest legal insights, commentary, and practical guides."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {latest.map((insight, index) => (
            <Reveal key={insight.slug} delay={index} className="h-full">
              <InsightCard insight={insight} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
