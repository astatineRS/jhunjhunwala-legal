"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type Field = "name" | "email" | "message";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(field: Field, value: string): string | undefined {
  const trimmed = value.trim();
  if (field === "name") {
    if (!trimmed) return "Please tell us your name.";
    if (trimmed.length < 2) return "That name looks a little short.";
    return undefined;
  }
  if (field === "email") {
    if (!trimmed) return "We need an email address to reply to.";
    if (!EMAIL.test(trimmed)) return "Please check the email address.";
    return undefined;
  }
  if (!trimmed) return "A sentence or two is enough to start.";
  if (trimmed.length < 10) return "Please add a little more detail.";
  return undefined;
}

const fieldClass =
  "w-full border-b border-white/25 bg-transparent py-3 text-[1rem] text-cream placeholder:text-cream/35 transition-colors duration-400 focus:border-gold focus:outline-none";

/**
 * Enquiry form for the home page. It deliberately posts nowhere — the site has
 * no backend yet — so it validates locally and confirms in place.
 */
export default function ContactForm() {
  const [values, setValues] = useState<Record<Field, string>>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (field: Field, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    if (errors[field]) setErrors((previous) => ({ ...previous, [field]: validate(field, value) }));
  };

  const blur = (field: Field) => {
    setErrors((previous) => ({ ...previous, [field]: validate(field, values[field]) }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Partial<Record<Field, string>> = {
      name: validate("name", values.name),
      email: validate("email", values.email),
      message: validate("message", values.message),
    };
    setErrors(next);
    if (next.name || next.email || next.message) return;
    setSent(true);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {sent ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          className="mt-10 rounded-[var(--radius-card)] border border-gold/40 bg-white/5 p-7"
          role="status"
        >
          <CheckCircle className="size-9 text-gold" />
          <h3 className="mt-4 font-display text-[1.5rem] font-semibold text-cream">
            Thank you, {values.name.trim().split(" ")[0]}.
          </h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-cream/70">
            Your enquiry has been noted. A member of the firm will respond to{" "}
            <span className="text-cream">{values.email.trim()}</span> within one working day. If the
            matter is urgent, please call the office directly.
          </p>
          <button
            type="button"
            onClick={() => {
              setValues({ name: "", email: "", message: "" });
              setErrors({});
              setSent(false);
            }}
            className="mt-6 text-[0.875rem] font-medium text-gold underline decoration-gold/40 underline-offset-4 transition-colors duration-400 hover:decoration-gold"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          noValidate
          onSubmit={submit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          className="mt-10 flex flex-col gap-7"
        >
          <div>
            <label
              htmlFor="home-name"
              className="block text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-cream/55"
            >
              Your name
            </label>
            <input
              id="home-name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(event) => update("name", event.target.value)}
              onBlur={() => blur("name")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "home-name-error" : undefined}
              className={cn(fieldClass, errors.name && "border-[#e0a297]")}
              placeholder="Full name"
            />
            {errors.name ? (
              <p id="home-name-error" className="mt-2 text-[0.8125rem] text-[#e0a297]">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="home-email"
              className="block text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-cream/55"
            >
              Email address
            </label>
            <input
              id="home-email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => update("email", event.target.value)}
              onBlur={() => blur("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "home-email-error" : undefined}
              className={cn(fieldClass, errors.email && "border-[#e0a297]")}
              placeholder="you@company.com"
            />
            {errors.email ? (
              <p id="home-email-error" className="mt-2 text-[0.8125rem] text-[#e0a297]">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="home-message"
              className="block text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-cream/55"
            >
              How can we help?
            </label>
            <textarea
              id="home-message"
              name="message"
              rows={3}
              value={values.message}
              onChange={(event) => update("message", event.target.value)}
              onBlur={() => blur("message")}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "home-message-error" : undefined}
              className={cn(fieldClass, "resize-none", errors.message && "border-[#e0a297]")}
              placeholder="A short description of the matter"
            />
            {errors.message ? (
              <p id="home-message-error" className="mt-2 text-[0.8125rem] text-[#e0a297]">
                {errors.message}
              </p>
            ) : null}
          </div>

          <p className="text-[0.8125rem] leading-relaxed text-cream/45">
            Sending an enquiry does not create an advocate–client relationship, and please do not
            include confidential information in this form.
          </p>

          <div>
            <Button type="submit" variant="gold">
              Send Enquiry
            </Button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
