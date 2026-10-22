"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is enterprise AI governance?",
    answer:
      "It is the governed link between an AI use case and the obligations that apply to it—including the mapped controls, accountable owners, human review expectations and retained evidence. It is an operating layer, not just a policy document.",
  },
  {
    question: "Does ZoikoAssure decide whether an obligation applies to an AI system?",
    answer:
      "Applicability is reasoned from a defined context and presented with its citation. A qualified reviewer confirms or changes the determination; the tool makes the reasoning explicit and reviewable rather than replacing judgment.",
  },
  {
    question: "How are AI-made answers treated?",
    answer:
      "ZoikoAssure describes AI as source-grounded assistance. Drafts are shown with their basis, and consequential regulatory or assurance decisions route to an accountable human reviewer. An AI draft is not an independent legal determination.",
  },
  {
    question: "Can it handle obligations from multiple regimes?",
    answer:
      "Yes. Sources from different regimes and internal policies can be connected to the same use case, each retained with its own source, version and effective period so they can be compared over time.",
  },
  {
    question: "What happens when a regulation or model changes?",
    answer:
      "The changed source and effective period are compared against the prior obligation and control relationship, and a reviewer decision is routed before the record is adapted. A reviewer can also adjust the mapping definitively when the operating response needs to change.",
  },
  {
    question: "How does this connect to the rest of the platform?",
    answer:
      "AI governance shares the same foundation as obligation and control mapping, evidence provenance and the applicability engine—so one obligation can carry an accountable owner, mapped controls and retained evidence across regimes.",
  },
];

export default function BuyerFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Buyer FAQs
        </h2>

        <div className="mt-10 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-[8px] border border-[#D9E2EC] bg-white transition-shadow duration-200 hover:shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-[18px] font-medium text-[#0A2540]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
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
