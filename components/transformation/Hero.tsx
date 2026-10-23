"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] pt-20 pb-20 text-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[672px_480px] lg:gap-16">
          {/* Left Column: Eyebrow, Heading, Paragraph, CTA Buttons, Quick Links, Meta, Disclaimer */}
          <div className="flex flex-col items-start">
            <span className="text-[14px] font-semibold uppercase leading-[22.4px] tracking-[1px] text-[#F58220]">
              Solutions / M&A & Transformation
            </span>

            <h1 className="mt-4 text-3xl font-semibold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[61.6px]">
              Understand inherited obligations before they become control gaps.
            </h1>

            <p className="mt-6 max-w-[672px] text-[18px] font-normal leading-[28.8px] text-[#D9E2EC]">
              Acquisitions, divestitures and enterprise transformation can change which regulatory requirements apply, which teams own controls and whether evidence remains valid across the transition. ZoikoAssure is designed to connect regulatory sources, applicability, obligations, controls and evidence so responsible teams can review exposure and unresolved questions with clear provenance.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>
              <a
                href="#transition-lifecycle"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore the Transition Assurance Model
              </a>
            </div>

            {/* Quick Link */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                href="/regulatory-exposure"
                className="text-[14px] font-normal leading-[22.4px] text-[#F58220] underline transition-colors hover:text-[#e0751a]"
              >
                Assess Your Regulatory Exposure
              </Link>
            </div>

            {/* Key Assurance Traits */}
            <p className="mt-4 text-[12px] font-semibold leading-[19.2px] text-[#A0AAB2]">
              Entity-aware · Source-linked · Time-aware · Evidence-backed · Human-accountable
            </p>

            {/* Disclaimer */}
            <p className="mt-6 text-[10.4px] font-normal leading-[16.64px] text-[#A0AAB2]">
              Illustrative operating model. Feature availability and regulatory conclusions require validation and qualified review.
            </p>
          </div>

          {/* Right Column: Hero Graphic UI */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[480px] rounded-lg bg-white p-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[448/324] w-full overflow-hidden rounded">
                <Image
                  src="/images/transformation/hero-transformation-ui.png"
                  alt="Illustrative M&A and Transformation UI"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
