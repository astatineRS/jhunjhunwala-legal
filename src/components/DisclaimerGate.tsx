"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { site } from "@/content/site";

const STORAGE_KEY = "jjl-disclaimer-accepted";

/**
 * Bar Council of India Rule 36 gate. Indian law firms may not solicit work, so
 * a first-visit acknowledgement is standard practice. Stored in localStorage so
 * it appears once per browser.
 */
export default function DisclaimerGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage blocked — the gate simply reappears next visit */
    }
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-ink/85 px-5 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[18px] bg-cream p-7 shadow-[var(--shadow-lift)] md:p-11"
          >
            <p className="eyebrow text-gold-deep">Disclaimer</p>
            <h2 id="disclaimer-title" className="display-3 mt-3 text-ink">
              As per the rules of the Bar Council of India
            </h2>
            <div className="mt-5 space-y-3.5 text-[0.9375rem] leading-relaxed text-ink/72">
              <p>
                {site.name} does not advertise or solicit work. By clicking &ldquo;I Agree&rdquo; below, you acknowledge
                and confirm that:
              </p>
              <ul className="space-y-2.5 pl-5">
                {[
                  "There has been no advertisement, personal communication, solicitation, invitation or inducement of any kind from the firm or any of its members to solicit work through this website.",
                  "You wish to gain more information about the firm for your own information and use.",
                  "The information about the firm is provided only on your specific request, and any material downloaded is entirely at your discretion.",
                  "No information on this website should be construed as legal advice, and the firm is not liable for any consequence of action taken in reliance on it.",
                ].map((line) => (
                  <li key={line} className="relative pl-4 before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-gold">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={accept}
                className="rounded-full bg-teal px-8 py-3 text-[0.9375rem] font-medium text-white transition-colors duration-300 hover:bg-teal-deep"
              >
                I Agree
              </button>
              <a
                href="https://www.barcouncilofindia.org/"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-ink/15 px-8 py-3 text-center text-[0.9375rem] font-medium text-ink/70 transition-colors duration-300 hover:border-ink/40 hover:text-ink"
              >
                Read the Rules
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
