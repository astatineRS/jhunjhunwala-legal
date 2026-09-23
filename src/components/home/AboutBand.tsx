import Image from "next/image";
import { stats } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
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
                Legal matters rarely come with simple answers. They arrive in the middle of a
                business, a family or a plan already in motion, and the decision in front of you
                usually carries consequences in more than one direction.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-3 max-w-xl text-balance-pretty text-[0.9375rem] leading-relaxed text-cream/75 md:mt-5 md:text-[1.0625rem]">
                Our role is to understand the situation fully, explain the position in language you
                can act on, and help you decide how to move forward. Sometimes that means drafting,
                negotiating or filing. Often it means telling you plainly what the law allows and
                what it will take to establish it.
              </p>
            </Reveal>

            <Reveal delay={3} className="mt-6 md:mt-10">
              <ButtonLink href="/about" variant="light">
                Read More
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <dl className="grid grid-cols-2 overflow-hidden rounded-[var(--radius-card)] border border-white/15 bg-white/[0.07] backdrop-blur-xl">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col-reverse gap-1 border-b border-r border-white/10 px-4 py-5 last:border-r-0 even:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 md:gap-2 md:px-8 md:py-10"
                >
                  <dt className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-cream/60 md:text-[0.8125rem]">
                    {stat.label}
                  </dt>
                  <dd className="display-2 text-gold">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
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
