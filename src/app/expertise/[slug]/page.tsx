import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/layout/CtaBand";
import SectionHeading from "@/components/ui/SectionHeading";
import SplitText from "@/components/ui/SplitText";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import PracticeCard from "@/components/cards/PracticeCard";
import DetailHeroImage from "@/components/expertise/DetailHeroImage";
import ServicesSidebar from "@/components/expertise/ServicesSidebar";
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
      title: `${area.title} — Jhunjhunwala Legal`,
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
    <>
      <section className="bg-cream pb-20 pt-[calc(var(--header-h)+3rem)] md:pb-24">
        <div className="container-page">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.8125rem] text-ink/45">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-400 ease-[var(--ease-out-expo)] hover:text-teal"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/expertise"
                  className="transition-colors duration-400 ease-[var(--ease-out-expo)] hover:text-teal"
                >
                  Expertise
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-ink/75">
                {area.title}
              </li>
            </ol>
          </nav>

          <SplitText as="h1" text={area.title} className="display-1 mt-7 max-w-4xl text-ink" />

          <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-16">
            <aside className="self-start lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:col-start-2 lg:row-start-1">
              <ServicesSidebar currentSlug={area.slug} />
            </aside>

            <div className="lg:col-start-1 lg:row-start-1">
              <DetailHeroImage
                src="/images/office.jpg"
                alt={`Jhunjhunwala Legal — ${area.title}`}
                className="aspect-[16/10] w-full"
              />

              <div className="mt-10 space-y-5 md:mt-12">
                {area.intro.map((paragraph, index) => (
                  <Reveal key={paragraph.slice(0, 40)} delay={index}>
                    <p className="text-[1.0625rem] leading-[1.8] text-ink/75">{paragraph}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="What We Do"
            title="Key Services"
            description="The work we are most often asked to take on within this practice. Every engagement is scoped to what the matter actually requires."
          />

          <div className="mt-14 md:mt-16">
            <KeyServices services={area.keyServices} />
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Explore More"
            title="Other Expertise Areas"
            description="Matters rarely sit in a single category. These are the practices that most often run alongside this one."
          />

          <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {others.map((other, index) => (
              <Reveal key={other.slug} delay={index} className="h-full">
                <PracticeCard area={other} tone="white" />
              </Reveal>
            ))}
          </div>

          <Reveal delay={2} className="mt-12 flex justify-center">
            <ButtonLink href="/expertise" variant="ghost">
              Explore all Expertise Areas
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
