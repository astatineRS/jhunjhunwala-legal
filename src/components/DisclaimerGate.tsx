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
            className="max-h-[70vh] w-full overflow-y-auto border-t-2 border-teal bg-cream shadow-[0_-18px_60px_rgb(17_17_17_/_0.28)] md:max-h-[85vh]"
          >
            <div className="container-page grid gap-5 py-6 md:grid-cols-[minmax(0,1fr)_14rem] md:items-start md:gap-14 md:py-10">
              <div>
                <h2 id="disclaimer-title" className="font-display text-[1.375rem] font-semibold leading-tight text-ink md:text-[1.75rem]">
                  User acknowledgment
                </h2>
                <div className="mt-3 h-px bg-ink/10 md:mt-4" />
                <p className="mt-3 text-[0.875rem] leading-relaxed text-ink/72 md:mt-4 md:text-[0.9375rem]">
                  As per the rules of the Bar Council of India, lawyers and law firms are not permitted to solicit work
                  or advertise. By clicking &ldquo;I Agree&rdquo;, you acknowledge that there has been no advertisement,
                  personal communication, solicitation, invitation or inducement of any kind from {site.name} or any of
                  its members to solicit work through this website; that you are seeking information about the firm for
                  your own information and use; and that nothing on this website is to be construed as legal advice.
                </p>
                <Link
                  href="/disclaimer"
                  className="mt-3 inline-block text-[0.875rem] font-medium text-teal underline underline-offset-4 transition-colors duration-300 hover:text-teal-deep md:text-[0.9375rem]"
                >
                  Read the full disclaimer
                </Link>
              </div>

              <div className="flex gap-3 md:flex-col">
                <button
                  type="button"
                  onClick={accept}
                  className="max-md:flex-1 rounded-full bg-teal px-5 py-3 text-[0.9375rem] font-medium text-white transition-colors duration-300 hover:bg-teal-deep md:px-8"
                >
                  I Agree
                </button>
                <a
                  href="https://www.barcouncilofindia.org/"
                  className="max-md:flex-1 rounded-full bg-ink px-5 py-3 text-center text-[0.9375rem] font-medium text-cream transition-colors duration-300 hover:bg-ink/85 md:px-8"
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
