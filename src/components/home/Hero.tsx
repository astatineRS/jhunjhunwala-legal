"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EASE_OUT_EXPO } from "@/lib/motion";
import SplitText from "@/components/ui/SplitText";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Full-viewport photographic hero. The header is transparent over this section,
 * so the section carries its own top padding and the scrim keeps the nav legible.
 *
 * Two nested layers do the motion: the outer one drifts with scroll, the inner
 * one runs the slow Ken-Burns scale. Splitting them avoids fighting over the
 * same `transform` channel.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-ink pb-32 pt-[calc(var(--header-h)+2rem)] md:pb-40"
    >
      <motion.div style={reduced ? undefined : { y }} className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          animate={reduced ? undefined : { scale: [1.02, 1.14] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src="/images/hero-home.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_35%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink/90" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(75% 60% at 50% 42%, transparent 0%, rgb(17 17 17 / 0.55) 100%)" }}
        />
      </motion.div>

      <motion.div
        style={reduced ? undefined : { opacity: fade }}
        className="container-page flex flex-1 flex-col justify-center py-10 text-center"
      >
        <SplitText
          as="h1"
          text="When the law is complex, you deserve clarity"
          delay={0.35}
          className="display-1 mx-auto mt-6 max-w-4xl text-cream"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.7 }}
          className="mx-auto mt-7 max-w-2xl text-balance-pretty text-[1.0625rem] leading-relaxed text-cream/80 md:text-[1.125rem]"
        >
          We help individuals and businesses understand their legal position, navigate difficult
          situations, and make informed decisions with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.85 }}
          className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <ButtonLink href="/contact" variant="light">
            Book A Consultation
          </ButtonLink>
          <ButtonLink href="/expertise" variant="outline">
            Explore Our Services
          </ButtonLink>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 1.2 }}
        className="pointer-events-none flex shrink-0 flex-col items-center gap-3"
        aria-hidden
      >
        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.42em] text-cream/55">
          Scroll
        </span>
        <span className="relative h-14 w-px overflow-hidden bg-cream/25">
          <motion.span
            className="absolute inset-x-0 top-0 h-6 bg-gold"
            animate={reduced ? { y: 0 } : { y: ["-100%", "240%"] }}
            transition={{ duration: 2.4, ease: EASE_OUT_EXPO, repeat: Infinity, repeatDelay: 0.3 }}
          />
        </span>
      </motion.div>
    </section>
  );
}
