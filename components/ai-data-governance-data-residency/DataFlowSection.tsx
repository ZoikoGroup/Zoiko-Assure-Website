"use client";

import Image from "next/image";

export default function DataFlowSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Data Flow Description */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[30px] lg:leading-[1.25]">
              Data flow
            </h2>
            <p className="mt-4 text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#5A6E85]">
              input &rarr; processing &rarr; storage/backups &rarr; support &rarr; review.
            </p>
            <p className="mt-6 text-[13px] sm:text-[13.5px] font-normal leading-[1.6] text-[#5A6E85]">
              Synthetic layout proposal &mdash; no production region, hosting commitment or live product view is asserted.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <Image
                src="/AI-Data-Governance-Data-Residency/dr4.jpg"
                alt="Engineers planning data flow and architectural residency layouts"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
