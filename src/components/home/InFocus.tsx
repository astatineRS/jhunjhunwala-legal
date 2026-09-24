import Image from "next/image";
import { inFocus, type InFocusItem } from "@/content/home";
import AutoCarousel from "@/components/ui/AutoCarousel";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * A published "client update" poster, shown as the artwork that actually went
 * out on LinkedIn rather than a CSS reconstruction of it — the earlier redraw
 * could not keep up with the studio's layout and set the client anonymously.
 * The summary is baked into the PNG, so the sentence is carried in `alt`.
 */
function PosterCard({ item }: { item: InFocusItem }) {
  const summary = `${item.lead} ${item.client} ${item.detail}`;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative block aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-teal shadow-[var(--shadow-card)] transition-shadow duration-500 ease-[var(--ease-out-expo)] hover:shadow-[var(--shadow-lift)]"
    >
      <Image
        src={item.image}
        alt={`${summary} Read the update on LinkedIn.`}
        fill
        sizes="(max-width: 640px) 76vw, (max-width: 1024px) 20rem, 21rem"
        className="object-cover transition-transform duration-[1.1s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
      />
    </a>
  );
}

export default function InFocus() {
  return (
    <section className="bg-cream py-12 md:py-28">
      <div className="container-page">
        <SectionHeading
          title="In Focus"
          align="center"
          description="A closer look at selected matters, transactions, and legal work undertaken by our firm across industries and practice areas."
        />
      </div>

      <AutoCarousel
        speed={30}
        className="container-page mt-6 md:mt-14"
        ariaLabel="Selected matters"
        itemClassName="w-[76vw] sm:w-[20rem] lg:w-[19rem] xl:w-[21rem]"
        items={inFocus.map((item) => (
          <PosterCard key={item.id} item={item} />
        ))}
      />
    </section>
  );
}
