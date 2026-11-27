import type { CSSProperties } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  FileCheck2,
  FileText,
  Globe2,
  HeartPulse,
  Lock,
  Mail,
  Plane,
  ShieldCheck,
  Stethoscope,
  UserCheck,
} from "lucide-react";
import { BrandConfig } from "@/brands/types";
import { Header } from "./Header";
import { FaqAccordion } from "./FaqAccordion";

interface BrandHomepageProps {
  brand: BrandConfig;
}

const SERVICE_ICONS = [Stethoscope, HeartPulse, Plane, FileText];

export function BrandHomepage({ brand }: BrandHomepageProps) {
  const themeVars = {
    "--brand-primary": brand.theme.primary,
    "--brand-primary-hover": brand.theme.primaryHover,
    "--brand-primary-dark": brand.theme.primaryDark,
    "--brand-accent": brand.theme.accent,
    "--brand-accent-hover": brand.theme.accentHover,
    "--brand-cta-bg": brand.theme.ctaBg,
    "--brand-cta-hover": brand.theme.ctaHover,
    "--brand-cta-text": brand.theme.ctaText,
    "--brand-surface": brand.theme.surface,
    "--brand-surface-alt": brand.theme.surfaceAlt,
    "--brand-border": brand.theme.border,
    "--brand-ink": brand.theme.ink,
    "--brand-ink-muted": brand.theme.inkMuted,
    "--brand-badge-bg": brand.theme.badgeBg,
    "--brand-badge-text": brand.theme.badgeText,
  } as CSSProperties;

  const isDarkHero = brand.theme.heroText === "#ffffff";

  return (
    <div
      id="top"
      style={themeVars}
      className="min-h-screen bg-white pb-20 text-slate-900 md:pb-0"
    >
      <Header brand={brand} />

      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden border-b py-14 sm:py-20 lg:py-24"
          style={{
            background: brand.theme.heroBg,
            borderColor: "var(--brand-border)",
          }}
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold sm:text-sm"
                style={{
                  borderColor: isDarkHero
                    ? "rgba(255,255,255,0.22)"
                    : "var(--brand-border)",
                  backgroundColor: isDarkHero
                    ? "rgba(255,255,255,0.14)"
                    : "#ffffff",
                  color: isDarkHero ? "#ffffff" : "var(--brand-badge-text)",
                }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: isDarkHero ? "#ffffff" : "var(--brand-accent)",
                  }}
                />
                <span>{brand.hero.eyebrow}</span>
              </div>

              <h1
                className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl sm:leading-[1.1]"
                style={{ color: brand.theme.heroText }}
              >
                {brand.hero.headline}
              </h1>

              <p
                className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg"
                style={{ color: brand.theme.heroMuted }}
              >
                {brand.hero.subheadline}
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {brand.hero.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 rounded-xl p-2.5 text-sm leading-snug"
                    style={{
                      backgroundColor: isDarkHero
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(255,255,255,0.75)",
                      color: brand.theme.heroText,
                    }}
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{
                        color: isDarkHero ? "#ffffff" : "var(--brand-accent)",
                      }}
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={brand.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    backgroundColor: "var(--brand-cta-bg)",
                    color: "var(--brand-cta-text)",
                  }}
                >
                  {brand.primaryCtaLabel}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-xl border px-6 py-4 text-base font-semibold transition-colors hover:opacity-90"
                  style={{
                    borderColor: isDarkHero
                      ? "rgba(255,255,255,0.35)"
                      : "var(--brand-border)",
                    color: brand.theme.heroText,
                    backgroundColor: isDarkHero
                      ? "rgba(255,255,255,0.08)"
                      : "#ffffff",
                  }}
                >
                  {brand.secondaryCtaLabel}
                </a>
              </div>

              <div
                className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium sm:text-sm"
                style={{ color: brand.theme.heroMuted }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                  Encrypted & private
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  PDF sent to your email
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <UserCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Reviewed by a real doctor
                </span>
              </div>
            </div>

            {/* Right: Humanized Sample Certificate & Quick Overview Card */}
            <div className="lg:col-span-5">
              <div
                className="relative rounded-3xl border bg-white p-6 shadow-[0_20px_50px_-15px_rgba(15,28,51,0.12)] sm:p-7"
                style={{ borderColor: "var(--brand-border)" }}
              >
                <div
                  className="flex items-center justify-between gap-3 border-b pb-4"
                  style={{ borderColor: "var(--brand-border)" }}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: "var(--brand-badge-bg)",
                        color: "var(--brand-badge-text)",
                      }}
                    >
                      <FileCheck2 className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <div
                        className="text-sm font-bold"
                        style={{ color: "var(--brand-ink)" }}
                      >
                        Sample Medical Certificate
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "var(--brand-ink-muted)" }}
                      >
                        Issued only after doctor review
                      </div>
                    </div>
                  </div>
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide"
                    style={{
                      backgroundColor: "var(--brand-badge-bg)",
                      color: "var(--brand-badge-text)",
                    }}
                  >
                    Sample
                  </span>
                </div>

                {/* Mini certificate preview */}
                <div
                  className="mt-4 rounded-2xl border p-4"
                  style={{
                    borderColor: "var(--brand-border)",
                    backgroundColor: "var(--brand-surface)",
                  }}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span
                      className="font-semibold"
                      style={{ color: "var(--brand-ink-muted)" }}
                    >
                      {brand.name}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 font-semibold"
                      style={{ color: "var(--brand-accent)" }}
                    >
                      <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      Doctor reviewed
                    </span>
                  </div>
                  <div
                    className="mt-3 grid grid-cols-2 gap-3 border-t pt-3 text-xs"
                    style={{ borderColor: "var(--brand-border)" }}
                  >
                    <div>
                      <div style={{ color: "var(--brand-ink-muted)" }}>
                        Certificate type
                      </div>
                      <div
                        className="mt-0.5 font-semibold"
                        style={{ color: "var(--brand-ink)" }}
                      >
                        {brand.servicesSection.items[0]?.title ?? "Medical Certificate"}
                      </div>
                    </div>
                    <div>
                      <div style={{ color: "var(--brand-ink-muted)" }}>
                        Delivery format
                      </div>
                      <div
                        className="mt-0.5 font-semibold"
                        style={{ color: "var(--brand-ink)" }}
                      >
                        Signed PDF via email
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing rows */}
                <dl
                  className="mt-4 divide-y"
                  style={{ borderColor: "var(--brand-border)" }}
                >
                  {brand.pricingSection.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-4 py-2.5 text-sm"
                    >
                      <dt style={{ color: "var(--brand-ink-muted)" }}>
                        {row.label}
                      </dt>
                      <dd
                        className="font-bold"
                        style={{ color: "var(--brand-ink)" }}
                      >
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p
                  className="mt-3 rounded-xl px-3.5 py-2.5 text-xs leading-relaxed"
                  style={{
                    backgroundColor: "var(--brand-surface-alt)",
                    color: "var(--brand-ink-muted)",
                  }}
                >
                  {brand.hero.trustNote}
                </p>

                <a
                  href={brand.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    backgroundColor: "var(--brand-cta-bg)",
                    color: "var(--brand-cta-text)",
                  }}
                >
                  {brand.primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {brand.stats && brand.stats.length > 0 && (
            <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {brand.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border p-4 text-center backdrop-blur-sm"
                    style={{
                      borderColor: isDarkHero
                        ? "rgba(255,255,255,0.2)"
                        : "var(--brand-border)",
                      backgroundColor: isDarkHero
                        ? "rgba(255,255,255,0.1)"
                        : "#ffffff",
                    }}
                  >
                    <div
                      className="text-2xl font-extrabold sm:text-3xl"
                      style={{ color: brand.theme.heroText }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="mt-1 text-xs font-medium sm:text-sm"
                      style={{ color: brand.theme.heroMuted }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Services */}
        <section
          id="services"
          className="py-12 sm:py-16"
          style={{ backgroundColor: "var(--brand-surface-alt)" }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "var(--brand-primary)" }}
                >
                  {brand.servicesSection.eyebrow}
                </p>
                <h2
                  className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl"
                  style={{ color: "var(--brand-ink)" }}
                >
                  {brand.servicesSection.heading}
                </h2>
                <p
                  className="mt-3 text-base"
                  style={{ color: "var(--brand-ink-muted)" }}
                >
                  {brand.servicesSection.subheading}
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {brand.servicesSection.items.map((service, index) => {
                const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
                return (
                  <article
                    key={service.title}
                    className="group flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-7"
                    style={{ borderColor: "var(--brand-border)" }}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                            style={{
                              backgroundColor: "var(--brand-badge-bg)",
                              color: "var(--brand-badge-text)",
                            }}
                          >
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <h3
                            className="text-lg font-bold sm:text-xl"
                            style={{ color: "var(--brand-ink)" }}
                          >
                            {service.title}
                          </h3>
                        </div>
                        {service.priceTag && (
                          <span
                            className="shrink-0 rounded-full px-3 py-1 text-xs font-bold"
                            style={{
                              backgroundColor: "var(--brand-badge-bg)",
                              color: "var(--brand-badge-text)",
                            }}
                          >
                            {service.priceTag}
                          </span>
                        )}
                      </div>

                      <p
                        className="mt-4 text-sm leading-relaxed sm:text-base"
                        style={{ color: "var(--brand-ink-muted)" }}
                      >
                        {service.description}
                      </p>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {service.highlights.map((h) => (
                          <li
                            key={h}
                            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
                            style={{
                              borderColor: "var(--brand-border)",
                              backgroundColor: "var(--brand-surface)",
                              color: "var(--brand-ink)",
                            }}
                          >
                            <CheckCircle2
                              className="h-3.5 w-3.5 shrink-0"
                              style={{ color: "var(--brand-accent)" }}
                              aria-hidden="true"
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="mt-6 flex items-center justify-between border-t pt-4"
                      style={{ borderColor: "var(--brand-border)" }}
                    >
                      <a
                        href={service.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2"
                        style={{ color: "var(--brand-primary)" }}
                      >
                        {service.ctaLabel}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>

            {brand.servicesSection.footnote && (
              <p
                className="mt-7 rounded-2xl border bg-white/80 p-4 text-xs leading-relaxed sm:text-sm"
                style={{
                  borderColor: "var(--brand-border)",
                  color: "var(--brand-ink-muted)",
                }}
              >
                {brand.servicesSection.footnote}
              </p>
            )}
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: "var(--brand-primary)" }}
              >
                {brand.howItWorks.eyebrow}
              </p>
              <h2
                className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl"
                style={{ color: "var(--brand-ink)" }}
              >
                {brand.howItWorks.heading}
              </h2>
              <p
                className="mt-3 text-base"
                style={{ color: "var(--brand-ink-muted)" }}
              >
                {brand.howItWorks.subheading}
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {brand.howItWorks.steps.map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-2xl border p-6 shadow-sm sm:p-7"
                  style={{
                    borderColor: "var(--brand-border)",
                    backgroundColor: "var(--brand-surface)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-base font-extrabold text-white shadow-sm"
                      style={{ backgroundColor: "var(--brand-primary)" }}
                    >
                      {step.number}
                    </span>
                    <Clock
                      className="h-4 w-4 opacity-40"
                      style={{ color: "var(--brand-primary)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className="mt-5 text-lg font-bold"
                    style={{ color: "var(--brand-ink)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--brand-ink-muted)" }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Doctors */}
        <section
          id="pricing"
          className="border-y py-12 sm:py-16"
          style={{
            backgroundColor: "var(--brand-surface-alt)",
            borderColor: "var(--brand-border)",
          }}
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: "var(--brand-primary)" }}
              >
                Transparent pricing
              </p>
              <h2
                className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl"
                style={{ color: "var(--brand-ink)" }}
              >
                {brand.pricingSection.heading}
              </h2>
              <p
                className="mt-3 text-base"
                style={{ color: "var(--brand-ink-muted)" }}
              >
                {brand.pricingSection.subheading}
              </p>

              <div
                className="mt-6 overflow-hidden rounded-2xl border bg-white shadow-sm"
                style={{ borderColor: "var(--brand-border)" }}
              >
                <dl
                  className="divide-y"
                  style={{ borderColor: "var(--brand-border)" }}
                >
                  {brand.pricingSection.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-4 px-5 py-4"
                    >
                      <dt
                        className="text-sm font-medium sm:text-base"
                        style={{ color: "var(--brand-ink)" }}
                      >
                        {row.label}
                      </dt>
                      <dd
                        className="rounded-lg px-3 py-1 text-sm font-bold sm:text-base"
                        style={{
                          backgroundColor: "var(--brand-surface)",
                          color: "var(--brand-primary)",
                        }}
                      >
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <p
                className="mt-4 text-xs leading-relaxed sm:text-sm"
                style={{ color: "var(--brand-ink-muted)" }}
              >
                {brand.pricingSection.note}
              </p>
            </div>

            <div id="doctors">
              <p
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: "var(--brand-primary)" }}
              >
                {brand.doctorsSection.eyebrow}
              </p>
              <h2
                className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl"
                style={{ color: "var(--brand-ink)" }}
              >
                {brand.doctorsSection.heading}
              </h2>
              <p
                className="mt-3 text-base"
                style={{ color: "var(--brand-ink-muted)" }}
              >
                {brand.doctorsSection.subheading}
              </p>

              <div
                className={`mt-6 grid gap-4 ${
                  brand.doctorsSection.doctors.length > 1
                    ? "sm:grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {brand.doctorsSection.doctors.map((doc) => {
                  const initials = doc.name
                    .replace(/^Dr\.?\s*/i, "")
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();

                  return (
                    <div
                      key={doc.name}
                      className="flex items-start gap-4 rounded-2xl border bg-white p-5 shadow-sm"
                      style={{ borderColor: "var(--brand-border)" }}
                    >
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white"
                        style={{ backgroundColor: "var(--brand-primary)" }}
                      >
                        {initials}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <div
                            className="text-base font-bold"
                            style={{ color: "var(--brand-ink)" }}
                          >
                            {doc.name}
                          </div>
                          <Award
                            className="h-4 w-4"
                            style={{ color: "var(--brand-accent)" }}
                            aria-hidden="true"
                          />
                        </div>
                        <div
                          className="mt-0.5 text-sm"
                          style={{ color: "var(--brand-ink-muted)" }}
                        >
                          {doc.specialty}
                        </div>
                        <div
                          className="mt-2.5 inline-block rounded-md px-2.5 py-1 text-xs font-semibold"
                          style={{
                            backgroundColor: "var(--brand-badge-bg)",
                            color: "var(--brand-badge-text)",
                          }}
                        >
                          {doc.registration}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {brand.doctorsSection.extraNote && (
                <div
                  className="mt-4 flex items-start gap-2.5 rounded-xl border bg-white p-4 text-xs leading-relaxed sm:text-sm"
                  style={{
                    borderColor: "var(--brand-border)",
                    color: "var(--brand-ink-muted)",
                  }}
                >
                  <Clock
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: "var(--brand-primary)" }}
                    aria-hidden="true"
                  />
                  <span>{brand.doctorsSection.extraNote}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Legal & Coverage */}
        <section id="legal" className="py-12 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "var(--brand-badge-bg)",
                    color: "var(--brand-badge-text)",
                  }}
                >
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2
                  className="text-2xl font-bold tracking-tight"
                  style={{ color: "var(--brand-ink)" }}
                >
                  {brand.legalSection.heading}
                </h2>
              </div>
              <p
                className="mt-2.5 text-sm sm:text-base"
                style={{ color: "var(--brand-ink-muted)" }}
              >
                {brand.legalSection.subheading}
              </p>

              <ul className="mt-5 space-y-2.5">
                {brand.legalSection.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 rounded-xl border bg-white p-3 text-sm leading-relaxed"
                    style={{
                      borderColor: "var(--brand-border)",
                      color: "var(--brand-ink-muted)",
                    }}
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: "var(--brand-primary)" }}
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-4 flex items-start gap-3 rounded-2xl border p-4 text-sm font-medium"
                style={{
                  borderColor: "var(--brand-border)",
                  backgroundColor: "var(--brand-surface)",
                  color: "var(--brand-ink)",
                }}
              >
                <AlertTriangle
                  className="mt-0.5 h-5 w-5 shrink-0"
                  style={{ color: "var(--brand-primary)" }}
                  aria-hidden="true"
                />
                <span>{brand.legalSection.emergencyNotice}</span>
              </div>
            </div>

            <div id="coverage" className="space-y-5 lg:col-span-5">
              <div
                className="rounded-3xl border p-6 shadow-sm sm:p-7"
                style={{
                  borderColor: "var(--brand-border)",
                  backgroundColor: "var(--brand-surface-alt)",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-white"
                    style={{ color: "var(--brand-primary)" }}
                  >
                    <Globe2 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2
                    className="text-xl font-bold"
                    style={{ color: "var(--brand-ink)" }}
                  >
                    {brand.coverageSection.heading}
                  </h2>
                </div>
                <p
                  className="mt-2.5 text-sm leading-relaxed"
                  style={{ color: "var(--brand-ink-muted)" }}
                >
                  {brand.coverageSection.subheading}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {brand.coverageSection.countries.map((country) => (
                    <span
                      key={country}
                      className="rounded-full border bg-white px-3.5 py-1.5 text-xs font-semibold shadow-2xs"
                      style={{
                        borderColor: "var(--brand-border)",
                        color: "var(--brand-ink)",
                      }}
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="rounded-3xl border bg-white p-6 shadow-sm"
                style={{ borderColor: "var(--brand-border)" }}
              >
                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--brand-ink)" }}
                >
                  {brand.bottomCta.heading}
                </h3>
                <p
                  className="mt-1.5 text-sm leading-relaxed"
                  style={{ color: "var(--brand-ink-muted)" }}
                >
                  {brand.bottomCta.subheading}
                </p>
                <a
                  href={brand.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "var(--brand-cta-bg)",
                    color: "var(--brand-cta-text)",
                  }}
                >
                  {brand.primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                {brand.supportEmail && (
                  <p
                    className="mt-3 text-center text-xs"
                    style={{ color: "var(--brand-ink-muted)" }}
                  >
                    Questions?{" "}
                    <a
                      href={`mailto:${brand.supportEmail}`}
                      className="font-semibold underline"
                      style={{ color: "var(--brand-primary)" }}
                    >
                      {brand.supportEmail}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials (only rendered if present in brand config) */}
        {brand.testimonials && (
          <section
            className="border-t py-12 sm:py-16"
            style={{
              backgroundColor: "var(--brand-surface-alt)",
              borderColor: "var(--brand-border)",
            }}
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <h2
                className="text-center text-2xl font-bold tracking-tight sm:text-3xl"
                style={{ color: "var(--brand-ink)" }}
              >
                {brand.testimonials.heading}
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {brand.testimonials.items.map((t) => (
                  <blockquote
                    key={t.author}
                    className="flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm"
                    style={{ borderColor: "var(--brand-border)" }}
                  >
                    <p
                      className="text-sm leading-relaxed sm:text-base"
                      style={{ color: "var(--brand-ink)" }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer className="mt-5 flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: "var(--brand-badge-bg)",
                          color: "var(--brand-badge-text)",
                        }}
                      >
                        {t.initials}
                      </span>
                      <div>
                        <div
                          className="text-sm font-bold"
                          style={{ color: "var(--brand-ink)" }}
                        >
                          {t.author}
                        </div>
                        <div
                          className="text-xs"
                          style={{ color: "var(--brand-ink-muted)" }}
                        >
                          {t.role}
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <FaqAccordion
          heading={brand.faqSection.heading}
          subheading={brand.faqSection.subheading}
          items={brand.faqSection.items}
        />

        {/* Bottom Conversion Band */}
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div
            className="mx-auto max-w-5xl rounded-3xl px-6 py-12 text-center text-white shadow-xl sm:px-12 sm:py-16"
            style={{ backgroundColor: "var(--brand-primary-dark)" }}
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
              {brand.bottomCta.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85 sm:text-base">
              {brand.bottomCta.subheading}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={brand.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  backgroundColor: "var(--brand-cta-bg)",
                  color: "var(--brand-cta-text)",
                }}
              >
                {brand.primaryCtaLabel}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="border-t py-12"
        style={{
          backgroundColor: "var(--brand-surface)",
          borderColor: "var(--brand-border)",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <div
                className="text-lg font-bold"
                style={{ color: "var(--brand-ink)" }}
              >
                {brand.logo.wordmark}
              </div>
              <p
                className="mt-2 max-w-sm text-sm leading-relaxed"
                style={{ color: "var(--brand-ink-muted)" }}
              >
                {brand.footer.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-7">
              {brand.footer.columns.map((col) => (
                <div key={col.heading}>
                  <h3
                    className="text-sm font-bold"
                    style={{ color: "var(--brand-ink)" }}
                  >
                    {col.heading}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm transition-opacity hover:opacity-80"
                          style={{ color: "var(--brand-ink-muted)" }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-10 border-t pt-6 text-xs leading-relaxed"
            style={{
              borderColor: "var(--brand-border)",
              color: "var(--brand-ink-muted)",
            }}
          >
            <p>{brand.footer.legalLine}</p>
            <p className="mt-2">{brand.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t bg-white/95 px-4 py-3 backdrop-blur-md md:hidden"
        style={{ borderColor: "var(--brand-border)" }}
      >
        <a
          href={brand.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold shadow-sm"
          style={{
            backgroundColor: "var(--brand-cta-bg)",
            color: "var(--brand-cta-text)",
          }}
        >
          {brand.primaryCtaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
