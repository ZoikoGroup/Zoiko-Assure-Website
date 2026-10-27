"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What deployment models can ZoikoAssure support?",
    answer:
      "The project design evaluates Enterprise SaaS, Private Cloud, Hybrid, and Air-Gapped patterns, but listing a pattern does not confirm that it is currently available. A supported option requires verification of its technical scope, operational dependencies, commercial terms, and relevant geography. An enterprise buyer should Request a Demo to obtain an approved, current offering assessment rather than infer eligibility from a website card.",
  },
  {
    question: "Does choosing a region keep every type of data there?",
    answer:
      "Not necessarily. A residency statement must identify the data categories it covers and distinguish primary storage, processing, remote support access, backups, service logs, and third-party or AI-provider flows. Each category may have a different operational or contractual boundary. Only the verified, applicable service description and agreement can establish which locations or transfers are in scope.",
  },
  {
    question: "Is private cloud the same as data sovereignty?",
    answer:
      "No. Private cloud describes a deployment approach, while data sovereignty concerns legal authority and control over data in a specific context. A private deployment does not automatically establish single tenancy, domestic processing, exclusive key custody, or jurisdictional compliance. Those questions require separate review of the implementation architecture, applicable law, supporting security evidence, and signed contractual commitments.",
  },
  {
    question: "How do backups, support access and subprocessors affect residency?",
    answer:
      "A primary hosting location is only one part of the residency question. Recovery copies, incident access, administration, telemetry, support personnel, and subprocessors may introduce additional locations or responsibilities. Qualified assessments should distinguish these flows by data category and purpose, identify the accountable party, and confirm what has been technically implemented and contractually agreed.",
  },
  {
    question: "Does an air-gapped deployment eliminate all external dependencies?",
    answer:
      "An air-gapped model must be evaluated against update delivery, regulatory source refresh, vulnerability remediation, evidence export, support processes, and any required AI or third-party services. The term alone is not proof of zero connectivity or zero transfers. ZoikoAssure should make a public availability claim only after the specific end-to-end model has been technically verified and approved for the intended buyer scope.",
  },
  {
    question:
      "What evidence should procurement request before agreeing to a residency commitment?",
    answer:
      "Procurement should request an approved architecture scope, a data-category location matrix, relevant processor and support-access disclosures, backup and recovery boundaries, shared-responsibility allocation, current security evidence, and the contract clauses governing exceptions. Each item should state its owner, validity or review date, and applicable service configuration. A public page alone is not a binding assurance statement.",
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
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540]">
          Deployment and Residency Questions, Answered.
        </h2>

        <div className="mt-8 sm:mt-10 flex flex-col space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-[#D9E2EC] bg-white p-5 sm:p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-all duration-200"
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
