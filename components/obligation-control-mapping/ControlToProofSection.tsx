"use client";

import Image from "next/image";
import Link from "next/link";

export default function ControlToProofSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold leading-[28.8px] text-[#172033]">
              From the control to the proof that supports it.
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Trace the obligation, control and expected evidence requirement while distinguishing missing, stale, unverified and evaluated artifacts.
            </p>
            <div className="mt-6">
              <Link
                href="/platform/evidence-provenance"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324]/5"
              >
                Explore Evidence &amp; Provenance
              </Link>
            </div>
          </div>

          {/* Right Column: UI Card */}
          <div className="flex w-full items-center justify-center">
            <div className="h-[172px] w-full max-w-[535px] rounded-lg bg-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
