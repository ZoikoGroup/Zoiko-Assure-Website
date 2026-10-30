"use client";

import Image from "next/image";
import Link from "next/link";

export default function QuestionToReviewAndSearch() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start">
            <div>
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                Follow a path from question to review.
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                CRO, General Counsel, CCO, internal audit, security/engineering
                tracks: each shows 3–5 article steps, assumed knowledge and
                role-specific next action.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold leading-[28.8px] text-[#0A2540] sm:text-2xl">
                Find a reviewed answer.
              </h3>
              <p className="mt-2 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Search and topic filters (Conditional). Find verified guidance,
                documentation, and topics when implemented. Includes clear
                facets/filters for Type/Topic/Audience/Updated.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/view-learning-tracks"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/10"
              >
                View Learning Tracks
              </Link>
            </div>
          </div>

          {/* Right Column: Image (Clean display without border, radius, background, or shadow) */}
          <div className="flex w-full flex-col items-center lg:items-end">
            <div className="w-full max-w-[540px]">
              <div className="relative aspect-[540/380] w-full">
                <Image
                  src="/documentation/4.png"
                  alt="Follow a path from question to review."
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
