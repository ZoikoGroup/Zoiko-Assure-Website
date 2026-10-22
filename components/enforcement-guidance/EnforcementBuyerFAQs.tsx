"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is regulatory enforcement?",
    answer:
      "Regulatory enforcement is action taken by an authorized body under a defined legal or supervisory framework. Public outcomes may include notices, decisions, orders, settlements and other measures. Their effect depends on jurisdiction, instrument and procedural status.",
  },
  {
    question: "Is supervisory guidance legally binding?",
    answer:
      "Not necessarily. A regulator's guidance may communicate interpretation or expectations without independently having the force of law. The answer depends on the issuing authority, legal instrument, governing framework and jurisdiction; readers should consult the primary source.",
  },
  {
    question: "Does an enforcement decision apply to every business?",
    answer:
      "No. Public enforcement decisions often concern particular facts, parties, periods and laws. Similar organizations may find them informative, but organization-specific applicability and obligations require separate, source-grounded analysis.",
  },
  {
    question: "What does an appealed or settled action mean?",
    answer:
      "Appeals, stays and settlements can change how an action should be understood. Their legal effect is not uniform. A public record should state what the original source confirms, including whether allegations were admitted, findings made or an order stayed.",
  },
  {
    question: "How should I use supervisory guidance in a compliance program?",
    answer:
      "Treat guidance as authoritative context only to the extent the issuing body and applicable law support. Evaluate the underlying requirements against your organization's facts, document responsible review, map applicable obligations and preserve separate operating evidence.",
  },
  {
    question:
      "Does ZoikoAssure determine whether my organization violated a law?",
    answer:
      "No such determination should be inferred from this page. ZoikoAssure's public materials explain reviewed sources and governed workflows; legal findings, applicability, and consequential decisions require the correct authority, context and accountable professional review.",
  },
];

export default function EnforcementBuyerFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
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
