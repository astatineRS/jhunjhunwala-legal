"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EASE_OUT_EXPO } from "@/lib/motion";
import SplitText from "@/components/ui/SplitText";

/** Shared interior-page banner: dark photographic band with centred title. */
export default function PageHero({
  title,
  subtitle,
  image = "/images/hero-banner.jpg",
}: {
  title: string;
  subtitle?: string;
  image?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[clamp(240px,34svh,320px)] items-center overflow-hidden bg-ink pt-[var(--header-h)] md:min-h-[clamp(380px,46vh,520px)]">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/80" />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="container-page py-8 md:py-16 text-center">
        <SplitText as="h1" text={title} className="display-1 text-cream" />
        {subtitle ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.35 }}
            className="mx-auto mt-4 max-w-xl text-balance-pretty text-[0.9375rem] leading-relaxed text-cream/80 md:mt-5 md:text-[1.0625rem]"
          >
            {subtitle}
          </motion.p>
        ) : null}
      </motion.div>
    </section>
  );
}
