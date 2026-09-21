import { whyChooseUs } from "@/content/home";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { CommentIcon, EyeIcon, PhoneIcon, ShareIcon } from "@/components/ui/icons";

const icons: Record<string, typeof CommentIcon> = {
  "Clear Communication": CommentIcon,
  "Practical Thinking": ShareIcon,
  "Attention To Detail": EyeIcon,
  "Personal Attention": PhoneIcon,
};

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-start lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="A legal partner, not just a legal service"
            title="Why Choose Us?"
            description="Clients stay with us because the working relationship is straightforward: you always know where your matter stands, what it needs next, and why we are recommending it."
          />

          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => {
              const Icon = icons[item.title] ?? CommentIcon;
              return (
                <Reveal key={item.title} delay={index} className="group">
                  <span className="grid size-14 place-items-center rounded-full bg-teal text-cream transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-110">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.3125rem] font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/65">
                    {item.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={1}>
          <ParallaxImage
            src="/images/library.jpg"
            alt="The firm's library in Kolkata"
            sizes="(max-width: 1024px) 100vw, 40vw"
            distance={48}
            className="h-[22rem] w-full rounded-[var(--radius-card)] sm:h-[28rem] lg:h-[40rem]"
          />
        </Reveal>
      </div>
    </section>
  );
}
