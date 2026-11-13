"use client";

import Image from "next/image";

export default function ResidencyStatusAndCommitmentSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <Image
                src="/AI-Data-Governance-Data-Residency/dr3.jpg"
                alt="Governance and legal review team evaluating data residency status and commitments"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Status & Exception */}
          <div className="flex flex-col items-start">
            {/* Block 1 */}
            <div>
              <h2 className="text-xl font-bold tracking-tight text-[#0A2540] sm:text-2xl lg:text-[24px]">
                Status: NOT VERIFIED
              </h2>
              <p className="mt-3 text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#5A6E85]">
                Configuration: OWNER GATED. Transfer review: SEPARATE. Evidence: ACCESS CONTROLLED.
              </p>
            </div>

            {/* Block 2 */}
            <div className="mt-8 sm:mt-10">
              <h2 className="text-xl font-bold tracking-tight text-[#0A2540] sm:text-2xl lg:text-[24px]">
                Exception: NOT A COMMITMENT
              </h2>
              <p className="mt-3 text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#5A6E85]">
                Detailed evidence may require an authorized request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
