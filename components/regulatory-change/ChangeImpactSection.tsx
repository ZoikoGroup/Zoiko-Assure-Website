"use client";

import Image from "next/image";
import Link from "next/link";

export default function ChangeImpactSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: UI Mockup */}
          <div className="order-2 flex w-full items-center justify-center lg:order-1">
            <div className="relative aspect-[600/400] w-full max-w-[576px] overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/regulatory-change/obligation-roster-control-mapping.png"
                alt="Obligation Roster and Control Mapping"
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="order-1 flex flex-col items-start lg:order-2">
            <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540]">
              Change Impact and Obligations
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Link change deltas to obligations and their respective owners. View before/after excerpts, change classifications and track responsibilities.
            </p>

            <h2 className="mt-12 text-2xl font-semibold leading-[28.8px] text-[#0A2540]">
              Controls and Implementation Review
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Separate mapping from operation. Review the control mapping, impact assessment and the expected response required.
            </p>

            <div className="mt-6">
              <Link
                href="/obligation-control-mapping"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637] hover:text-white"
              >
                Inspect Control
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
