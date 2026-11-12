"use client";

import Link from "next/link";

const faqs = [
  {
    question: "What is a compliance management system?",
    answer:
      "It is an organizational approach for identifying obligations, assigning accountable policies and controls, monitoring their operation, responding to concerns, and retaining evidence for review.",
  },
  {
    question: "Does following ISO 37301 mean we are legally compliant?",
    answer:
      "No. ISO 37301 provides management-system requirements and guidance; applicable law, implementation evidence, independent review and any certification are separate matters.",
  },
  {
    question: "What is the difference between ISO 37301 and ISO 37001?",
    answer:
      "ISO 37301 addresses compliance management broadly. ISO 37001:2025 addresses anti-bribery management in its particular scope.",
  },
  {
    question: "Is U.S. DOJ compliance guidance a global checklist?",
    answer:
      "No. The DOJ evaluation guidance is used in particular U.S. enforcement contexts, and its topics are not a universal formula or certification system.",
  },
  {
    question: "Why must applicability be reviewed by jurisdiction?",
    answer:
      "The same activity can have different legal duties, exceptions and effective dates across locations, regulated entities and activities.",
  },
  {
    question: "Is training completion proof a compliance program works?",
    answer:
      "No. Training completion may show one activity occurred. Understanding, controls, monitoring, investigations and evidence also matter.",
  },
];

export default function ComplianceEnterpriseRiskFaqs() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Enterprise risk &mdash; common questions
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="flex flex-col justify-start rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[22.4px] text-[#0A2540]">
                {faq.question}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/view-all-faqs"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
