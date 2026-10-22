"use client";

import Image from "next/image";
import Link from "next/link";

export default function SupervisoryActionHero() {
  return (
    <section className="relative w-full bg-[#0A2540] py-16 md:py-20 lg:py-[80px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[672px_1fr] lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <span className="text-[14px] font-semibold uppercase leading-[22.4px] tracking-[0.0714em] text-[#F58220]">
              REGULATORY INTELLIGENCE / ENFORCEMENT & GUIDANCE
            </span>

            <h1 className="mt-4 max-w-[672px] text-3xl font-semibold leading-[1.1] text-white sm:text-4xl lg:text-[56px] lg:leading-[61.6px]">
              Understand supervisory
              <br className="hidden sm:inline" /> action. Trace the
              <br className="hidden sm:inline" /> authoritative guidance.
            </h1>

            <p className="mt-6 max-w-[672px] text-base font-normal leading-[28.8px] text-[#D9E2EC] sm:text-[18px]">
              Examine verified supervisory actions, published interpretations
              and official guidance alongside their source, status, scope, dates
              and editorial review context. Understand what the material
              says—and where organization-specific legal analysis remains
              necessary.
            </p>

            <p className="mt-4 max-w-[672px] text-base font-normal leading-[28.8px] text-[#D9E2EC] sm:text-[18px]">
              Enforcement and regulatory guidance describe how authorities
              supervise, interpret, communicate and—where legally supported—act
              on regulatory requirements. Their legal status and relevance
              depend on the issuing authority, instrument, jurisdiction, facts,
              procedural stage and effective period.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/explore-verified-materials"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Explore Verified Materials
              </Link>
              <Link
                href="/explore-regulatory-sources"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore Regulatory Sources
              </Link>
            </div>

            {/* Tagline */}
            <p className="mt-6 text-[12px] font-semibold leading-[19.2px] text-[#A0AAB2]">
              Official-source linked · Status-qualified · Jurisdiction-specific
              · Human-reviewed
            </p>

            {/* Illustrative disclaimer */}
            <p className="mt-4 max-w-[672px] text-[10.4px] font-normal leading-[16.64px] text-[#A0AAB2]">
              Supervisory material does not automatically determine obligations
              or applicability for your organization.
            </p>
          </div>

          {/* Right Column: Hero UI Card */}
          <div className="flex w-full flex-col items-center lg:items-end">
            <div className="w-full max-w-[480px] rounded-lg bg-white p-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[448/298] w-full overflow-hidden rounded">
                <Image
                  src="/enf/1.png"
                  alt="Understand supervisory action. Trace the authoritative guidance."
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
