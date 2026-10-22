"use client";

import Image from "next/image";
import Link from "next/link";

export default function FinancialEnterpriseRiskCompliance() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image Card */}
          <div className="flex w-full flex-col items-center lg:items-start">
            <div className="w-full max-w-[540px] overflow-hidden rounded-xl bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
              <div className="relative aspect-[540/380] w-full">
                <Image
                  src="/frame/5.png"
                  alt="Financial, Enterprise Risk & Compliance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
              Financial, Enterprise Risk &amp; Compliance
            </h3>
            <p className="mt-3 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
              Guide regulated-program decision makers. Assess sector-specific
              obligations, overarching risk methodologies, and compliance
              program review standards.
            </p>

            <div className="mt-8">
              <Link
                href="/browse-categories"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
