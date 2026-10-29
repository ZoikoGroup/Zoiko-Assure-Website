import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RolePlaybooksSection() {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content Column */}
          <div className="flex flex-col">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Put the Right People Around the Decision.
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Connect detailed work to buyer jobs with discipline. Explore role-specific playbooks for Legal, Compliance, Risk, Internal Audit, Security, and Executive oversight.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Check What Changed Since the Last Review.
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Preserve trust when a reference changes. Review the revision timeline for editorial review dates, source editions, detected changes, and correction notes.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/framework-guides/playbooks"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324] hover:text-white"
              >
                View Role Playbooks
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex justify-center">
            <div className="relative aspect-[608/357] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/framework-guides/role-playbooks.png"
                alt="Role-Specific Playbooks and Edition Changes"
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
