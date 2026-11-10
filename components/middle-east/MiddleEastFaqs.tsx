"use client";

import Link from "next/link";

const faqs = [
  {
    question: "Is the Middle East one legal jurisdiction?",
    answer:
      "No. This page groups markets for navigation. Actual requirements depend on the country and the competent authority; subnational, sector and business facts may also matter.",
  },
  {
    question: "Does a GCC measure automatically apply in every GCC country?",
    answer:
      "Do not assume so. The applicable instrument and its domestic legal effect, implementation, scope and commencement must be verified in the relevant country.",
  },
  {
    question: "Which countries does this guide cover?",
    answer:
      "Only country pages with approved, substantive source-backed content should appear as live destinations. An absent link is a publication limitation, not a statement that no laws exist.",
  },
  {
    question: "Are English translations legally authoritative?",
    answer:
      "Not necessarily. A legal source may distinguish official original texts from reference translations. Preserve the original and verify translation status before relying on English wording.",
  },
  {
    question: "Is publication the same as commencement?",
    answer:
      "Not always. Issuance, official publication, commencement, later amendments and the date a source was observed should be tracked separately.",
  },
  {
    question: "Do financial/free-zone rules work the same in every country?",
    answer:
      "No assumption of equivalence is appropriate. Local issuer, entity location, licensed activities, sector and legal basis require country-specific review.",
  },
];

export default function MiddleEastFaqs() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-left text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-3xl">
          Common questions about Middle East regulatory sources
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
