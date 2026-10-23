"use client";

import Image from "next/image";
import Link from "next/link";

export default function EvidenceAssuranceSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540]">
              Evidence and Updated Assurance
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              A changed source version requires evidence reassessment. Show governed proof, freshness and an independent assurance conclusion.
            </p>

            <h2 className="mt-12 text-2xl font-semibold leading-[28.8px] text-[#0A2540]">
              Multi-Jurisdiction and Legal Time
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Explain cross-border differences and phased effective periods. View a jurisdiction matrix to understand common baselines versus local deltas.
            </p>

            <div className="mt-6">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637] hover:text-white"
              >
                Compare Contexts
              </Link>
            </div>
          </div>

          {/* Right Column: UI Mockup */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[1500/1001] w-full max-w-[576px] overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/regulatory-change/evidence-freshness-jurisdiction.png"
                alt="Evidence Freshness and Jurisdiction Comparison"
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
