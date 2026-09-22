import Image from "next/image";
import { inFocus, type InFocusItem } from "@/content/home";
import { getPerson } from "@/content/people";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * "Client update" poster cards. These are drawn in CSS/SVG rather than shipped
 * as artwork so the copy stays editable: a teal board, a gold disc behind the
 * title, a gold text panel, and a gold wave that runs into the name plate.
 */
function PosterCard({ item }: { item: InFocusItem }) {
  const person = getPerson(item.personSlug);

  return (
    <article className="group relative aspect-[5/6] overflow-hidden rounded-[var(--radius-card)] bg-teal shadow-[var(--shadow-card)]">
      <span className="absolute left-[3%] top-[2.5%] aspect-square w-[26%] rounded-full bg-gold" aria-hidden />

      <p className="absolute right-[4%] top-[4%] text-right font-brand text-[0.5rem] font-bold uppercase leading-[1.15] tracking-[0.06em] text-cream">
        Jhunjhunwala
        <br />
        Legal
      </p>

      <h3 className="absolute left-[10%] right-[30%] top-[8%] font-display text-[1.35rem] font-bold uppercase leading-[0.95] tracking-tight text-white">
        Client
        <br />
        Update
      </h3>

      <div className="absolute inset-x-[1.5%] bottom-0 h-[36%]" aria-hidden>
        <svg viewBox="0 0 300 110" preserveAspectRatio="none" className="size-full text-gold">
          <path
            d="M0 70 C 55 26 105 96 165 76 C 220 58 262 34 300 46 L300 110 L0 110 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="absolute inset-x-[1.5%] bottom-[24%] top-[26%] overflow-hidden bg-gold px-[5%] py-[4%]">
        <p className="text-justify font-display text-[0.6875rem] leading-[1.45] text-white">
          {item.lead} <strong className="font-bold uppercase">{item.client}</strong> {item.detail}
        </p>
      </div>

      <p className="absolute inset-x-0 bottom-0 flex h-[7%] items-center justify-end bg-gold pr-[4%] text-right font-display text-[0.6875rem] font-bold leading-none text-white">
        {person?.name}
      </p>

      {person ? (
        <div className="absolute bottom-0 left-0 h-[46%] w-[36%] overflow-hidden">
          <Image
            src={person.image}
            alt={person.name}
            fill
            sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, 17vw"
            className="object-cover object-top transition-transform duration-[1.1s] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
          />
        </div>
      ) : null}
    </article>
  );
}

export default function InFocus() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          title="In Focus"
          align="center"
          description="A closer look at selected matters, transactions, and legal work undertaken by our firm across industries and practice areas."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {inFocus.map((item, index) => (
            <Reveal key={item.id} delay={index}>
              <PosterCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
