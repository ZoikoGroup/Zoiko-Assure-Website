"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is a regulatory obligation?",
    answer:
      "A regulatory obligation is a requirement derived from an applicable regulatory source, interpreted for a defined business context and period. It should retain the source, scope, accountable owner and review basis.",
  },
  {
    question: "What is obligation and control mapping?",
    answer:
      "It is the governed link between a regulatory obligation and the operational control intended to address it. The link should explain scope, ownership and rationale; it is not evidence that the control has operated.",
  },
  {
    question: "Does a mapped control prove compliance?",
    answer:
      "No. A mapped control shows intended coverage. Evidence of operation, appropriate review and an evidence-backed assurance conclusion are separate activities.",
  },
  {
    question: "How should a changed regulation affect an existing mapping?",
    answer:
      "The changed source and effective period should be compared with the prior obligation and control relationship. An accountable reviewer must determine whether the mapping remains suitable.",
  },
  {
    question: "Can AI make a final control compliance decision?",
    answer:
      "ZoikoAssure describes AI as source-grounded assistance. Consequential regulatory and assurance decisions require accountable human governance; an AI draft is not an independent legal determination.",
  },
];

export default function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
          Obligation and control mapping, explained.
        </h2>

        <div className="mt-8 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={faq.question}
                className="rounded-[4px] border border-[#D9E2EC] bg-white p-5 transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] font-semibold leading-[25.6px] text-[#0A2540]">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-xl font-semibold text-[#0A2540]">
                    +
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
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
