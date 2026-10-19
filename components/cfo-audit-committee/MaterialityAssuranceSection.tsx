"use client";

import Image from "next/image";
import Link from "next/link";

export default function MaterialityAssuranceSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image */}
          <div className="flex w-full items-center justify-center lg:justify-start">
            <div className="relative aspect-[1200/912] w-full max-w-[576px] overflow-hidden rounded-[8px]">
              <Image
                src="/images/cfo-audit-committee/materiality-assurance.png"
                alt="Materiality and Assurance UI"
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
              Materiality and Financial Impact Boundaries
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[26px] text-[#5F6B7A]">
              Explain governance of assessments without inventing financial amounts. A risk exposure, contingent liability, financial statement impact and actual booked loss are separate concepts.
            </p>

            {/* Block 2 */}
            <h2 className="mt-12 text-[24px] font-semibold leading-[29px] text-[#0A2540]">
              Evidence-Backed Assurance Posture
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[26px] text-[#5F6B7A]">
              Clearly view Proven, Not proven, and Requires review states with their basis and as-of date. An evidence document existing is not evidence of control operation without review.
            </p>

            {/* Action Link */}
            <div className="mt-6">
              <Link
                href="/assurance-posture"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[26px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637] hover:text-white"
              >
                View Posture
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
