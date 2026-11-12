"use client";

import Image from "next/image";

export default function CybersecurityBoundariesAndFunctions() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start">
            <div>
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                Cybersecurity Assurance Starts With Clear Boundaries
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Cyber risk varies by asset, system, business process, threat,
                supplier and jurisdiction. A useful program makes ownership and
                the evidence behind decisions inspectable.
              </p>

              {/* Illustrative Note Callout */}
              <div className="mt-6 border-l-[3px] border-[#F58220] pl-3.5">
                <p className="text-[12.5px] font-medium leading-[19.5px] text-[#5F6B7A]">
                  Illustrative example only. No real systems, vulnerabilities,
                  employee records or customer data are shown.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                Six Continuous Cybersecurity Functions
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Govern sets cybersecurity risk direction; Identify scopes assets
                and risks; Protect establishes safeguards; Detect identifies
                events; Respond manages incidents; Recover restores
                capabilities.
              </p>
            </div>
          </div>

          {/* Right Column: Image (Raw display adhering strictly to no-border/shadow/radius rule for content images) */}
          <div className="flex w-full flex-col items-center lg:items-end">
            <div className="w-full max-w-[540px]">
              <div className="relative aspect-[540/380] w-full">
                <Image
                  src="/cyber/2.png"
                  alt="Cybersecurity Assurance Starts With Clear Boundaries"
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
