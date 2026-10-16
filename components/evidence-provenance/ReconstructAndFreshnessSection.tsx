"use client";

import Image from "next/image";

const freshnessPoints = [
  {
    label: "Observed at:",
    description: "When source event existed.",
  },
  {
    label: "Captured at:",
    description: "When record entered storage.",
  },
  {
    label: "Valid from/until:",
    description: "Supported period.",
  },
  {
    label: "Reviewed at:",
    description: "When determination occurred.",
  },
];

export default function ReconstructAndFreshnessSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Reconstruct the Chain */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
              Reconstruct the Chain Without Reconstructing the Story.
            </h2>

            <p className="mt-4 max-w-[520px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
              A historical view must preserve prior source versions and what was known as of review. Understand relationships like CITES, SUPPORTS_REQUIREMENT, and SUPERSEDES.
            </p>

            <div className="relative mt-8 aspect-[600/400] w-full overflow-hidden rounded-2xl shadow-[0_12px_30px_-6px_rgba(0,0,0,0.12)]">
              <Image
                src="/evidence-provenance/ep4.jpg"
                alt="Reconstruct the chain - engineer at workstation"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Freshness, Dates and Validity */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
              Freshness, Dates and Validity
            </h2>

            <p className="mt-4 max-w-[520px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
              Keep legal-effective, source-observed, captured-at, valid/as-of, evaluated-at and review-time meanings distinct. An old record cannot silently stand in for current proof.
            </p>

            {/* Definitions Card */}
            <div className="mt-8 w-full rounded-2xl border border-[#D9E2EC] bg-white p-6 sm:p-8 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.03)]">
              <div className="flex flex-col space-y-4 sm:space-y-5">
                {freshnessPoints.map((item) => (
                  <div key={item.label} className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#5A6E85]">
                    <strong className="font-bold text-[#0A2540]">{item.label}</strong>{" "}
                    <span>{item.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
