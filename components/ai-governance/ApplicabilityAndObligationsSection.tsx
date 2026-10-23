"use client";

import Image from "next/image";
import Link from "next/link";

export default function ApplicabilityAndObligationsSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Two descriptive blocks + CTA Button */}
          <div className="flex flex-col items-start justify-center">
            {/* Block 1 */}
            <div>
              <h3 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-[26px]">
                Applicability and Classification Review
              </h3>
              <p className="mt-3 max-w-xl text-[15px] font-normal leading-[24px] text-[#5F6B7A]">
                Show context, UNCERTAIN and human interpretation. Results are categorized into Applies, Does not apply, or UNCERTAIN. No unexplained AI certainty is permissible.
              </p>
            </div>

            {/* Block 2 */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-[26px]">
                AI Obligations and Control Mapping
              </h3>
              <p className="mt-3 max-w-xl text-[15px] font-normal leading-[24px] text-[#5F6B7A]">
                Connect approved duties to operational safeguards. Obligation rosters display ID, source version, scope, effective period, legal review status and accountable owner.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/obligation-control-mapping"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324]/5"
              >
                View Mapped Controls
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[576/384] w-full max-w-[576px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/ai-governance/applicability-validation.png"
                alt="Applicability and Classification Review"
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
