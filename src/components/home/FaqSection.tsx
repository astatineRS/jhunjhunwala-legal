import { faqs } from "@/content/home";
import Accordion from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";

export default function FaqSection() {
  return (
    <section
      id="faqs"
      className="scroll-mt-[calc(var(--header-h)+1rem)] bg-cream pb-12 md:pb-28"
    >
      <div className="container-page grid gap-6 md:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)] lg:self-start">
          <SplitText as="h2" text="Frequently Asked Questions" className="display-2 text-ink" />
          <Reveal delay={1}>
            <p className="mt-3 max-w-sm text-balance-pretty text-[0.9375rem] leading-relaxed text-ink/65 md:mt-5 md:text-[1.0625rem]">
              Clear answers to common questions about our services, process, and working with us.
            </p>
          </Reveal>

          <Reveal delay={2} className="mt-7 md:mt-16">
            <h3 className="font-display text-[1.25rem] font-semibold text-ink md:text-[1.5rem]">
              Still Have A Question?
            </h3>
            <p className="mt-2 max-w-xs text-[0.9375rem] leading-relaxed text-ink/65 md:mt-3 md:text-[1.0625rem]">
              Can&rsquo;t find the answer you&rsquo;re looking for? Talk to our team.
            </p>
            <div className="mt-5 md:mt-7">
              <ButtonLink href="/contact">Contact Us</ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <Accordion items={faqs} tone="stone" />
        </Reveal>
      </div>
    </section>
  );
}
