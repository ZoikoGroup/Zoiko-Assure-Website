"use client";

import Image from "next/image";
import Link from "next/link";

export default function EvidenceInventorySection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] xl:grid-cols-[minmax(0,620px)_576px] lg:gap-12 xl:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start w-full">
            <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540]">
              Evidence Inventory and Provenance
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Show artifact collection, origin, validity, lineage, and authorized reviewer. Integrity digests and verification labels appear only if product architecture supports it.
            </p>

            <h2 className="mt-12 text-2xl font-semibold leading-[28.8px] text-[#0A2540] sm:whitespace-nowrap">
              Sufficiency Review, Deficiencies and Remediation
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Show honest gaps, reviewer decisions, and rework queues. &quot;Awaiting evidence&quot; or &quot;Needs legal review&quot; are distinct from a completed assessment.
            </p>

            <div className="mt-6">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637] hover:text-white"
              >
                Inspect Evidence &amp; Review
              </Link>
            </div>
          </div>

          {/* Right Column: UI Mockup */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[576/432] w-full max-w-[576px] overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/regulatory-examination/sufficiency-review-remediation.png"
                alt="Sufficiency Review and Remediation Queue UI"
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
