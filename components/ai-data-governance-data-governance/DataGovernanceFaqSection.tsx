"use client";

import Link from "next/link";

const faqs = [
  {
    title: "How is data governance different from privacy?",
    description: "Answer via scope distinction, not legal opinion.",
  },
  {
    title: "Does data governance mean compliance is guaranteed?",
    description:
      "No. Governance processes and evidence support assurance review; they do not guarantee legal compliance.",
  },
  {
    title: "Does storing data in one region settle international transfer requirements?",
    description:
      "No. A hosting location does not by itself determine every question about access, recipients or applicable international transfer rules. Appropriate legal and privacy assessment is separate.",
  },
  {
    title: "What happens if there are conflicting classification rules?",
    description:
      "Show conflict and source versions; do not choose silently. Data steward plus Privacy/Legal review as required.",
  },
  {
    title: "What happens if evidence is pending verification?",
    description:
      "Status unknown/awaiting verification; no green control or certification badge. Review actual evidence artifact with owner.",
  },
  {
    title: "What happens if a policy is deprecated?",
    description:
      "Banner/version notice only if approved content supports it. Invalidate outdated trust claims and request re-review.",
  },
];

export default function DataGovernanceFaqSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[30px] lg:leading-[1.25]">
          Data governance questions
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
