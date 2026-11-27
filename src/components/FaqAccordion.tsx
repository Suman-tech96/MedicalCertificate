"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/brands/types";

interface FaqAccordionProps {
  heading: string;
  subheading: string;
  items: FaqItem[];
}

export function FaqAccordion({ heading, subheading, items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-10 text-center">
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
                className="overflow-hidden rounded-xl border bg-white transition-shadow"
                style={{ borderColor: "var(--brand-border)" }}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold transition-colors hover:bg-slate-50/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
                    style={{ color: "var(--brand-ink)" }}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      style={{ color: "var(--brand-primary)" }}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="border-t px-5 py-4 text-sm leading-relaxed sm:text-base"
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
