/** The four stages the firm's work is organised around. */
export const lifecycle = [
  {
    number: "01",
    title: "Business Formation",
    description:
      "Incorporation, entity structuring and founder arrangements, so the business starts on a footing it will not have to unwind later.",
  },
  {
    number: "02",
    title: "Growth & Governance",
    description:
      "Commercial contracts, internal policies and governance that keep pace as the business takes on people, customers and obligations.",
  },
  {
    number: "03",
    title: "Investment & Transactions",
    description:
      "Fundraises, shareholder arrangements, acquisitions and founder exits, from term sheet through diligence to closing.",
  },
  {
    number: "04",
    title: "Protection & Risk",
    description:
      "Intellectual property, data privacy and early dispute management, protecting what the business has already built.",
  },
] as const;

export type Client = {
  name: string;
  /** Supplied brand artwork in /public/logos. */
  logo: string;
};

export const trustedBy: Client[] = [
  { name: "Syinq", logo: "/logos/syinq.svg" },
  { name: "Excelera Touchstone Consulting", logo: "/logos/excelera.png" },
  { name: "INIK", logo: "/logos/inik.jpg" },
  { name: "Runway Avenue", logo: "/logos/runway-avenue.png" },
  { name: "Sort My Prep", logo: "/logos/sort-my-prep.png" },
  { name: "White Magic", logo: "/logos/white-magic.png" },
  { name: "Care Ease", logo: "/logos/care-ease.png" },
];

export type InFocusItem = {
  id: string;
  /** Published poster artwork in /public/images/updates, 1080x1350. */
  image: string;
  /** Opening clause, e.g. "Recently advised". */
  lead: string;
  /** The client named on the poster, set apart in the summary line. */
  client: string;
  /** Remainder of the summary sentence. */
  detail: string;
  /** LinkedIn post the update was published as. */
  href: string;
  /**
   * Compact restatement for the mandate chips. The published sentence runs to
   * three lines in a chip and clamps before the client is even named, so the
   * strip carries the work and the client and nothing else.
   */
  mandate: string;
};

/**
 * The firm's published client updates. The poster is the artwork as it went out
 * on LinkedIn; the copy fields carry the same sentence as text, for the poster's
 * alt text — the summary is otherwise locked inside a PNG.
 */
export const inFocus: InFocusItem[] = [
  {
    id: "care-ease",
    image: "/images/updates/care-ease.png",
    lead: "Recently had the opportunity to advise and assist",
    client: "CareEase Homecare Services Private Limited",
    detail:
      "on a key contractual engagement as part of their ongoing business operations.",
    href: "https://lnkd.in/p/gSBFQXyb",
    mandate: "Contractual engagement: CareEase Homecare",
  },
  {
    id: "obliviqlabs",
    image: "/images/updates/obliviqlabs.png",
    lead: "Recently advised and assisted",
    client: "OBLIVIQLABS LLP",
    detail:
      "on the incorporation and structuring of its business, with strategic inputs on the proposed framework and providing assistance with the documentation.",
    href: "https://lnkd.in/p/gR2V7Bwh",
    mandate: "LLP incorporation: OBLIVIQLABS",
  },
  {
    id: "syinq",
    image: "/images/updates/syinq.png",
    lead: "Recently had the opportunity to advise and assist",
    client: "SYINQ",
    detail:
      "on a founder exit transaction as part of its ongoing business operations, working closely with stakeholders across structuring, documentation and negotiations.",
    href: "https://lnkd.in/p/gjPKs7Ch",
    mandate: "Founder exit transaction: SYINQ",
  },
  {
    id: "excelera",
    image: "/images/updates/excelera.png",
    lead: "We recently advised and provided strategic inputs to",
    client: "Excelera Infotech Pvt. Ltd.",
    detail:
      "on an NDA as part of its ongoing business operations, working closely across structuring, documentation, and negotiations.",
    href: "https://lnkd.in/p/gzuG43si",
    mandate: "NDA advisory: Excelera Infotech",
  },
];

