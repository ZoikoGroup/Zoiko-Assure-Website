"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What does the ZoikoAssure Privacy page cover?",
    answer:
      "It explains privacy governance topics and where to locate official notices and processing terms.",
  },
  {
    question: "Does ZoikoAssure act as a controller or processor?",
    answer:
      "Responsibility depends on the data and context; consult the relevant notice/agreement.",
  },
  {
    question: "How can an individual make a privacy request?",
    answer:
      "Use the verified contact/channel in the applicable Privacy Policy or customer-provided route.",
  },
  {
    question: "Where can I review subprocessors and data transfers?",
    answer:
      "Consult current relevant disclosures and DPA, and evaluate deployment separately.",
  },
  {
    question: "Is customer information used to train AI?",
    answer:
      "Specific treatment must be established in validated current terms and product disclosures.",
  },
  {
    question: "How long is information retained?",
    answer:
      "Applicable duration depends on data context and governing terms, which should be reviewed.",
  },
];

export default function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([
    0, 1, 2, 3, 4, 5,
  ]);

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540]">
          Privacy questions, answered carefully.
        </h2>

        <div className="mt-8 sm:mt-10 flex flex-col space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-[#E2E8F0] bg-white p-5 sm:p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-all duration-200"
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
