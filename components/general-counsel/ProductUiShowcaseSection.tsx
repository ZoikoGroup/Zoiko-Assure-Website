"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductUiShowcaseSection() {
  return (
    <section id="legal-source-proof" className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start">
            <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
              Legal Review Workspace Product UI Showcase
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              See an implementation-aware source and decision UI specimen. Features source tracking, jurisdiction deltas, applicability evaluation, and decision history.
            </p>

            <div className="mt-6">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
              >
                Inspect Sample
              </Link>
            </div>
          </div>

          {/* Right Column: Specimen Image */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[576/432] w-full max-w-[576px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/general-counsel/legal-review-workspace-ui.png"
                alt="Legal Review Workspace Product UI"
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
