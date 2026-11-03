"use client";

import Image from "next/image";
import Link from "next/link";

export default function TeamRhythmAndOperatingSystemsSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image */}
          <div className="flex w-full items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <Image
                src="/Continuous-Compliance/cc7.jpg"
                alt="Colleagues celebrating collaborative compliance milestones and team operating rhythm"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Team Operating Rhythm & Connecting Operating Systems */}
          <div className="flex flex-col items-start">
            {/* Block 1 */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[34px] lg:leading-[1.25]">
                Team Operating Rhythm
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#5A6E85]">
                Discover &rarr; assess &rarr; assign &rarr; act &rarr; review &rarr; reassess. Overdue tasks, disputes, handoff failures, and failed evidence show routed next steps.
              </p>
            </div>

            {/* Block 2 */}
            <div className="mt-10 sm:mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] sm:text-3xl lg:text-[34px] lg:leading-[1.25]">
                Connecting Operating Systems
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#5A6E85]">
                Understand conditional integrations, permission boundaries, and sync/failure examples. AI assists with source-grounded summaries, not autonomous judgments.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <Link
                href="#team-workflows"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-2.5 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                View Team Workflows
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
