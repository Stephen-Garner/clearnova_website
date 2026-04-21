"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Compass,
  ShieldCheck,
  FileSearch,
  Network,
  ClipboardCheck,
  Handshake,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/Section";

type Service = {
  icon: LucideIcon;
  title: string;
  body: string;
  href: string;
};

const services: Service[] = [
  {
    icon: Compass,
    title: "Technology Strategy",
    body: "A vendor-neutral roadmap that ties smart-building investment to real operating outcomes.",
    href: "#contact",
  },
  {
    icon: ShieldCheck,
    title: "Vendor & Systems Selection",
    body: "Structured evaluations and RFPs that drive competitive, defensible vendor decisions.",
    href: "#contact",
  },
  {
    icon: FileSearch,
    title: "Design Review & Validation",
    body: "Independent review of drawings, specs, and submittals before risk gets built in.",
    href: "#contact",
  },
  {
    icon: Network,
    title: "Integration Oversight",
    body: "We align BAS, IoT, and IT so systems actually talk once the building is live.",
    href: "#contact",
  },
  {
    icon: ClipboardCheck,
    title: "Commissioning Authority",
    body: "Functional testing and verification that every sequence performs as specified.",
    href: "#contact",
  },
  {
    icon: Handshake,
    title: "Owner's Technical Advocate",
    body: "Owner-side authority through construction so your interests stay protected end to end.",
    href: "#contact",
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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section
      id="services"
      eyebrow="WHAT WE DO"
      title={
        <>
          Independent authority,
          <br />
          <span className="text-gradient-brand font-[family-name:var(--font-instrument-serif)] italic">
            engineered outcomes.
          </span>
        </>
      }
      description="Six focused services that de-risk every stage of a smart-building technology deployment, from first strategy session to final handoff."
    >
      <motion.div
        variants={prefersReducedMotion ? undefined : containerVariants}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={prefersReducedMotion ? undefined : cardVariants}
              className="group glass relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-[0_20px_60px_-20px_rgba(45,212,191,0.35)]"
            >
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 ring-1 ring-brand-400/20 transition-colors duration-300 group-hover:bg-brand-500/20">
                <Icon
                  aria-hidden
                  className="h-5 w-5 text-brand-400"
                  strokeWidth={1.75}
                />
              </div>

              <h3 className="text-lg font-medium text-foreground">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.body}
              </p>

              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] text-brand-300 uppercase transition-colors hover:text-brand-200"
              >
                Learn more
                <ArrowRight
                  aria-hidden
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </Link>

              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
