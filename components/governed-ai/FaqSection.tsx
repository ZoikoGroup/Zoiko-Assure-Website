"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is Governed AI in ZoikoAssure?",
    answer:
      "Governed AI is the product approach to source-grounded regulatory assistance with visible uncertainty, permissioned review and accountable human decisions. Exact features are confirmed during enterprise evaluation.",
  },
  {
    question: "Does ZoikoAssure AI provide legal advice?",
    answer:
      "No. AI-supported material must not be presented as legal advice or an autonomous determination of compliance. Professional review remains necessary.",
  },
  {
    question: "How are AI responses supported by regulatory sources?",
    answer:
      "The intended design associates material suggestions with source citations, versions, jurisdictions and applicable dates so reviewers can inspect the basis.",
  },
  {
    question: "What happens when AI is uncertain?",
    answer:
      "The interface preserves uncertainty, explains missing facts or sources and routes material questions to accountable review rather than inventing certainty.",
  },
  {
    question: "Can AI approve an obligation, control or assurance conclusion?",
    answer:
      "The product architecture preserves separate source authority, applicability review, operational controls, evidence evaluation and assurance decisions.",
  },
];

export default function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1, 2, 3, 4]);

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-center text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540]">
          Governed AI, Explained
        </h2>

        <div className="mt-8 sm:mt-10 flex flex-col space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-[#D9E2EC] bg-white p-5 sm:p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15.5px] sm:text-[16px] font-bold leading-normal text-[#0A2540]">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-lg font-semibold text-[#0A2540] transition-transform duration-200">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 text-[13.5px] sm:text-[14px] font-normal leading-[22px] text-[#5A6E85]">
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
