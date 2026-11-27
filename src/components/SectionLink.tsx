"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { CSSProperties, ReactNode } from "react";
import { BrandId } from "@/brands/types";

interface SectionLinkProps {
  brandId: BrandId;
  href: string;
  className?: string;
  style?: CSSProperties;
  onNavigate?: () => void;
  children: ReactNode;
  ariaLabel?: string;
}

export function scrollToSection(href: string) {
  const id = href.replace(/^[#/]+/, "");
  if (!id || id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function SectionScroller({ section }: { section?: string }) {
  useEffect(() => {
    if (!section) return;
    const timer = window.setTimeout(() => {
      scrollToSection(section);
    }, 60);
    return () => window.clearTimeout(timer);
  }, [section]);

  return null;
}

export function SectionLink({
  brandId,
  href,
  className,
  style,
  onNavigate,
  children,
  ariaLabel,
}: SectionLinkProps) {
  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onNavigate}
        className={className}
        style={style}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  const slug = href.replace(/^[#/]+/, "");
  const path = !slug || slug === "top" ? `/${brandId}` : `/${brandId}/${slug}`;

  return (
    <Link
      href={path}
      scroll={false}
      onClick={() => {
        scrollToSection(slug || "top");
        onNavigate?.();
      }}
      className={className}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}

