export type Person = {
  slug: string;
  name: string;
  role: string;
  image: string;
  bar: string;
  focus: string[];
  bio: string[];
  education: string[];
  email: string;
};

export const people: Person[] = [
  {
    slug: "aditya-jhunjhunwala",
    name: "Aditya Jhunjhunwala",
    role: "Managing Partner",
    image: "/images/team/featured.jpg",
    bar: "Enrolled with the Bar Council of West Bengal, 2009",
    focus: ["Corporate & Commercial", "Investment & Transactions", "Dispute Strategy"],
    bio: [
      "Aditya leads the firm's corporate and transactional practice. He advises promoters, boards and investors on structuring, shareholder arrangements and acquisitions, and is regularly brought in when a commercial relationship begins to break down.",
      "Clients come to him for a direct read on where a matter is likely to end up, and what it will take to get there. He has acted on transactions across manufacturing, technology and education, and has spent much of his practice on the negotiation side of disputes rather than the courtroom steps.",
      "He founded the firm on a simple premise: clients should understand their own legal position well enough to make the decision themselves.",
    ],
    education: ["LL.M., Corporate Law", "B.A. LL.B. (Hons.)"],
    email: "aditya@jhunjhunwalalegal.com",
  },
  {
    slug: "meera-raghunathan",
    name: "Meera Raghunathan",
    role: "Partner — Disputes",
    image: "/images/team/p1.jpg",
    bar: "Enrolled with the Bar Council of West Bengal, 2011",
    focus: ["Commercial Disputes", "Arbitration", "Shareholder Disputes"],
    bio: [
      "Meera heads the firm's dispute resolution practice. Her work spans contractual and shareholder disputes, domestic arbitration and the pre-litigation strategy that often decides the outcome before a filing is ever made.",
      "She is known for building a matter from the evidence upward — establishing what can actually be proved before advising on how hard to push.",
    ],
    education: ["LL.B.", "B.Com. (Hons.)"],
    email: "meera@jhunjhunwalalegal.com",
  },
  {
    slug: "kabir-sengupta",
    name: "Kabir Sengupta",
    role: "Partner — Corporate",
    image: "/images/team/p2.jpg",
    bar: "Enrolled with the Bar Council of West Bengal, 2013",
    focus: ["Mergers & Acquisitions", "Due Diligence", "Joint Ventures"],
    bio: [
      "Kabir advises on acquisitions, investments and joint ventures, with a focus on diligence and the contractual response to what diligence uncovers.",
      "He works closely with finance and operating teams through closing and integration, and is frequently retained as ongoing counsel after a transaction completes.",
    ],
    education: ["LL.B.", "B.B.A."],
    email: "kabir@jhunjhunwalalegal.com",
  },
  {
    slug: "rohan-das",
    name: "Rohan Das",
    role: "Principal Associate",
    image: "/images/team/p3.jpg",
    bar: "Enrolled with the Bar Council of West Bengal, 2016",
    focus: ["Commercial Contracts", "Technology", "Licensing"],
    bio: [
      "Rohan handles the firm's commercial contracting work, from master services agreements to distribution and licensing arrangements.",
      "He builds contract templates and negotiation playbooks that let commercial teams close routine deals without legal review on every clause.",
    ],
    education: ["B.A. LL.B. (Hons.)"],
    email: "rohan@jhunjhunwalalegal.com",
  },
  {
    slug: "ishaan-verma",
    name: "Ishaan Verma",
    role: "Senior Associate",
    image: "/images/team/p4.jpg",
    bar: "Enrolled with the Bar Council of West Bengal, 2018",
    focus: ["Data Privacy", "Product Compliance", "SaaS Contracting"],
    bio: [
      "Ishaan advises technology and consumer businesses on privacy compliance under the DPDP Act, platform terms and incident response.",
      "His work sits close to product, translating regulatory requirements into consent flows, retention rules and vendor terms.",
    ],
    education: ["LL.M., Technology Law", "B.A. LL.B."],
    email: "ishaan@jhunjhunwalalegal.com",
  },
  {
    slug: "ananya-bose",
    name: "Ananya Bose",
    role: "Senior Associate",
    image: "/images/team/p5.jpg",
    bar: "Enrolled with the Bar Council of West Bengal, 2018",
    focus: ["Employment & Labour", "POSH", "Investigations"],
    bio: [
      "Ananya advises employers on workforce documentation, statutory compliance and workplace investigations, including POSH matters.",
      "She is often engaged where a separation or complaint requires a process that will hold up months later.",
    ],
    education: ["LL.B.", "B.A. (Hons.) Political Science"],
    email: "ananya@jhunjhunwalalegal.com",
  },
  {
    slug: "sara-mathew",
    name: "Sara Mathew",
    role: "Associate",
    image: "/images/team/p6.jpg",
    bar: "Enrolled with the Bar Council of West Bengal, 2021",
    focus: ["Intellectual Property", "Brand Protection"],
    bio: [
      "Sara works on trade mark prosecution, brand protection and enforcement, and supports IP diligence on transactions.",
    ],
    education: ["B.A. LL.B. (Hons.)"],
    email: "sara@jhunjhunwalalegal.com",
  },
  {
    slug: "nikhil-agarwal",
    name: "Nikhil Agarwal",
    role: "Associate",
    image: "/images/team/p7.jpg",
    bar: "Enrolled with the Bar Council of West Bengal, 2022",
    focus: ["Startup Advisory", "Cap Table", "ESOP"],
    bio: [
      "Nikhil supports early-stage companies through incorporation, founder arrangements, ESOP design and fundraising documentation.",
    ],
    education: ["B.B.A. LL.B."],
    email: "nikhil@jhunjhunwalalegal.com",
  },
  {
    slug: "arjun-mehta",
    name: "Arjun Mehta",
    role: "Associate",
    image: "/images/team/p8.jpg",
    bar: "Enrolled with the Bar Council of West Bengal, 2022",
    focus: ["Corporate Compliance", "Secretarial"],
    bio: [
      "Arjun manages ongoing corporate compliance for retainer clients — filings, registers, resolutions and annual obligations.",
    ],
    education: ["LL.B.", "B.Com."],
    email: "arjun@jhunjhunwalalegal.com",
  },
  {
    slug: "priya-shah",
    name: "Priya Shah",
    role: "Junior Attorney",
    image: "/images/team/p9.jpg",
    bar: "Enrolled with the Bar Council of West Bengal, 2024",
    focus: ["Disputes", "Research", "Evidence Review"],
    bio: [
      "Priya supports the disputes practice on case research, evidence review and drafting, and coordinates document preparation for arbitration matters.",
    ],
    education: ["B.A. LL.B. (Hons.)"],
    email: "priya@jhunjhunwalalegal.com",
  },
];

export function getPerson(slug: string) {
  return people.find((person) => person.slug === slug);
}
