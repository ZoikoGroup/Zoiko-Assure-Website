"use client";

import Image from "next/image";
import Link from "next/link";

export default function ChangeToImpactSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            {/* Block 1 */}
            <h2 className="text-[24px] font-semibold leading-[29px] text-[#0A2540]">
              Regulatory Change to Executive Impact
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[26px] text-[#5F6B7A]">
              Track source changes through applicability review to affected controls and brief updates. Explain why items are significant and which functions own action.
            </p>

            {/* Block 2 */}
            <h2 className="mt-12 text-[24px] font-semibold leading-[29px] text-[#0A2540]">
              Governed AI for Executive Explanation
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[26px] text-[#5F6B7A]">
              Provide source-grounded concise summaries with explicit uncertainty and accountable review. AI cannot determine legal applicability autonomously.
            </p>

            {/* Action Link */}
            <div className="mt-6">
              <Link
                href="/governed-ai"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[26px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637] hover:text-white"
              >
                Explore Governed AI
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[1200/912] w-full max-w-[576px] overflow-hidden rounded-[8px]">
              <Image
                src="/images/cfo-audit-committee/regulatory-change-ai.png"
                alt="Regulatory Change and AI Assistance"
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
