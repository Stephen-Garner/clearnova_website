"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type NavLink = { label: string; href: string };

const LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function NavLinkItem({ link, onClick }: { link: NavLink; onClick?: () => void }) {
  return (
    <a
      href={link.href}
      onClick={onClick}
      className="group relative inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors duration-300 hover:text-foreground"
    >
      <span>{link.label}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-brand-400 transition-all duration-300 ease-out group-hover:w-full"
      />
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-black/5"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-9"
        >
          {LINKS.map((link) => (
            <NavLinkItem key={link.href} link={link} />
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Button href="#contact" variant="primary" size="sm">
            Book a Consult
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-foreground transition-colors hover:bg-black/10"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 top-[72px] z-40 bg-background/95 backdrop-blur-xl"
          >
            <div className="flex h-full flex-col justify-between px-8 pb-12 pt-10">
              <nav aria-label="Mobile" className="flex flex-col gap-8">
                {LINKS.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: prefersReducedMotion ? 0 : 0.05 + idx * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block text-3xl font-medium text-foreground"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </nav>
              <div className="pt-10">
                <Button href="#contact" variant="primary" size="lg" className="w-full">
                  Book a Consult
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
