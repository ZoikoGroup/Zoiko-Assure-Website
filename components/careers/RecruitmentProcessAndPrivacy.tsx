"use client";

import Image from "next/image";
import Link from "next/link";

export default function RecruitmentProcessAndPrivacy() {
  return (
    <section className="w-full bg-[#F4F7FA] py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[608px_608px]">
          {/* Left Column: Image */}
          <div className="flex w-full justify-center lg:justify-start">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/careers/recruitment-process-privacy.png"
                alt="HR reviewing candidate recruitment process and data privacy"
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
                Recruitment Process and Touchpoints
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Our recruiting steps vary by role. Any published process
                describes what applicants should expect for that opportunity.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Candidate Data Privacy and Consent
              </h2>
              <p className="mt-4 mb-6 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Applicant information is collected only through an approved
                recruitment process with the relevant privacy notice available
                before submission.
              </p>
            </div>

            <div>
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
              >
                Read Privacy Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

