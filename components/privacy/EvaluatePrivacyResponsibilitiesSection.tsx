"use client";

import Link from "next/link";

const evaluationCards = [
  {
    title: "Enterprise Due Diligence",
    description:
      "Qualified diligence routing using our approved enterprise form without hidden marketing consent.",
  },
  {
    title: "Privacy Requirements",
    description:
      "Discuss specific processing topics and jurisdictions with specialized teams.",
  },
  {
    title: "Minimal Collection",
    description:
      "Inquiries request only necessary work information and strictly recommend against sensitive details.",
  },
];

export default function EvaluatePrivacyResponsibilitiesSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[34px] lg:leading-[1.25]">
          Evaluate privacy responsibilities before committing to a platform.
        </h2>

        {/* 3 Evaluation Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {evaluationCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-start rounded-xl border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-[0_4px_16px_rgba(15,23,42,0.03)] transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0A2540]">
                {card.title}
              </h3>
              <p className="mt-3 text-[13.5px] sm:text-[14px] font-normal leading-[22px] text-[#5A6E85]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10">
          <Link
            href="/request-demo"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
