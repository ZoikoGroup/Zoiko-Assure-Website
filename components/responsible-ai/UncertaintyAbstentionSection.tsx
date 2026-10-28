"use client";

import Image from "next/image";
import Link from "next/link";

export default function UncertaintyAbstentionSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Text */}
          <div className="flex flex-col items-start max-w-[608px]">
            <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
              Uncertainty, Abstention and Human Review
            </h2>

            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Where source or organizational context is insufficient, a material outcome may<br className="hidden lg:inline" /> remain UNCERTAIN and require qualified review. A system limitation should be<br className="hidden lg:inline" /> visible, not silently turned into an answer.
            </p>

            <div className="mt-6">
              <Link
                href="/applicability-engine"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] bg-transparent px-[25px] py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
              >
                Explore Applicability Engine
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/responsible-ai/uncertainty-abstention.png"
                alt="Uncertainty, Abstention and Human Review"
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
