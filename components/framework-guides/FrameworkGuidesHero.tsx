import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FrameworkGuidesHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0A2540] pt-[90px] pb-[70px] text-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[709.33px_506.67px] gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="flex flex-col">
              <span className="text-[#D58324] font-semibold text-[14px] leading-[22.4px] tracking-[0.0714em] uppercase">
                RESOURCES / FRAMEWORK GUIDES
              </span>

              <h1 className="mt-4 text-[40px] sm:text-[48px] lg:text-[56px] font-semibold leading-[1.1] sm:leading-[1.1] text-white">
                Use Frameworks With Context. Build Decisions You Can Defend.
              </h1>

              <p className="mt-6 text-[18px] leading-[28.8px] text-[#D9E2EC] font-normal">
                Practical framework guidance for risk, compliance, legal and governance teams.
              </p>

              <p className="mt-6 text-[14px] leading-[22.4px] text-[#D9E2EC] font-normal">
                Understand a framework’s purpose, status, edition and principal control themes. Follow reviewed steps to identify relevant organizational questions, assign accountable owners and determine what evidence may be needed—without confusing framework references with a certification or legal conclusion.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/framework-guides/directory"
                  className="inline-flex items-center justify-center bg-[#D58324] text-white rounded-[4px] px-6 py-3 text-[16px] font-semibold leading-[25.6px] hover:bg-[#c2731c] transition-colors duration-200"
                >
                  Explore Framework Guides
                </Link>
                <Link
                  href="/frameworks"
                  className="inline-flex items-center justify-center bg-transparent border border-white text-white rounded-[4px] px-6 py-3 text-[16px] font-semibold leading-[25.6px] hover:bg-white/10 transition-colors duration-200"
                >
                  Browse Frameworks
                </Link>
              </div>

              {/* Disclaimer Note */}
              <p className="mt-6 text-[12px] font-semibold leading-[19.2px] text-[#A0AAB2]">
                Original issuer and edition references shown where verified. Educational guidance; organization-specific applicability and implementation require qualified review.
              </p>
            </div>

            {/* Right Card / Image Column */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[506.67px] bg-white p-4 rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.5)]">
                <div className="relative w-full aspect-[474.67/348] overflow-hidden rounded-[4px]">
                  <Image
                    src="/framework-guides/hero-framework.png"
                    alt="Executive team reviewing framework documentation"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Card Ribbon Overlapping Section */}
      <section
        style={{
          background: "linear-gradient(to bottom, #0A2540 35px, #FFFFFF 35px)",
        }}
        className="relative"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-[8px] p-6 border border-[#D9E2EC] border-t-4 border-t-[#D9E2EC] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]">
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                Issuer Reference
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Official issuer reference provided.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[8px] p-6 border border-[#D9E2EC] border-t-4 border-t-[#D9E2EC] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]">
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                Edition Context
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Specific framework edition stated.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[8px] p-6 border border-[#D9E2EC] border-t-4 border-t-[#D9E2EC] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]">
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                Reviewed Content
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Reviewed by subject-matter specialists.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[8px] p-6 border border-[#D9E2EC] border-t-4 border-t-[#D9E2EC] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02)]">
              <h4 className="text-[16px] font-semibold leading-[19.2px] text-[#0A2540]">
                Educational Purpose
              </h4>
              <p className="mt-4 text-[14px] font-normal leading-[22.4px] text-[#5F6B7A]">
                Educational only, not certification.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

