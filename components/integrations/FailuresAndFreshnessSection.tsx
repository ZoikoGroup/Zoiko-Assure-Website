"use client";

import Image from "next/image";
import Link from "next/link";

export default function FailuresAndFreshnessSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Failures, Exceptions & Remediation */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
              Failures, Exceptions &amp; Remediation
            </h2>

            <p className="mt-4 max-w-[500px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
              Clarify next actions under degraded operation. Handle revoked tokens, API timeouts, mapping drift, and source retirements gracefully without silent errors.
            </p>

            <div className="relative mt-8 aspect-[600/400] w-full overflow-hidden rounded-2xl shadow-[0_12px_30px_-6px_rgba(0,0,0,0.15)]">
              <Image
                src="/Integrations/i4.jpg"
                alt="Source code and API integration remediation"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Freshness, Quality & Sync Health */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
              Freshness, Quality &amp; Sync Health
            </h2>

            <p className="mt-4 max-w-[500px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
              Make stale/unavailable data and as-of time explicit. Sync health status tracks &apos;current&apos;, &apos;delayed&apos;, &apos;stale&apos;, or &apos;source unavailable&apos;.
            </p>

            <div className="mt-6 sm:mt-8">
              <Link
                href="#health-board"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-3 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                View Health Board
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
