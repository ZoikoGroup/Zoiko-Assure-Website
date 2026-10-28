"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is enterprise data governance?",
    answer:
      "Data governance defines who is accountable for enterprise information and which rules guide its classification, handling, use, review, retention and disposition. It is a decision and stewardship discipline. Actual enforcement requires implemented controls and applicable contracts; publishing a policy alone does not demonstrate that a control operated.",
  },
  {
    question: "How does data governance relate to compliance assurance?",
    answer:
      "Governed data can support traceable regulatory analysis and evidence, but data governance is not itself an assurance conclusion. In ZoikoAssure’s model, regulatory sources lead through applicability, obligations, controls and evidence before any evidence-backed assurance state. Unresolved gaps or risk acceptance remain separately visible.",
  },
  {
    question: "What does data classification determine?",
    answer:
      "Classification organizes information according to its handling needs and responsible owner. A classification model may influence access, allowed use, sharing, retention and review expectations. The correct labels and enforcement mechanisms depend on the organization’s approved policies and systems; the example taxonomy on this page is illustrative.",
  },
  {
    question: "How are data retention and deletion governed?",
    answer:
      "Retention and disposition depend on data category, contractual rules, legal obligations, holds and authorized approval. A request to delete is not proof that a record has been disposed of. Verified timing, deletion scope, backups, legal exceptions and customer rights should be read in the applicable approved privacy documents and agreements.",
  },
  {
    question: "What is data provenance?",
    answer:
      "Provenance is the contextual record of an information item’s origin, version, processing, timing and review history. It supports the question “where did this come from and what changed?” Provenance helps examine evidence but cannot by itself prove that an operational control was effective or that a legal requirement was satisfied.",
  },
  {
    question: "Does ZoikoAssure guarantee data residency or AI-data isolation?",
    answer:
      "No blanket guarantee should be inferred from this overview. Specific residency, transfer, AI-processing and service commitments depend on what is implemented and what has been verified and approved for an applicable agreement. Review the Privacy, Responsible AI and Deployment & Residency information, and request a scoped enterprise discussion when needed.",
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
          Data Governance Questions, Answered With Context.
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
