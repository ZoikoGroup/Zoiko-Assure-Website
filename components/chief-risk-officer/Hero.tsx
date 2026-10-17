"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] pt-20 pb-20 text-white">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[672px_480px] lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            {/* Eyebrow */}
            <span className="text-[14px] font-semibold uppercase leading-[22.4px] tracking-[1px] text-[#F58220]">
              Solutions / Chief Risk Officer
            </span>

            {/* Heading 1 */}
            <h1 className="mt-4 text-3xl font-semibold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[61.6px]">
              See What Changed.<br />Know What Remains<br />Exposed.
            </h1>

            {/* Description */}
            <p className="mt-6 text-[18px] font-normal leading-[28.8px] text-[#D9E2EC]">
              ZoikoAssure helps Chief Risk Officers connect regulatory changes to enterprise applicability, governed obligations, controls, evidence and an explainable assurance view across jurisdictions. Understand which requirements may affect your organization, what has been evaluated, and where proof is missing.
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
                href="/regulatory-exposure"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-white/10"
              >
                Assess Your Regulatory Exposure
              </Link>
            </div>

            {/* Explore Link */}
            <div className="mt-6">
              <a
                href="#command-view"
                className="text-[14px] font-normal leading-[22.4px] text-[#F58220] underline transition-colors hover:text-[#e0751a]"
              >
                Explore the CRO Command View
              </a>
            </div>

            {/* Footnote */}
            <p className="mt-4 pb-6 text-[12px] font-normal leading-[19.2px] text-[#A0AAB2]">
              Source-grounded. Evidence-first. Human-accountable. Illustrative screens are not a live customer risk assessment.
            </p>
          </div>

          {/* Right Column: Hero Graphic Card */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[1040/741] w-full max-w-[520px]">
              <Image
                src="/images/chief-risk-officer/hero-specimen.png"
                alt="Illustrative CRO Dashboard Specimen"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
