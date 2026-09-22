import type { KeyService } from "@/content/practice-areas";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

/** Gold pill grid naming the work a practice area is most often asked to take on. */
export default function KeyServices({
  services,
  className,
}: {
  services: KeyService[];
  className?: string;
}) {
  return (
    <ul className={cn("grid grid-cols-2 gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {services.map((service, index) => (
        <Reveal as="li" key={service.name} delay={index % 3} className="h-full">
          <span className="flex h-full min-h-16 md:min-h-24 items-center justify-center rounded-[18px] bg-gold px-4 py-4 md:px-6 md:py-6 text-center text-[0.9375rem] md:text-[1.0625rem] font-medium leading-snug text-white">
            {service.name}
          </span>
        </Reveal>
      ))}
    </ul>
  );
}
