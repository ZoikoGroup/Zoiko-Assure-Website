"use client";

import Image from "next/image";
import Link from "next/link";

export default function CurrentOpportunitiesAvailability() {
  return (
    <section id="current-opportunities" className="w-full bg-[#F4F7FA] py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[608px_608px]">
          {/* Left Column: Image */}
          <div className="flex w-full justify-center lg:justify-start">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/careers/open-role-directories.png"
                alt="Viewing open role directories and employment records"
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex w-full max-w-[608px] flex-col items-start">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Current Opportunities Availability
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Open positions will appear here once the relevant opportunities
                and official application routes are verified and approved.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Open Roles Directory (When Available)
              </h2>
              <p className="mt-4 mb-6 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Verified open requisitions + ATS/feed details when available.
                Filter by Discipline, Location, Work Arrangement, and
                Employment Type.
              </p>
            </div>

            <div>
              <Link
                href="#current-opportunities"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
              >
                Check Back for Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

