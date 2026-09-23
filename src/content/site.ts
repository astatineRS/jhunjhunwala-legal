export const site = {
  name: "Jhunjhunwala Legal",
  shortName: "JJL",
  tagline: "When the law is complex, you deserve clarity",
  description:
    "Jhunjhunwala Legal advises individuals, founders and businesses on corporate, commercial, transactional and dispute matters — with clear advice and practical judgment.",
  url: "https://www.jhunjhunwalalegal.com",
  email: "info@jhunjhunwalalegal.com",
  phone: "+91 33 4000 1290",
  phoneHref: "tel:+913340001290",
  address: "21 Commercial Street, Kolkata 700 001, India",
  hours: "09:00 – 18:00, Monday to Saturday",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "X", href: "https://x.com/" },
  ],
} as const;

export const nav = [
  { label: "About The Firm", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "People", href: "/people" },
  { label: "Careers", href: "/careers" },
] as const;

export const footerColumns = [
  {
    heading: "Firm",
    links: [
      { label: "About The Firm", href: "/about" },
      { label: "Our Team", href: "/people" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Practice Areas",
    links: [
      { label: "Corporate & Commercial", href: "/expertise/corporate-and-commercial" },
      { label: "Commercial Contracts", href: "/expertise/commercial-contracts" },
      { label: "Employment & Labour", href: "/expertise/employment-and-labour" },
      { label: "Data Privacy & Technology", href: "/expertise/data-privacy-and-technology" },
      { label: "Intellectual Property", href: "/expertise/intellectual-property" },
      { label: "Pre-Litigation & Dispute Resolution", href: "/expertise/pre-litigation-and-dispute-resolution" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "FAQs", href: "/#faqs" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
] as const;
