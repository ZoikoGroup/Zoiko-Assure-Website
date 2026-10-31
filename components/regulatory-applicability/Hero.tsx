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
              REGULATORY APPLICABILITY
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[48px] lg:leading-[1.12]">
              Know Which<br className="hidden sm:inline" /> Requirements Apply—and<br className="hidden sm:inline" /> Why.
            </h1>

            <p className="mt-5 max-w-[580px] text-base font-normal leading-[1.65] text-[#D9E2EC] sm:text-[16.5px]">
              Applicability depends on your jurisdiction, legal entity, activities, products, data, customer context and the period in which a requirement is effective.
            </p>

            <p className="mt-4 max-w-[580px] text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#CBD5E1]">
              ZoikoAssure connects those facts to authoritative regulatory sources and explainable review workflows. Regulatory applicability is the contextual determination of whether a particular legal or regulatory requirement applies to a defined organization, activity or circumstance during an applicable period. It depends on authoritative sources and verified facts; unresolved questions require accountable review.
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
                href="/platform/applicability-engine"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#2C4A6F] bg-[#0A2540] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
              >
                Explore Applicability Engine
              </Link>
            </div>

            {/* Secondary Link & Micro-copy */}
            <div className="mt-4">
              <Link
                href="/methodology"
                className="text-[13.5px] sm:text-[14px] font-medium text-[#D9E2EC] underline transition-colors hover:text-white"
              >
                Review Our Methodology
              </Link>
            </div>

            <div className="mt-3 text-[12px] sm:text-[12.5px] leading-[1.6] text-[#94A3B8]">
              <p>Illustrative workflows explain the approach; they are not legal advice or a determination about your organization.</p>
            </div>
          </div>

          {/* Right Column: Hero Graphic Card with white border/frame */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="w-full max-w-[500px] rounded-2xl bg-white p-3.5 sm:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src="/Regulatory-Applicability/ra1.jpg"
                  alt="Reviewing regulatory applicability facts across laptop and mobile devices"
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
