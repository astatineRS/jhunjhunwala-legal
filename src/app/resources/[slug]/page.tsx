import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import InsightCard from "@/components/cards/InsightCard";
import ArticleBody from "@/components/resources/ArticleBody";
import ArticleReader from "@/components/resources/ArticleReader";
import ShareRow from "@/components/resources/ShareRow";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import { ClockIcon, CommentIcon, EyeIcon, ShareIcon } from "@/components/ui/icons";
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

  const related = getRelatedInsights(slug, 6);
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

      <section className="bg-cream pb-24 pt-[calc(var(--header-h)+3.5rem)] md:pb-32">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_320px] xl:gap-16">
          <article>
            <SplitText
              as="h1"
              text={insight.title}
              className="display-1 text-balance-pretty text-ink"
            />

            <Reveal
              delay={1}
              className="mt-10 overflow-hidden rounded-[var(--radius-card)]"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={insight.image}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 880px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal
              delay={2}
              className="mt-8 flex flex-wrap items-center justify-between gap-x-10 gap-y-4"
            >
              <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
                {metrics.map(({ icon: Icon, value, label }) => (
                  <li key={label} className="flex items-center gap-2.5 text-[1.0625rem] text-ink">
                    <Icon className="size-[19px] text-teal" />
                    <span>{value}</span>
                    <span className="sr-only">{label}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[1.0625rem] text-ink/60">
                <span>{insight.date}</span>
                <span className="flex items-center gap-2.5 capitalize text-ink">
                  <ClockIcon className="size-[19px] text-teal" />
                  {insight.readTime}
                </span>
              </div>
            </Reveal>

            <div className="mt-10">
              <ArticleReader>
                <ArticleBody blocks={insight.body} />
              </ArticleReader>
            </div>

            <ShareRow url={canonical} title={insight.title} />
          </article>

          <aside aria-label="Related articles" className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <h2 className="sr-only">Related articles</h2>
            {related.map((entry, index) => (
              <Reveal key={entry.slug} delay={index % 3}>
                <InsightCard insight={entry} />
              </Reveal>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
