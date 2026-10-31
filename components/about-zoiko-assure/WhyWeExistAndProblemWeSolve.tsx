"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhyWeExistAndProblemWeSolve() {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[608px_608px]">
          {/* Left Column: Content */}
          <div className="flex w-full max-w-[608px] flex-col items-start">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Why We Exist
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                The compliance problem is no longer simply access to rules.
                Organizations already invest in legal advice, regulatory
                content, policies, controls, technology and specialist teams.
                The structural problem appears when those elements must be
                connected quickly enough — and with sufficient evidence — to
                answer a harder question: What applies to us, what have we done
                about it, and how can we prove it?
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                The Problem We Solve
              </h2>
              <p className="mt-4 mb-6 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Regulatory intelligence is often disconnected from operations.
                Applicability is treated as a static checklist. Control
                mapping is mistaken for control effectiveness. Evidence is
                reconstructed at audit time. ZoikoAssure turns a fragmented
                environment into a governed assurance system.
              </p>
            </div>

            <div>
              <Link
                href="/platform"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324]/10"
              >
                Explore Platform
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex w-full justify-center lg:justify-end">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/about-zoiko-assure/teams-collaborating-compliance.png"
                alt="Teams collaborating to solve compliance fragmentation problems"
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

