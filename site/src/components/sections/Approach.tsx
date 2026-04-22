"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";

type Phase = {
  number: string;
  title: string;
  body: string;
};

const phases: Phase[] = [
  {
    number: "01",
    title: "Discover",
    body: "Align on outcomes, constraints, and risk tolerance.",
  },
  {
    number: "02",
    title: "Define",
    body: "Translate goals into a technology strategy the market can bid.",
  },
  {
    number: "03",
    title: "Deploy",
    body: "Vendor selection, design review, and integration oversight.",
  },
  {
    number: "04",
    title: "Deliver",
    body: "Commissioning authority and measurable handoff.",
  },
];

const stats = [
  "Typical engagement: 6–16 weeks",
  "Independent of vendors",
  "Fixed-scope or retainer",
];

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.55,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

const nodeVariants = {
  hidden: { scale: 0.6, opacity: 0 },
  show: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.12,
      duration: 0.45,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export default function Approach() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section
      id="approach"
      eyebrow="THE METHOD"
      title={
        <>
          A clear path,
          <br />
          <span className="text-gradient-brand font-[family-name:var(--font-instrument-serif)] italic">
            mile by mile.
          </span>
        </>
      }
      description="Four disciplined phases that move a deployment from ambition to measurable handoff, without surprises."
    >
      {/* Desktop timeline */}
      <div className="relative hidden lg:block">
        {/* Connecting rail */}
        <div className="absolute left-0 right-0 top-[46px] mx-auto flex items-center px-[6%]">
          <div className="relative h-px w-full overflow-hidden">
            <div className="absolute inset-0 bg-border-strong/60" />
            <motion.div
              initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{ transformOrigin: "left center" }}
              className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#2dd4bf_20%,#5eead4_50%,#2dd4bf_80%,transparent_100%)] shadow-[0_0_20px_rgba(45,212,191,0.6)]"
            />
          </div>
        </div>

        <ol className="relative grid grid-cols-4 gap-6">
          {phases.map((phase, i) => (
            <li
              key={phase.number}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                custom={i}
                variants={prefersReducedMotion ? undefined : nodeVariants}
                initial={prefersReducedMotion ? undefined : "hidden"}
                whileInView={prefersReducedMotion ? undefined : "show"}
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 flex h-[92px] w-[92px] items-center justify-center"
              >
                <span className="absolute inset-0 rounded-full bg-brand-500/20 blur-xl" />
                <span className="absolute inset-2 rounded-full border border-brand-400/40 bg-background" />
                <span className="absolute inset-[14px] rounded-full border border-brand-400/60 bg-[radial-gradient(circle_at_30%_25%,rgba(94,234,212,0.35),transparent_60%)] shadow-[0_0_24px_rgba(45,212,191,0.45)]" />
                <span className="relative font-[family-name:var(--font-instrument-serif)] text-2xl italic text-brand-700">
                  {phase.number}
                </span>
              </motion.div>

              <motion.div
                custom={i}
                variants={prefersReducedMotion ? undefined : stepVariants}
                initial={prefersReducedMotion ? undefined : "hidden"}
                whileInView={prefersReducedMotion ? undefined : "show"}
                viewport={{ once: true, margin: "-100px" }}
                className="glass mt-8 w-full rounded-2xl p-6 text-left"
              >
                <h3 className="text-lg font-medium text-foreground">
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {phase.body}
                </p>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile / tablet vertical timeline */}
      <div className="relative lg:hidden">
        <div className="absolute bottom-0 left-[27px] top-0 w-px overflow-hidden">
          <div className="absolute inset-0 bg-border-strong/60" />
          <motion.div
            initial={prefersReducedMotion ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ transformOrigin: "top center" }}
            className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,#2dd4bf_15%,#5eead4_50%,#2dd4bf_85%,transparent_100%)] shadow-[0_0_18px_rgba(45,212,191,0.5)]"
          />
        </div>

        <ol className="space-y-6">
          {phases.map((phase, i) => (
            <li key={phase.number} className="relative flex gap-6 pl-0">
              <motion.div
                custom={i}
                variants={prefersReducedMotion ? undefined : nodeVariants}
                initial={prefersReducedMotion ? undefined : "hidden"}
                whileInView={prefersReducedMotion ? undefined : "show"}
                viewport={{ once: true, margin: "-80px" }}
                className="relative z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center"
              >
                <span className="absolute inset-0 rounded-full bg-brand-500/20 blur-lg" />
                <span className="absolute inset-1 rounded-full border border-brand-400/40 bg-background" />
                <span className="absolute inset-[6px] rounded-full border border-brand-400/60 bg-[radial-gradient(circle_at_30%_25%,rgba(94,234,212,0.35),transparent_60%)] shadow-[0_0_16px_rgba(45,212,191,0.45)]" />
                <span className="relative font-[family-name:var(--font-instrument-serif)] text-base italic text-brand-700">
                  {phase.number}
                </span>
              </motion.div>

              <motion.div
                custom={i}
                variants={prefersReducedMotion ? undefined : stepVariants}
                initial={prefersReducedMotion ? undefined : "hidden"}
                whileInView={prefersReducedMotion ? undefined : "show"}
                viewport={{ once: true, margin: "-80px" }}
                className="glass flex-1 rounded-2xl p-5"
              >
                <h3 className="text-base font-medium text-foreground">
                  {phase.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {phase.body}
                </p>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>

      {/* Stat chips */}
      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-14 flex flex-wrap items-center justify-center gap-3"
      >
        {stats.map((stat) => (
          <span
            key={stat}
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-black/[0.03] px-4 py-2 text-xs font-medium tracking-wide text-muted-strong"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_10px_#2dd4bf]" />
            {stat}
          </span>
        ))}
      </motion.div>
    </Section>
  );
}
