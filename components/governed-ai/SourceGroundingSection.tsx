"use client";

import Image from "next/image";
import Link from "next/link";

export default function SourceGroundingSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Office Team at Computers Graphic */}
          <div className="flex w-full items-center justify-center lg:justify-start">
            <div className="relative aspect-[16/9] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_30px_-6px_rgba(0,0,0,0.15)]">
              <Image
                src="/governed-ai/ga3.jpg"
                alt="Source grounding and citation validation team in modern office"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Heading, Paragraph, CTA Button */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#0A2540] lg:leading-[1.2]">
              Source Grounding &amp; Citation Validation
            </h2>

            <p className="mt-4 max-w-[500px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
              Every material regulatory claim links to cited authority, citation/version, jurisdiction and effective-time details. Stale or superseded source warnings are explicit and trigger re-review.
            </p>

            <div className="mt-6 sm:mt-8">
              <Link
                href="#view-source"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-3 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                View Source
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
