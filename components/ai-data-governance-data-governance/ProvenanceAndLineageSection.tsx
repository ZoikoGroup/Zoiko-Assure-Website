"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProvenanceAndLineageSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <Image
                src="/AI-Data-Governance-Data-Governance/dg3.jpg"
                alt="Risk and compliance analysts tracking data lineage and evidence provenance"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Provenance & Source-to-Assurance */}
          <div className="flex flex-col items-start">
            {/* Block 1 */}
            <div>
              <h2 className="text-xl font-bold tracking-tight text-[#0A2540] sm:text-2xl lg:text-[24px]">
                Provenance and lineage
              </h2>
              <p className="mt-3 text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#5A6E85]">
                Source ID, edition, effective/observed period and evidence trail.
              </p>
            </div>

            {/* Block 2 */}
            <div className="mt-8 sm:mt-10">
              <h2 className="text-xl font-bold tracking-tight text-[#0A2540] sm:text-2xl lg:text-[24px]">
                Source-to-assurance chain
              </h2>
              <p className="mt-3 text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#5A6E85]">
                Source &rarr; Applicability &rarr; Obligation &rarr; Control &rarr; Evidence &rarr; Assurance.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <Link
                href="/platform"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                Explore How ZoikoAssure Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
