"use client";

import { motion } from "framer-motion";
import { flipUp, staggerParent, viewportOnce } from "@/lib/motion";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Closing statement before the FAQs. Each line is hinged: it tips up from its
 * own base into the page as the section enters the viewport, which reads as a
 * deliberate pause rather than another fade.
 */
export default function CounselStatement() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-page text-center [perspective:1200px]"
      >
        <motion.h2
          variants={flipUp}
          className="display-2 mx-auto max-w-3xl text-ink [transform-origin:50%_100%]"
        >
          The counsel that <span className="text-gold-deep">grows</span> with you.
        </motion.h2>

        <motion.p
          variants={flipUp}
          className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink/60 [transform-origin:50%_100%]"
        >
          Talk to us before you need to.
        </motion.p>

        <motion.div
          variants={flipUp}
          className="mt-10 flex justify-center [transform-origin:50%_100%]"
        >
          <ButtonLink href="/contact">Talk To Our Team</ButtonLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
