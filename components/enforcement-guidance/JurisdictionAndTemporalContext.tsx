"use client";

import Image from "next/image";
import Link from "next/link";

export default function JurisdictionAndTemporalContext() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image */}
          <div className="flex w-full flex-col items-center lg:items-start">
            <div className="w-full max-w-[540px] overflow-hidden">
              <div className="relative aspect-[540/380] w-full">
                <Image
                  src="/enf/5.png"
                  alt="Jurisdiction & Temporal Context"
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start">
            <div>
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                Jurisdiction &amp; Temporal Context
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Distinguish issuer from publisher. Understand the specific
                jurisdictional reach and the distinction between published and
                legally effective dates.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                Cross-References &amp; Regulatory Change
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Link related obligations, source amendments, and official
                decisions without implying automatic legal endorsement or
                applicability.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/explore-related-sources"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
              >
                Explore Related Sources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
