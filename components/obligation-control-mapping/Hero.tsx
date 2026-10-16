"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[672px_1fr] lg:gap-16">
          {/* Left Column: Eyebrow, Heading, Paragraph, CTA Buttons */}
          <div className="flex flex-col items-start">
            <span className="text-[14px] font-semibold uppercase leading-[22.4px] tracking-[0.0714em] text-[#F58220]">
              Platform / Obligation &amp; Control Mapping
            </span>

            <h1 className="mt-3 max-w-[672px] text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[48px] lg:leading-[52.8px]">
              Turn applicable<br />requirements into<br />accountable controls.
            </h1>


            <p className="mt-4 max-w-[672px] text-base font-normal leading-[28.8px] text-[#D9E2EC] sm:text-[18px]">
              Once an obligation applies, organizations still need to understand its operating response. ZoikoAssure is designed to connect cited requirements to governable obligations, mapped controls and accountable ownership—while showing where evidence or review is still needed.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>
              <Link
                href="/applicability-engine"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore Applicability Engine
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Graphic Card */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[480px] rounded-lg bg-white p-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[448/327] w-full overflow-hidden rounded">
                <Image
                  src="/images/obligation-control-mapping/hero-framework.png"
                  alt="Illustrative Obligation and Control Framework"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 448px"
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
