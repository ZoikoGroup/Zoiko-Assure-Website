"use client";

import Link from "next/link";

const faqs = [
  {
    title: "What is ZoikoAssure?",
    description:
      "ZoikoAssure is a regulatory intelligence and continuous compliance assurance platform. It helps organizations connect authoritative requirements, operational controls, evidence and accountable review.",
  },
  {
    title: "Who develops and operates ZoikoAssure?",
    description:
      "ZoikoAssure is a platform of Zoiko Tech Inc., a Zoiko Group company. Product, legal, contractual and organizational details are governed in the approved company and legal pages.",
  },
  {
    title: "Is ZoikoAssure a separate legal entity?",
    description:
      "This page describes ZoikoAssure as a platform, not a separately verified legal entity. Refer to approved entity disclosures for the contracting organization.",
  },
  {
    title: "Does the platform determine that an organization is compliant?",
    description:
      "No. The platform supports regulated-workflow analysis and evidence-backed assurance reviews; organizations and professional advisers retain responsibility for legal and compliance decisions.",
  },
  {
    title: "Where can I learn about company leadership?",
    description:
      "Use Company \u2192 Leadership for approved accountability disclosures; do not assume public biographies are available.",
  },
  {
    title: "Where can I see security and AI-governance information?",
    description:
      "Use the Trust Center and its source-controlled Responsible AI, Security and Data Governance destinations.",
  },
];

export default function ZoikoAssureFaqSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[30px] lg:leading-[1.25]">
          Common Questions
        </h2>

        {/* 6 FAQ Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.title}
              className="flex flex-col justify-start rounded-xl border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-[0_4px_16px_rgba(15,23,42,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-[15px] sm:text-[16px] font-bold leading-snug text-[#0A2540]">
                {faq.title}
              </h3>
              <p className="mt-3 text-[13px] sm:text-[13.5px] font-normal leading-[21px] text-[#5A6E85]">
                {faq.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10">
          <Link
            href="/company/about-us#faq"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
