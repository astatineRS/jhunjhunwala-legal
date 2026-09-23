import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";

/**
 * Positioning statement that replaced the industries rail: the firm's own
 * words, set quietly between the practice rail and the people section.
 */
export default function QuoteBand() {
  return (
    <section className="bg-cream py-14 md:py-28">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow text-center text-teal">Law. Enabling ambition.</p>
        </Reveal>

        <blockquote className="mx-auto mt-5 max-w-4xl text-center md:mt-8">
          <SplitText
            as="p"
            text="We understand what you're trying to build. We understand what the law requires. And we know how to bring the two together."
            className="font-display text-[1.5rem] font-medium leading-[1.25] text-ink md:text-[2.5rem]"
          />
          <Reveal delay={1}>
            <footer className="mt-5 text-[0.9375rem] text-ink/55 md:mt-8 md:text-[1.0625rem]">
              Jhunjhunwala Legal — <span className="italic">ahead from day one</span>
            </footer>
          </Reveal>
        </blockquote>
      </div>
    </section>
  );
}
