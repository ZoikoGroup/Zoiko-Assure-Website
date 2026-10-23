"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is a regulatory obligation?",
    answer:
      "A regulatory obligation is a requirement derived from an authoritative legal or regulatory source. Its meaning and applicability depend on the cited provision, jurisdiction, scope, effective period and relevant organizational facts.",
  },
  {
    question: "How are obligations different from regulatory changes?",
    answer:
      "Regulatory Changes documents developments such as new instruments, amendments and guidance. Obligations describes the structured requirements derived from authoritative material. A development may alter one or more obligations, while each public requirement record retains its own citation and timing context.",
  },
  {
    question: "Does every listed obligation apply to my organization?",
    answer:
      "No. Applicability may depend on legal entity, activity, product, customer type, data, jurisdiction and date. The public list does not determine applicability; uncertain cases require qualified review.",
  },
  {
    question: "How do you verify a requirement?",
    answer:
      "Each public record should link to the original authoritative source, precise provision and reviewed dates, with version and reviewer information where approved. Records are not published as verified until the relevant source and editorial checks are complete.",
  },
  {
    question: "Are guidelines and consultations legally binding?",
    answer:
      "Not automatically. Legal force depends on the instrument and jurisdiction. The page must distinguish proposed material and advisory guidance from obligations established by binding sources, with appropriate qualification.",
  },
  {
    question: "How do obligations connect to controls and evidence?",
    answer:
      "After context-specific applicability review, organizations can map duties to accountable controls and collect evidence of operation. A mapping alone does not show that a control operated or that assurance is proven.",
  },
];

export default function ObligationFAQs() {
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
