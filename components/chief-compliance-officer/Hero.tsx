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
              Solutions / Chief Compliance Officer
            </span>

            {/* Heading 1 */}
            <h1 className="mt-4 text-3xl font-semibold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[61.6px]">
              Make every obligation traceable to action and evidence.
            </h1>

            {/* Description */}
            <p className="mt-6 text-[18px] font-normal leading-[28.8px] text-[#D9E2EC]">
              ZoikoAssure connects regulatory applicability and obligations to accountable controls, governed evidence, and continuous assurance—helping compliance leaders see what is supported, where proof is missing, and what needs review.
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
                href="#obligation-proof-model"
                className="text-[14px] font-normal leading-[22.4px] text-[#F58220] underline transition-colors hover:text-[#e0751a]"
              >
                Explore the Obligation-to-Proof Model
              </a>
            </div>

            {/* Footnote */}
            <p className="mt-4 pb-6 text-[12px] font-normal leading-[19.2px] text-[#A0AAB2]">
              Illustrative interface examples. Regulatory interpretations and consequential decisions remain subject to accountable human review.
            </p>
          </div>

          {/* Right Column: Hero Graphic Card */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[480/330] w-full max-w-[480px] overflow-hidden rounded-[8px] bg-white p-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative h-full w-full">
                <Image
                  src="/images/chief-compliance-officer/hero-specimen.png"
                  alt="Illustrative Obligation and Evidence Specimen"
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
