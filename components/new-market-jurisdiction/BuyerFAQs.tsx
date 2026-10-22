"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is new-market regulatory readiness?",
    answer:
      "It is a structured review of which regulatory requirements may apply to a planned jurisdiction, entity, product or activity and the controls and evidence needed to support accountable decisions.",
  },
  {
    question: "Does choosing a country tell us everything that applies?",
    answer:
      "No. Applicability depends on legal entity, planned activity, customer type, product, data, effective dates and other relevant facts; unknown facts require review.",
  },
  {
    question: "Can ZoikoAssure approve entry into a jurisdiction?",
    answer:
      "No. Regulatory authorizations, licenses, legal determinations and business go/no-go decisions belong to relevant authorities and accountable people.",
  },
  {
    question: "What is UNCERTAIN?",
    answer:
      "UNCERTAIN identifies an applicability question that cannot be resolved responsibly from available source or business facts and requires qualified review.",
  },
  {
    question: "How are jurisdictional differences handled?",
    answer:
      "The operating model preserves authority, jurisdiction-specific scope, effective dates, differences and unresolved issues instead of flattening legal obligations into a global template.",
  },
  {
    question: "Does a risk acceptance prove compliance?",
    answer:
      "No. A governed decision to accept risk is separate from whether a control was proven with valid operating evidence.",
  },
];

export default function BuyerFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Buyer FAQs
        </h2>

        <div className="mt-10 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-[8px] border border-[#D9E2EC] bg-white transition-shadow duration-200 hover:shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-[18px] font-medium text-[#0A2540]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
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
