"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What does service reliability mean for ZoikoAssure?",
    answer:
      "It describes the operating practices and responsibilities used to support continuity, manage changes and communicate service disruptions. Specific technical measures, coverage and contractual commitments depend on the supported deployment and agreement. The Reliability page explains the evaluation questions; verified operating evidence must be reviewed within its actual service scope.",
  },
  {
    question: "Does ZoikoAssure guarantee an uptime percentage?",
    answer:
      "No public percentage or uptime commitment is established by the approved website foundations. Any actual guarantee requires a verified contract, covered-service definition, measurement window, exclusions and appropriate authorization. The page must not infer an uptime figure or display an unverified percentage as evidence of current performance.",
  },
  {
    question: "How are service incidents communicated?",
    answer:
      "Incident communications should distinguish known service impact, confirmed facts, the affected audience and the approved channel. The applicable operating and contractual arrangements determine what is shared and when. This page cannot promise specific notification intervals, monitoring schedules or communication channels unless those commitments have been implemented and verified.",
  },
  {
    question: "Where can I view the current service status?",
    answer:
      "A System Status link will appear only if ZoikoAssure operates and has approved a real, public service-status destination. Until then, this Reliability page remains an explanation of operational practices, not a live indicator of service health. Existing customers should use the verified support channels appropriate to their agreements.",
  },
  {
    question: "Are disaster recovery times or locations guaranteed?",
    answer:
      "No recovery-time objective, recovery-point objective or failover location should be assumed from a general architecture description. These depend on the implemented service model, data dependencies, tests and applicable terms. Qualified buyers can discuss the relevant technical and contractual evidence during a scoped enterprise evaluation.",
  },
  {
    question: "How can an enterprise review supporting reliability evidence?",
    answer:
      "Available public evidence can be linked when its source, version, scope and authorization are verified. Restricted documentation, if offered, must follow the applicable access-review process. The Request a Demo route can support an enterprise discussion, but it is not a substitute for existing-customer incident assistance or contractual documentation.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          Reliability Questions, Answered With Scope.
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
