"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: "What is regulatory change management?",
    answer: (
      <>
        <span className="sm:whitespace-nowrap">It is the process of identifying authoritative regulatory developments, determining which organizational contexts they affect and governing</span>
        <br className="hidden sm:inline" /> the resulting obligation, control and evidence review. ZoikoAssure’s proposed solution page illustrates that source-to-assurance workflow.
      </>
    ),
  },
  {
    question: "How is this different from Regulatory Changes under Regulatory Intelligence?",
    answer: (
      <>
        <span className="sm:whitespace-nowrap">Regulatory Changes is the source-oriented destination for dated regulatory developments. Regulatory Change under Solutions explains</span>
        <br className="hidden sm:inline" /> how an organization can assess impact and coordinate accountable operational response.
      </>
    ),
  },
  {
    question: "Does a newly published law automatically apply to our organization?",
    answer: (
      <>
        <span className="sm:whitespace-nowrap">No. Applicability depends on jurisdiction, entity, activity, product, customer/data context and effective period.</span>
        <br className="hidden sm:inline" /> The state may remain UNCERTAIN pending qualified review.
      </>
    ),
  },
  {
    question: "What happens after a relevant rule changes?",
    answer: (
      <>
        <span className="sm:whitespace-nowrap">The change may require an obligation assessment, control mapping review, owner action and refreshed evidence.</span>
        <br className="hidden sm:inline" /> A detected update alone does not demonstrate operating effectiveness.
      </>
    ),
  },
  {
    question: "What is the difference between published and effective dates?",
    answer: (
      <>
        <span className="sm:whitespace-nowrap">Published date indicates when source material was released. Effective date identifies when its relevant legal requirements take effect;</span>
        <br className="hidden sm:inline" /> a change may include phased or different effective periods.
      </>
    ),
  },
  {
    question: "Can AI determine whether we comply?",
    answer: (
      <>
        <span className="sm:whitespace-nowrap">No. AI may assist analysis with source grounding, concise explanations and uncertainty signals,</span>
        <br className="hidden sm:inline" /> but consequential legal and assurance decisions remain human-accountable.
      </>
    ),
  },
  {
    question: "Does a mapped control mean the change is resolved?",
    answer: (
      <>
        <span className="sm:whitespace-nowrap">No. Mapping identifies a control relationship; operating evidence and an</span>
        <br className="hidden sm:inline" /> appropriately scoped assurance evaluation are separate steps.
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
