"use client";

import Image from "next/image";
import Link from "next/link";

export default function IntegrationAiReviewSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Text */}
          <div className="flex flex-col items-start max-w-[608px]">
            <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
              Every Connected Source Creates a Responsibility Boundary.
            </h2>

            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Explain connected-system responsibility and provenance for data ingress and egress across integrations.
            </p>

            <h2 className="mt-8 md:mt-10 text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
              AI-Assisted Work Must Respect Data Responsibilities.
            </h2>

            <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
              Clarify data used in AI-assisted workflows and accountable review. AI models do not supplant verified terms or privacy compliance.
            </p>

            <div className="mt-6">
              <Link
                href="/trust-center/responsible-ai"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] bg-transparent px-[25px] py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
              >
                Explore Responsible AI
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/data-governance/integration-ai-review.png"
                alt="Third Party Integration and AI Data Review"
                fill
                sizes="(max-width: 1024px) 100vw, 608px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
