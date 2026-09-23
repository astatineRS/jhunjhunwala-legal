export type KeyService = { name: string; description: string };

export type PracticeArea = {
  slug: string;
  title: string;
  short: string;
  teaser: string;
  intro: string[];
  keyServices: KeyService[];
  image: string;
  journey: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-and-commercial",
    title: "Corporate & Commercial",
    short: "Corporate & Commercial",
    teaser:
      "Corporate structuring, compliance, governance and ongoing business counsel.",
    journey: "Set Up",
    image: "/images/practice/practice-01.jpg",
    intro: [
      "Businesses face legal questions long before they face disputes. How a company is incorporated, who controls it, how decisions are recorded and how obligations are documented all shape what happens later.",
      "We advise promoters, boards and management teams on entity structuring, shareholder arrangements, statutory compliance and the routine corporate decisions that keep a business on stable ground.",
      "Our approach is preventive. We would rather help you document a decision properly today than argue about it in three years.",
    ],
    keyServices: [
      { name: "Incorporation & Entity Setup", description: "Company and LLP incorporation, and the establishment of wholly owned subsidiaries with the governance that suits your plans." },
      { name: "Corporate Structuring & Restructuring", description: "Corporate structuring and restructuring of holdings, group entities and internal reorganisations." },
      { name: "Corporate Governance", description: "Board process, delegation of authority and the records that evidence sound decision-making." },
      { name: "Corporate Compliance", description: "Corporate compliance obligations and general corporate matters that arise through the year." },
      { name: "Foreign Entry & India Market Entry", description: "Foreign company entry into India and India market entry, including the structure and approvals each route requires." },
      { name: "Corporate Documentation", description: "Resolutions, registers, minutes and the wider corporate documentation that records how a company acts." },
      { name: "Commercial Contracts", description: "Contract drafting, review and vetting, and negotiation of NDAs, consultancy, service, vendor, customer and other business and commercial agreements." },
      { name: "Joint Ventures, Share Transfers & M&A", description: "Joint ventures, share transfers and M&A documentation, from first structure to signed papers." },
    ],
  },
  {
    slug: "startup-founder-and-investor-advisory",
    title: "Startup, Founder & Investor Advisory",
    short: "Startup & Founder Advisory",
    teaser:
      "Legal counsel for founders, startups, angel investors and portfolio businesses.",
    journey: "Structure",
    image: "/images/practice/practice-02.jpg",
    intro: [
      "Early-stage companies move quickly, and legal structure often lags behind the business. The cost of that gap usually appears at the next round, during diligence, or when a founder leaves.",
      "We work with founders and startups on formation and early-stage structuring, co-founder and shareholder arrangements, ESOP documentation and the legal health checks that keep a company fundable — keeping the paperwork honest about what was actually agreed.",
      "We also act on the other side of the table, advising angel investors and funds on their investments and supporting the portfolio businesses they back.",
    ],
    keyServices: [
      { name: "Startup Formation & Structuring", description: "Startup formation and structuring, and early-stage business structuring built to survive the next round." },
      { name: "Founder & Co-Founder Arrangements", description: "Co-founders' agreements, founder rights and obligations, and founder or shareholder arrangements." },
      { name: "Founder Exits", description: "Founder exits and the agreements that record separation, settlement and continuing obligations." },
      { name: "Angel & Investor Advisory", description: "Angel investor advisory, investor advisory and transactions, and portfolio company advisory." },
      { name: "Startup Legal Health Checks", description: "Startup legal health checks that surface gaps in records, contracts and equity before an investor finds them." },
      { name: "ESOP Documentation", description: "ESOP-related documentation, from pool creation and grant letters to vesting and exercise mechanics." },
      { name: "Ongoing Legal Counsel", description: "Legal advisory for founders and businesses as a standing engagement, with ongoing legal counsel on the questions that arise week to week." },
    ],
  },
  {
    slug: "investment-and-transactional-advisory",
    title: "Investment & Transactional Advisory",
    short: "Investment & Transactions",
    teaser:
      "Fundraising, investments, due diligence, SHA, SSA, SPA and transaction execution.",
    journey: "Fund",
    image: "/images/practice/practice-03.jpg",
    intro: [
      "Transactions concentrate risk into a short window. Diligence findings, indemnity limits, conditions precedent and closing sequence decide how much of that risk you actually carry.",
      "We advise on fundraising and investment transactions — angel, seed and venture capital rounds, primary and secondary share transactions — from the first term sheet through to post-closing obligations, with a focus on what the documents will mean if the relationship sours.",
      "Our diligence reports are written to be used: issues ranked by consequence, with a recommended contractual response for each.",
    ],
    keyServices: [
      { name: "Fundraising & Investment Transactions", description: "Fundraising and investment transactions across angel, seed and venture capital rounds, including primary and secondary transactions." },
      { name: "Term Sheets & Investment Agreements", description: "Term sheets and investment agreements, translating economic and control terms into their practical consequences before you sign." },
      { name: "Investment & Transaction Structuring", description: "Investment structuring and transaction structuring with regard to control, liability and approvals." },
      { name: "Legal Due Diligence", description: "Legal due diligence on a target or on your own company, reported by consequence rather than by volume." },
      { name: "Transaction Documentation", description: "Share subscription agreements, share purchase agreements, shareholders' agreements, share transfer documentation and the wider transaction documentation set." },
      { name: "Investor Protections & Risk Allocation", description: "Representations and warranties, indemnities, conditions precedent and subsequent, and investor rights." },
      { name: "Negotiation, Closing & Exit", description: "Transaction negotiation and closing, and exit and liquidity documentation when the time comes to realise value." },
    ],
  },
  {
    slug: "commercial-contracts",
    title: "Commercial Contracts",
    short: "Commercial Contracts",
    teaser:
      "Drafting, reviewing and negotiating contracts that support day-to-day business.",
    journey: "Contract",
    image: "/images/practice/practice-01.jpg",
    intro: [
      "Most commercial risk is created, allocated or avoided in a contract. Payment terms, liability caps, termination rights and service levels decide who absorbs a problem when one occurs.",
      "We draft and negotiate the full range of commercial agreements — services, consultancy, vendor, agency, SaaS, licensing, technology and collaboration arrangements — and build contract templates that a team can actually use without calling a lawyer every time.",
      "Where a contract already exists, we review it for the exposure that matters and tell you plainly what is worth renegotiating.",
    ],
    keyServices: [
      { name: "Drafting, Review & Vetting", description: "Commercial agreement drafting, agreement review and vetting, and the business, commercial and other documentation a company runs on." },
      { name: "Negotiation & Contract Management", description: "Contract negotiation and contract management, including renewals, obligations and the records that track them." },
      { name: "Confidentiality & Engagement Agreements", description: "NDAs and confidentiality agreements, consultancy agreements and service agreements." },
      { name: "Vendor, Agency & Customer Agreements", description: "Vendor agreements, agency agreements, and SaaS and customer agreements." },
      { name: "Partnership & Collaboration Agreements", description: "Partnership and collaboration agreements, including contribution, revenue and separation terms." },
      { name: "Technology & Licensing Agreements", description: "Technology agreements and licensing agreements, covering scope, ownership of developments and support obligations." },
      { name: "Master Service Agreements & SOWs", description: "Master service agreements and statements of work, with change control and acceptance that hold up in practice." },
      { name: "Website & Platform Terms", description: "Terms and conditions, privacy policies and cookie policies for websites and digital products." },
    ],
  },
  {
    slug: "employment-and-labour",
    title: "Employment & Labour",
    short: "Employment & Labour",
    teaser:
      "Employment documentation, workplace policies, compliance, exits and workplace disputes.",
    journey: "Grow",
    image: "/images/practice/practice-02.jpg",
    intro: [
      "Employment issues are rarely only legal. They involve people, evidence, timing and the credibility of the process that was followed.",
      "We advise employers on contracts and policies, statutory compliance, restructuring and separations, and on handling workplace complaints — including POSH matters — with a defensible process.",
      "We also advise senior executives on their own arrangements, from offer terms to negotiated exits.",
    ],
    keyServices: [
      { name: "Employment Documentation", description: "Employment agreements, and offer and appointment letters that say what the arrangement actually is." },
      { name: "Confidentiality & Restrictive Covenants", description: "Employee NDAs and confidentiality undertakings, and non-compete and non-solicit arrangements." },
      { name: "Consultants & Classification", description: "Consultancy and independent contractor agreements, and employee or consultant classification." },
      { name: "Policies & Handbooks", description: "Employment policies and handbooks, and the workplace policies that support them." },
      { name: "ESOP & Incentive Documentation", description: "ESOP and employee incentive documentation, from grant terms to vesting and exercise." },
      { name: "Employment & Labour Compliance", description: "HR and employment compliance, and labour law compliance across registrations, returns and statutory obligations." },
      { name: "Exits, Termination & Settlement", description: "Termination and separation documentation, full and final settlement documentation, and employee exit and separation advisory." },
      { name: "Disputes, Investigations & POSH", description: "Employment-related notices, employment disputes, workplace investigations, and POSH compliance and documentation." },
    ],
  },
  {
    slug: "data-privacy-and-technology",
    title: "Data Privacy & Technology",
    short: "Data Privacy & Technology",
    teaser:
      "DPDP, GDPR, privacy, technology contracts and platform compliance.",
    journey: "Protect",
    image: "/images/practice/practice-03.jpg",
    intro: [
      "Data obligations now sit inside ordinary business decisions: which vendor to use, where data is stored, what a consent notice says, and how a platform collects information from its users.",
      "We advise on the Digital Personal Data Protection Act and allied Indian rules, and on cross-border frameworks such as the GDPR where they apply to Indian operations.",
      "We translate the compliance requirement into documents and processes the business can run — not a policy binder nobody opens.",
    ],
    keyServices: [
      { name: "DPDP & GDPR Compliance", description: "DPDP Act compliance and GDPR compliance for Indian and cross-border operations." },
      { name: "Data Privacy Advisory", description: "Data privacy advisory on consent, notice, retention and data principal rights in day-to-day operations." },
      { name: "Assessments & Data Mapping", description: "Privacy compliance assessment and data mapping to establish what data you hold and on what basis." },
      { name: "Privacy Policies & User Terms", description: "Privacy policies, cookie policies, and terms of use or terms of service." },
      { name: "Data Processing & Protection Agreements", description: "Data processing documentation and data protection agreements with vendors, processors and partners." },
      { name: "Technology Contracts & Advisory", description: "Technology contracts and technology business advisory across products, platforms and service arrangements." },
      { name: "Website, Platform & App Compliance", description: "Platform and mobile app legal compliance, and website legal compliance." },
      { name: "Privacy Implementation", description: "Privacy documentation and implementation advisory, taking a policy from drafting to operational practice." },
    ],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    short: "Intellectual Property",
    teaser:
      "Trademark, copyright, patent and broader IP protection and commercialisation.",
    journey: "Transact",
    image: "/images/practice/practice-01.jpg",
    intro: [
      "For many businesses the brand, the codebase and the content are the balance sheet. They are also the assets most often left undocumented.",
      "We advise on trademark, copyright and patent protection, on ownership of work created by employees and contractors, and on assignment and licensing arrangements that put an IP asset to commercial use.",
      "Where a right is tested, we assess its strength and the quality of its documentation before recommending a course of action.",
    ],
    keyServices: [
      { name: "Trademark Protection & Registration", description: "Trademark protection and registration, from availability and classification through to prosecution and renewal." },
      { name: "Copyright Protection & Registration", description: "Copyright protection and registration for creative, written and software work." },
      { name: "Patent Advisory & Grant", description: "Patent advisory and protection, and the process through to patent grant." },
      { name: "IP Ownership & Assignment", description: "IP ownership and IP assignment, ensuring employee, contractor and agency work vests where it should." },
      { name: "IP Licensing & Commercialisation", description: "IP licensing and IP-related commercial agreements covering scope, territory, exclusivity and royalties." },
      { name: "IP Documentation", description: "IP documentation that records what you own, how it arose and who may use it." },
      { name: "Brand Protection", description: "Brand protection across portfolio planning, monitoring and the steps taken when a mark is misused." },
    ],
  },
  {
    slug: "pre-litigation-and-dispute-resolution",
    title: "Pre-Litigation & Dispute Resolution",
    short: "Pre-Litigation & Disputes",
    teaser:
      "Legal notices, commercial disputes, recovery and pre-litigation strategy.",
    journey: "Exit / Resolve",
    image: "/images/practice/practice-03.jpg",
    intro: [
      "Disputes can have significant legal, financial, and commercial consequences. We advise clients from the early stages of a potential dispute, helping them understand their legal position, assess available options, and determine an appropriate course of action before matters escalate.",
      "Our work covers legal notices, negotiation and settlement, recovery and contract enforcement, and pre-litigation strategy across a range of commercial and contractual disputes. We focus on understanding the underlying issues and objectives of each matter, while providing clear advice on the risks, practical considerations, and possible routes toward resolution.",
      "Whether a dispute is emerging or already underway, we work closely with clients to develop a considered approach that protects their interests and supports an effective resolution.",
    ],
    keyServices: [
      { name: "Pre-Litigation Advisory", description: "Pre-litigation advisory on legal position, risk and the options available before formal proceedings begin." },
      { name: "Legal Notices", description: "Legal notices and responses that communicate your position and the relevant legal issues clearly." },
      { name: "Dispute Strategy", description: "Dispute strategy built around the strengths, risks and practical considerations of the matter and the client's objectives." },
      { name: "Commercial & Contractual Disputes", description: "Commercial disputes and contractual disputes arising from business relationships, transactions, payments and performance." },
      { name: "Recovery & Contract Enforcement", description: "Recovery matters and contract enforcement where obligations have not been met." },
      { name: "Negotiation & Settlement", description: "Negotiation and settlement with counterparties, and commercial settlement documentation that records the outcome." },
      { name: "Pre-Litigation Representation", description: "Pre-litigation representation in correspondence, meetings and discussions with the other side." },
    ],
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}

export function getOtherPracticeAreas(slug: string, count = 3) {
  const index = practiceAreas.findIndex((area) => area.slug === slug);
  const rotated = [...practiceAreas.slice(index + 1), ...practiceAreas.slice(0, Math.max(index, 0))];
  return rotated.filter((area) => area.slug !== slug).slice(0, count);
}
