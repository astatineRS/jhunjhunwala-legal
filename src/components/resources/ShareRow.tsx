"use client";

import { useCallback, useEffect, useState } from "react";
import { CheckCircle, LinkedInIcon, ShareIcon, XIcon } from "@/components/ui/icons";

function copyToClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(value);
  }

  const field = document.createElement("textarea");
  field.value = value;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(field);
  return ok ? Promise.resolve() : Promise.reject(new Error("copy-unavailable"));
}

/** Copy-link control plus the two share targets the firm actually uses. */
export default function ShareRow({ url, title }: { url: string; title: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = window.setTimeout(() => setState("idle"), 2600);
    return () => window.clearTimeout(timer);
  }, [state]);

  const onCopy = useCallback(() => {
    copyToClipboard(url).then(
      () => setState("copied"),
      () => setState("failed"),
    );
  }, [url]);

  const linkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const x = `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;

  return (
    <div className="mt-8 md:mt-14 flex flex-wrap items-center gap-3 md:gap-4 border-t border-ink/10 pt-5 md:pt-7">
      <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink/45">
        Share this article
      </span>

      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={onCopy}
          className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-[0.875rem] font-medium text-ink transition-colors duration-500 ease-[var(--ease-out-expo)] hover:border-ink/40 hover:bg-ink/5"
        >
          {state === "copied" ? (
            <CheckCircle className="size-4 text-teal" />
          ) : (
            <ShareIcon className="size-4 text-ink/55 transition-colors duration-500 group-hover:text-ink" />
          )}
          <span>
            {state === "copied" ? "Link copied" : state === "failed" ? "Copy unavailable" : "Copy link"}
          </span>
        </button>

        <a
          href={linkedIn}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Share “${title}” on LinkedIn`}
          className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink/60 transition-colors duration-500 ease-[var(--ease-out-expo)] hover:border-teal hover:bg-teal hover:text-white"
        >
          <LinkedInIcon className="size-4" />
        </a>

        <a
          href={x}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Share “${title}” on X`}
          className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink/60 transition-colors duration-500 ease-[var(--ease-out-expo)] hover:border-ink hover:bg-ink hover:text-cream"
        >
          <XIcon className="size-4" />
        </a>
      </div>

      <span aria-live="polite" className="sr-only">
        {state === "copied" ? "Article link copied to clipboard" : ""}
      </span>
    </div>
  );
}
