"use client";

import Image from "next/image";
import Link from "next/link";

export default function ExecutiveExposureSection() {
  return (
    <section id="executive-exposure" className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <h2 className="text-[24px] font-semibold leading-[29px] text-[#0A2540]">
              Executive Exposure View
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[26px] text-[#5F6B7A]">
              Scoped, dated exposure signals and materiality-review labels. View items awaiting review, controls with evidence gaps, and escalations without invented live values or scoring.
            </p>

            <div className="mt-6">
              <Link
                href="/executive-summary"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[26px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637] hover:text-white"
              >
                Inspect Executive Summary
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[1178/424] w-full max-w-[576px] overflow-hidden rounded-[8px]">
              <Image
                src="/images/cfo-audit-committee/executive-exposure-view.png"
                alt="Executive Exposure View UI"
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
