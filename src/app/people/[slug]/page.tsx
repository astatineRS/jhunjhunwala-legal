import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { people, getPerson } from "@/content/people";
import { practiceAreas } from "@/content/practice-areas";
import { site } from "@/content/site";
import PersonCard from "@/components/cards/PersonCard";
import CtaBand from "@/components/layout/CtaBand";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import ArrowBadge from "@/components/ui/ArrowBadge";
import { LinkedInIcon, MailIcon } from "@/components/ui/icons";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return people.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);

  if (!person) {
    return { title: "Profile not found" };
  }

  return {
    title: `${person.name} — ${person.role}`,
    description: person.bio[0],
    alternates: { canonical: `/people/${person.slug}` },
    openGraph: {
      title: `${person.name} — ${person.role}`,
      description: person.bio[0],
      images: [{ url: person.image }],
    },
  };
}

/** Links a focus label to a practice area when the wording matches either its title or short form. */
function matchPracticeArea(focus: string) {
  const needle = focus.trim().toLowerCase();
  return practiceAreas.find(
    (area) => area.title.toLowerCase() === needle || area.short.toLowerCase() === needle,
  );
}

const linkedIn = site.socials.find((social) => social.label === "LinkedIn")?.href ?? "https://www.linkedin.com/";

export default async function PersonPage({ params }: Params) {
  const { slug } = await params;
  const person = getPerson(slug);

  if (!person) {
    notFound();
  }

  const others = people.filter((entry) => entry.slug !== person.slug).slice(0, 4);

  return (
    <>
      <section className="bg-cream pt-[calc(var(--header-h)+3rem)] pb-16 md:pb-24">
        <div className="container-page">
          <Reveal>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-ink/50">
                <li>
                  <Link href="/" className="transition-colors duration-400 hover:text-teal">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/people" className="transition-colors duration-400 hover:text-teal">
                    People
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-ink/75">{person.name}</li>
              </ol>
            </nav>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <Reveal>
              <ParallaxImage
                src={person.image}
                alt={person.name}
                priority
                distance={34}
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="aspect-[4/5] w-full rounded-[var(--radius-card)] bg-sand lg:aspect-[3/4]"
                imageClassName="object-top"
              />
            </Reveal>

            <div className="flex flex-col justify-center">
              <Reveal>
                <p className="eyebrow mb-4 text-teal">{person.role}</p>
              </Reveal>
              <SplitText as="h1" text={person.name} className="display-1 text-ink" />
              <Reveal delay={1}>
                <p className="mt-5 text-[0.95rem] text-ink/60">{person.bar}</p>
              </Reveal>

              <Reveal delay={2}>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {person.focus.map((focus) => (
                    <li
                      key={focus}
                      className="rounded-full border border-ink/12 bg-sand-soft px-3.5 py-1.5 text-[0.78rem] font-medium tracking-tight text-ink/70"
                    >
                      {focus}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={3}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${person.email}`}
                    className="group inline-flex items-center gap-3 rounded-full border border-ink/15 py-2 pl-5 pr-2 text-[0.9375rem] text-ink transition-colors duration-500 ease-[var(--ease-out-expo)] hover:border-ink/40 hover:bg-ink/5"
                  >
                    <MailIcon className="size-4 text-teal" />
                    <span>{person.email}</span>
                    <ArrowBadge tone="teal" size={34} />
                  </a>
                  <a
                    href={linkedIn}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${person.name} on LinkedIn`}
                    className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink/70 transition-colors duration-500 ease-[var(--ease-out-expo)] hover:border-teal hover:bg-teal hover:text-white"
                  >
                    <LinkedInIcon className="size-4" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 md:pb-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
            <div>
              <Reveal>
                <p className="eyebrow mb-4 text-teal">Profile</p>
              </Reveal>
              <div className="prose-legal">
                {person.bio.map((paragraph, index) => (
                  <Reveal key={paragraph.slice(0, 32)} delay={index}>
                    <p>{paragraph}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <Reveal>
                <div className="rounded-[var(--radius-card)] bg-sand-soft p-7 md:p-8">
                  <h2 className="display-3 text-ink">Education</h2>
                  <ul className="mt-5 flex flex-col divide-y divide-ink/10">
                    {person.education.map((entry) => (
                      <li key={entry} className="py-3 text-[0.95rem] text-ink/70 first:pt-0 last:pb-0">
                        {entry}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={1}>
                <div className="rounded-[var(--radius-card)] border border-ink/10 p-7 md:p-8">
                  <h2 className="display-3 text-ink">Practice areas</h2>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {person.focus.map((focus) => {
                      const area = matchPracticeArea(focus);

                      if (!area) {
                        return (
                          <li
                            key={focus}
                            className="rounded-full border border-ink/12 px-4 py-2 text-[0.8125rem] text-ink/60"
                          >
                            {focus}
                          </li>
                        );
                      }

                      return (
                        <li key={focus}>
                          <Link
                            href={`/expertise/${area.slug}`}
                            className="group inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/5 px-4 py-2 text-[0.8125rem] font-medium text-teal transition-colors duration-500 ease-[var(--ease-out-expo)] hover:bg-teal hover:text-white"
                          >
                            {area.short}
                            <span className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5">
                              &rarr;
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-5 text-[0.875rem] leading-relaxed text-ink/55">
                    Linked areas open the full practice page. Unlinked labels describe work {person.name.split(" ")[0]}{" "}
                    handles within those practices.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-soft py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SplitText as="h2" text="Other members of the team" className="display-2 max-w-2xl text-ink" />
            <Reveal delay={1}>
              <Link
                href="/people"
                className="group inline-flex items-center gap-3 text-[0.95rem] font-medium text-teal transition-colors duration-500 hover:text-teal-deep"
              >
                <span>View all people</span>
                <ArrowBadge tone="teal" size={34} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((entry, index) => (
              <Reveal key={entry.slug} delay={index}>
                <PersonCard person={entry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Work with ${person.name.split(" ")[0]}`}
        body="Send a short note about the matter and we will come back with next steps, the people involved and an indicative cost."
        cta="Book A Consultation"
        href="/contact"
      />
    </>
  );
}
