"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is evidence provenance?",
    answer:
      "Evidence provenance records the origin, collection context, versions, dates, relationships and review history that help a qualified reviewer understand an evidence item and its limitations.",
  },
  {
    question: "How is evidence different from assurance?",
    answer:
      "Evidence is information offered to support a control or requirement. Assurance is a separate, evidence-backed evaluation that determines what is supported, what is not proven and what requires further review.",
  },
  {
    question: "Does uploading a document prove compliance?",
    answer:
      "No. A stored document alone does not demonstrate that a control operated effectively or that every legal requirement was met. Relevance, period, integrity where supported and accountable review still matter.",
  },
  {
    question: "What happens when evidence is old or missing?",
    answer:
      "The design preserves missing and stale states and the relevant as-of context. Evidence gaps route to an accountable owner rather than silently presenting positive assurance.",
  },
  {
    question: "Can AI approve evidence or provide legal conclusions?",
    answer:
      "ZoikoAssure positions AI as source-grounded assistance under human accountability. AI output must not be represented as an autonomous legal determination or proof of compliance.",
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
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540]">
          Evidence &amp; Provenance FAQs
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
