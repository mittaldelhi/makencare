import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-brand-green text-white shadow-soft hover:bg-[#0b633f]",
    secondary:
      "border border-brand-green/20 bg-white text-brand-ink hover:border-brand-green hover:text-brand-green",
    light:
      "bg-white text-brand-green hover:bg-brand-mint"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-md px-5 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
