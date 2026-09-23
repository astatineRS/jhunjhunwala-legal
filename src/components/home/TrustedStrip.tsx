import { trustedBy } from "@/content/home";
import ClientLogo from "@/components/ui/ClientLogo";
import Marquee from "@/components/ui/Marquee";

/**
 * Client logos, carried across the hero boundary on a negative margin so the
 * tiles read as floating over the photograph and settling onto the page.
 */
export default function TrustedStrip() {
  return (
    <section aria-label="Trusted by" className="relative z-10 -mt-[6rem] md:-mt-[7.5rem]">
      <div className="container-page mb-3 md:mb-4">
        <p className="eyebrow text-cream/60">Trusted By</p>
      </div>

      <Marquee duration={45}>
        {trustedBy.map((client) => (
          <span key={client.name} className="mr-4 flex items-center md:mr-6">
            <ClientLogo client={client} />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