export const whyChooseUs = [
  {
    title: "Clear Communication",
    description: "Clear legal advice, explained in a way that helps you make informed decisions.",
  },
  {
    title: "Practical Thinking",
    description: "We look beyond the legal issue to understand the wider commercial, personal, or operational context.",
  },
  {
    title: "Attention To Detail",
    description: "Small details can have significant legal consequences. We approach every matter carefully and thoroughly.",
  },
  {
    title: "Personal Attention",
    description: "You work with people who understand your matter, not a process that treats every client the same.",
  },
];

export const process = [
  { step: "Understand", description: "We start by listening to your situation, concerns, and objectives." },
  { step: "Assess", description: "We review the relevant facts and identify the legal issues and potential challenges." },
  { step: "Advise", description: "We explain your position, available options, and the considerations involved." },
  { step: "Act", description: "Where you ask us to proceed, we work with you to put the chosen approach into action." },
];

export type JourneyStep = { step: string; slug: string };

/** The Backbone Suite rail — each stage links to the practice that owns it. */
export const journey: JourneyStep[] = [
  { step: "Set Up", slug: "corporate-and-commercial" },
  { step: "Structure", slug: "startup-founder-and-investor-advisory" },
  { step: "Contract", slug: "commercial-contracts" },
  { step: "Fund", slug: "investment-and-transactional-advisory" },
  { step: "Grow", slug: "employment-and-labour" },
  { step: "Protect", slug: "data-privacy-and-technology" },
  { step: "Transact", slug: "intellectual-property" },
  { step: "Resolve", slug: "pre-litigation-and-dispute-resolution" },
];

/**
 * Client attributions are kept anonymised — the firm has not published named
 * testimonials, and Bar Council Rule 36 limits what may be claimed publicly.
 */
export const testimonials = [
  {
    name: "Chief Executive Officer",
    role: "Manufacturing group, Delhi NCR",
    avatar: "/images/team/p9.jpg",
    quote:
      "Their practical advice and clear communication gave us confidence through every important decision.",
  },
  {
    name: "Founder",
    role: "Technology company, Bengaluru",
    avatar: "/images/team/p8.jpg",
    quote:
      "From our first conversation, the team took the time to understand not only the legal issue we were facing, but also the wider business context behind it. They explained every step clearly, helped us evaluate our options, and gave us the confidence to move forward with a well-informed decision. Their attention to detail, responsiveness, and practical approach made what initially felt like a complicated process much easier to navigate.",
  },
  {
    name: "Director",
    role: "Education trust, Uttar Pradesh",
    avatar: "/images/team/p2.jpg",
    quote:
      "They were candid about what was worth pursuing and what was not. That saved us both time and money.",
  },
  {
    name: "Co-founder",
    role: "SaaS business, New Delhi",
    avatar: "/images/team/p7.jpg",
    quote:
      "We came in with a messy cap table and left with documentation our investors accepted without a single comment.",
  },
];

export const faqs = [
  {
    question: "How do I know if I need legal advice?",
    answer:
      "If a decision involves money, obligations, or another party's rights, it is usually worth a conversation. Early advice is almost always cheaper than corrective work later, and a short discussion is often enough to tell you whether formal engagement is needed at all.",
  },
  {
    question: "What happens during an initial consultation?",
    answer:
      "We listen to your situation, ask questions to establish the relevant facts, and give you an honest assessment of your position and options. You will leave with a clear view of what can be done, what it involves, and what it is likely to cost.",
  },
  {
    question: "What documents should I bring?",
    answer:
      "Anything that records the relationship or the issue: agreements, correspondence, notices, invoices, and any statements or records relevant to what happened. If you are not sure what matters, bring more rather than less; we will tell you what is relevant.",
  },
  {
    question: "How are legal fees determined?",
    answer:
      "Fees depend on the nature, complexity, and scope of the matter. We will discuss the applicable fee structure with you before proceeding.",
  },
  {
    question: "Can I speak to a lawyer before deciding to proceed?",
    answer:
      "Yes. The first conversation exists precisely so you can decide whether to engage us at all. There is no obligation to proceed, and we will tell you if we think you do not need a lawyer.",
  },
  {
    question: "Do you work with clients outside Delhi?",
    answer:
      "Yes. A substantial part of our transactional and advisory work is handled remotely for clients across India, with in-person attendance where a matter genuinely requires it.",
  },
];
