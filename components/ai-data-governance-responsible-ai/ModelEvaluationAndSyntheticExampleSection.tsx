"use client";

import Image from "next/image";
import Link from "next/link";

export default function ModelEvaluationAndSyntheticExampleSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Re-evaluation & Synthetic Example */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[30px] lg:leading-[1.25]">
              New source or model version? Re-evaluate the claim.
            </h2>
            <p className="mt-4 text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#5A6E85]">
              A newly effective rule, revised source, changed model or stale evidence can require a fresh assessment.
            </p>

            {/* Synthetic Public Example Callout */}
            <div className="mt-6 border-l-4 border-[#F58220] pl-4 py-1.5">
              <span className="block text-[11.5px] font-bold uppercase tracking-wider text-[#0A2540]">
                SYNTHETIC PUBLIC EXAMPLE
              </span>
              <p className="mt-1 text-[13px] sm:text-[13.5px] leading-[1.6] text-[#5A6E85]">
                A decision with clear uncertainty and review status.
              </p>
            </div>

            {/* Disclaimer Micro-copy */}
            <p className="mt-6 text-[11.5px] sm:text-[12px] leading-[1.6] text-[#94A3B8] max-w-[540px]">
              Illustrative data only. This panel does not represent a live customer record or a claim that these functions are deployed. All values are fictional. No live service, customer case or automatic legal determination is asserted.
            </p>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <Link
                href="/continuous-compliance"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                Explore Methodology
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <Image
                src="/AI-Data-Governance-Responsible-AI/dgra4.jpg"
                alt="Risk professionals re-evaluating model versions, uncertainty bounds and compliance evidence"
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
