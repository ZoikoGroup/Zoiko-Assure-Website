"use client";

import Image from "next/image";

export default function JurisdictionTemporalSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Column 1: Jurisdiction Comparison */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
              Compare jurisdictions without erasing local <br className="hidden sm:inline" />
              rules.
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Global baselines and local regulatory differences should remain visible by jurisdiction, scope, effective period and accountable reviewer.
            </p>
            <div className="relative mt-6 aspect-[576/384] w-full overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/applicability-engine/jurisdiction-comparison.png"
                alt="Jurisdiction comparison"
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Column 2: Legal Time vs Evaluation Time */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
              Applicability has a legal time and an evaluation time.
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              The relevant regulatory version may become effective before or after an operational evaluation. The platform should make the time basis explicit.
            </p>
            <div className="relative mt-6 aspect-[576/384] w-full overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/applicability-engine/time-history.png"
                alt="Time History"
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
