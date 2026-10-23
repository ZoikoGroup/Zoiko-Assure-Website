"use client";

import Image from "next/image";
import Link from "next/link";

export default function AIGovernanceHero() {
  return (
    <section className="relative w-full bg-[#0A2540] pt-20 pb-20 text-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[672px_480px] lg:gap-16">
          {/* Left Column: Eyebrow, Heading, Paragraph, CTA Buttons, Quick Links, Microcopy */}
          <div className="flex flex-col items-start">
            <span className="text-[14px] font-semibold uppercase leading-[22.4px] tracking-[1px] text-[#F58220]">
              Solutions / AI Governance
            </span>

            <h1 className="mt-4 text-3xl font-semibold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[61.6px]">
              Govern AI decisions with evidence and accountability.
            </h1>

            <p className="mt-6 max-w-[672px] text-[18px] font-normal leading-[28.8px] text-[#D9E2EC]">
              As AI becomes part of regulated operations, organizations need to understand which requirements apply, who owns the controls, what evidence exists and which decisions still need review. ZoikoAssure is designed to connect those questions from authoritative regulatory sources through defensible assurance.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-[#e0751a]"
              >
                Request a Demo
              </Link>
              <a
                href="#ai-governance-workflow"
                className="inline-flex items-center justify-center rounded-[4px] border border-white px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore the AI Governance Workflow
              </a>
            </div>

            {/* Quick Links */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                href="/regulatory-exposure"
                className="text-[14px] font-normal leading-[22.4px] text-[#F58220] underline transition-colors hover:text-[#e0751a]"
              >
                Assess Your Regulatory Exposure
              </Link>
              <Link
                href="/governed-ai"
                className="text-[14px] font-normal leading-[22.4px] text-[#F58220] underline transition-colors hover:text-[#e0751a]"
              >
                Explore Governed AI
              </Link>
              <Link
                href="/governed-ai#responsible-ai"
                className="text-[14px] font-normal leading-[22.4px] text-[#F58220] underline transition-colors hover:text-[#e0751a]"
              >
                Explore Responsible AI
              </Link>
            </div>

            {/* Microcopy footnote */}
            <p className="mt-4 pb-4 text-[12px] font-normal leading-[19.2px] text-[#A0AAB2]">
              Source-grounded · Jurisdiction-aware · Evidence-first · Human-accountable
            </p>
          </div>

          {/* Right Column: Hero Graphic Card */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[480/317] w-full max-w-[480px] overflow-hidden rounded-[8px] bg-white p-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.5)]">
              <div className="relative h-full w-full overflow-hidden rounded">
                <Image
                  src="/images/ai-governance/hero-framework.png"
                  alt="Illustrative AI Governance Framework"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
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
