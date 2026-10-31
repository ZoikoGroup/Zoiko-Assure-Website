"use client";

import Image from "next/image";
import Link from "next/link";

export default function AccessibilityAndRecruitmentSecurity() {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[608px_608px]">
          {/* Left Column: Content */}
          <div className="flex w-full max-w-[608px] flex-col items-start">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Accessibility and Application Assistance
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                The Careers page is designed for accessible navigation. Details
                of any supported application assistance route will be published
                when verified.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Recruitment Security and Safeguards
              </h2>
              <p className="mt-4 mb-6 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Apply only through the official role link published here. Do not
                send sensitive identity or payment information in response to
                unverified recruitment messages.
              </p>
            </div>

            <div>
              <Link
                href="/trust-center"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
              >
                Explore Trust Center
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex w-full justify-center lg:justify-end">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/careers/security-recruitment-safeguards.png"
                alt="Security specialist assessing application recruitment safeguards"
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

