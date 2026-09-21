import Image from "next/image";
import Link from "next/link";
import { people } from "@/content/people";
import ArrowBadge from "@/components/ui/ArrowBadge";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Understanding() {
  const lead = people[0];

  return (
    <section className="bg-cream pb-16 pt-20 md:pb-20 md:pt-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="How we approach a matter"
          title="We Take The Time To Understand What Is Really At Stake."
          aside={
            <p className="text-[1.0625rem] leading-relaxed text-ink/65">
              Two matters that look identical on paper rarely call for the same advice. What changes
              the answer is context — the relationship behind the contract, the appetite for a
              fight, the cost of being right slowly.
            </p>
          }
        />

        <Reveal delay={1} className="mt-14">
          <Link
            href={`/people/${lead.slug}`}
            className="group grid overflow-hidden rounded-[var(--radius-card)] bg-gold transition-shadow duration-600 ease-[var(--ease-out-expo)] hover:shadow-[var(--shadow-lift)] md:grid-cols-[0.42fr_0.58fr]"
          >
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[24rem]">
              <Image
                src={lead.image}
                alt={lead.name}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover object-top transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
              />
            </div>

            <div className="flex flex-col p-8 md:p-12">
              <p className="eyebrow text-white/70">Meet the managing partner</p>
              <h3 className="mt-4 font-display text-[2rem] font-semibold leading-tight text-white md:text-[2.375rem]">
                {lead.name}
              </h3>
              <p className="mt-1 text-[0.9375rem] font-medium uppercase tracking-[0.14em] text-white/75">
                {lead.role}
              </p>
              <p className="mt-6 max-w-xl text-balance-pretty text-[1.0625rem] leading-relaxed text-white/85">
                {lead.bio[0]}
              </p>
              <span className="mt-auto flex items-center gap-4 pt-9 text-[0.9375rem] font-medium text-white">
                Read Full Profile
                <ArrowBadge tone="white" size={40} />
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
