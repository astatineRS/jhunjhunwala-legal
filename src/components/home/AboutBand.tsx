import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import LifecycleGrid from "@/components/LifecycleGrid";
import MandateMarquee from "@/components/home/MandateMarquee";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";

export default function AboutBand() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-12 md:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/band-gavel.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[50%_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/80 to-teal-deep/80" />
      </div>

      <div className="container-page">
        <div className="grid gap-8 md:gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow mb-3 text-gold">Experience that works for you</p>
            </Reveal>
            <SplitText as="h2" text="About Us" className="display-2 text-cream" />

            <Reveal delay={1}>
              <p className="mt-4 max-w-xl text-balance-pretty text-[0.9375rem] leading-relaxed text-cream/75 md:mt-6 md:text-[1.0625rem]">
                Jhunjhunwala Legal (JJL) is a multi-service business-oriented law firm founded in
                2026, advising founders, entrepreneurs, startups, investors and growth businesses on
                the legal matters that shape their businesses, with the aim of serving as their
                trusted Business and Legal Guardian as they build and grow.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-3 max-w-xl text-balance-pretty text-[0.9375rem] leading-relaxed text-cream/75 md:mt-5 md:text-[1.0625rem]">
                Our practice covers Corporate &amp; Commercial, Startup, Founder &amp; Investor
                Advisory, Investment &amp; Transactional Advisory, Commercial Contracts, Technology
                &amp; Data Privacy, and Intellectual Property. We work across the business lifecycle
                &mdash; from setting up and structuring a business to raising capital, entering
                transactions, managing commercial relationships, protecting intellectual property
                and navigating legal risk.
              </p>
            </Reveal>

            <Reveal delay={3} className="mt-6 md:mt-10">
              <ButtonLink href="/about" variant="light">
                Read More
              </ButtonLink>
            </Reveal>
          </div>

          <LifecycleGrid tone="dark" />
        </div>

        <Reveal delay={1} className="mt-8 border-t border-white/12 pt-5 md:mt-24 md:pt-8">
          <div className="flex flex-col gap-3 md:gap-5">
            <p className="eyebrow shrink-0 text-cream/50">Recent Mandates</p>
            <MandateMarquee />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
