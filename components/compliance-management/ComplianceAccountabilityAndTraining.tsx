"use client";

import Image from "next/image";
import Link from "next/link";

export default function ComplianceAccountabilityAndTraining() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image (Raw display adhering strictly to no-border/shadow/radius rule for content images) */}
          <div className="flex w-full flex-col items-center lg:items-start">
            <div className="w-full max-w-[540px]">
              <div className="relative aspect-[540/380] w-full">
                <Image
                  src="/comp/3.png"
                  alt="Make accountability visible"
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
                Make accountability visible
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Management owns controls. Compliance supports oversight. Legal
                reviews contested obligations. Independent audit evaluates
                within its mandate.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                Policies and training need evidence of effectiveness
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Track versions, acknowledgments and comprehension separately
                from monitoring and actual operating performance.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/explore-how-zoikoassure-works"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
              >
                Explore How ZoikoAssure Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
