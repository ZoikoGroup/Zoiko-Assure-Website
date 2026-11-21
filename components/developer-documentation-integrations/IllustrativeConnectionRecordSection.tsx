"use client";

import Image from "next/image";

export default function IllustrativeConnectionRecordSection() {
  return (
    <section className="w-full bg-white pt-8 sm:pt-10 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Heading & Lifecycle Details */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[28px] lg:leading-[1.25]">
              Illustrative connection record &amp; lifecycle
            </h2>

            <div className="mt-6 space-y-4">
              <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#5A6E85]">
                <strong className="font-bold text-[#0A2540]">Six-stage lifecycle:</strong>{" "}
                Evaluate &rarr; Authorize &rarr; Validate &rarr; Map &rarr; Operate &rarr; Retire. A connection does not prove control effectiveness; source record, observation, evidence and review remain distinct.
              </p>

              <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#5A6E85]">
                <strong className="font-bold text-[#0A2540]">Status legend: Current / Delayed / Stale / Unavailable / Unknown.</strong>{" "}
                Status is always communicated in text, never color alone.
              </p>
            </div>
          </div>

          {/* Right Column: Cloud Gear & Architecture Graphic */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <Image
                src="/Developer-Documentation-Integrations/i2.png"
                alt="Cloud architecture with integrated gears, lightbulb and workflows held in hands"
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
