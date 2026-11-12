"use client";

import Image from "next/image";
import Link from "next/link";

export default function CybersecurityAssuranceAndRecovery() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start">
            <div>
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                From Regulatory Source to Evidence-Backed Assurance
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Proposed control: Privileged-access review. Owner: IAM
                governance. Test result: Not tested. Evidence: Missing or stale
                for the relevant period. Mapping to ISO or CIS does not prove
                that the control operated.
              </p>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Separate risk acceptance: Illustration only; expires and
                requires accountable management review. It does not change the
                underlying evidence result.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                Prepare, Respond and Recover Without Inventing Readiness
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Supplier Assurance Requires Evidence and Rights.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/methodology"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
              >
                Explore Methodology
              </Link>
            </div>
          </div>

          {/* Right Column: Image (Raw display adhering strictly to no-border/shadow/radius rule for content images) */}
          <div className="flex w-full flex-col items-center lg:items-end">
            <div className="w-full max-w-[540px]">
              <div className="relative aspect-[540/380] w-full">
                <Image
                  src="/cyber/4.png"
                  alt="From Regulatory Source to Evidence-Backed Assurance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
