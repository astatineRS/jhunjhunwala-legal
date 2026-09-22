import type { ComponentType, SVGProps } from "react";
import { whyChooseUs } from "@/content/home";
import Reveal from "@/components/ui/Reveal";
import { CheckCircle, ClockIcon, CommentIcon, EyeIcon } from "@/components/ui/icons";

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "Clear Communication": CommentIcon,
  "Practical Thinking": CheckCircle,
  "Attention To Detail": EyeIcon,
  "Personal Attention": ClockIcon,
};

/** The four operating principles, each on a sand card with an icon chip. */
export default function GuidingPrinciples() {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
      {whyChooseUs.map((item, index) => {
        const Icon = icons[item.title] ?? CheckCircle;
        return (
          <Reveal as="li" key={item.title} delay={index} className="h-full">
            <article className="group flex h-full flex-col gap-3 sm:gap-4 rounded-[var(--radius-card)] bg-sand-soft p-4 sm:p-6 transition-all duration-600 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)] md:p-7">
              <span className="grid size-10 sm:size-12 place-items-center rounded-full bg-teal text-cream transition-colors duration-500 group-hover:bg-teal-deep">
                <Icon className="size-4 sm:size-5" />
              </span>
              <h3 className="font-display text-[1.0625rem] sm:text-[1.3125rem] font-semibold leading-snug text-ink">
                {item.title}
              </h3>
              <p className="text-[0.8125rem] sm:text-[0.9375rem] leading-relaxed text-ink/68">{item.description}</p>
            </article>
          </Reveal>
        );
      })}
    </ul>
  );
}
