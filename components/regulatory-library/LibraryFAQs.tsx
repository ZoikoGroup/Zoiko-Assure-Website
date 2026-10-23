"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the ZoikoAssure Regulatory Library?",
    answer:
      "The ZoikoAssure Regulatory Library is a source-linked collection of reviewed regulatory intelligence records and explainers. Each published entry identifies its authority, jurisdiction, scope, relevant dates and review context so readers can investigate requirements without mistaking a summary for legal advice.",
  },
  {
    question: "Does a library result mean a regulation applies to my organization?",
    answer:
      "No. Applicability depends on organizational facts including legal entity, activities, products, customer types, data, location and effective period. ZoikoAssure treats that as a separate, governed decision and can preserve UNCERTAIN when facts or sources need review.",
  },
  {
    question: "Is library content the same as official regulatory text?",
    answer:
      "No. Official source material and ZoikoAssure explanatory summaries are distinctly labeled. Readers should inspect the cited original source, issue date, amendments, legal status and jurisdictional context before relying on an interpretation.",
  },
  {
    question: "How are changes and effective dates shown?",
    answer:
      "Where verified, the interface distinguishes publication date, effective-from date, source-observed date and last editorial review. Historical or superseded records retain status and related-version links so a reader does not mistake an older rule for current law.",
  },
  {
    question: "Can I search all regulations worldwide?",
    answer:
      "The library offers browsable reviewed content. Indexed search and broader coverage should be described only when actually implemented and supported by a maintained source registry and methodology. The absence of a record does not mean the absence of a legal requirement.",
  },
  {
    question: "Does ZoikoAssure provide legal advice or guarantee compliance?",
    answer:
      "No. The platform supports source-grounded regulatory intelligence and continuous assurance workflows under accountable human governance. Neither AI-generated text nor a published record substitutes for professional legal judgment or evidence of control operation.",
  },
];

export default function LibraryFAQs() {
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
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
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
                  <span className="text-[16px] font-semibold leading-[25.6px] text-[#0A2540]">
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
