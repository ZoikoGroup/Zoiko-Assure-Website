"use client";

import Link from "next/link";

const learningCards = [
  {
    title: "Careers Questions",
    description:
      "Find direct answers on where openings are posted, how to verify an application link, and where to learn about the work.",
  },
  {
    title: "Institutional Context",
    description:
      "Understand the regulatory, technical and governance context behind the work we do.",
  },
  {
    title: "Related Resources",
    description:
      "Navigate to verified links like About ZoikoAssure, Methodology, Trust Center, and Documentation.",
  },
];

export default function CareersQuestionsAndRelatedLearning() {
  return (
    <section className="w-full bg-[#F4F7FA] py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        {/* Heading 2 */}
        <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
          Careers Questions & Related Learning
        </h2>

        {/* 3 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {learningCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-[8px] border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]"
            >
              <div>
                <h5 className="text-[13.28px] font-semibold leading-[15.94px] text-[#0A2540]">
                  {card.title}
                </h5>
                <p className="pt-4 pb-6 text-[12px] font-normal leading-[19.2px] text-[#5F6B7A]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <Link
            href="/resources"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
          >
            View Careers FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}

