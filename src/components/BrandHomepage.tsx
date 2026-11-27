import type { CSSProperties } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Globe2,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { BrandConfig } from "@/brands/types";
import { Header } from "./Header";
import { FaqAccordion } from "./FaqAccordion";

interface BrandHomepageProps {
  brand: BrandConfig;
}

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
    <div id="top" style={themeVars} className="min-h-screen bg-white text-slate-900">
      <Header brand={brand} />

      <main>
        {/* Hero */}
        <section
          className="border-b py-14 sm:py-20"
          style={{
            background: brand.theme.heroBg,
            borderColor: "var(--brand-border)",
          }}
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold sm:text-sm"
                style={{
                  backgroundColor: isDarkHero
                    ? "rgba(255,255,255,0.14)"
                    : "var(--brand-badge-bg)",
                  color: isDarkHero ? "#ffffff" : "var(--brand-badge-text)",
                }}
              >
                <Stethoscope className="h-4 w-4" aria-hidden="true" />
                <span>{brand.hero.eyebrow}</span>
              </div>

              <h1
                className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl sm:leading-[1.12]"
                style={{ color: brand.theme.heroText }}
              >
                {brand.hero.headline}
              </h1>

              <p
                className="mt-4 max-w-2xl text-base leading-relaxed sm:text-lg"
                style={{ color: brand.theme.heroMuted }}
              >
                {brand.hero.subheadline}
              </p>

              <ul className="mt-6 space-y-2.5">
                {brand.hero.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-sm sm:text-base"
                    style={{ color: brand.theme.heroText }}
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0"
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold shadow-md transition-transform hover:-translate-y-0.5"
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
                  className="inline-flex items-center justify-center rounded-xl border px-6 py-3.5 text-base font-semibold transition-colors"
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
            </div>

            {/* Right summary card */}
            <div className="lg:col-span-5">
              <div
                className="rounded-2xl border bg-white p-6 shadow-lg sm:p-7"
                style={{ borderColor: "var(--brand-border)" }}
              >
                <div className="flex items-center justify-between gap-3 border-b pb-4" style={{ borderColor: "var(--brand-border)" }}>
                  <div className="flex items-center gap-2.5">
                    <FileCheck2
                      className="h-6 w-6"
                      style={{ color: "var(--brand-primary)" }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-base font-bold"
                      style={{ color: "var(--brand-ink)" }}
                    >
                      Quick overview
                    </span>
                  </div>
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: "var(--brand-badge-bg)",
                      color: "var(--brand-badge-text)",
                    }}
                  >
                    {brand.domain}
                  </span>
                </div>

                <dl className="mt-4 divide-y" style={{ borderColor: "var(--brand-border)" }}>
                  {brand.pricingSection.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-4 py-3 text-sm"
                    >
                      <dt style={{ color: "var(--brand-ink-muted)" }}>{row.label}</dt>
                      <dd
                        className="font-semibold"
                        style={{ color: "var(--brand-ink)" }}
                      >
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p
                  className="mt-4 rounded-xl p-3.5 text-xs leading-relaxed"
                  style={{
                    backgroundColor: "var(--brand-surface)",
                    color: "var(--brand-ink-muted)",
                  }}
                >
                  {brand.hero.trustNote}
                </p>

                <a
                  href={brand.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-transform hover:-translate-y-0.5"
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
                    className="rounded-xl border p-4 text-center backdrop-blur-sm"
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
          className="py-16 sm:py-20"
          style={{ backgroundColor: "var(--brand-surface-alt)" }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {brand.servicesSection.items.map((service) => (
                <article
                  key={service.title}
                  className="flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  style={{ borderColor: "var(--brand-border)" }}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h3
                        className="text-xl font-bold"
                        style={{ color: "var(--brand-ink)" }}
                      >
                        {service.title}
                      </h3>
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
                      className="mt-3 text-sm leading-relaxed sm:text-base"
                      style={{ color: "var(--brand-ink-muted)" }}
                    >
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {service.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-sm"
                          style={{ color: "var(--brand-ink)" }}
                        >
                          <CheckCircle2
                            className="h-4 w-4 shrink-0"
                            style={{ color: "var(--brand-accent)" }}
                            aria-hidden="true"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t" style={{ borderColor: "var(--brand-border)" }}>
                    <a
                      href={service.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
                      style={{ color: "var(--brand-primary)" }}
                    >
                      {service.ctaLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {brand.servicesSection.footnote && (
              <p
                className="mt-6 text-xs leading-relaxed sm:text-sm"
                style={{ color: "var(--brand-ink-muted)" }}
              >
                {brand.servicesSection.footnote}
              </p>
            )}
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
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

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {brand.howItWorks.steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border p-6"
                  style={{
                    borderColor: "var(--brand-border)",
                    backgroundColor: "var(--brand-surface)",
                  }}
                >
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                    style={{ backgroundColor: "var(--brand-primary)" }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="mt-4 text-lg font-bold"
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
          className="border-y py-16 sm:py-20"
          style={{
            backgroundColor: "var(--brand-surface-alt)",
            borderColor: "var(--brand-border)",
          }}
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <h2
                className="text-2xl font-bold tracking-tight sm:text-3xl"
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
                className="mt-6 overflow-hidden rounded-2xl border bg-white"
                style={{ borderColor: "var(--brand-border)" }}
              >
                <dl className="divide-y" style={{ borderColor: "var(--brand-border)" }}>
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
                        className="text-base font-bold"
                        style={{ color: "var(--brand-primary)" }}
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

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {brand.doctorsSection.doctors.map((doc) => (
                  <div
                    key={doc.name}
                    className="rounded-xl border bg-white p-4"
                    style={{ borderColor: "var(--brand-border)" }}
                  >
                    <div
                      className="text-base font-bold"
                      style={{ color: "var(--brand-ink)" }}
                    >
                      {doc.name}
                    </div>
                    <div
                      className="mt-1 text-sm"
                      style={{ color: "var(--brand-ink-muted)" }}
                    >
                      {doc.specialty}
                    </div>
                    <div
                      className="mt-2 inline-block rounded-md px-2 py-0.5 text-xs font-semibold"
                      style={{
                        backgroundColor: "var(--brand-badge-bg)",
                        color: "var(--brand-badge-text)",
                      }}
                    >
                      {doc.registration}
                    </div>
                  </div>
                ))}
              </div>

              {brand.doctorsSection.extraNote && (
                <p
                  className="mt-4 text-xs leading-relaxed sm:text-sm"
                  style={{ color: "var(--brand-ink-muted)" }}
                >
                  {brand.doctorsSection.extraNote}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Legal & Coverage */}
        <section id="legal" className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2">
                <ShieldCheck
                  className="h-5 w-5"
                  style={{ color: "var(--brand-primary)" }}
                  aria-hidden="true"
                />
                <h2
                  className="text-2xl font-bold tracking-tight"
                  style={{ color: "var(--brand-ink)" }}
                >
                  {brand.legalSection.heading}
                </h2>
              </div>
              <p
                className="mt-2 text-sm sm:text-base"
                style={{ color: "var(--brand-ink-muted)" }}
              >
                {brand.legalSection.subheading}
              </p>

              <ul className="mt-5 space-y-2.5">
                {brand.legalSection.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed"
                    style={{ color: "var(--brand-ink-muted)" }}
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
                className="mt-6 flex items-start gap-3 rounded-xl border p-4 text-sm"
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

            <div id="coverage" className="lg:col-span-5">
              <div
                className="rounded-2xl border p-6"
                style={{
                  borderColor: "var(--brand-border)",
                  backgroundColor: "var(--brand-surface-alt)",
                }}
              >
                <div className="flex items-center gap-2">
                  <Globe2
                    className="h-5 w-5"
                    style={{ color: "var(--brand-primary)" }}
                    aria-hidden="true"
                  />
                  <h2
                    className="text-xl font-bold"
                    style={{ color: "var(--brand-ink)" }}
                  >
                    {brand.coverageSection.heading}
                  </h2>
                </div>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--brand-ink-muted)" }}
                >
                  {brand.coverageSection.subheading}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {brand.coverageSection.countries.map((country) => (
                    <span
                      key={country}
                      className="rounded-full border bg-white px-3 py-1 text-xs font-medium"
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
            </div>
          </div>
        </section>

        {/* Testimonials (only rendered if present in brand config) */}
        {brand.testimonials && (
          <section
            className="border-t py-16 sm:py-20"
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
        <section className="px-4 pb-16 sm:px-6 sm:pb-20">
          <div
            className="mx-auto max-w-5xl rounded-3xl px-6 py-12 text-center text-white shadow-lg sm:px-12"
            style={{ backgroundColor: "var(--brand-primary-dark)" }}
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {brand.bottomCta.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85 sm:text-base">
              {brand.bottomCta.subheading}
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={brand.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold shadow-md transition-transform hover:-translate-y-0.5"
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
    </div>
  );
}
