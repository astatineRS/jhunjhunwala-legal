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
      "Day-to-day corporate advice, governance and entity management for businesses at every stage of growth.",
    journey: "Set Up",
    image: "/images/practice/practice-01.jpg",
    intro: [
      "Businesses face legal questions long before they face disputes. How a company is incorporated, who controls it, how decisions are recorded and how obligations are documented all shape what happens later.",
      "We advise promoters, boards and management teams on entity structuring, shareholder arrangements, statutory compliance and the routine corporate decisions that keep a business on stable ground.",
      "Our approach is preventive. We would rather help you document a decision properly today than argue about it in three years.",
    ],
    keyServices: [
      { name: "Entity Structuring & Incorporation", description: "Selecting and setting up the right vehicle — private limited, LLP, partnership or subsidiary — with the governance that suits your plans." },
      { name: "Shareholder & Founder Agreements", description: "Documenting control, reserved matters, vesting, transfer restrictions and exit rights before they are tested." },
      { name: "Corporate Governance Advisory", description: "Board process, delegation of authority, related-party transactions and the records that evidence sound decision-making." },
      { name: "Secretarial & Statutory Compliance", description: "Ongoing filings, registers, resolutions and annual obligations under the Companies Act and allied rules." },
      { name: "Joint Ventures & Strategic Alliances", description: "Structuring collaborations, deadlock mechanics, contribution obligations and separation routes." },
      { name: "Restructuring & Reorganisation", description: "Group simplification, share transfers, capital reduction and internal reorganisations." },
      { name: "Business Closure & Exit", description: "Voluntary strike-off, winding up, and the sequencing of employee, tax and creditor obligations." },
      { name: "Ongoing Retainer Counsel", description: "A standing point of contact for the corporate questions that come up every week." },
    ],
  },
  {
    slug: "startup-founder-and-investor-advisory",
    title: "Startup, Founder & Investor Advisory",
    short: "Startup & Founder Advisory",
    teaser:
      "Cap tables, founder arrangements and fundraising support for early-stage companies and the people who back them.",
    journey: "Structure",
    image: "/images/practice/practice-02.jpg",
    intro: [
      "Early-stage companies move quickly, and legal structure often lags behind the business. The cost of that gap usually appears at the next round, during diligence, or when a founder leaves.",
      "We work with founders, angel investors and funds on incorporation, equity splits, ESOP design, convertible instruments and priced rounds — keeping the paperwork honest about what was actually agreed.",
      "We also act on the other side of the table, reviewing term sheets and transaction documents for investors who need a clear read on risk.",
    ],
    keyServices: [
      { name: "Founder & Co-Founder Agreements", description: "Roles, equity, vesting, IP assignment and what happens if someone walks away." },
      { name: "Cap Table & Equity Structuring", description: "Clean capitalisation records, share classes and dilution planning across rounds." },
      { name: "ESOP Design & Administration", description: "Pool sizing, grant letters, vesting schedules, exercise mechanics and tax touchpoints." },
      { name: "Term Sheet Negotiation", description: "Translating economic and control terms into their practical consequences before you sign." },
      { name: "SAFE, CCPS & Convertible Instruments", description: "Drafting and reviewing convertible paper, valuation caps, discounts and conversion triggers." },
      { name: "Seed to Series Documentation", description: "Share subscription and shareholders' agreements, disclosure schedules and closing mechanics." },
      { name: "Investor Diligence Support", description: "Preparing a company for diligence, or running legal diligence on a target." },
      { name: "Secondary Sales & Founder Liquidity", description: "Structuring partial exits and transfers with the consents they require." },
    ],
  },
  {
    slug: "investment-and-transactional-advisory",
    title: "Investment & Transactional Advisory",
    short: "Investment & Transactions",
    teaser:
      "Diligence, deal documentation and closing support across acquisitions, investments and asset transfers.",
    journey: "Fund",
    image: "/images/practice/practice-03.jpg",
    intro: [
      "Transactions concentrate risk into a short window. Diligence findings, indemnity limits, conditions precedent and closing sequence decide how much of that risk you actually carry.",
      "We advise on acquisitions, investments, slump sales and asset transfers — from the first term sheet through to post-closing obligations — with a focus on what the documents will mean if the relationship sours.",
      "Our diligence reports are written to be used: issues ranked by consequence, with a recommended contractual response for each.",
    ],
    keyServices: [
      { name: "Legal Due Diligence", description: "Corporate, contractual, employment, IP, property and litigation review with a risk-ranked report." },
      { name: "Share & Asset Purchase Agreements", description: "Consideration mechanics, warranties, indemnities, escrow and post-closing covenants." },
      { name: "Business Transfer & Slump Sale", description: "Identifying transferring assets, liabilities, contracts and employees, and sequencing consents." },
      { name: "Transaction Structuring", description: "Choosing between share deals, asset deals and mergers with regard to liability and approvals." },
      { name: "Conditions Precedent Management", description: "Tracking approvals, consents and deliverables through to a clean closing." },
      { name: "Escrow & Deferred Consideration", description: "Structuring holdbacks, earn-outs and release mechanics that both sides can operate." },
      { name: "Post-Completion Integration", description: "Contract novations, employee transitions and statutory filings after closing." },
      { name: "Distressed & Special Situations", description: "Acquisitions where insolvency, disputes or regulatory issues sit in the background." },
    ],
  },
  {
    slug: "commercial-contracts",
    title: "Commercial Contracts",
    short: "Commercial Contracts",
    teaser:
      "Drafting, reviewing and negotiating the agreements a business depends on every day.",
    journey: "Contract",
    image: "/images/practice/practice-01.jpg",
    intro: [
      "Most commercial risk is created, allocated or avoided in a contract. Payment terms, liability caps, termination rights and service levels decide who absorbs a problem when one occurs.",
      "We draft and negotiate the full range of commercial agreements — supply, services, distribution, licensing, outsourcing, franchising — and build contract templates that a team can actually use without calling a lawyer every time.",
      "Where a contract already exists, we review it for the exposure that matters and tell you plainly what is worth renegotiating.",
    ],
    keyServices: [
      { name: "Contract Drafting & Review", description: "Bespoke agreements and plain-language review focused on commercial consequence." },
      { name: "Master Services & Supply Agreements", description: "Scope, service levels, acceptance, change control and remedies for failure." },
      { name: "Distribution, Agency & Franchising", description: "Territory, exclusivity, minimum commitments, termination and post-term restrictions." },
      { name: "Licensing & Technology Agreements", description: "Scope of licence, sublicensing, support obligations and ownership of developments." },
      { name: "NDAs & Pre-Contractual Documents", description: "Confidentiality, term sheets, LOIs and MOUs, including what is and is not binding." },
      { name: "Contract Templates & Playbooks", description: "Standard forms with negotiation guardrails so commercial teams can move faster." },
      { name: "Vendor & Procurement Contracting", description: "Onboarding terms, liability allocation, data obligations and audit rights." },
      { name: "Contract Risk Audits", description: "Portfolio review to surface renewal dates, unlimited liabilities and one-sided terms." },
    ],
  },
  {
    slug: "employment-and-labour",
    title: "Employment & Labour",
    short: "Employment & Labour",
    teaser:
      "Workforce documentation, policy frameworks, investigations and exits handled carefully.",
    journey: "Grow",
    image: "/images/practice/practice-02.jpg",
    intro: [
      "Employment issues are rarely only legal. They involve people, evidence, timing and the credibility of the process that was followed.",
      "We advise employers on contracts and policies, statutory compliance, restructuring and separations, and on handling workplace complaints — including POSH matters — with a defensible process.",
      "We also advise senior executives on their own arrangements, from offer terms to negotiated exits.",
    ],
    keyServices: [
      { name: "Employment Contracts & Policies", description: "Appointment letters, handbooks, confidentiality, IP assignment and restrictive covenants." },
      { name: "Statutory & Labour Compliance", description: "Registrations, returns, wage and benefit obligations, contract labour and shops establishment requirements." },
      { name: "POSH Advisory & Committees", description: "Policy, IC constitution, training and support through complaints and inquiry procedure." },
      { name: "Workplace Investigations", description: "Structuring and documenting internal inquiries that stand up to later scrutiny." },
      { name: "Disciplinary Action & Termination", description: "Grounds, process, notice, dues and the record required for each step." },
      { name: "Restructuring & Redundancies", description: "Reorganisations, transfers of employment and separation programmes." },
      { name: "Executive Arrangements", description: "Senior hires, incentive terms, garden leave and negotiated exits." },
      { name: "Employment Disputes", description: "Notices, conciliation, labour authority proceedings and settlement strategy." },
    ],
  },
  {
    slug: "data-privacy-and-technology",
    title: "Data Privacy & Technology",
    short: "Data Privacy & Technology",
    teaser:
      "Privacy compliance, data agreements and technology contracting under India's DPDP regime and beyond.",
    journey: "Protect",
    image: "/images/practice/practice-03.jpg",
    intro: [
      "Data obligations now sit inside ordinary business decisions: which vendor to use, where data is stored, what a consent notice says, and what happens in the first forty-eight hours after a breach.",
      "We advise on the Digital Personal Data Protection Act, the IT Act and sectoral rules, and on cross-border frameworks such as the GDPR where they apply to Indian operations.",
      "We translate the compliance requirement into documents and processes the business can run — not a policy binder nobody opens.",
    ],
    keyServices: [
      { name: "DPDP Act Compliance", description: "Gap assessment, consent architecture, notices, retention and data principal rights processes." },
      { name: "Privacy Policies & Notices", description: "User-facing documentation that reflects what your systems actually do." },
      { name: "Data Processing Agreements", description: "Controller–processor terms, sub-processing, security obligations and audit rights." },
      { name: "Cross-Border Data Transfers", description: "Transfer mechanisms, localisation questions and vendor jurisdiction mapping." },
      { name: "Breach Response & Notification", description: "Incident playbooks, regulator and data principal notification, and evidence preservation." },
      { name: "Technology & SaaS Contracting", description: "Subscription terms, uptime, security schedules, liability and exit assistance." },
      { name: "AI & Emerging Technology Advisory", description: "Model training data, outputs, IP ownership, disclosure and acceptable use." },
      { name: "Product & Platform Compliance", description: "Terms of use, intermediary obligations, age gating and content moderation frameworks." },
    ],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    short: "Intellectual Property",
    teaser:
      "Protecting brands, content and proprietary work — and enforcing those rights when they are tested.",
    journey: "Transact",
    image: "/images/practice/practice-01.jpg",
    intro: [
      "For many businesses the brand, the codebase and the content are the balance sheet. They are also the assets most often left undocumented.",
      "We advise on trade mark and copyright protection, ownership of work created by employees and contractors, licensing arrangements, and enforcement against infringement and passing off.",
      "Where a dispute arises, we assess the strength of the right before recommending a course of action.",
    ],
    keyServices: [
      { name: "Trade Mark Clearance & Filing", description: "Availability searches, classification strategy, prosecution and renewals." },
      { name: "Copyright & Content Protection", description: "Ownership, assignments, moral rights and protection of creative and software work." },
      { name: "IP Ownership & Assignment", description: "Ensuring employee, contractor and agency work vests where it should." },
      { name: "Licensing & Royalty Arrangements", description: "Scope, territory, exclusivity, quality control and royalty accounting." },
      { name: "Brand Protection Strategy", description: "Portfolio planning, watch services, domain and marketplace monitoring." },
      { name: "Infringement & Passing Off", description: "Cease and desist, takedowns, marketplace complaints and injunction strategy." },
      { name: "Trade Secret & Confidentiality", description: "Identifying protectable information and putting real safeguards around it." },
      { name: "IP Due Diligence", description: "Verifying chain of title and encumbrances ahead of a transaction or fundraise." },
    ],
  },
  {
    slug: "pre-litigation-and-dispute-resolution",
    title: "Pre-Litigation & Dispute Resolution",
    short: "Pre-Litigation & Disputes",
    teaser:
      "Strategic legal guidance to help you assess disputes, protect your interests, and pursue the right path to resolution.",
    journey: "Exit / Resolve",
    image: "/images/practice/practice-03.jpg",
    intro: [
      "Disputes can have significant legal, financial, and commercial consequences. We advise clients from the early stages of a potential dispute, helping them understand their legal position, assess available options, and determine an appropriate course of action before matters escalate.",
      "Our work covers negotiation, settlement, mediation, arbitration, and litigation strategy across a range of commercial and civil disputes. We focus on understanding the underlying issues and objectives of each matter, while providing clear advice on the risks, practical considerations, and possible routes toward resolution.",
      "Whether a dispute is emerging or already underway, we work closely with clients to develop a considered approach that protects their interests and supports an effective resolution.",
    ],
    keyServices: [
      { name: "Pre-Litigation Advisory", description: "We advise clients on potential disputes before formal proceedings begin. Our support includes assessing legal positions, risks, and possible strategies for resolution." },
      { name: "Legal Notices & Responses", description: "We draft and review legal notices and responses arising from disputes. Our approach ensures that your position and relevant legal issues are communicated clearly." },
      { name: "Dispute Strategy", description: "We help clients assess the strengths, risks, and practical considerations surrounding a dispute. We develop strategies aligned with the client's objectives and circumstances." },
      { name: "Negotiation & Settlement", description: "We assist clients in negotiating with counterparties to explore practical solutions. Our focus is on protecting your interests while working toward an appropriate resolution." },
      { name: "Mediation", description: "We advise and represent clients in mediation proceedings aimed at resolving disputes without prolonged litigation. We help clients understand their options and prepare for meaningful negotiations." },
      { name: "Arbitration", description: "We advise and represent clients in arbitration proceedings and related matters. Our support covers strategy, documentation, submissions, and the broader arbitration process." },
      { name: "Commercial Disputes", description: "We advise businesses involved in disputes arising from commercial relationships and transactions. This includes disagreements relating to contracts, payments, partnerships, and business arrangements." },
      { name: "Contractual Disputes", description: "We assist clients with disputes concerning the interpretation, performance, or breach of contractual obligations. We assess the agreement and relevant circumstances to determine available remedies." },
      { name: "Shareholder & Partnership Disputes", description: "We advise on disputes between shareholders, partners, and business stakeholders. Our support focuses on understanding the parties' rights, obligations, and potential routes to resolution." },
      { name: "Property & Real Estate Disputes", description: "We advise clients on disputes involving ownership, possession, transactions, leases, and other property-related matters. We help assess the legal position and available courses of action." },
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
