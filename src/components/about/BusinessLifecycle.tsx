import Reveal from "@/components/ui/Reveal";

const stages = [
  {
    number: "01",
    title: "Business Formation",
    description:
      "Incorporation, entity structuring and founder arrangements, so the business starts on a footing it will not have to unwind later.",
  },
  {
    number: "02",
    title: "Growth & Governance",
    description:
      "Commercial contracts, internal policies and governance that keep pace as the business takes on people, customers and obligations.",
  },
  {
    number: "03",
    title: "Investment & Transactions",
    description:
      "Fundraises, shareholder arrangements, acquisitions and founder exits, from term sheet through diligence to closing.",
  },
  {
    number: "04",
    title: "Protection & Risk",
    description:
      "Intellectual property, data privacy and early dispute management, protecting what the business has already built.",
  },
] as const;

/** The four stages of the business lifecycle, as numbered cards on sand tiles. */
export default function BusinessLifecycle() {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
      {stages.map((stage, index) => (
        <Reveal as="li" key={stage.number} delay={index} className="h-full">
          <article className="group flex h-full flex-col gap-3 sm:gap-4 rounded-[var(--radius-card)] bg-sand-soft p-4 sm:p-6 transition-all duration-600 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)] md:p-7">
            <span className="font-display text-sm font-semibold tracking-[0.16em] text-gold-deep tabular-nums">
              {stage.number}
            </span>
            <h3 className="font-display text-[1.0625rem] sm:text-[1.3125rem] font-semibold leading-snug text-ink">
              {stage.title}
            </h3>
            <p className="text-[0.8125rem] sm:text-[0.9375rem] leading-relaxed text-ink/68">
              {stage.description}
            </p>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
