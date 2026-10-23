"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What does regulatory assurance mean in M&A?",
    answer:
      "It means reviewing how a transaction changes the entities, activities, rules, controls, evidence and accountable decisions that support compliance conclusions. A traceable review does not itself authorize a transaction.",
  },
  {
    question: "Can ZoikoAssure determine which obligations are inherited?",
    answer:
      "The proposed operating model organizes source-backed applicability and obligation review by entity, activity, jurisdiction and time. A qualified reviewer must resolve uncertainties; specific automated capabilities require confirmation.",
  },
  {
    question: "Is an inherited control automatically effective?",
    answer:
      "No. A control mapping or ownership transfer does not prove operation. Evidence from the relevant period and appropriate review are required for an evidence-backed assurance conclusion.",
  },
  {
    question: "What happens when an applicability decision is unclear?",
    answer:
      "The canonical state is UNCERTAIN. The page must explain what facts or sources are missing and route the question to an accountable reviewer rather than force a yes/no answer.",
  },
  {
    question: "Can approved exceptions count as compliance?",
    answer:
      "No. Exceptions and risk acceptance are separately governed decisions. They do not convert missing, stale or ineffective control evidence into a Proven assurance state.",
  },
  {
    question: "Does the platform approve a merger or notify regulators?",
    answer:
      "No transaction authorization or external submission should be claimed without specific verified functionality and qualified legal review. Relevant consents and notices remain accountable legal and regulatory processes.",
  },
  {
    question: "Can evidence from before closing prove post-close compliance?",
    answer:
      "Only where its validity, control scope and time period support that conclusion. The interface must show evidence-as-of and the relevant operating period, including gaps created by transition.",
  },
];

export default function BuyerFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540] md:text-[24px]">
            Buyer FAQs
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-4 md:mt-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="w-full rounded-[4px] border border-[#D9E2EC] bg-white transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2540]"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-[16px] font-semibold leading-[25.6px] text-[#0A2540]">
                    {faq.question}
                  </span>
                  <span
                    className={`select-none text-xl font-medium leading-none text-[#0A2540] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0">
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
