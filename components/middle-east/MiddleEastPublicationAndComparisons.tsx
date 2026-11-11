"use client";

import Image from "next/image";

export default function MiddleEastPublicationAndComparisons() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image (Raw display adhering strictly to no-border/shadow/radius rule for content images) */}
          <div className="flex w-full flex-col items-center lg:items-start">
            <div className="w-full max-w-[540px]">
              <div className="relative aspect-[540/380] w-full">
                <Image
                  src="/middle/3.png"
                  alt="Publication is not the same as commencement"
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start">
            <div>
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                Publication is not the same as commencement
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Publication, enactment, effective dates, amendments, observed
                updates and editorial review are separate events. A record
                should never be presented as current solely because a website
                was updated recently.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                Compare source obligations without flattening country
                differences
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Comparisons highlight different publishers, legal forms and
                review needs. It does not decide whether an instrument applies,
                prescribe legal advice or prove a control is operating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
