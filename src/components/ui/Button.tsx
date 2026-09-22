import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import ArrowBadge from "./ArrowBadge";
import Magnetic from "./Magnetic";

type Variant = "primary" | "light" | "outline" | "gold" | "ghost";

const base =
  "group relative inline-flex items-center gap-2 rounded-full pl-5 pr-2 py-2 text-[0.9375rem] font-medium tracking-tight transition-colors duration-400 ease-[var(--ease-out-expo)] md:gap-3 md:pl-7";

const variants: Record<Variant, string> = {
  primary: "bg-teal text-white hover:bg-teal-deep",
  light: "bg-white text-teal hover:bg-sand",
  outline: "border border-white/45 text-white hover:border-white hover:bg-white/10",
  gold: "bg-gold text-white hover:bg-gold-deep",
  ghost: "border border-ink/15 text-ink hover:border-ink/40 hover:bg-ink/5",
};

const badgeTone = {
  primary: "white",
  light: "teal",
  outline: "outline",
  gold: "white",
  ghost: "teal",
} as const;

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  magnetic?: boolean;
};

export function Button({
  children,
  variant = "primary",
  className,
  withArrow = true,
  magnetic = true,
  ...rest
}: ButtonProps & ComponentProps<"button">) {
  const content = (
    <button className={cn(base, variants[variant], !withArrow && "pr-5 md:pr-7", className)} {...rest}>
      <span>{children}</span>
      {withArrow ? <ArrowBadge tone={badgeTone[variant]} size={34} /> : null}
    </button>
  );

  return magnetic ? <Magnetic strength={0.25}>{content}</Magnetic> : content;
}

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className,
  withArrow = true,
  magnetic = true,
  ...rest
}: ButtonProps & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const content = (
    <Link href={href} className={cn(base, variants[variant], !withArrow && "pr-5 md:pr-7", className)} {...rest}>
      <span>{children}</span>
      {withArrow ? <ArrowBadge tone={badgeTone[variant]} size={34} /> : null}
    </Link>
  );

  return magnetic ? <Magnetic strength={0.25}>{content}</Magnetic> : content;
}
