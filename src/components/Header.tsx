"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { BrandConfig } from "@/brands/types";

interface HeaderProps {
  brand: BrandConfig;
}

export function Header({ brand }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md"
      style={{ borderColor: "var(--brand-border)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2"
          aria-label={brand.name}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white shadow-sm"
            style={{ backgroundColor: "var(--brand-primary)" }}
          >
            {brand.logo.markText}
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className="text-base font-bold tracking-tight sm:text-lg"
              style={{ color: "var(--brand-ink)" }}
            >
              {brand.logo.wordmark}
            </span>
            {brand.logo.subtitle && (
              <span
                className="text-[11px] font-medium"
                style={{ color: "var(--brand-ink-muted)" }}
              >
                {brand.logo.subtitle}
              </span>
            )}
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {brand.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--brand-ink-muted)" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={brand.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              backgroundColor: "var(--brand-cta-bg)",
              color: "var(--brand-cta-text)",
            }}
          >
            {brand.primaryCtaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border md:hidden"
            style={{
              borderColor: "var(--brand-border)",
              color: "var(--brand-ink)",
            }}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t bg-white px-4 py-4 md:hidden"
          style={{ borderColor: "var(--brand-border)" }}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {brand.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium transition-colors hover:bg-slate-50"
                style={{ color: "var(--brand-ink)" }}
              >
                {item.label}
              </a>
            ))}
            {brand.supportEmail && (
              <a
                href={`mailto:${brand.supportEmail}`}
                className="mt-2 rounded-lg px-3 py-2 text-sm"
                style={{ color: "var(--brand-ink-muted)" }}
              >
                Questions? {brand.supportEmail}
              </a>
            )}
            <a
              href={brand.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-semibold shadow-sm"
              style={{
                backgroundColor: "var(--brand-cta-bg)",
                color: "var(--brand-cta-text)",
              }}
            >
              {brand.primaryCtaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
