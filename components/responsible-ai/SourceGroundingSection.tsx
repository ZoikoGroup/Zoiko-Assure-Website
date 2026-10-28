"use client";

import Image from "next/image";
import Link from "next/link";

export default function SourceGroundingSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image */}
          <div className="flex w-full items-center justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative aspect-[608/213] w-full max-w-[608px] overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/responsible-ai/source-grounding.png"
                alt="Source Grounding and Regulatory Authority"
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="flex flex-col items-start max-w-[608px] order-1 lg:order-2">
            <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
              Source Grounding and Regulatory Authority
            </h2>

            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Source-grounded assistance links material observations to identifiable<br className="hidden lg:inline" /> authority, citation, jurisdiction, version and legally relevant dates. A generated<br className="hidden lg:inline" /> synthesis remains distinguishable from its original source.
            </p>

            <div className="mt-6">
              <Link
                href="/regulatory-sources"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] bg-transparent px-[25px] py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
              >
                Explore Regulatory Sources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
