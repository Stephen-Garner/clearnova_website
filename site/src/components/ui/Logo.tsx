import Image from "next/image";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="ClearNova home"
      className={className ?? "inline-flex items-center"}
    >
      <Image
        src="/clearnova-logo.png"
        alt="ClearNova"
        width={180}
        height={40}
        priority
        className="h-8 w-auto select-none"
      />
    </Link>
  );
}
