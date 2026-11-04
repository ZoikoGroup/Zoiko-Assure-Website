"use client";

import Link from "next/link";

export default function ObligationToProofCtaSection() {
  return (
    <section className="w-full bg-[#0A2540] py-16 sm:py-20 lg:py-24 text-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8">
        {/* Eyebrow */}
        <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.08em] text-[#F58220]">
          BY ROLE / CHIEF COMPLIANCE OFFICER
        </p>

        {/* Heading */}
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.18]">
          Bring Obligation-to-Proof Into Your Compliance Program.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 max-w-[720px] text-[15px] sm:text-[16px] leading-[1.6] text-[#D9E2EC]">
          See how ZoikoAssure connects regulatory context, operational ownership, evidence and human review across the assurance lifecycle.
        </p>

        {/* Action Button */}
        <div className="mt-6 sm:mt-8">
          <Link
            href="/request-demo"
            className="inline-flex items-center justify-center rounded-[4px] bg-[#F58220] px-6 py-3 text-[15px] font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#e0751a]"
          >
            Request a Demo
          </Link>
        </div>

        {/* Micro-copy Disclaimer */}
        <p className="mt-6 sm:mt-8 text-[12px] text-[#94A3B8]">
          ZoikoAssure provides regulatory intelligence and assurance technology. Outputs, including AI-assisted outputs, are not legal advice or independent determinations of compliance.
        </p>
      </div>
    </section>
  );
}
