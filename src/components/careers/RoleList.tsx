"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import type { Role } from "@/content/careers";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "@/components/ui/icons";
import ArrowBadge from "@/components/ui/ArrowBadge";

/** Expandable list of open roles. One row open at a time; rows are plain buttons. */
export default function RoleList({ roles, email }: { roles: Role[]; email: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-3">
      {roles.map((role, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-role-${index}`;
        const buttonId = `${panelId}-trigger`;
        const subject = encodeURIComponent(`Application — ${role.title}`);
        const body = encodeURIComponent(
          `Dear Jhunjhunwala Legal,\n\nI would like to apply for the ${role.title} role.\n\nI have attached my CV and a short writing sample.\n\nKind regards,\n`,
        );

        return (
          <motion.div
            key={role.title}
            layout
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            className={cn(
              "overflow-hidden rounded-[var(--radius-card)] border transition-colors duration-500 ease-[var(--ease-out-expo)]",
              isOpen ? "border-gold/45 bg-sand-soft" : "border-ink/10 bg-cream hover:border-ink/25",
            )}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full flex-col gap-4 px-5 py-6 text-left md:flex-row md:items-center md:gap-8 md:px-8"
              >
                <span className="display-3 flex-1 text-ink">{role.title}</span>
                <span className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-[0.8125rem] tracking-tight text-ink/60">
                  <span>{role.type}</span>
                  <span className="hidden h-1 w-1 rounded-full bg-ink/25 md:inline-block" />
                  <span>{role.location}</span>
                  <span className="hidden h-1 w-1 rounded-full bg-ink/25 md:inline-block" />
                  <span>{role.experience}</span>
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-teal text-white"
                  aria-hidden
                >
                  <ChevronDown className="size-4" />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-ink/10 px-5 py-7 md:px-8">
                    <p className="max-w-2xl text-balance-pretty leading-relaxed text-ink/70">{role.summary}</p>

                    <p className="eyebrow mt-7 text-teal">What the work looks like</p>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {role.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/70">
                          <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-gold" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`mailto:${email}?subject=${subject}&body=${body}`}
                      className="group mt-8 inline-flex items-center gap-3 rounded-full bg-teal py-2 pl-7 pr-2 text-[0.9375rem] font-medium text-white transition-colors duration-400 ease-[var(--ease-out-expo)] hover:bg-teal-deep"
                    >
                      <span>Apply for this role</span>
                      <ArrowBadge tone="white" size={34} />
                    </a>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
