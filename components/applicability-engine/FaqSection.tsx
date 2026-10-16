"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What is regulatory applicability?",
    answer: (
      <>
        It is a context-specific evaluation of whether a cited requirement applies to a given<br className="hidden sm:inline" />
        organization or activity for a defined period.
      </>
    ),
  },
  {
    question: "Does UNCERTAIN mean the requirement does not apply?",
    answer: (
      <>
        No. It indicates the available basis is insufficient for a reliable answer and requires<br className="hidden sm:inline" />
        appropriate review.
      </>
    ),
  },
  {
    question: "Does an applicability decision grant access or prove compliance?",
    answer: (
      <>
        No. Authorization is governed separately; control operation and assurance require distinct<br className="hidden sm:inline" />
        proof and review.
      </>
    ),
  },
  {
    question: "Can AI make the final legal determination?",
    answer: "No. Accountable people remain responsible for consequential decisions.",
  },
];

export default function FaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3]);

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-12 md:px-20 lg:px-[95px]">
        <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
          Applicability questions, answered.
        </h2>

        {/* FAQ Accordion List */}
        <div className="mt-12 flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[4px] border border-[#D9E2EC] bg-white transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors duration-150 hover:bg-slate-50/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] font-semibold leading-[25.6px] text-[#0A2540]">
                    {item.question}
                  </span>
                  <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-xl font-semibold leading-none text-[#0A2540]">
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="max-w-[694px] text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                      {item.answer}
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
