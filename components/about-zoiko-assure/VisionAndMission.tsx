"use client";

import Image from "next/image";
import Link from "next/link";

export default function VisionAndMission() {
  return (
    <section className="w-full bg-[#F4F7FA] py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[608px_608px]">
          {/* Left Column: Image */}
          <div className="flex w-full justify-center lg:justify-start">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/about-zoiko-assure/executive-team-vision-mission.png"
                alt="Executive team outlining vision and mission on whiteboard"
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
                Our Vision
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                A world in which every regulated organization can know what
                applies, demonstrate what is controlled, and defend its
                decisions with evidence. The objective is not to make complexity
                disappear; it is to make the organization’s response to it
                structured, traceable and accountable.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Our Mission
              </h2>
              <p className="mt-4 mb-6 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                To build the infrastructure layer for continuous regulatory
                assurance. We are building systems that connect regulatory
                intelligence to operational reality — so obligations can be
                understood in context, controls can be governed, evidence can
                be preserved, and AI can be used responsibly.
              </p>
            </div>

            <div>
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324]/10"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

