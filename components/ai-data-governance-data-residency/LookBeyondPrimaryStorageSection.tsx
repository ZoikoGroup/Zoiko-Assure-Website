"use client";

import Image from "next/image";

export default function LookBeyondPrimaryStorageSection() {
  return (
    <section className="w-full bg-white pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Primary Storage & Legal Considerations */}
          <div className="flex flex-col items-start">
            {/* Block 1 */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[32px] lg:leading-[1.25]">
                Look beyond primary storage
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#5A6E85]">
                Review processing, replication, backups, support operations, logs, third parties and export flows. Statements about supported options should be current, scoped and backed by controlled documentation.
              </p>
            </div>

            {/* Block 2 */}
            <div className="mt-10 sm:mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[32px] lg:leading-[1.25]">
                A hosting location does not, by itself, resolve every legal question
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#5A6E85]">
                Applicable rules and safeguards require separate assessment. Residency availability for a specific environment has not been verified for publication. Request a scoped discussion with our team.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <Image
                src="/AI-Data-Governance-Data-Residency/dr2.jpg"
                alt="Cloud infrastructure engineer inspecting data residency server hardware"
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
