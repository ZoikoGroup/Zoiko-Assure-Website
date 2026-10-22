"use client";

import Image from "next/image";
import Link from "next/link";

export default function TransformationGovernanceRACISection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Headings, Descriptions, and CTA */}
          <div className="flex flex-col justify-start">
            <div>
              <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540] md:text-[24px]">
                Transformation Governance & RACI
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Define responsibility, escalation, approvals and independence across counsel, compliance, operations, and audit owners.
              </p>
            </div>

            <div className="mt-10 md:mt-12">
              <h2 className="text-2xl font-semibold leading-[28.8px] text-[#0A2540] md:text-[24px]">
                Illustrative Interactive Scenario
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Walk through an entity acquisition or carve-out example step-by-step. All data shown is sanitized and illustrative to demonstrate workflow capability.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
              >
                Try Sample Workflow
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Diagram Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-[576/432] w-full max-w-[576px] overflow-hidden rounded-lg border border-[#D9E2EC] bg-white shadow-lg">
              <Image
                src="/images/transformation/governance-raci-scenario-ui.png"
                alt="Governance RACI and Scenario Walkthrough"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 576px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
