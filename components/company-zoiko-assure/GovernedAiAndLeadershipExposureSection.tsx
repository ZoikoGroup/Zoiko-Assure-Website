"use client";

import Image from "next/image";
import Link from "next/link";

export default function GovernedAiAndLeadershipExposureSection() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-14 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Governed AI + Leadership Exposure */}
          <div className="flex flex-col items-start">
            {/* Block 1 */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[28px] lg:leading-[1.25]">
                Governed AI + Provenance
              </h2>
              <p className="mt-3 text-[14px] sm:text-[14.5px] font-normal leading-[1.6] text-[#5A6E85]">
                Source grounding, uncertainty, override/accountable review. Explain without revealing hidden chain-of-thought.
              </p>
              <p className="mt-3 text-[13.5px] sm:text-[14px] font-normal leading-[1.6] text-[#5A6E85]">
                <strong className="font-semibold text-[#0A2540]">Evidence provenance bridge:</strong>{" "}
                Links control &rarr; evidence with status and date. Clear lineage without invented hashes.
              </p>
            </div>

            {/* Block 2 */}
            <div className="mt-10 sm:mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[28px] lg:leading-[1.25]">
                Leadership Exposure View
              </h2>
              <p className="mt-3 text-[14px] sm:text-[14.5px] font-normal leading-[1.6] text-[#5A6E85]">
                CRO, GC, CCO, CFO/Audit Committee lens labels.
              </p>

              {/* Callout box with orange left border */}
              <div className="mt-4 border-l-4 border-[#F58220] pl-4 py-1">
                <p className="text-[13px] sm:text-[13.5px] leading-[1.6] text-[#5A6E85]">
                  Decision subject, state, basis, accountable owner. No opaque risk score or false precision.
                </p>
              </div>

              <p className="mt-3 text-[12.5px] sm:text-[13px] leading-[1.6] text-[#5A6E85]">
                Accepted risk or exception in distinct rewrite lane. Not green/proven; approval/expiry windows present.
              </p>

              {/* CTA Button */}
              <div className="mt-6 sm:mt-8">
                <Link
                  href="/how-zoikoassure-works"
                  className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
                >
                  Explore How ZoikoAssure Works
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <Image
                src="/Company-Zoiko-Assure/cza2.jpg"
                alt="Leadership team reviewing governed AI provenance and enterprise compliance exposure"
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
