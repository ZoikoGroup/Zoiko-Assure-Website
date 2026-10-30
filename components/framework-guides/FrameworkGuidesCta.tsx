import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FrameworkGuidesCta() {
  return (
    <section className="relative w-full overflow-hidden bg-[#071C33]">
      {/* Background Graphic */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <Image
          src="/framework-guides/conversion-bg.png"
          alt="Framework Assurance"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay with border bottom */}
      <div className="relative z-10 w-full border-b border-white/[0.14] bg-[rgba(7,28,51,0.62)] py-[56px]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-20">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-16">
            {/* Left Content */}
            <div className="max-w-[690px]">
              <h2 className="text-[28px] font-semibold leading-[1.2] text-white sm:text-[34px]">
                Explore How Framework Questions Become Governed Assurance.
              </h2>
              <p className="mt-5 text-[15px] font-normal leading-[1.65em] text-[#CFD9E4]">
                Continue the enterprise evaluation without coercive conversion. Request a Demo to see how ZoikoAssure operationalizes framework adoption.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:flex-nowrap">
              <Link
                href="/request-demo"
                className="inline-flex h-[48px] items-center justify-center rounded-[8px] border border-[#D58324] bg-[#D58324] px-5 text-[14px] font-semibold text-white transition-opacity duration-200 hover:opacity-90"
              >
                Request a Demo
              </Link>
              <Link
                href="/regulatory-exposure"
                className="inline-flex h-[48px] items-center justify-center rounded-[8px] border border-[#7890A7] bg-[#071C33] px-5 text-[14px] font-semibold text-white transition-colors duration-200 hover:border-white"
              >
                Assess Your Regulatory Exposure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
