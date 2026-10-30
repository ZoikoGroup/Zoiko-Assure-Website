"use client";

import Image from "next/image";
import Link from "next/link";

export default function IncompleteDataAndIntegrationBoundaries() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image (Clean display without border, radius, background, or shadow) */}
          <div className="flex w-full flex-col items-center lg:items-start">
            <div className="w-full max-w-[540px]">
              <div className="relative aspect-[540/380] w-full">
                <Image
                  src="/documentation/7.png"
                  alt="When data is incomplete, the answer should say so."
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
                When data is incomplete, the answer should say so.
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Troubleshooting patterns for UNCERTAIN applicability, stale
                source, unavailable evidence, rejected permission, outdated
                document and disconnected system.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                Understand the integration boundary before implementation.
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Explain potential source systems, data classes, scoped
                permissions, mapping and freshness without naming unverified
                supported vendors. Conditional developer docs withheld until
                approval.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/view-troubleshooting"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
              >
                View Troubleshooting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
