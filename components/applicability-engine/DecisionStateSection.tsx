"use client";

import Link from "next/link";

const decisionStates = [
  {
    title: "Applies",
    description: "Fact context and rule boundary matched.",
    color: "#10B981",
  },
  {
    title: "Does not apply",
    description: "Explicit boundary exclusion.",
    color: "#5F6B7A",
  },
  {
    title: "UNCERTAIN",
    description: "Review required due to missing facts or conflict.",
    color: "#F59E0B",
  },
];

export default function DecisionStateSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="max-w-[800px]">
          <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
            Uncertainty is a decision state—not a defect to hide.
          </h2>
          <p className="mt-6 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
            When the available facts or source basis do not establish a reliable conclusion, the result must remain UNCERTAIN and be routed for review.
          </p>
        </div>

        {/* 3 Decision Cards */}
        <div className="mt-12 grid grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-3 md:gap-[32px]">
          {decisionStates.map((state) => (
            <div
              key={state.title}
              className="flex h-[113.86px] w-full max-w-[384px] flex-col justify-start rounded-lg border-t-4 border-t-[#D9E2EC] border-x border-b border-[#D9E2EC] bg-white px-5 py-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md md:w-[384px]"
            >
              <h3
                className="text-[18.72px] font-semibold leading-[22.46px]"
                style={{ color: state.color }}
              >
                {state.title}
              </h3>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A] whitespace-nowrap">
                {state.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-8 flex justify-center">
          <Link
            href="#review-path"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#D65A2C] px-[25px] py-3 text-[16px] font-semibold leading-[25.6px] text-[#D65A2C] transition-colors duration-200 hover:bg-[#D65A2C]/5"
          >
            See review path
          </Link>
        </div>
      </div>
    </section>
  );
}
