import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/layout/CtaBand";
import InsightCard from "@/components/cards/InsightCard";
import ArticleBody from "@/components/resources/ArticleBody";
import ArticleReader from "@/components/resources/ArticleReader";
import RelatedRail from "@/components/resources/RelatedRail";
import ShareRow from "@/components/resources/ShareRow";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import { CommentIcon, EyeIcon, ShareIcon } from "@/components/ui/icons";
import { getInsight, getRelatedInsights, insights } from "@/content/insights";
import { site } from "@/content/site";

const MONTHS: Record<string, string> = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

/** Content dates read "17 Sep' 26"; structured data needs an ISO calendar date. */
function isoDate(date: string) {
  const match = /^(\d{1,2})\s+([A-Za-z]{3})[^\d]*(\d{2})$/.exec(date.trim());
  if (!match) return undefined;
  const month = MONTHS[match[2]];
  if (!month) return undefined;
  return `20${match[3]}-${month}-${match[1].padStart(2, "0")}`;
}

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return { title: "Article not found" };

  return {
    title: insight.title,
    description: insight.excerpt,
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      url: `/resources/${insight.slug}`,
      type: "article",
      images: [{ url: insight.image, width: 1200, height: 630, alt: insight.title }],
    },
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const neighbours = getRelatedInsights(slug, 7);
  const related = neighbours.slice(0, 4);
  const continueReading = neighbours.length > 6 ? neighbours.slice(4, 7) : neighbours.slice(0, 3);
  const canonical = `${site.url}/resources/${insight.slug}`;
  const published = isoDate(insight.date);

  const metrics = [
    { icon: EyeIcon, value: insight.stats.views, label: "views" },
    { icon: CommentIcon, value: insight.stats.comments, label: "comments" },
    { icon: ShareIcon, value: insight.stats.shares, label: "shares" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    image: `${site.url}${insight.image}`,
    articleSection: insight.category,
    inLanguage: "en-IN",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    ...(published ? { datePublished: published, dateModified: published } : {}),
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "LegalService",
      name: site.name,
      url: site.url,
      address: site.address,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <section className="bg-cream pt-[calc(var(--header-h)+3rem)]">
          <div className="container-page">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-ink/50">
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-400 hover:text-teal"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-ink/25">
                  /
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="transition-colors duration-400 hover:text-teal"
                  >
                    Knowledge Repository
                  </Link>
                </li>
                <li aria-hidden className="text-ink/25">
                  /
                </li>
                <li aria-current="page" className="text-ink/70">
                  {insight.category}
                </li>
              </ol>
            </nav>

            <SplitText
              as="h1"
              text={insight.title}
              className="display-1 mt-7 max-w-4xl capitalize text-ink"
            />

            <Reveal delay={1} className="mt-10 overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
              <div className="relative aspect-[16/8]">
                <Image
                  src={insight.image}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1216px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal
              delay={2}
              className="mt-8 flex flex-wrap items-center justify-between gap-x-10 gap-y-4 border-y border-ink/10 py-5"
            >
              <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {metrics.map(({ icon: Icon, value, label }) => (
                  <li key={label} className="flex items-center gap-2.5 text-[0.9375rem] text-ink/65">
                    <Icon className="size-[18px] text-teal" />
                    <span className="font-semibold text-ink">{value}</span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.875rem] text-ink/55">
                <span>{insight.date}</span>
                <span aria-hidden className="size-1 rounded-full bg-ink/25" />
                <span>{insight.readTime}</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-cream pb-24 pt-14 md:pb-32">
          <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] xl:gap-16">
            <div>
              <ArticleReader>
                <ArticleBody blocks={insight.body} />
              </ArticleReader>
              <ShareRow url={canonical} title={insight.title} />
            </div>

            <RelatedRail insights={related} />
          </div>
        </section>
      </article>

      <section className="bg-sand-soft/50 py-20 md:py-28">
        <div className="container-page">
          <p className="eyebrow text-teal">Continue reading</p>
          <SplitText
            as="h2"
            text="More from the Knowledge Repository"
            className="display-3 mt-4 max-w-2xl capitalize text-ink"
          />
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {continueReading.map((entry, index) => (
              <Reveal key={entry.slug} delay={index}>
                <InsightCard insight={entry} tone="white" />
              </Reveal>
            ))}
          </div>
          <Reveal delay={3} className="mt-12">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-teal transition-colors duration-500 ease-[var(--ease-out-expo)] hover:text-teal-deep"
            >
              View every article
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Have a question about something you read?"
        body="This article is general in nature and is not advice on your matter. If it touches a decision you are facing, speak to us and we will look at your facts."
        cta="Talk To Our Team"
        href="/contact"
      />
    </>
  );
}
