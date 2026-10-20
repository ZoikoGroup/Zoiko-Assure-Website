"use client";

import { useState } from "react";

export default function FaqSection() {
  const faqs = [
    {
      question: "What does ZoikoAssure help General Counsel do?",
      answer:
        "It is designed to connect cited regulatory sources, contextual applicability and governed reviews to obligations, controls, evidence and assurance, with legal responsibility remaining with accountable professionals.",
    },
    {
      question: "Does ZoikoAssure determine whether a regulation applies?",
      answer:
        "The applicability model can organize relevant facts and source-grounded reasoning. Where facts or interpretation are insufficient, it preserves UNCERTAIN and routes the matter to review; it is not autonomous legal advice.",
    },
    {
      question: "How does the platform distinguish regulation versions and dates?",
      answer:
        "A defensible review should identify authority, citation, version, publication and effective dates and distinguish them from operational observations and later evaluation timestamps.",
    },
    {
      question: "Can it automatically resolve conflicts between jurisdictions?",
      answer:
        "No such blanket claim is made. The design exposes jurisdiction-specific differences, possible conflicts and the need for qualified human legal review.",
    },
    {
      question: "How are legal decisions traced to operating proof?",
      answer:
        "The six-stage chain links regulatory source and applicability to obligations, controls, evidence and evaluated assurance; each stage remains distinct.",
    },
    {
      question: "Does an accepted exception mean a control is proven?",
      answer:
        "No. Risk acceptance and exceptions remain separate governed decisions and do not substitute for evidence of operating control effectiveness.",
    },
    {
      question: "Can AI make final legal determinations?",
      answer:
        "ZoikoAssure positions AI as source-grounded assistance with uncertainty, escalation and accountable human review—not a replacement for a qualified legal decision-maker.",
    },
  ];

  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3, 4, 5, 6]);

  const toggle = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1256px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          General Counsel FAQ
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
                  <span className="pr-4 text-[16px] font-semibold leading-[25.6px] text-[#0A2540]">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[18px] font-semibold leading-[25.6px] text-[#0A2540]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4">
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
