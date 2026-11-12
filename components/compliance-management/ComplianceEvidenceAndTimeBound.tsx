"use client";

import Image from "next/image";
import Link from "next/link";

export default function ComplianceEvidenceAndTimeBound() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start">
            <div>
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                Evidence is time-bound
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                A captured artifact proves only what it supports for its scope
                and observed time; stale or conflicting evidence requires
                review.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                An exception is not an assurance conclusion
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                A documented risk acceptance may be governed, but it does not
                demonstrate the underlying control is effective.
              </p>

              {/* Illustrative Data Callout */}
              <div className="mt-6 border-l-[3px] border-[#F58220] pl-3.5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#0A2540]">
                  ILLUSTRATIVE DATA &mdash; NO REAL ORGANIZATION OR
                  COVERAGE
                </p>
                <p className="mt-1 text-[12.5px] font-normal leading-[19.5px] text-[#5F6B7A]">
                  Example Co. has a proposed third-party screening control with
                  a missing operating test; source applicability remains
                  UNCERTAIN.
                </p>
              </div>
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
                  src="/comp/4.png"
                  alt="Evidence is time-bound and an exception is not an assurance conclusion"
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
