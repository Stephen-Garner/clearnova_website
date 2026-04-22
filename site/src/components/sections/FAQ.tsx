"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

type QA = {
  q: string;
  a: string;
};

const faqs: QA[] = [
  {
    q: "How are you different from a systems integrator?",
    a: "Integrators sell and install systems. We sit on your side of the table, with no resale revenue, and hold every vendor, including the integrator, accountable to your outcomes.",
  },
  {
    q: "What sizes of projects do you typically advise on?",
    a: "Engagements range from single-building retrofits around 50,000 square feet to multi-site portfolios and new campuses exceeding one million square feet. Complexity matters more than size.",
  },
  {
    q: "Do you work on renovations as well as new construction?",
    a: "Yes. Renovations, phased modernizations, and new construction all benefit from owner-side authority. Existing-system audits are often where we find the highest-leverage wins.",
  },
  {
    q: "How do you stay vendor-agnostic?",
    a: "We take no commissions, resale margin, or referral fees from any manufacturer or integrator. Our only revenue source is the owner, which keeps every recommendation honest.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "We start with a discovery and goals session, then move into strategy, vendor selection, design review, and commissioning oversight. Scope flexes to wherever you need the most leverage.",
  },
  {
    q: "When should we bring ClearNova in?",
    a: "The earlier the better. Engaging us during programming or schematic design prevents the most expensive mistakes, but we add meaningful value at any stage before handoff.",
  },
];

export default function FAQ() {
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <Section
      id="faq"
      eyebrow="QUESTIONS"
      title={
        <>
          Things owners ask on
          <br />
          <span className="text-gradient-brand font-[family-name:var(--font-instrument-serif)] italic">
            day one.
          </span>
        </>
      }
      description="Straight answers, without the consulting polish."
    >
      <div className="mx-auto max-w-3xl">
        <ul className="border-t border-border">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-trigger-${index}`;

            return (
              <li
                key={item.q}
                className="border-b border-border"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <span
                      className={cn(
                        "text-base font-medium transition-colors duration-200 sm:text-lg",
                        isOpen ? "text-foreground" : "text-muted-strong group-hover:text-foreground"
                      )}
                    >
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong bg-black/[0.03] text-brand-700 transition-all duration-300",
                        isOpen
                          ? "rotate-45 border-brand-400/50 bg-brand-500/10 shadow-[0_0_20px_rgba(45,212,191,0.25)]"
                          : "group-hover:border-brand-400/40 group-hover:text-brand-600"
                      )}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      animate={
                        prefersReducedMotion
                          ? { opacity: 1 }
                          : { height: "auto", opacity: 1 }
                      }
                      exit={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{
                        duration: prefersReducedMotion ? 0.15 : 0.35,
                        ease: [0.21, 0.47, 0.32, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 pr-14 text-sm leading-relaxed text-muted sm:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-center text-sm text-muted">
          Still curious?{" "}
          <Link
            href="#contact"
            className="font-semibold text-brand-700 transition-colors hover:text-brand-600"
          >
            Start a conversation &rarr;
          </Link>
        </p>
      </div>
    </Section>
  );
}
