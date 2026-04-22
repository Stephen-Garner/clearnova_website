"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Section } from "@/components/ui/Section";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const LOGOS: string[] = [
  "Meridian Properties",
  "Orbital Labs",
  "Harbor & Crane",
  "Quinta Life Sciences",
  "Northline Hotels",
  "Helix Realty",
  "Crescent Campus",
  "Vantage BioScience",
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "ClearNova walked in on day one and found every gap our integrators had been quietly routing around. Commissioning moved from a finger-pointing exercise to a checklist. We opened early, under budget, and without a single critical punch item on the BAS.",
    name: "Elena Marquez",
    role: "VP, Real Estate Technology — Meridian Properties",
  },
  {
    quote:
      "They speak owner, they speak engineer, and they speak vendor, without ever losing the thread. On a half-billion-dollar mixed-use program that matters. Our change-order volume at turnover dropped by a third.",
    name: "Daniel Osei",
    role: "SVP Development — Harbor & Crane",
  },
  {
    quote:
      "Independent, technical, and unflinching in review. ClearNova caught integration risks our design team had missed, protected the GMP schedule, and handed our facilities group a building they could actually operate.",
    name: "Priya Raman",
    role: "Director of Engineering — Quinta Life Sciences",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Voices() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? "visible" : "hidden";
  const marqueeItems = [...LOGOS, ...LOGOS];

  return (
    <Section
      id="voices"
      eyebrow="TRUSTED BY"
      title={
        <>
          What owners say after{" "}
          <span className="text-gradient-brand font-[family-name:var(--font-instrument-serif)] italic pr-1">
            handoff
          </span>
          .
        </>
      }
      description="Real programs, real operators. The voices of the people who had to live in the buildings after commissioning."
    >
      <div
        className="group relative mb-20 overflow-hidden"
        aria-label="Client organizations"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent"
        />
        <div
          className="flex w-max items-center gap-4 will-change-transform [animation:marquee_42s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:[animation:none]"
        >
          {marqueeItems.map((name, idx) => (
            <span
              key={`${name}-${idx}`}
              className="relative inline-flex items-center rounded-full border border-border-strong bg-black/[0.03] px-5 py-2.5 text-[11px] font-semibold tracking-[0.22em] text-muted-strong uppercase whitespace-nowrap"
            >
              {name}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-4 -bottom-px h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, #14b8a6 50%, transparent 100%)",
                }}
              />
            </span>
          ))}
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial={initial}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-5"
      >
        {TESTIMONIALS.map((t) => (
          <motion.figure
            key={t.name}
            variants={itemVariants}
            className="glass relative flex h-full flex-col rounded-2xl p-7 sm:p-8"
          >
            <span
              aria-hidden
              className="text-gradient-brand font-[family-name:var(--font-instrument-serif)] italic text-7xl leading-none -mb-4 select-none"
            >
              &ldquo;
            </span>
            <blockquote className="text-base sm:text-[17px] leading-relaxed text-muted-strong">
              {t.quote}
            </blockquote>
            <div
              aria-hidden
              className="mt-7 h-px w-16"
              style={{
                background:
                  "linear-gradient(90deg, #5eead4 0%, #14b8a6 60%, transparent 100%)",
              }}
            />
            <figcaption className="mt-5">
              <div className="text-sm font-medium text-foreground">
                {t.name}
              </div>
              <div className="mt-1 text-xs text-muted">{t.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </Section>
  );
}

export default Voices;
