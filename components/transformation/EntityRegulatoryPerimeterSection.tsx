"use client";

import Image from "next/image";
import Link from "next/link";

export default function EntityRegulatoryPerimeterSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Headings, Descriptions, and CTA */}
          <div className="flex flex-col justify-start">
            <div>
              <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540] md:text-[24px]">
                The Six-Stage Source-to-Assurance Chain
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Trace requirements from regulatory source, applicability, obligations, controls, and evidence, through to a defensible assurance conclusion.
              </p>
            </div>

            <div className="mt-10 md:mt-12">
              <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540] md:text-[24px]">
                Entity and Regulatory Perimeter
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Define affected legal entities and activities clearly. Understand the context of the expansion without claiming a live inventory or automatic go/no-go decisions.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/platform/applicability-engine"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
              >
                Inspect Entity Perimeter
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Diagram Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-[576/341] w-full max-w-[576px] overflow-hidden rounded-lg border border-[#D9E2EC] bg-[#0A2540] shadow-lg">
              <Image
                src="/images/transformation/entity-regulatory-perimeter-ui.png"
                alt="Entity and Regulatory Perimeter UI"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 576px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
