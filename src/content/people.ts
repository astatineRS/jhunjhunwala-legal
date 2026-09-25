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
  publications?: { title: string; href: string }[];
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
    role: "Founding & Managing Partner",
    image: "/images/team/samarth.jpg",
    bar: "Bar Council of Delhi · D/17682/2025",
    focus: [
      "Corporate & Commercial",
      "Startup & Founder Advisory",
      "Investment & Transactions",
      "Data Privacy & Technology",
      "Intellectual Property",
    ],
    bio: [
      "Samarth Jhunjhunwala is a corporate and commercial lawyer, advising founders, startups, investors and businesses across India and overseas.",
      "Coming from a business background and having been closely involved with businesses from an early age, Samarth developed a first-hand understanding of how businesses operate, make decisions and manage risk long before entering legal practice. This perspective continues to shape his approach to legal counsel, particularly when advising founders, entrepreneurs and businesses where legal considerations are closely connected to commercial objectives.",
      "He has advised startups and businesses in India and overseas on corporate structuring and incorporation, formation of LLPs and private companies, cross-border structuring, founder exits, commercial documentation, technology and data privacy, GDPR compliance and corporate policies, alongside negotiating, documenting and guiding transactions and strategic business arrangements, with clients across health-tech, ed-tech, fashion technology, robotics and AI, SaaS, e-commerce, and transportation.",
      "His corporate and commercial practice centres on business structuring, governance and ongoing legal advisory for startups and growing businesses, alongside the drafting, review and negotiation of commercial contracts and agreements. He acts as ongoing counsel to founders and businesses, advising on corporate structures, regulatory requirements and the legal aspects of their commercial relationships.",
      "In startup, founder and investor advisory, Samarth advises on fundraising and transactional matters, including deal structuring, transaction documentation and negotiations between founders and investors. His transactional work includes advising on strategic business arrangements and the legal considerations arising across different stages of a business.",
      "In technology and data privacy, he advises businesses on data protection compliance, privacy frameworks and technology contracts, including SaaS and platform agreements. His intellectual property practice includes trademark protection, brand strategy, and the licensing and assignment arrangements through which businesses protect and commercialise their IP.",
      "Beyond active practice, Samarth remains engaged in legal education and thought leadership. He has delivered guest lectures at schools, universities and professional forums on a range of legal subjects, and his insights have been featured in Times Now Digital, Business News This Week and other reputed platforms.",
      "His approach to legal practice is grounded in understanding the business behind the legal question. He believes effective legal counsel should account not only for what the law requires, but also for what the business is trying to achieve.",
    ],
    education: [
      "B.A. LL.B. (Hons.)",
      "Batch of 2020 | Bennett University",
      "Academic Merit: Among the highest-scoring students of the batch",
    ],
    publications: [
      {
        title: "How Business-Savvy Lawyering is Redefining the Legal Profession in the Startup Era",
        href: "https://businessnewsthisweek.com/business/how-business-savvy-lawyering-is-redefining-the-legal-profession-in-the-startup-era/",
      },
      {
        title: "Love in Legal Limbo: Defined yet Denied Rights of the Non-Heterosexual Couples in India",
        href: "https://www.timesnownews.com/education/love-in-legal-limbo-defined-yet-denied-rights-of-the-non-heterosexual-couples-in-india-article-151901825",
      },
    ],
    email: "samarth@jhunjhunwalalegal.com",
    linkedin: "https://www.linkedin.com/in/samarthjhunjhunwala/",
  },
  {
    slug: "ruchika-daga",
    name: "Ruchika Daga",
    role: "Of-Counsel",
    image: "/images/team/ruchika.jpg",
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
    role: "Trainee Associate",
    image: "/images/team/pakhi.jpg",
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
