import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GuideDirectorySection() {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content Column */}
          <div className="flex flex-col">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Start With a Reviewed Framework Guide.
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Browse substantive reviewed guides with validated links. Each guide shows verified issuer/edition reference, topic, audience, and last-reviewed date.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Find Guidance by the Work You Need to Do.
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Disambiguate framework type and audience need using exact domain filters. Apply filter, clear all, change domain.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/framework-guides/directory"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324] hover:text-white"
              >
                Explore Guide Directory
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex justify-center">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/framework-guides/directory-search.png"
                alt="Framework Guide Directory and Search Interface"
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
