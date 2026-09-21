import type { Metadata } from "next";
import { people } from "@/content/people";
import { process } from "@/content/home";
import PersonCard from "@/components/cards/PersonCard";
import CtaBand from "@/components/layout/CtaBand";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import PeopleSpotlight from "@/components/people/PeopleSpotlight";

export const metadata: Metadata = {
  title: "Our People",
  description:
    "The lawyers of Jhunjhunwala Legal — corporate, transactional, employment, technology and disputes counsel based in Kolkata.",
  alternates: { canonical: "/people" },
};

export default function PeoplePage() {
  const [lead, ...team] = people;

  return (
    <>
      <section className="bg-cream pt-[calc(var(--header-h)+4rem)] pb-14 md:pb-20">
        <div className="container-page">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-16">
            <div className="max-w-3xl">
              <Reveal>
                <p className="eyebrow mb-4 text-teal">A legal partner, not just a legal service</p>
              </Reveal>
              <SplitText as="h1" text="Meet Our People" className="display-1 text-ink" />
            </div>
            <Reveal delay={1} className="md:max-w-sm md:pb-3">
              <p className="text-balance-pretty text-[1.0625rem] leading-relaxed text-ink/65">
                We listen first. We understand the facts. We identify the legal issues. Then we explain your
                options clearly and help you decide how to move forward.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-16 md:pb-24">
        <div className="container-page">
          <PeopleSpotlight person={lead} />
        </div>
      </section>

      <section className="bg-cream pb-20 md:pb-28">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow mb-4 text-teal">The team</p>
          </Reveal>
          <SplitText as="h2" text="Counsel across every part of the practice" className="display-2 max-w-3xl text-ink" />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person, index) => (
              <Reveal key={person.slug} delay={index % 4}>
                <PersonCard person={person} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-soft py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-16">
            <div className="max-w-2xl">
              <Reveal>
                <p className="eyebrow mb-4 text-teal">Working with us</p>
              </Reveal>
              <SplitText as="h2" text="How an engagement usually runs" className="display-2 text-ink" />
            </div>
            <Reveal delay={1} className="md:max-w-sm md:pb-3">
              <p className="text-balance-pretty leading-relaxed text-ink/65">
                The same four steps apply whether the matter is a single agreement or a multi-year retainer.
              </p>
            </Reveal>
          </div>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((entry, index) => (
              <Reveal key={entry.step} delay={index} as="li" className="bg-sand-soft p-7">
                <span className="font-display text-sm font-semibold text-gold-deep tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display-3 mt-3 text-ink">{entry.step}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/65">{entry.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Want to speak to one of our lawyers?"
        body="Tell us briefly what the matter involves and we will put you with the person best placed to advise on it."
        cta="Book A Consultation"
        href="/contact"
      />
    </>
  );
}
