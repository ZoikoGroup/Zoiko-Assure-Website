"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] py-20 text-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[672px_480px] lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            {/* Eyebrow */}
            <span className="text-[14px] font-semibold uppercase leading-[22.4px] tracking-[1px] text-[#F58220]">
              Solutions / General Counsel
            </span>

            {/* Heading 1 */}
            <h1 className="mt-4 text-3xl font-semibold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[61.6px]">
              Make Regulatory Decisions Traceable to Their Sources.
            </h1>

            {/* Description */}
            <p className="mt-6 text-[18px] font-normal leading-[28.8px] text-[#D9E2EC]">
              ZoikoAssure helps General Counsel connect authoritative regulatory sources to jurisdiction-specific applicability, governed obligations, operational controls, evidence and accountable assurance review. Examine what changed, why a requirement may apply to an entity or activity, which interpretation still needs legal review, and how the organization can preserve the decision’s sources, context, date and reviewer.
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
                href="#legal-source-proof"
                className="text-[14px] font-normal leading-[22.4px] text-[#F58220] underline transition-colors hover:text-[#e0751a]"
              >
                Explore Legal Source &amp; Applicability Proof
              </a>
            </div>

            {/* Footnote */}
            <p className="mt-4 text-[12px] font-normal leading-[19.2px] text-[#A0AAB2]">
              Source-grounded analysis. Explicit uncertainty. Accountable legal review. Illustrative examples, not legal advice.
            </p>
          </div>

          {/* Right Column: Hero Graphic Card */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[480/317] w-full max-w-[480px] overflow-hidden rounded-[8px] bg-white p-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative h-full w-full">
                <Image
                  src="/images/general-counsel/hero-specimen.png"
                  alt="Illustrative Legal Review Specimen"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
