"use client";

import Image from "next/image";
import Link from "next/link";

export default function MiddleEastHero() {
  return (
    <section className="relative w-full bg-[#0A2540] py-16 md:py-20 lg:py-[80px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[672px_1fr] lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <span className="text-[14px] font-semibold uppercase leading-[22.4px] tracking-[0.0714em] text-[#F58220]">
              REGIONAL NAVIGATION · COUNTRY-BY-COUNTRY REGULATORY
              AUTHORITY
            </span>

            <h1 className="mt-4 max-w-[672px] text-3xl font-semibold leading-[1.1] text-white sm:text-4xl lg:text-[56px] lg:leading-[61.6px]">
              Middle East Regulatory Intelligence
            </h1>

            <p className="mt-6 max-w-[672px] text-base font-normal leading-[28.8px] text-[#D9E2EC] sm:text-[18px]">
              Explore the source and governance questions that arise across
              Middle Eastern markets. Legal requirements differ by country,
              authority, entity, activity, product, sector and effective period.
              This page is a discovery guide—not a determination of what applies
              to your organization.
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
                href="/explore-regulatory-sources"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore Regulatory Sources
              </Link>
            </div>

            {/* Legal / Information Disclaimer */}
            <p className="mt-8 max-w-[672px] text-[10.4px] font-normal leading-[16.64px] text-[#A0AAB2]">
              Middle East is a regional label, not a uniform legal system.
              Country-level details appear only after authoritative sources,
              translations, applicability limitations and publication rights
              have been reviewed.
            </p>
          </div>

          {/* Right Column: Hero UI Card with White Border & Shadow (Hero Exception Rule) */}
          <div className="flex w-full flex-col items-center lg:items-end">
            <div className="w-full max-w-[480px] rounded-lg bg-white p-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[448/298] w-full overflow-hidden rounded">
                <Image
                  src="/middle/1.png"
                  alt="Middle East Regulatory Intelligence"
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
