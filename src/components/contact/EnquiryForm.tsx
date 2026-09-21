"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { practiceAreas } from "@/content/practice-areas";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import SplitText from "@/components/ui/SplitText";
import { CheckCircle, ChevronDown } from "@/components/ui/icons";

type FieldName =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "organisation"
  | "interest"
  | "message";

type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const EMPTY: Values = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organisation: "",
  interest: "",
  message: "",
};

/** RFC-shaped enough for a web form: something@something.tld, no spaces. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function validateField(name: FieldName, value: string): string | undefined {
  const trimmed = value.trim();

  if (name === "firstName" && !trimmed) return "Please tell us your first name.";
  if (name === "email") {
    if (!trimmed) return "We need an email address to reply to you.";
    if (!EMAIL_RE.test(trimmed)) return "That email address doesn't look right.";
  }
  if (name === "message" && !trimmed) return "A line or two about the matter helps us prepare.";
  return undefined;
}

const REQUIRED: FieldName[] = ["firstName", "email", "message"];

const fieldBase =
  "w-full border-b bg-transparent pb-2.5 pt-1 text-[0.9375rem] text-cream outline-none transition-colors duration-400 ease-[var(--ease-out-expo)] placeholder:text-cream/35 focus:border-gold disabled:opacity-55";

export default function EnquiryForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const set = (name: FieldName) => (value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear an existing error as soon as the field becomes valid again.
    if (errors[name] && !validateField(name, value)) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const blur = (name: FieldName) => () => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, values[name]);
    setErrors((prev) => {
      const next = { ...prev };
      if (error) next[name] = error;
      else delete next[name];
      return next;
    });
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors: Errors = {};
    for (const name of REQUIRED) {
      const error = validateField(name, values[name]);
      if (error) nextErrors[name] = error;
    }

    setTouched((prev) => ({ ...prev, firstName: true, email: true, message: true }));
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const first = REQUIRED.find((name) => nextErrors[name]);
      if (first) document.getElementById(`enquiry-${first}`)?.focus();
      return;
    }

    setStatus("submitting");
    // Nothing is transmitted: the firm takes enquiries by email and telephone.
    const { promise, resolve } = Promise.withResolvers<void>();
    setTimeout(resolve, 900);
    await promise;
    setStatus("success");
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setTouched({});
    setStatus("idle");
  };

  const disabled = status === "submitting";

  return (
    <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-charcoal p-7 md:p-10 lg:p-12">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            className="flex min-h-[26rem] flex-col items-start justify-center"
            role="status"
            aria-live="polite"
          >
            <motion.span
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.65, ease: EASE_OUT_EXPO, delay: 0.1 }}
              className="grid size-14 place-items-center rounded-full bg-teal text-cream"
            >
              <CheckCircle className="size-7" />
            </motion.span>
            <h3 className="display-3 mt-6 text-cream">Thank you — your details are noted</h3>
            <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-cream/70">
              A member of the firm will review what you have shared and respond within one working
              day. If the matter is urgent, please call the office directly rather than wait for a
              reply.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-8 text-[0.9375rem] font-medium text-gold underline decoration-gold/40 underline-offset-4 transition-colors duration-300 hover:text-cream hover:decoration-cream/50"
            >
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          >
            <p className="eyebrow text-gold">Contact</p>
            <SplitText
              as="h2"
              text="Let’s talk about your legal matter"
              className="display-2 mt-3 text-cream"
            />
            <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-cream/70">
              Share a few details and we will come back to you with the right person, an honest read
              on your position, and what the next step involves. Nothing you send here creates a
              lawyer&ndash;client relationship.
            </p>

            <form noValidate onSubmit={submit} className="mt-9 flex flex-col gap-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <Field
                  name="firstName"
                  label="First Name"
                  placeholder="Ananya"
                  required
                  value={values.firstName}
                  error={touched.firstName ? errors.firstName : undefined}
                  disabled={disabled}
                  onChange={set("firstName")}
                  onBlur={blur("firstName")}
                  autoComplete="given-name"
                />
                <Field
                  name="lastName"
                  label="Last Name"
                  placeholder="Sengupta"
                  value={values.lastName}
                  error={touched.lastName ? errors.lastName : undefined}
                  disabled={disabled}
                  onChange={set("lastName")}
                  onBlur={blur("lastName")}
                  autoComplete="family-name"
                />
                <Field
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="you@company.in"
                  required
                  value={values.email}
                  error={touched.email ? errors.email : undefined}
                  disabled={disabled}
                  onChange={set("email")}
                  onBlur={blur("email")}
                  autoComplete="email"
                />
                <Field
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 98000 00000"
                  value={values.phone}
                  error={touched.phone ? errors.phone : undefined}
                  disabled={disabled}
                  onChange={set("phone")}
                  onBlur={blur("phone")}
                  autoComplete="tel"
                />
                <Field
                  name="organisation"
                  label="Organisation"
                  placeholder="Company or institution"
                  value={values.organisation}
                  error={touched.organisation ? errors.organisation : undefined}
                  disabled={disabled}
                  onChange={set("organisation")}
                  onBlur={blur("organisation")}
                  autoComplete="organization"
                  className="sm:col-span-2 lg:col-span-1"
                />

                <div className="flex flex-col gap-2 sm:col-span-2 lg:col-span-1">
                  <label htmlFor="enquiry-interest" className={labelClass}>
                    Area of Interest
                  </label>
                  <div className="relative">
                    <select
                      id="enquiry-interest"
                      name="interest"
                      value={values.interest}
                      disabled={disabled}
                      onChange={(event) => set("interest")(event.target.value)}
                      className={cn(
                        fieldBase,
                        "appearance-none border-white/22 pr-8",
                        values.interest ? "text-cream" : "text-cream/45",
                      )}
                    >
                      <option value="" className="text-ink">
                        Select an area
                      </option>
                      {practiceAreas.map((area) => (
                        <option key={area.slug} value={area.title} className="text-ink">
                          {area.title}
                        </option>
                      ))}
                      <option value="Something else" className="text-ink">
                        Something else
                      </option>
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-1 top-1.5 size-4 text-cream/50"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="enquiry-message" className={labelClass}>
                  How can we help?{" "}
                  <span aria-hidden className="text-gold">
                    *
                  </span>
                </label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={4}
                  required
                  value={values.message}
                  disabled={disabled}
                  placeholder="A short description of the situation, the parties involved, and any deadline you are working to."
                  onChange={(event) => set("message")(event.target.value)}
                  onBlur={blur("message")}
                  aria-invalid={touched.message && Boolean(errors.message)}
                  aria-describedby={touched.message && errors.message ? "enquiry-message-error" : undefined}
                  className={cn(
                    fieldBase,
                    "resize-y leading-relaxed",
                    touched.message && errors.message ? "border-gold" : "border-white/22",
                  )}
                />
                {touched.message && errors.message ? (
                  <ErrorText id="enquiry-message-error">{errors.message}</ErrorText>
                ) : null}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button type="submit" variant="light" disabled={disabled}>
                  {disabled ? "Sending…" : "Contact Us"}
                </Button>
                <p className="text-[0.8125rem] leading-relaxed text-cream/50">
                  Fields marked <span className="text-gold">*</span> are required.
                </p>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const labelClass = "eyebrow text-[0.6875rem] text-cream/55";

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <motion.p
      id={id}
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
      className="text-[0.8125rem] text-gold"
    >
      {children}
    </motion.p>
  );
}

function Field({
  name,
  label,
  value,
  error,
  onChange,
  onBlur,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
  autoComplete,
  className,
}: {
  name: FieldName;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  className?: string;
}) {
  const id = `enquiry-${name}`;
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? (
          <>
            {" "}
            <span aria-hidden className="text-gold">
              *
            </span>
          </>
        ) : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldBase, error ? "border-gold" : "border-white/22")}
      />
      {error ? <ErrorText id={`${id}-error`}>{error}</ErrorText> : null}
    </div>
  );
}
