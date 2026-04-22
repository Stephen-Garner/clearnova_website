"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { XLogo } from "@/components/ui/icons/XLogo";
import { LinkedInLogo } from "@/components/ui/icons/LinkedInLogo";

type ContactFormState = {
  name: string; email: string; company: string; role: string; stage: string; message: string;
};

const initialState: ContactFormState = {
  name: "", email: "", company: "", role: "", stage: "", message: "",
};

type Affordance = { icon: LucideIcon; label: string; value: string; href?: string };

const affordances: Affordance[] = [
  { icon: Mail, label: "Email", value: "hello@clearnova.com", href: "mailto:hello@clearnova.com" },
  { icon: Phone, label: "Phone", value: "+1 (212) 555-0134", href: "tel:+12125550134" },
  { icon: MapPin, label: "Reach", value: "Remote-first, serving North America & EMEA" },
  { icon: Clock, label: "Response", value: "Within 1 business day" },
];
const roles = ["Owner / Developer", "Operator", "Integrator", "Architect / Engineer", "Other"];
const stages = ["Planning", "Design", "Construction", "Operations"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

const inputCls =
  "w-full rounded-xl border border-border-strong bg-black/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-all duration-200 focus:border-brand-400 focus:bg-black/[0.05] focus:outline-none focus:ring-2 focus:ring-brand-400/40";
const labelCls =
  "mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-strong";
const socialCls =
  "glass inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/50";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [values, setValues] = React.useState<ContactFormState>(initialState);
  const [submitted, setSubmitted] = React.useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setValues((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setValues(initialState);
    setSubmitted(false);
  };

  const mp = prefersReducedMotion
    ? {}
    : {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-80px" },
      };

  return (
    <section id="contact" className="relative w-full overflow-hidden py-24 lg:py-36">
      <div aria-hidden className="aurora absolute inset-0 -z-10 opacity-80" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(45,212,191,0.08),_transparent_60%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}
          <motion.div {...mp} className="flex flex-col">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-black/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_12px_#2dd4bf]" />
              Get in Touch
            </div>

            <h2 className="mt-6 text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Let&apos;s map
              <br />
              <span className="text-gradient-brand font-[family-name:var(--font-instrument-serif)] italic">
                your path to innovation.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Share a few details about your project and we&apos;ll schedule an initial
              conversation to explore where independent oversight fits.
            </p>

            <ul className="mt-10 space-y-5">
              {affordances.map(({ icon: Icon, label, value, href }) => {
                const body = (
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 ring-1 ring-brand-400/20">
                      <Icon aria-hidden className="h-4 w-4 text-brand-400" strokeWidth={1.75} />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-strong">{label}</span>
                      <span className="mt-1 text-sm text-foreground sm:text-base">{value}</span>
                    </div>
                  </div>
                );
                return (
                  <li key={label}>
                    {href ? <a href={href} className="group block transition-opacity hover:opacity-90">{body}</a> : body}
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 flex items-center gap-3">
              <a href="https://www.linkedin.com/" aria-label="ClearNova on LinkedIn" className={socialCls}>
                <LinkedInLogo size={14} className="text-muted-strong" />
              </a>
              <a href="https://x.com/" aria-label="ClearNova on X" className={socialCls}>
                <XLogo size={14} className="text-muted-strong" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div {...mp} className="relative">
            <div className="glass relative rounded-3xl p-6 sm:p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-start">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/15 ring-1 ring-brand-400/40">
                    <Check aria-hidden className="h-5 w-5 text-brand-700" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-2xl font-light tracking-tight text-foreground sm:text-3xl">
                    Thanks{" "}
                    <span className="text-gradient-brand font-[family-name:var(--font-instrument-serif)] italic">
                      we&apos;ll be in touch
                    </span>{" "}
                    within 1 business day.
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Keep an eye on your inbox for a scheduling link from a ClearNova advisor.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700 transition-colors hover:text-brand-600"
                  >
                    Send another
                    <ArrowRight aria-hidden className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field id="cn-name" label="Name">
                      <input id="cn-name" name="name" type="text" required autoComplete="name"
                        value={values.name} onChange={onChange} placeholder="Your full name" className={inputCls} />
                    </Field>
                    <Field id="cn-email" label="Email">
                      <input id="cn-email" name="email" type="email" required autoComplete="email"
                        value={values.email} onChange={onChange} placeholder="you@company.com" className={inputCls} />
                    </Field>
                  </div>

                  <Field id="cn-company" label="Company">
                    <input id="cn-company" name="company" type="text" required autoComplete="organization"
                      value={values.company} onChange={onChange} placeholder="Company or organization" className={inputCls} />
                  </Field>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field id="cn-role" label="Role">
                      <select id="cn-role" name="role" required value={values.role} onChange={onChange} className={inputCls}>
                        <option value="" disabled>Select a role</option>
                        {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </Field>
                    <Field id="cn-stage" label="Project stage">
                      <select id="cn-stage" name="stage" required value={values.stage} onChange={onChange} className={inputCls}>
                        <option value="" disabled>Select a stage</option>
                        {stages.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </Field>
                  </div>

                  <Field id="cn-message" label="Message">
                    <textarea id="cn-message" name="message" required rows={5}
                      value={values.message} onChange={onChange}
                      placeholder="Tell us about the project, timeline, and where you need oversight."
                      className={`${inputCls} resize-none`} />
                  </Field>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Request a consult
                    <ArrowRight aria-hidden className="h-4 w-4" />
                  </Button>

                  <p className="pt-2 text-xs leading-relaxed text-muted/80">
                    No newsletter. Your details are used only to schedule this conversation.
                  </p>
                </form>
              )}

              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { Contact };
