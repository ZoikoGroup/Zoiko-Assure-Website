"use client";

import Image from "next/image";
import Link from "next/link";

export default function ExecutiveOversightSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540]">
              Executive Examination Oversight
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Communicate scope, aging, owners, and unresolved items to CROs and<br className="hidden sm:inline" />
              Audit Committees without opaque readiness scoring. Escalations route to<br className="hidden sm:inline" />
              the appropriate owner.
            </p>

            <h2 className="mt-12 text-2xl font-semibold leading-[28.8px] text-[#0A2540]">
              Illustrative Scenario &amp; Provenance Demonstration
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Walk one anonymized examination question end-to-end: Regulatory Source<br className="hidden sm:inline" />
              <span className="sm:whitespace-nowrap">&rarr; Scoped Applicability &rarr; Obligation &rarr; Control &rarr; Evidence &rarr; Assurance &rarr;</span><br className="hidden sm:inline" />
              Package.
            </p>

            <div className="mt-6">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637] hover:text-white"
              >
                Explore Example Walkthrough
              </Link>
            </div>
          </div>

          {/* Right Column: UI Mockup */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[576/432] w-full max-w-[576px] overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/regulatory-examination/executive-examination-oversight.png"
                alt="Executive Examination Oversight Dashboard UI"
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
