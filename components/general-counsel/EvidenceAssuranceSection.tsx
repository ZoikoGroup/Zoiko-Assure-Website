"use client";

import Image from "next/image";
import Link from "next/link";

export default function EvidenceAssuranceSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start">
            <div>
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Evidence and Assurance Boundaries
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Show operational proof, gaps, and evaluations separately. The presence of an artifact is not evidence of its adequacy. Assurance evaluations require verified facts.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Governed AI Assistance for Counsel
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                AI provides source-grounded summaries, highlights uncertainty, and suggests review routes. It does not replace the General Counsel&apos;s accountable decision.
              </p>

              <div className="mt-6">
                <Link
                  href="/governed-ai"
                  className="inline-flex items-center justify-center rounded-[4px] border border-[#D97637] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D97637] transition-colors duration-200 hover:bg-[#D97637]/10"
                >
                  Explore Governed AI
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Specimen Image */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="relative aspect-[576/432] w-full max-w-[576px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/general-counsel/governed-ai-evidence-ui.png"
                alt="Governed AI and Evidence UI"
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
