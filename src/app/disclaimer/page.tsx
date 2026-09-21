import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import PolicyDocument, { type PolicySection } from "@/components/legal/PolicyDocument";

const UPDATED = "21 September 2026";
const linkClass =
  "text-teal underline decoration-teal/35 underline-offset-4 transition-colors duration-300 hover:text-teal-deep hover:decoration-teal";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Terms on which ${site.name} makes information available through this website: no advertisement or solicitation under the Bar Council of India Rules, no lawyer-client relationship, and no reliance as legal advice.`,
  alternates: { canonical: "/disclaimer" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Disclaimer — ${site.name}`,
    description:
      "The basis on which information is published here, and the limits of what it can be used for.",
    url: `${site.url}/disclaimer`,
  },
};

const sections: PolicySection[] = [
  {
    id: "bar-council-rules",
    title: "As per the rules of the Bar Council of India",
    body: (
      <>
        <p>
          The Bar Council of India does not permit advertisement or solicitation of work by
          advocates in any form. Rule 36 of the Bar Council of India Rules, read with Section 49(1)
          of the Advocates Act, 1961, restricts what an advocate or a firm of advocates may publish
          about itself. This website has been prepared with those restrictions in mind.
        </p>
        <p>
          By accessing this website, you acknowledge and confirm that you are seeking information
          about {site.name} of your own accord, and that:
        </p>
        <ul>
          <li>
            there has been no advertisement, personal communication, solicitation, invitation or
            inducement of any kind from the firm or any of its members to solicit work through this
            website;
          </li>
          <li>
            you wish to gain more information about the firm for your own information and use;
          </li>
          <li>
            the information about the firm is provided only on your specific request, and any
            material you download from this site is downloaded entirely at your discretion;
          </li>
          <li>
            no information on this website should be construed as legal advice, and the firm is not
            liable for any consequence of any action taken in reliance on it.
          </li>
        </ul>
        <p>
          The same acknowledgement is presented when you first arrive at the site. Recording it is
          a matter of compliance, not of contract: it does not create any obligation on your part
          and does not engage the firm.
        </p>
      </>
    ),
  },
  {
    id: "purpose-of-this-website",
    title: "Purpose of this website",
    body: (
      <>
        <p>
          This website exists so that a person who already wishes to know about the firm can find
          out who we are, what areas of law we work in, and how to get in touch. It is a description
          of a practice, not an offer of services, and it makes no claim about the quality of our
          work or the outcome of any matter.
        </p>
        <p>
          Nothing published here — including practice-area descriptions, illustrative mandates,
          articles, and any figures relating to the firm&rsquo;s experience — should be read as a
          promise, a guarantee, a warranty, or a prediction. Past matters are described in general
          terms and do not indicate what will happen in yours. Every matter turns on its own facts.
        </p>
      </>
    ),
  },
  {
    id: "no-legal-advice",
    title: "No legal advice",
    body: (
      <>
        <p>
          The content of this website is general information prepared for a general audience. It is
          not legal advice, it is not a substitute for legal advice, and it must not be relied upon
          as either. Legal advice requires the facts of a specific situation, the documents that
          record it, and an assessment of the law as it stands at the relevant time.
        </p>
        <p>
          The law in India changes, and material published here may become out of date without
          being amended. Where an article carries a date, it reflects the position on that date
          only. The firm assumes no obligation to update any page.
        </p>
        <p>
          <strong>
            Do not act, or refrain from acting, on anything you read on this website without taking
            advice on your own circumstances from a qualified advocate.
          </strong>{" "}
          To the fullest extent permitted by law, the firm, its partners, associates and employees
          disclaim all liability for any loss or damage arising from any use of, or reliance on, the
          contents of this website.
        </p>
      </>
    ),
  },
  {
    id: "no-lawyer-client-relationship",
    title: "No lawyer–client relationship",
    body: (
      <>
        <p>
          Reading this website, downloading material from it, subscribing to anything on it, or
          sending us a message through the enquiry form or by email does not create a
          lawyer&ndash;client relationship between you and {site.name}.
        </p>
        <p>
          A relationship arises only when the firm has completed a conflicts check, confirmed in
          writing that it is able and willing to act, and agreed the scope of the work and the basis
          of its fees with you. Until that happens, we are not your lawyers and we owe you no duty
          in respect of your matter.
        </p>
        <p>
          It follows that you should <strong>not send us confidential or privileged material</strong>{" "}
          through this website. Information sent before an engagement is confirmed may not attract
          professional privilege, and — because we may already act for another party with an adverse
          interest — we cannot undertake to treat unsolicited material as confidential. Please send
          a short description of the subject matter first, and wait for our reply before sending
          documents.
        </p>
        <p>
          Nothing on this site should be taken as an invitation or inducement to engage the firm.
          Time limits apply to most legal claims in India; delay caused by waiting for a response
          from us is not a ground on which the firm accepts responsibility.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-party links and content",
    body: (
      <>
        <p>
          This website contains links to external sites — statutes and judgments on official
          repositories, the Bar Council of India, professional bodies, and similar sources. Those
          links are provided for convenience only.
        </p>
        <p>
          The firm does not control, monitor, endorse or accept responsibility for the content,
          accuracy, availability or privacy practices of any external site, and a link should not be
          read as approval of the organisation behind it. Once you follow a link you are governed by
          the terms and the privacy policy of that site, not by ours.
        </p>
        <p>
          Where we quote or summarise legislation, rules, or a judgment, we do so in our own words
          for the reader&rsquo;s convenience. The official text prevails over anything said here.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <>
        <p>
          The text, layout, photographs, graphics and name appearing on this website belong to{" "}
          {site.name} or are used under licence. You may read, print and copy this material for your
          own personal, non-commercial reference.
        </p>
        <p>
          You may not reproduce, republish, distribute, adapt, or use any part of this website for
          commercial purposes, or hold yourself out as connected with the firm, without our prior
          written permission.
        </p>
      </>
    ),
  },
  {
    id: "jurisdiction",
    title: "Governing law and jurisdiction",
    body: (
      <>
        <p>
          This disclaimer, and any dispute or claim arising out of or in connection with this
          website or its contents, is governed by the laws of India.
        </p>
        <p>
          The courts at Kolkata, West Bengal have exclusive jurisdiction over any such dispute or
          claim, and you submit to that jurisdiction by using this website. The firm makes no
          representation that the material on this site is appropriate, or available for use, in any
          jurisdiction outside India; where access from a particular jurisdiction would be contrary
          to law, it is not offered.
        </p>
        <p>
          Our lawyers are enrolled with the relevant State Bar Council in India and practise Indian
          law. We do not hold ourselves out as qualified to advise on the law of any other country.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Questions about this notice",
    body: (
      <>
        <p>
          If anything in this notice is unclear, or you believe any page on this website is
          inaccurate or out of date, please write to us and we will look into it.
        </p>
        <ul>
          <li>
            <strong>{site.name}</strong>
          </li>
          <li>{site.address}</li>
          <li>
            Email:{" "}
            <a href={`mailto:${site.email}`} className={linkClass}>
              {site.email}
            </a>
          </li>
          <li>
            Telephone:{" "}
            <a href={site.phoneHref} className={linkClass}>
              {site.phone}
            </a>
          </li>
          <li>Office hours: {site.hours}</li>
        </ul>
        <p>
          The Bar Council of India Rules may be read in full on the{" "}
          <a
            href="https://www.barcouncilofindia.org/"
            target="_blank"
            rel="noreferrer noopener"
            className={linkClass}
          >
            Bar Council of India website
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function DisclaimerPage() {
  return (
    <PolicyDocument
      eyebrow="Legal Notice"
      title="Disclaimer"
      lede="The basis on which information is published on this website, and the limits of what it may be used for."
      updated={UPDATED}
      sections={sections}
      footnote={
        <>
          For how we handle personal data submitted through this website, see our{" "}
          <Link href="/privacy-policy" className={linkClass}>
            privacy policy
          </Link>
          .
        </>
      }
    />
  );
}
