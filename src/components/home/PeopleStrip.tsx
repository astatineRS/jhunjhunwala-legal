import { people } from "@/content/people";
import PersonCard from "@/components/cards/PersonCard";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PeopleStrip() {
  const team = people.slice(1, 9);

  return (
    <section className="bg-cream pb-20 md:pb-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="The people you will work with"
          title="Counsel Who Stay Close To The Matter"
          aside={
            <p className="text-[1.0625rem] leading-relaxed text-ink/65">
              Every engagement is led by a partner and staffed deliberately. You will know who is
              handling your matter, and you will hear from them directly.
            </p>
          }
        />

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {team.map((person, index) => (
            <Reveal key={person.slug} delay={index % 4}>
              <PersonCard person={person} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={1} className="mt-12 flex justify-center">
          <ButtonLink href="/people" variant="ghost">
            View Team Members
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
