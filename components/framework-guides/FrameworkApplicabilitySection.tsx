import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FrameworkApplicabilitySection() {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content Column */}
          <div className="flex flex-col">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Does This Framework Apply to Your Organization?
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Teach what facts affect a framework decision. Review the decision question matrix for jurisdiction, entity, business activity, and contract.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                From Requirements to Accountable Controls.
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Illustrate how guidance may lead to governed implementation. See illustrative source/reference, obligation questions, and control owners.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/framework-guides/applicability"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324] hover:text-white"
              >
                Review Applicability
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex justify-center">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/framework-guides/control-alignment.png"
                alt="Organizational Applicability and Control Alignment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
