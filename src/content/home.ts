export const stats = [
  { value: 10, suffix: "+", label: "Years in practice" },
  { value: 1000, suffix: "+", label: "Matters resolved" },
  { value: 4000, suffix: "+", label: "People represented" },
  { value: 95, suffix: "%", label: "Successful outcomes" },
];

export const mandates = [
  "Represented a manufacturing group in a commercial dispute concerning supply obligations.",
  "Advised a technology company on a Series A investment and shareholder arrangements.",
  "Acted for an education institution on governance restructuring and policy framework.",
  "Advised founders on a co-founder separation and equity reallocation.",
  "Represented a distributor in an arbitration concerning territory and termination.",
  "Advised a SaaS business on DPDP compliance and cross-border vendor contracting.",
  "Acted on the acquisition of a logistics business by way of slump sale.",
  "Represented shareholders in an oppression and mismanagement dispute.",
];

export const trustedBy = [
  "Meridian Industries",
  "Calcutta Steelworks",
  "Northbridge Education Trust",
  "Vector Labs",
  "Sundara Hospitality",
  "Harbourline Logistics",
  "Anant Textiles",
];

export type InFocusItem = {
  id: string;
  /** Opening clause, e.g. "Recently advised". */
  lead: string;
  /** The anonymised client descriptor, set in bold on the poster. */
  client: string;
  /** Remainder of the summary sentence. */
  detail: string;
  /** Person from `people` who led the matter. */
  personSlug: string;
};

/** Poster cards for the In Focus band — anonymised versions of recent mandates. */
export const inFocus: InFocusItem[] = [
  {
    id: "commercial-dispute",
    lead: "Recently represented",
    client: "a manufacturing group",
    detail:
      "in a commercial dispute concerning supply obligations under a long-term vendor arrangement, advising on contractual remedies, notice strategy and the practical route to a negotiated resolution.",
    personSlug: "meera-raghunathan",
  },
  {
    id: "series-a",
    lead: "Recently advised",
    client: "a technology company",
    detail:
      "on a Series A investment and the accompanying shareholder arrangements, covering term sheet negotiation, transaction documentation and the governance framework agreed with incoming investors.",
    personSlug: "kabir-sengupta",
  },
  {
    id: "dpdp-compliance",
    lead: "Recently advised",
    client: "a SaaS business",
    detail:
      "on its obligations under the Digital Personal Data Protection framework, reviewing consent, retention and cross-border vendor contracting against the commitments made to its own customers.",
    personSlug: "rohan-das",
  },
  {
    id: "slump-sale",
    lead: "Recently acted for",
    client: "the acquirer of a logistics business",
    detail:
      "on a slump sale, from diligence and valuation inputs through to the business transfer agreement, employee transition and the closing mechanics agreed between the parties.",
    personSlug: "aditya-jhunjhunwala",
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
    description: "You work with people who understand your matter—not a process that treats every client the same.",
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
    role: "Manufacturing group, Kolkata",
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
    role: "Education trust, West Bengal",
    avatar: "/images/team/p2.jpg",
    quote:
      "They were candid about what was worth pursuing and what was not. That saved us both time and money.",
  },
  {
    name: "Co-founder",
    role: "SaaS business, Kolkata",
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
      "Anything that records the relationship or the issue: agreements, correspondence, notices, invoices, and any statements or records relevant to what happened. If you are not sure what matters, bring more rather than less — we will tell you what is relevant.",
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
    question: "Do you work with clients outside Kolkata?",
    answer:
      "Yes. A substantial part of our transactional and advisory work is handled remotely for clients across India, with in-person attendance where a matter genuinely requires it.",
  },
];
