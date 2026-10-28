"use client";

import Image from "next/image";
import Link from "next/link";

export default function CustomerSupportEvaluationSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image */}
          <div className="flex w-full items-center justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/reliability/customer-support-evaluation.png"
                alt="Customer Support Boundaries and Evaluation"
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="flex flex-col items-start max-w-[608px] order-1 lg:order-2">
            <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
              Use the Right Channel for the Right Need.
            </h2>

            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Separate customer incident help from new-business inquiries. Existing customers should use verified support channels for disruptions.
            </p>

            <h2 className="mt-8 md:mt-10 text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
              Bring Your Reliability Requirements to the Review.
            </h2>

            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Help stakeholders prepare a qualified review without a pseudo-diagnostic. Review service scope, critical dependencies, and contractual questions.
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] bg-transparent px-[25px] py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
              >
                Contact Authorized Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
