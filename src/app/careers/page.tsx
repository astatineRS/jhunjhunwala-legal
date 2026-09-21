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
    "Open roles and internships at Jhunjhunwala Legal — corporate, disputes and technology work with real responsibility from the first month.",
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
        subtitle="We are a small firm that gives people real work early. If that suits you, we would like to hear from you."
        image="/images/band-gavel.jpg"
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-16">
            <div className="max-w-2xl">
              <Reveal>
                <p className="eyebrow mb-4 text-teal">Why work here</p>
              </Reveal>
              <SplitText as="h2" text="What you can expect from us" className="display-2 text-ink" />
            </div>
            <Reveal delay={1} className="md:max-w-sm md:pb-3">
              <p className="text-balance-pretty leading-relaxed text-ink/65">
                A small team means fewer layers between you and the client, and no room to hide behind process.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index}>
                <article className="h-full rounded-[var(--radius-card)] border border-ink/10 bg-sand-soft/60 p-8 transition-colors duration-500 ease-[var(--ease-out-expo)] hover:border-gold/45 md:p-10">
                  <span className="font-display text-sm font-semibold tracking-[0.16em] text-gold-deep tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display-3 mt-4 text-ink">{value.title}</h3>
                  <p className="mt-3 text-balance-pretty leading-relaxed text-ink/65">{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="open-roles" className="bg-sand-soft py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-16">
            <div className="max-w-2xl">
              <Reveal>
                <p className="eyebrow mb-4 text-teal">Open roles</p>
              </Reveal>
              <SplitText as="h2" text="Currently hiring" className="display-2 text-ink" />
            </div>
            <Reveal delay={1} className="md:max-w-sm md:pb-3">
              <p className="text-balance-pretty leading-relaxed text-ink/65">
                Select a role to see the brief and apply. Applications go straight to the partners.
              </p>
            </Reveal>
          </div>

          <div className="mt-12">
            <RoleList roles={roles} email={site.email} />
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-4 text-teal">How hiring works</p>
            </Reveal>
            <SplitText as="h2" text="Four steps, no surprises" className="display-2 text-ink" />
          </div>

          <ol className="mt-12 flex flex-col">
            {hiring.map((entry, index) => (
              <Reveal
                key={entry.step}
                delay={index}
                as="li"
                className="grid gap-3 border-t border-ink/12 py-7 last:border-b md:grid-cols-[6rem_minmax(0,16rem)_minmax(0,1fr)] md:items-baseline md:gap-8"
              >
                <span className="font-display text-sm font-semibold text-gold-deep tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display-3 text-ink">{entry.step}</h3>
                <p className="text-balance-pretty leading-relaxed text-ink/65">{entry.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream pb-20 md:pb-28">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col gap-7 rounded-[var(--radius-card)] bg-teal px-7 py-10 text-cream md:flex-row md:items-center md:justify-between md:px-12 md:py-12">
              <div className="max-w-xl">
                <p className="eyebrow text-gold">Speculative applications</p>
                <h2 className="display-3 mt-3 text-cream">
                  No listing that fits? Write to us anyway.
                </h2>
                <p className="mt-3 text-balance-pretty leading-relaxed text-cream/75">
                  We keep speculative applications on file for a year and read them again whenever a practice
                  starts hiring. Tell us what you want to work on and send one piece of writing you are proud of.
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
        title="Not seeing the right role?"
        body="If you would rather talk before applying, write to us and we will arrange a call with the partner who leads that practice."
        cta="Write To Us"
        href="/contact"
      />
    </>
  );
}
