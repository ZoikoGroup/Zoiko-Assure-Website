"use client";

import Image from "next/image";

export default function CompliancePolicyAndReview() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start">
            <div>
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                More than a policy library
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                A compliance program must work in practice: risks are
                identified, owners act, evidence is evaluated, concerns are
                escalated and improvements are tracked.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                From source to evidence-backed review
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Source &rarr; applicability &rarr; obligation &rarr; policy
                &rarr; accountable control &rarr; monitoring &rarr; evidence
                &rarr; independent review.
              </p>
            </div>
          </div>

          {/* Right Column: Image (Raw display adhering strictly to no-border/shadow/radius rule for content images) */}
          <div className="flex w-full flex-col items-center lg:items-end">
            <div className="w-full max-w-[540px]">
              <div className="relative aspect-[540/380] w-full">
                <Image
                  src="/comp/2.png"
                  alt="More than a policy library and from source to evidence-backed review"
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
