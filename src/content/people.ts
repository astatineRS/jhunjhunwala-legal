export type Person = {
  slug: string;
  name: string;
  role: string;
  /** Portrait in /public/images/team. Absent until a photograph is supplied;
   *  the profile then falls back to an initials monogram. */
  image?: string;
  bar: string;
  focus: string[];
  bio: string[];
  education: string[];
  /** Direct address. Absent where the firm has not published one, in which
   *  case the profile offers the general enquiry address instead. */
  email?: string;
  /** Personal LinkedIn profile; falls back to the firm page when absent. */
  linkedin?: string;
};

export const people: Person[] = [
  {
    slug: "samarth-jhunjhunwala",
    name: "Samarth Jhunjhunwala",
    role: "Managing Partner",
    image: "/images/team/samarth.jpg",
    bar: "Enrolled with the Bar Council of Delhi, 2009",
    focus: ["Corporate & Commercial", "Investment & Transactions", "Dispute Strategy"],
    bio: [
      "Samarth leads the firm's corporate and transactional practice. He advises promoters, boards and investors on structuring, shareholder arrangements and acquisitions, and is regularly brought in when a commercial relationship begins to break down.",
      "Clients come to him for a direct read on where a matter is likely to end up, and what it will take to get there. He has acted on transactions across manufacturing, technology and education, and has spent much of his practice on the negotiation side of disputes rather than the courtroom steps.",
      "He founded the firm on a simple premise: clients should understand their own legal position well enough to make the decision themselves.",
    ],
    education: ["LL.M., Corporate Law", "B.A. LL.B. (Hons.)"],
    email: "samarth@jhunjhunwalalegal.com",
    linkedin: "https://www.linkedin.com/in/samarthjhunjhunwala/",
  },
  {
    slug: "ruchika-daga",
    name: "Ruchika Daga",
    role: "Of-Counsel",
    bar: "Enrolled with the Bar Council of India and the Bar Council of Maharashtra & Goa",
    focus: [
      "Corporate & Commercial",
      "Commercial Contracts",
      "Intellectual Property",
      "Employment & Labour",
    ],
    bio: [
      "Ruchika is a corporate and commercial legal professional with over six years' experience advising Indian and international companies, startups and individuals.",
      "Her corporate and commercial practice centres on vetting, drafting and negotiating commercial agreements of every kind, including master services agreements, vendor and supply arrangements, licensing agreements, technology and SaaS contracts and non-disclosure agreements. She acts as day-to-day counsel to startups and growing businesses, advising on contract structures, regulatory questions and the legal side of their commercial relationships. She also helps businesses audit and modernise their contracting frameworks, strengthening template agreements against evolving legal and commercial risk. In intellectual property, she advises on trademark searches, registration and prosecution, brand protection and enforcement, and the licensing and assignment agreements through which businesses commercialise their IP.",
      "In employment and labour matters, she drafts and negotiates employment agreements, consultant and retainer arrangements, and workplace policies, and advises employers on handling employee disputes, from responding to claims and notices to negotiating exits and settlements. Her disputes practice covers corporate, commercial and employment matters, where she combines a strong grounding in contract law with a pragmatic, resolution-focused approach to claims, notices and settlement negotiations.",
      "She is also often invited as a guest lecturer and adjudicator at leading institutions, including Symbiosis Law School, Pune, where she delivers guest lectures on business and corporate law and adjudicates moot court competitions.",
    ],
    education: [
      "Master of Business Laws, National Law School of India University (NLSIU), Bengaluru",
      "B.A. LL.B., First Class with Distinction, Savitribai Phule Pune University",
    ],
  },
  {
    slug: "pakhi-chaudhary",
    name: "Pakhi Chaudhary",
    role: "Paralegal",
    bar: "Enrolled with the Bar Council of India and the Bar Council of Uttar Pradesh",
    focus: [
      "Commercial Contracts",
      "Contract Drafting, Review & Interpretation",
      "Corporate Legal Research & Analysis",
    ],
    bio: [
      "Pakhi is an advocate enrolled with the Bar Council of Uttar Pradesh, with a legal background encompassing litigation, legal research, drafting and analysis. Her professional experience has involved in-depth legal research, statutory and regulatory interpretation, case analysis, legal drafting, preparation and review of legal documents, and addressing complex legal issues. That experience has developed her ability to approach legal problems with attention to detail, structured reasoning and a practical understanding of legal and commercial considerations.",
      "Her areas of professional interest include corporate and commercial law, commercial contracts, corporate governance, due diligence, and legal advisory for businesses, founders and entrepreneurs. She is particularly interested in developing a practice focused on understanding businesses and translating complex legal requirements into clear, commercially practical advice.",
      "Her skill set includes legal research, legal writing and drafting, statutory interpretation, analytical reasoning, contract review and interpretation, and structured legal analysis. She brings together a strong academic foundation and practical legal experience while building her focus in corporate and commercial practice.",
    ],
    education: [
      "LL.B., Department of Laws, Panjab University, Chandigarh",
      "B.A. (English & Psychology), Gargi College, University of Delhi",
    ],
  },
];

export function getPerson(slug: string) {
  return people.find((person) => person.slug === slug);
}
