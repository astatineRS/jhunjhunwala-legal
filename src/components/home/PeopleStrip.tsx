"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { people } from "@/content/people";
import AutoCarousel, { type CarouselHandle } from "@/components/ui/AutoCarousel";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/ui/icons";

const lead = people[0];
const rail = people.slice(1, 7);

export default function PeopleStrip() {
  const controls = useRef<CarouselHandle>(null);

  const control =
    "grid size-10 shrink-0 place-items-center rounded-full bg-cream text-teal transition-all duration-500 ease-[var(--ease-out-expo)] hover:bg-gold hover:text-white";

  return (
    <section className="bg-teal py-12 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-3 text-cream/70">A legal partner, not just a legal service</p>
            </Reveal>
            <SplitText as="h2" text="Meet Our People" className="display-2 text-cream" />
          </div>
          <Reveal delay={1} className="md:max-w-md md:pb-2">
            <p className="text-[0.9375rem] leading-relaxed text-cream/85 md:text-[1.0625rem]">
              We listen first. We understand the facts. We identify the legal issues. Then we explain
              your options clearly and help you decide how to move forward.
            </p>
          </Reveal>
        </div>

        <Reveal delay={1} className="mt-6 md:mt-12">
          <Link
            href={`/people/${lead.slug}`}
            className="group grid gap-4 rounded-[var(--radius-card)] bg-cream p-4 transition-shadow duration-600 ease-[var(--ease-out-expo)] hover:shadow-[var(--shadow-lift)] md:grid-cols-[0.34fr_0.66fr] md:gap-8 md:p-6"
          >
            <div className="relative aspect-[3/2] overflow-hidden rounded-[10px] md:aspect-[5/5.2]">
              <Image
                src={lead.image}
                alt={lead.name}
                fill
                sizes="(max-width: 768px) 100vw, 34vw"
                className="object-cover object-top transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
              />
            </div>

            <div className="flex flex-col md:py-4 md:pr-4">
              <div className="flex items-start justify-between gap-4 md:gap-6">
                <div>
                  <h3 className="font-display text-[1.5rem] font-semibold leading-tight text-ink md:text-[2.375rem]">
                    {lead.name}
                  </h3>
                  <p className="mt-1 text-[0.9375rem] text-ink/70 md:text-[1.0625rem]">{lead.role}</p>
                </div>
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-navy text-white transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-110 md:size-12"
                  aria-hidden
                >
                  <ArrowUpRight className="size-5" />
                </span>
              </div>

              <p className="mt-4 max-w-2xl text-balance-pretty text-[0.9375rem] leading-relaxed text-ink/70 md:mt-auto md:text-[1.0625rem]">
                {lead.bio[0]}
              </p>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={1} className="mt-6 flex items-center gap-3 md:mt-8 md:gap-4">
          <button
            type="button"
            onClick={() => controls.current?.prev()}
            aria-label="Previous team members"
            className={control}
          >
            <ArrowLeft className="size-4" />
          </button>

          <AutoCarousel
            controls={controls}
            speed={26}
            gap={20}
            className="min-w-0 flex-1"
            ariaLabel="Team members"
            itemClassName="w-[9.5rem] sm:w-[11rem]"
            items={rail.map((person) => (
              <Link
                key={person.slug}
                href={`/people/${person.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-[10px] md:aspect-[3/4]"
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 640px) 40vw, 12rem"
                  className="object-cover transition-transform duration-[1.1s] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
                />
                <span className="absolute inset-x-2 bottom-2 truncate rounded-[6px] bg-cream/95 px-2 py-1.5 text-center font-display text-[0.8125rem] font-semibold leading-tight text-ink backdrop-blur transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-1">
                  {person.name}
                </span>
              </Link>
            ))}
          />

          <button
            type="button"
            onClick={() => controls.current?.next()}
            aria-label="Next team members"
            className={control}
          >
            <ArrowRight className="size-4" />
          </button>
        </Reveal>

        <Reveal delay={2} className="mt-6 md:mt-12 flex justify-center">
          <ButtonLink href="/people" variant="light">
            View Team Members
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
