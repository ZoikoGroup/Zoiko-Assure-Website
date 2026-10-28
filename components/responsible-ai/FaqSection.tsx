"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Does AI decide compliance?",
    answer:
      "No. AI assistance supports analysis while authorized human reviewers remain responsible for material determinations.",
  },
  {
    question: "What happens when a source is ambiguous?",
    answer:
      "The interface should expose uncertainty and route qualified review.",
  },
  {
    question: "Are assessments independent?",
    answer:
      "Only where a scoped report is verified and approved for publication.",
  },
  {
    question: "How are AI outputs reviewed?",
    answer:
      "Outputs are evaluated against source fidelity, accuracy within stated scope, unsupported assertions, uncertainty handling, harmful or restricted outputs, and human override paths.",
  },
  {
    question: "How is uncertainty handled?",
    answer:
      "Where source or organizational context is insufficient, an outcome may remain UNCERTAIN and require qualified human review.",
  },
  {
    question: "What is responsible AI?",
    answer:
      "ZoikoAssure approaches AI as a governed capability emphasizing source-grounded assistance, explicit uncertainty, proportionate evaluation, accountable human review and traceable changes.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          FAQs and Direct Answers
        </h2>

        <div className="mt-12 flex flex-col space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
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
                  <span className="text-[16px] font-semibold leading-[25.6px] text-[#0A2540] pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center text-[20px] font-semibold text-[#0A2540] transition-transform duration-200 select-none ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
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
