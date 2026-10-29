import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function EvidenceReadinessSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-[90px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Image Column */}
          <div className="order-2 flex justify-center lg:order-1">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/framework-guides/evidence-readiness.png"
                alt="Evidence Readiness and Internal Review Checklists"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content Column */}
          <div className="order-1 flex flex-col lg:order-2">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Evidence Makes an Implementation Defensible.
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Clarify how to test whether controls operated as designed. Review evidence requirements, freshness, and accountable human reviews.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Prepare Your Internal Review.
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Offer tangible next steps without unauthorized downloads. Access actionable education and verified downloadable assets where approved.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/framework-guides/evidence"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324] hover:text-white"
              >
                Explore Evidence Steps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
