import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { people } from "@/content/people";
import PageHero from "@/components/layout/PageHero";
import CtaBand from "@/components/layout/CtaBand";
import SectionHeading from "@/components/ui/SectionHeading";
import SplitText from "@/components/ui/SplitText";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import PersonCard from "@/components/cards/PersonCard";
import ProcessList from "@/components/about/ProcessList";
import LifecycleGrid from "@/components/LifecycleGrid";
import GuidingPrinciples from "@/components/about/GuidingPrinciples";

export const metadata: Metadata = {
  title: "About The Firm",
  description:
    "Jhunjhunwala Legal is a multi-service, business-oriented law firm founded in 2026, advising founders, entrepreneurs, startups, investors and growth businesses across the legal matters that shape their businesses.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About The Firm | ${site.name}`,
    description:
      "A business-first practice advising founders, investors and growth businesses across the business lifecycle.",
    url: `${site.url}/about`,
  },
};

const leadership = people.slice(0, 4);

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About The Firm"
        subtitle="A multi-service, business-oriented firm advising founders, entrepreneurs, investors and growth businesses."
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
              text="Counsel that begins with the business it serves"
              className="display-2 max-w-xl capitalize text-ink"
            />

            <div className="mt-5 md:mt-7 flex flex-col gap-4 md:gap-5 text-[0.9375rem] md:text-[1.0625rem] leading-relaxed text-ink/70">
              <Reveal delay={1}>
                <p>
                  Jhunjhunwala Legal (JJL) is a multi-service business-oriented law firm founded in
                  2026, advising founders, entrepreneurs, startups, investors and growth businesses
                  on the legal matters that shape their businesses, with the aim of serving as their
                  trusted Business and Legal Guardian as they build and grow.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p>
                  Our practice covers Corporate &amp; Commercial, Startup, Founder &amp; Investor
                  Advisory, Investment &amp; Transactional Advisory, Commercial Contracts, Technology
                  &amp; Data Privacy, and Intellectual Property. We work across the business
                  lifecycle, from setting up and structuring a business to raising capital, entering
                  transactions, managing commercial relationships, protecting intellectual property
                  and navigating legal risk.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p>
                  We approach legal work with a business-first perspective. A legal issue rarely
                  exists in isolation; it can affect a transaction, a commercial relationship, a
                  funding decision or the next stage of growth. Good legal counsel therefore begins
                  with understanding the business itself.
                </p>
              </Reveal>
              <Reveal delay={4}>
                <p>
                  We understand what our clients are building, what they are trying to achieve, and
                  what the law requires, and we know how to bring the two together.
                </p>
              </Reveal>
              <Reveal delay={5}>
                <p>
                  We are particularly conscious of the realities of building a startup. Early-stage
                  businesses operate with limited resources, changing priorities and ambitious
                  timelines. Legal support should therefore be accessible early, practical in its
                  application and capable of growing with the business.
                </p>
              </Reveal>
            </div>

            <Reveal delay={6} className="mt-6 md:mt-8">
              <blockquote className="border-l-2 border-gold pl-4 md:pl-6">
                <p className="font-display text-[1.25rem] md:text-[1.5rem] font-semibold leading-snug text-ink">
                  Law should be infrastructure, not an interruption.
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={7} className="mt-6 md:mt-8">
              <p className="text-[0.9375rem] md:text-[1.0625rem] leading-relaxed text-ink/70">
                Our aim is to make commercially sound legal counsel more accessible and affordable to
                the people building India&rsquo;s next generation of businesses, while growing with
                them as their legal needs evolve.
              </p>
            </Reveal>

            <Reveal delay={8} className="mt-6 md:mt-9">
              <ButtonLink href="/expertise" variant="ghost">
                See What We Do
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delay={2} className="relative">
            {/* The firm has no photographed office to show, so the panel carries
                the brand lockup on its own cream field; `object-contain` keeps
                the artwork whole rather than cropping the wordmark. */}
            <div className="relative aspect-square overflow-hidden rounded-[var(--radius-card)] bg-cream shadow-[var(--shadow-card)] ring-1 ring-ink/10">
              <Image
                src="/images/brand-lockup.png"
                alt="Jhunjhunwala Legal: Ahead from day one"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain"
              />
            </div>
            <div className="absolute inset-x-3 bottom-3 rounded-[10px] bg-white px-4 py-3 shadow-[var(--shadow-card)] md:inset-x-4 md:bottom-4 md:px-5 md:py-4">
              <p className="eyebrow text-gold-deep">Our Office</p>
              <p className="mt-1.5 text-[0.875rem] md:text-[0.9375rem] leading-snug text-ink/75">{site.address}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — Across the business lifecycle */}
      <section className="bg-cream py-12 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Do"
            title="Across the business lifecycle"
            description="Four stages of work, held by the same team. Most clients come to us at one of them and stay with us through the rest."
          />
          <LifecycleGrid className="mt-8 md:mt-16 lg:grid-cols-4" />
        </div>
      </section>

      {/* 3 — How we work */}
      <section className="bg-cream pb-12 md:pb-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How We Work"
            title="Four steps, in the same order, every time"
            description="Most matters go wrong at the beginning, from a fact that was never established or an option that was never put on the table. Our method is deliberately unhurried at the start so the rest can move quickly."
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

      {/* 5 — The journey with Backbone Counsels */}
      <section className="bg-cream py-12 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Where We Come From"
            title="The Journey with Backbone Counsels"
          />

          <div className="mt-6 md:mt-12 grid gap-4 md:gap-10 text-[0.9375rem] md:text-[1.0625rem] leading-relaxed text-ink/70 lg:grid-cols-2">
            <Reveal delay={1}>
              <p>
                Jhunjhunwala Legal builds on the foundation laid by Backbone Counsels, a legal
                vertical established by our Founder with a clear belief that legal counsel should
                function as an integral part of a business, rather than an intervention after
                problems arise. Through Backbone Counsels, we worked closely with founders and
                growing businesses across their legal, commercial and strategic requirements,
                developing an approach centred on understanding the business, anticipating legal
                risks and providing practical counsel.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p>
                As the practice evolved, so did the scope of the work and the ambition behind it.
                Jhunjhunwala Legal represents the next stage of that journey, bringing together the
                experience, relationships and business-first approach developed through Backbone
                Counsels with a broader multi-service practice. What began as a focused legal
                practice has grown into a firm built to serve those who build, back and grow
                businesses, across their legal needs and through every stage of their journey.
              </p>
            </Reveal>
          </div>

          <Reveal delay={3} className="mt-6 md:mt-10">
            <p className="max-w-2xl border-l-2 border-gold pl-4 font-display text-[1.125rem] md:text-[1.375rem] font-semibold leading-snug text-ink md:pl-6">
              The name has changed. The philosophy has not. Jhunjhunwala Legal carries forward the
              foundation of Backbone Counsels while building towards what comes next.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6 — People */}
      <section className="bg-cream pb-12 md:pb-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Team"
            title="The people behind the work"
            description="A small bench of lawyers who stay on your matter from the first conversation to the last document. No handovers, no rotating juniors: the person who advises you is the person accountable for the outcome."
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
