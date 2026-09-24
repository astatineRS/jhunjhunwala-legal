import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import PolicyDocument, { type PolicySection } from "@/components/legal/PolicyDocument";

const UPDATED = "21 September 2026";
const linkClass = "text-teal underline decoration-teal/35 underline-offset-4 transition-colors duration-300 hover:text-teal-deep hover:decoration-teal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, stores and protects personal data submitted through this website, and the rights available to data principals under the Digital Personal Data Protection Act, 2023.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Privacy Policy | ${site.name}`,
    description:
      "What this website collects, why, how long it is kept, and the rights you hold over it.",
    url: `${site.url}/privacy-policy`,
  },
};

const sections: PolicySection[] = [
  {
    id: "scope",
    title: "Scope of this notice",
    body: (
      <>
        <p>
          This notice explains how {site.name} (&ldquo;the firm&rdquo;, &ldquo;we&rdquo;) handles
          personal data collected through <strong>{site.url.replace("https://", "")}</strong>. It
          covers the website only.
        </p>
        <p>
          Personal data you give us in the course of an engagement (instructions, documents,
          correspondence and matter records) is governed by our engagement terms and by the
          professional obligations of confidentiality and privilege that apply to advocates in
          India. Those obligations are stricter than this notice and are not displaced by it.
        </p>
        <p>
          The firm is the data fiduciary for the information described here. Our contact details,
          including those of the person who handles privacy queries, are set out at the end of this
          notice.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <h3>Information you provide deliberately</h3>
        <p>
          The enquiry form on our contact page asks for your first name, last name, email address,
          telephone number, organisation, the area of law your query concerns, and a description of
          what you would like help with. Only the first name, email address and description are
          required; the remaining fields exist because they usually shorten our first reply.
        </p>
        <p>
          If you write to us by email, telephone us, or apply for a role advertised on our careers
          page, we hold what you send, including any attachments, curriculum vitae, or documents
          you choose to share.
        </p>
        <h3>Information collected automatically</h3>
        <p>
          Our hosting provider records standard server logs for every request: the IP address, the
          date and time, the page requested, the referring page where one is sent, and the browser
          and operating system reported by your device. These logs exist for security and fault
          diagnosis.
        </p>
        <p>
          We also use a privacy-oriented analytics measure that reports aggregate page views,
          approximate country, referral source and device category. It does not build a profile of
          you, follow you across other websites, or attempt to identify you.
        </p>
        <h3>What we do not collect</h3>
        <ul>
          <li>
            We do not ask for, and would prefer you did not send, financial account details,
            government identifiers, or health information through the website.
          </li>
          <li>
            We do not buy personal data from third parties, and we do not sell, rent or licence
            yours to anyone.
          </li>
          <li>
            We do not run advertising or retargeting pixels, and we do not track you for marketing
            purposes.
          </li>
        </ul>
        <p>
          Please do not use the website to send us confidential or privileged material about a live
          dispute. Until we have confirmed that we are able to act, which requires a conflicts
          check, such material is not protected by the professional privilege that would otherwise
          attach to it.
        </p>
      </>
    ),
  },
  {
    id: "why-we-use-it",
    title: "Why we use it",
    body: (
      <>
        <p>We use the information described above for the following purposes, and no others:</p>
        <ul>
          <li>
            <strong>To respond to you.</strong> To identify which of our lawyers should read your
            enquiry, to reply to it, and to arrange a consultation where one is appropriate.
          </li>
          <li>
            <strong>To carry out conflicts and eligibility checks.</strong> Before the firm can act
            on any matter we must confirm that we do not already act against the interests of a
            party involved.
          </li>
          <li>
            <strong>To keep a record of professional correspondence.</strong> Enquiries we decline
            are recorded so that we can explain, if it is ever asked, what we were told and what we
            said in reply.
          </li>
          <li>
            <strong>To maintain and secure the website.</strong> To diagnose errors, to understand
            which pages are read, and to detect abuse or attempted intrusion.
          </li>
          <li>
            <strong>To meet legal and regulatory obligations.</strong> Including any obligation to
            retain records or to respond to a lawful order of a court or competent authority.
          </li>
        </ul>
        <p>
          We do not send marketing emails. The Bar Council of India&rsquo;s rules prohibit an
          advocate from soliciting work, and we treat your contact details accordingly: they are
          used to answer you, not to approach you.
        </p>
      </>
    ),
  },
  {
    id: "lawful-basis",
    title: "Lawful basis for processing",
    body: (
      <>
        <p>
          Under the Digital Personal Data Protection Act, 2023 (&ldquo;the DPDP Act&rdquo;) personal
          data may be processed for a lawful purpose for which you have given consent, or for
          certain legitimate uses specified in the Act. We rely on both, as follows.
        </p>
        <ul>
          <li>
            <strong>Consent.</strong> When you submit the enquiry form or write to us, you do so
            voluntarily and for the specific purpose of obtaining a response. That is the basis on
            which we process what you send. Consent given for this purpose may be withdrawn at any
            time; see <em>Your rights</em> below.
          </li>
          <li>
            <strong>Voluntary provision for a specified purpose.</strong> Where you provide details
            to us for a purpose you have identified and have not indicated that you object to their
            use for that purpose, we may process them for it, for example, acting on a request to
            call you back.
          </li>
          <li>
            <strong>Compliance with law.</strong> Where retention or disclosure is required by a
            statute, a judgment, a decree, or an order of a court, tribunal or regulator.
          </li>
        </ul>
        <p>
          Server logs and aggregate analytics do not, in the ordinary course, identify you. Where
          such data can be linked to an identifiable individual, we treat it under this notice on
          the same terms as anything else.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <>
        <ul>
          <li>
            <strong>Enquiries that do not become engagements:</strong> retained for three years from
            the date of the last correspondence, then deleted. This period reflects the limitation
            window within which a question about the advice we gave, or declined to give, could
            still arise.
          </li>
          <li>
            <strong>Enquiries that become engagements:</strong> merged into the matter file and
            retained under our engagement terms and the record-keeping obligations that apply to the
            practice.
          </li>
          <li>
            <strong>Recruitment applications:</strong> retained for twelve months from the date of
            the decision unless you ask us to keep them on file for longer.
          </li>
          <li>
            <strong>Server logs:</strong> retained for ninety days.
          </li>
          <li>
            <strong>Aggregate analytics:</strong> retained indefinitely in aggregate form, which
            does not identify individuals.
          </li>
        </ul>
        <p>
          Where the DPDP Act or any rule made under it requires erasure at an earlier point, that
          requirement prevails over the periods above.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>
          We share personal data only where it is necessary, and only with the following
          categories of recipient:
        </p>
        <ul>
          <li>
            <strong>Lawyers and staff of the firm</strong> who need it to consider or act on your
            matter.
          </li>
          <li>
            <strong>Service providers acting as data processors:</strong> our website host, email
            provider and document storage provider. Each is engaged under contractual terms that
            restrict them to processing on our instructions and require appropriate security
            measures.
          </li>
          <li>
            <strong>Counsel, experts, or co-counsel</strong> instructed on a matter, where you have
            engaged us and such instruction is part of the work.
          </li>
          <li>
            <strong>Courts, tribunals, regulators and other authorities</strong> where disclosure is
            compelled by law or is necessary to establish, exercise or defend a legal claim.
          </li>
        </ul>
        <p>
          Some of these providers operate infrastructure outside India. Where personal data is
          processed outside India, it is transferred only to countries not restricted for that
          purpose by the Central Government under the DPDP Act, and only under contractual terms
          that hold the provider to the standards described in this notice.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "How we protect it",
    body: (
      <>
        <p>
          The website is served only over HTTPS. Access to enquiry records and matter files is
          restricted to the people within the firm who need it, protected by individual accounts and
          multi-factor authentication, and reviewed periodically. Devices used for firm work are
          encrypted at rest.
        </p>
        <p>
          Everyone at the firm, including interns and administrative staff, is bound by written
          confidentiality obligations that survive the end of their association with us.
        </p>
        <p>
          If a personal data breach occurs that affects you, we will notify the Data Protection
          Board of India and the affected individuals in the manner and within the time required
          under the DPDP Act and the rules made under it. No system is beyond compromise, and we do
          not claim otherwise; what we undertake is to tell you promptly and honestly if something
          goes wrong.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights as a data principal",
    body: (
      <>
        <p>
          The DPDP Act gives you the following rights in respect of personal data we hold about you.
          You may exercise any of them by writing to us at the address in the final section.
        </p>
        <ul>
          <li>
            <strong>Right to information.</strong> To obtain a summary of the personal data we hold
            about you, the processing activities undertaken with it, and the identities of other
            data fiduciaries and processors with whom it has been shared.
          </li>
          <li>
            <strong>Right to correction and erasure.</strong> To have inaccurate or misleading data
            corrected, incomplete data completed, data updated, and data erased where it is no
            longer necessary for the purpose it was collected for and no legal obligation requires
            us to keep it.
          </li>
          <li>
            <strong>Right to withdraw consent.</strong> To withdraw consent as easily as it was
            given. Withdrawal stops future processing that relied on that consent; it does not undo
            processing already carried out, and it does not affect retention required by law.
          </li>
          <li>
            <strong>Right to grievance redressal.</strong> To complain to us about how we have
            handled your data or a request, before approaching the Data Protection Board of India.
          </li>
          <li>
            <strong>Right to nominate.</strong> To nominate another individual to exercise these
            rights on your behalf in the event of your death or incapacity.
          </li>
        </ul>
        <p>
          We acknowledge requests within three working days and answer them substantively within
          thirty days. Where we need to verify that a request comes from you, we will ask for
          whatever is proportionate to establish that and nothing more. If we decline a request, we
          will tell you why, and we will tell you how to escalate it.
        </p>
        <p>
          Two duties also sit with you under the Act: requests must be made in good faith, and the
          information you give us in support of one must be authentic. Frivolous or false complaints
          are subject to penalty under the Act.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    body: (
      <>
        <p>
          This website sets no advertising, profiling or cross-site tracking cookies. What it does
          store on your device is limited to the following:
        </p>
        <ul>
          <li>
            <strong>A disclaimer acknowledgement.</strong> When you accept the Bar Council of India
            notice shown on your first visit, we record that acceptance in your browser&rsquo;s
            local storage so that it is not shown again. It contains a single value and no
            identifier.
          </li>
          <li>
            <strong>Strictly necessary operational storage.</strong> Short-lived values used to
            serve the site correctly, including protection against cross-site request forgery.
          </li>
        </ul>
        <p>
          You can clear local storage and cookies at any time through your browser settings. Doing
          so will cause the first-visit disclaimer to appear again. Our analytics measure does not
          rely on a cookie and is not affected.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children and persons under guardianship",
    body: (
      <>
        <p>
          The website is intended for adults seeking legal assistance and is not directed at
          children. We do not knowingly collect personal data of a child through it, and we do not
          undertake any tracking, behavioural monitoring or targeted advertising directed at
          children, all of which the DPDP Act prohibits.
        </p>
        <p>
          Where a matter genuinely concerns a child or a person with a disability who has a lawful
          guardian, we take instructions from the parent or guardian and obtain verifiable consent
          from them before processing the individual&rsquo;s personal data. If you believe a child
          has sent us personal data through this website, please write to us and we will delete it.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this notice",
    body: (
      <>
        <p>
          We revise this notice when our practice changes or when the law does. The date at the top
          of the page is the date of the version you are reading. Where a change materially affects
          how we use personal data already collected, we will place a notice on this page and, where
          we hold your contact details for the purpose, write to you.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contacting us",
    body: (
      <>
        <p>
          Privacy queries, data-principal requests and grievances should be addressed to the
          partner responsible for data protection at the firm:
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
          If you are not satisfied with our response, you may complain to the Data Protection Board
          of India in the manner prescribed under the Digital Personal Data Protection Act, 2023.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PolicyDocument
      eyebrow="Privacy"
      title="Privacy Policy"
      lede="What this website collects, why we collect it, how long we keep it, and the rights you hold over it under India's data protection law."
      updated={UPDATED}
      sections={sections}
      footnote={
        <>
          This notice is provided for information. It is not legal advice, and nothing in it creates
          a lawyer&ndash;client relationship between you and the firm. Please also read our{" "}
          <Link href="/disclaimer" className={linkClass}>
            disclaimer
          </Link>
          .
        </>
      }
    />
  );
}
