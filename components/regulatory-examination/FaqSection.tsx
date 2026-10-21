"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: "What is regulatory examination preparation?",
    answer: (
      <>
        <span className="sm:whitespace-nowrap">It is a governed process of receiving and scoping a supervisory request, identifying relevant</span>
        <br className="hidden sm:inline" /> obligations, reviewing controls/evidence and authorizing a response.
      </>
    ),
  },
  {
    question: "Does a prepared package mean we passed an examination?",
    answer: "No. Preparation and internal approval do not determine a regulator’s findings or outcome.",
  },
  {
    question: "Can ZoikoAssure automatically send a response?",
    answer: (
      <>
        External submission channels and export capabilities require product and legal verification;
        <br className="hidden sm:inline" /> the public page does not promise automatic delivery.
      </>
    ),
  },
  {
    question: "How are evidence and assurance different?",
    answer: (
      <>
        Evidence is a dated supporting record; assurance is an accountable evaluation of what that
        <br className="hidden sm:inline" /> evidence proves for a defined scope.
      </>
    ),
  },
  {
    question: "What if applicability is unclear?",
    answer: "The canonical result is UNCERTAIN, with sourced reasons, missing facts and human review.",
  },
  {
    question: "How is sensitive or privileged evidence handled?",
    answer: (
      <>
        Disclosure requires access governance and appropriate legal/privacy review; implemented
        <br className="hidden sm:inline" /> controls and contract terms should be validated.
      </>
    ),
  },
  {
    question: "How do legal effective dates relate to evidence?",
    answer: (
      <>
        The rule’s legal validity period differs from when a control operated and when evidence was
        <br className="hidden sm:inline" /> captured.
      </>
    ),
  },
  {
    question: "Does the platform replace legal counsel or an independent audit?",
    answer: (
      <>
        No. It is designed to support governed evidence and decision provenance, not replace
        <br className="hidden sm:inline" /> professional judgment.
      </>
    ),
  },
  {
    question: "What regulators or jurisdictions are supported?",
    answer: (
      <>
        <span className="sm:whitespace-nowrap">Scope and content depend on verified source coverage, dates and contracted product</span>
        <br className="hidden sm:inline" /> capabilities; request a specific evaluation.
      </>
    ),
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
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540]">
          Buyer FAQs
        </h2>

        <div className="mt-12 flex flex-col gap-4">
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
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-4 max-w-[800px] text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
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
