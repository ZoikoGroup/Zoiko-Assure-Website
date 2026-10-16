"use client";

import Link from "next/link";

export default function PolicyScopeAndDecisionProvenanceSection() {
  return (
    <section className="w-full bg-[#F4F7FA] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Policy Scope & Permission Controls */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
              Policy Scope &amp; Permission Controls
            </h2>

            <p className="mt-4 max-w-[500px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
              Authorization, exclusions, and gated controls ensure AI assists only in permitted task families. Sensitive legal or confidential tasks are explicitly excluded where required by policy.
            </p>

            <div className="mt-6 sm:mt-8">
              <Link
                href="#policy-illustration"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-3 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                View policy illustration
              </Link>
            </div>
          </div>

          {/* Right Column: Decision Provenance & Audit Reconstruction */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#0A2540] lg:leading-[1.25]">
              Decision Provenance &amp; Audit Reconstruction
            </h2>

            <p className="mt-4 max-w-[500px] text-base font-normal leading-[1.65] text-[#5A6E85] sm:text-[16px]">
              See what was suggested, reviewed, and decided. A chronological audit specimen shows source lineage and human decisions without exposing private prompts or hidden chain-of-thought in the public site.
            </p>

            <div className="mt-6 sm:mt-8">
              <Link
                href="/platform/evidence-provenance"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#F58220] bg-white px-6 py-3 text-[15px] font-semibold text-[#F58220] transition-colors duration-200 hover:bg-[#F58220]/5"
              >
                Explore evidence
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
