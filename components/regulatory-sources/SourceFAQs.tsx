"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What are regulatory sources?",
    answer:
      "Regulatory sources are identifiable issuers and publication channels—such as official regulator sites or legislative publications—from which relevant regulatory material can be traced. An editorial summary is distinct from the original source.",
  },
  {
    question: "How does ZoikoAssure assess source authority?",
    answer:
      "The proposed source registry records issuer identity, official publication channel, jurisdiction, source class and review context. The detailed process belongs to the published Methodology destination. Actual verification claims require source-record approval.",
  },
  {
    question: "Does a source appear for every jurisdiction?",
    answer:
      "No universal completeness claim is made. Published entries must reflect the maintained source scope and dates verified; a missing listing does not mean that a jurisdiction has no applicable laws.",
  },
  {
    question: "Does a cited source mean a rule applies to us?",
    answer:
      "No. Applicability depends on facts including jurisdiction, legal entity, activity, product, data and effective time; an unresolved assessment may be UNCERTAIN and require human review.",
  },
  {
    question: "Are all official releases legally binding?",
    answer:
      "No. Statutes, regulations, orders, guidance, consultations and public notices can have different legal characteristics. Binding effect is determined from the actual instrument and jurisdictional context, not source branding.",
  },
  {
    question: "How do I know if a source is current?",
    answer:
      "The source record displays its latest actual verification/review context and any known limitation or successor. Source retrieval time, document publication date and effective date are not interchangeable.",
  },
];

export default function SourceFAQs() {
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
