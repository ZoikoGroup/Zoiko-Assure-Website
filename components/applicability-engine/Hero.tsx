"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-[#0A2540] text-white pt-16 md:pt-20 pb-20 md:pb-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[672px_480px] lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            {/* Eyebrow */}
            <span className="text-[14px] font-semibold leading-[22.4px] tracking-[0.0714em] uppercase text-[#F58220]">
              Platform / Applicability Engine
            </span>

            {/* Heading 1 */}
            <h1 className="mt-4 text-3xl font-semibold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[61.6px]">
              Know what applies. Understand why.
            </h1>

            {/* Description */}
            <p className="mt-6 text-[18px] font-normal leading-[28.8px] text-[#D9E2EC]">
              Regulatory obligations depend on jurisdiction, legal entity, business activity, product, data, customer type and effective period. ZoikoAssure is designed to make those factors visible alongside source authority, reasoning and accountable review.
            </p>

            {/* Tenets */}
            <p className="mt-6 text-[14px] font-medium leading-[22.4px] text-[#A0AAB2]">
              Source-grounded analysis. Explicit uncertainty. Human-accountable decisions.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>

              <Link
                href="/regulatory-exposure"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-white/10"
              >
                Assess Your Regulatory Exposure
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Graphic */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[480px] rounded-lg bg-white p-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[448/298.48] w-full overflow-hidden rounded">
                <Image
                  src="/images/applicability-engine/hero-workspace-f14025.png"
                  alt="Illustrative Applicability Workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
