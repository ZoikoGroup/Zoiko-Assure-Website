"use client";

import { useState } from "react";

export default function FaqSection() {
  const faqs = [
    {
      question: "What does ZoikoAssure provide for Chief Risk Officers?",
      answer:
        "It is designed to connect regulatory intelligence, contextual applicability, obligations, controls and evidence to an explainable assurance view. Deployment-specific availability and integrations should be validated during evaluation.",
    },
    {
      question: "Does ZoikoAssure give us a risk score?",
      answer:
        "The recommended public experience uses an explainable Regulatory Exposure Profile with drivers, assumptions and dated source context. A composite score must not be promised without a separately approved methodology.",
    },
    {
      question: "Can the platform tell us which regulations apply?",
      answer:
        "Applicability depends on jurisdiction, legal entity, activity, product, data and effective period. An UNCERTAIN result signals a need for accountable review rather than false certainty.",
    },
    {
      question: "Does control mapping mean a control is effective?",
      answer:
        "No. A mapped control identifies a proposed operational response. Operation, supporting evidence and assurance evaluation are separate steps.",
    },
    {
      question: "How are accepted risks represented?",
      answer:
        "Risk acceptance and exceptions remain explicit governance records with scope, owner, rationale and review needs. They do not count as evidence that a control is proven.",
    },
    {
      question: "Does AI make legal or compliance decisions?",
      answer:
        "No autonomous legal determination is promised. AI assistance is source-grounded and governed, with uncertainty and consequential decisions assigned to accountable human reviewers.",
    },
  ];

  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const toggle = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-white pt-20 pb-24">
      <div className="mx-auto w-full max-w-[1256px] px-6 md:px-0">
        <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-[8px] border border-[#D9E2EC] bg-white p-5 transition-colors"
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
                    +
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
