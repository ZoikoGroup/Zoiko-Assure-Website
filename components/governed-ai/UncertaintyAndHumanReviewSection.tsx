"use client";

import Link from "next/link";

export default function UncertaintyAndHumanReviewSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Uncertainty & Escalation */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
              Uncertainty &amp; Escalation
            </h2>

            <p className="mt-4 max-w-[500px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
              Show when confidence is insufficient and who decides. When organizational facts are incomplete or sources conflict, the interface clearly states &apos;UNCERTAIN — accountable review required&apos;.
            </p>

            <div className="mt-6 sm:mt-8">
              <Link
                href="#review-workflow"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-3 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                See review workflow
              </Link>
            </div>
          </div>

          {/* Right Column: Accountable Human Review */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
              Accountable Human Review
            </h2>

            <p className="mt-4 max-w-[500px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
              Show reviewer actions and separation of duties. A human decision record is preserved separately from AI-generated suggested text, ensuring final judgment remains accountable.
            </p>

            <div className="mt-6 sm:mt-8">
              <Link
                href="#decision-flow"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-3 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                View decision flow
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
