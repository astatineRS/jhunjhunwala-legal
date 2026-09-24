import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionHeading from "@/components/ui/SectionHeading";
import SplitText from "@/components/ui/SplitText";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import PracticeCard from "@/components/cards/PracticeCard";
import DetailHeroImage from "@/components/expertise/DetailHeroImage";
import KeyServices from "@/components/expertise/KeyServices";
import {
  getOtherPracticeAreas,
  getPracticeArea,
  practiceAreas,
} from "@/content/practice-areas";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);

  if (!area) {
    return { title: "Expertise" };
  }

  return {
    title: area.title,
    description: area.teaser,
    alternates: { canonical: `/expertise/${area.slug}` },
    openGraph: {
      title: `${area.title} | Jhunjhunwala Legal`,
      description: area.teaser,
      url: `/expertise/${area.slug}`,
      type: "article",
    },
  };
}

export default async function PracticeAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getPracticeArea(slug);

  if (!area) {
    notFound();
  }

  const others = getOtherPracticeAreas(area.slug, 3);

  return (
    <article className="bg-cream pb-12 pt-[calc(var(--header-h)+1.75rem)] md:pb-32 md:pt-[calc(var(--header-h)+4rem)]">
      <div className="container-page">
        <SplitText as="h1" text={area.title} className="display-1 max-w-5xl text-ink" />

        <DetailHeroImage
          src={area.image}
          alt={`Jhunjhunwala Legal: ${area.title}`}
          className="mt-6 aspect-[2/1] w-full md:mt-12 md:aspect-[16/9]"
        />

        <div className="mt-8 space-y-4 md:mt-14 md:space-y-6">
          {area.intro.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 40)} delay={index}>
              <p className="text-[0.9375rem] md:text-[1.0625rem] leading-[1.7] md:leading-[1.8] text-ink/75">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <section className="mt-12 md:mt-32">
          <SectionHeading align="center" title="Key Services" />
          <KeyServices services={area.keyServices} className="mt-8 md:mt-14" />
        </section>

        <section className="mt-12 md:mt-32">
          <SectionHeading align="center" title="Other Expertise Areas" />

          <div className="mt-8 grid gap-4 md:mt-14 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((other, index) => (
              <Reveal key={other.slug} delay={index} className="h-full">
                <PracticeCard area={other} />
              </Reveal>
            ))}
          </div>

          <div className="mt-7 md:mt-10 flex items-center justify-center gap-3" aria-hidden>
            <span className="size-2.5 rounded-full bg-gold/40" />
            <span className="size-2.5 rounded-full bg-gold" />
            <span className="size-2.5 rounded-full bg-gold/40" />
          </div>

          <Reveal delay={1} className="mt-8 md:mt-12 flex justify-center">
            <ButtonLink href="/expertise">Explore All Expertise Areas</ButtonLink>
          </Reveal>
        </section>
      </div>
    </article>
  );
}
