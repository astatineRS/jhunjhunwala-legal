"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Person } from "@/content/people";
import { EASE_OUT_EXPO } from "@/lib/motion";
import ArrowBadge from "@/components/ui/ArrowBadge";

const panel = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE_OUT_EXPO } },
};

const column = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.18 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT_EXPO } },
};

/**
 * Lead-partner panel on /people. The observer sits on the outer panel — the
 * masked portrait and the stacked copy animate through variants, never through
 * their own viewport triggers.
 */
export default function PeopleSpotlight({ person }: { person: Person }) {
  return (
    <motion.div
      variants={panel}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="overflow-hidden rounded-[var(--radius-card)] bg-sand"
    >
      <div className="grid gap-0 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:min-h-[32rem]">
          <motion.div
            variants={{
              hidden: { scale: 1.1 },
              show: { scale: 1, transition: { duration: 1.4, ease: EASE_OUT_EXPO } },
            }}
            className="absolute inset-0"
          >
            <Image
              src={person.image}
              alt={person.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </motion.div>
        </div>

        <motion.div
          variants={column}
          className="flex flex-col justify-center gap-6 p-7 sm:p-10 lg:p-14"
        >
          <motion.div variants={item}>
            <p className="eyebrow text-teal">Leading the firm</p>
            <h2 className="display-2 mt-3 text-ink">{person.name}</h2>
            <p className="mt-2 text-[1.0625rem] text-ink/60">{person.role}</p>
          </motion.div>

          <motion.ul variants={item} className="flex flex-wrap gap-2">
            {person.focus.map((focus) => (
              <li
                key={focus}
                className="rounded-full border border-ink/12 bg-cream/70 px-3.5 py-1.5 text-[0.78rem] font-medium tracking-tight text-ink/70"
              >
                {focus}
              </li>
            ))}
          </motion.ul>

          <motion.p variants={item} className="max-w-xl text-balance-pretty leading-relaxed text-ink/70">
            {person.bio[0]}
          </motion.p>

          <motion.div variants={item}>
            <Link
              href={`/people/${person.slug}`}
              className="group inline-flex items-center gap-3 text-[0.95rem] font-medium text-teal transition-colors duration-500 ease-[var(--ease-out-expo)] hover:text-teal-deep"
            >
              <span>Read {person.name.split(" ")[0]}&rsquo;s profile</span>
              <ArrowBadge tone="teal" size={34} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
