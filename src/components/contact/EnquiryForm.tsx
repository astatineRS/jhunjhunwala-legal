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

/** Underlined field: no box, a single hairline rule that turns teal on focus. */
const fieldBase =
  "w-full border-b bg-transparent pb-3 pt-2 text-[1.0625rem] text-ink outline-none transition-colors duration-400 ease-[var(--ease-out-expo)] placeholder:text-ink/35 focus:border-teal disabled:opacity-55";

const labelClass = "text-[1.0625rem] leading-snug text-ink/80";

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
    <div className="relative">
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
            <h3 className="display-3 mt-6 text-ink">Thank you — your details are noted</h3>
            <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-ink/65">
              A member of the firm will review what you have shared and respond within one working
              day. If the matter is urgent, please call the office directly rather than wait for a
              reply.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-8 text-[0.9375rem] font-medium text-teal underline decoration-teal/40 underline-offset-4 transition-colors duration-300 hover:text-teal-deep hover:decoration-teal"
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
            <p className="eyebrow text-teal">Contact</p>
            <SplitText
              as="h2"
              text="Let’s Talk About Your Legal Matter"
              className="display-2 mt-3 text-ink"
            />
            <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-ink/65">
              Whether you know exactly what you need or are still trying to understand your options,
              we are here to start the conversation. Nothing you send here creates a
              lawyer&ndash;client relationship.
            </p>

            <form noValidate onSubmit={submit} className="mt-12 flex flex-col gap-9">
              <div className="grid gap-9 sm:grid-cols-2">
                <Field
                  name="firstName"
                  label="First Name"
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
                  value={values.organisation}
                  error={touched.organisation ? errors.organisation : undefined}
                  disabled={disabled}
                  onChange={set("organisation")}
                  onBlur={blur("organisation")}
                  autoComplete="organization"
                  className="sm:col-span-2"
                />

                <div className="flex flex-col gap-3 sm:col-span-2">
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
                        "appearance-none border-ink/20 pr-9",
                        values.interest ? "text-ink" : "text-ink/45",
                      )}
                    >
                      <option value="">Select an area</option>
                      {practiceAreas.map((area) => (
                        <option key={area.slug} value={area.title}>
                          {area.title}
                        </option>
                      ))}
                      <option value="Something else">Something else</option>
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-1 top-1/2 size-5 -translate-y-1/2 text-ink/50"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="enquiry-message" className={labelClass}>
                  How can we help?{" "}
                  <span aria-hidden className="text-gold-deep">
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
                  onChange={(event) => set("message")(event.target.value)}
                  onBlur={blur("message")}
                  aria-invalid={touched.message && Boolean(errors.message)}
                  aria-describedby={touched.message && errors.message ? "enquiry-message-error" : undefined}
                  className={cn(
                    fieldBase,
                    "min-h-[7rem] resize-y leading-relaxed",
                    touched.message && errors.message ? "border-gold-deep" : "border-ink/20",
                  )}
                />
                {touched.message && errors.message ? (
                  <ErrorText id="enquiry-message-error">{errors.message}</ErrorText>
                ) : null}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button type="submit" disabled={disabled}>
                  {disabled ? "Sending…" : "Contact Us"}
                </Button>
                <p className="text-[0.8125rem] leading-relaxed text-ink/50">
                  Fields marked <span className="text-gold-deep">*</span> are required.
                </p>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <motion.p
      id={id}
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
      className="text-[0.8125rem] text-gold-deep"
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
  type?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  className?: string;
}) {
  const id = `enquiry-${name}`;
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? (
          <>
            {" "}
            <span aria-hidden className="text-gold-deep">
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
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldBase, error ? "border-gold-deep" : "border-ink/20")}
      />
      {error ? <ErrorText id={`${id}-error`}>{error}</ErrorText> : null}
    </div>
  );
}
