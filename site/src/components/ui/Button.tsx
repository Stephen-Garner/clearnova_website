import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-brand-400 disabled:opacity-50 disabled:pointer-events-none overflow-hidden whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "text-[#05080f] bg-[linear-gradient(90deg,#5eead4_0%,#14b8a6_50%,#0d7377_100%)] hover:shadow-[0_0_40px_rgba(45,212,191,0.45)] hover:-translate-y-0.5",
  secondary:
    "text-foreground border border-border-strong bg-white/5 hover:bg-white/10 hover:border-brand-400/50",
  ghost:
    "text-muted-strong hover:text-foreground hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  sm: "text-xs px-4 py-2",
  md: "text-sm px-6 py-3",
  lg: "text-base px-8 py-4",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 ease-out bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.35)_50%,transparent_70%)]"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  );
}
