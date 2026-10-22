"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is a regulatory or governance framework?",
    answer:
      "ZoikoAssure Frameworks is a source-linked discovery hub for standards, regulatory frameworks and governance approaches, with clear legal-status and applicability qualifications.",
  },
  {
    question: "Does referencing a framework mean we are certified?",
    answer:
      "No. References to a framework or standard do not represent certification, regulatory approval or proof that an organization is compliant.",
  },
  {
    question: "Are all frameworks legally binding?",
    answer:
      "Different references carry different authority. Legal status varies with adoption/incorporation, jurisdiction and effective date. Frameworks distinguish binding instruments, voluntary standards, and official guidance.",
  },
  {
    question: "How does a framework connect to compliance assurance?",
    answer:
      "The system connects framework concepts to scoped requirements, controls and evidence. However, mapping a framework to a control does not automatically prove control operation.",
  },
  {
    question: "How is the framework index maintained?",
    answer:
      "Inclusion, source choice, legal-status caveats and review dates are governed by an editorial methodology. Outdated entries are marked superseded.",
  },
];

export default function FrameworkBuyerFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
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
                  className="flex w-full items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
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
