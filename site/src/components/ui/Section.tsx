import * as React from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full py-24 sm:py-28 lg:py-36 overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8",
          containerClassName
        )}
      >
        {(eyebrow || title || description) && (
          <header
            className={cn(
              "mb-14 lg:mb-20 max-w-3xl",
              align === "center" && "mx-auto text-center"
            )}
          >
            {eyebrow && (
              <div
                className={cn(
                  "inline-flex items-center gap-2 mb-5 rounded-full border border-border-strong bg-black/[0.04] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-brand-700 uppercase"
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_12px_#2dd4bf]" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.05]">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
