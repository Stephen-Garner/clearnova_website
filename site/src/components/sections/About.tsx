"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Scale,
  Unplug,
  UserCheck,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

type Pillar = {
  icon: LucideIcon;
  label: string;
  body: string;
};

const pillars: Pillar[] = [
  {
    icon: Scale,
    label: "Independent",
    body: "No resale revenue, no kickbacks, no hidden incentives.",
  },
  {
    icon: Unplug,
    label: "Vendor-Agnostic",
    body: "We recommend the right fit, not the familiar one.",
  },
  {
    icon: UserCheck,
    label: "Owner-Side",
    body: "Your interests are the only interests on the table.",
  },
  {
    icon: Target,
    label: "Outcome-Focused",
    body: "Performance and operational clarity over spec sheet theater.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        <motion.div
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20"
        >
          {/* LEFT COLUMN */}
          <motion.div
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="flex flex-col"
          >
            <motion.div
              variants={prefersReducedMotion ? undefined : itemVariants}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_12px_#2dd4bf]" />
              ABOUT CLEARNOVA
            </motion.div>

            <motion.h2
              variants={prefersReducedMotion ? undefined : itemVariants}
              className="mt-5 text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Owner-side authority,
              <br />
              <span className="text-gradient-brand font-[family-name:var(--font-instrument-serif)] italic">
                built on independence.
              </span>
            </motion.h2>

            <motion.p
              variants={prefersReducedMotion ? undefined : itemVariants}
              className="mt-8 text-base leading-relaxed text-muted sm:text-lg"
            >
              ClearNova exists because owners routinely get misaligned on
              building technology. We sit on your side of the table, fully
              vendor-agnostic, with no resale margin or partner quota shaping
              the recommendation.
            </motion.p>

            <motion.p
              variants={prefersReducedMotion ? undefined : itemVariants}
              className="mt-5 text-base leading-relaxed text-muted sm:text-lg"
            >
              Our team brings decades of controls, integrations, cybersecurity,
              and commissioning experience to every engagement. That depth is
              what turns strategy into systems that actually perform once the
              building goes live.
            </motion.p>

            <motion.div
              variants={prefersReducedMotion ? undefined : itemVariants}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <Button href="#contact" variant="primary" size="md">
                Talk to Us
              </Button>
              <Link
                href="#manifesto"
                className="text-sm font-semibold tracking-[0.02em] text-muted-strong transition-colors hover:text-brand-300"
              >
                Read the manifesto &rarr;
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="relative"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.14),transparent_60%)] blur-2xl"
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.label}
                    variants={prefersReducedMotion ? undefined : itemVariants}
                    className="group glass relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-[0_20px_60px_-20px_rgba(45,212,191,0.35)]"
                  >
                    <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 ring-1 ring-brand-400/20 transition-colors duration-300 group-hover:bg-brand-500/20">
                      <Icon
                        aria-hidden
                        className="h-4 w-4 text-brand-400"
                        strokeWidth={1.75}
                      />
                    </div>

                    <h3 className="text-[15px] font-medium text-foreground">
                      {pillar.label}
                    </h3>

                    <p className="mt-2 text-[13px] leading-relaxed text-muted">
                      {pillar.body}
                    </p>

                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
