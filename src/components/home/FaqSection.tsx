import { faqs } from "@/content/home";
import Accordion from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";

export default function FaqSection() {
  return (
    <section
      id="faqs"
      className="scroll-mt-[calc(var(--header-h)+1rem)] bg-cream pb-20 md:pb-28"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)] lg:self-start">
          <Reveal>
            <p className="eyebrow mb-3 text-teal">Before you call</p>
          </Reveal>
          <SplitText as="h2" text="Frequently Asked Questions" className="display-2 text-ink" />
          <Reveal delay={1}>
            <p className="mt-5 max-w-md text-balance-pretty text-[1.0625rem] leading-relaxed text-ink/65">
              The questions we are asked most often, answered plainly. Nothing here is legal advice
              on your specific matter — for that, a conversation works better.
            </p>
          </Reveal>

          <Reveal delay={2} className="mt-10 rounded-[var(--radius-card)] border border-ink/10 bg-white p-7">
            <h3 className="font-display text-[1.375rem] font-semibold text-ink">
              Still have a question?
            </h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/65">
              Send us the short version and we will tell you whether it needs a lawyer at all.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact">Contact Us</ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
