"use client";

import Image from "next/image";
import Link from "next/link";

export default function MultiJurisdictionalAndGovernedAI() {
  return (
    <section className="w-full bg-[#F4F7FA] py-[90px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[608px_608px]">
          {/* Left Column: Image */}
          <div className="flex w-full justify-center lg:justify-start">
            <div className="relative aspect-[608/456] w-full max-w-[608px] overflow-hidden rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/about-zoiko-assure/reviewing-international-frameworks.png"
                alt="Reviewing international frameworks and governed AI operations"
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
                Multi-Jurisdictional by Design
              </h2>
              <p className="mt-4 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Global compliance is not a translation exercise. The same
                business activity can be governed differently across
                jurisdictions, entities and effective periods. Zoiko Assure
                preserves those differences, structuring baselines while
                exposing jurisdiction-specific deltas and review requirements.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-[24px] font-semibold leading-[28.8px] text-[#0A2540]">
                Governed AI
              </h2>
              <p className="mt-4 mb-6 text-[16px] font-normal leading-[25.6px] text-[#5F6B7A]">
                Zoiko Assure treats AI as a governed capability inside a
                regulated operating environment. It emphasizes source
                grounding, explainability, explicit uncertainty, human
                accountability, decision provenance, and change governance. AI
                augments compliance work; it does not replace professional
                judgment.
              </p>
            </div>

            <div>
              <Link
                href="/jurisdictions"
                className="inline-flex items-center justify-center rounded-[4px] border border-[#D58324] px-6 py-3 text-[16px] font-semibold leading-[25.6px] text-[#D58324] transition-colors duration-200 hover:bg-[#D58324]/10"
              >
                Explore Jurisdictions & AI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

