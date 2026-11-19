"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Eyebrow, Heading, Paragraphs, Action Buttons, Microcopy */}
          <div className="flex flex-col items-start">
            <span className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.08em] text-[#F58220]">
              GLOBAL REGULATORY INTELLIGENCE + CONTINUOUS ASSURANCE
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[48px] lg:leading-[1.15]">
              Know What Applies.<br />
              Prove What&apos;s Controlled.<br />
              Stay Ready for Scrutiny.
            </h1>

            <p className="mt-5 max-w-[580px] text-base font-normal leading-[1.65] text-[#D9E2EC] sm:text-[16.5px]">
              ZoikoAssure connects regulatory intelligence to applicability, obligations, controls, evidence, and continuous assurance &mdash; giving compliance leaders a defensible view of what applies, what changed, what is proven, and what requires action.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/regulatory-applicability"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Assess Your Regulatory Exposure
              </Link>
              <Link
                href="/how-zoikoassure-works"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#2C4A6F] bg-[#0A2540] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
              >
                See How Assurance Works
              </Link>
            </div>

            {/* Micro-copy */}
            <div className="mt-4 text-[12px] sm:text-[12.5px] leading-[1.5] text-[#94A3B8]">
              <p>Source-grounded &middot; Human-accountable &middot; Evidence-first.</p>
            </div>
          </div>

          {/* Right Column: Hero Graphic Card with white frame */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[500px] rounded-2xl bg-white p-3.5 sm:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src="/Company-Zoiko-Assure/cza1.jpg"
                  alt="Compliance executives evaluating regulatory applicability and assurance records"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
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
