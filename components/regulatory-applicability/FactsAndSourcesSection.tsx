"use client";

import Image from "next/image";
import Link from "next/link";

export default function FactsAndSourcesSection() {
  return (
    <section className="w-full bg-white pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Facts & Sources */}
          <div className="flex flex-col items-start">
            {/* Block 1 */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[34px] lg:leading-[1.25]">
                Applicability Depends on the Facts.
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#5A6E85]">
                Dimensions include jurisdiction, legal entity, regulated activity, product/service, data, customer/counterparty type, and effective period. Show what can change applicability.
              </p>
            </div>

            {/* Block 2 */}
            <div className="mt-10 sm:mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[34px] lg:leading-[1.25]">
                Start With the Source, Not a Score.
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#5A6E85]">
                Illustrative record: issuer, instrument, citation, jurisdiction, publication, effective-from, version and last-reviewed. Ensure official source links open securely with descriptive titles.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <Link
                href="/methodology"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                Explore Factors &amp; Source
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <Image
                src="/Regulatory-Applicability/ra2.png"
                alt="Data analytics and regulatory source intelligence network interface"
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
