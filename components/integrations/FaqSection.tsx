"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What are ZoikoAssure integrations?",
    answer:
      "They are intended to connect permitted enterprise source records to governed control and evidence workflows. A working connection supports data flow; it does not establish that a control has operated effectively or that legal compliance is achieved.",
  },
  {
    question: "Does connecting a system automatically prove a control?",
    answer:
      "No. A record must be relevant, timely, appropriately mapped and reviewed against an evidence requirement before it can support an assurance conclusion.",
  },
  {
    question: "How is sensitive data governed?",
    answer:
      "Integration scope, access authority, processing purpose and retention depend on implemented controls and contractual arrangements. Trust Center and sales-assisted security review are the authoritative evaluation paths.",
  },
  {
    question: "What happens when a source is unavailable or data becomes stale?",
    answer:
      "A governed workflow should distinguish missing, stale and unavailable data; retain visible as-of context when appropriate; and route issues to accountable owners. The system must not turn an unknown state into a positive assurance conclusion.",
  },
  {
    question: "Does AI decide regulatory compliance from connected data?",
    answer:
      "No. ZoikoAssure positions AI as source-grounded, uncertainty-aware assistance with accountable human review, not autonomous legal or regulatory judgment.",
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
          Integration FAQs
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
