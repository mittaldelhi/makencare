"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { ButtonLink } from "./ButtonLink";
import { navLinks } from "../lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-green/10 bg-white/90 backdrop-blur-xl">
      <div className="container-pad flex h-20 items-center justify-between gap-4">
        <BrandLogo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-md text-sm font-semibold text-brand-ink/80 transition hover:text-brand-green"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="/#download">Download App</ButtonLink>
        </div>
        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand-green/15 bg-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-brand-green/10 bg-white lg:hidden">
          <nav className="container-pad flex flex-col gap-2 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded-md px-2 py-3 text-sm font-semibold text-brand-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/#download" className="mt-2 w-full">
              Download App
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
