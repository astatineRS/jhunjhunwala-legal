import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import DisclaimerGate from "@/components/DisclaimerGate";
import { site } from "@/content/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const organisationLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  areaServed: "IN",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 10:00-19:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      {/* Browser extensions (ColorZilla, Grammarly, password managers) inject
          attributes onto <body> before React hydrates; suppressing the warning
          here covers only this element's attributes, not the tree below it. */}
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationLd) }}
        />
        <ScrollToTop />
        <DisclaimerGate />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[200] focus:rounded-full focus:bg-teal focus:px-5 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
