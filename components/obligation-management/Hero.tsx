"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0A2540] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Eyebrow, Heading, Paragraphs, Action Buttons, Microcopy */}
          <div className="flex flex-col items-start">
            <span className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.08em] text-[#F58220]">
              OBLIGATION MANAGEMENT
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[48px] lg:leading-[1.12]">
              Make Regulatory<br className="hidden sm:inline" /> Obligations Accountable<br className="hidden sm:inline" /> From Day One.
            </h1>

            <p className="mt-5 max-w-[580px] text-base font-normal leading-[1.65] text-[#D9E2EC] sm:text-[16.5px]">
              Connect source-grounded requirements to named owners, reviewed decisions and operational control work—while retaining the evidence trail and legal context.
            </p>

            <p className="mt-4 max-w-[580px] text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#CBD5E1]">
              Regulatory obligation management is the governed process of identifying, structuring, assigning, reviewing and maintaining an organization&apos;s applicable requirements, with source provenance and effective-date context.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>
              <Link
                href="#lifecycle"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#2C4A6F] bg-[#0A2540] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
              >
                See the Obligation Lifecycle
              </Link>
            </div>

            {/* Secondary Link & Micro-copy */}
            <div className="mt-4">
              <Link
                href="/platform/obligation-control-mapping"
                className="text-[13.5px] sm:text-[14px] font-medium text-[#D9E2EC] underline transition-colors hover:text-white"
              >
                Explore Obligation &amp; Control Mapping
              </Link>
            </div>

            <div className="mt-3 text-[12px] sm:text-[12.5px] leading-[1.6] text-[#94A3B8]">
              <p>Source-linked requirements · Named accountability · Dated decision history</p>
              <p className="mt-0.5">Illustrative workflow—not a live obligation record, coverage claim, or legal determination.</p>
            </div>
          </div>

          {/* Right Column: Hero Graphic Card with white border/frame */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[500px] rounded-2xl bg-white p-3.5 sm:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src="/Obligation-Management/om1.png"
                  alt="Connected global regulatory obligation intelligence infrastructure network"
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
