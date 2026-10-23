"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is regulatory change intelligence?",
    answer:
      "It is the structured discovery of attributable legal and regulatory developments, including issuer, relevant jurisdiction, publication and effective dates where known, source version and review context.",
  },
  {
    question:
      "What is the difference between Regulatory Changes and Regulatory Change?",
    // Figma wraps this question at 598px.
    narrowQuestion: true,
    answer:
      "Regulatory Changes is the source-oriented intelligence destination. Regulatory Change under Solutions explains how an organization can evaluate a development for applicability and its operational effects.",
  },
  {
    question:
      "Does a published regulation automatically apply to my organization?",
    answer:
      "No. Applicability depends on legal entity, jurisdiction, activity, products, data and effective period. Qualified review may leave the result UNCERTAIN.",
  },
  {
    question: "Why are publication and effective dates different?",
    answer:
      "A measure may be issued or published before its requirements take legal effect, and some provisions may use staged or transitional dates.",
  },
  {
    question: "Can AI tell me whether a change makes us compliant?",
    answer:
      "No. Source-grounded assistance may support research where offered, but legal applicability, control operation and assurance require contextual evidence and accountable human decisions.",
  },
  {
    question: "Does a mapped control mean the change is resolved?",
    answer:
      "No. Mapping identifies a control relationship; operating evidence and an appropriately scoped assurance evaluation are separate steps.",
  },
];

export default function ChangeFAQs() {
  // The Figma design shows every answer expanded.
  const [closed, setClosed] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setClosed((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-0">
        <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          Buyer FAQs
        </h2>

        <div className="flex flex-col gap-4 pt-12">
          {faqs.map((faq, index) => {
            const isOpen = !closed.has(index);
            return (
              <div
                key={faq.question}
                className="overflow-clip rounded-[4px] border border-[#D9E2EC] bg-white p-5"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <span
                    className={`text-[16px] font-semibold leading-[25.6px] text-[#0A2540] ${
                      faq.narrowQuestion ? "lg:w-[598px]" : ""
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[16px] font-semibold leading-[25.6px] text-[#0A2540]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
