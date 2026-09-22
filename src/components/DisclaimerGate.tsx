"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { site } from "@/content/site";

const STORAGE_KEY = "jjl-disclaimer-accepted";

/**
 * Bar Council of India Rule 36 gate. Indian law firms may not solicit work, so
 * a first-visit acknowledgement is standard practice. It rises from the bottom
 * of the window as a sheet — the page stays visible behind it — and the choice
 * is stored in localStorage so it appears once per browser.
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
          className="fixed inset-0 z-[100] flex items-end bg-ink/45 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.85, ease: EASE_OUT_EXPO }}
            className="max-h-[85vh] w-full overflow-y-auto border-t-2 border-teal bg-cream shadow-[0_-18px_60px_rgb(17_17_17_/_0.28)]"
          >
            <div className="container-page grid gap-8 py-8 md:grid-cols-[minmax(0,1fr)_14rem] md:items-start md:gap-14 md:py-10">
              <div>
                <h2 id="disclaimer-title" className="font-display text-[1.75rem] font-semibold leading-tight text-ink">
                  User acknowledgment
                </h2>
                <div className="mt-4 h-px bg-ink/10" />
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink/72">
                  As per the rules of the Bar Council of India, lawyers and law firms are not permitted to solicit work
                  or advertise. By clicking &ldquo;I Agree&rdquo;, you acknowledge that there has been no advertisement,
                  personal communication, solicitation, invitation or inducement of any kind from {site.name} or any of
                  its members to solicit work through this website; that you are seeking information about the firm for
                  your own information and use; and that nothing on this website is to be construed as legal advice.
                </p>
                <Link
                  href="/disclaimer"
                  className="mt-3 inline-block text-[0.9375rem] font-medium text-teal underline underline-offset-4 transition-colors duration-300 hover:text-teal-deep"
                >
                  Read the full disclaimer
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={accept}
                  className="rounded-full bg-teal px-8 py-3 text-[0.9375rem] font-medium text-white transition-colors duration-300 hover:bg-teal-deep"
                >
                  I Agree
                </button>
                <a
                  href="https://www.barcouncilofindia.org/"
                  className="rounded-full bg-ink px-8 py-3 text-center text-[0.9375rem] font-medium text-cream transition-colors duration-300 hover:bg-ink/85"
                >
                  Exit Site
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
