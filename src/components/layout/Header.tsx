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
const DARK_HERO_ROUTES = ["/", "/about", "/expertise", "/contact", "/careers"];

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const overDarkHero = DARK_HERO_ROUTES.includes(pathname);
  /** Desktop bar only: the phone header is always an ivory card. */
  const solid = scrolled || !overDarkHero;

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
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* Phone / tablet: a floating ivory card. Ivory regardless of what sits
          behind it, so the teal wordmark always reads, and it grows downwards
          into the menu instead of dropping a separate panel. */}
      <div className="px-3 pt-3 lg:hidden">
        <motion.div
          layout
          transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
          className="overflow-hidden rounded-[22px] bg-cream shadow-[0_20px_45px_-26px_rgb(17_17_17/0.65)]"
        >
          <div className="flex h-[4.25rem] items-center justify-between pl-4 pr-3">
            <Logo tone="dark" size="sm" className="origin-left scale-[0.92]" />

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5"
            >
              <span className="flex w-5 flex-col gap-[5px]">
                <motion.span
                  animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                  className="block h-[1.5px] w-full bg-current"
                />
                <motion.span
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="block h-[1.5px] w-full bg-current"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                  className="block h-[1.5px] w-full bg-current"
                />
              </span>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                key="menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                className="overflow-hidden"
              >
                <nav className="flex flex-col px-5 pb-5" aria-label="Primary">
                  {nav.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: EASE_OUT_EXPO, delay: 0.05 + index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block border-t border-ink/10 py-3.5 font-display text-[1.375rem] font-semibold leading-none",
                          isActive(item.href) ? "text-teal" : "text-ink",
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: EASE_OUT_EXPO, delay: 0.05 + nav.length * 0.05 }}
                    className="pt-4"
                  >
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 rounded-[14px] bg-teal px-5 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors duration-400 hover:bg-teal-deep"
                    >
                      Talk To Our Team
                      <span aria-hidden>→</span>
                    </Link>
                  </motion.div>
                </nav>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Desktop bar */}
      <div
        className={cn(
          "hidden transition-[background-color,box-shadow] duration-500 lg:block",
          solid ? "bg-cream shadow-[0_1px_0_0_rgb(17_17_17/0.06)]" : "bg-transparent",
        )}
      >
        <div
          className={cn(
            "container-page flex items-center justify-between gap-6 transition-[height] duration-500 ease-[var(--ease-out-expo)]",
            scrolled ? "h-[4.5rem]" : "h-[var(--header-h)]",
          )}
        >
          <Logo tone={solid ? "dark" : "light"} size={scrolled ? "sm" : "md"} />

          <nav className="flex items-center gap-1" aria-label="Primary">
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

          <ButtonLink href="/contact" variant={solid ? "primary" : "light"}>
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </motion.header>
  );
}
