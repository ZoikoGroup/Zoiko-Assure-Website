"use client";

import Image from "next/image";
import Link from "next/link";

export default function AccountabilityBoardSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[1280px] px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[576px_1fr] lg:gap-16">
          {/* Left Column */}
          <div className="flex w-full max-w-[576px] flex-col items-start">
            {/* Block 1 */}
            <h2 className="text-[24px] font-semibold leading-[29px] text-[#0A2540]">
              Accountability and Escalation
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[26px] text-[#5F6B7A]">
              Identify responsible owners, approvers, pending actions, and review routing. Ensure CFO oversight, CCO execution, CRO risk context, and General Counsel interpretation remain distinct.
            </p>

            {/* Block 2 */}
            <h2 className="mt-12 text-[24px] font-semibold leading-[29px] text-[#0A2540]">
              Board Briefing / Audit Committee View
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[26px] text-[#5F6B7A]">
              <span className="lg:whitespace-nowrap">A board-consumable summary highlighting evidence links, gaps, versioning,</span>
              <br />
              <span className="lg:whitespace-nowrap">and unresolved issues. A proposed agenda item is not committee approval</span>
              <br />
              <span>or minutes.</span>
            </p>

            {/* Action Link */}
            <div className="mt-6">
              <Link
                href="/board-specimen"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[26px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637] hover:text-white"
              >
                View Board Specimen
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[1240/782] w-full max-w-[608px] overflow-hidden rounded-[8px]">
              <Image
                src="/images/cfo-audit-committee/board-briefing.png"
                alt="Board Briefing and Escalation"
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
