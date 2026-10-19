"use client";

import { useState } from "react";

export default function FaqSection() {
  const faqs = [
    {
      question: "What can a CFO learn from ZoikoAssure?",
      answer: (
        <>
          ZoikoAssure connects source-grounded regulatory context with obligations, controls, evidence and assurance. The proposed CFO view emphasizes potentially<br className="hidden md:inline" />{" "}
          material exposure, unresolved proof gaps and accountable next steps, with financial significance reviewed separately.
        </>
      ),
    },
    {
      question: "How does the Audit & Risk Committee use the information?",
      answer: (
        <>
          An authorized committee view can present a dated, scoped briefing of regulatory exposure, evidence-backed assurance, exceptions and open management<br className="hidden md:inline" />{" "}
          actions. Availability and approval workflows require implementation verification.
        </>
      ),
    },
    {
      question: "Does ZoikoAssure calculate financial losses or contingencies?",
      answer: (
        <>
          The source documents do not establish an automated monetary exposure, accounting or loss calculation. Any materiality methodology must be explicitly<br className="hidden md:inline" />{" "}
          approved and implemented before it is represented as a product feature.
        </>
      ),
    },
    {
      question: "What does Proven mean in an assurance report?",
      answer: (
        <>
          Proven is a scoped, evidence-backed assessment as of the evaluated period, with an inspectable basis and reviewer context. It is not a general legal<br className="hidden md:inline" />{" "}
          determination that an organization is compliant.
        </>
      ),
    },
    {
      question: "Can accepted risks appear as resolved compliance issues?",
      answer: (
        <>
          No. Risk acceptance and exceptions are separately governed decisions; they do not prove that a control operated or change an assurance<br className="hidden md:inline" />{" "}
          conclusion.
        </>
      ),
    },
  ];

  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3, 4]);

  const toggle = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1256px] px-4 sm:px-6 lg:px-0">
        <h2 className="text-[24px] font-semibold leading-[29px] text-[#0A2540]">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-[4px] border border-[#D9E2EC] bg-white p-5 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between text-left"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-[16px] font-semibold leading-[26px] text-[#0A2540]">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[16px] font-semibold leading-[26px] text-[#0A2540]">
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4">
                    <p className="text-[16px] font-normal leading-[26px] text-[#5F6B7A]">
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
