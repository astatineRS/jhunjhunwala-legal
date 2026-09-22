"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";

/** Routes that render a full-bleed dark hero behind a transparent header. */
const DARK_HERO_ROUTES = ["/", "/about", "/expertise", "/resources", "/contact", "/careers"];

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const overDarkHero = DARK_HERO_ROUTES.includes(pathname);
  const solid = scrolled || !overDarkHero || open;

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 40));

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.1 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500",
        solid ? "bg-cream/40 backdrop-blur-2xl" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "container-page flex items-center justify-between gap-6 transition-[height] duration-500 ease-[var(--ease-out-expo)]",
          scrolled ? "h-[4.5rem]" : "h-[4.5rem] md:h-[var(--header-h)]",
        )}
      >
        <Logo
          tone={solid ? "dark" : "light"}
          compact={scrolled}
          className="origin-left scale-[0.86] md:scale-100"
        />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-300",
                  solid ? "text-ink/70 hover:text-ink" : "text-white/80 hover:text-white",
                  active && (solid ? "text-ink" : "text-white"),
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className={cn("absolute inset-0 rounded-full", solid ? "bg-sand" : "bg-white/18")}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* `hidden` cannot beat the button's own `inline-flex` (same property,
              later in the cascade), so the breakpoint lives on a wrapper. */}
          <span className="hidden sm:inline-flex">
            <ButtonLink href="/contact" variant={solid ? "primary" : "light"}>
              Contact Us
            </ButtonLink>
          </span>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "relative grid size-11 place-items-center rounded-full border transition-colors lg:hidden",
              solid ? "border-ink/15 text-ink" : "border-white/30 text-white",
            )}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-[5px]">
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                className="block h-[1.5px] w-full bg-current"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] w-full bg-current"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                className="block h-[1.5px] w-full bg-current"
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
            className="overflow-hidden border-t border-ink/8 bg-cream lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-3 md:py-6">
              {nav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.06 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block border-b border-ink/8 py-2.5 font-display text-xl md:py-4 md:text-2xl",
                      isActive(item.href) ? "text-teal" : "text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 md:pt-6">
                <ButtonLink href="/contact" variant="primary" magnetic={false}>
                  Contact Us
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
