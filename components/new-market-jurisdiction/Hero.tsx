"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] py-16 md:py-20 lg:py-[80px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[672px_1fr] lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <span className="text-[14px] font-semibold uppercase leading-[22.4px] tracking-[0.0714em] text-[#F58220]">
              Solutions / New Market / Jurisdiction
            </span>

            <h1 className="mt-4 max-w-[672px] text-3xl font-semibold leading-[1.1] text-white sm:text-4xl lg:text-[56px] lg:leading-[61.6px]">
              Understand the rules
              <br className="hidden sm:inline" /> before entering a new
              <br className="hidden sm:inline" /> market.
            </h1>

            <p className="mt-6 max-w-[672px] text-base font-normal leading-[28.8px] text-[#D9E2EC] sm:text-[18px]">
              Expansion changes regulatory exposure. ZoikoAssure is designed to
              connect authoritative sources with your planned jurisdictions,
              legal entities, activities, products and effective dates—helping
              teams identify what may apply, what needs human review and what
              evidence must support operational readiness.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>
              <Link
                href="#workflow"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore the Expansion Readiness Workflow
              </Link>
            </div>

            {/* Secondary Link */}
            <div className="mt-6">
              <Link
                href="/applicability-engine"
                className="text-[14px] font-normal leading-[22.4px] text-[#F58220] underline transition-colors hover:text-[#e0751a]"
              >
                Assess Your Regulatory Exposure
              </Link>
            </div>

            {/* Tagline */}
            <p className="mt-4 text-[12px] font-semibold leading-[19.2px] text-[#A0AAB2]">
              Source-grounded · Jurisdiction-specific · Time-aware ·
              Human-accountable
            </p>

            {/* Illustrative disclaimer */}
            <p className="mt-4 max-w-[672px] text-[10.4px] font-normal leading-[16.64px] text-[#A0AAB2]">
              Illustrative interface. No market-entry approvals, blanket
              coverage, fabricated legal rules, or autonomous go/no-go
              determinations.
            </p>
          </div>

          {/* Right Column: Hero UI Card */}
          <div className="flex w-full flex-col items-center lg:items-end">
            <div className="w-full max-w-[480px] rounded-lg bg-white p-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[448/298] w-full overflow-hidden rounded">
                <Image
                  src="/market/1.png"
                  alt="Understand the rules before entering a new market"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 448px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
