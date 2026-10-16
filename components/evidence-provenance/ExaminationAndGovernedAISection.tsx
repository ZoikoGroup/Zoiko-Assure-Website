"use client";

import Link from "next/link";

export default function ExaminationAndGovernedAISection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Answer the Question Behind the Evidence */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
              Answer the Question Behind the Evidence.
            </h2>

            <p className="mt-4 max-w-[500px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
              Reconstruct a defensible examination question path: from which requirement applied, to the collected artifact, to the accountable evaluation.
            </p>

            <div className="mt-6 sm:mt-8">
              <Link
                href="#examination-path"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-3 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                See Examination Path
              </Link>
            </div>
          </div>

          {/* Right Column: Governed AI and Exceptions */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
              Governed AI and Exceptions
            </h2>

            <p className="mt-4 max-w-[500px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
              AI may assist categorization under human control, but it is not an autonomous legal judge. Accepted risk is governed as an exception, not translated into a false positive assurance proof.
            </p>

            <div className="mt-6 sm:mt-8">
              <Link
                href="/platform/governed-ai"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-3 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                Explore Governed AI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
