"use client";

import Image from "next/image";
import Link from "next/link";

export default function ApplicabilityDecisionSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
              <span className="sm:whitespace-nowrap">Begin with a source-grounded applicability</span>
              <br />
              decision.
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              A defined requirement moves forward with its authority, source version, jurisdiction, legal entity/activity context, effective period and recorded rationale. When the basis is UNCERTAIN, reviewers must resolve what can safely be treated as applicable.
            </p>
            <div className="mt-6">
              <Link
                href="/applicability-engine"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324]/5"
              >
                Explore Applicability Engine
              </Link>
            </div>
          </div>

          {/* Right Column: UI Mockup */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[576/409.91] w-full max-w-[576px] overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/obligation-control-mapping/handoff-applicability.png"
                alt="Handoff from Applicability Engine UI"
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
