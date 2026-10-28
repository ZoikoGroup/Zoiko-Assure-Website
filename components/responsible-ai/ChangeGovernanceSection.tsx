"use client";

import Image from "next/image";
import Link from "next/link";

export default function ChangeGovernanceSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image */}
          <div className="flex w-full items-center justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/responsible-ai/change-governance.png"
                alt="Model, Prompt and Policy Change Governance"
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="flex flex-col items-start max-w-[608px] order-1 lg:order-2">
            <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
              Model, Prompt and Policy Change Governance
            </h2>

            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Material model, prompt, source, policy and rule changes should be evaluated for<br className="hidden lg:inline" /> impact and traceable to authorized change decisions, with effective dates and<br className="hidden lg:inline" /> version context appropriate to risk.
            </p>

            <div className="mt-6">
              <Link
                href="/methodology"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] bg-transparent px-[25px] py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
              >
                Explore Methodology
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
