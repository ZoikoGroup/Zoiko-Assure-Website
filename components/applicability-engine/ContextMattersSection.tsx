"use client";

import Link from "next/link";

const contextFactors = [
  {
    title: "Jurisdiction differs",
    description: "Show source and local scope variations.",
  },
  {
    title: "Business facts differ",
    description: "Evaluate against explicit organizational facts.",
  },
  {
    title: "Time matters",
    description: "Preserve applicable effective period and evaluation date.",
  },
];

export default function ContextMattersSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <div className="max-w-[800px]">
          <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
            The same rule does not apply in every context.
          </h2>
          <p className="mt-6 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
            A requirement can change meaning across entities, markets, activities, products and time. Static checklists can obscure exceptions, unclear scope or the reason a rule was considered relevant.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {contextFactors.map((factor) => (
            <div
              key={factor.title}
              className="flex h-full min-h-[130px] flex-col justify-start rounded-lg border border-[#D9E2EC] bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)] transition-shadow duration-200 hover:shadow-md"
            >
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#172033]">
                {factor.title}
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                {factor.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-8 flex justify-center">
          <Link
            href="#evaluation-model"
            className="inline-flex items-center justify-center rounded-[4px] px-[25px] py-3 text-[16px] font-semibold leading-[25.6px] transition-colors duration-200 hover:bg-[#EB8D2C]/5"
            style={{
              color: "rgba(235, 141, 44, 1)",
              border: "1px solid rgba(235, 141, 44, 1)",
            }}
          >
            See the evaluation model
          </Link>
        </div>
      </div>
    </section>
  );
}
