"use client";

import Image from "next/image";

export default function ExceptionsJurisdictionSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image */}
          <div className="flex w-full items-center justify-center lg:justify-start">
            <div className="relative aspect-[1200/912] w-full max-w-[576px] overflow-hidden rounded-[8px]">
              <Image
                src="/images/cfo-audit-committee/exceptions-jurisdictions.png"
                alt="Exceptions and Jurisdictions UI"
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start">
            {/* Block 1 */}
            <h2 className="text-[24px] font-semibold leading-[29px] text-[#0A2540]">
              Exceptions and Risk Acceptance
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[26px] text-[#5F6B7A]">
              Risk decisions are separately reviewed and never treated as proof. Acceptance is an approval of exposure under authority, not regulatory approval.
            </p>

            {/* Block 2 */}
            <h2 className="mt-12 text-[24px] font-semibold leading-[29px] text-[#0A2540]">
              Multi-Jurisdiction Exposure
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[26px] text-[#5F6B7A]">
              Compare legally scoped regulatory differences and effective periods. Highlight common baselines and unresolved legal conflicts without implying automated resolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
