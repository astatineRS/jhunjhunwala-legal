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
    slug: "rohan-das",
    name: "Rohan Das",
    role: "Principal Associate",
    image: "/images/team/p3.jpg",
    bar: "Enrolled with the Bar Council of Delhi, 2016",
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
    bar: "Enrolled with the Bar Council of Delhi, 2018",
    focus: ["Data Privacy", "Product Compliance", "SaaS Contracting"],
    bio: [
      "Ishaan advises technology and consumer businesses on privacy compliance under the DPDP Act, platform terms and incident response.",
      "His work sits close to product, translating regulatory requirements into consent flows, retention rules and vendor terms.",
    ],
    education: ["LL.M., Technology Law", "B.A. LL.B."],
    email: "ishaan@jhunjhunwalalegal.com",
  },
];

export function getPerson(slug: string) {
  return people.find((person) => person.slug === slug);
}
