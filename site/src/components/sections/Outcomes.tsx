"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

type Kpi = {
  value: string;
  label: string;
};

type CaseStudy = {
  tag: string;
  headline: string;
  description: string;
  chips: [string, string];
  thumbGradient: string;
  accentPosition: string;
};

const KPIS: Kpi[] = [
  { value: "$2.1B+", label: "projects de-risked across three continents" },
  { value: "120+", label: "building-technology deployments advised" },
  { value: "34%", label: "average reduction in change-orders at commissioning" },
  { value: "100%", label: "of engagements shipped on-scope" },
];

const CASES: CaseStudy[] = [
  {
    tag: "CLASS A OFFICE",
    headline: "Unified twelve BAS vendors under one control layer.",
    description:
      "Replaced a fractured stack with a single integration spine, saving months of commissioning.",
    chips: ["1.4M sqft", "42 integrations"],
    thumbGradient:
      "radial-gradient(ellipse at 20% 30%, rgba(94,234,212,0.55), transparent 55%), radial-gradient(ellipse at 80% 75%, rgba(13,115,119,0.6), transparent 60%)",
    accentPosition: "top-6 right-6",
  },
  {
    tag: "LIFE SCIENCES",
    headline: "Cut lab commissioning from nine months to four.",
    description:
      "Owner-side oversight on a GMP-critical campus kept every subsystem aligned through handoff.",
    chips: ["780K sqft", "6 GMP zones"],
    thumbGradient:
      "radial-gradient(ellipse at 75% 25%, rgba(45,212,191,0.5), transparent 50%), radial-gradient(ellipse at 25% 80%, rgba(15,155,161,0.55), transparent 60%)",
    accentPosition: "bottom-6 left-6",
  },
  {
    tag: "HOSPITALITY",
    headline: "Rescued a guest-tech rollout three weeks from open.",
    description:
      "Re-scoped the IoT integration plan, stabilized vendor conflicts, and hit the opening date.",
    chips: ["420 keys", "9 integrations"],
    thumbGradient:
      "radial-gradient(ellipse at 50% 10%, rgba(153,246,228,0.45), transparent 55%), radial-gradient(ellipse at 60% 90%, rgba(13,115,119,0.55), transparent 60%)",
    accentPosition: "top-6 left-6",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Outcomes() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? "visible" : "hidden";

  return (
    <Section
      id="outcomes"
      eyebrow="OUTCOMES"
      title={
        <>
          Proof lives in the{" "}
          <span className="text-gradient-brand font-[family-name:var(--font-instrument-serif)] italic">
            numbers
          </span>
          .
        </>
      }
      description="Owners hire ClearNova to eliminate the surprises that usually arrive at commissioning. The outcomes show up on the schedule, on the budget, and on day one."
    >
      <motion.div
        variants={containerVariants}
        initial={initial}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
      >
        {KPIS.map((kpi) => (
          <motion.div
            key={kpi.value}
            variants={itemVariants}
            className="glass relative rounded-2xl p-6 sm:p-7 overflow-hidden group"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(45,212,191,0.18), transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="text-gradient-brand font-[family-name:var(--font-instrument-serif)] text-5xl sm:text-6xl leading-none tracking-tight">
                {kpi.value}
              </div>
              <p className="mt-4 text-xs sm:text-sm text-muted leading-relaxed">
                {kpi.label}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial={initial}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5"
      >
        {CASES.map((c) => (
          <motion.article
            key={c.headline}
            variants={itemVariants}
            whileHover={reduceMotion ? undefined : { y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="glass group relative flex flex-col overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
              <div
                aria-hidden
                className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                style={{ background: c.thumbGradient }}
              />
              <div
                aria-hidden
                className="absolute inset-0 grid-overlay opacity-60"
              />
              <div
                aria-hidden
                className={cn(
                  "absolute h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_20px_#5eead4]",
                  c.accentPosition
                )}
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent"
              />
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div className="text-[10px] font-semibold tracking-[0.2em] text-brand-700 uppercase">
                {c.tag}
              </div>
              <h3 className="mt-3 text-xl sm:text-2xl font-light leading-snug text-foreground">
                {c.headline}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {c.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {c.chips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border border-border-strong bg-black/[0.03] px-3 py-1 text-[11px] font-medium tracking-wide text-muted-strong"
                  >
                    {chip}
                  </span>
                ))}
                <ArrowUpRight
                  className="ml-auto h-4 w-4 text-brand-700 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  aria-hidden
                />
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

export default Outcomes;
