"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What does jurisdiction mean in regulatory compliance?",
    answer:
      "It is the territory or governing legal regime within which a regulator or rule has defined reach. Actual applicability also depends on the organization, activity, product, customers, data and relevant effective period.",
  },
  {
    question: "Does a regulation apply simply because I select a country?",
    answer:
      "No. Geographic discovery shows potentially relevant sources. Whether a requirement applies to a specific organization requires contextual legal and factual evaluation.",
  },
  {
    question: "Is the European Union the same jurisdiction as Europe?",
    answer:
      "No. The European Union is a supranational legal and regulatory structure. Europe is broader geography, and EU instruments can interact with national implementation and territorial rules.",
  },
  {
    question: "Is the Middle East one legal jurisdiction?",
    answer:
      "No. It is a regional grouping of multiple countries and legal systems. Source records must identify the relevant sovereign country or competent regulator.",
  },
  {
    question: "Do all source records become compliance obligations?",
    answer:
      "No. Sources can be binding regulations, guidance, consultations, enforcement decisions or other material. Obligations require an appropriate controlling source, scope and review.",
  },
  {
    question: "What does a reviewed jurisdiction profile cover?",
    answer:
      "Only the specific sources, topics, sectors and periods listed in that profile and its methodology. Not seeing a rule in a profile does not mean it does not exist.",
  },
  {
    question: "How are legal dates and updates handled?",
    answer:
      "Official publication and effective dates are distinct from platform observation and editorial review dates. Historical or superseded requirements should retain dated citations and context.",
  },
  {
    question: "Can ZoikoAssure confirm permission to enter a market?",
    answer:
      "No public geographic browse constitutes regulatory authorization, licensing or legal advice. A qualified review of facts, requirements and approvals may be needed.",
    // Figma keeps this answer on a single line at 1440px.
    singleLineAtDesktop: true,
  },
];

export default function JurisdictionFAQs() {
  // The Figma design shows every answer expanded.
  const [closed, setClosed] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setClosed((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-0">
        <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          Buyer FAQs
        </h2>

        <div className="flex flex-col gap-4 pt-12">
          {faqs.map((faq, index) => {
            const isOpen = !closed.has(index);
            return (
              <div
                key={faq.question}
                className="overflow-clip rounded-[4px] border border-[#D9E2EC] bg-white p-5"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <span className="text-[16px] font-semibold leading-[25.6px] text-[#0A2540]">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[16px] font-semibold leading-[25.6px] text-[#0A2540]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p
                    className={`pb-6 text-[16px] font-normal leading-[25.6px] text-[#172033] ${
                      faq.singleLineAtDesktop ? "min-[1440px]:whitespace-nowrap" : ""
                    }`}
                  >
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
