"use client";

import Link from "next/link";

const faqs = [
  {
    title: "What is Zoiko Tech Inc.?",
    description:
      "Zoiko Tech Inc. is the technology company behind ZoikoAssure and develops enterprise and digital platforms. Further corporate information is available on the Zoiko Tech website. Confirm the latest corporate descriptor before publication.",
  },
  {
    title: "How is ZoikoAssure related to Zoiko Tech?",
    description:
      "ZoikoAssure is a platform of Zoiko Tech Inc., a Zoiko Group company. The platform has its own compliance intelligence and assurance proposition; it is not a separate legal company merely because it has a distinct product brand.",
  },
  {
    title: "Is Zoiko Tech the same as Zoiko Group?",
    description:
      "No. They have different roles in the published organizational description. The exact legal ownership structure and group entities require Corporate/Legal verification where relevant.",
  },
  {
    title: "Does this page establish certifications or regulatory approval?",
    description:
      "No. This page explains corporate and platform context. Certification, attestation, residency, security and contractual representations require separately approved, current, scoped evidence.",
  },
  {
    title: "Where can I learn about ZoikoAssure governance?",
    description:
      "Use the approved ZoikoAssure About page, Trust Center and applicable product methodology pages. AI-supported outputs do not replace professional review or legal determinations.",
  },
];

export default function ZoikoGroupFaqSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[30px] lg:leading-[1.25]">
          Common Questions
        </h2>

        {/* 5 FAQ Cards Grid */}
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
