import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import PolicyToc, { type TocEntry } from "./PolicyToc";

export type PolicySection = { id: string; title: string; body: ReactNode };

/**
 * Shell for the firm's two standing legal documents. Single narrow measure for
 * reading, with a sticky contents rail from `lg` upwards. There is no dark hero
 * here, so the page has to clear the fixed header itself.
 */
export default function PolicyDocument({
  eyebrow,
  title,
  lede,
  updated,
  sections,
  footnote,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  updated: string;
  sections: PolicySection[];
  footnote?: ReactNode;
}) {
  const entries: TocEntry[] = sections.map(({ id, title: heading }) => ({ id, title: heading }));

  return (
    <article className="bg-cream pb-20 pt-[calc(var(--header-h)+3rem)] md:pb-28">
      <div className="container-page grid gap-x-10 lg:grid-cols-[13rem_minmax(0,42rem)] lg:gap-x-16">
        <header className="max-w-2xl lg:col-start-2 lg:row-start-1">
          <Reveal>
            <p className="eyebrow mb-3 text-teal">{eyebrow}</p>
          </Reveal>
          <SplitText as="h1" text={title} className="display-1 text-ink" />
          <Reveal delay={1}>
            <p className="mt-5 text-balance-pretty text-[1.0625rem] leading-relaxed text-ink/65">
              {lede}
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 border-t border-ink/12 pt-4 text-[0.8125rem] uppercase tracking-[0.14em] text-ink/45">
              Last updated {updated}
            </p>
          </Reveal>
        </header>

        <aside className="mt-12 hidden md:mt-16 lg:col-start-1 lg:row-start-2 lg:block">
          <div className="sticky top-[calc(var(--header-h)+2.5rem)]">
            <PolicyToc entries={entries} />
          </div>
        </aside>

        <div className="prose-legal mt-12 max-w-none md:mt-16 lg:col-start-2 lg:row-start-2 [&_section:first-child_h2]:mt-0">
          {sections.map((section) => (
            <section key={section.id} data-toc-section={section.id} aria-labelledby={section.id}>
              <h2 id={section.id} className="scroll-mt-[calc(var(--header-h)+1.5rem)]">
                {section.title}
              </h2>
              {section.body}
            </section>
          ))}

          {footnote ? (
            <p className="mt-12 border-t border-ink/12 pt-6 text-[0.875rem] leading-relaxed text-ink/55">
              {footnote}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
