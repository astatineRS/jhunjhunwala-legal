import type { Metadata } from "next";
import { site } from "@/content/site";
import { people } from "@/content/people";
import PageHero from "@/components/layout/PageHero";
import CtaBand from "@/components/layout/CtaBand";
import SectionHeading from "@/components/ui/SectionHeading";
import SplitText from "@/components/ui/SplitText";
import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { ButtonLink } from "@/components/ui/Button";
import PersonCard from "@/components/cards/PersonCard";
import ProcessList from "@/components/about/ProcessList";
import StatsBand from "@/components/about/StatsBand";
import GuidingPrinciples from "@/components/about/GuidingPrinciples";
import IndustryGrid from "@/components/about/IndustryGrid";

export const metadata: Metadata = {
  title: "About The Firm",
  description:
    "Jhunjhunwala Legal is a Kolkata practice advising founders, businesses and institutions on corporate, commercial and transactional matters — and on the disputes that sometimes follow.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About The Firm — ${site.name}`,
    description:
      "A practice built on clear advice, careful preparation, and judgment you can act on.",
    url: `${site.url}/about`,
  },
};

const leadership = people.slice(0, 4);

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About The Firm"
        subtitle="A practice built on clear advice, careful preparation, and judgment you can act on."
        image="/images/band-gavel.jpg"
      />

      {/* 1 — Who we are */}
      <section className="bg-cream py-12 md:py-28">
        <div className="container-page grid gap-8 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow mb-3 text-teal">Who We Are</p>
            </Reveal>
            <SplitText
              as="h2"
              text="A practice built around the decision in front of you"
              className="display-2 max-w-xl capitalize text-ink"
            />

            <div className="mt-5 md:mt-7 flex flex-col gap-4 md:gap-5 text-[0.9375rem] md:text-[1.0625rem] leading-relaxed text-ink/70">
              <Reveal delay={1}>
                <p>
                  Legal matters rarely come with simple answers. They involve people, businesses,
                  relationships, money, and decisions that can have lasting consequences.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p>
                  Our role is to understand the situation fully, explain what matters, and provide
                  practical legal guidance built around your specific needs.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p>
                  The firm was founded in Kolkata for clients who would rather understand their own
                  position than simply be told what to sign. We act for founders, family businesses,
                  institutions and established companies across corporate, commercial and
                  transactional work — and on the disputes that occasionally follow from it.
                </p>
              </Reveal>
              <Reveal delay={4}>
                <p>
                  We keep the team deliberately small. The lawyer who hears your matter is the lawyer
                  who works on it, which is why our advice tends to arrive earlier, in plainer
                  language, and with an honest view of what it will cost to act on.
                </p>
              </Reveal>
            </div>

            <Reveal delay={5} className="mt-6 md:mt-9">
              <ButtonLink href="/expertise" variant="ghost">
                See What We Do
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delay={2} className="relative">
            <ParallaxImage
              src="/images/office.jpg"
              alt="The firm's offices in Kolkata"
              className="aspect-[3/2] rounded-[var(--radius-card)] md:aspect-[4/5] lg:aspect-[3/4]"
              sizes="(max-width: 1024px) 100vw, 45vw"
              distance={44}
            />
            <div className="absolute inset-x-3 bottom-3 rounded-[10px] bg-cream/95 px-4 py-3 backdrop-blur md:inset-x-4 md:bottom-4 md:px-5 md:py-4">
              <p className="eyebrow text-gold-deep">Our Office</p>
              <p className="mt-1.5 text-[0.875rem] md:text-[0.9375rem] leading-snug text-ink/75">{site.address}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — The practice in numbers */}
      <StatsBand />

      {/* 3 — How we work */}
      <section className="bg-cream py-12 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How We Work"
            title="Four steps, in the same order, every time"
            description="Most matters go wrong at the beginning — from a fact that was never established or an option that was never put on the table. Our method is deliberately unhurried at the start so the rest can move quickly."
          />
          <ProcessList />
        </div>
      </section>

      {/* 4 — What guides us */}
      <section className="bg-cream pb-12 md:pb-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What Guides Us"
            title="The standards we hold ourselves to"
            description="Four commitments that shape how every matter is staffed, advised on and reported back to you."
          />
          <GuidingPrinciples />
        </div>
      </section>

      {/* 5 — Industries */}
      <section className="bg-teal py-12 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Legal insight across industries"
            description="We understand the legal and commercial considerations that shape businesses across sectors."
            tone="light"
          />
          <IndustryGrid />
        </div>
      </section>

      {/* 6 — People */}
      <section className="bg-cream py-12 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Team"
            title="The people behind the work"
            description="A small bench of lawyers who stay on your matter from the first conversation to the last document. No handovers, no rotating juniors — the person who advises you is the person accountable for the outcome."
            aside={
              <ButtonLink href="/people" variant="ghost">
                Meet The Team
              </ButtonLink>
            }
          />

          <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
            {leadership.map((person, index) => (
              <Reveal as="li" key={person.slug} delay={index}>
                <PersonCard person={person} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
