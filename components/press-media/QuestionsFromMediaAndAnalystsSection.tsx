"use client";

import Link from "next/link";

const faqs = [
  {
    title: "What is ZoikoAssure?",
    description:
      "A platform of Zoiko Tech Inc., providing regulatory intelligence and continuous assurance.",
  },
  {
    title: "Are materials legally authoritative?",
    description:
      "Official regulatory sources remain primary material; commentary does not replace legal counsel.",
  },
  {
    title: "How are errors corrected?",
    description:
      "Use verified correction channels; materially corrected releases show change context and date.",
  },
];

export default function QuestionsFromMediaAndAnalystsSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[30px] lg:leading-[1.25]">
          Questions From Media and Analysts
        </h2>

        {/* 3 FAQ Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.title}
              className="flex flex-col justify-start rounded-xl border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-[0_4px_16px_rgba(15,23,42,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0A2540]">
                {faq.title}
              </h3>
              <p className="mt-3 text-[13.5px] sm:text-[14px] font-normal leading-[22px] text-[#5A6E85]">
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
