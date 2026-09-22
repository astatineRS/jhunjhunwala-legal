"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { ButtonLink } from "@/components/ui/Button";

const HEADLINE: { word: string; accent?: boolean }[] = [
  { word: "The" },
  { word: "counsel" },
  { word: "that" },
  { word: "grows", accent: true },
  { word: "with" },
  { word: "you." },
];

/** Each word hinges up from its own base; the block replays on every pass. */
const word = {
  hidden: { opacity: 0, rotateX: -85, y: 22 },
  show: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.9, ease: EASE_OUT_EXPO } },
};

const line = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT_EXPO } },
};

/**
 * Closing statement before the FAQs. The headline is animated word by word —
 * each tips up from its own baseline — and the whole block re-runs every time
 * it scrolls back into view, so the section is never caught sitting still.
 */
export default function CounselStatement() {
  return (
    <section className="bg-cream py-12 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.5 }}
        transition={{ staggerChildren: 0.085 }}
        className="container-page text-center [perspective:900px]"
      >
        <h2 className="display-2 mx-auto max-w-3xl text-ink">
          {HEADLINE.map((item, index) => (
            <Fragment key={item.word}>
              {index > 0 ? " " : null}
              <motion.span
                variants={word}
                className={`inline-block [transform-origin:50%_100%] ${item.accent ? "text-gold-deep" : ""}`}
              >
                {item.word}
              </motion.span>
            </Fragment>
          ))}
        </h2>

        <motion.p
          variants={line}
          className="mx-auto mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-ink/60 md:mt-6 md:text-[1.0625rem]"
        >
          Talk to us before you need to.
        </motion.p>

        <motion.div variants={line} className="mt-6 flex justify-center md:mt-10">
          <ButtonLink href="/contact">Talk To Our Team</ButtonLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
