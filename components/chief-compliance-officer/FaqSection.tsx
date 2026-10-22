"use client";

import { useState } from "react";

export default function FaqSection() {
  const faqs = [
    {
      question: "How can a Chief Compliance Officer use ZoikoAssure?",
      answer:
        "ZoikoAssure is designed to connect source-grounded applicability, obligations, controls and evidence so compliance leaders can review accountable ownership, assurance gaps and the work required before scrutiny.",
    },
    {
      question: "Does mapping an obligation to a control prove compliance?",
      answer:
        "No. A mapping documents a relationship. Evidence of operation and an appropriately reviewed assurance conclusion remain separate.",
    },
    {
      question: "What if applicability is unclear?",
      answer:
        "The canonical result can remain UNCERTAIN. The interface should expose missing facts, source context and an accountable review route rather than forcing a positive or negative conclusion.",
    },
    {
      question: "How are compliance exceptions treated?",
      answer:
        "Exceptions and risk acceptance are separately governed records. Accepting a risk does not demonstrate control effectiveness or change an assurance result to Proven.",
    },
    {
      question: "Can the platform guarantee a successful regulatory examination?",
      answer:
        "No. The design supports source-linked evidence preparation and accountable review, not a guarantee of acceptance or examination outcome.",
    },
    {
      question: "Can ZoikoAssure review evidence freshness?",
      answer:
        "The target model tracks evidence origin, captured/valid-as-of context and review status. Actual collection/validation methods must be confirmed before public capability claims.",
    },
  ];

  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const toggle = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          Chief Compliance Officer FAQ
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-[4px] border border-[#D9E2EC] bg-white p-5 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between text-left"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-[16px] font-semibold leading-[25.6px] text-[#0A2540]">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[16px] font-semibold leading-[25.6px] text-[#0A2540]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4">
                    <p className="text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                      {faq.answer}
                    </p>
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
