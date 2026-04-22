import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { XLogo } from "@/components/ui/icons/XLogo";
import { LinkedInLogo } from "@/components/ui/icons/LinkedInLogo";

type FooterLink = {
  label: string;
  href: string;
};

const companyLinks: FooterLink[] = [
  { label: "About", href: "#about" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Voices", href: "#voices" },
  { label: "FAQ", href: "#faq" },
];

const serviceLinks: FooterLink[] = [
  { label: "Strategy", href: "#services" },
  { label: "Selection", href: "#services" },
  { label: "Design Review", href: "#services" },
  { label: "Integration", href: "#services" },
  { label: "Commissioning", href: "#services" },
];

const linkClass =
  "inline-flex items-center text-sm text-muted transition-colors duration-200 hover:text-foreground";

const headingClass =
  "mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-border-strong bg-background-elev">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(45,212,191,0.05),_transparent_60%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 pt-20 sm:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              De-risk your next technology deployment.
            </p>
            <p className="mt-3 text-lg font-[family-name:var(--font-instrument-serif)] italic text-muted-strong">
              Your Path to Innovation.
            </p>
          </div>

          <div>
            <h4 className={headingClass}>Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={headingClass}>Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 lg:mt-20">
          <div
            aria-hidden
            className="h-px w-full bg-gradient-to-r from-transparent via-brand-400/50 to-transparent"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-2">
            <h4 className={headingClass}>Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@clearnova.com"
                  className={`${linkClass} gap-2.5`}
                >
                  <Mail
                    aria-hidden
                    className="h-4 w-4 text-brand-400"
                    strokeWidth={1.75}
                  />
                  hello@clearnova.com
                </a>
              </li>
              <li>
                <a href="tel:+12125550134" className={`${linkClass} gap-2.5`}>
                  <Phone
                    aria-hidden
                    className="h-4 w-4 text-brand-400"
                    strokeWidth={1.75}
                  />
                  +1 (212) 555-0134
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/"
                aria-label="ClearNova on LinkedIn"
                className="glass inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/50"
              >
                <LinkedInLogo size={14} className="text-muted-strong" />
              </a>
              <a
                href="https://x.com/"
                aria-label="ClearNova on X"
                className="glass inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/50"
              >
                <XLogo size={14} className="text-muted-strong" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border-strong/60 pt-8 text-xs text-muted/80 sm:flex-row sm:items-center">
          <p>&copy; 2026 ClearNova. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link
              href="#privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <span aria-hidden className="text-muted/40">
              &middot;
            </span>
            <Link
              href="#terms"
              className="transition-colors hover:text-foreground"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
