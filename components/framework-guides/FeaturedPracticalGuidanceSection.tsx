import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedPracticalGuidanceSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-[90px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Image Column */}
          <div className="order-2 flex justify-center lg:order-1">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/framework-guides/reading-interface.png"
                alt="Guide Article Header and Reading Interface"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content Column */}
          <div className="order-1 flex flex-col lg:order-2">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Featured Practical Guidance.
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Highlight a real guide with transparent editorial selection, source/edition, last review, and short summary.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Guide Article Header and Reading Tools.
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Expose stable title, scope, metadata and reading navigation. Ensure article identity, author and editorial currentness.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/framework-guides/featured"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324] hover:text-white"
              >
                Read Featured Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
