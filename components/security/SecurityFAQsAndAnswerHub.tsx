"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What security information can buyers review?",
    answer:
      "Publicly approved control descriptions and, where applicable, authorized documentation available through a reviewed request process.",
  },
  {
    question: "Does ZoikoAssure support SSO and MFA?",
    answer:
      "Identity capabilities and plan/deployment scope must be confirmed in the enterprise evaluation; only publish specific support after Product/Security validation.",
  },
  {
    question: "How is customer data protected?",
    answer:
      "Assess the documented safeguards and applicable environment; detailed claims about encryption, keys and data processing require verified scope.",
  },
  {
    question: "Are security certifications available?",
    answer:
      "Only current, independently verified, properly scoped and display-authorized certifications or attestations are shown.",
  },
  {
    question: "Can customers request audit or pen-test information?",
    answer:
      "Where available, applicable materials may be shared after qualification, authorization and any required NDA.",
  },
  {
    question: "Does the platform guarantee regulatory compliance?",
    answer:
      "No. Provider security safeguards and product assurance support evaluation; legal interpretation, applicability and assurance require specific evidence and accountable decisions.",
  },
];

export default function SecurityFAQsAndAnswerHub() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Security FAQs and Answer Hub
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
