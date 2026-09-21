export type Role = {
  title: string;
  type: string;
  location: string;
  experience: string;
  summary: string;
  responsibilities: string[];
};

export const roles: Role[] = [
  {
    title: "Associate — Corporate & Transactions",
    type: "Full-time",
    location: "Kolkata",
    experience: "2–4 years",
    summary:
      "Work on diligence, transaction documentation and ongoing corporate advisory for a mixed portfolio of retainer and deal clients.",
    responsibilities: [
      "Run legal due diligence and prepare risk-ranked reports",
      "Draft and mark up transaction documents under partner supervision",
      "Manage conditions precedent and closing checklists",
      "Handle ongoing corporate compliance for retainer clients",
    ],
  },
  {
    title: "Associate — Disputes",
    type: "Full-time",
    location: "Kolkata",
    experience: "1–3 years",
    summary:
      "Support the disputes practice on pre-litigation strategy, notices, arbitration filings and evidence review.",
    responsibilities: [
      "Research and prepare case notes on commercial disputes",
      "Draft notices, replies and pleadings",
      "Organise and analyse documentary evidence",
      "Coordinate filings and hearing preparation",
    ],
  },
  {
    title: "Legal Intern",
    type: "Internship",
    location: "Kolkata / Remote",
    experience: "3rd–5th year students",
    summary:
      "A structured four to eight week internship with real drafting and research work, not photocopying.",
    responsibilities: [
      "Research discrete legal questions and present findings",
      "Assist with first drafts of notices and standard agreements",
      "Prepare case chronologies and document indices",
      "Sit in on client calls where confidentiality permits",
    ],
  },
];

export const values = [
  {
    title: "You will own work early",
    description:
      "Juniors here draft, research and attend client calls from the first month. Supervision is close, but the work is real.",
  },
  {
    title: "Writing matters",
    description:
      "We spend time on how advice is written. If a client cannot act on it after one read, it is not finished.",
  },
  {
    title: "No performative hours",
    description:
      "Deadlines are real and sometimes demanding. Sitting at a desk to be seen is not.",
  },
  {
    title: "Direct feedback",
    description:
      "You will be told what is wrong with your draft and why. That is the fastest way anyone learns this job.",
  },
];
