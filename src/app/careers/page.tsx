import type { Metadata } from "next";
import { roles, values } from "@/content/careers";
import { site } from "@/content/site";
import PageHero from "@/components/layout/PageHero";
import CtaBand from "@/components/layout/CtaBand";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import { ButtonLink } from "@/components/ui/Button";
import RoleList from "@/components/careers/RoleList";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "There are no open positions at Jhunjhunwala Legal at present. We continue to read speculative applications for our Delhi office.",
  alternates: { canonical: "/careers" },
};

const hiring = [
  {
    step: "Application",
    description: "Send a CV and a short writing sample. We read every application ourselves and reply either way.",
  },
  {
    step: "Conversation",
    description: "A forty-minute call about the work you have done and the work you want to do next.",
  },
  {
    step: "Written exercise",
    description: "A short, paid drafting or research task on the kind of matter you would actually handle here.",
  },
  {
    step: "Offer",
    description: "A written offer with the salary, the supervising partner and the first three months set out plainly.",
  },
];

const speculativeSubject = encodeURIComponent("Speculative application");

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        subtitle="We are a small firm that gives people real work early. We are not hiring in Delhi at present, but we still read every application that reaches us."
        image="/images/band-gavel.jpg"
      />

      <section className="bg-cream py-12 md:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-16">
            <div className="max-w-2xl">
              <Reveal>
                <p className="eyebrow mb-3 md:mb-4 text-teal">Why work here</p>
              </Reveal>
              <SplitText as="h2" text="What you can expect from us" className="display-2 text-ink" />
            </div>
            <Reveal delay={1} className="md:max-w-sm md:pb-3">
              <p className="text-balance-pretty text-[0.9375rem] md:text-base leading-relaxed text-ink/65">
                A small team means fewer layers between you and the client, and no room to hide behind process.
              </p>
            </Reveal>
          </div>

          <div className="mt-8 md:mt-12 grid gap-4 sm:gap-5 md:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index}>
                <article className="h-full rounded-[var(--radius-card)] border border-ink/10 bg-sand-soft/60 p-5 sm:p-8 transition-colors duration-500 ease-[var(--ease-out-expo)] hover:border-gold/45 md:p-10">
                  <span className="font-display text-sm font-semibold tracking-[0.16em] text-gold-deep tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display-3 mt-3 md:mt-4 text-ink">{value.title}</h3>
                  <p className="mt-2 md:mt-3 text-balance-pretty text-[0.9375rem] md:text-base leading-relaxed text-ink/65">{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="open-roles" className="bg-sand-soft py-12 md:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-16">
            <div className="max-w-2xl">
              <Reveal>
                <p className="eyebrow mb-3 md:mb-4 text-teal">Vacancies</p>
              </Reveal>
              <SplitText as="h2" text="No current openings" className="display-2 text-ink" />
            </div>
            <Reveal delay={1} className="md:max-w-sm md:pb-3">
              <p className="text-balance-pretty text-[0.9375rem] md:text-base leading-relaxed text-ink/65">
                Any vacancy we open is published here first, with the brief and the person you would
                report to set out in full.
              </p>
            </Reveal>
          </div>

          <div className="mt-8 md:mt-12">
            <RoleList roles={roles} email={site.email} />
          </div>
        </div>
      </section>

      <section className="bg-cream py-12 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-3 md:mb-4 text-teal">How hiring works</p>
            </Reveal>
            <SplitText as="h2" text="What happens when we are hiring" className="display-2 text-ink" />
          </div>

          <ol className="mt-8 md:mt-12 flex flex-col">
            {hiring.map((entry, index) => (
              <Reveal
                key={entry.step}
                delay={index}
                as="li"
                className="grid gap-2 border-t border-ink/12 py-5 last:border-b md:grid-cols-[6rem_minmax(0,16rem)_minmax(0,1fr)] md:items-baseline md:gap-8 md:py-7"
              >
                <span className="font-display text-sm font-semibold text-gold-deep tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display-3 text-ink">{entry.step}</h3>
                <p className="text-balance-pretty text-[0.9375rem] md:text-base leading-relaxed text-ink/65">{entry.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream pb-12 md:pb-28">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col gap-5 rounded-[var(--radius-card)] bg-teal px-5 py-7 text-cream md:flex-row md:items-center md:justify-between md:gap-7 md:px-12 md:py-12">
              <div className="max-w-xl">
                <p className="eyebrow text-gold">Speculative applications</p>
                <h2 className="display-3 mt-2 md:mt-3 text-cream">
                  Nothing open today. Write to us anyway.
                </h2>
                <p className="mt-2 md:mt-3 text-balance-pretty text-[0.9375rem] md:text-base leading-relaxed text-cream/75">
                  We keep speculative applications on file for a year and read them again whenever the
                  firm starts hiring. Tell us what you want to work on and send one piece of writing
                  you are proud of.
                </p>
              </div>
              <ButtonLink
                href={`mailto:${site.email}?subject=${speculativeSubject}`}
                variant="light"
                className="shrink-0"
              >
                Email Your CV
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Would rather talk first?"
        body="If you would like to understand the work before you apply, write to us and we will arrange a call with the lawyer who leads that practice."
        cta="Write To Us"
        href="/contact"
      />
    </>
  );
}
