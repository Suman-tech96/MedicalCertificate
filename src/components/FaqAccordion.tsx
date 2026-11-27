"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FaqItem } from "@/brands/types";

interface FaqAccordionProps {
  heading: string;
  subheading: string;
  items: FaqItem[];
}

export function FaqAccordion({ heading, subheading, items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="border-t py-12 sm:py-16"
      style={{
        borderColor: "var(--brand-border)",
        backgroundColor: "var(--brand-surface-alt)",
      }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <div
            className="mx-auto mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: "var(--brand-badge-bg)",
              color: "var(--brand-badge-text)",
            }}
          >
            <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>FAQ</span>
          </div>
          <h2
            className="text-2xl font-bold tracking-tight sm:text-3xl"
            style={{ color: "var(--brand-ink)" }}
          >
            {heading}
          </h2>
          <p
            className="mt-2 text-base"
            style={{ color: "var(--brand-ink-muted)" }}
          >
            {subheading}
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border bg-white transition-all"
                style={{
                  borderColor: isOpen
                    ? "var(--brand-primary)"
                    : "var(--brand-border)",
                  boxShadow: isOpen
                    ? "0 8px 24px -10px rgba(15, 28, 51, 0.1)"
                    : "none",
                }}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold transition-colors hover:bg-slate-50/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px] sm:px-6 sm:py-5"
                    style={{ color: "var(--brand-ink)" }}
                  >
                    <span>{item.question}</span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors"
                      style={{
                        backgroundColor: isOpen
                          ? "var(--brand-primary)"
                          : "var(--brand-surface)",
                        color: isOpen ? "#ffffff" : "var(--brand-primary)",
                      }}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="border-t px-5 py-4 text-sm leading-relaxed sm:px-6 sm:py-5 sm:text-base"
                    style={{
                      borderColor: "var(--brand-border)",
                      color: "var(--brand-ink-muted)",
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
