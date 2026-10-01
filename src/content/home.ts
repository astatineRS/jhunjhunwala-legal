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

export const industries = [
  {
    title: "Real Estate & Infrastructure",
    description:
      "Legal guidance on property transactions, development, construction, and infrastructure projects.",
    image: "/images/industries/legal-advisory.png",
  },
  {
    title: "Energy & Natural Resource",
    description:
      "Legal support for businesses and projects operating across energy, resources, and related sectors.",
    image: "/images/industries/legal-advisory.png",
  },
  {
    title: "Consumer & Retail",
    description:
      "Legal guidance on commercial relationships, contracts, transactions, and consumer-facing operations.",
    image: "/images/industries/legal-advisory.png",
  },
] as const;

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

export type Testimonial = {
  /** The person giving the testimonial. */
  name: string;
  /** Their title at the client. */
  role: string;
  /** Client entity, named as they trade. */
  company: string;
  /**
   * Client brand artwork in /public/logos. Omitted where the client has not
   * supplied a mark — the card falls back to the company name alone.
   */
  logo?: string;
  quote: string;
};

/** Published with each client's consent; attributions are used as given. */
export const testimonials: Testimonial[] = [
  {
    name: "Raunak Shukla",
    role: "Cofounder & CEO",
    company: "SYINQ",
    logo: "/logos/syinq.svg",
    quote:
      "Our experience working with Backbone Counsels has been very positive. As an early-stage startup, we especially valued how they made legal processes easier to understand rather than simply telling us what needed to be done. The team was approachable, responsive, and practical in their advice, which helped us make decisions with more clarity and confidence. I would particularly recommend them to founders and early-stage businesses looking for legal support that is practical and easy to navigate. They take the time to understand the business context and provide advice accordingly, rather than treating everything as a standard legal checklist.",
  },
  {
    name: "Naman Kothari",
    role: "Co-founder",
    company: "Sort My Prep",
    logo: "/logos/sort-my-prep.png",
    quote:
      "We see Samarth and Jhunjhunwala Legal as rigorous and practical. What we valued most was that the first piece of work told us where we stood. Every conclusion was traceable back to a specific document, so we could check it ourselves rather than take it on trust. The working sequence has suited us too: tell us what we are minded to do, and you confirm it before we build. For a small team like ours, avoiding rework matters more than speed. Particularly for an early-stage company operating across more than one jurisdiction, the difficulty is not finding an answer but knowing which of several regimes actually governs the question. The advice has been practical rather than defensive.",
  },
  {
    name: "Rahul Agarwal",
    role: "Founder & CEO",
    company: "CareEase",
    logo: "/logos/care-ease.png",
    quote:
      "My experience of working with Samarth has been very good. He has always been very cooperative and available whenever I needed his help or wanted to discuss any legal matter. Whenever I approached him for a consultation, he gave me his time, understood the situation properly, and provided clear and practical legal advice. I have worked with him on several matters, including drafting agreements with my co-founder and advisors, consultancy and advisory agreements, and patent-related work. For every agreement, he took the time to understand the specific situation, did the necessary research, and advised me on what I should and should not do from a legal perspective. I particularly valued that he didn’t just focus on preparing the documents. He took the time to explain the legal aspects and guide me through the process, which was very helpful for me as a founder.",
  },
  {
    name: "Arhaam Azhari",
    role: "Founder & CEO",
    company: "Runway Avenue Inc.",
    logo: "/logos/runway-avenue.png",
    quote:
      "Our experience of working with Samarth and his team has been excellent. The entire team takes a keen effort to handle all our queries and concerns while producing perfect results with their well-versed legal services. I personally value Samarth and his ability to understand my situation in proper detail in any given moment and his ability to best manage the circumstances while getting appropriate work done. Really appreciate the effort and time management the entire Jhunjhunwala Legal team has shown while working with us from across continents. The ability of the team to best accommodate all limitations of a young startup like ours while maintaining performance always helps young companies find their footing and is essential for success.",
  },
  {
    name: "Yashraj Singh Saluja",
    role: "Founder & Director",
    company: "The Third Eye Astro Pvt Ltd",
    logo: "/logos/white-magic.png",
    quote:
      "Samarth took White Magic from zero to a complete, launch-ready legal foundation. What I valued most was that he engaged with the business, not just the drafting. He was patient through many rounds of revisions, responsive on short timelines, and priced fairly for an early-stage company. The personal dedication and Samarth’s will to take a call and hold a discussion at 11:30pm is the biggest separating factor for me personally.",
  },
  {
    name: "Mohammed Imran",
    role: "Founder",
    company: "Excelera Touchstone Consulting",
    logo: "/logos/excelera.png",
    quote:
      "My experience working with Samarth was that he is diligent in his facts. He gives the right process and timelines for when the work will be completed. In any area of law — intellectual property, copyright, arbitration, review of contracts — he could bring in the right personnel to give the right advice. I would highly recommend using Samarth’s services for the value he brings to his customers. It was a good experience and we will use his services again.",
  },
  {
    name: "Dhruv Sahu",
    role: "Partner",
    company: "Obliviqlabs LLP",
    quote:
      "My three lines for Samarth and our experience of working with him: open, and possessing a higher level of understanding. Easier to connect with and to understand. Awesome team — nothing to add from my side.",
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
