"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";

type Metric = { value: string; label: string };

const METRICS: Metric[] = [
  { value: "$2.1B+", label: "Projects De-Risked" },
  { value: "120+", label: "Deployments" },
  { value: "18 yrs", label: "Avg Expertise" },
  { value: "0", label: "Surprises at Commissioning" },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function NovaBurst({ reducedMotion }: { reducedMotion: boolean }) {
  const rays = Array.from({ length: 18 });
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-[-10%] top-1/2 hidden -translate-y-1/2 lg:block"
    >
      <div className="relative h-[560px] w-[560px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <svg
            viewBox="0 0 560 560"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="novaCore" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#5eead4" stopOpacity="0.55" />
                <stop offset="45%" stopColor="#14b8a6" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#0d7377" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="rayStroke" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#5eead4" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
              </linearGradient>
            </defs>

            <circle cx="280" cy="280" r="260" fill="url(#novaCore)" />

            <motion.g
              style={{ transformOrigin: "280px 280px" }}
              animate={reducedMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 80, ease: "linear", repeat: Infinity }}
            >
              {rays.map((_, i) => {
                const angle = (i / rays.length) * 360;
                const length = i % 2 === 0 ? 250 : 180;
                return (
                  <line
                    key={i}
                    x1="280"
                    y1="280"
                    x2={280 + length}
                    y2="280"
                    stroke="url(#rayStroke)"
                    strokeWidth={i % 3 === 0 ? 1.2 : 0.6}
                    transform={`rotate(${angle} 280 280)`}
                  />
                );
              })}
            </motion.g>

            <motion.circle
              cx="280"
              cy="280"
              r="180"
              stroke="#5eead4"
              strokeOpacity="0.25"
              strokeDasharray="2 6"
              fill="none"
              animate={reducedMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 120, ease: "linear", repeat: Infinity }}
              style={{ transformOrigin: "280px 280px" }}
            />
            <circle cx="280" cy="280" r="110" stroke="#14b8a6" strokeOpacity="0.35" fill="none" />
            <circle cx="280" cy="280" r="6" fill="#5eead4" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const reduced = !!prefersReducedMotion;

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden pt-32 pb-20 md:pt-40"
    >
      <div className="aurora" aria-hidden />
      <div className="grid-overlay absolute inset-0" aria-hidden />
      <NovaBurst reducedMotion={reduced} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-10 max-w-4xl"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-strong backdrop-blur">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
              </span>
              Building Technology · Risk Advisory
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.5rem]"
          >
            De-risk your next
            <br />
            building technology deployment
            <br />
            <span className="font-[family-name:var(--font-instrument-serif)] italic text-gradient-brand">
              with absolute clarity.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          >
            ClearNova gives owners, operators, and integrators an independent,
            expert lens on every deployment, from selection through commissioning.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <Button href="#contact" variant="primary" size="lg">
              Start the Conversation
            </Button>
            <Button href="#approach" variant="secondary" size="lg">
              Our Approach
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          >
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="glass rounded-2xl px-5 py-5 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="font-[family-name:var(--font-instrument-serif)] text-3xl leading-none text-gradient-brand md:text-4xl">
                  {m.value}
                </div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
